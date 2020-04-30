class Cutscene extends Phaser.Scene {
    constructor(){
        super("cutScene");
    }

    preload() {
        // 1280x758 Football sprite (Transparent background)
        this.load.image('football', './assets/footballfullres.png');
    }
    create(){
        this.scene.start("playScene");
    }
    update() {
    }
}