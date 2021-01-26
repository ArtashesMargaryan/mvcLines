import { getGameConfig } from '../const-config/const-config';
import { BoardModel } from './board-model';
import { NextBallsModel } from './next-balls-model';
import { ObservableModel } from './observable-model';

export class GameModel extends ObservableModel {
  constructor() {
    super('GameModel');
    this._board = null;
    this._nextBalls = null;
    this.config = getGameConfig();

    this.makeObservable();
  }

  get nextBalls() {
    return this._nextBalls;
  }
  get board() {
    return this._board;
  }

  initialize() {
    this.initializeBoardModel();
    this.initializeNextBallModel();
  }

  initializeBoardModel() {
    this._board = new BoardModel(this.config.board);
    this._board.initialize();
  }

  initializeNextBallModel() {
    this._nextBalls = new NextBallsModel();
    this._nextBalls.initialize();
  }
}
