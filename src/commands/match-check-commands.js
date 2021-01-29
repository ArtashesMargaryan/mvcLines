import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { buildRandomBallsCommands } from './build-random-balls';
import { scoreUpdateCommands } from './score-update-commands';

export function matchCheckCommands(finalMatchCheck = false) {
  const matches = store.game.board.matchCheck();
  if (matches.length > 0) {
    store.game.board._destroyBalls();
    lego.command
      //
      .payload(matches)
      //
      .execute(scoreUpdateCommands);
    console.warn(matches);
  } else {
    if (finalMatchCheck) {
      return;
    }
    lego.command
      //
      .execute(buildRandomBallsCommands);
  }
}
