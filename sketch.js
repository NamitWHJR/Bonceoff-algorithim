var fixedRect, movingRect;
var box1,box2,box3,box4

function setup() {

  
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  box1 = createSprite(100, 400,50,50);
  box2 = createSprite(700, 400,60,60);
  box3 = createSprite(600, 200,40,40);
  box4 = createSprite(600, 600,70,70);
  box1.velocityX = 5
  box2.velocityX = -5
  box3.velocityY = 5
  box4.velocityY = -5

  box1.shapeColor = "yellow"
  box2.shapeColor = "red"
  box3.shapeColor = "orange"
  box4.shapeColor ="purple"

  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}


function draw() {
  background(0,0,0);  
bounceoff(movingRect,fixedRect)

bounceoff(box1,box2)
bounceoff(box3,box4)
  
  drawSprites();
}
