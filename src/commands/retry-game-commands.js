import { store } from '../models/store';

export function RetryGameCommands() {
  store.initializeGameModel();
  console.warn('mtav');
  // lego.command.off(ViewEvents.Game.LoadComplete, onLoadCompleteCommand);
  // lego.command.off(ModelEvents.Store.GameUpdate, onGameUpdateCommand);
  // lego.command.off(ViewEvents.CellView.CellCreatedBallCommit, toCreateRandomBall);
  // lego.command.off(ViewEvents.Game.Retry, RetryGameCommands);
  // store.destroyGameModel();
  // lego.command.execute(startupCommand);
}
