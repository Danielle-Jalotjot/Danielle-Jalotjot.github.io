// Simple OOP1 example with a UFO

let myUfo1 = new Array(15);

// let myUfo1;

function setup() {
  createCanvas(400,400);
  // Parameters go inside the parentheses when the object is constructed.
  // let col = color(20,180);
  // myUfo1 = new UFO(col,width/2,height/2,"...yo");

  for (let i = 0; i < myUfo1.length; i++) {
    UfoArr[i] = new UFO(random(50), random(-75, 75), random(0.25, 2.0));
  }

}

function draw() {
  background(255);
  // myUfo1.drift();
  for (let i = 0; i < myUfo1.length; i++) {
    UfoArr[i].drift();


}

// The class defination is the template in which we can make different
// copies or many objects.
class UFO {
  // class variables that are unique to each instance of a class.
   c;
   xpos;
   ypos;
   orifice;

  // The Constructor is like setup and helps defines the details of the object
  constructor( tempC,  tempXpos,  tempYpos,  oa) {
    // tempC, tempXpos, etc. are the argument vars that pass data to the class vars
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.orifice =  "i am alien...yo "
     // + oa;

  }

  // functions inside of Classes are called methods
  // This one is designed to go in the draw loop and called repeatly
   drift() {
    //stroke(0);
    noStroke();
    fill(this.c);
    rectMode(CENTER);
    ellipse(this.xpos,this.ypos,random(15,20) +10,random(10,15));
    ellipse(this.pos,this.ypos+6,random(4,8) +10,random(2,4));
    text( this.orifice,this.xpos+5,this.ypos -15);
    this.xpos += random(-1,1);
    this.ypos += random(-1,1);
    this.myUfo1;
  }

myUfo1() {

}

}
