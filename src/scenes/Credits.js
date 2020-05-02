class Credits extends Phaser.Scene {
    constructor(){
        super("creditsScene");
    }

    preload() {
        //580 x 220 Back Button
        this.load.image('back','./assets/Back.png');
    }
    create(){
        //Back Button
        var button = this.add.sprite(175,300,`back`).setScale(0.5,0.5).setOrigin(0,0).setInteractive();
        //Mouse Hover Button
        button.on('pointerover',function(){
            console.log('button over');
        });
        //Mouse Leaves Button
        button.on('pointerout',function(){
            console.log('button out');
        });
        //Mouse Clicks Button
        button.on('pointerup',function(){
            console.log('changed scene');
            this.sound.play('blip');
            this.scene.start("menuScene");
        },this);
    }
    update() {
    }
}