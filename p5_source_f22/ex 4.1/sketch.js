// Example 4.1  Wrap Around vector movement code
let speedX, speedY, loX, loY;
// loX & loY = location
// speed = direction; positive # = right; negative # = left
// speed = smaller the number, the slower it moves
// speed = bigger the number, the faster it moves

function setup() {
    background(0);
    createCanvas(500, 500);

// generates random movement for ellipse
    // making a random negative or positive value between -4 and 4
    speedX = random(-4, 4);
    // another way of doing the same thing
    speedY = 4 - random(8);
    loX = height / 4;
    loY = width / 4;
}

function draw() {
    background(0);

    // most of the time, these statements will be false
    // wrap around = when ellipse passes through border/0,
    // it wraps around to other side
    if (loX < 0) {
        loX = width;
    }
    if (loX > width) {
        loX = 0;
    }


    if (loY < 0) {
        loY = height;
    }
    if (loY > height) {
        loY = 0;
    }

    // update the position of the ball and print to screen
    // can place this before or after ellipse
    loX += speedX;
    loY += speedY;

    fill(255);
    ellipse(loX, loY, 50, 50);
}
