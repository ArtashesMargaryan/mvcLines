import { CellAlign, CellScale, PixiGrid } from '@armathai/pixi-grid';
import { gatImgFrame, getFuterText, getTextStyle } from '../game-config';
import { mainGridConfig } from './main-grid-config';
import { MainGameView } from '../view/game-view';

export class MainGrid extends PixiGrid {
  getGridConfig() {
    return mainGridConfig();
  }

  constructor(config) {
    super();
    this._build();
    this.rebuild();
  }

  rebuild() {
    super.rebuild(this.getGridConfig());
  }

  _build() {
    this.buildMainGame();
  }

  buildMainGame() {
    this.mainGridConfig = new MainGameView();
    this.setChild('mainGameView', this.mainGridConfig);
  }
}
