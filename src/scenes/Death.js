class Death extends Phaser.Scene {
    constructor(){
        super("deathScene");
    }

    preload() {
        //580 x 220 Play Again Button
        this.load.image('playagain','./assets/playagain.png');
    }
    create(){
        //Play Again Button
        var button = this.add.sprite(175,300,`playagain`).setScale(0.5,0.5).setOrigin(0,0).setInteractive();
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
            this.scene.start("cutScene");
        },this);
    }
    update() {
    }
}