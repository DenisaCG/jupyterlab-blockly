import { JSONObject } from '@lumino/coreutils';
import { ISignal, Signal } from '@lumino/signaling';

import * as Blockly from 'blockly';

import BlocklyPy from 'blockly/python';
import * as En from 'blockly/msg/en';

import { IBlocklyManager } from './token';
import { TOOLBOX } from './utils';

export class BlocklyManager implements IBlocklyManager {
  private _toolbox: JSONObject;
  private _activeGenerator: Blockly.Generator;
  private _generators: Map<string, Blockly.Generator>;
  private _language: string;
  private _changed: Signal<BlocklyManager, void>;

  /**
   * Constructor of BlocklyEditorFactory.
   *
   * @param options Constructor options
   */
  constructor() {
    this._toolbox = TOOLBOX;
    this._activeGenerator = BlocklyPy;
    this._generators = new Map<string, Blockly.Generator>();
    this._language = 'En'; // By default we choose English.

    this._changed = new Signal<BlocklyManager, void>(this);
  }

  get toolbox(): JSONObject {
    return this._toolbox;
  }

  set activeGenerator(name: string) {
    this._activeGenerator = this._generators.get(name);
  }

  get generator(): Blockly.Generator {
    return this._activeGenerator;
  }

  get changed(): ISignal<BlocklyManager, void> {
    return this._changed;
  }

  set language(language: string) {
    this._language = language;
  }

  get language(): string {
    return this._language;
  }

  registerToolbox(value: JSONObject): void {
    this._toolbox = value;
  }

  registerBlocks(blocks: JSONObject[]): void {
    Blockly.defineBlocksWithJsonArray(blocks);
  }

  registerGenerator(kernel: string, generator: Blockly.Generator): void {
    this._generators.set(kernel, generator);
  }

  setlanguage(language: string): void {
    this.language = language;
    Private.importLanguageModule(language);
  }
}

namespace Private {
  export async function importLanguageModule(language: string) {
    let module: Promise<any>;
    switch (language) {
      case 'En':
        module = import('blockly/msg/en');
        break;
      case 'Es':
        module = import('blockly/msg/es');
        break;
      case 'Fr':
        module = import('blockly/msg/fr');
        break;
      // Complete with all the cases.
      // List of languages in blockly: https://github.com/google/blockly/tree/master/msg/js
      // List of languages in Lab: https://github.com/jupyterlab/language-packs/tree/master/language-packs
      default:
        console.warn('Language not found. Loading english');
        module = Promise.resolve(En);
        break;
    }

    module.then(lang => {
      // @ts-ignore
      Blockly.setLocale(lang);
    });
  }
}
