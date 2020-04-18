
var r = 30;
var g = 50;
var b=240;
//var ellipse=createSprite(200,200,10,10);
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b

function setup(){

  createCanvas(1200,400);

  //ellipse=world.mouseX;
  //ellipse.X=200;
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis
r=map(mouseX,1200,400,100,255);
g=map(mouseX,1200,400,90,150);
b=map(mouseX,1200,400,70,240);
  // Use the map() function to do so. 
  // Pass the values to the background() function you have learnt previously.
  background(r,g,b);
  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  rect(mouseX,mouseY,20,20);
drawSprites();
}
