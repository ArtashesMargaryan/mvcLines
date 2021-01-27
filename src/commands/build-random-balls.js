import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { gameOverCommands } from './game-over-commands';

export function buildRandomBalls() {
  const nextBalls = store.game.nextBalls.nextBalls;

  console.warn(nextBalls);
  for (let i = 0; i < nextBalls.length; i++) {
    if (nextBalls.length - i >= store.game.board.emptyCells.length) {
      return lego.command.execute(gameOverCommands);
    }
    store.game.board.updateEmptyCells();
    store.game.board.createNextBallInCell(nextBalls[i]);
  }
  // store.game.nextBalls.nextBalls = null;
  store.game.nextBalls.initializeNextBall();
}

///// nenc ara azat texeri chapov build ara heto game over
