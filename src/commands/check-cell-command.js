import { store } from '../models/store';

export function checkCellCommand(uuId) {
  console.warn(uuId);
  const chackCell = store.game.board.getCellByUId(uuId)

  if (chackCell.ball) {
    if (!store.game.board.getActiveCell()) {
      chackCell.selectedCell()
    } else {
      chackCell.selectedCell()

    }
  } else {
    if (store.game.board.getActiveCell()) {
      console.warn(1);
      const cellActive = store.game.board.getActiveCell()
      const ball = cellActive.removeBall()
      chackCell.createBall(ball)
      console.warn(ball);
    } else {

      console.warn(2);

    }

  }
}
