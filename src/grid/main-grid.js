import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { GameView } from '../view/game-view';
import { mainGridConfig } from './main-grid-config';

export class MainView extends PixiGrid {
  constructor(config) {
    super();

    lego.event.on(ModelEvents.Store.GameUpdate, this._onGameUpdate, this);
    lego.event.on(ViewEvents.GameViewEvent.CreateBoard, this.rebuild, this);
  }

  getGridConfig() {
    return mainGridConfig();
  }

  rebuild(config = this.getGridConfig()) {
    super.rebuild(config);
  }

  _onGameUpdate() {
    this._gameView = new GameView();
    this.setChild('gameView', this._gameView);
  }
}
