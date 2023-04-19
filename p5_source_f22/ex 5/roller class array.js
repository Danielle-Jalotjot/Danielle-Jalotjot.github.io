let rollArr = new Array(15);


function setup() {
  createCanvas(800, 400);
  // remove roll1 - roll3
  // roll1 = new Roller(100,-100,0.5);
  // roll2 = new Roller(100,100,1.5);
  // roll3 = new Roller(0,0,0.75);

for (let i = 0; i < rollArr.length; i++) {
  rollArr[i] = new Roller(random(50), random(-75, 75), random(0.25, 2.0));
}

}

function draw() {
  background(50);
  stroke(255);
  strokeWeight(8);
  noFill();
  for (let i = 0; i < rollArr.length; i++) {
    rollArr[i].rollme();

  // roll1.rollme();
  // roll2.rollme();
  // roll3.rollme();
}
}



class Roller {

   cx;
   cy;
   csc;


   constructor(lx,ly,lsc){
       this.cx = lx;
       this.cy = ly;
       this.csc = lsc;


   }

   rollme(lx,ly) {
       push();
       translate(this.cx,this.cy);
       scale(this.csc);
       //translate(width/2, height/2);
       translate(mouseX, height/2);
       rotate(radians(mouseX));
       this.makeFace();

       pop();



   }

   makeFace() {

     // draw a face!
     //note that is based on an origin in the top left corner
     ellipse(0, 0, 40, 40);
     ellipse(100, 0, 40, 40);
     arc(50, 50, 100, 50, 0, PI);

   }



}
