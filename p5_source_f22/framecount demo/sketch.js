function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  frameRate(30);
  // 30 frames times 10
  console.log(frameCount);
}

function draw() {
  // start as true until 149
if (frameCount < 150) {
    console.log("the first act");
    // green
    fill(0, 255, 0);
    ellipse(width/2,height/2, 80,80);

    // true between frames 100 and 199
} else if (frameCount < 200) {
      console .log("the second act");
      // yellow
      fill(255, 255, 0);
      ellipse(width/2,height/2, 80,80);


} else {
        console.log("the third act");
        // red
        fill(255, 0, 0);
        ellipse(width/2,height/2, 80,80);
        noLoop();

}





//  ellipse(width/2, height/2, 50, 50);
//  console.log(frameCount);
//
// if (frameCount > 300) {
//   // console log will display "The End"
// console.log("The End");
// // exit();


}

// }
