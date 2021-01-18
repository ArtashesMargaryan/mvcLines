import { CellModel } from './cell-model';

export class BoardModel {
  constructor(config) {
    this.config = config;
    this.cells = [];
    this.build();
  }

  build() {
    this.buildCell();
  }

  buildCell() {
    const { size } = this.config;
    for (let i = 0; i < size; i++) {
      this.cells[i] = [];
      for (let j = 0; j < size; j++) {
        const cellConfig = {
          row: j,
          col: i,
        };
        const cell = new CellModel();
        const cell = this.cells[i].push();
      }
    }
  }
}
