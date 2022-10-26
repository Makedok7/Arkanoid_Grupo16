import Phaser from "phaser";

class Menu extends Phaser.Scene{

    constructor(config){
        super('Menu')
        this.config = config
        this.button = null
        this.text = null
    }

    create(){
        this.button = this.add.sprite(400,400,'button').setInteractive()
        this.button2 = this.add.sprite(300,500,'button').setInteractive()
        this.button3 = this.add.sprite(500,500,'button').setInteractive()
        this.text = this.add.text(this.button.x,this.button.y,"Jugar")
        this.text = this.add.text(this.button2.x,this.button2.y,"Nivel1")
        this.text = this.add.text(this.button3.x,this.button3.y,"Nivel2")

        this.button.on('pointerover',function(){
            this.setTint(0x094293)
        })

        this.button.on('pointerout', function () {
            this.clearTint();
        })

        this.button.on('pointerdown', function (){
            this.scene.start('Nivel1')
        },this)

        this.button2.on('pointerdown', function (){
            this.scene.start('Nivel1')
        },this)

        this.button3.on('pointerdown', function (){
            this.scene.start('Nivel2')
        },this)

        this.config.scoreTotal = 0;
        this.config.playerScore = 0;
        this.config.playerLife = 3;
    }
    
}

export default Menu