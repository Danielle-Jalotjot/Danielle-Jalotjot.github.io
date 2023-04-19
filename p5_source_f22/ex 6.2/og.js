// example 6.3

// This uses the transformation matrix tools to move,
//rotate and scale things as batch operations
// 9 x 9 (interval array)
var biggergridarr = [
 [0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 1, 0, 0, 0, 1, 0, 0],
 [0, 0, 1, 0, 0, 0, 1, 0, 0],
 [1, 0, 0, 0, 0, 0, 0, 0, 1],
 [0, 0, 1, 0, 0, 0, 1, 0, 0],
 [0, 0, 0, 1, 1, 1, 0, 0, 0],
 [0, 0, 2, 0, 0, 0, 2, 0, 0],
 [0, 0, 0, 2, 2, 2, 0, 0, 0],
 [0, 0, 2, 0, 0, 0, 2, 0, 0]
];
 // 5 x 5 (string array with text)
var textarr = [
 ["money", "money", "money", "money", "money"],
 ["money", "face", "face", "money", "money"],
 ["money",   "face", "face", "blood", "money"],
 ["money", "face", "face", "blood", "money"],
 ["money", "money", "money", "money", "blood"]
];



function setup() {
 createCanvas(600, 500);
 background(0, 60, 150);
 fill(100);
  //x,y,rot,scale, alpha
 drawmonopixels(20, 20, 0, 0.5, 100);
 drawmonopixels(150, 20, 45, 1, 255);
 drawcolorpixels(220, 75, -45, 1.3, 255);
 drawcolorshapes(20, 275, -25, 1.5, 255);
 drawcolortext(240, 255, 25, 1.5, 255);
}


       //x,y,rot,scale, alpha
function drawmonopixels(lx,ly,rot,sc, fade) {
 push();
 translate(lx,ly);
 rotate(radians(rot));
 scale(sc);
 for (var i = 0; i < biggergridarr.length; i++) {
     for (var j = 0; j < biggergridarr[0].length; j++) {
         fill(biggergridarr[i][j] * 128, fade);
         rect(j * 12, i * 12, 10, 10);
     }
 }
pop();

}
        //x,y,rot,scale, alpha
function drawcolorpixels(lx,ly,rot,sc, fade) {
 push();
 translate(lx,ly);
 rotate(radians(rot));
 scale(sc);
 for (var i = 0; i < biggergridarr.length; i++) {
     for (var j = 0; j < biggergridarr[0].length; j++) {
          let value = biggergridarr[i][j];
           if ( value == 0 ) {
               fill(200,70,0, fade);
           } else if ( value == 1 ){
               fill(50,0,30, fade);
           } else {
               fill(0,150,0, fade);
           }
         rect(j * 12, i * 12, 10, 10);
     }
 }
 pop();

}
            //x,y,rot,scale, alpha
function drawcolorshapes(lx,ly,rot,sc, fade) {
 push();
 translate(lx,ly);
 rotate(radians(rot));
 scale(sc);
 for (var i = 0; i < biggergridarr.length; i++) {
     for (var j = 0; j < biggergridarr[0].length; j++) {
          let value = biggergridarr[i][j];
           if ( value == 0 ) {
               fill(200,70,0, fade);
               ellipse(j * 12, i * 12, 10, 10);
           } else if ( value == 1 ){
               fill(50,0,30, fade);
                rect(j * 12-6, i * 12-6, 10, 10,2);
           } else {
               fill(0,150,0, fade);
                ellipse(j * 12, i * 12, 15, 10,5);
           }
     }
 }
 pop();

}
                   //x,y,rot,scale, alpha
function drawcolortext(lx,ly,rot,sc, fade) {
 textSize(15);
 textAlign(CENTER, CENTER);
 push();
 translate(lx,ly);
 rotate(radians(rot));
 scale(sc);
 for (var i = 0; i < textarr.length; i++) {
     for (var j = 0; j < textarr[0].length; j++) {
          let value = textarr[i][j];
           if ( value == "money" ) {
               fill(20,170,0, fade);
           } else if ( value == "blood" ){
               fill(200,0,30, fade);
           } else {
               fill(255, fade);
           }
            text(value, j * 35, i * 10,100);
     }
 }
 pop();

}
