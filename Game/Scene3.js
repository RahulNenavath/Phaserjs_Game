class Scene3 extends Phaser.Scene {
    constructor(){
        super('intro');
    }

    preload() {

        // load background
        this.load.image('sunset_bg', 'assets/sunset_bg.png')

        this.load.tilemapTiledJSON('map', 'assets/map.json');
        // tiles in spritesheet 
        this.load.spritesheet('tiles', 'assets/tiles.png', {frameWidth: 70, frameHeight: 70});

        //background
        this.load.image('bg', 'assets/bg.jpg')
        // simple coin image
        this.load.image('coin', 'assets/coinGold.png');

        // player animations
        this.load.atlas('player', 'assets/player.png', 'assets/player.json');

        //load sounds
        this.load.audio('GameTrack', 'assets/GameTrack.mp3')
        this.load.audio('coinCollect', 'assets/mario_coin.mp3')
    }

    create(){

        this.cameras.main.setBackgroundColor('#e1be02');

        this.Intro = this.add.image(0,70,'Intro',);
        this.Intro.setOrigin(0,0);

        const next_button = this.add.image(725, 420, 'next_button');
        next_button.setInteractive();

        next_button.on('pointerdown', () => { 
            console.log('Clicked');
            this.scene.start('Level1') 
        });

        this.add.text(70,520, 'Instructions: Collect all the coins to Finish ', {font: '35px Arial', fill:'red'});
        // this.add.text(17, 500, 'the dragon and make a wish granted', {font: '35px Arial', fill:'red'})

    }
}