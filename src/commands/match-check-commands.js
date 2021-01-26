import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { buildRandomBalls } from './build-random-balls';
import { scoreUpdateCommands } from './score-update-commands';

export function matchCheckCommands() {
  const matches = store.game.board.matchCheck();
  if (matches.length > 0) {
    lego.command
      //
      .payload(matches.length)
      //
      .execute(scoreUpdateCommands);
    store.game.board._destroyBalls();
  } else {
    lego.command.execute(buildRandomBalls);
    // lego.command
    //   ///
    //   .execute(buildNextBallsCommands);
  }
}
