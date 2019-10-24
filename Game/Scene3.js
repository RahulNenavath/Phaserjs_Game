class Scene3 extends Phaser.Scene {
    constructor(){
        super('intro');
    }

    preload() {
        this.load.tilemapTiledJSON('map', 'assets/map.json');
        // tiles in spritesheet 
        this.load.spritesheet('tiles', 'assets/tiles.png', {frameWidth: 70, frameHeight: 70});
        // simple coin image
        this.load.image('coin', 'assets/coinGold.png');
        this.load.image('db_01', 'assets/db_01.png');

        // player animations
        this.load.atlas('player', 'assets/player.png', 'assets/player.json');
    }

    create(){

        this.shenlong = this.add.image(-90,30,'shenlong',);
        this.shenlong.setOrigin(0,0);

        const next_button = this.add.image(725, 420, 'next_button');
        next_button.setInteractive();

        next_button.on('pointerdown', () => { 
            console.log('Clicked');
            this.scene.start('Level1') 
        });

        this.add.text(17,460, 'Instructions: Collect all the dragonballs to summon ', {font: '35px Arial', fill:'red'});
        this.add.text(17, 500, 'the dragon and make a wish granted', {font: '35px Arial', fill:'red'})

    }
}