export function moveBallCommands(toCell, fromCell) {
  const ball = fromCell.removeBall();
  toCell.createBall(ball);
}
