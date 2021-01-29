import { lego } from '@armathai/lego';
import { PixiGrid } from '@armathai/pixi-grid';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { GameView } from '../view/game-view';
import { GameOver } from '../view/gameOver-view';
import { NextBall } from '../view/next-ball-view';
import { RetryView } from '../view/retry-view';
import { ScoreView } from '../view/score-view';
import { mainGridConfig } from './main-grid-config';

export class MainView extends PixiGrid {
  constructor(config) {
    super();
    this.score = null;
    this.gameOver = null;
    lego.event.on(ModelEvents.NextBallsModel.NextBallsUpdate, this._nextBallsUpdate, this);
    lego.event.on(ModelEvents.ScoreModel.ScoreUpdate, this._onScoreUpdate, this);
    lego.event.on(ViewEvents.Game.GameOver, this._gameOver, this);
    lego.event.on(ModelEvents.Store.GameUpdate, this._onGameUpdate, this);
    lego.event.on(ViewEvents.GameView.BoardCreationCommit, this._onCreatedBoard, this);
    lego.event.on(ViewEvents.BoardView.CellCreateCommit, this._onCreatedCells, this);
  }

  getGridConfig() {
    return mainGridConfig();
  }

  destroy() {
    lego.event.off(ModelEvents.ScoreModel.ScoreUpdate, this._onScoreUpdate, this);
    lego.event.off(ModelEvents.NextBallsModel.NextBallsUpdate, this._nextBallsUpdate, this);
    lego.event.off(ModelEvents.Store.GameUpdate, this._onGameUpdate, this);
    lego.event.off(ViewEvents.GameView.BoardCreationCommit, this._onCreatedBoard, this);
    lego.event.off(ViewEvents.BoardView.CellCreateCommit, this._onCreatedCells, this);
  }
  _nextBallsUpdate(newValue) {
    if (newValue === null) {
      nextBalls.destroy();
      return;
    }
    const nextBalls = new NextBall(newValue);

    this.setChild('nextBalls', nextBalls);
  }

  rebuild(config = this.getGridConfig()) {
    super.rebuild(config);
  }

  _buildRetry(value) {
    this.retry = new RetryView();

    this.setChild('retry', this.retry);
  }

  _onScoreUpdate(newValue) {
    console.warn('newValue');
    this.score.updateScore(newValue);
  }

  _buildScore(newValue) {
    if (this.score === null) {
      this.score = new ScoreView();
    }
    this.score.updateScore(0);
    this.setChild('score', this.score);
  }

  _onGameUpdate(newValue, oldValue, uuid) {
    // newValue ? this._buildGameView() : this._destroyGameView()
    if (newValue === null) {
      this.gameOver && this.gameOver.destroy();
      this.gameOver = null;
      this._gameView.destroy();
      return;
    }
    this._gameView = new GameView();
    this.setChild('gameView', this._gameView);
    this._buildScore(newValue);
    this._buildRetry(newValue);
  }

  _gameOver(score) {
    const oldScore = score.score;
    console.warn(score);
    this.gameOver = new GameOver(oldScore);
    this.setChild('gameOver', this.gameOver);
  }

  _onCreatedBoard() {
    this.rebuild();
  }

  _onCreatedCells() {
    this.rebuild();
  }
}
