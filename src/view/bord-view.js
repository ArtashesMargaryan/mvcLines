import * as PIXI from 'pixi.js';
import { CellView } from './cell-view';
import { getGameCofig } from '../const-config/const-config';

export class Board extends PIXI.Container {
  constructor() {
    super();
    this.cells = [];
    this._build();
  }

  _build() {
    const boxSize = getGameCofig().board.size;
    this.buildBox(boxSize);
    this.cellRower();
  }

  buildBox(size) {
    for (let i = 0; i < size; i++) {
      this.cells[i] = [];
      for (let j = 0; j < size; j++) {
        console.warn('hasa');
        const cell = new CellView(i, j);
        this.cells[i].push(cell);
        this.addChild(cell);
      }
    }
  }

  cellRower() {
    this.cells.forEach((cells, indexX) => {
      cells.forEach((cell, indexY) => {
        cell.x = indexX * 120;
        cell.y = indexY * 120;
      });
    });
  }
}
