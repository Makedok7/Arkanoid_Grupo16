import Phaser, { CANVAS } from 'phaser'
import React, { useEffect, useState } from 'react'
import Escena from './Escena.js'
import Nav from './Nav.js';

export default function Juego(){
    const [listo, setListo] = useState(false)

    useEffect(() => {
  
      var config = {
        type: Phaser.AUTO,
        parent:'game',
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
  
    return(
        <>
        {Nav()}
        <div id='game'></div>
        <button type='button' className='btn btn-primary' onClick={()=>setListo(true)}>Reset</button>
        </>)
}