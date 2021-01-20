export class BallModel {
  constructor(config) {
    this.config = config;
    const { row, col } = config;
    this.status = false;
    this.scale = 1;
    // config.type != 0 ? (this.type = config.type) : 1;
  }
  selecting() {
    if (!this.status) {
      this.status = true;
      this.scale = 0.8;
      return;
    }
    this.scale = 1;
    this.status = false;
  }
}
