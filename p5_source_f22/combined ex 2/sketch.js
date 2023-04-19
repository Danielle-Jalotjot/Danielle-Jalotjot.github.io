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

var gif_loadImg,
gif_createImg;

function preload() {
f = loadFont('images_etc/Pixel.ttf');
// gif = loadImage("images_etc/doggy.gif");
}

function setup() {
  createCanvas(400, 400);
  // rectMode(CENTER);
  bc = color('#5ee0a4');
  b = loadImage("images_etc/pizza.png");
  b2 = loadImage("images_etc/pineapple.png");

// 2.1.3
  s = loadImage("images_etc/sparkles.png");
  gif = loadImage("images_etc/doggy.gif");
  // scale(.5);
}
function draw() {
 background(bc);
 // image(gif, 0, 0);
  // fill(value);
  // rect(200, 200, 50, 50);
  background(255-value);
  fill(value);
  //           x,    y,  w,  h
  ellipse(width/4, 100, 20, 50);
  ellipse(width/4*3, 100, 20, 50);
//          x1,     y1,   x2,  y2,  x3,   y3
  triangle(width/2, 120, 180, 160, 220, 160);
  // start = value of angle to start the arc
  // stop = value of angle to stop the arc
  // mode = optional; determines way of drawing the arc: CHORD/PIE/OPEN
  //     x,      y,       w,  h,    start,  stop,   mode
  arc(width/2, height/2, 140, 180, -25.13,   PI,   CHORD);

    // 2.1.4
    textFont(f);
    fill(240, 89, 70);
    //    text that shows,        ,tCounter,   y position
    text("this was made by dani...", tCounter,   350);
    // textSize(40);

    // this is an example of 'and' logic
    // if ( mouseIsPressed && keyIsPressed == true )  {
    //   fill(255, 0, 0);
    //   text("Red is Betta ", 100, tCounter);
    // }

    tCounter ++;
    if (tCounter > width) {
      tCounter = -50;
    }

//        x,    y,  scalex, scaley
image(s, 320,    5,    70,     70);

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


// 2.1.3
// let s;
//
// function setup() {
//   // Images must be in the "data" directory to load correctly
//   s = loadImage("images_etc/sparkles.png");
//
// }

// function draw() {
//   background(0);
//   image(s, 50, 50, 100,100);
// }



// 2.1.4
// let tCounter = 0;
// let f;
 /*
   You can get free font on the web.. the format that seems to work well with p5
   is .otf
   https://www.1001fonts.com/opentype-fonts.html
   */
// function preload() {
//   f = loadFont('assets/yourfont.otf');
// }


// function setup() {
//   createCanvas(800, 800);
//
//   //set the font for drawing
//   //textFont(f);
//   // set color of text
//   fill(0, 255, 0);
//   //draw out text
//   text("Green is good", 100, 100);
// }


// function draw() {
//
//   background(0);
//   fill(0, 255, 0);
//   text("Green is good", tCounter, 100);
//
//   // this is an example of 'and' logic
//   if ( mouseIsPressed && keyIsPressed == true )  {
//     fill(255, 0, 0);
//     text("Red is Betta ", 100, tCounter);
//   }
//
//   tCounter ++;
//   if (tCounter > width) {
//     tCounter = -50;
//   }
//
// }



// 2.1.5
// let gSize = 50;
// let b;
// let b2;

// function setup() {
//   createCanvas(800, 800);
//   background(0);
//   noStroke();
//   // Load in 2 different images of your own and name them below
//   // Images must be in the same directory as your .js file to load correctly
//   b = loadImage("pizza.jpg");
//   b2 = loadImage("pineapple.jpg");
// }

// function draw() {
//
//   if (!mouseIsPressed) {
//     noTint();
//     image(b, 0, 0, width/2, height/2);
//     image(b2, width/2, height/2, width/2, height/2);
//   } else {
//     // tint(255, 126); // Apply transparency without changing color
//     let checkCounter = 0;
//
//     for ( let i = 0; i < height; i+= gSize) {
//
//       // add extra count to make it offset in the next row
//       checkCounter++;
//
//       for ( let j = 0; j < width; j+=(gSize) ) {
//
//            // mod operator  %
//         if ( (checkCounter % 2) == 0 ) {
//           image(b2, j, i, gSize, gSize);
//         } else {
//
//           image(b, j, i, gSize, gSize);
//         }
//         checkCounter++;
//       }
//     }
//   }
// }



// image instead of drawing tool
//  image(b, lx, ly, 100, 100);
