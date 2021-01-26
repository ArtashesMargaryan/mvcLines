import { store } from '../models/store';

export function buildRandomBalls() {
  const nextBalls = store.game.nextBalls.nextBalls;

  console.warn(nextBalls);
  nextBalls.forEach((ballModel) => {
    store.game.board.createNextBallInCell(ballModel);
  });
  // store.game.nextBalls.nextBalls = null;
  // store.game.nextBalls.initializeNextBall();
}
