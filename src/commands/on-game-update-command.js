import { lego } from '@armathai/lego';
import { initializeBoardModelCommand } from './load-complete-command';

export function onGameUpdateCommand() {
  lego.command.execute(initializeBoardModelCommand);
  // lego.command
  //   ///
  //   .execute(buildNextBallsCommands);
}
