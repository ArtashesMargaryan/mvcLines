import { lego } from '@armathai/lego';
import { Container, Graphics } from 'pixi.js';
import { getColors } from '../const-config/const-config';
import { ModelEvents } from '../events/model-events';
import { returnRandomNum } from '../utils';

export class BallView extends Container {
  constructor(params) {
    super();
    this.row = params.c;
    this._scale = 1;
    this._uuid = params.uuid;
    console.warn(params);
    this.type = params.type ? params.type : null
    // this.row = row;
    // this.col = col;
    // this.uId = uId;
    lego.event.on(ModelEvents.BallModel.ActiveUpdate, this._onSelectBall, this);
    this._buildRec();
  }

  _buildRec() {
    const colors = getColors();
    let color
    if (!this.type) {
      color = colors[returnRandomNum(colors.length - 1)];
    } else {
      color = colors[this.type];

    }
    const gr = new Graphics();
    gr.lineStyle(10, 0xffbd01, 1);
    gr.beginFill(color, 1);
    gr.drawCircle(0, 0, 40);
    gr.endFill();

    this.addChild(gr);
  }

  _onSelectBall(newValue, oldValue, uuid) {
    console.warn(uuid);

    if (newValue && this._uuid == uuid) {
      this.scale.set(0.8);
    } else {
      this.scale.set(1);
    }
  }
}
