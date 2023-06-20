'use client';
import Phaser from 'phaser';
import { useEffect } from 'react';

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' });
  }

  preload() {
    // Preload assets
  }

  create() {
    // Create game entities
  }

  update() {
    // Update game entities
  }
}

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
  }, []);

  return <div id="game-container" />;
};

export default GamePage;
