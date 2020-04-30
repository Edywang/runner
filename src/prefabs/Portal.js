// Portal Prefab
class Portal extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, speedValue){
        super(scene, x, y, texture, frame);
        // Add this object to existing scene
        scene.add.existing(this);
        this.speed = speedValue;
    }
    
    update(){
        //Move Left
        this.x -= this.speed;
        //Wraparound
        if(this.x <= 0 - this.width){
            this.x = game.config.width + Math.random() * 1000;
            //Change speed
            //this.speed = Math.random()*10;
        }
    }
}