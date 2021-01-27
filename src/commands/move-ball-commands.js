import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { matchCheckCommands } from './match-check-commands';

export function moveBallCommands(toCell, fromCell) {
  let pathLength = 0;
  const prom = new Promise((resolve) => {
    const path = store.game.board.moveBall(fromCell, toCell, resolve);
    pathLength = path.length;
  }).then(() => {
    if (pathLength > 0) {
      // const ball = fromCell.removeBall();
      // toCell.createBall(ball);
      lego.command
        ///
        .execute(matchCheckCommands);
    }
  });
}
