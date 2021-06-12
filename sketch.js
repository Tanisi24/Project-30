const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var polygon_img;
var stand;
var block1, block2, block3, block4, block5, block6, block7, block8, block9 ,block10, block11, block12, block13, block14, block15, block16;

function preload(){
	polygon_img = loadImage("polygon.png");
}

function setup() {
	createCanvas(1000, 700);
     
	engine = Engine.create();
	world = engine.world;

	stand = new Ground(390,300,330,10);
	ground = new Ground(510,600,1000,10);

    polygon = Bodies.circle(50,200,20);
	World.add(world,polygon);

	slingshot = new Slingshot(this.polygon,{x:100,y:100});

	block1 = new Box(330,235,30,40);
	block2 = new Box(360,235,30,40);
	block3 = new Box(390,235,30,40);
	block4 = new Box(420,235,30,40);
	block5 = new Box(450,235,30,40);

	block6 = new Box(360,195,30,40);
	block7 = new Box(390,195,30,40);
	block8 = new Box(420,195,30,40);

	block9 = new Box(390,155,30,40);

	block10 = new Box(300,275,30,40);
	block11 = new Box(330,275,30,40);
	block12 = new Box(360,275,30,40);
	block13 = new Box(390,275,30,40);
	block14 = new Box(420,275,30,40);
	block15 = new Box(450,275,30,40);
	block16 = new Box(480,275,30,40);
}

function draw(){
	background(255);

   imageMode(CENTER)
   
   image(polygon_img,polygon.position.x,polygon.position.y,40,40);

	ground.display();
	stand.display();
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();     
	block8.display();
	block9.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();
    slingshot.display();


	 //text(mouseX+","+mouseY,mouseX,mouseY);

	 Engine.run(engine);
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}



function keyPressed() {
	if (keyCode === 32) {
		slingshot.attach(this.polygon);
	}
	}