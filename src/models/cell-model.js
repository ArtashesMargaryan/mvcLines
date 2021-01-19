export class CellModel {
  constructor(config) {
    this.row = config.row;
    this.col = config.col;
    this.id = `cellId_${this.row}_${this.col}`;
    this.item = null;
  }

  initializeBallComponent() {}
}
