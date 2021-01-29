import { lego } from '@armathai/lego';
import { store } from '../models/store';
import { gameOverCommands } from './game-over-commands';
import { matchCheckCommands } from './match-check-commands';

export function buildRandomBallsCommands() {
  const nextBalls = store.game.nextBalls.nextBalls;

  console.warn(nextBalls);
  store.game.board.updateEmptyCells();

  if (nextBalls.length >= store.game.board.emptyCells.length) {
    nextBalls.splice(store.game.board.emptyCells.length);
    console.warn(nextBalls.length);
    for (let i = 0; i < nextBalls.length; i++) {
      store.game.board.createNextBallInCell(nextBalls[i]);
      store.game.nextBalls.initializeNextBall();
      lego.command.execute(gameOverCommands);
      return;
    }
  }
  for (let i = 0; i < nextBalls.length; i++) {
    store.game.board.createNextBallInCell(nextBalls[i]);
    store.game.nextBalls.initializeNextBall();
    lego.command
      //
      .payload(true)
      ///
      .execute(matchCheckCommands);
  }
}
