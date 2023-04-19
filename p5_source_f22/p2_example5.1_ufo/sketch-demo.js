let c1, c2;

function setup() {
  createCanvas(500, 500);
  background(20);
  fill(255);

let c = color(255,0,0);
  c1 = new Car(0, 100, c);
  c = color(255,200,0);
  c2 = new Car(0, 100, c);
}


function draw() {
  // ellipse(width/2, height/2, 50, 50);

  c1.drive();
}

// a template or factory
// if in class, don't have to type "function"; its implied
class Car {

// cx and cy works only in class Car; like local variables
  cx;
  cy;
  k;
  speedX;

// define the colors
// define the direction and speed

// constructor = triggers setup for an object
// lx, ly = local variables; will only work within constructor
constructor(lx, ly, lk) {
  this.cx = lx;
  this.cy = ly;
  this.k = lk;
  this.speedX = random(1,4);
// shows only in console log in browser
  console.log("this is car #" + random(100,200));

}

// defines, but will not appear unless placed within constructor
drive () {

  fill(this.k);
  rect(this.cx, this.cy, 50, 30, 5);

  this.cx += this.speedX;


}


}
