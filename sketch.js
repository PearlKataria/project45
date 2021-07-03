
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundImg;
var creaturesGroup;
var score=0;
function preload()
{
	backgroundImg=loadImage("background.gif")
	octopusImg=loadImage("octopus.png")
	seahorseImg=loadImage("seahorse.png")
	starfishImg=loadImage("starfish.png")
	fish1Img=loadImage("fish1.png")
	fish2Img=loadImage("fish2.png")
	fish3Img=loadImage("fish3.png")
	fish4Img=loadImage("fish4.png")
}

function setup() {
	createCanvas(400, 225);


	engine = Engine.create();
	world = engine.world;
	creaturesGroup=createGroup();

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black") ;
  image(backgroundImg,0,0,width,height)
  text("Score:"+ score, 300,50);
  text("Click on the sea creatures to gain points", 80,200)
  
  spawncreatures();
  
  drawSprites();
 
}
function spawncreatures() {
	if(frameCount%40===0){
	  var creature=createSprite(400,200,40,10)
	  creature.y=Math.round(random(10,215))
	  creature.x=Math.round(random(10,390))
	  var rand1=Math.round(random(1,7))
	  switch(rand1){
		case 1:creature.addImage(octopusImg)
		creature.scale=0.3
		  break;
		case 2:creature.addImage(seahorseImg)
		creature.scale=0.2;
		  break;
		  case 3:creature.addImage(starfishImg)
		  creature.scale=0.2;
		  break;
		  case 4:creature.addImage(fish1Img)
		  creature.scale=0.4;
		  break;
		  case 5:creature.addImage(fish2Img)
		  creature.scale=0.4;
		  break;
		  case 6:creature.addImage(fish3Img)
		  creature.scale=0.4;
		  break;
		  case 7:creature.addImage(fish4Img)
		  creature.scale=0.4;
		  break;
		  default:break;}
	  
		creature.velocityX=-3;
		
		creaturesGroup.add(creature);
		
		
	}
	}



