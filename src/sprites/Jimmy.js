import Phaser from 'phaser';

/**
 * Jimmy seriously loves dicks
 */
export default class Jimmy extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);
        this.acceleration = 800;
        this.body.maxVelocity.x = 300;
        this.alive = true;
        this.body.setCollideWorldBounds(true);
        this.body.setSize(100, 175);
        this.dicksEaten = 0;
    }

    update(jump) {
        if (jump) {
            this.jump();
        } else if (this.angle < 15) {
            this.angle += 0.75;
        }
    }

    jump() {
        this.body.setVelocityY(-400);
        if (this.angle > -20) {
            this.angle = -15;
        }
    }

    eatADick() {
        this.dicksEaten++;
    }
}
