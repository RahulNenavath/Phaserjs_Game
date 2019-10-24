var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false
        }
    },
    scene: [Scene1, Scene2, Scene3, Scene4]
};
 
var game = new Phaser.Game(config);
 
var map;
var player;
var cursors;
var groundLayer, coinLayer;
var text;
var score = 0;
var text;