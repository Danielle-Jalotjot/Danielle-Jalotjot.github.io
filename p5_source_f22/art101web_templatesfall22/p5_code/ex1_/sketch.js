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
