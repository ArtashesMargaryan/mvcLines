import { Board } from './bord-view';

export class MainGameView extends PIXI.Container {
  constructor() {
    super();
    this._build();
  }

  _build() {
    this.addChild((this.board = new Board()));
  }
}
