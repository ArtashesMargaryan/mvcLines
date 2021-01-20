import * as PIXI from 'pixi.js';
import { CellView } from './cell-view';

export class Board extends PIXI.Container {
  constructor(config) {
    super();
    this.cells = [];
    this.config = config;
    console.warn(config);
    this._build();
  }

  _build() {
    this.buildBox();
    this.cellRower();
  }

  buildBox() {
    const cells = this.config.cells;
    cells.forEach((cellsRow, indexI) => {
      this.cells[indexI] = [];
      cellsRow.forEach((cellModel, indexJ) => {
        const cell = new CellView(cellModel);
        this.addChild(cell);
        cell.x = indexI * 120;
        cell.y = indexJ * 120;
        this.cells[indexI].push(cell);
      });
    });
  }

  cellRower() {
    this.cells.forEach((cells, indexX) => {
      cells.forEach((cell, indexY) => {
        cell.x = indexX * 105;
        cell.y = indexY * 105;
      });
    });
  }
}
