import { store } from '../models/store';

export function matchCheckCommands() {
  store.game.board.matchCheck();
}
