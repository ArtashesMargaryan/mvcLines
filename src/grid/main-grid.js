import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { GameView } from '../view/game-view';
import { NextBall } from '../view/next-ball-view';
import { mainGridConfig } from './main-grid-config';

export class MainView extends PixiGrid {
  constructor(config) {
    super();
    lego.event.on(ModelEvents.NextBallsModel.NextBallsUpdate, this._nextBallsUpdate, this);

    lego.event.on(ModelEvents.Store.GameUpdate, this._onGameUpdate, this);
    lego.event.on(ViewEvents.GameView.BoardCreationCommit, this._onCreatedBoard, this);
    lego.event.on(ViewEvents.BoardView.CellCreateCommit, this._onCreatedCells, this);
  }

  getGridConfig() {
    return mainGridConfig();
  }

  _nextBallsUpdate(newValue) {
    const nextBalls = new NextBall(newValue);
    this.setChild('nextBalls', nextBalls);
  }

  rebuild(config = this.getGridConfig()) {
    super.rebuild(config);
  }

  _onGameUpdate(newValue, oldValue, uuid) {
    // newValue ? this._buildGameView() : this._destroyGameView()
    this._gameView = new GameView();
    this.setChild('gameView', this._gameView);
  }

  _onCreatedBoard() {
    this.rebuild();
  }

  _onCreatedCells() {
    this.rebuild();
  }
}
