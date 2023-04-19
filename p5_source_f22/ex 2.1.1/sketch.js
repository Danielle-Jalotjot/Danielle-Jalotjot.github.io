let value = 0;
let bc;
function setup() {

  createCanvas(400, 400);
  rectMode(CENTER);
  bc = color('#5ee0a4');
}
function draw() {
 background(bc);
  fill(value);
  ellipse(350, 200, 50, 50);
  rect(200, 380, 250, 250);
}

function mouseMoved() {
  value = value + 1;
  if (value > 255) {
    value = 0;
  }
}

function mouseMoved() {
  value = value + 3;
  if (value > 255) {
    value = 0;
  }
}


// let value = 0;
// let bc;
// function setup() {
//
//   createCanvas(400, 400);
//   rectMode(CENTER);
//   bc = color('#0f0');
// }
// function draw() {
//  background(bc);
//   fill(value);
//   rect(200, 200, 50, 50);
// }
//
// function mouseMoved() {
//   value = value + 5;
//   if (value > 255) {
//     value = 0;
//   }
// }
