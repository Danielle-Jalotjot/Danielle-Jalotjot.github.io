// Example 4.1  Wrap Around vector movement code
let speedX, speedY, loX, loY;

function setup() {
    background(0);
    createCanvas(500, 500);
    // making a random negative or positive value
    speedX = random(-2, 2);
    // another way of doing the same thing
    speedY = 2 - random(4);
    loX = height / 2;
    loY = width / 2;
}

function draw() {
    background(0);
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
    loX += speedX;
    loY += speedY;
    fill(255);
    ellipse(loX, loY, 20, 20);
}
