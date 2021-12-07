var img;
var bg;
var initials ='dsj'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken1
var canvaswidth=1000; 
var canvasheight=1000;

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  bg = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/bg.png'); 
  img_bg = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/bg.png');
  img_darkpants = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/darkpants.png');
  img_lightpants = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/lightpants.png');
  img_shorts = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/shorts.png');
  img_blackshirt = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/blackshirt.png');
  img_purpleshirt = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/purpleshirt.png');
  img_yellowshirt = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/yellowshirt.png');
  img_denimjacket = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/denimjacket.png');
  img_yellowjacket = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/yellowjacket.png');
  img_puffyjacket = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/puffyjacket.png');
  img_blackshoes = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/blackshoes.png');
  img_whiteshoes = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/whiteshoes.png');
  img_smile = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/smile.png');
  img_girrl = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/girrl.png');
  img_tongueout = loadImage('https://danielle-jalotjot.github.io/DSJ.Portfolio/tongueout.png');
  
}

function setup() {
createCanvas(canvaswidth, canvasheight);  // canvas size
background(screenbg);   // use our background screen color
  background(bg);
}

function draw() {
 
//  background(bg);
  
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}


function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    image(img_darkpants,mouseX-500, mouseY-500, 1000, 1000);
  } else if (toolChoice == '2') { // second tool
    
    image(img_lightpants, mouseX-500, mouseY-500, 1000, 1000);
  } else if (toolChoice == '3') { // third tool

    image(img_shorts, mouseX-500, mouseY-500, 1000, 1000);
  } else if (toolChoice == '4') {

    image(img_blackshirt, mouseX-500, mouseY-300, 1000, 1000);
  } else if (toolChoice == '5') {

    image(img_purpleshirt, mouseX-500, mouseY-300, 1000, 1000);
  } else if (toolChoice == '6') {

    image(img_yellowshirt, mouseX-500, mouseY-300, 1000, 1000);
  } else if (toolChoice == '7') {

    image(img_denimjacket, mouseX-500, mouseY-300, 1000, 1000);
  } else if (toolChoice == '8') {

    image(img_yellowjacket, mouseX-500, mouseY-300, 1000, 1000);
  } else if (toolChoice == '9') {
    
    image(img_puffyjacket, mouseX-500, mouseY-300, 1000, 1000);
  } else if (toolChoice == '0') {
    
    image(img_blackshoes, mouseX-500, mouseY-850, 1000, 1000);
  } else if (toolChoice == 'w') {
    
    image(img_whiteshoes, mouseX-500, mouseY-850, 1000, 1000);
  } else if (toolChoice == 's') {
    
    image(img_smile, mouseX-500, mouseY-125, 1000, 1000);
  } else if (toolChoice == 'j') {
    
    image(img_girrl, mouseX-500, mouseY-125, 1000, 1000);
  } else if (toolChoice == 't') {
    
    image(img_tongueout, mouseX-500, mouseY-125, 1000, 1000);
  } else if (toolChoice == 'w') {
    
    fill(300, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  }

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
    background(bg);
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
