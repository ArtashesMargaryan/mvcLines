import { lego } from '@armathai/lego';
import { ViewEvents } from '../events/view-events';
import { store } from '../models/store';

export function gameOverCommands() {
  const playerScore = store.game.score;
  lego.event.emit(ViewEvents.Game.GameOver, playerScore);
  console.warn('game over');
}
