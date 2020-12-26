var paper, dustbin, ground;
var paperImg, dustbinImg, groundImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	// paperImg = loadImage("PaperIMAGE.png");
	// dustbinImg = loadImage("DustbinIMAGE.png");
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	dustbin = new Dustbin(1200,650);
	paper = new Paper(200,450,70);
	ground = new Ground(width/2,670,width,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  ground.display();
  dustbin.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:158,y:-158});
	}
}

