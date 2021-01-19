import { lego } from '@armathai/lego';
import { legologger } from '@armathai/lego-logger';
import * as PIXI from 'pixi.js';
import { startupCommand } from './commands/startup-command';
import { ViewEvents } from './events/view-events';
import { MainView } from './grid/main-grid';

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
    this.loader.add('1', './assets/furniture/1a.png');
    this.loader.add('2', './assets/furniture/2a.png');
    this.loader.add('3', './assets/furniture/2b.png');
    this.loader.add('4', './assets/furniture/1b.png');
    this.loader.add('5', './assets/furniture/3a.png');
    this.loader.add('6', './assets/furniture/3b.png');
    this.loader.load(() => {
      this._build();
    });
  }

  _build() {
    this.stage.addChild((this._mainView = new MainView(this.config)));
    legologger.start(lego);

    lego.command.execute(startupCommand);
    lego.event.emit(ViewEvents.Game.LoadComplete);
  }
}
