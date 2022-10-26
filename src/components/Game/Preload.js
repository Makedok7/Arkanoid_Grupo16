import Phaser from "phaser";

class Preload extends Phaser.Scene{

    constructor(){
        super('Preload')
    }

    preload() {
        //Ruta de las imagenes
        this.load.setPath('../images/');
        //Carga de las imagenes
        this.load.image('player', 'player.png');
        this.load.image('ball', 'ball.png');
        this.load.atlas('bricks', 'bricks.png', 'bricks.json');
        this.load.image('button','button.png')
    }

    create(){
        this.scene.start('Menu')
    }
    
}

export default Preload