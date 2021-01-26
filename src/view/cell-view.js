import { lego } from '@armathai/lego';
import { Container, Graphics } from 'pixi.js';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { BallView } from './ball-view';

export class CellView extends Container {
  constructor(model) {
    super();
    this.interactive = true;
    this.row = model.config.col;
    this.col = model.config.row;
    this.uId = model.uuid;
    this.ball = null;
    this.model = model;
    this._buildRec();
    this.addEvent();
    // lego.event.on(ModelEvents.CellModel.BallUpdate, 'this._onSelectBall', this);

    lego.event.on(ModelEvents.CellModel.BallUpdate, this._onUpdatedCells, this);
    lego.event.on(ModelEvents.CellModel.SelectedUpdate, this._onUpdateSelected, this);
    // lego.event.on(ViewEvents.);
  }

  _buildRec() {
    const gr = new Graphics();
    gr.beginFill(0xbbada0);
    gr.drawRoundedRect(-50, -50, 100, 100, 20);
    gr.endFill();
    this.addChild(gr);
  }

  _onUpdatedCells(newModel, oldBall, uuid) {
    if (newModel) {
      this._onUpdateBall(newModel, uuid);
    } else {
      this.removeBall(uuid);
    }
  }
  _onUpdateBall(newModel, uuid) {
    if (this.uId == uuid) {
      newModel & this.buildBall(newModel);
      !newModel & this.removeBall();
    }
  }

  addEvent() {
    this.on('pointerup', this.onCellClickAction, this);
  }

  buildBall(model, toChang) {
    const ball = new BallView(model);
    this.addChild((this.ball = ball));
  }

  onCellClickAction() {
    lego.event.emit(ViewEvents.CellView.CellSelectCommit, this.uId);
  }

  removeBall(uuid) {
    if (this.uId == uuid) {
      this.ball.destroy();
    }
  }

  _onUpdateSelected(newValue, oldValue, uuid) {
    if (this.uId === uuid) {
      this.ball.selected();
    }
  }

  getCellBallId() {
    if (this.ball) {
      return this.ball.uuid;
    } else {
      return null;
    }
  }
}
