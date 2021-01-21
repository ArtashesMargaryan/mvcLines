import { store } from '../models/store';

export function checkCellCommand(cell) {
  ///searchSelectedCell()
  console.warn(cell);
  // const select = cell.selected;

  if (cell.ball) {
    console.warn('hasa stex');
    if (!store.game.board.searchSelectedCell()) {
      cell.selectedBall();
    } else {
      console.warn('ekav');

      store.game.board.unSelectedCells();
      cell.selectedBall();
    }
  } else {
  }
}
