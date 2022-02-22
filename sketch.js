
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var paperGroup;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
    //4crea paperObject
	
	//paper = new paperObject(200,450,70);
	paperObject=new paper(200,450,70);

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
	paperGroup = new Group();
	//Crea el Suelo
	

	

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  //5 función display para paperObject
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		//6 aplicar una fuerza a un cuerpo
    	// Matter.Body.Force(paperObject.body,paperObject.body.position,{x:130,y:-145});
		// Matter.Body.apply(paperObject.body,paperObject.body.position,{x:130,y:-145});
		 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
		// Matter.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
    
  	}
	 
}





