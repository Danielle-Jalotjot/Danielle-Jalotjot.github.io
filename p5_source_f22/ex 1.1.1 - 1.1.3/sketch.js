// ALL EDITED CODE OF EXERCISES 1.1.1 + 1.1.2 + 1.1.3

// // EDITED 1.1.1
// function setup() {
// //              x,   y
//   createCanvas(400, 400);
//   background(90);
//   noStroke();
//
// //"let i..." = definition; i < height... = boolean test; change i = i+20; i +=20 - the distance between iterations
//   for (let i = 0; i < height; i += 90) {
//     fill(200, 30, 150);
//     //   x, y,   w,    h
//     rect(0, i, width, 10);
//     fill(215, 60, 75);
//     rect(i, 0, 10, height);
// // console - lists the iteration values ^
//     console.log(i);
//   }
//
//   // ellipse(50,50,100,100)
// }
//
//


//
// // EDITED 1.1.2
// function setup() {
// createCanvas(400,400);
// background(200);
//
//   for (let i = 10; i < 105; i += 15) {
//
//     console.log(i);
//
// // test: if something is true = X executes; if false = X does not execute
// //    if (true/false) {
// //    rect(0,0,30,30);
//
// // bc 20 < 30 is true, the rectangle will be drawn
// //      if (20<30) {
// //      rect(0,0,30, 30);
// //      }
//
// //    }
//
//    if (i < 35) {
// //          x,  y, x2, y2
//       line( 30, i, 120, i );
// //if above is not true, "else" will resort to next command
//     } else {
//       line( 20, i, 200, i );
//     }
//   }
// }
//
//
//
//
//
// EDITED 1.1.3
let counter = 0;

function setup() {
createCanvas(300, 300);
background(25);

 frameRate(20);
}

function draw() {

noStroke();

  fill(60,255,0,120);
  rect(0, counter, width - random(50), 10);
  fill(180,20,255,120);
  rect(counter, 0, 10, height - random(200));

if (counter > height) {
  background(0);
  counter = 0;
} else {
  counter+=20;
}

}
