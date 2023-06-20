'use client';
import Phaser from 'phaser';
import { useEffect } from 'react';

const GameScene = new Phaser.Class({
  Extends: Phaser.Scene,

  initialize: function() {
    Phaser.Scene.call(this, { key: 'gameScene' });
  },

  preload: function (){
    // Preload assets
  },

  create: function() {
    // Create game entities
  },

  update: function() {
    // Update game entities
  }
});


const gameConfig: Phaser.Types.Core.GameConfig = {
    title: 'Arcane Barrage',
    type: Phaser.AUTO,
    scale: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    scene: GameScene,
    parent: 'game-container',
  };

const GamePage = () => {
  useEffect(() => {
    if (document.getElementById('game-container')?.childNodes.length === 0) {
      new Phaser.Game(gameConfig);
    }
    return () => {};
  }, []);
  
  return (
    <div id="game-container" />
    );
  
  };

  export default GamePage;