function setup() {
  createCanvas(600,600);
  background(40);
  rectMode(CENTER);
  noStroke();
  fill(200);
}

function draw() {
  pair();
}

function pair() {
  purpchar1();
  orangchar2();
}

function purpchar1() {
  let k = color(170,0,200);
  body(70,0,k);
  let k2 = color(200);
  head(70,0,1,k2);
  arm(110,10,k);
  // removed due to accident
  //arm(30,10,k);
  leg(45,0,k);
  leg(95,0,k);
}

function orangchar2() {
  let k = color(255,90,0);
  body(-70,0,k);
  head(-70,0,0,k);
  arm(-110,10,k);
  arm(-30,10,k);
  leg(-90,0,k);
  leg(-50,0,k);
}

function body( xpos, ypos, c) {
   fill(c);
   rect(width/2+xpos,height/2+ypos,60,125,5);
}

function head( xpos, ypos, hat, c) {
  fill(c);

 if (hat == 1) {
  rect(width/2+xpos,height/2 -150 +ypos ,80,10,7);
  rect(width/2+xpos,height/2 -180 +ypos ,40,50,7);
  }
 ellipse(width/2+xpos,height/2 -110 +ypos ,60,80);

}

function leg(xpos, ypos, c) {
  fill(c);
  rect(width/2+xpos,height/2+140 + ypos,27,150,5);
}


function arm( xpos, ypos,  c) {
  fill(c);
  rect(width/2+xpos,height/2-30 + ypos,15,80,5);
}
