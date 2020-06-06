import GameScene from './gameScene';
/**
 * Отвечает за загрузку всех ресурсов игры.
 * TODO тут все неаккуратно спижжено с туториала, который,
 * в общем то не очень заботился о структуре проекта,
 * необходимо переделать это гавно!
 */
export default class PreloadScene extends Phaser.Scene {

  constructor() {
    super('Preload');
  }

  preload() {
    console.log('start preloading for game');
    var logo = this.add.image(400, 150, 'boot', 'logo.png');
    logo.setScale(0.4, 0.4);

    var loadFill = this.add.image(400, 300, 'boot', 'progressBarFill.png');
    var loadEmpty = this.add.image(400, 300, 'boot', 'progressBarEmpty.png');
    var width = window.config.width;
    var height = window.config.height;

    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff'
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      loadFill.setScale(value, 1);
    });

    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
    });

    this.load.on('complete', function () {
      loadFill.destroy();
      loadEmpty.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));

    this.timedEvent = this.time.delayedCall(1000, this.ready, [], this);

    this.load.atlas('guiElem', './res/graphic/gui/elements.png', './res/graphic/gui/elements.json');

    this.load.json('locale', '/res/loc/' + window.config.settings.locale + '.json');
  }

  create() {
    console.log(this.cache.json.get('engLocale'));
    this.textures.addSpriteSheetFromAtlas(
      'button',
      {
        atlas: 'guiElem',
        frame: 'button',
        frameWidth: 120,
        frameHeight: 30,
        endFrame: 3
      });
    this.textures.addSpriteSheetFromAtlas(
      'check',
      {
        atlas: 'guiElem',
        frame: 'check',
        frameWidth: 26,
        frameHeight: 26,
        endFrame: 4
      });
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.readyCount++;
    console.log(this.readyCount);
    if (this.readyCount === 2) {
      this.scene.start('Title');
    }
  }
};