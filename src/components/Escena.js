
class Escena extends Phaser.Scene {

    player = null;
    ball = null;
    cursors = null;
    bricks = null;
    
    create() {
        

        this.physics.world.setBoundsCollision(true, true, true, false);

        this.player = this.physics.add.sprite(400, 550, 'player');
        this.player.body.allowGravity = false;
        this.player.setImmovable();
        this.player.setCollideWorldBounds(true);
        this.player.setData('hasBall', true);
        this.player.setData('life', 3)

        this.ball = this.physics.add.sprite(this.player.x, this.player.y - 50, 'ball')
        this.ball.body.allowGravity = false;
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setScale(0.5);

        this.bricks = this.physics.add.staticGroup({
            key: 'bricks',
            frame: ['orange', 'blue1', 'green', 'blue2'],
            frameQuantity: 8,
            gridAlign: { width: 8, height: 4, cellWidth: 64, cellHeight: 32, x: 176, y: 100 }
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(this.ball, this.player, this.hitPlayer, null, this)
        this.physics.add.collider(this.ball, this.bricks, this.hitBricks, null, this)

        scoreText = this.add.text(16, 16, 'Puntuacion: 0', { fontSize: '32px', fill: '#FFF' });
        
    }

    update() {
        
        if (this.player.getData('hasBall')) {
            this.ball.x = this.player.x
        }

        this.input.on('pointermove', function (pointer) {
            this.player.x = pointer.x;
        }, this);

        this.input.on('pointerup', function (pointer) {
            if (this.player.getData('hasBall')) {
                this.ball.setVelocity(Phaser.Math.RND.sign() * 75, -400)
                this.player.setData('hasBall', false)
            }
        }, this);

        if (this.ball.y > 600) {
            this.resetBall();
            this.player.setData('life', this.player.getData('life') - 1)
            console.log(this.player.getData('life'))
        }

        if (this.player.getData('life') == 0) {
            console.log('perdiste')
            this.resetBall()
            this.player.setData('life', 3)
        }
    }

    hitPlayer() {
        var distance = 20
        if (this.ball.x < this.player.x) {
            distance = this.player.x - this.ball.x
            this.ball.setVelocityX(distance*-5)
        }
        else if (this.ball.x > this.player.x) {
            distance = this.ball.x - this.player.x 
            this.ball.setVelocityX(distance*5)
        }
        
    }

    hitBricks(ball, brick) {
        brick.disableBody(true, true)
        score += 10;
        scoreText.setText('Puntuacion: ' + score);
        if (this.bricks.countActive() == 0) {
            console.log("ganaste")
        }
        //console.log(score);
    }

    resetBall() {
        this.ball.setVelocity(0)
        this.ball.setPosition(this.player.x, this.player.y - 50)
        this.player.setData('hasBall', true)
    }
}

var score = 0;
var scoreText;

export default Escena