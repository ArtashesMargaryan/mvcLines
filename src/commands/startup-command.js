import { lego } from '@armathai/lego';
import { ModelEvents } from '../events/model-events';
import { ViewEvents } from '../events/view-events';
import { onLoadCompleteCommand } from './load-complete-command';
import { onGameUpdateCommand } from './on-game-update-command';

export function startupCommand() {
  lego.command.on(ViewEvents.Game.LoadComplete, onLoadCompleteCommand, 1, 1, 2);
  lego.command.on(ModelEvents.Store.GameUpdate, onGameUpdateCommand, 1, 1, 2);
}
