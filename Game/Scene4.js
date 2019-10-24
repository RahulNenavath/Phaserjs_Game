class Scene4 extends Phaser.Scene {
    constructor(){
        super('Level1');
    }


    create(){

        // game.physics.startSystem(Phaser.Physics.ARCADE)

        this.add.text(0,0, 'Level1', {font: '35px Arial', fill:'red'});

        // load the map 
        map = this.make.tilemap({key: 'map'});
    
        // tiles for the ground layer
        var groundTiles = map.addTilesetImage('tiles');
        // create the ground layer
        groundLayer = map.createDynamicLayer('World', groundTiles, 0, 0);
        // the player will collide with this layer
        groundLayer.setCollisionByExclusion([-1]);
    
        // coin image used as tileset
        
        var coinTiles = map.addTilesetImage('db_01');
        // add coins as tiles
        coinLayer = map.createDynamicLayer('Coins', coinTiles, 15, 0);
    
        // set the boundaries of our game world
        this.physics.world.bounds.width = groundLayer.width;
        this.physics.world.bounds.height = groundLayer.height;

        player = this.physics.add.sprite(200, 200, 'player');
        player.setBounce(0.2); // our player will bounce from items
        player.setCollideWorldBounds(true); // don't go out of the map

        // small fix to our player images, we resize the physics body object slightly
        // player.body.setSize(player.width, player.height-8);
    
        // player will collide with the level tiles
        this.physics.add.collider(groundLayer, player);
        // this.physics.add.collider(groundLayer, oneStar)
    
        coinLayer.setTileIndexCallback(17, collectCoin, this);
        
        // when the player overlaps with a tile with index 17, collectCoin 
        // will be called    
        this.physics.add.overlap(player, coinLayer);
        // this.physics.add.overlap(player, oneStar);

        // player walk animation
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('player', {prefix: 'p1_walk', start: 1, end: 0, zeroPad: 2}),
            frameRate: 10,
            repeat: -1
        });
        // player jumps animation
        this.anims.create({
            key: 'jump',
            frames: [{key: 'player', frame: 'p1_jump'}],
            frameRate: 10,
        });


        // idle with only one frame, so repeat is not neaded
        this.anims.create({
            key: 'idle',
            frames: [{key: 'player', frame: 'p1_stand'}],
            frameRate: 10,
        });

        cursors = this.input.keyboard.createCursorKeys();

        // set bounds so the camera won't go outside the game world
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        // make the camera follow the player
        this.cameras.main.startFollow(player);
    
        // set background color, so the sky is not black    
        this.cameras.main.setBackgroundColor('#ccccff');

        function collectCoin(sprite, tile) {
            coinLayer.removeTileAt(tile.x, tile.y); // remove the tile/coin
            score ++; // increment the score
            text.setText('Score: '+score); // set the text to show the current score
            return false;
        }

        text = this.add.text(20, 570, 'Score: 0', {
            fontSize: '20px',
            fill: '#ffffff'
        });
        text.setScrollFactor(0);


    }

    update(time, delta){
        if (cursors.left.isDown){
            player.body.setVelocityX(-200); // move left
            player.anims.play('walk', true); // play walk animation
            player.flipX= true; // flip the sprite to the left
        }
        else if (cursors.right.isDown){
            player.body.setVelocityX(200); // move right
            player.anims.play('walk', true); // play walk animatio
            player.flipX = false; // use the original sprite looking to the right
        }
        else if (cursors.up.isDown){
            player.body.setVelocityY(-270);
            player.anims.play('jump',true)
            player.flipX = false;
        }
        else {
            player.body.setVelocityX(0);
            player.anims.play('idle', true);
        }
    }

    
}