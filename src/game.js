import { lego } from '@armathai/lego';
import { legologger } from '@armathai/lego-logger';
import * as PIXI from 'pixi.js';
import config from '../configs/burnout.json';
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
    this.loader.add('retry', './assets/retry.png');
    this.loader.load(() => {
      this._build();
      // this._initEffect();
    });
  }

  _build() {
    this.stage.addChild((this._mainView = new MainView(this.config)));
    legologger.start(lego);

    lego.command.execute(startupCommand);
    lego.event.emit(ViewEvents.Game.LoadComplete);
  }

  _initEffect() {
    this._effect && this._effect.destroy();
    this._effectInterval && clearInterval(this._effectInterval);
    this._effect = PIXI.particles.core.ParticleEffect(config);
    this._effect.start();
    this._effect.x = this.renderer.width / 2;
    this._effect.y = this.renderer.height / 2;
    this.stage.addChild(this._effect);
    this._effectInterval = setInterval(() => {
      this._effect.reset();
      this._effect.start();
      // @ts-ignore
    }, 1000);
  }
}
