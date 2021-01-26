import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { gameOverCommands } from './game-over-commands';

export function buildRandomBalls() {
  const nextBalls = store.game.nextBalls.nextBalls;

  console.warn(nextBalls);
  nextBalls.forEach((ballModel) => {
    if (nextBalls.length >= store.game.board.emptyCells.length) {
      lego.command.execute(gameOverCommands);
      return;
    }
    store.game.board.createNextBallInCell(ballModel);
  });
  // store.game.nextBalls.nextBalls = null;
  store.game.nextBalls.initializeNextBall();
}

///// nenc ara azat texeri chapov build ara heto game over
