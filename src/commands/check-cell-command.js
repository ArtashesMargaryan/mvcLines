import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { moveBallCommands } from './move-ball-commands';

export function checkCellCommand(uuId) {
  const checkCell = store.game.board.getCellByUId(uuId);
  const activeCell = store.game.board.getActiveCell();
  if (checkCell.ball) {
    if (checkCell.selected) {
      checkCell.selectedCell();
    } else if (!activeCell) {
      /// chka select cell
      console.warn(checkCell);
      checkCell.selectedCell();
    } else {
      activeCell.selectedCell();
      checkCell.selectedCell();
    }
  } else {
    if (activeCell) {
      activeCell.selectedCell();
      lego.command
        ///
        .payload(checkCell, activeCell)
        ///
        .execute(moveBallCommands);
      return;
    } else {
      console.warn(2);
    }
  }
}

// function replacementBall(oldCell, newCell) {
//   const ball = oldCell.removeBall();
//   oldCell.selectedCell();
//   ball.active = false;
//   newCell.createBall(ball);
//   // newCell.selectedCell();
// }
