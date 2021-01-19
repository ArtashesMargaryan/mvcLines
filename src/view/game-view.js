import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { Board } from './board-view';

export class GameView extends PIXI.Container {
  constructor() {
    super();
    this.board = null;
    lego.event.on(ModelEvents.GameModel.BoardUpdate, this._onBoardUpdate, this);
  }

  _onBoardUpdate(boardModel) {
    boardModel ? this._buildBoard(boardModel) : this._destroyBoard();
  }

  _buildBoard(boardModel) {
    this.addChild((this.board = new Board(boardModel)));
  }

  _destroyBoard() {
    this.board.destroy();
    this.board = null;
  }
}
