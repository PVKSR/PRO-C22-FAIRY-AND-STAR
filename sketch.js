var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	engine = Engine.create();
    world = engine.world;

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;



starBody = Bodies.circle(650 , 50 , 50)
	World.add(world, starBody);	

	

	

	
	
   
  
	World.add(world,star);
}


function draw() {
  background(bgImg);

  Engine.update(engine);

star.x = starBody.x ;
star.y = starBody.y;

 var staroptions ={
	isStatic:true
    }

if(starBody.position.y > 470){
	starBody = Bodies.circle(650 , 50 , 50 ,staroptions);
	World.add(world, starBody);
}


//ellipseMode(RADIUS);
//ellipse(starBody.position.x,starBody.position.y,20,20)

var staroptionsr = {
	restitution:1.0	
	}

	if(keyDown("space")){
		starBody = Bodies.circle(650 , 50 , 50 ,staroptionsr);
		World.add(world, starBody);
	}

  drawSprites();
  
  keyPressed()


}

function keyPressed() {
	if(keyDown("right")){
		fairy.x = fairy.x + 05;
	}

	if(keyDown("left")){
		fairy.x = fairy.x - 05;
	}



	
	

}
