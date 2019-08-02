var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "yellow";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor = "yellow";
}

function draw() {
  background(50,100,150);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;  

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2){

    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";

  }
  else{
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  drawSprites();
}
