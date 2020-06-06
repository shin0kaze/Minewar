/**
 * По слухам написание этой штуки в начале проекта снижает количество говнокода,
 * но это не точно.
 */
'use strict';
import 'phaser';
import config from './config';
import CreditsScene from './scenes/creditsScene';
import GameScene from './scenes/gameScene';
import OptionsScene from './scenes/optionsScene';
import PreloadScene from './scenes/preloadScene';
import TitleScene from './scenes/titleScene';
/**
 * Главный класс игры, куда мы грузим настройки и сцены которые обязательно
 * нужны в игре.
 */
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
/**
 * Вся логика в этом движке построена на сценах.
 * Тут мы подгружаем маленький ассет, что бы сделать красивый экран загрузки.
 */
class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }
/**
 * Функция подготовительного этапа и для загрузки ассетов.
 */
  preload() {
    this.load.atlas('boot', '/res/boot/boot.png', '/res/boot/boot.json');
  }
/**
 * Функция при создании сцены и запуске сцены.
 */
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
/**
 * Точка входа в игру
 */
window.game = new Game(window.config);