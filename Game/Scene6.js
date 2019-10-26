class Scene6 extends Phaser.Scene {
    constructor(){
        super('endGame');
    }

    create(){
        this.background = this.add.image(0,0,'End');
        this.background.setOrigin(0,0);

        clap = this.sound.add('clap')
        clap.loop = true
        clap.play()

    }
}