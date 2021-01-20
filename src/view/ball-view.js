import { Container, Graphics } from 'pixi.js';

export class BallView extends Container {
  constructor(row, col, uId) {
    super();
    this.row = row;
    this.col = col;
    this.uId = uId;
    this._buildBall();
  }

  _buildRec() {
    const gr = new Graphics();
    gr.lineStyle(10, 0xffbd01, 1);
    gr.beginFill(0xc34288, 1);
    gr.drawCircle(400, 250, 50);
    gr.endFill();
    this.addChild(gr);
  }
}
