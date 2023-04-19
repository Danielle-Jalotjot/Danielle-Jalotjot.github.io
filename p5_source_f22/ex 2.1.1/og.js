let value = 0;
let bc;
function setup() {

  createCanvas(400, 400);
  rectMode(CENTER);
  bc = color('#0f0');
}
function draw() {
 background(bc);
  fill(value);
  rect(200, 200, 50, 50);
}

function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
