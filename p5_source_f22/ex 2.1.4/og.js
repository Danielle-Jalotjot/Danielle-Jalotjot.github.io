let tCounter = 0;
let f;


 /*
   You can get free font on the web.. the format that seems to work well with p5
   is .otf
   https://www.1001fonts.com/opentype-fonts.html


   */
// function preload() {
//   f = loadFont('assets/yourfont.otf');
// }


function setup() {
  createCanvas(800, 800);

  //set the font for drawing
  //textFont(f);
  // set color of text
  fill(0, 255, 0);
  //draw out text
  text("Green is good", 100, 100);
}


function draw() {

  background(0);
  fill(0, 255, 0);
  text("Green is good", tCounter, 100);

  // this is an example of 'and' logic
  if ( mouseIsPressed && keyIsPressed == true )  {
    fill(255, 0, 0);
    text("Red is Betta ", 100, tCounter);
  }

  tCounter ++;
  if (tCounter > width) {
    tCounter = -50;
  }

}
