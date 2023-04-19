let gSize = 50;
let b;
let b2;

function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
  // Load in 2 different images of your own and name them below
  // Images must be in the same directory as your .js file to load correctly
  b = loadImage("pizza.jpg");
  b2 = loadImage("pineapple.jpg");
}

function draw() {

  if (!mouseIsPressed) {
    noTint();
    image(b, 0, 0, width/2, height/2);
    image(b2, width/2, height/2, width/2, height/2);
  } else {
    // tint(255, 126); // Apply transparency without changing color
    let checkCounter = 0;

    for ( let i = 0; i < height; i+= gSize) {

      // add extra count to make it offset in the next row
      checkCounter++;

      for ( let j = 0; j < width; j+=(gSize) ) {

           // mod operator  %
        if ( (checkCounter % 2) == 0 ) {
          image(b2, j, i, gSize, gSize);
        } else {

          image(b, j, i, gSize, gSize);
        }
        checkCounter++;
      }
    }
  }
}
