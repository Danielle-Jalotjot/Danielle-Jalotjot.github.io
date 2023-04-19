// let counter = 0;
//
// function setup() {
// createCanvas(200, 200);
// background(255);
//
//  frameRate(10);
// }
//
// function draw() {
//
// noStroke();
//
//   fill(255,255,0,120);
//   rect(0, counter, width - random(50), 10);
//   fill(255,0,255,120);
//   rect(counter, 0, 10, height - random(50));
//
// if (counter > height) {
//   background(0);
//   counter = 0;
// } else {
//   counter+=20;
// }
//
// }


let counter = 0;

function setup() {
createCanvas(300, 300);
background(25);

 frameRate(20);
}

function draw() {

noStroke();

  fill(60,255,0,120);
  rect(0, counter, width - random(50), 10);
  fill(180,20,255,120);
  rect(counter, 0, 10, height - random(200));

if (counter > height) {
  background(0);
  counter = 0;
} else {
  counter+=20;
}

}
