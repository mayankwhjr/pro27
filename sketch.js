
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(500,75)
bob1= new Bob(100,200)
bob2= new Bob(300,200)
bob3= new Bob(500,200)
bob4= new Bob(700,200)
bob5= new Bob(900,200)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  drawSprites();
 
}



