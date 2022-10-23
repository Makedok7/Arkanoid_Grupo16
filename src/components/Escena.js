
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
        this.player.setData('hasBall',true);

        this.ball = this.physics.add.sprite(this.player.x, this.player.y-50, 'ball')
        this.ball.body.allowGravity = false;
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setScale(0.5);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.ball, this.player, this.hitPlayer, null, this)
    }

    update() {

        if(this.player.getData('hasBall')){
            this.ball.x = this.player.x
        }

        this.input.on('pointermove', function (pointer) {
            this.player.x = pointer.x;
        }, this);

        this.input.on('pointerup', function (pointer) {
            if(this.player.getData('hasBall')){
                this.ball.setVelocity(-75, -300)
                this.player.setData('hasBall',false)
            }
        }, this);

        if (this.ball.y > 600) {
            this.resetBall();
        }
    }

    hitPlayer() {

        if (this.ball.x < this.player.x) {
            this.ball.setVelocityX(-300)
        }
        else if (this.ball.x > this.player.x) {
            this.ball.setVelocityX(300)
        }
    }

    resetBall(){
        this.ball.setVelocity(0)
        this.ball.setPosition(this.player.x,this.player.y-50)
        this.player.setData('hasBall',true)
    }
}

export default Escena