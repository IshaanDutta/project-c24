
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

    
	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(700,320,130,70);
	stone = new Stone(400,300,130,70);
	rubber = new Rubber(400,300,130,70);
	ground = new Ground(400,550,800,10);
	sand1 = new Sand(10,300,5,5);
	sand2 = new Sand(15,300,5,5);
	sand3 = new Sand(20,300,5,5);
	sand4 = new Sand(25,300,5,5);
	sand5 = new Sand(30,300,5,5);
	sand6 = new Sand(35,300,5,5);
	sand7 = new Sand(40,300,5,5);
	sand8 = new Sand(45,300,5,5);
	sand9 = new Sand(50,300,5,5);
	sand10 = new Sand(55,300,5,5);
	Engine.run(engine);
	
	
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  hammer.display();
  stone.display();
  rubber.display();
  ground.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  drawSprites();
 
}



