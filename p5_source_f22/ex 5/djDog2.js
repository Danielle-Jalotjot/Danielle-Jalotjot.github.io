let roll1,roll2,roll3,roll4;
let s = 0.25;
let s2 = 0.6;
let s3 = 0.4;
let s4 = 1.8;
// let roll1;

// insert array
// let DJArray;

function setup() {
  createCanvas(600, 600);


// comment 12 - 15 out when making array
  roll1 = new Roller(100,100,1.0);
  roll2 = new Roller(100,200,1.0);
  roll3 = new Roller(100,300,1.0);
  roll4 = new Roller(100,400,1.0);

// insert 18 - 21 for array
  // for (let i = 0; i < DJArray.length; i++) {
  // DJArr[i] = new Roller (random(255), random (-75, 75), random (1.0))

// DJArray[i].djdog();

}

function draw() {
 background(172, 196, 210); // gray
  // stroke(255);
  // strokeWeight(2);
  // noFill();
  noStroke();
  rectMode(CENTER);

  roll1.djdog();
  roll2.djdog();
  roll3.djdog();
  roll4.djdog();
  //roll2.rollme();
  //roll3.rollme();
}

// change to dj...
class Roller {
   cx;
   cy;
   csc;


   constructor(lx,ly,lsc) {
       this.cx = lx;
       this.cy = ly;
       this.csc = lsc;


   }

// insert 'this.X' in arguments if applicable
   // djdog(lx,ly) {
   //     push();
   //     translate(this.cx,this.cy);
   //     // scale(this.csc);
   //     //translate(width/2, height/2);
   //     translate(mouseX, height/2);
   //     rotate(radians(mouseX));
   //     this.makeFace();
   //     pop();
   //
   // }

   makeFace() {
     // draw a face!
     //note that is based on an origin in the top left corner
     ellipse(0, 0, 40, 40);
     ellipse(100, 0, 40, 40);
     arc(50, 50, 100, 50, 0, PI);

   }

  djdog() {
  // fill(0);
  // rect(0,0,100,100);
  push();
  // translate(50,50);
  // rotate(random(13,5));
  let d = color(149, 93, 60);
  let e = color(118, 72, 31);
  scale(s2);
    // scale(1.0);
  this.Dhead(0,0, d);
  this.Dbody(0,0, d);
  this.Dleg1(0,0, d);
  this.Dleg2(0,0, d);
  this.Dleg3(0,0, d);
  this.Dleg4(0,0, d);
  this.Dtail(0,0, d);
  this.Dnose(0,0, e);
  // DearL(0,0 e);
  push();
  fill(e);
  scale(s4);
  translate(80-40,0);
  // triangle(360+80, 810, 410+80, 810, 360+25+80, 855);
  triangle(300, 600, 320, 600, 310, 620);
  pop();
  // DearR(0,0, e);
  push();
  fill(e);
  scale(s4);
  translate(60-40,0);
  // triangle(360+80, 810, 410+80, 810, 360+25+80, 855);
  triangle(300, 600, 320, 600, 310, 620);
  pop();
  pop();
}

  Dhead(xpos,ypos, d) {
  fill(d);
  // ellipse(890-410, 915, 160, 100);
  ellipse(410,860, 100, 80);

}

  Dbody(xpos,ypos, d) {
  fill(d);
  ellipse(890-410, 915, 160, 100);
}

   Dleg1(xpos,ypos, d) {
fill(d);
rect(840-410, 980, 20, 80);
}

 Dleg2(xpos,ypos, d) {
fill(d);
rect(870-410, 980, 20, 80);
}

 Dleg3(xpos, ypos, d) {
fill(d);
rect(920-410, 980, 20, 80);
}

 Dleg4(xpos,ypos, d) {
fill(d);
rect(950-410, 980, 20, 80);
}

 Dtail(xpos, ypos, d) {
fill(d);
translate(0, 0);
push();
rotate(PI/5.0);
ellipse(970, 380, 20, 80);
pop();
}

// breaks code :(
//  DearL(xpos,ypos, e) {
// fill(e);
// scale(s4);
// triangle(360+10, 810, 410+10, 810, 360+25+10, 855);
// }

// // breaks code :(
//  DearR(xpos,ypos, e) {
// fill(e);
// scale(s4);
// triangle(360+80, 810, 410+80, 810, 360+25+80, 855);
// }

 Dnose(xpos,ypos, e) {
fill(e);
// scale(s3);
// scale(1.0);
// triangle(360+720, 2160, 410+700, 2140, 410+635, 2140);
// triangle(400, 900, 420, 900, 920, 1100);
}

}
