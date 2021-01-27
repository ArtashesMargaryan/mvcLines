import * as PF from 'pathfinding';
import {
  contains,
  findHorizontal,
  findMainDiagonal,
  findSecondaryDiagonal,
  findVertical,
  returnRandomNum,
} from '../utils';
import { CellModel } from './cell-model';
import { ObservableModel } from './observable-model';
export class BoardModel extends ObservableModel {
  constructor(config) {
    super('BoardModel');
    this.config = config;
    this._cells = null;
    this._emptyCells = [];
    this._defaultBallsCells = [];
    this.matrix = null;
    this._combinations = [];
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

  getCellByUId(uuid) {
    return this.cells.flat().find((cell) => cell.uuid === uuid);
  }

  getActiveCell() {
    return this.cells.flat().find((cell) => cell.selected === true);
  }

  initializeCells() {
    const cells = [];
    const { size } = this.config;
    for (let i = 0; i < size; i++) {
      cells[i] = [];
      for (let j = 0; j < size; j++) {
        const cellConfig = {
          row: i,
          col: j,
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

  createNextBallInCell(ballsModel) {
    console.warn(this._emptyCells.length);
    const index = returnRandomNum(this._emptyCells.length - 1);
    console.log(this._emptyCells[index]);
    this._emptyCells[index].buildBall(ballsModel);
    this.updateEmptyCells();
  }

  moveBall(fromCell, toCell, resolve) {
    const path = this.getPath(fromCell, toCell);
    if (path.length < 1) {
      return resolve();
    }
    this.moveAnimBall(path, resolve);
    return path;
  }

  updateEmptyCells() {
    this._emptyCells = [];
    this._cells.forEach((cells) => {
      cells.forEach((cell) => {
        if (cell.ball === null) {
          this._emptyCells.push(cell);
        }
      });
    });
  }

  moveAnimBall(path, resolve) {
    const anim = setInterval(() => {
      if (path.length <= 2) {
        clearInterval(anim);
        resolve();
      }
      const i1 = path[0][0];
      const j1 = path[0][1];
      const i2 = path[1][0];
      const j2 = path[1][1];
      const ball = this._cells[i1][j1].removeBall();
      this._cells[i2][j2].createBall(ball);
      path.shift();
      // console.warn(this.emptyCells.length);
    }, 100);
  }

  buildBinaryMatrix() {
    const matrix = [];
    for (let i = 0; i < this._cells.length; i++) {
      matrix[i] = [];
      for (let j = 0; j < this._cells.length; j++) {
        if (this._cells[j][i].ball) {
          matrix[i][j] = this._cells[j][i].ball.type + 1;
        } else {
          matrix[i][j] = 0;
        }
      }
    }
    return matrix;
  }

  getPath(from, to) {
    const { row: rowTo, col: colTo } = to.config;
    const { row: rowFrom, col: colFrom } = from.config;
    const matrix = this.buildBinaryMatrix();
    this.matrix = matrix;
    const grid = new PF.Grid(matrix);
    const finder = new PF.AStarFinder();
    const path = finder.findPath(rowFrom, colFrom, rowTo, colTo, grid);
    return path;
  }

  matchCheck() {
    const matrix = this._cells;
    this._combinations.length = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const cell = matrix[i][j];
        if (cell.ball) {
          const sd = findSecondaryDiagonal(matrix, i, j, cell.ball.type, [cell]);
          if (sd) {
            if (!this._comboAlreadyExists(sd)) {
              this._combinations.push(sd);
            }
          }
          const h = findHorizontal(matrix, i, j, cell.ball.type, [cell]);
          if (h) {
            if (!this._comboAlreadyExists(h)) {
              this._combinations.push(h);
            }
          }

          const v = findVertical(matrix, i, j, cell.ball.type, [cell]);
          if (v) {
            if (!this._comboAlreadyExists(v)) {
              this._combinations.push(v);
            }
          }
          const md = findMainDiagonal(this._cells, i, j, cell.ball.type, [cell]);
          if (md) {
            if (!this._comboAlreadyExists(md)) {
              this._combinations.push(md);
            }
          }
        }
      }
    }
    return this._combinations;
  }

  _comboAlreadyExists(combo) {
    const comboString = combo.map((cell) => `${cell.row}.${cell.col}`);
    for (let i = 0; i < this._combinations.length; i++) {
      const c = this._combinations[i].map((cell) => `${cell.row}.${cell.col}`);
      if (contains(c, comboString)) {
        return true;
      }
    }

    return false;
  }

  _destroyBalls() {
    this._combinations.forEach((combo) => {
      combo.forEach((cell, index) => {
        setTimeout(() => {
          cell.removeBall();
        }, index * 80 + 300);
      });
    });
  }
}
