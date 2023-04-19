let counter1 = 15;
// let counter2 = -15;
let umbrella2;
let birdy;
let s = 0.25;
let s2 = 0.6;
let s3 = 0.4;
let s4 = 1.2;


// 3.1.1 - colorful flashing dots
function setup() {
  createCanvas(400, 400);
  //  gray-blue bg
  background(172, 196, 210);
  noStroke();
  rectMode(CENTER);
  // fill(211, 107, 110);
  umbrella2 = loadImage("images_etc/umbrella1.png")
  birdy = loadImage("images_etc/birdy.png")
  cow = loadImage("images_etc/cow.png")
}

// layer from bottom up = clouds - bottom layer
function draw() {
background(172, 196, 210);
  // fill(211, 107, 110);
  // rect(0, 0, width, height);
  djSign1("O.O", 170,65);
  djSign2(">:)", 340,110);
  djSign3("-.-", 60,160);

  // birdy rotating
      push();
      translate(mouseX, height/2);
      rotate(radians(mouseX));
      makeBirdy();
      pop();

  // cow rotating
      push();
      translate(mouseX, height/4);
      rotate(radians(mouseY));
      cowMove();
      pop();

  DaniRanDots();

// pair of characters
  pair();

// static umbrella
    push();
    scale(.3);
    image(umbrella2, 360, 170);
    pop();

// rotating fly around dog
     push();
       // orgin of  moveX, moveY
       translate(170, 340);
       rotate(radians(counter1));
       //rotate(radians(45));
       scale(.2);
       fill(0);
       ellipse(180, 0, 25, 15, 10);
       // pushing it over to the right and up
       // translate(25, -100);
       ellipse(180, 0, 10, 25, 5);
     pop();
     counter1++;
}

// OG flashing dots bg
// function DaniRanDots() {
//   let r = random(35);
//   let rloop = random(35);
//   for (let i = 0; i < r; i++) {
//     fill(r+60, rloop+60, random(211, 107, 110));
//     ellipse(random(width), random(height), r+5, r+5);
//   }
// }

function DaniRanDots() {
  let r = random(2);
  let rloop = random(35);
  for (let i = 0; i < r; i++) {
    fill(r+60, rloop+60, random(255));
    ellipse(random(width), random(height), r+10, r+10);
  }
}

// 3.1.2 - static characters
function pair() {
  // noHat();
  withHat();
  dog();
}

function withHat() {
  push();
  let k = color(184, 126, 61);
  scale(s2);
  // x, y, color
  // og body(70,0,k); (+230, +280)
  body(300, 280, k);
  let k2 = color(184, 126, 61);
  head(70+230,0+280,1,k2);
  arm(110+230,10+280,k);
  leg(45+230,0+280,k);
  leg(95+230,0+280,k);
  // removed due to accident
  armL(0,0,k);
  pop();
}

// function noHat() {
//   push();
//   let k = color(238, 216, 161);
//   scale(s2);
//   body(-70+230,0+280,k);
//   head(-70+230,0+280,0,k);
//   arm(-110+230,10+280,k);
//   arm(-30+230,10+280,k);
//   leg(-90+230,0+280,k);
//   leg(-50+230,0+280,k);
//   pop();
// }

function dog() {
  push();
  let d = color(149, 93, 60);
  scale(s3);
  // x, y, color
  // og body(70,0,k); (+230, +280)
  fill(d);
  // dog head
  ellipse(840-410, 850, 80, 80);
  // dog body
  ellipse(890-410, 915, 160, 100);
  // leg1
  rect(840-410, 980, 20, 80);
  // leg2
  rect(870-410, 980, 20, 80);
  // leg3
  rect(920-410, 980, 20, 80);
  // leg3
  rect(950-410, 980, 20, 80);
  // tail
  // translate(0, 0);
  push();
  rotate(PI/5.0);
  ellipse(970, 380, 20, 80);
  pop();
  fill(118, 72, 31);
  // ear 1
  // scale(s4);
  triangle(360+10, 810, 410+10, 810, 360+25+10, 855);
  // ear 2
  triangle(360+80, 810, 410+80, 810, 360+25+80, 855);
  // nose
  scale(s3);
  triangle(360+720, 2160, 410+700, 2140, 410+635, 2140);
  pop();
}

function body( xpos, ypos, c) {
   fill(c);
   ellipse(width/2+xpos,height/2+ypos,100,125,5);
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
  rect(width/2+20+xpos,height/2-10+ypos,15,100,5);
}

function armL( xpos, ypos,  c) {
  fill(c);
  translate(415,465);
  // rectMode(CENTER);
  rotate(5*PI/4.0);
  rect(0,0,15,100,5);
}

// 3.1.4 - cow png
   function cowMove() {
     scale(.6);
     image(cow, 45, 45);
   }

//  birdy png
   function makeBirdy() {
     scale(.1);
     image(birdy, 15, 15);
   }


// 3.1.3 - signs
    function djSign1( ss, locx, loy) {
      // gray color
      fill(120,50);
      ellipse(locx,loy,300,100);
      // cloud color
      fill(222, 239, 230, 115);
      ellipse(locx-5,loy-5,300,100);
      let k1 = color(14, 133, 237);
      djDrawText(ss,locx+5,loy-5,k1);
      djRanGrcs(locx,loy,color(k1));
    }

    function djSign2( ss, locx, loy) {
      // gray color
      fill(120,50);
      ellipse(locx,loy,250,50);
      // cloud color
      fill(222, 239, 230, 115);
      ellipse(locx-5,loy-5,250,50);
      let k1 = color(14, 133, 237);
      djDrawText(ss,locx+5,loy-5,k1);
      djRanGrcs(locx+300,loy,color(k1));
    }

    function djSign3( ss, locx, loy) {
      // gray color
      fill(120,50);
      ellipse(locx,loy,180,30);
      // cloud color
      fill(222, 239, 230, 115);
      ellipse(locx-5,loy-5,180,30);
      let k1 = color(14, 133, 237);
      djDrawText(ss,locx+5,loy-5,k1);
      djRanGrcs(locx+300,loy,color(k1));
    }

   function djDrawText(s,lx,ly,c) {
     fill(c);
     text(s, lx, ly, 20);
   }

// yellow lightning
   function djRanGrcs(lx,ly,c) {
// yellow color
     fill(253, 246, 131);
     let r = random(300);
     for (let i= 0; i < 30; i++) {
       ellipse(lx-r,ly-r,5,5);
     }
   }

   
