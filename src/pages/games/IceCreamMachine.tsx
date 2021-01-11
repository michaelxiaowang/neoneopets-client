import { IonContent, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import Phaser from 'phaser';
import bg from './bg_and_cones.png';
import chiaani from './chiaani.png';

class GameScene extends Phaser.Scene {

  character: any;
  pointer: any;

  constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
    super(config);
  }

  preload() {
    this.load.image("background", bg);
    this.load.image("chiaani", chiaani);
  }

  create() {
    this.add.image(0, 0, "background").setOrigin(0, 0);
    this.character = this.add.image(270, 274, 'chiaani');
    this.pointer = this.input.mousePointer;
  }

  update() {
    // this.input.on("pointermove", (pointer: any, x: number, y: number, e: any) => {
    //   this.character.setPosition(x, y);
    // })
    this.character.setPosition(this.pointer.x, this.pointer.y);
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 500,
  height: 540,
  physics: {
      default: 'arcade',
  },
  parent: 'game',
  scene: GameScene
};

class IceCreamMachine extends React.Component {

  game = new Phaser.Game(config);

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.game = new Phaser.Game(config);
  }

  render() {
    return (
      <IonPage>
        <IonContent>
          <div id="game"/>
        </IonContent>
      </IonPage>
    )
  }
}

export default IceCreamMachine;