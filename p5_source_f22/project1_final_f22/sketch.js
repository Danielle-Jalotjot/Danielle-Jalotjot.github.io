let currentkey = '1';
let bgc ;
let gkcount;
let brushSize = 20;
// let f = 0.5;
// let spring = 0.4;
// let friction = 0.45;
// let v = 0.5;
// let r = 0;
// let x = 0;
// let y = 0;
// let vx = 0;
// let vy = 0;
// let splitNum = 100
// let diff = 10

var img;

function preload() {
  // yellow_stroke = loadImage('images_etc/yellow_stroke.png')
  // red_stroke = loadImage('images_etc/red_stroke.png')
  // blue_stroke = loadImage('images_etc/blue_stroke.png')
}

function setup() {
    colorMode(HSB, 255);
    createCanvas(600, 400);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
imgY = loadImage('images_etc/yellow_stroke.png')
imgR = loadImage('images_etc/red_stroke.png')
imgB = loadImage('images_etc/blue_stroke.png')

}

function draw() {
    // triggering the clear_print function
    if( keyIsPressed) {
    clear_print();
}
// triggering the newkeychoice
if(mouseIsPressed) {
  drawChoice();
}
}


function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function
 // key global variable contains whatever key was last pressed
 let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
 // let k = color(0);
  drawBlackline(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;


case '2':
  console.log("2");  // white line
  drawWhiteline(color(255), mouseX, mouseY, pmouseX, pmouseY);
  break;


  case 'q':
    console.log("q");  // thick black line
   // let k = color(0);
    drawBlackline2(color(0), mouseX, mouseY, pmouseX, pmouseY);
    break;


  case 'w':
    console.log("w");  //thick white line
    drawWhiteline2(color(255), mouseX, mouseY, pmouseX, pmouseY);
    break;


  case '3':
        console.log("3");  // brushstroke
        djBrushStroke(gkcount, mouseX, mouseY, pmouseX, pmouseY);
        if (gkcount > 255 ) {
            gkcount = 30;
        } else {
            gkcount+=8;
        }
        break;


case '4':
  console.log("4");  // big layered colorful ellipses
    rectMode(CENTER);
    translate(-50,-50);
  layeredRand1(color(180, 100, 100), mouseX, mouseY, pmouseX, pmouseY);
  break;

  case '5':
    console.log("5");  // small layered neutral ellipses
    layeredRand2(color(180, 100, 100), mouseX, mouseY, pmouseX, pmouseY);
    break;


  case '6':
    console.log("6");  // yellow_stroke
    rectMode(CENTER);
    image(imgY, mouseX-40, mouseY-30, 120, 60);
    break;


  case '7':
    console.log("7");  // red_stroke
    rectMode(CENTER);
    image(imgR, mouseX-40, mouseY-30, 120, 70);
    break;


  case '8':
    console.log("8");  // blue_stroke
    rectMode(CENTER);
    image(imgB, mouseX-40, mouseY-30, 130, 60);
    break;


    case '9':
      console.log("9");  // erase with bg color
      eraser(bgc,mouseX, mouseY,25);
       break;


default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawBlackline( k,  lx, ly,  px, py) {
 // strokeWeight(1);
  stroke(k);
  strokeWeight(2);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function drawWhiteline( k,  lx, ly,  px, py) {
 // strokeWeight(1);
  stroke(k);
  strokeWeight(2);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}


function drawBlackline2( k,  lx, ly,  px, py) {
 // strokeWeight(1);
  stroke(k);
  strokeWeight(10);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}

function drawWhiteline2( k,  lx, ly,  px, py) {
 // strokeWeight(1);
  stroke(k);
  strokeWeight(10);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
}


function djBrushStroke(kcount, lx, ly,  px, py) {
  strokeWeight(random(1,35));
  stroke(0,kcount,0);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}

function layeredRand1( k,  lx, ly,  px, py) {
  // strokeWeight(10);
  // translate(mouseX-200, mouseY-200);
  // stroke(random(255));
  // strokeWeight(2);
  noStroke();
  fill(random(0, 255), 220, 220, 100);
  // fill(random(255,255,255));
  ellipse(lx, ly, px, py);
}

function layeredRand2( k,  lx, ly,  px, py) {
  // strokeWeight(10);
  // translate(mouseX, mouseY);
noStroke();
  // fill(150, 234, 245, 150);
  let r = random(170);
  let rloop = random(150);
  fill(r+170, rloop+50, random(130));
  // fill(random(255,255,255));
  ellipse(lx, ly, 20, 20);
}

// function brushStroke( k,  lx, ly,  px, py) {
// rectMode(CENTER);
//     if(mouseIsPressed) {
//     if(!f) {
//       f = true;
//       x = mouseX;
//       y = mouseY;
//     }
//     vx += ( mouseX - x ) * spring;
//     vy += ( mouseY - y ) * spring;
//     vx *= friction;
//     vy *= friction;
//
//     v += sqrt( vx*vx + vy*vy ) - v;
//     v *= 0.55;
//
//     oldR = r;
//     r = brushSize - v;
//     var num = random(0.1,0.8)
//     var num2 = random(0.1,0.8)
//     for( let i = 0; i < splitNum; ++i ) {
//       oldX = x;
//       oldY = y;
//       x += vx / splitNum;
//       y += vy / splitNum;
//       oldR += ( r - oldR ) / splitNum;
//       if(oldR < 1) { oldR = 1; }
//       fill(0,0,0);
//       strokeWeight( oldR+diff );  // AMEND: oldR -> oldR+diff
//       line( x+num, y+num, oldX+num, oldY+num);
//       strokeWeight( oldR );  // ADD
//       line( x+diff*num2, y+diff*num2, oldX+diff*num2, oldY+diff*num2 );  // ADD
//       line( x-diff*num, y-diff*num, oldX-diff*num, oldY-diff*num);  // ADD
//     }
//
//   } else if(f) {
//     vx = vy = 0;
//     f = false;
//   }
// }

function eraser( k, lx, ly, sz) {
  // stroke(k);
  noStroke();
  fill(255);
  ellipse(lx, ly, sz,sz);
}


function clear_print() {

// these 2 options let you choose between clearing the background
// and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
     background(255);
  } else if (key == 'p' || key == 'P') {
      saveFrames('image-0', 'png', 1, 1);
      key = '';  // resets the key so it does not make more than one image.
  }

}
