import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { checkCellCommand } from './check-cell-command';
import { onLoadCompleteCommand } from './load-complete-command';
import { onGameUpdateCommand } from './on-game-update-command';
import { toCreateRandomBall } from './to-create-random-ball';

export function startupCommand() {
  lego.command.on(ViewEvents.Game.LoadComplete, onLoadCompleteCommand);
  lego.command.on(ModelEvents.Store.GameUpdate, onGameUpdateCommand);
  lego.command.on(ViewEvents.CellView.CellSelectCommit, checkCellCommand);
  lego.command.on(ViewEvents.CellView.CellCreatedBallCommit, toCreateRandomBall);
}
