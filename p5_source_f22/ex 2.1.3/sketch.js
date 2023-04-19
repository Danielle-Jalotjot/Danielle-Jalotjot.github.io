let b;

function setup() {
  createCanvas(300, 300);
  // Images must be in the "data" directory to load correctly
  b = loadImage("https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/blt2094c59e43e6f946/60ce79bbe1b3f7481347ddb0/Pizza.jpg");

}

function draw() {
  background(0);
  image(b, 50, 50, 100,100);
} 
