const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var ground1, ground2;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;

var polygon1;

var slingshot;

var Poly;

var score = 0;

function preload(){
Poly = loadImage('Polygon.jpg')
}

function setup() {

  engine = Engine.create();
  world = engine.world;
  createCanvas(1200,400);
  
  polygon1 = Bodies.circle(900,200,20,{density:1});

  World.add(world,polygon1);

 

  slingshot = new SlingShot(this.polygon1,{x:900, y:200});

  
ground1 = new Ground(280,360,300,20);
ground2 = new Ground(750,360,300,20)

box1 = new Box(180,330,40,40);
box2 = new Box(210,330,40,40);
box3 = new Box(240,330,40,40);
box4 = new Box(270,330,40,40);
box5 = new Box(300,330,40,40);
box6 = new Box(330,330,40,40);
box7 = new Box(360,330,40,40);

box8 = new Box(195,290,40,40);
box9 = new Box(235,290,40,40);
box10 = new Box(275,290,40,40);
box11 = new Box(305,290,40,40);
box12 = new Box(345,290,40,40);

box13 = new Box(225,250,40,40);
box14 = new Box(265,250,40,40);
box15 = new Box(305,250,40,40);

box16 = new Box(265,210,40,40);



box17 = new Box(650,330,40,40);
box18 = new Box(690,330,40,40);
box19 = new Box(730,330,40,40);
box20 = new Box(770,330,40,40);
box21 = new Box(810,330,40,40);

box22 = new Box(675,290,40,40);
box23 = new Box(715,290,40,40);
box24 = new Box(755,290,40,40);

box25 = new Box(715,250,40,40);




}

function draw() {
  background(255,255,0); 
  Engine.update(engine);

  text("Score  " + score, 750,40)

  
  imageMode(CENTER);
image(Poly,polygon1.position.x,polygon1.position.y,40,40);

slingshot.display();
  

ground1.display();
ground2.display();

box1.display();

box2.display();

box3.display();

box4.display();

box5.display();

box6.display();

box7.display();


box8.display();

box9.display();
;
box10.display();

box11.display();

box12.display();


box13.display();

box14.display();

box15.display();


box16.display();


box17.display();

box18.display();

box19.display();

box20.display();

box21.display();


box22.display();

box23.display();

box24.display();


box25.display();
;



box1.score();

box2.score();

box3.score();

box4.score();

box5.score();

box6.score();

box7.score();


box8.score();

box9.score();

box10.score();

box11.score();

box12.score();


box13.score();

box14.score();

box15.score();


box16.score();


box17.score();

box18.score();

box19.score();

box20.score();

box21.score();


box22.score();

box23.score();

box24.score();


box25.score();


 

ground2.display();


  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon1, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(this.polygon1, {x: 900, y: 200})
    slingshot.attach(bird.body);
  }
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      background("yellow");
  }
  else{
      background("blue");
  }

 
 
}

