// clock - every time I have a conversation w/ Onyx

// 24 hour clock with alarms.

let bgc;
let shc;
function setup() {
  createCanvas(500,500);
  background(200);
  fill(255,100,0);
  angleMode(DEGREES);
  bgc = color(255,231,150);
  shc = color(0);
}

function draw() {
background(bgc);

 // textSize(30);

 // model
 fill(0);
 let h = hour();
 let m = minute();
 let s = second();
 // 9am -- 9
 // 12pm -- 12
 // 3pm  -- 15
 let hh = 15; // set to 'h'
if (hh == 9 || hh == 12 ||  hh == 15) {

    if ( m > -1 && m < 20) {
      //dopoop
    console.log("Poop");
     }
}


     // 0 -23    16 go dark
 if (h > 16 || h < 7 ) {  // sunset and sunrise
      // fill(200);
      // ellipse(100,100,100,100);

			//head
			fill(201, 146, 87);
			stroke(176, 126, 72);
			strokeWeight(3);
			ellipse(360, 250, 180, 230);

			//right eye
			fill(26, 16, 5);
			noStroke();
			ellipse(400, 240, 15, 30);

			//left eye
			ellipse(320, 240, 15, 30);

			//eye highlights
			fill(255, 255, 255);
			noStroke();
			//right eye
			ellipse(402, 236, 5, 10);

			//left eye
			ellipse(322, 236, 5, 10);

			//nose
			fill(176, 126, 72);
			stroke(163, 115, 64);
			strokeWeight(3);
			triangle(370, 280, 360, 260, 350, 280);

			//blush 1
			fill(179, 71, 127, 100);
			noStroke();
			circle(305, 280, 45);

			//blush 2
			fill(179, 71, 127, 100);
			noStroke();
			circle(415, 280, 45);

			fill(0, 0, 0, 130);
			rect(330, 305, 60, 5, 3);

     bgc = color(20,20,255);
     shc = color(200);

     //sundown
 } else {
     //daytime
     // show the sun and sky
     fill(255,200,0);
     ellipse(100,100,400,400);
     bgc = color(255,231,150);
     shc = color(20);
 }


 // if ( h > 16 &&  h < 20 ) {
 //     //put in cars
 //     // put smog
 //     textSize(40);
 //     fill(255,0,0);
 //     text("TRAFFIC BEEP BEEP",100,100);
 // }
 //
 // if ( h > 11 &&  h < 15 ) {
 //   if (m > 49  &&  m < 59) {
 //     textSize(40);
 //     fill(255,0,0);
 //     text("Art101 is Over",100,100);
 //    }
 // }
 let mh = map(h,0,23,0,360);
 let mm = map(m,0,59,0,360);
 let ms = map(s,0,59,0,360);

// HOUR hand
 push();
 translate(width/2,height/2);
 //rect(s-200,0,40,50);
 rotate(mh-90);
 noStroke();
 fill(20);
 ellipse(0,0,80,80);
 fill(90,100,0);
 rect(0,0,200,10,5);
 stroke(200,100,0);
 pop();

// MINUTE hand
 push();
 translate(width/2,height/2);
 rotate(mm-90);
 noStroke();
 fill(20);
 ellipse(0,0,80,80);
 fill(90,0,0);
 rect(0,0,200,10,5);
 stroke(200,100,0);
 pop();

  // SECOND hand
 push();
 translate(width/2,height/2);
 rotate(ms-90);
 noStroke();
 fill(20);
 ellipse(0,0,80,80);
 fill(shc);
 rect(0,0,200,10,5);
 stroke(200,100,0);
 //line(0,0,0,25);
//translate(200,0);
//line(0,0,0,25);
 pop();

}
