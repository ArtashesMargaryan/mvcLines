import { BallModel } from './ball-model';
import { ObservableModel } from './observable-model';
export class CellModel extends ObservableModel {
  constructor(config) {
    super('CellModel');
    this.config = config;
    this._selected = false;
    this._row = config.row;
    this._col = config.col;
    this._ball = null;
    this.makeObservable();
  }

  get row() {
    return this._row;
  }
  get col() {
    return this._col;
  }

  get ball() {
    return _ball;
  }
  get cellSize() {
    return 100;
  }

  set ball(value) {
    this._ball = value;
  }

  buildBall() {
    const config = { row: this._row, col: this._col, type: 1 };
    this._ball = new BallModel(config);
  }

  initializeBallComponent() {
    // const colorsType=
  }

  initialize() {
    this._row = this.config.row;
    this._col = this.config.col;
  }

  destroy() {}
}
