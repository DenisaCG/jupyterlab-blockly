import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  ILayoutRestorer
} from '@jupyterlab/application';
import { WidgetTracker } from '@jupyterlab/apputils';
import { IRenderMimeRegistry } from '@jupyterlab/rendermime';
import { ISettingRegistry } from '@jupyterlab/settingregistry';
// import { ITranslator } from '@jupyterlab/translation';

import { BlocklyEditorFactory } from './factory';
import { IBlocklyManager } from './token';
import { BlocklyEditor } from './widget';

/**
 * The name of the factory that creates the editor widgets.
 */
const FACTORY = 'Blockly editor';

/**
 * The id of the translation plugin.
 */
 const PLUGIN_ID = '@jupyterlab/translation-extension:plugin';

/**
 * Initialization data for the jupyterlab-blocky extension.
 */
const plugin: JupyterFrontEndPlugin<IBlocklyManager> = {
  id: 'jupyterlab-blocky:plugin',
  autoStart: true,
  requires: [ILayoutRestorer, IRenderMimeRegistry, ISettingRegistry],
  provides: IBlocklyManager,
  activate: (
    app: JupyterFrontEnd,
    restorer: ILayoutRestorer,
    rendermime: IRenderMimeRegistry,
    settings: ISettingRegistry
  ): IBlocklyManager => {
    console.log('JupyterLab extension jupyterlab-blocky is activated!');

    // Namespace for the tracker
    const namespace = 'jupyterlab-blocky';

    // Creating the tracker for the document
    const tracker = new WidgetTracker<BlocklyEditor>({ namespace });

    function getSetting(setting: ISettingRegistry.ISettings): string {
      // Read the settings and convert to the correct type
      let currentLocale: string = setting.get('locale').composite as string;
      return currentLocale;
    }

    // Wait for the application to be restored and
    // for the settings for this plugin to be loaded
    settings
    .load(PLUGIN_ID)
    .then(setting => {
      // Read the settings
      let currentLocale = getSetting(setting);

      // Listen for our plugin setting changes using Signal
     setting.changed.connect(getSetting);

      // Get new language and call the function that modifies the language name accordingly.
      // Also, make the transformation to have the name of the language package as in Blockly.
      let language = currentLocale[currentLocale.length - 2].toUpperCase() + currentLocale[currentLocale.length - 1].toLowerCase();
      console.log(`Current Language : '${language}'`);

      // LOGIC to transmit language as a paramtere of type string.
    });
      
    // Handle state restoration.
    if (restorer) {
      // When restoring the app, if the document was open, reopen it
      restorer.restore(tracker, {
        command: 'docmanager:open',
        args: widget => ({ path: widget.context.path, factory: FACTORY }),
        name: widget => widget.context.path
      });
    }

    // Creating the widget factory to register it so the document manager knows about
    // our new DocumentWidget
    const widgetFactory = new BlocklyEditorFactory({
      name: FACTORY,
      modelName: 'text',
      fileTypes: ['json'],
      defaultFor: ['json'],

      // Kernel options, in this case we need to execute the code generated
      // in the blockly editor. The best way would be to use kernels, for
      // that reason, we tell the widget factory to start a kernel session
      // when opening the editor, and close the session when closing the editor.
      canStartKernel: true,
      preferKernel: true,
      shutdownOnClose: true,

      // The rendermime instance, necessary to render the outputs
      // after a code execution.
      rendermime: rendermime,
    });

    // Add the widget to the tracker when it's created
    widgetFactory.widgetCreated.connect((sender, widget) => {
      // Notify the instance tracker if restore data needs to update.
      widget.context.pathChanged.connect(() => {
        tracker.save(widget);
      });
      tracker.add(widget);
    });
    // Registering the widget factory
    app.docRegistry.addWidgetFactory(widgetFactory);

    return widgetFactory.manager;
  }
};

export default plugin;
