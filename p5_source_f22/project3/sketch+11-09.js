// Required Elements:

// A. Visualization is a Priority:
// IMPORTANT: The key thing is that your clock represents time Visually and not
 // purely with symbols (not just Number/words). You are going to create a clock sketch
 // that depicts the passage of time in a unique way in terms of graphic representation of
 // the units and pace of time. Use the ideas of representing quanities with color ,
 // relative size, height , width, shape ,etc. Also consider the ideas of metaphors and
 // symbols. You can also use the passage of time, like a narrative, where you create
 // something follow the course of a repeating story, the sun and moon, a loop or cycle.
 // There are many ways you can show both the relative quantatative aspects of time.

// B. More than a 12 hour cycle
// Be sure to include in your clock features of it repearint completly longer than a
// 12 hour cycle ( i.e. 24 hour clock). You can have regular repeating patterns or even
// 'uneven' time patterns, like multiple alarms.

// C. The clock must show the passage of time, in realtime (like a second hand movement).
// Regardless of the kind of clock you make and the time periods it uses, you must have
// something animating on the screen that will show the passage of time, and that the
// clock is working and moving.

// D. The clock is not universal,
// Create the clock out of some kind of observtions of your own lifestyle and routine,
// or that of something that you encounter in everyday life. It should not be a clock that
// is made for everyone to use. It should more be a clock based on a rountine in your life.

// E. 2 or more Time Divisions
// You need to make a clock that has at least 2 multiples of time or time divisions.
// For example, hour and minutes are time divisions of a day, a week, etc.. You can also
// make clocks that have longer time frames. like mornings, afternoons, days, hunger
// cycles, days and weeks.


// 24 hour clock with alarms. --> turn into 1 week clock with alarms
// concept - everytime I water my 2 plants (croton & philodendron)
// Croton - watered every 2 days; Philodendron - watered once

let bgc1; // navy blue
let bgc2; //  navy blue
let img1; // watering can gif
let img2; //  night bg
let img3; //  day bg
let f; //  font

function preload() {
  img1 = loadImage('images/water_can.gif');
  img2 = loadImage('images/night-bg.png');
  img3 = loadImage('images/day-bg.png');
  f = loadFont('images/larabiefont-rg.otf');
}

function setup() {
  createCanvas(600,550);
  background(200);
  fill(255,100,0);
  angleMode(DEGREES);
  bgc1 = color(96, 202, 249);
  bgc2 = color(96, 202, 249);
  // image(img1, 20, 40, 100, 100);
}

function draw() {
background(bgc1);

 // model
 fill(0);
 let h = hour();
 let m = minute();
 let s = second();
 let d = day();


// shows passage of time (days)
     // 0 -23    17 = 5pm / 6 = 6am
 if (h > 17 || h < 6 ) {  // night time (5pm - 6am)
      // nightime
      // drawthemoon dark sky, stars
     image(img2, 0, -10, 610, 510); // night-bg
     fill(200);
     ellipse(580,10,200,200); // main moon
     fill(180);
     ellipse(540,10,50,30); //gray spot 1
     fill(180);
     ellipse(590,70,80,50); //gray spot 2
     bgc1 = color(0, 44, 99);
     // bgc2 = color(0, 44, 99);
     //sundown

 } else { // day time (6:01am - 4:59pm)
     image(img3, -200, 0, 1000, 510); // day-bg
     fill(255,200,0);
     ellipse(20,10,200,200); // sun
     fill(255, 250, 176, 100);
     ellipse(20,10,180,180); // lighter ring
     fill(255, 250, 242, 100);
     ellipse(20,10,160,160); // lightest ring
     bgc1 = color(96, 202, 249);
     // bgc2 = color(96, 202, 249);
 }
//
// alarm for croton plant (every 2 days - Mon,Wed,Fri)
 if ( d == 1 ||  d == 3 || d == 5) {
     textSize(25);
     textFont(f);
     fill(255, 255, 255);
     text("water your needy plant",25,45);
     image(img1, 330, 180, 250, 250); // watering can gif
 }

// alarm for philodendron plant (once/wk - Sun)
 if ( d == 7) {
   // if (m > 49  &&  m < 59) {
     textSize(40);
     fill(255,0,0);
     text("water your chill plant",25,45);
     image(img1, 330, 180, 250, 250); // watering can gif
    // }
 }
 let mh = map(h,0,23,0,360);
 let mm = map(m,0,59,0,360);
 let ms = map(s,0,59,0,360);

 let md = map(d,1,7,0,width);

 // day visualization - bar at bottom
 push();
 fill(59, 186, 95, 150); // green
 rect(0,530,ms,20); // based on days of the week
 translate(width/2,height/2);
 fill(255, 82, 199);
 textSize(24);
 textFont(f);
 stroke(59, 186, 95);
 strokeWeight(4);
 text("Mon - Sun",-290,265);
 pop();

// center ellipses
noStroke();
fill(142, 62, 255, 120);
ellipse(width/2,height/2, 450,450) // purple ellipse

fill(255, 139, 12, 100);
ellipse(width/2,height/2, 400,400) // orange ellipse

fill(255, 82, 199, 80);
ellipse(width/2,height/2, 350,350) // pink ellipse

// clock hands
// hour hand
push();
translate(width/2,height/2);
rotate(mh-90);
noStroke();
fill(255, 82, 199, 150);
// noFill();
// rect(0,14,200,3,10); // center rect
// rect(0,-22,200,3,10); // center rect
fill(bgc2);
stroke(255, 196, 199);
strokeWeight(3);
translate(200,-10);
fill(255, 82, 199);
textSize(36);
textFont(f);
text("hour hand",-200,15);
pop();

// minute hand
push();
translate(width/2,height/2);
rotate(mm-90);
noStroke();
fill(255, 139, 121, 150);
// noFill();
// rect(0,16,232,3,10); // center rect
// rect(0,-22,232,3,10); // center rect
fill(bgc2);
stroke(255, 214, 121);
strokeWeight(3);
translate(200,-10);
fill(240, 125, 0);
textSize(36);
textFont(f);
text("minute hand",-200,15);
pop();


  // second hand
 push();
 translate(width/2,height/2);
 rotate(ms-90);
 noStroke();
 fill(142, 146, 255, 150);
 // noFill();
//  rect(0,16,240,3,10); // center rect
// rect(0,-22,240,3,10); // center rect
 fill(bgc2);
 stroke(142, 146, 255);
 strokeWeight(3);
 translate(200,-10);
 fill(142, 62, 255);
 textSize(36);
 textFont(f);
 text("second hand",-200,15);
 pop();

// // day visualization - bar at bottom
// push();
// fill(59, 186, 95, 150); // green
// rect(0,530,md,20); // based on days of the week
// translate(width/2,height/2);
// fill(255, 82, 199);
// textSize(24);
// textFont(f);
// stroke(59, 186, 95);
// strokeWeight(4);
// text("Mon - Sun",-290,265);
// pop();
 }
