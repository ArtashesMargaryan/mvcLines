import { getColors } from '../const-config/const-config';
import { returnRandomNum } from '../utils';
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

  configs(type) {
    const colors = getColors();

    const typeBall = colors[returnRandomNum(colors.length - 1)];
    const config = { row: this._row, col: this._col, type: type };
    return config;
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

  buildBall(config = null) {
    if (config === null) {
      config = this.configs;
    }
    this._ball = new BallModel(config);
  }

  createBall(ball) {
    // this._selected = !this._selected;
    // this.selectedCell();
    this.ball = ball;
  }

  initializeBallComponent() {
    // const colorsType=
  }

  initialize() {
    this._row = this.config.row;
    this._col = this.config.col;
  }

  selectedCell() {
    if (this.ball) {
      this.ball.active = !this.ball.active;
    }
    this._selected = !this._selected;
  }

  destroy() {}

  removeBall() {
    this.ball.active = !this.ball.active;
    const ball = this.ball;
    this._ball.destroy();
    this._ball = null;
    return ball;
  }
}
