import * as PIXI from 'pixi.js';
import { gatImgFrame } from './game-config';
import { MainGrid } from './grid/main-grid';

export class Game extends PIXI.Application {
  constructor() {
    super({
      backgroundColor: 0xffffff,
      width: window.innerWidth,
      height: window.innerHeight,
    });
    window.addEventListener('resize', this._resize.bind(this));
    this.config = { pageNum: 0 };
    document.body.appendChild(this.view);
    this._loadAssets();
  }

  _resize() {
    this.renderer.resize(window.innerWidth, window.innerHeight);
    this._mainView.rebuild();
  }

  _loadAssets() {
    this.loader.add('logo', './assets/ui/logo.png');
    this.loader.add('1a', './assets/furniture/1a.png');
    this.loader.add('1b', './assets/furniture/1b.png');
    this.loader.add('2a', './assets/furniture/2a.png');
    this.loader.add('2b', './assets/furniture/2b.png');
    this.loader.add('3a', './assets/furniture/3a.png');
    this.loader.add('3b', './assets/furniture/3b.png');
    this.loader.load(() => {
      this._build();
    });
  }

  _build() {
    this.stage.addChild((this._mainView = new MainGrid(this.config)));
  }
}
