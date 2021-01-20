import { lego } from '@armathai/lego';
import { store } from '../models/store';

export function onLoadCompleteCommand() {
  lego.command.execute(initializeGameModelCommand);
}

export function initializeGameModelCommand() {
  store.initializeGameModel();
}

export function initializeBoardModelCommand() {
  store.game.initializeBoardModel();
}

// export function initializeBoardModel() {
//   store.game.board = new BoardModel(config);
// }
