export class Checkbox extends Phaser.GameObjects.Image {

  constructor(scene, x, y, spritesheet, callback, text) {
    super(scene, x, y, spritesheet, 3);
    this.caption = null;
    this.checked = false;
    if (text != '') {
      this.caption = scene.add.text(x, y, text, { fill: '#0ff' });
      this.caption.setDepth(1);
      this.caption.setOrigin(0, 0.5);
      this.x = x + this.caption.width + 20;
    }
    this.setInteractive({ useHandCursor: true })
      .on('pointerup', () => {
        this.check();
        callback();
      });
  }

  check() {
    if (this.checked) {
      this.setFrame(3);
    }
    else {
      this.setFrame(0);
    }
    this.checked = !this.checked;
  }
}