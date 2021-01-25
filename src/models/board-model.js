import * as PF from 'pathfinding';
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
    this.matrix = null;
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
  moveBall(fromCell, toCell) {
    const path = this.getPath(fromCell, toCell);
    return path;
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
    console.warn(rowFrom, rowTo);
    const matrix = this.buildBinaryMatrix();
    this.matrix = matrix;
    const grid = new PF.Grid(matrix);
    const finder = new PF.AStarFinder();
    const path = finder.findPath(rowFrom, colFrom, rowTo, colTo, grid);
    return path;
  }

  matchCheck() {}
}
