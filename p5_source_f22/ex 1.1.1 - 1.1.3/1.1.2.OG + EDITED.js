// function setup() {
//   for (let i = 5; i < 95; i += 5) {
//     if (i < 35) {
//       line( 30, i, 80, i );
//     } else {
//       line( 20, i, 90, i );
//     }
//   }
// }

function setup() {
createCanvas(400,400);
background(200);

  for (let i = 10; i < 105; i += 15) {

    console.log(i);

// test: if something is true = X executes; if false = X does not execute
//    if (true/false) {
//    rect(0,0,30,30);

// bc 20 < 30 is true, the rectangle will be drawn
//      if (20<30) {
//      rect(0,0,30, 30);
//      }

//    }

   if (i < 35) {
//          x,  y, x2, y2
      line( 30, i, 120, i );
//if above is not true, "else" will resort to next command
    } else {
      line( 20, i, 200, i );
    }
  }
}
