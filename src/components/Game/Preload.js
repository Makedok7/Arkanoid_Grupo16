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
        this.load.image('botonjugar','botonjugar.png')
        this.load.image('level1','level1.png')
        this.load.image('level2','level2.png')
        this.load.image('menu','menu.png')
        this.load.image('next','next.png')
        this.load.image('tryagain','tryAgain.png')
        this.load.image('gameover','gameOver.jpg')
        this.load.image('youwin','youWin.jpg')
        this.load.image('principal','principal.jpg')
        this.load.image('fondo','fondo.png')
       
    }

    create(){
        this.scene.start('Menu')
    }
    
}

export default Preload