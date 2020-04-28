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
        //520 x 180 Start Button
        this.load.image('start','./assets/Start.png');
    }
    create(){
        //Button
        var button = this.add.sprite(190,200,`start`).setScale(0.5,0.5).setOrigin(0,0).setInteractive();
        button.on('pointerover',this.over);
        button.on('pointerout',this.out);
        button.on('pointerup',this.up,this);

        // Define keyboard keys
        //keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        //keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        // Change scenes
        // this.scene.start("playScene");
        
        //game.music = this.sound.add('bg_music');
        //game.music.setLoop(true);
    }

    update() { /*
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            // Easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        }
        else if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            // Hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 15
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene');
        } */
    }

    //If mouse clicks button
    up() {
        console.log('changed scene')
        this.scene.start("playScene");
    }
    //If mouse hovers button (animation?)
    over() {
        console.log('button over');
    }
    //If mouse leaves button (animation?)
    out() {
        console.log('button out');
    }
}