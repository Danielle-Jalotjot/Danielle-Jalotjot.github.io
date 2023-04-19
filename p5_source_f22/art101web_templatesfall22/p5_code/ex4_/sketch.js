// Example 4.4 Adjustable Array Version

// X count array
let count = 15;

let loX = new Array(count);
let loY = new Array(count);
let speedX = new Array(count);
let speedY = new Array(count);
let sizeW = new Array(count);
let sizeH = new Array(count);
let colorsR = new Array(count);
let colorsG = new Array(count);
let colorsB = new Array(count);
let strokeW = new Array(count);
let opacity = new Array(count);
let rotate = new Array(count);

function setup() {
  createCanvas(600, 600);

  // length - counts number of items in array
  // loX - colors are defined here for each item in array
  for (let i=0; i < loX.length; i++) {
    loX[i] = width/2;
    loY[i] = height/2;
    speedX[i] = random(-10, 10);
    speedY[i] = random(-5, 5);
    sizeW[i] = random(33, 33);
    sizeH[i] = random(33, 33);
    colorsR[i] = int(random(100, 255));
    colorsG[i] = int(random(100, 255));
    colorsB[i] = int(random(100, 255));
    strokeW[i] = random(1,10);
    opacity[i] = random(100, 180);
    rotate[i]= random (0.1, 1.0);

  }
}
function draw() {
  background(181, 162, 214);
  fill(255, 255, 255, 100);
  push();
  stroke(169, 149, 225);
  rect(30, 30, width-60, height-60);
  pop();
  for (let i = 0; i < loX.length; i++) {
    //update all positions
    loX[i] += speedX[i];
    loY[i] += speedY[i];
    // push();
    // translate(10,10);
    //draw all balls

    fill(colorsR[i], colorsG[i], colorsB[i], 115);
    // triangle(width/2 ,33, loX[i], loY[i], width/2, height/2);
    triangle(mouseX, mouseY, loX[i], loY[i], width/2, height/2);
    stroke(255);
    fill(colorsR[i], colorsG[i], colorsB[i]);
        // rotate(1.1);
    ellipse(loX[i], loY[i], sizeW[i], sizeH[i]);

    //check boundaries for all balls
// pop();
    if (loX[i] < 33+sizeW[i]/2 || loX[i] > (width-33)-sizeW[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (loY[i] < 33+sizeW[i]/2 || loY[i] > (height-33)-sizeW[i]/2) {
      speedY[i] = -speedY[i];
    }
  }
}
