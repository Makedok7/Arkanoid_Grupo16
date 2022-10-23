
class Escena extends Phaser.Scene {

    player = null;
    ball = null;
    cursors = null;

    preload() {

        this.load.setPath('../images/');

        this.load.image('player', 'player.png');
        this.load.image('ball', 'ball.png');
    }

    create() {

        this.physics.world.setBoundsCollision(true, true, true, false);

        this.player = this.physics.add.sprite(400, 550, 'player');
        this.player.body.allowGravity = false;
        this.player.setImmovable();
        this.player.setCollideWorldBounds(true);
        this.player.setScale(0.5);

        this.ball = this.physics.add.sprite(300, 300, 'ball')
        this.ball.body.allowGravity = false;
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setScale(0.5);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.ball, this.player, this.hitPlayer, null, this)
    }

    update() {

        this.input.on('pointermove', function (pointer) {
            this.player.x = pointer.x;
        }, this);

        this.input.on('pointerup', function (pointer) {
            this.ball.setVelocity(-75, -300)
        }, this);

        if (this.ball.y > 600) {

        }
    }

    hitPlayer() {
        var diff = 0;
        if (this.ball.x < this.player.x) {
            diff = this.player.x - this.ball.x
            this.ball.setVelocityX(-10 * diff)
        }
        else if (this.ball.x > this.player.x) {
            diff = this.ball.x - this.player.x  
            this.ball.setVelocityX(10 * diff)
        }
    }
}

export default Escena