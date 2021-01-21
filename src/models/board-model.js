import { returnRandomNum } from '../utils';
import { CellModel } from './cell-model';
import { ObservableModel } from './observable-model';

export class BoardModel extends ObservableModel {
  constructor(config) {
    super('BoardModel');
    this.config = config;
    this._cells = null;
    this._emptyCells = [];
    this._defaultBallsCells = [];

    this.makeObservable();
  }

  get cells() {
    return this._cells;
  }

  set cells(value) {
    return this._cells;
  }

  get emptyCells() {
    return this._emptyCells;
  }

  set defaultBallsCells(value) {
    this._defBallsCells = value;
  }

  get defaultBallsCells() {
    return this._defaultBallsCells;
  }

  initialize() {
    this.initializeCells();
  }

  initializeCells() {
    const cells = [];
    const { size } = this.config;
    for (let i = 0; i < size; i++) {
      cells[i] = [];
      for (let j = 0; j < size; j++) {
        const cellConfig = {
          row: j,
          col: i,
          cellSize: this.config.cellSize,
        };
        const cell = new CellModel(cellConfig);
        cells[i].push(cell);
        this.emptyCells.push(cell);
      }
    }
    this._cells = cells;
    this.generatorBallInCell();
  }

  buildFirstCells() {
    const defCells = [];
    const count = this.config.firstBallCount;
    for (let i = 0; i < count; i++) {
      defCells.push(this.crateDefCell());
    }
    return defCells;
  }

  crateDefCell() {
    const selectCellIndex = returnRandomNum(this.emptyCells.length - 1);
    const cell = this.emptyCells[selectCellIndex];
    this.emptyCells.splice(selectCellIndex, 1);
    return cell;
  }

  generatorBallInCell() {
    const cells = this.buildFirstCells();
    cells.forEach((cell) => {
      cell.buildBall();
      //  this.searchSelectedCell(); /// jnjel vercacneluc heto
    });
  }

  searchSelectedCell() {
    const length = this.cells.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (this.cells[i][j].selected) {
          return this.cells[i][j];
        } else {
          return false;
        }
      }
    }
  }

  unSelectedCells() {
    const length = this.cells.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (this.cells[i][j].selected) {
          this.cells[i][j].selected = false;
        }
      }
    }
  }
}
