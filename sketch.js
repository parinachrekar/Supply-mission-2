var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
   

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 15 , {isStatic:true} );
 	World.add(world, ground);

	 	ground1 = Bodies.rectangle(width/2, 660, 150, 10 , {isStatic:true} );
		 World.add(world, ground1);
	 ground2 = Bodies.rectangle(width/2-75, 650, 10, 50 , {isStatic:true} );
	 World.add(world, ground2);
			 ground3 = Bodies.rectangle(width/2+75, 650, 10, 50 , {isStatic:true} );
 			World.add(world, ground3);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y ;
  rect(ground1.position.x,ground1.position.y,150,10);
  rect(ground2.position.x,ground2.position.y,10,50);
  rect(ground3.position.x,ground3.position.y,10,50);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);
    
  }
}



