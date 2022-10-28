import Phaser from "phaser";

class Win extends Phaser.Scene{

    constructor(config){
        super('Win')
        this.config = config
        this.button = null
        this.text = null
    }
    create(){
        this.button = this.add.sprite(400,400,'next').setInteractive()
        this.button2 = this.add.sprite(400,500,'menu').setInteractive()
        this.image=this.add.image(400,100,'youwin')
        //this.text = this.add.text(this.button.x,this.button.y,"Siguiente Nivel")
        //this.text = this.add.text(this.button2.x,this.button2.y,"Menu")
        //this.add.text(10,10,"Ganaste")

        this.button.on('pointerover',function(){
            this.setTint(0x094293)
        })

        this.button.on('pointerout', function () {
            this.clearTint();
        })

        this.button.on('pointerdown', function (){
            this.scene.start(this.config.nextLvl)
        },this)

        this.button2.on('pointerdown', function (){
            this.scene.start('Menu')
        },this)

        this.config.scoreTotal += this.config.playerScore
    }
}

export default Win