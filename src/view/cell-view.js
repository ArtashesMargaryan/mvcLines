import { Graphics, Container } from 'pixi.js';

export class CellView extends Container {
  constructor(row, col) {
    super();
    this.row = row;
    this.col = col;
    this._buildRec();
  }

  _buildRec() {
    const gr = new Graphics();
    gr.beginFill(0xbbada0);
    gr.drawRect(-50, -50, 100, 100);
    gr.endFill();
    this.addChild(gr);
  }
}
