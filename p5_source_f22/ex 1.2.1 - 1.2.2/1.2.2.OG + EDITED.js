// let rand = 0;
// let gridName = "Gary";
// function setup() {
//   createCanvas(400, 400);
//   background(0, 50, 100);
//   noStroke();
// }
// function draw() {
//   for (let i = 0; i < 400; i += 20) {
//     for (let j = 0; j < 400; j += 20) {
//       rand = random(255);
//       fill(rand);
//       rect( i+5, j+5, 10, 10 );
//       //console.log(gridName + ", now has a fill value of " + rand);
//     }
//   }
// }


let rand = 0;
let gridName = "Gary";
function setup() {
  createCanvas(400, 400);
  background(115, 10, 60, 60);
  // noStroke();
}
function draw() {
  for (let i = 0; i < 400; i += 5) {
    for (let j = 0; j < 400; j += 20) {
      // for random(x), the 125 acts as value range; makes it more limited; remove 125 if you want full range
      rand = random(125, 255);
      console.log (rand);
      fill(rand);
      rect( i+5, j+5, 10, 10 );
      //console.log(gridName + ", now has a fill value of " + rand);
    }
  }
}
