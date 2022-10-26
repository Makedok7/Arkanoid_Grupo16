import Phaser from "phaser";

class GameOver extends Phaser.Scene{

    constructor(config){
        super('GameOver')
        this.config = config
        this.button = null
        this.text = null
    }
    create(){
        this.button = this.add.sprite(400,400,'button').setInteractive()
        this.button2 = this.add.sprite(400,500,'button').setInteractive()
        this.text = this.add.text(this.button.x,this.button.y,"Reintentar")
        this.text = this.add.text(this.button2.x,this.button2.y,"Menu")
        this.add.text(10,10,"Perdiste")

        this.button.on('pointerover',function(){
            this.setTint(0x094293)
        })

        this.button.on('pointerout', function () {
            this.clearTint();
        })

        this.button.on('pointerdown', function (){
            this.scene.start(this.config.playerLvl)
        },this)

        this.button2.on('pointerdown', function (){
            this.scene.start('Menu')
        },this)

        this.config.playerLife = 3
        this.config.playerScore = this.config.scoreTotal
    }
}

export default GameOver