import Phaser from "phaser";

class Nivel2 extends Phaser.Scene{

    constructor(config){
        super('Nivel2')
        this.config = config
        this.player = null;
        this.ball = null;
        this.bricks = null;
        this.scoreText = null;
        this.lifeText = null;
    }

    create(){
        this.add.image(400,300,'fondo');
        this.scoreText = this.add.text(16, 16, 'Puntuacion: ' + this.config.playerScore, { fontSize: '32px', fill: '#FFF' });
        this.lifeText = this.add.text(500, 16, 'Vidas: ' + this.config.playerLife, { fontSize: '32px', fill: '#FFF' });
        this.physics.world.setBoundsCollision(true, true, true, false);
        this.player = this.physics.add.sprite(400, 550, 'player');
        this.player.body.allowGravity = false;
        this.player.setImmovable();
        this.player.setCollideWorldBounds(true);
        this.player.setData('hasBall', true);

        this.ball = this.physics.add.sprite(this.player.x, this.player.y -25, 'ball')
        this.ball.body.allowGravity = false;
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setScale(0.5);

        this.bricks = this.physics.add.staticGroup({
            key: 'bricks',
            frame: ['orange', 'blue1', 'green', 'blue2'],
            frameQuantity: 4,
            gridAlign: { width: 8, height: 4, cellWidth: 64, cellHeight: 32, x: 176, y: 100 }
        });


        this.config.playerLvl='Nivel2'
        this.config.nextLvl='Menu'
        this.config.scorePlayer = this.config.scoreTotal

        this.scene.launch('Play',{player:this.player,ball:this.ball,bricks:this.bricks,physics:this.physics})
    }
    update(){
        this.scoreText.setText('Puntuacion:' + this.config.playerScore)
        this.lifeText.setText('Vidas:' + this.config.playerLife)    
    }

}

export default Nivel2