var img;
var bg;
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L0";

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
  background(bg);
  
  if (gameState == "L0") {
  levelZero();
  }
  
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
    if (gameState == "L4") {
    YOU_WIN();
    }
  // score text
  fill(0, 72, 255);
  textSize(25);
  textStyle(ITALIC);
  text("Score: " + score, width / 2, 40);
  
  if (mouseX < 50 && mouseY < 50) {
    cursor('grab');
  }
} // end draw

function levelZero() {
  background(img_gametitle);

}
function mouseClicked(){
  background(img_gametitle);
}

function mouseReleased(){
  gameState = "L1";
} 

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
  if (score > 9) {
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
  if (score > 19) {
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
  
    if (score>= 30) {
    // level 3
    gameState = "L4";
    }
    
    image(img_lvl3, ballx-175, bally-175, 350, 350);
}
  function YOU_WIN(){
  background (img_gamending);

} // end level three
