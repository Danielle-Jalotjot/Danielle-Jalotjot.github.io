// Example 4.2  Bounce Vecot Movement Code
let speedX, speedY, loX, loY;

function setup() {
    background(0);
    createCanvas(500, 500);
    speedX = random(-5, 5);
    speedY = random(-5, 5);
    loX = height / 6;
    loY = width / 3;
}

function draw() {
    background(103, 93, 140);
    if (loX < 0) {
        speedX = -speedX;
    }

    //  if you wanna limit the walls of where the ellipse
    // bounces off, subtract __ pixels from width and/or height
    // if (loX > width-100) {
    //     speedX = -speedX;
    // }

    if (loX > width) {
        speedX = -speedX;
    }
    // this is the short hand way of doing the same as the 2 'ifs' above
    // this uses or '||'
    if ((loY < 0) || (loY > height)) {
        speedY = -speedY;
    }

    // update the position of the ball and print to screen
    loX += speedX;
    loY += speedY;
    fill(255);
    ellipse(loX, loY, 40, 40);
}
