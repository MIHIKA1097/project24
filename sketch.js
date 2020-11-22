
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,side1,side2,side3,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	

	Engine.run(engine);
  side1=new Side(590,590,150,10);
  side2=new Side(510,550,10,80);
  side3=new Side(670,550,10,80); 
  paper=new Paper(100,590);
  ground=new Ground(400,600,800,10);
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
 side1.display();
 side2.display();
 side3.display();
 paper.display();
ground.display();
drawSprites();
// keyPressed();
}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-20})
}	 
}


