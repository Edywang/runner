// Phaser Scene Steps:
// 1. init() - Prepare data for scene (Specifically for little bits of data like variables passed between scenes)
// 2. preload() - Prepare assets for scene (Specifically for assets)
// 3. create() - Add assets to scene
// 4. update() - Loops continuously for duration of scene at chosen frame rate

class Menu extends Phaser.Scene {
    constructor(){
        super("menuScene");
    }

    preload() {
        //580 x 220 Start Button
        this.load.image('start','./assets/Start.png');
        //580 x 220 Credits Button
        this.load.image('credits','./assets/Credits.png');
    }
    
    create(){
        //Start Button
        var button = this.add.sprite(175,200,`start`).setScale(0.5,0.5).setOrigin(0,0).setInteractive();
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


        //Credits Button
        var button2 = this.add.sprite(175,300,`credits`).setScale(0.5,0.5).setOrigin(0,0).setInteractive();
        //Mouse Hover Button
        button2.on('pointerover',function(){
            console.log('button over');
        });
        //Mouse Leaves Button
        button2.on('pointerout',function(){
            console.log('button out');
        });
        //Mouse Clicks Button
        button2.on('pointerup',function(){
            console.log('changed scene');
            this.scene.start("creditsScene");
        },this);
        
        //Start shortcut
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        
        //game.music = this.sound.add('bg_music');
        //game.music.setLoop(true);
    }

    update() { 
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.scene.start("cutScene");
        }
    }
}