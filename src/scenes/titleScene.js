import config from '../config';
import { Button } from '../objects/button';
import { Label } from '../objects/label';

export default class TitleScene extends Phaser.Scene {


  constructor() {
    super('Title');
    this.name = 'Title';
    this.once = true;
  }

  preload() {
  }

  create() {
    if (this.once) {
      this.once = false;
    }
    console.log(this.name);

    var width = window.config.width / 2;
    var height = window.config.height / 2;
    var ui = this.cache.json.get('locale').ui;
    var btnTexture = this.textures.get('button');
    this.playButton = new Button(this, width, height, btnTexture, () => { this.scene.start('Game') }, ui.btnPlay);
    this.add.existing(this.playButton);
    this.continueButton = new Button(this, width, height + 50, btnTexture, () => { console.log('fuck off') }, ui.btnContinue);
    this.add.existing(this.continueButton);
    this.optionsButton = new Button(this, width, height + 100, btnTexture, () => { this.scene.start('Options') }, ui.btnOptions);
    this.add.existing(this.optionsButton);
    this.creditsButton = new Button(this, width, height + 150, btnTexture, () => { this.scene.start('Credits') }, ui.btnCredits);
    this.add.existing(this.creditsButton);

    this.creditsButton = new Button(this, width, height + 190, btnTexture, () => { this.scene.start('Credits') }, ui.btnCredits);
    this.add.existing(this.creditsButton);

  }
};