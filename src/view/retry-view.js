import { lego } from '@armathai/lego';
import { ViewEvents } from '../events/view-events';

export class RetryView extends PIXI.Container {
  constructor() {
    super();
    this._createSprite();
    this.interactive = true;
    this.on('pointerdown', this.retry, this);
  }

  _createSprite() {
    const spr = new PIXI.Sprite.from('retry');

    this.addChild(spr);
  }

  retry() {
    lego.event.emit(ViewEvents.Game.Retry);
  }
}
