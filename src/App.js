import Phaser from 'phaser'
import React, { useEffect, useState } from 'react'
import Escena from './components/Escena.js'

export default function App() {

  const [listo, setListo] = useState(false)

  useEffect(() => {

    var config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 800 }
        }
      },
      scene:[Escena]
    };

    const game = new Phaser.Game(config);

    game.events.on("LISTO", setListo)

    return () => {
      setListo(false);
      game.destroy(true);
    }

  }, [listo]);

}
