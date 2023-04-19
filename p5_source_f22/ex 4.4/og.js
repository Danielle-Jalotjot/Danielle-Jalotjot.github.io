// Example 4.4 Adjustable Array Version

let count = 4;
let loX = new Array(count);
let loY = new Array(count);
let speedX = new Array(count);
let speedY = new Array(count);
let sizeW = new Array(count);
let sizeH = new Array(count);
let colors = new Array(count);

function setup() {
  createCanvas(600, 600);
  for (let i=0; i < loX.length; i++) {
    loX[i] = width/2;
    loY[i] = height/2;
    speedX[i] = random(-5, 5);
    speedY[i] = random(-5, 5);
    sizeW[i] = random(20, 25);
    sizeH[i] = random(20, 100);
    colors[i] = int(random(0, 255));
  }
}
function draw() {
  background(155);
  fill(255);
  rect(40, 40, width-80, height-80);
  for (let i = 0; i < loX.length; i++) {
    //update all positions
    loX[i] += speedX[i];
    loY[i] += speedY[i];
    //draw all balls
    fill(colors[i]);
    ellipse(loX[i], loY[i], sizeW[i], sizeW[i]);
    //check boundaries for all balls

    if (loX[i] < 40+sizeW[i]/2 || loX[i] > (width-40)-sizeW[i]/2 ) {
      speedX[i] = -speedX[i];
    }
    if (loY[i] < 40+sizeW[i]/2 || loY[i] > (height-40)-sizeW[i]/2) {
      speedY[i] = -speedY[i];
    }
  }
}
