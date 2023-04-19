// ex 3 - starry sky

 var djGridArr = [
// 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12, 13,14,15,16,17
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 1
  [2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2], // 2
  [2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2], // 3
  [2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2], // 4
  [2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2], // 5
  [2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2], // 6
  [2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 7
  [2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2], // 8
  [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2], // 9
  [2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 2, 2], // 10
  [2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 11
  [2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 12
  [2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2], // 13
  [2, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2], // 14
  [2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2], // 15
  [2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 16
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], // 17
 ];
  // 16 x 16 (string array with text)
  //  ":)" = pale yellow text; ":o" = gray text; ":| = dark blue"; ":(" = less opaque dark blue
 var textarr = [
  // 1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17
  [":|",":(",":o",":o",":)",":)",":)",":)",":)",":)",":)",":)",":)",":o",":o",":(",":|"], // 1
  [":(",":o",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":o",":("], //2
  [":o",":o",":)",":)",":)",":o",":o",":)",":)",":)",":)",":)",":)",":)",":)",":o",":o"], //3
  [":o",":)",":)",":)",":o",":o",":o",":o",":)",":)",":)",":)",":)",":)",":)",":)",":o"], //4
  [":)",":)",":)",":)",":)",":o",":o",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)"], //5
  [":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":o",":o",":o",":o",":)",":)"], //6
  [":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":o",":o",":o",":o",":o",":o",":)"], //7
  [":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":o",":o",":o",":o",":)",":)"], //8
  [":)",":)",":)",":o",":o",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)"], //9
  [":)",":)",":o",":o",":o",":o",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)"], //10
  [":)",":)",":o",":o",":o",":o",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)"], //11
  [":)",":o",":o",":o",":o",":o",":o",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)"], //12
  [":o",":)",":o",":o",":o",":o",":)",":)",":)",":)",":o",":o",":o",":)",":)",":)",":o"], //13
  [":o",":)",":)",":)",":)",":)",":)",":)",":)",":o",":o",":o",":o",":o",":)",":)",":o"], //14
  [":o",":o",":)",":)",":)",":)",":)",":)",":)",":)",":o",":o",":o",":)",":)",":o",":o"], //15
  [":(",":o",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":)",":o",":("], //16
  [":|",":(",":o",":o",":)",":)",":)",":)",":)",":)",":)",":)",":)",":o",":o",":(",":|"], //17
 ];

 var textarr2 = [
  //  1,      2,      3,      4,      5,      6,      7,      8,      9,      10,     11,     12,     13,     14,     15,     16,     17
  [   "x",   "x",   "x",   "x",   "x","cloud","cloud","cloud","cloud","cloud","cloud","x",   "x",    "x",   "x",    "x",  "x"], // 1
  [   "x","x","x","x","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","x","x","x","x","x"], //2
  [   "x","x","x","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","x","x","x","x","x"], //3
  [   "x","x","x","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","x","x"], //4
  [   "x","x","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","x","x"], //5
  [   "x","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","x"], //6
  [   "x","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","x"], //7
  ["cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud"], //8
  ["cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud"], //9
  ["cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud"], //10
  ["cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud"], //11
  ["cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud",  "x"], //12
  [  "x","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud",    "x"], //13
  [  "x","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud","cloud",    "x",    "x"], //14
  [  "x",    "x","cloud","cloud","cloud","cloud","cloud",    "x",    "x",    "x","cloud","cloud","cloud","cloud",    "x",    "x",    "x"], //15
  [  "x",    "x",    "x","cloud","cloud",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x"], //16
  [  "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x",    "x"], //17
 ];


 function setup() {
  createCanvas(600, 500);
  background(10, 13, 79);
  noStroke();
  fill(255, 255, 230, 100);
  ellipse(440, 130, 220, 220);

  fill(255, 255, 230, 70);
  ellipse(440, 130, 205, 205);

  fill(255, 255, 230, 40);
  ellipse(440, 130, 190, 190);

  // custom functions
          //  x, y, rot,scale,alpha
  djBlueStar(230, 40, 45, 0.3, 180); //  upper-center
  djBlueStar(500, 440, -45, 0.2, 100); //  bottom-right corner
  djBlueStar(70, 270, 20, 0.3, 255); //  bottom-left
  djBlueStar(540, 10, -20, 0.3, 255); //  upper-right corner

  djYellowStar(120, 460, -45, 0.5, 180); //  bottom-center
  djYellowStar(0, 0, 5, 0.6, 255); // upper-left corner
  djYellowStar(480, 250, 0, 0.5, 180); // right-center
  djYellowStar(220, 180, -10, 0.4, 100); //  center

  djPinkStar(-15, 430, -20, 0.6, 180); //  bottom-left corner
  djPinkStar(240, 270, 45, 0.5, 255); //  center
  djPinkStar(260, 5, -45, 0.4, 255); //  upper-center
  djPinkStar(380, 420, 0, 0.5, 180); //  center

  djOrangeStar(300, 290, -20, 0.45, 255); //  center
  djOrangeStar(80, 200, -45, 0.3, 255); //  upper-left ish
  djOrangeStar(580, 130, 20, 0.3, 180); //  center-right ish

  djPurpleStar(20, 160, 45, 0.6, 180); //  center-right
  djPurpleStar(260, 420, -20, 0.4, 255); //  bottom-center
  djPurpleStar(100, -60, -20, 0.8, 100); //  upper-center

  djText(310, 50, 0, 1.0, 255); //  text grid - moon

  djText2(420, 310, 0, 0.4, 150); //  text grid - cloud - right-center at moon (small)
  djText2(-160, 370, 0, 0.5, 180); //  text grid - cloud - bottom-left corner
  djText2(250, 200, 0, 0.6, 200); //  text grid - cloud - right-center at moon
  djText2(-250, -80, 0, 0.8, 200); //  text grid - cloud - upperleft corner
 }


        //x,y,rot,scale, alpha
 function djYellowStar(lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  noStroke();

  for (var i = 0; i < djGridArr.length; i++) {
      for (var j = 0; j < djGridArr[0].length; j++) {
          // fill(biggergridarr[i][j] * 128, fade);
           let value = djGridArr[i][j];
            if ( value == 0 ) {
                fill(255, 255, 0, fade);
            } else {
                fill(10, 13, 79, fade);
            }
          rect(j * 12, i * 12, 10, 10);
      }
  }
 pop();

 }


         //x,y,rot,scale, alpha
 function djPinkStar(lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  // noStroke();
   stroke(10, 13, 79, 150);
  for (var i = 0; i < djGridArr.length; i++) {
      for (var j = 0; j < djGridArr[0].length; j++) {
           let value = djGridArr[i][j];
            if ( value == 0 ) {
                fill(232, 87, 139, fade);
            } else if ( value == 1 ){
                fill(50,0,30, fade);
            } else {
                fill(10, 13, 79, fade);
            }
          ellipse(j * 12, i * 12, 8, 8);
      }
  }
  pop();

 }


            //x,y,rot,scale, alpha
 function djBlueStar(lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  stroke(10, 13, 79, 150);
  for (var i = 0; i < djGridArr.length; i++) {
      for (var j = 0; j < djGridArr[0].length; j++) {
           let value = djGridArr[i][j];
            if ( value == 0 ) {
                fill(87, 196, 254, fade);
                rect(j * 20, i * 20, 15, 15, 5);
            } else if ( value == 1 ){
                fill(200,70,0, fade);
                rect(j * 20, i * 20, 15, 15, 5);
            } else {
                fill(10, 13, 79, fade);
                rect(j * 20, i * 20, 15, 15, 5);
            }
      }
  }
  pop();

 }


            //x,y,rot,scale, alpha
 function djOrangeStar(lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  stroke(10, 13, 79, 150);
  for (var i = 0; i < djGridArr.length; i++) {
      for (var j = 0; j < djGridArr[0].length; j++) {
           let value = djGridArr[i][j];
            if ( value == 0 ) {
                fill(255, 139, 82, fade);
                rect(j * 20, i * 20, 8, 8, 2);
            } else if ( value == 1 ){
                fill(255, 139, 82, fade);
                rect(j * 20, i * 20, 8, 8, 2);
            } else {
                fill(10, 13, 79, fade);
                rect(j * 20, i * 20, 8, 8, 2);
            }
      }
  }
  pop();

 }


//x,y,rot,scale, alpha
 function djPurpleStar(lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  stroke(10, 13, 79, 150);
  for (var i = 0; i < djGridArr.length; i++) {
      for (var j = 0; j < djGridArr[0].length; j++) {
           let value = djGridArr[i][j];
            if ( value == 0 ) {
                fill(167, 115, 240, fade);
                rect(j * 10, i * 10, 10, 6);
            } else if ( value == 1 ){
                fill(167, 115, 240, fade);
                rect(j * 10, i * 10, 10, 6);
            } else {
                fill(10, 13, 79, fade);
                rect(j * 10, i * 10, 10, 6);
            }
      }
  }
  pop();

 }

              //x,y,rot,scale, alpha
 function djText(lx,ly,rot,sc, fade) {
  textSize(15);
  textAlign(CENTER, CENTER);
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < textarr.length; i++) {
      for (var j = 0; j < textarr[0].length; j++) {
           let value = textarr[i][j];
            if ( value == ":)" ) { // white
                fill(255, 255, 230, fade);
            } else if ( value == ":o" ){ // gray
                fill(180,180,180, fade);
            }
            else if ( value == ":|" ){ // dark blue
                fill(10, 13, 79, fade);
            }
            else if ( value == ":(" ){ // less opaque dark blue
                fill(10, 13, 79, 50);
            }
            else {
                fill(255,255,255, 100);
            }
             text(value, j * 10, i * 10,100);
      }
  }
  pop();

 }

 //x,y,rot,scale, alpha
function djText2(lx,ly,rot,sc, fade) {
textSize(15);
textAlign(CENTER, CENTER);
push();
translate(lx,ly);
rotate(radians(rot));
scale(sc);
for (var i = 0; i < textarr2.length; i++) {
for (var j = 0; j < textarr2[0].length; j++) {
let value = textarr2[i][j];
if ( value == "cloud" ) { // white
   fill(255,255,255, fade);
} else if ( value == "shadow" ){ // (lighter) dark blue
   fill(10, 53, 139, fade);
}
else {
   fill(10, 13, 79, fade);
}
text(value, j * 38, i * 15,120);
}
}
pop();

}
