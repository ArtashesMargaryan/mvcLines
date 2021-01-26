import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { buildRandomBalls } from './build-random-balls';

export function matchCheckCommands() {
  const matches = store.game.board.matchCheck();
  if (matches.length > 0) {
    store.game.board._destroyBalls();
  } else {
    lego.command.execute(buildRandomBalls);
    // lego.command
    //   ///
    //   .execute(buildNextBallsCommands);
  }
}
