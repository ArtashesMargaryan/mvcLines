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
    // this.generatorBallInCell();
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
    const selectCellIndex = returnRandomNum(this.emptyCells.length);
    const cell = this.emptyCells[selectCellIndex];
    this.emptyCells.splice(selectCellIndex, 1);
    return cell;
  }

  generatorBallInCell() {
    const cells = this.buildFirstCells();
    console.warn(cells);
    cells.forEach((cell) => {
      cell.buildBall();
    });
  }
}
