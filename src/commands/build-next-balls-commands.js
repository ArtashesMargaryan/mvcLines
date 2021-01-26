import { store } from '../models/store';

export function buildNextBallsCommands() {
  const nextBalls = store.game.nextBalls;
  console.warn(nextBalls);
}
