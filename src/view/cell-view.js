import { lego } from '@armathai/lego';
import { Container, Graphics } from 'pixi.js';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { BallView } from './ball-view';

export class CellView extends Container {
  constructor(model) {
    super();
    this.interactive = true;
    this.row = model.row;
    this.col = model.col;
    this.uId = model.uuid;
    this.model = model;
    this._buildRec();
    this.addEvent();
    // lego.event.on(ModelEvents.CellModel.BallUpdate, 'this._onSelectBall', this);

    lego.event.on(ModelEvents.CellModel.BallUpdate, this._onCreatedCells, this);
    // lego.event.on(ViewEvents.);
  }

  _buildRec() {
    const gr = new Graphics();
    gr.beginFill(0xbbada0);
    gr.drawRoundedRect(-50, -50, 100, 100, 20);
    gr.endFill();
    this.addChild(gr);
  }

  _onCreatedCells(newModel, oldBall, uuid) {
    if (this.uId == uuid) {
      this.createBall(newModel);
    }
  }

  addEvent() {
    this.on('pointerup', this.onCellClickAction, this);
  }
  createBall(model) {
    const ball = new BallView(model);
    this.addChild(ball);
  }

  onCellClickAction() {
    lego.event.emit(ViewEvents.CellView.CellSelectCommit, this.uId);
  }
}
