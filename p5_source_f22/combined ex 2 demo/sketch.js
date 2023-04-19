// 2.1.1
let value = 0;
let bc;
let s;
let tCounter = 0;
let f;
let gif;
let gSize = 50;
let b;
let b2;
let checkCounter = 0;

var gif_loadImg,
gif_createImg;

function preload() {
f = loadFont('images_etc/Pixel.ttf');
// gif = loadImage("images_etc/doggy.gif");
// 2.1.3 - loading images
  // Load in 2 different images of your own and name them below
  melt = loadImage("images_etc/melt.gif");
  snoop = loadImage("images_etc/snoop.gif");
}

function setup() {
  createCanvas(400, 400);
  // rectMode(CENTER);
  bc = color('#5ee0a4');
  // b = loadImage("images_etc/pizza.png");
  // b2 = loadImage("images_etc/pineapple.png");

// 2.1.3
  s = loadImage("images_etc/sparkles.png");
}
function draw() {
 background(bc);
 // image(gif, 0, 0);
  // fill(value);
  // rect(200, 200, 50, 50);
  background(255-value);
  fill(value);
  push();
  translate(width/6,height/6);
  scale(.8);
  //           x,    y,  w,  h
  ellipse(width/4+30, 100, 20, 50);
  ellipse(width/4*3+30, 100, 20, 50);
//          x1,         y1,   x2,  y2,  x3,   y3
//          top point,         right point,     left point
  triangle(width/2+30, 120,   180+60, 150,    220, 150);
  // start = value of angle to start the arc
  // stop = value of angle to stop the arc
  // mode = optional; determines way of drawing the arc: CHORD/PIE/OPEN
  //     x,      y,           w,  h,    start,  stop,   mode
  arc(width/2+30, height/2, 140, 180, -25.13,   PI,   CHORD);
  pop();

    // 2.1.4
    push();
    textSize(20);
    textFont(f);
    fill(240, 89, 70);
    //    text that shows,        ,tCounter,   y position
    text("this was made by dani...", tCounter,   350);
    pop();

    tCounter ++;
    if (tCounter > width) {
      tCounter = -50;
    }

//        x,    y,  scalex, scaley
image(s, 320,    5,    70,     70);

if (!mouseIsPressed) {
  noTint();
  image(melt, -25, -15, 180, 180);
  image(snoop, width-100, height-100, 80, 110);
} else {
  // tint(255, 126); // Apply transparency without changing color
  // let checkCounter = 0;

  for ( let i = 0; i < height; i+= gSize) {

    // add extra count to make it offset in the next row
    checkCounter++;

    for ( let j = 0; j < width; j+=(gSize) ) {

         // mod operator  %
      if ( (checkCounter % 2) == 0 ) {
        image(melt, j, i, gSize, gSize);


    } else if ( (checkCounter % 5)  == 1 ) {

        image(snoop, j, i, gSize, gSize);
    } else {
        fill(130, 130, 130, 115);
        ellipse(j, i, gSize-100, gSize-100);
    }
      checkCounter++;
    }
  }
}
}

function mouseMoved() {
  value = value + 3;
  if (value > 255) {
    value = 0;
  }
}

// 2.1.2
function keyPressed() {

  if ( key == '1' || key == '1' ) {
    // example of toggle logic
    if (value == 0) {
      value = 255;
    } else {
      value = 0;
    }
  }
}

// image instead of drawing tool
//  image(b, lx, ly, 100, 100);


// 2.1.5 - hamtaro counter grid
  // if (!mouseIsPressed) {
  //   noTint();
  //   image(jump, 0, 0,width/2, height/2);
  //   image(seed, width/2, height/2, width/2, height/2);
  // } else {
  //   // tint(255, 126); // Apply transparency without changing color
  //   let checkCounter = 0;
  //
  //   for ( let i = 0; i < height; i+= gSize) {
  //
  //     // add extra count to make it offset in the next row
  //     checkCounter++;
  //
  //     for ( let j = 0; j < width; j+=(gSize) ) {
  //
  //          // mod operator  %
  //       if ( (checkCounter % 2) == 0 ) {
  //         image(jump, j, i, gSize, gSize);
  //
  //
  //     } else if ( (checkCounter % 5)  == 1 ) {
  //
  //         image(seed, j, i, gSize, gSize);
  //     } else {
  //         fill(255,255,0);
  //         rect(j, i, gSize-6, gSize-6);
  //     }
  //       checkCounter++;
  //     }
  //   }
  // }
