import { Container, Graphics } from 'pixi.js';
import { getColors } from '../const-config/const-config';

export class BallView extends Container {
  constructor(params) {
    super();
    this.row = null;
    this._scale = 1;
    this._uuid = params.uuid;
    this.type = params.type;
    this._buildRec();
    // lego.event.on(ModelEvents.BallModel.ActiveUpdate, this._onSelectBall, this);
  }

  get scaleBall() {
    return this._scale;
  }

  // set scale(value) {
  //   return (this._scale = value);
  // }

  get uuid() {
    return this._uuid;
  }

  _buildRec() {
    const colors = getColors();
    const color = colors[this.type];
    const gr = new Graphics();
    gr.lineStyle(10, 0xffbd01, 1);
    gr.beginFill(color, 1);
    gr.drawCircle(0, 0, 40);
    gr.endFill();
    this.addChild(gr);
  }

  _onSelectBall() {
    console.warn(this._scale);
    if (this._scale === 1) {
      this.scale.set((this._scale = 0.8));
    } else {
      this.scale.set((this._scale = 1));
    }
    return;
  }

  selected() {
    this._onSelectBall();
  }

  unselect() {
    this.scale.set(1);
  }
}
