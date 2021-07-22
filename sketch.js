
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4,
bobObject5;
var rope1, rope2, rope3, rope4, rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob;
	bobObject2 = new Bob;
	bobObject3 = new Bob;
	bobObject4 = new Bob;
	bobObject5 = new Bob;

	rope1 = new Rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0);
	rope2 = new Rope(bobObject2,body, roofObject.body, -bobDiameter*2, 0);
	rope3 = new Rope(bobObject3,body, roofObject.body, -bobDiameter*2, 0);
	rope4 = new Rope(bobObject4,body, roofObject.body, -bobDiameter*2, 0);
	rope5 = new Rope(bobObject5,body, roofObject.body, -bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed(){
    if(keyCode === //what's the keycode for up arrow key?){
       //i don't understand what to do here
    }
}