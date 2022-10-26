import Phaser from "phaser";

class Preload extends Phaser.Scene{

    constructor(){
        super('Preload')
    }

    preload() {

        this.load.setPath('../images/');

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