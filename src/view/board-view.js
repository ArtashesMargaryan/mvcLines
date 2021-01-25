import { lego } from '@armathai/lego';
import * as PIXI from 'pixi.js';
import { getCellSize } from '../const-config/const-config';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { CellView } from './cell-view';

export class Board extends PIXI.Container {
  constructor(config) {
    super();
    this.cells = null;
    // lego.event.on(ModelEvents.CellModel.BallUpdate, this.onBallActiveUpdate, this);
    lego.event.on(ModelEvents.BoardModel.CellsUpdate, this._onCellsUpdate, this);
  }

  buildCells(newCells) {
    this.cells = [];
    const cellSize = getCellSize();
    newCells.forEach((cellsRow, indexI) => {
      const cells = [];

      cellsRow.forEach((cellModel, indexJ) => {
        const cell = new CellView(cellModel);
        this.addChild(cell);
        cell.x = indexI * 1.2 * cellSize;
        cell.y = indexJ * 1.2 * cellSize;
        cells.push(cell);
      });
      this.cells.push(cells);
    });
  }

  _onCellsUpdate(newCells, oldCells) {
    this.buildCells(newCells);
    lego.event.emit(ViewEvents.BoardView.CellCreateCommit);
  }

  onBallActiveUpdate(value, prevValue, uuid) {
    const cell = this.searchCellByBallId(uuid);
    // cell.selected();
    console.warn(cell);
  }

  searchCellByBallId(ballId) {
    const cells = this.cells;
    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells.length; j++) {
        if (cells[i][j].getCellBallId() === ballId) {
          return cells[i][j];
        }
      }
    }
  }
}
