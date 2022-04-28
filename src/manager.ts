import { JSONObject } from '@lumino/coreutils';

import * as Blockly from 'blockly/core';

import BlocklyPy from 'blockly/python';
import * as En from 'blockly/msg/en';
// import * as Fr from 'blockly/msg/fr';

import { IBlocklyManager } from './token';
import { TOOLBOX } from './utils';

export class BlocklyManager implements IBlocklyManager {
  private _toolbox: JSONObject;
  private _activeGenerator: Blockly.Generator;
  private _generators: Map<string, Blockly.Generator>;
  private _language: JSONObject; // Ideally, it should be of type Blockly.Msg

  /**
   * Constructor of BlocklyEditorFactory.
   *
   * @param options Constructor options
   */
  constructor() {
    this._toolbox = TOOLBOX;
    this._activeGenerator = BlocklyPy;
    this._generators = new Map<string, Blockly.Generator>();
    this._language = En;
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

  registerToolbox(value: JSONObject): void {
    this._toolbox = value;
  }

  registerBlocks(blocks: JSONObject[]): void {
    Blockly.defineBlocksWithJsonArray(blocks);
  }

  registerGenerator(kernel: string, generator: Blockly.Generator): void {
    this._generators.set(kernel, generator);
  }

  language(language: JSONObject) : void{
    // issue with Blockly.setLocale in Typescript : https://github.com/google/blockly/issues/5818
    // work-arund for it :
    // @ts-ignore
    Blockly.setLocale(this._language);
  }
}
