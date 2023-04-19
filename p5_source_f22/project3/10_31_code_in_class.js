function setup() {
  createCanvas(500,500);
  background(200);
  fill(255,100,0);
  angleMode(DEGREES);
}


function draw() {
background(200);


 // textSize(30);
 fill(0);

 let h = hour();   // 0-23
 let m = minute(); // 0- 59
 let s = second();  // 0-59

 // input, input range,scaleoutput low, scaleoutput high
 let mh = map(h,0,23,0,360);
 let mm = map(m,0,59,0,360);
 let ms = map(s,0,59,0,360);

 push();
 translate(width/2,height/2);
 rotate(mh-90);
 noStroke();
 fill(20);
 ellipse(0,0,80,80);
 fill(90,100,0);
 rect(0,0,200,10,5);
 stroke(200,100,0);
 pop();

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

 push();

 translate(width/2,height/2);
 rotate(ms-90);
 noStroke();
 fill(20);
 ellipse(0,0,80,80);
 fill(200,0,0);
 rect(0,0,200,10,5);
 stroke(200,100,0);
 //line(0,0,0,25);
//translate(200,0);
//line(0,0,0,25);

 pop();

 //text( h, 0, 0);
// text(m, width/2+50, height/2);
 //text(s, width/2+100, height/2);
 // let mi = millis();
 // text(mi, width/2+150, height/2);
 //console.log(      );

}
