import Phaser, { CANVAS } from 'phaser'
import React, { useEffect, useState } from 'react'
import Escena from './Escena.js'
import Nav from './Nav.js';
import Preload from './Preload.js';
import Play from './Play.js';
import Menu from './Menu.js';

export default function Juego(){
    const [listo, setListo] = useState(false)

    useEffect(() => {
      
      const CONFIGURACION  = {
        type: Phaser.AUTO,
        scale:{
          width:800,
          height:600,
        },
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 800 }
          }
        },
        parent:'game'
      }

      const Escenas = [Preload,Menu,Play]
      const crearEscena = Scene => new Scene(CONFIGURACION)
      const iniciarEscena = () => Escenas.map(crearEscena)

      var config = {
        ...CONFIGURACION,
        scene:iniciarEscena()
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