class Scene1 extends Phaser.Scene {
    constructor(){
        super('bootGame');
    }

    preload() {
        this.load.image('background', 'assets/Menu.jpg')
        this.load.image('start_button', 'assets/start.png')
    }

    create() {
        this.add.text(20,20, 'Loading Game')
        this.scene.start('playGame')
    }
}