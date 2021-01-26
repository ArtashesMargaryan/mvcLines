import { getNextBallsCount } from '../const-config/const-config';
import { BallModel } from './ball-model';
import { ObservableModel } from './observable-model';

export class NextBallsModel extends ObservableModel {
  constructor() {
    super('NextBallsModel');
    this._nextBalls = null;
    this.makeObservable();
  }

  initialize() {
    this.initializeNextBall();
  }

  get nextBalls() {
    return this._nextBalls;
  }
  set nextBalls(value) {
    return (this._nextBalls = value);
  }

  configs() {
    const colors = getColors();

    const typeBall = colors[returnRandomNum(colors.length - 1)];
    const config = { row: 0, col: 0, type: typeBall };
  }

  initializeNextBall() {
    const count = getNextBallsCount();
    const balls = [];

    for (let i = 0; i < count; i++) {
      balls.push(new BallModel(this.configs));
    }
    this._nextBalls = balls;
  }
}
