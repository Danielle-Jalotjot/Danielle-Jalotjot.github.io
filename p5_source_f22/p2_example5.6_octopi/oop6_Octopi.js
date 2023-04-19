
/*
Example 6 is the Octopi
*/

let octo1,octo2;

function setup() {
  createCanvas(800,800);
  background(0);
  noStroke();
  octo1 = new Octopi(400,600,color(255,0,0),.40);
  octo2 = new Octopi(650,200,color(0,0,0),.10);
}



function draw() {
  background(0);
  octo1.update();
  octo1.display();
  octo2.update();
  octo2.display();
}

function mouseMoved() {
  octo1.moveupdate(mouseX,mouseY-40);
  octo2.moveupdate(650,200);
}
