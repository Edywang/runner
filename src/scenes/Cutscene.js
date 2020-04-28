class Cutscene extends Phaser.Scene {
    constructor(){
        super("cutScene");
    }

    preload() {
    }
    create(){
        this.scene.start("playScene");
    }
    update() {
    }
}