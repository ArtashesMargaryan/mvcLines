import { BallView } from './ball-view';

export class NextBall extends PIXI.Container {
  constructor(balls) {
    super();
    this.balls = balls;
    this._build();
  }

  _build() {
    this.createBalls();
  }
  createBalls() {
    this.balls.forEach((BallModel, index) => {
      const ballView = new BallView(BallModel);
      ballView.x = index * 120;
      this.addChild(ballView);
    });
  }
}
