import { getGameConfig } from '../const-config/const-config';
import { BoardModel } from './board-model';
import { NextBallsModel } from './next-balls-model';
import { ObservableModel } from './observable-model';
import { ScoreModel } from './score-model';

export class GameModel extends ObservableModel {
  constructor() {
    super('GameModel');
    this._board = null;
    this._nextBalls = null;
    this._score = null;
    this.config = getGameConfig();

    this.makeObservable();
  }
  get score() {
    return this._score;
  }

  get nextBalls() {
    return this._nextBalls;
  }
  get board() {
    return this._board;
  }
  set score(value) {
    this._score = value;
  }

  initialize() {
    this.initializeBoardModel();
    this.initializeNextBallModel();
    this.initializeScoreModel();
  }

  initializeBoardModel() {
    this._board = new BoardModel(this.config.board);
    this._board.initialize();
  }

  initializeNextBallModel() {
    this._nextBalls = new NextBallsModel();
    this._nextBalls.initialize();
  }

  initializeScoreModel() {
    this._score = new ScoreModel();
    this._score.initialize();
  }
  destroy() {}
}
