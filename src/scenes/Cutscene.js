class Cutscene extends Phaser.Scene {
    constructor(){
        super("cutScene");
    }

    preload() {
        // 1280x758 Football sprite (Transparent background)
        this.load.image('football', './assets/football.png');
    }
    create(){
        this.football = this.add.sprite(40, 460, 'football');
        // this.scene.start("playScene");
    }
    update() {
    }
}