import { lego } from '@armathai/lego';
import * as PIXI from 'pixi.js';
import { getCellSize } from '../const-config/const-config';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { CellView } from './cell-view';

export class Board extends PIXI.Container {
  constructor(config) {
    super();
    console.warn(config);
    this.cells = null;

    lego.event.on(ModelEvents.BoardModel.CellsUpdate, this._onCellsUpdate, this);
  }

  buildCells(newCells) {
    const cells = [];
    const cellSize = getCellSize();
    newCells.forEach((cellsRow, indexI) => {
      cells[indexI] = [];
      cellsRow.forEach((cellModel, indexJ) => {
        const cell = new CellView(cellModel);
        this.addChild(cell);
        cell.x = indexI * 1.2 * cellSize;
        cell.y = indexJ * 1.2 * cellSize;
        cells[indexI].push(cell);
      });
    });
  }

  _onCellsUpdate(newCells, oldCells) {
    this.buildCells(newCells);
    lego.event.emit(ViewEvents.BoardView.CellCreateCommit);
  }
}
