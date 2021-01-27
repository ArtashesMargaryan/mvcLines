export class ScoreView extends PIXI.Container {
  constructor() {
    super();
    this._score = 0;
    this.build();
  }

  build() {
    this.createScore();
  }

  createScore() {
    const style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 50,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fill: ['#ffffff', '#00ff99'], // gradient
      stroke: '#4a1850',
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440,
      lineJoin: 'round',
    });

    const richText = new PIXI.Text(`SCORE : ${this._score}`, style);

    this.addChild(richText);
  }

  updateScore(value) {
    this._score = value;
  }
}
