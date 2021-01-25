import { store } from '../models/store';

export function moveBallCommands(toCell, fromCell) {
  const ball = fromCell.removeBall();
  toCell.createBall(ball);
  store.game.board.moveBall(fromCell, toCell);
}
