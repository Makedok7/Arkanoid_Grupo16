import Phaser from "phaser";

class Menu extends Phaser.Scene{

    constructor(){
        super('Menu')

        this.button = null
        this.text = null
    }

    create(){
        this.button = this.add.sprite(400,400,'button').setInteractive()
        this.text = this.add.text(this.button.x,this.button.y,"Jugar")

        this.button.on('pointerover',function(){
            this.setTint(0x094293)
        })

        this.button.on('pointerout', function () {
            this.clearTint();
        })

        this.button.on('pointerdown', function (){
            this.scene.start('Play')
        },this)
    }
    

}

export default Menu