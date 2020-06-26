var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, stand, arrowSound;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

const Constraint = Matter.Constraint;
function preload()
{
	helicopterIMG=loadImage("bow.png")
	packageIMG=loadImage("ball.png")
	standIMG=loadImage("arrow.png")

	//arrowSound=loadSound("swoosh.mp3")
	
}

function setup() {
	createCanvas(2000, 700);
	//rectMode(CENTER);
	arrowSound=loadSound("swoosh.mp3")

 
	stand = createSprite(114, 300, 120, 20)
	stand.addImage(standIMG)
	stand.scale=0.25
	

	packageSprite=createSprite(width/9, 50, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.014
	packageSprite.velocityY=5

	ball1 = createSprite(250, 50, 10, 10)
	ball1.addImage(packageIMG)
	ball1.scale=0.014
	ball1.velocityY=7

	ball2 = createSprite(280, 50, 10, 10)
	ball2.addImage(packageIMG)
	ball2.scale=0.014
	ball2.velocityY=9

	ball3 = createSprite(320, 50, 10, 10)
	ball3.addImage(packageIMG)
	ball3.scale=0.014
	ball3.velocityY=11
	
	

	helicopterSprite=createSprite(width/14, 300, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.2
	//helicopterSprite.debug=true;
	
	//stand.debug=true;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="black"

	ground2=createSprite(900, 5, width ,10);
	groundSprite.shapeColor="black"

ball1.bounceOff(groundSprite)
	
	 
	
}


function draw() {
  rectMode(CENTER);
  background("white");
  //Engine.run(engine);
  if (mousePressedOver(stand)){
	stand.velocityX=9

	stand = createSprite(114, 300, 120, 20)
	stand.addImage(standIMG)
	stand.scale=0.25

	arrowSound.play()
}


if(packageSprite.y===600){
packageSprite.velocityY=-10
packageSprite.velocityX=6
}
if(packageSprite.y<49){
packageSprite.velocityY=7
}
//ball1 physics
if(ball1.bounceOff(groundSprite)){
	ball1.velocityX=4
	ball1.velocityY=-13
}
if(ball1.bounceOff(ground2)){
	ball1.velocityX=5
	ball1.velocityY=13	
}
//ball1 physics
if(ball2.bounceOff(groundSprite)){
	ball2.velocityX=5
	ball2.velocityY=-11
}
if(ball2.bounceOff(ground2)){
	ball2.velocityX=5
	ball2.velocityY=9
}
//ball3.physics
if(ball3.bounceOff(groundSprite)){
	ball3.velocityX=4
	ball23velocityY=-15
}
if(ball3.bounceOff(ground2)){
	ball3.velocityX=4
	ball3.velocityY=8
}


if(stand.bounceOff(ball1)){
	stand.velocityX=0
	stand.velocityY=0
	ball1.velocityY=0
	ball1.velocityX=0
}
if(stand.bounceOff(ball2)){
	stand.velocityX=0
	stand.velocityY=0
	ball2.velocityY=0
	ball2.velocityX=0
}
if(stand.bounceOff(ball3)){
	stand.velocityX=0
	stand.velocityY=0
	ball3.velocityY=0
	ball3.velocityX=0
}
if(stand.bounceOff(packageSprite)){
	stand.velocityX=0
	stand.velocityY=0
	packageSprite.velocityY=0
	packageSprite.velocityX=0
}


ball1.bounceOff(packageSprite)
ball1.bounceOff(ball2)
ball1.bounceOff(ball3)
ball2.bounceOff(packageSprite)
ball2.bounceOff(ball1)
ball2.bounceOff(ball3)
packageSprite.bounceOff(ball1)
packageSprite.bounceOff(ball2)
packageSprite.bounceOff(ball3)
ball3.bounceOff(packageSprite)
ball3.bounceOff(ball1)
ball3.bounceOff(ball2)


ball1.display()
  drawSprites();
 
}





