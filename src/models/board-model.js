import { CellModel } from './cell-model';
import { ObservableModel } from './observable-model';

export class BoardModel extends ObservableModel {
  constructor(config) {
    super();
    this.config = config;
    this._cells = null;
    this.initializeCellModel();
  }

  get cells() {
    return this._cells;
  }

  initializeCellModel() {
    this._cells = [];
    const { size } = this.config;
    for (let i = 0; i < size; i++) {
      this._cells[i] = [];
      for (let j = 0; j < size; j++) {
        const cellConfig = {
          row: j,
          col: i,
        };
        const cell = new CellModel(cellConfig);
        this._cells[i].push(cell);
      }
    }
    console.warn(this._cells);
  }
}
