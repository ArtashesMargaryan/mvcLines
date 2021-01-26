import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { matchCheckCommands } from './match-check-commands';

export function moveBallCommands(toCell, fromCell) {
  const path = store.game.board.moveBall(fromCell, toCell);

  if (path.length > 0) {
    // const ball = fromCell.removeBall();
    // toCell.createBall(ball);
    lego.command
      ///
      .execute(matchCheckCommands);
  }
}
