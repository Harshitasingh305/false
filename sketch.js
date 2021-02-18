var balloon,backIm;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
function prelooad(){
backIm=loadImage("Hot Air Ballon-01.png")

}
function draw() {
  background(backIm);  
  drawSprites();
}