import { getColors } from '../const-config/const-config';
import { returnRandomNum } from '../utils';
import { ObservableModel } from './observable-model';

export class BallModel extends ObservableModel {
  constructor(config) {
    super('BallModel');
    this.config = config;
    const { row, col } = config;
    this.status = false;
    this._active = false;
    const colors = getColors();

    config.type != undefined
      ? //
        (this._type = config.type)
      : //
        (this.type = returnRandomNum(colors.length - 1));
    this.makeObservable();
  }

  get active() {
    return this._active;
  }

  set active(value) {
    return (this._active = value);
  }

  set type(value) {
    this._type = value;
  }

  get type() {
    return this._type;
  }
}
