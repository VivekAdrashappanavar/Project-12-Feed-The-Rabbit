//declaring variables
var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;

function preload(){
  //loading images
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");  
  leafImg=loadImage("orangeLeaf.png");
}

function setup(){
  //creating canvas
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  var select_sprites = Math.round(random(1,2));
  if(frameCount % 80 === 0){
  if(select_sprites === 1)
  {
    createApple();
  }
  else(select_sprites === 2)
  {
    createLeaves();
  }
}



  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x=World.mouseX;
  
  drawSprites();
}

function createApple()
{
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.velocityY=2;
  apple.lifetime=200;
  apple.scale=0.1;
}
function createLeaves()
{
  leaf=createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.velocityY=3;
  leaf.lifetime=200;
  leaf.scale=0.1;
}

