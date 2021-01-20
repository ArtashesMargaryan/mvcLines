import { lego } from '@armathai/lego';
import * as PIXI from 'pixi.js';
import { ModelEvents } from '../events/model-events';

export class Board extends PIXI.Container {
  constructor(config) {
    super();
    // config.cells = []
    // this.cells = [];
    // this.config = config;
    // const cellSize = config.cellSize;
    // this._build(cellSize);
    // console.warn(this.config);

    lego.event.on(ModelEvents.BoardModel.CellsUpdate, this._onCellsUpdate, this);
  }

  // _build(cellSize) {
  //   this.buildBox(cellSize);
  //   this.cellRower();
  // }

  // buildBox(cellSize) {
  //   const cells = this.config.cells;
  //   cells.forEach((cellsRow, indexI) => {
  //     this.cells[indexI] = [];
  //     cellsRow.forEach((cellModel, indexJ) => {
  //       const cell = new CellView(cellModel);
  //       this.addChild(cell);
  //       cell.x = indexI * 1.2 * cellSize;
  //       cell.y = indexJ * 1.2 * cellSize;
  //       this.cells[indexI].push(cell);
  //     });
  //   });
  // }

  // cellRower() {
  //   this.cells.forEach((cells, indexX) => {
  //     cells.forEach((cell, indexY) => {
  //       cell.x = indexX * 105;
  //       cell.y = indexY * 105;
  //     });
  //   });
  // }

  _onCellsUpdate(newCells, oldCells) {
    // console.warn('asas');
    console.warn(newCells);
  }
}
