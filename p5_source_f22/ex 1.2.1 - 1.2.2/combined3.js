// sin wave bg
function setup() {
  createCanvas(500, 500);
  background(229, 204, 255);
  smooth();
  let a = 0.0;
  let inc = TWO_PI/25.0;
  console.log(" The inc = " + inc);
//   magenta color
  stroke(204, 0, 204, 125);

  for (let i=0; i < width; i+=8) {
    line(i, 300, i, 100+sin(a)*50.0);
   // console.log(" The angle = " + a + "The sin = " + sin(a));
    a = a + inc;

// horizontal magenta lines
    if (i < 200) {
//          x,  y, x2, y2
      line( 0, i, 200, i );
//if above is not true, "else" will resort to next command
    } else {
      line( 0, i, 200, i );
    }
  }
}

// random flashing boxes
function draw() {
  for (let i = 5; i < 25; i += 200) {
    for (let j = 5; j < 250; j += 75) {
      rand = random(200);
      //console.log (rand);
      fill(rand);
      stroke(255, 128, 0, 200);
      rect( i+393, j+20, 20, 77 );
    }
  }

  // colored ellipses
for (let i = 0; i < height; i += 25) {
    fill(204, 102, 0);
    fill(255,255,153, 100, 15);
    ellipse(0, i+55, 200, 80);
    fill(255, 204, 153, 50);
    rect(55, i+55, 200, 50);
// console - lists the iteration values ^
    console.log(height);
  }
}
