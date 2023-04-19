let roll1,roll2,roll3,roll4;




function setup() {
  createCanvas(500,500);

//for (let i = 0; i < rollArr, length; i++){
// rollArr[i] = new Roller (random(50), random (-75,75), random (0.2))
// }

  roll1 = new Roller(100,-100,0.5);
   roll2 = new Roller(100,100,1.5);
  roll3 = new Roller(0,0,0.75);
  roll4 = new Roller(0,0,20,10);
}

function draw() {
 background(10,90,90);
  stroke(255);
  strokeWeight(2);
  noFill();
roll1.guy1(color(50,200,140), 330,210 ); //green
roll2.guy1(color(230,120,190), 90,170,20 ); //pink
  roll3.guy1(color(40,80,250), 230,120,-20 ); //blue
    roll4.guy1(color(190,230,100), 140,300,-100 ); //lime green
  //roll2.rollme();
  //roll3.rollme();
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

    guy1(k,lx,ly) {


    push();
    translate(lx,ly);
    rotate(random(13,5));

    this.body(k);
     this.head(k);
    this.arm(k,-55,10); // left arm
     this.arm(k,35,10); // right arm
     this.leg(k,-25,75); //  left leg
     this.leg(k,15,75); //  right leg
     // tail();
     pop();

   }


    body(k){
     fill(k);



     rect(0,0,40,80, 15,15,25,25);

   }

    head(k){
   fill(k);

   rect(-2,-23,40,40,);
   fill(255);
   ellipse(5,-12,10,10,);
   ellipse(32,-12,10,10,);
   fill(0);
   rect(8,-5,20,10);

   }

    arm(k,lx,ly){
   fill(k);
   rect(lx,ly,60,15,10);

   }

    leg(k,lx,ly){
   fill(k);
   rect(lx,ly,40,10,30,);

   }

}
