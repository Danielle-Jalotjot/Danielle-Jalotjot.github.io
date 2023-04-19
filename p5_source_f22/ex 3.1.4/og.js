function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(50);
  stroke(255);
  strokeWeight(8);
  noFill();
  push();
  //translate(width/2, height/2);
  translate(mouseX, height/2);
  rotate(radians(mouseX));
  makeFace();
  pop();
}

function makeFace() {
  // draw a face!
  //note that is based on an origin in the top left corner
  ellipse(0, 0, 40, 40);
  ellipse(100, 0, 40, 40);
  arc(50, 50, 100, 50, 0, PI);
}
