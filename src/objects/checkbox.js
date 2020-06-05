export class Checkbox extends Phaser.GameObjects.Image {

  constructor(scene, x, y, spritesheet, callback, text) {
    super(scene, x, y, spritesheet, 2);
    this.caption = null;
    if (text != '') {
      this.caption = scene.add.text(x, y, text, { fill: '#0ff' });
      this.caption.setDepth(1);
      this.caption.setOrigin(0.5, 0.5);
      this.caption.bounds = this.caption.getBounds();
    }
    this.setInteractive({ useHandCursor: true })
      .on('pointerover', () => this.hover())
      .on('pointerout', () => this.release())
      .on('pointerdown', () => this.press())
      .on('pointerup', () => {
        this.hover();
        callback();
      });
  }



  hover() {
    this.setFrame(3);
    if (this.caption != null) {
      this.caption.setStyle({ fill: '#0f0' });
    }
  }

  release() {
    this.setFrame(2);
    if (this.caption != null) {
      this.caption.setStyle({ fill: '#0ff' });
    }
  }

  press() {
    this.setFrame(1);
    if (this.caption != null) {
      this.caption.setStyle({ fill: '#ff0' });
    }
  }
}