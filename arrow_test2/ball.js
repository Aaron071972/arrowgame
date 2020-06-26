class Ball extends BaseClass{
    constructor(x,y){
      super(x,y, 30, 30);
      this.image = loadImage("ball.png");

    }
    display(){
      // this.body.position.x = mouseX;
      // this.body.position.y = mouseY;
      // this.scale=0.5
      // this.velocityY=3
      super.display();
    }
}