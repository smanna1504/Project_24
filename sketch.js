const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinSide1,dustbinSide2,dustbinSide3, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
  dustbinSide1=new Dustbin(1000,510,200,20);
  dustbinSide2=new Dustbin(1100,460,20,100);
  dustbinSide3=new Dustbin(900,460,20,100);
  	paperObject=new Paper(200,450,40);
	groundObject=new Ground(width/2,670,width,20);
	//Create a Ground
	

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paperObject.display();
  groundObject.display();
  dustbinSide1.display();
 dustbinSide2.display();
  dustbinSide3.display();
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:75,y:-75});
    
  	}
}