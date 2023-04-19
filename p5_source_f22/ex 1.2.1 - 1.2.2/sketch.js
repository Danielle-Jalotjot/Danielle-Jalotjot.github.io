// // // COMBINED EXAMPLES

let counter = 0;

// sin wave bg
function setup() {
  createCanvas(400, 400);
  background(47, 20, 199);
  smooth();
  let a = 0.0;
  let inc = TWO_PI/25.0;
   frameRate(15);
  console.log(" The inc = " + inc);
//   magenta color
  stroke(204, 0, 204);

  for (let i=0; i < width; i+=12) {
    line(i, 300, i+30, 100+sin(a)*60.0);
   // console.log(" The angle = " + a + "The sin = " + sin(a));
    a = a + inc;

    // lavender buildings and orange sun
  for (let i=0; i < height; i+=90) {
// orange rect
  fill(252, 171, 136, 100);
  ellipse(360, 160, 240, 240);
// purple vertical lines
  fill(147, 145, 255, 100);
  rect(i, 330, 80, 200);
  // console.log(i);
}


// horizontal magenta lines
    if (i < 200) {
//          x,  y, x2, y2
      line( 0, 0, 200, i );
//if above is not true, "else" will resort to next command
    } else {
      line( 0, i, 200, i );
    }
  }
}

function draw() {

  //animated wicker
  noStroke();
  fill(47, 20, 199, 20);
  rect(0, counter, width - random(200), 10);
  fill(252, 171, 136,20);
  rect(counter, 0, 10, height - random(200));

if (counter > height) {
  counter = 0;
} else {
  counter+=70;
}

  // random flashing ellipses
  for (let i = 5; i < 25; i += 20) {
    for (let j = 5; j < 250; j += 75) {
      rand = random(200);
      //console.log (rand);
      fill(rand);
      stroke(145, 152, 255, 200);
      ellipse(i+20, j+65, 15, 15);
    }
  }



  // colored ellipses and rectangles
for (let i = 0; i < height; i += 128) {
    fill(184, 44, 135, 5);
    ellipse(i, i+55, 200, 80);
    fill(235, 148, 205, 5);
    rect(i, i+55, 600, 50);
// console - lists the iteration values ^
    // console.log(height);
  }



}


// let counter = 0;

// function setup() {
// createCanvas(300, 300);
// background(25);

//  frameRate(20);
// }

// function draw() {

// noStroke();

//   fill(60,255,0,120);
//   rect(0, counter, width - random(50), 10);
//   fill(180,20,255,120);
//   rect(counter, 0, 10, height - random(200));

// if (counter > height) {
//   background(0);
//   counter = 0;
// } else {
//   counter+=20;
// }

// }








//
// // EDITED 1.2.2
// let rand = 0;
// let gridName = "Gary";
// function setup() {
//   createCanvas(400, 400);
//   background(115, 10, 60, 60);
//   // noStroke();
// }
// function draw() {
//   for (let i = 0; i < 400; i += 5) {
//     for (let j = 0; j < 400; j += 20) {
//       // for random(x), the 125 acts as value range; makes it more limited; remove 125 if you want full range
//       rand = random(125, 255);
//       console.log (rand);
//       fill(rand, 15, 160);
//       rect( i+5, j+5, 10, 10 );
//       //console.log(gridName + ", now has a fill value of " + rand);
//
//     }
//   }
// }
// // EDITED 1.2.1
// function setup() {
//   // createCanvas(400, 200);
//   // background(20, 90, 50, 85);
//   // smooth();
//   let a = 0.0;
//   let inc = TWO_PI/25.0;
//   console.log(" The inc = " + inc);
//   stroke(255, 20, 150);
//
//   for (let i=0; i < width; i+=8) {
//     line(i, 100, i, 100+sin(a)*50.0);
//     console.log(" The angle = " + a + "The sin = " + sin(a));
//     a = a + inc;
//   }
// }
//
// // EDITED 1.1.2
// function setup() {
// // createCanvas(400,400);
// // background(200);
//
//   for (let i = 10; i < 105; i += 15) {
//
//     console.log(i);
//
// if (i < 35) {
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
// // // EDITED 1.1.3
// // let counter = 0;
// // function setup() {
// // createCanvas(300, 300);
// // background(25);
// //
// //  frameRate(20);
// // }
// //
// // function draw() {
// //
// // noStroke();
// //
// //   fill(60,255,0,120);
// //   rect(0, counter, width - random(50), 10);
// //   fill(180,20,255,120);
// //   rect(counter, 0, 10, height - random(200));
// //
// // if (counter > height) {
// //   background(0);
// //   counter = 0;
// // } else {
// //   counter+=20;
// // }
// //
// // }
