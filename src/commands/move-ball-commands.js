import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { matchCheckCommands } from './match-check-commands';

export function moveBallCommands(toCell, fromCell) {
  let pathLength = 0;
  const prom = new Promise((resolve) => {
    store.game.board.action = false;
    const path = store.game.board.moveBall(fromCell, toCell, resolve);
    pathLength = path.length;
  }).then(() => {
    store.game.board.action = true;

    if (pathLength > 0) {
      lego.command
        ///
        .execute(matchCheckCommands);
    }
  });
}
