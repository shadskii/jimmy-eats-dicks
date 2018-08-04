import {Phaser, GameObjects} from 'phaser';

/**
 * A general enemy for the game. Enemies should extend this.
 */
export default class extends GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.jimmy = this.scene.jimmy;
        this.scene.physics.add.collider(this, this.jimmy, this.getEaten, this.getEaten, this);
        this.eaten = false;
        this.body.velocity.x = -500;
        this.acceleration = 0;
        this.body.maxVelocity.y = 0;
        this.body.setSize(200, 20);
        this.setScale(0.3, 0.3);
    }

    getEaten() {
        this.eaten = true;
    }

    update() {
        let xRightBoundary = this.x + this.displayWidth / 2;
        if (this.eaten) {
            this.jimmy.eatADick();
        }
        if (xRightBoundary <= 0 || this.eaten) {
            this.scene.enemies.remove(this);
            this.destroy();
        }
    }
}
