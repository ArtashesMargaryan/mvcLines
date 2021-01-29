import { lego } from '@armathai/lego';
import { ViewEvents } from '../events/view-events';

export class GameOver extends PIXI.Container {
  constructor(score) {
    super();
    this._score = score;
    this.build();
  }

  build() {
    this.createRectangle();
    this.createText();
    this.createRetrySprite();
  }

  createRectangle() {
    const gr = new PIXI.Graphics();
    gr.lineStyle(2, 0xfeeb77, 1);
    gr.beginFill(0x000000, 0.81);
    gr.drawRoundedRect(0, 0, 650, 450, 20);
    gr.endFill();
    this.addChild(gr);
  }

  createText1() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      align: 'center',
      fontSize: 70,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ff0000', '#ffffff'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
      lineJoin: 'round',
    });
    const text1 = new PIXI.Text('Game Over', style);
    text1.anchor.set(0.5, 0);
    text1.x = this.width / 2;
    text1.y = this.height * 0.1;
    return text1;
  }

  createText2(text1) {
    const style1 = new PIXI.TextStyle({
      fontFamily: 'Arial',
      align: 'center',
      fontSize: 50,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#ff0000'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
      lineJoin: 'round',
    });
    const text2 = new PIXI.Text(`Your score  ${this._score} `, style1);
    text2.x = this.width / 2;
    text2.anchor.set(0.5, 0);
    text2.y = text1.height + text1.y + 10;
    return text2;
  }

  createText() {
    const text1 = this.createText1();
    const text2 = this.createText2(text1);

    this.addChild(text1);
    this.addChild(text2);
  }

  createRetrySprite() {
    const retry = PIXI.Sprite.from('retry');
    retry.interactive = true;
    retry.on('pointerdown', this.retry, this);
    retry.anchor.set(0.5, 1);
    retry.x = this.width / 2;
    retry.y = this.height * 0.8;
    this.addChild(retry);
  }

  retry() {
    lego.event.emit(ViewEvents.Game.Retry);
  }
}
