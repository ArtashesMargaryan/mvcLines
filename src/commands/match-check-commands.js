import { store } from '../models/store';

export function matchCheckCommands() {
  const matches = store.game.board.matchCheck();
  if (matches.length > 0) {
    store.game.board._destroyBalls();
  } else {
    // lego.command
    //   ///
    //   .execute(buildNextBallsCommands);
  }
}
