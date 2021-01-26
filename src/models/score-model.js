import { ObservableModel } from './observable-model';

export class ScoreModel extends ObservableModel {
  constructor() {
    super('ScoreModel');
    this._score = 0;
    this.makeObservable();
  }
  get score() {
    return this._score;
  }
  set score(value) {
    return (this._score = value);
  }
}
