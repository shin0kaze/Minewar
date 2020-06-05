export class Label extends Phaser.GameObjects.Text {

  constructor(scene, x, y, text, style) {
    super(scene, x, y, text, style);
  }

  hover() {
    this.setStyle({ fill: '#ff0' });
  }

  release() {
    this.setStyle({ fill: '#0f0' });
  }

  press() {
    this.setStyle({ fill: '#0ff' });
  }
}