let djDogArray = new Array(15);


function setup() {
  createCanvas(800, 400);

  for (let i = 0; i < djDogArray.length; i++) {
        // 'new djDog' = constructs object
              // x      y     scale     rotation
djDogArray[i] = new djDog(random(width), random(-150, 150), random(0.25, 2.0));

}
}

function draw() {
  background(196, 199, 248);
  noFill();
  // push();
  // translate(mouseX,0);
  // translate(width/2, height/2);
  translate(mouseX, height/2);
  // rotate(radians(mouseX));
  // pop();
  // pop();

  for (let i = 0; i < djDogArray.length; i++) {
    djDogArray[i].doggy();

}
}

// template to construct object
class djDog {
   // cx;
   // cy;
   // cscB;
   // cscS;

   constructor(lx,ly,lscB,lscS){
       this.cx = lx;
       this.cy = ly;
       this.cscB = lscB = scale(1.0);
       this.cscS = lscS = scale(0.25);

   }


 doggy(lx,ly,lscB,lscS) {
  push();
    let d = color(149, 93, 60);
    let e = color(118, 72, 31);
    // let lrot = rotate(random(-45, 45));
   push();
    scale(this.cscB);
    translate(this.cx, this.cy);
    rotate(radians(mouseX));
    // rotate(radians(this.lrot));
    this.Dtail(d);
    this.Dleg1(d);
    this.Dleg2(d);
    this.Dleg3(d);
    this.Dleg4(d);
    this.Dbody(d);
    this.Dhead(d);
    this.Dnose(e);
    this.DearL(e);
    this.DearR(e);
    push();
    scale(this.cscS);
    this.Dspot();
    pop();
  pop();
}

Dhead(d) {
fill(d);
ellipse(-60,-55, 80, 70);
}

Dbody(d) {
fill(d);
ellipse(0, 0, 160, 100);
}

Dleg1(d) {
fill(d);
ellipse(-60, 50, 20, 80);
}

Dleg2(d) {
fill(d);
ellipse(-30, 50, 20, 80);
}

Dleg3(d) {
fill(d);
ellipse(30, 50, 20, 80);
}

Dleg4(d) {
fill(d);
ellipse(60, 50, 20, 80);
}

Dtail(d) {
fill(d);
// translate(0, 0);
push();
rotate(PI/5.5);
ellipse(60, -55, 20, 80);
pop();
}

DearL(e) {
fill(e);
push();
rotate(PI/15.5);
ellipse(-105, -35,-20,-60);
pop();
}

DearR(e) {
  fill(e);
  push();
  rotate(PI/1.07);
  ellipse(12, 60,-20,-60);
  pop();
}

Dnose(e) {
fill(e);
triangle(-70, -50, -50, -50, -60, -40);
}

Dspot() {
noFill();
  stroke(253, 215, 0);
  strokeWeight(6);
  ellipse(-60,-105,70,15);
}
}
