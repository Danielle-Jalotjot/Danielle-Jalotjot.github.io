let value = 0;
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(255-value);
  fill(value);
  ellipse(width/2, height/2, 100, 100);
}

function keyPressed() {

  if ( key == 'b' || key == 'B' ) {
    // example of toggle logic
    if (value == 0) {
      value = 255;
    } else {
      value = 0;
    }
  }
}
