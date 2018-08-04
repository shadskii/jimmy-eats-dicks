import {Phaser, GameObjects} from 'phaser';

/**
 * A general enemy for the game. Enemies should extend this.
 */
export default class extends GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.boaty = this.scene.boaty;
        this.scene.physics.add.collider(this, this.boaty, this.boatyHit, this.boatyHit, this);
        this.eaten = false;
        this.body.velocity.x = -1000;
        this.acceleration = 0;
        this.body.maxVelocity.y = 0;
        this.body.setSize(200, 20);
        this.setScale(0.3, 0.3);
    }

    boatyHit(mine, boaty) {
        this.boaty.die();
        return true;
    }

    getEaten() {
        this.jimmy.eatADick();
        this.eaten = true;
    }

    update() {
        let xRightBoundary = this.x + this.displayWidth / 2;
        if (xRightBoundary <= 0 || this.eaten) {
            this.scene.incrementScore();
            this.scene.enemies.remove(this);
            this.destroy();
        }
    }
}
