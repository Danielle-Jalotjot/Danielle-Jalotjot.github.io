// function setup() {
// createCanvas(200, 200);
// background(127);
// noStroke();
// for (let i=0; i < height; i+=20) {
//   fill(0);
//   rect(0, i, width, 10);
//   fill(255);
//   rect(i, 0, 10, height);
//   console.log(i);
// }
// }

function setup() {
//              x,   y
  createCanvas(400, 400);
  background(90);
  noStroke();

//"let i..." = definition; i < height... = boolean test; change i = i+20; i +=20 - the distance between iterations
  for (let i = 0; i < height; i += 90) {
    fill(200, 30, 150);
    //   x, y,   w,    h
    rect(0, i, width, 10);
    fill(215, 60, 75);
    rect(i, 0, 10, height);
// console - lists the iteration values ^
    console.log(i);
  }

  // ellipse(50,50,100,100)
}
