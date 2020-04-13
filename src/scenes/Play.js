class Play extends Phaser.Scene {
    constructor() {
        super("playScene");//scene name
    }

    preload() {
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');
    }

    create() {
        //place thile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);

        //white rectangle borders
        this.add.rectangle(5, 5, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 443, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 5, 32, 445, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(603, 5, 32, 445, 0xFFFFFF).setOrigin(0, 0);

        //UI background
        this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0, 0);

        //add rocket(p1)
        this.p1Rocket = new Rocket(this, game.config.width / 2, 431, 'rocket').setScale(0.5,0.5).setOrigin(0, 0);

        //add Spaceships(x3)
        this.ship01 = new Spaceship(this, game.config.width + 192, 132, 'spaceship', 0, 30).setOrigin(0,0);
        this.ship02 = new Spaceship(this, game.config.width + 96, 196, 'spaceship', 0, 20).setOrigin(0,0);
        this.ship03 = new Spaceship(this, game.config.width, 260, 'spaceship', 0, 10).setOrigin(0,0);

        //define keyborad keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update() {
        //scroll starfield
        this.starfield.tilePositionX -= 4;

        this.p1Rocket.update();
        this.ship01.update();
        this.ship02.update();
        this.ship03.update();
    }
}