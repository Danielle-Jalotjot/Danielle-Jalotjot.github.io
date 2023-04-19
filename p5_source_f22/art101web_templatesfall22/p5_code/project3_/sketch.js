
let bgc1; // day blue
let bgc2; //  night blue
let img1; // watering can gif
let img2; //  night bg
let img3; //  day bg
let f; //  font
let lastsec;
let lastsmin;

let beepsound; // alarm sound

function preload() {
  img1 = loadImage('images/water_can.gif');
  img2 = loadImage('images/night-bg.png');
  img3 = loadImage('images/day-bg.png');
  f = loadFont('images/larabiefont-rg.otf');
  beepsound = loadSound("misc/mixkit-alarm-digital-clock-beep-989.wav");
}

function setup() {
  let cnv = createCanvas(600,550);
  cnv.mousePressed(setupSound);  // callback function
  fill(255,100,0);
  angleMode(DEGREES);
  // bgc1 = color(96, 202, 249); // day blue
  bgc2 = color(20, 113, 210); // night blue
  lastsec = second();  // 3
  lastmin = minute();  // 3
}

function draw() {
// background(bgc1);
background(bgc2);

DaynNite();
ClockImagery();
AlarmCMon();
AlarmCWed();
AlarmCFri();
AlarmPSun();

}

function AlarmCMon() {

  // model
  fill(0);
  let h = hour();
  let m = minute();
  let s = second();
  let d = day();
  let alarm = beepsound;

  if ( d == 14 && h == 11 && m == 0) {

//            -1 (to start at 0)
      if (s > -1 && s < 30) {
          console.log("water your needy plant!");

          if (!alarm.isPlaying()) {
              // .isPlaying() returns a boolean
              // alarm.stop();
              alarm.play();

            }

          push();
          textSize(32);
          textFont(f);
          fill(255);
          strokeWeight(3);
          stroke(59, 186, 95, 150);
          text("water!",width/2-55,30);
          image(img1, 420, 8, 190-15, 160-15); // watering can gif
          pop();
      }

}
}

function AlarmCWed() {

  // model
  fill(0);
  let h = hour();
  let m = minute();
  let s = second();
  let d = day();
  let alarm = beepsound;

  if ( d == 16 && h == 12 && m == 43) {

//            -1 (to start at 0)
      if (s > -1 && s < 30) {
          console.log("water your needy plant!");

          if (!alarm.isPlaying()) {
              // .isPlaying() returns a boolean
              // alarm.stop();
              alarm.play();

            }
            // else {
            //   alarm.play();
            // }

          push();
          textSize(32);
          textFont(f);
          fill(255);
          strokeWeight(3);
          stroke(59, 186, 95, 150);
          text("water!",width/2-55,30);
          image(img1, 420, 8, 190-15, 160-15); // watering can gif
          pop();
      }

}
}

function AlarmCFri() {

  // model
  fill(0);
  let h = hour();
  let m = minute();
  let s = second();
  let d = day();
  let alarm = beepsound;

  if ( d == 18 && h == 11 && m == 0) {

//            -1 (to start at 0)
      if (s > -1 && s < 30) {
          console.log("water your needy plant!");

          if (!alarm.isPlaying()) {
              // .isPlaying() returns a boolean
              // alarm.stop();
              alarm.play();

            }

              push();
              textSize(32);
              textFont(f);
              fill(255);
              strokeWeight(3);
              stroke(59, 186, 95, 150);
              text("water!",width/2-55,30);
              image(img1, 420, 8, 190-15, 160-15); // watering can gif
              pop();
      }

}
}

function AlarmPSun() {

  // model
  fill(0);
  let h = hour();
  let m = minute();
  let s = second();
  let d = day();
  let alarm = beepsound;

  if ( d == 20 && h == 11 && m == 0) {

//            -1 (to start at 0)
      if (s > -1 && s < 30) {
          console.log("water your needy plant!");

          if (!alarm.isPlaying()) {
              // .isPlaying() returns a boolean
              // alarm.stop();
              alarm.play();

            }

              push();
              textSize(32);
              textFont(f);
              fill(255);
              strokeWeight(3);
              stroke(59, 186, 95, 150);
              text("water!",width/2-55,30);
              image(img1, 130, 8, 190-15, 160-15); // watering can gif
              pop();
      }

}
}


function DaynNite() {

  let h = hour();
  let m = minute();
  let s = second();
  let d = day();

   // 0 -23    17 = 5pm / 6 = 6am
 if (h > 17 || h < 6 ) {  // night time (5pm - 6am)
     noStroke();
     image(img2, -10, -5, 610, 680); // night-bg
     fill(200);
     ellipse(580,10,200,200); // main moon
     fill(180);
     ellipse(540,10,50,30); //gray spot 1
     fill(180);
     ellipse(590,70,80,50); //gray spot 2
     bgc2 = color(20, 113, 210); // night blue


 } else { // day time (6:01am - 4:59pm)
     image(img3, -200, 0, 1000, 510); // day-bg
     noStroke();
     fill(255,200,0);
     ellipse(20,10,200,200); // sun
     fill(255, 250, 176, 100);
     ellipse(20,10,180,180); // lighter ring
     fill(255, 250, 242, 100);
     ellipse(20,10,160,160); // lightest ring
     bgc1 = color(20, 113, 210); // day blue
 }
 }

 function ClockImagery() {

   let h = hour();
   let m = minute();
   let s = second();
   let d = day();

 let mh = map(h,0,23,0,360);
 let mm = map(m,0,59,0,360);
 let ms = map(s,0,59,0,360);
 let md = map(d,1,30,0,width);

 // day of the month visualization - bar at bottom
 push();
 fill(59, 186, 95, 150); // green
 noStroke();
 rect(0,530,md,20);
 translate(width/2,height/2);
 fill(255, 82, 199);
 textSize(22);
 textFont(f);
 stroke(59, 186, 95);
 strokeWeight(4);
 text("Day of the Month",-294,260);
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
 fill(bgc2);
 stroke(142, 146, 255);
 strokeWeight(3);
 translate(200,-10);
 fill(142, 62, 255);
 textSize(36);
 textFont(f);
 text("second hand",-200,15);
 pop();
 }

 function setupSound() {
   // This is required now for most audio in browser apps.
   // you click to start the sound engine.
   userStartAudio();

 }
