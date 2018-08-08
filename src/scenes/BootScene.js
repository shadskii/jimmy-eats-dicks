import {Scene} from 'phaser';

/**
 * This scene's primary responsibility is to load assets for the rest of the game.
 */
class BootScene extends Scene {
    constructor() {
        super({key: 'BootScene'});
    }

    preload() {
        this.load.image('water', 'images/water.png');
        this.load.image('ground', 'images/sandy-bottom.png');
        this.load.image('dick', 'images/dick.png');
        this.load.image('jimmy', 'images/jimmy.png');
        this.load.image('play-again', 'images/play_again.png');
    }

    create() {
        this.scene.start('TitleScene');
    }
}

export default BootScene;
