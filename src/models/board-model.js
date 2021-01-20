import { returnRandomNum } from '../utils';
import { CellModel } from './cell-model';
import { ObservableModel } from './observable-model';

export class BoardModel extends ObservableModel {
  constructor(config) {
    super();
    this.config = config;
    this._cells = null;
    this.emptyCells = [];
    this.defBalls = [];
    this.initializeCellModel();
    this.buildFirstBalls();
  }

  get cells() {
    return this._cells;
  }

  get emptyCellsArray() {
    return this.emptyCells;
  }

  initializeCellModel() {
    this._cells = [];

    const { size } = this.config;
    for (let i = 0; i < size; i++) {
      this._cells[i] = [];
      for (let j = 0; j < size; j++) {
        const cellConfig = {
          row: j,
          col: i,
        };
        const cell = new CellModel(cellConfig);
        this._cells[i].push(cell);
        this.emptyCells.push(cell);
      }
    }
  }

  buildFirstBalls() {
    const count = this.config.firstBallCount;
    for (let i = 0; i < count; i++) {
      this.defBalls.push(this.crateDefBall());
    }
    console.warn(this.defBalls);
  }

  crateDefBall() {
    const selectCellIndex = returnRandomNum(this.emptyCells.length);
    const cell = this.emptyCells[selectCellIndex];
    this.emptyCells.splice(selectCellIndex, 1);
    return cell;
  }
}
