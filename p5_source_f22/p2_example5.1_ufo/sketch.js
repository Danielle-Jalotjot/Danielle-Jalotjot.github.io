

// Simple OOP1 example with a UFO
// let myUfo1 = global variable; try to define in setup or draw instead
let myUfo1;

function setup() {
  createCanvas(400,400);
  // Parameters go inside the parentheses when the object is constructed.
  let col = color(20,180);
  myUfo1 = new UFO(col,width/2,height/2," bich!");
}

function draw() {
  background(255);
  myUfo1.drift();
  // myUfo1.randomrect(100);
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
  // all the arguments in the constructor are defined again with "this.__"
  constructor( tempC,  tempXpos,  tempYpos,  oa) {
    // tempC, tempXpos, etc. are the argument vars that pass data to the class vars
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.orifice =  "The UFO says" + oa;

  }

  // functions inside of Classes are called methods
  // This one is designed to go in the draw loop and is called repeatly
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
  }

// in this example, rc = LOCAL var; is called only within this function, vs. GLOBAL
// ...variables that are called before setup and is applied everywhere
// randomrect() {
//   let rc = color(random(200));
//   fill(rc);
//   rect(0,0,20,20);
// }

}
