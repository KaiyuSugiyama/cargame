var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = ("red");
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX = speed;

}

function draw() {
  background(255,255,255);  
  deformation = 0.5*weight*speed*speed/22500;

  if(car.isTouching(wall)) {
    console.log("cartouchededge");
    if(deformation < 100) {
      car.shapeColor = color(0,255,0);
    }
    if((deformation > 100) && (deformation < 180)) {
      car.shapeColor = color(230,230,0);
    }
    if(deformation > 180) {
      car.shapeColor = color(255,0,0);
    }
  }
  
  drawSprites();
  car.collide(wall);
}