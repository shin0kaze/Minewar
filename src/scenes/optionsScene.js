import { Button } from '../objects/button';
import { Checkbox } from '../objects/checkbox';
import { Label } from '../objects/label';

export default class OptionsScene extends Phaser.Scene {

  constructor() {
    super('Options');
  }

  preload() {
  }

  create() {
    this.musicOn = true;
    this.soundOn = true;
    var btnTexture = this.textures.get('button');
    var chkTexture = this.textures.get('check');
    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
    var ui = this.cache.json.get('locale').ui;
    
    this.musicCheck = new Checkbox(this, 200, 300, chkTexture, () => { }, ui.chkMusic);
    this.add.existing(this.musicCheck);

    this.soundCheck = new Checkbox(this, 200, 400, chkTexture, () => { }, ui.btnPlay);
    this.add.existing(this.soundCheck);

    this.saveOptButton = new Button(this, 100, 500, btnTexture, () => { this.scene.start('Title') }, ui.btnSave);
    this.add.existing(this.saveOptButton);

    this.cancelOptButton = new Button(this, 250, 500, btnTexture, () => { this.scene.start('Title') }, ui.btnCancel);
    this.add.existing(this.cancelOptButton);
  }
};