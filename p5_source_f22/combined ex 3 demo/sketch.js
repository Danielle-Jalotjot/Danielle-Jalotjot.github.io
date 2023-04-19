// ** typo - for COMBINED EX 2 DEMO 2

let gSize = 50;
let jump;
let seed;
let value = 0;
let bc;

function setup() {
  createCanvas(500, 500);
  background(123, 99, 175);
  noStroke();

  // 2.1.1 - rectangle switch colors
    rectMode(CENTER);
    bc = color('#0f0');

// 2.1.3 - loading images
  // Load in 2 different images of your own and name them below
  jump = loadImage("images_etc/hamtaro_jump.gif");
  seed = loadImage("images_etc/hamtaro_seed.gif");

}

function draw() {

// 2.1.5 - hamtaro counter grid
  if (!mouseIsPressed) {
    noTint();
    image(jump, 0, 0,width/2, height/2);
    image(seed, width/2, height/2, width/2, height/2);
  } else {
    // tint(255, 126); // Apply transparency without changing color
    let checkCounter = 0;

    for ( let i = 0; i < height; i+= gSize) {

      // add extra count to make it offset in the next row
      checkCounter++;

      for ( let j = 0; j < width; j+=(gSize) ) {

           // mod operator  %
        if ( (checkCounter % 2) == 0 ) {
          image(jump, j, i, gSize, gSize);


      } else if ( (checkCounter % 5)  == 1 ) {

          image(seed, j, i, gSize, gSize);
      } else {
          fill(255,255,0);
          rect(j, i, gSize-6, gSize-6);
      }
        checkCounter++;
      }
    }
  }

  // 2.1.1 - gradient mouseMove function
    fill(value);
    ellipse(mouseX,mouseY, 100, 100);
  }

  function mouseMoved() {
    value = value + 2;
    if (value > 255) {
      value = 0;
    }

      fill(value);
      // ellipse(width/2, height/2, 100, 100);
    }

// 2.1.2 - keyboard switch colors
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


// 2.1.1 OG
// let value = 0;
// let bc;
// function setup() {
//
//   createCanvas(400, 400);
//   rectMode(CENTER);
//   bc = color('#0f0');
// }
// function draw() {
//  background(bc);
//   fill(value);
//   rect(200, 200, 50, 50);
// }
//
// function mouseMoved() {
//   value = value + 5;
//   if (value > 255) {
//     value = 0;
//   }
// }

// 2.1.2 OG
// let value = 0;
// function setup() {
//   createCanvas(300, 300);
// }
//
// function draw() {
//   background(255-value);
//   fill(value);
//   ellipse(width/2, height/2, 100, 100);
// }
//
// function keyPressed() {
//
//   if ( key == 'b' || key == 'B' ) {
//     // example of toggle logic
//     if (value == 0) {
//       value = 255;
//     } else {
//       value = 0;
//     }
//   }
// }

// 2.1.3 - loading images
// let b;
//
// function setup() {
//   createCanvas(300, 300);
//   // Images must be in the "data" directory to load correctly
//   b = loadImage("https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/blt2094c59e43e6f946/60ce79bbe1b3f7481347ddb0/Pizza.jpg");
//
// }
//
// function draw() {
//   background(0);
//   image(b, 50, 50, 100,100);
// }

// let tCounter = 0;
// let f;
//
//
//  /*
//    You can get free font on the web.. the format that seems to work well with p5
//    is .otf
//    https://www.1001fonts.com/opentype-fonts.html
//
//
//    */
// // function preload() {
// //   f = loadFont('assets/yourfont.otf');
// // }
//
//
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
//
//
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
//
