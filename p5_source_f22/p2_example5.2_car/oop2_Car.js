
//opp 2 the car Class example based on the Processing tutorial example
//
let myCar1;
let myCar2;

function setup() {
  createCanvas(500, 500);
  // Parameters go inside the parentheses when the object is constructed.
  myCar1 = new Car(color(255, 0, 0), 0, 100, 2, 5);
  myCar2 = new Car(color(0, 0, 255), 0, 50, 1, 5);
}

function draw() {
  background(255);
  push();
  myCar1.update();
  myCar1.display();
  myCar2.update();
  myCar2.display();
  pop();
}

// Even though there are multiple objects, we still only need one class.
// No matter how many cars we make, only one car template is needed.
class Car {
   // c;
   // xpos;
   // ypos;
   // xspeed;
   // wiggle;
   // cwid;
   // chgt;

  // The Constructor is defined with arguments.
  constructor( tempC,  tempXpos,  tempYpos,  tempXspeed,  wig) {

    // using "this.X" is the same as calling variables in the class above;
    // so you can comment out those variables in the class Car
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.xspeed = tempXspeed;
    this.wiggle = wig;
    this.cwid = random(30,50);
    this.chgt = random(12,20);
  }

   display() {
    // draw and position the car
    push();
    scale(1.1);  // just there to fiddle with scale
    translate(this.xpos, this.ypos);
    rotate(radians( random(- this.wiggle, this.wiggle)));
    stroke(0);
    fill(this.c);
    rectMode(CENTER);
    rect(0, 0, this.cwid, this.chgt,2);
    fill(0);
    ellipse(-this.cwid/2+8, - this.chgt/2, 10, 6);
    ellipse(this.cwid/2-8, - this.chgt/2,10, 6);
    ellipse(-this.cwid/2+8, this.chgt/2, 10, 6);
    ellipse(this.cwid/2-8, this.chgt/2, 10, 6);
    pop();
  }

    update() {
    this.xpos += this.xspeed;
    if (this.xpos > width) {
      this.xpos = 0;
    }
  }
}
