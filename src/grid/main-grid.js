import { CellAlign, CellScale, PixiGrid } from '@armathai/pixi-grid';
import { gatImgFrame, getFuterText, getTextStyle } from '../game-config';
import { mainGridConfig } from './main-grid-config';

export class MainGrid extends PixiGrid {
  getGridConfig() {
    return mainGridConfig();
  }

  constructor(config) {
    super();
    this.pageNum = config.pageNum;
    this.itemArr = gatImgFrame();
    this.textStyle = getTextStyle();
    this.items = [];
    this._build();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _build() {
    this.buildTitle();
    this.buildContent(this.pageNum);
    this.buildFuter();
  }

  buildTitle() {
    const sprite = this.createSprite('logo');
    this.setChild('logo', sprite);
  }

  buildContent(pageNum) {
    this.bulidLeft(pageNum);
    this.bulidRight(pageNum);
  }

  bulidLeft(num) {
    const { item, textBolt, text } = this.itemArr[num][0];
    const itemSprite = this.pushItems(item);

    this.setChild('itemLeft', itemSprite);
    this.setChild('textLeftBolt', this.createText(textBolt, this.textStyle.bold));
    this.setChild('textLeft', this.createText(text, this.textStyle.normal));
  }

  bulidRight(num) {
    const { item, textBolt, text } = this.itemArr[num][1];
    const itemSprite = this.pushItems(item);
    this.setChild('itemRight', itemSprite);
    this.setChild('textRightBolt', this.createText(textBolt, this.textStyle.bold));
    this.setChild('textRight', this.createText(text, this.textStyle.normal));
    this.itemArr[num][1];
  }

  pushItems(item) {
    const itemSprite = this.createSprite(item);
    this.items.push(itemSprite);
    return itemSprite;
  }

  buildFuter() {
    const { text, style } = getFuterText();
    const gr = new PIXI.Graphics();
    gr.beginFill('0x537f7e');
    gr.drawRect(0, 0, window.innerWidth, Math.min(window.innerHeight * 0.1, 200));
    gr.endFill();
    this.setChild('futer', gr);
    this.setChild('futerText', this.createText(text, style));
  }

  createSprite(frame) {
    return PIXI.Sprite.from(`${frame}`);
  }

  createText(text, style) {
    return new PIXI.Text(`${text}`, style);
  }
}
