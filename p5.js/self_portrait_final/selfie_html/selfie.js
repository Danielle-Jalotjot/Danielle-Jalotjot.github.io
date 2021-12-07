function setup() {
  createCanvas(600, 600);
  xCenter = 200;
  yCenter = 200;
}

function draw() {
  background(94, 173, 136);

  //background shape - orange shadow
  fill(135, 52, 19, 150);
  noStroke();
  rect(30, 30, 515, 435);

  //background shape - orange
  fill(255, 111, 0, 150);
  noStroke();
  rect(20, 20, 500, 420);

  //background shape - purple
  fill(109, 71, 222, 150);
  noStroke();
  circle(380, 480, 500);

  //cloud - large
  fill(255, 255, 255, 200);
  //      x,  y,  width, height
  ellipse(580, 40, 380, 110);

  //cloud - small
  fill(255, 255, 255, 200);
  //      x,  y,  width, height
  ellipse(420, 80, 100, 30);

  //cloud - left
  fill(255, 255, 255, 200);
  //      x,  y,  width, height
  ellipse(20, 200, 260, 80);
  
    //cloud - left bottom
  fill(255, 255, 255, 200);
  //      x,  y,  width, height
  ellipse(85, 290, 150, 30);

  //neck
  fill(176, 126, 72);
  stroke(163, 115, 64);
  strokeWeight(3);
  //    x,  y,  width, height
  rect(330, 330, 60, 65);

  //sleeves
  fill(219, 63, 50);
  stroke(156, 43, 34);
  strokeWeight(4);
  //  rb x,rb y,  rt x,rt y, lt x,lt y, lb x,lb y
  quad(520, 600, 450, 390, 270, 390, 200, 600);

  //shirt
  fill(242, 82, 70);
  stroke(199, 55, 44);
  strokeWeight(4);
  //  rb x,rb y,  rt x,rt y, lt x,lt y, lb x,lb y
  quad(460, 600, 420, 380, 300, 380, 260, 600);

  //shirt pocket
  fill(173, 45, 35);
  stroke(156, 43, 34);
  //  rb x,rb y,  rt x,rt y, lt x,lt y, lb x,lb y
  quad(420, 600, 400, 540, 320, 540, 300, 600);

  //string 1
  strokeWeight(3);
  //    x,  y,  width,  height
  rect(340, 380, 6, 70);

  //string 2
  strokeWeight(3);
  //    x,  y,  width,  height
  rect(375, 380, 6, 70);

  //ball 1
  fill(71, 104, 252);
  stroke(48, 69, 191);
  strokeWeight(3);
  circle(343, 450, 15);

  //ball 1
  fill(71, 104, 252);
  stroke(48, 69, 191);
  strokeWeight(3);
  circle(378, 450, 15);

  //hair body
  fill(26, 16, 5);
  stroke(18, 11, 3);
  strokeWeight(4);
  //  x,  y,  width,  height,  start,  stop
  arc(360, 320, 260, 400, PI, TWO_PI, CHORD);

  //head
  fill(201, 146, 87);
  stroke(176, 126, 72);
  strokeWeight(3);
  //        x,    y,  width, height
  ellipse(360, 250, 180, 230);

  //right eye
  fill(26, 16, 5);
  noStroke();
  //        x,  y,  width, height
  ellipse(400, 240, 15, 30);

  //left eye
  //        x,  y,  width, height
  ellipse(320, 240, 15, 30);

  //eye highlights
  fill(255, 255, 255);
  noStroke();
  //right eye
  //        x,  y,  width, height
  ellipse(402, 236, 5, 10);

  //left eye
  //        x,  y,  width, height
  ellipse(322, 236, 5, 10);

  //nose
  fill(176, 126, 72);
  stroke(163, 115, 64);
  strokeWeight(3);
  //      rb x, rb y,  top x, top y,  lb x, lb y
  triangle(370, 280, 360, 260, 350, 280);

  //blush 1
  fill(179, 71, 127, 100);
  noStroke();
  circle(305, 280, 45);

  //blush 2
  fill(179, 71, 127, 100);
  noStroke();
  circle(415, 280, 45);

  //bangs
  fill(26, 16, 5);
  noStroke();
  //  x,  y,  width,  height,  start,  stop
  arc(360, 220, 165, 190, PI, TWO_PI);

  //bang cutout 1
  fill(201, 146, 87);
  //    x,  y,  width, height
  rect(300, 198, 3, 35);

  //bang cutout 2
  fill(201, 146, 87);
  //    x,  y,  width, height
  rect(345, 210, 3, 35);

  //bang cutout 3
  fill(201, 146, 87);
  //    x,  y,  width, height
  rect(370, 190, 3, 35);

  //bang cutout 4
  fill(201, 146, 87);
  //    x,  y,  width, height
  rect(415, 200, 3, 35);

  //sun layer4
  fill(255, 213, 0, 70);
  circle(150, 140, 190);

  //sun layer3
  fill(255, 213, 0, 100);
  circle(150, 140, 170);

  //sun layer2
  fill(255, 213, 0, 130);
  circle(150, 140, 150);

  //sun
  fill(255, 213, 0);
  circle(150, 140, 130);
}
