var speedX = 2.5;
var speedY= 1.6;
var x;
var y;
var img;
var bg;
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1";

function preload() {
  bg = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/party.png');
  img_shh = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/shh.png');
  img_lvl1 = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/gain.PNG');
  img_lvl2 = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/nurse.PNG');
  img_lvl3 = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/gfbf.PNG');
  img_gametitle = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/gametitle.png');
  img_gamending = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/gamending.png');
  
}

function setup() {
  background(bg);
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end setup

function draw() {
  cursor('https://danielle-jalotjot.github.io/DSJ.Portfolio/shh.png');
  
  background(bg);
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
    
    
  }

  // score text
  fill(0, 72, 255);
  textSize(25);
  textStyle(ITALIC);
  text("Score: " + score, width / 2, 40);
} // end draw

function levelOne() {
  
  cursor('grab');
  fill(255, 255, 255);
  textSize(35);
  textStyle(BOLDITALIC);
  text("Level 1", width / 2, height - 10);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 10) {
    // call level 2
    // fill(random(255));
    gameState = "L2";
  }

  image(img_lvl1, ballx-175, bally-175, 350, 350);
  
} // end level one

function levelOne() {
  
  cursor('grab');
  fill(255, 255, 255);
  textSize(35);
  textStyle(BOLDITALIC);
  text("Level 1", width / 2, height - 10);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 10) {
    // call level 2
    // fill(random(255));
    gameState = "L2";
  }

  image(img_lvl1, ballx-175, bally-175, 350, 350);
  
} // end level one

function levelTwo() {
  
  cursor('grab');
  background(bg);
  fill(255, 255, 255);
  textSize(35);
  textStyle(BOLDITALIC);
  text("Level 2", width / 2, height - 10);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 20) {
    // level 3
    gameState = "L3";
  }

  image(img_lvl2, ballx-175, bally-175, 350, 350);
  
} // end level two

function levelThree() {
  
  cursor('grab');
  background(bg);
  fill(255, 255, 255);
  textSize(35);
  textStyle(BOLDITALIC);
  text("Level 3", width / 2, height - 10);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    ballSize = ballSize - 1;
    score = score + 1;
  }
  if (score > 30){ 
  gameState="WIN";
    // level 4
    // gameState = "L4";
  }
  
  image(img_lvl3, ballx-175, bally-175, 350, 350);

} // end level three
