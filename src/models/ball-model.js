import { ObservableModel } from './observable-model';

export class BallModel extends ObservableModel {
  constructor(config) {
    super('BallModel');
    this.config = config;
    const { row, col } = config;
    this.status = false;
    this._active = false;
    this.type = config.type;
    this.makeObservable();
    // config.type != 0 ? (this.type = config.type) : 1;
  }

  get active() {
    return this._active;
  }

  set active(value) {
    return this._active = value;
  }
}
