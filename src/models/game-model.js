import { getGameConfig } from '../const-config/const-config';
import { BoardModel } from './board-model';
import { ObservableModel } from './observable-model';

export class GameModel extends ObservableModel {
  constructor() {
    super('GameModel');
    this._board = null;
    this.config = getGameConfig();

    this.makeObservable();
  }

  get board() {
    return this._board;
  }

  initializeBoardModel() {
    this._board = new BoardModel(this.config.board);
  }
}
