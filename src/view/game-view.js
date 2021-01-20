import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { Board } from './board-view';

export class GameView extends PIXI.Container {
  constructor() {
    super();
    this.board = null;
    lego.event.on(ModelEvents.GameModel.BoardUpdate, this._onBoardUpdate, this);
  }

  getGridConfig() {
    return mainGridConfig();
  }

  _onBoardUpdate(boardModel) {
    boardModel ? this._buildBoard(boardModel) : this._destroyBoard();
  }

  _buildBoard(boardModel) {
    this.addChild((this.board = new Board(boardModel)));
    lego.event.emit(ViewEvents.GameViewEvent.CreateBoard);
  }

  _destroyBoard() {
    if (this.board == null) {
      return;
    }
    this.board.destroy();
    this.board = null;
  }
}
