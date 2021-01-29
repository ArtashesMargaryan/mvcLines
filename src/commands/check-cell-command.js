import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { moveBallCommands } from './move-ball-commands';

export function checkCellCommand(uuId) {
  const checkCell = store.game.board.getCellByUId(uuId);
  const activeCell = store.game.board.getActiveCell();
  if (!store.game.board.action) {
    return;
  }
  if (checkCell.ball) {
    if (checkCell.selected) {
      checkCell.selectedCell();
    } else if (!activeCell) {
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
