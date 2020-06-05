import 'phaser';
import config from './config';
import CreditsScene from './scenes/creditsScene';
import GameScene from './scenes/gameScene';
import OptionsScene from './scenes/optionsScene';
import PreloadScene from './scenes/preloadScene';
import TitleScene from './scenes/titleScene';

class Game extends Phaser.Game {
  constructor(config) {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Preload', PreloadScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Boot');
  }
}

class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }
  preload() {
    this.load.atlas('boot', '/res/boot/boot.png', '/res/boot/boot.json');
  }

  create() {
    this.scene.start('Preload');
  }
}
/**
 * Сохраняем конфиг глобально, что бы не импортить его каждый раз.
 * просто нельзя так просто взять и получить размеры сцены -_-
 * есть конечно способ через cameras, но вдруг кто то поменяет вид камеры?
*/
window.config = config;
window.game = new Game(window.config);