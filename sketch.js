var engine, world;
var ground, base;

function setup() {
  var canvas = createCanvas(1200,400);
    
  
    ground = new Ground();
    base = new Ground(10,10);
    
  
}

function draw() {
  background(255,255,255); 
  
  ground.display();
  base.display();
  drawSprites();
}