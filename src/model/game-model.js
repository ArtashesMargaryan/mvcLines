import { getGameCofig } from '../const-config/const-config';

export class GameModel {
  constructor() {
    this.config = getGameCofig();
    this._build();
  }

  _build() {
    this.buildBoardModel();
  }

  buildBoardModel() {
    const boardConfig = this.config.board;
    this.board;
  }
}
