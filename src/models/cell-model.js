import { BallModel } from './ball-model';
import { ObservableModel } from './observable-model';
export class CellModel extends ObservableModel {
  constructor(config) {
    super('CellModel');
    this.config = config;
    this._selected = false;
    this._row = null;
    this._col = null;
    this._ball = null;
    this.makeObservable();
  }

  get selected() {
    return this._selected;
  }

  set selected(value) {
    return (this._selected = value);
  }

  get row() {
    return this._row;
  }

  get col() {
    return this._col;
  }

  get ball() {
    return this._ball;
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

  createBall(ball) {
    this._ball = ball
  }

  initializeBallComponent() {
    // const colorsType=
  }

  initialize() {
    this._row = this.config.row;
    this._col = this.config.col;
  }

  selectedCell() {
    this.ball.active = !this.ball.active;
    this._selected = !this._selected

  }

  destroy() { }

  removeBall() {

    const ball = this.ball
    this.ball.destroy()
    this.buildBall = null
    return ball

  }
}
