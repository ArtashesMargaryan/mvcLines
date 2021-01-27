import { store } from '../models/store';

export function scoreUpdateCommands(matchArray) {
  // store.game.nextBalls.nextBalls = null;
  const match = matchArray.flat();
  const score = Math.floor(match.length % 5) * 5 + 5;
  store.game.score.updateScore(score);
}
