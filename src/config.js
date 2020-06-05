import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-game',
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.NONE
  },
  settings: {
    locale: 'en'
  }
};