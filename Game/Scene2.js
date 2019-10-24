class Scene2 extends Phaser.Scene {
    constructor(){
        super('playGame');
    }

    preload() {
        this.load.image('shenlong', 'assets/shen2.png')
        this.load.image('next_button', 'assets/next.png')
    }

    create(){
        this.background = this.add.image(0,0,'background');
        this.background.setOrigin(0,0);

        const start_button = this.add.image(125, 420, 'start_button');
        start_button.setInteractive();

        start_button.on('pointerdown', () => { 
            console.log('Clicked'); 
            this.scene.start('intro')
        });

        this.add.text(20,20, 'Menu', {font: '35px Arial', fill:'yellow'});

    }
}