// // function setup() {
//   createCanvas(400, 200);
//   background(20);
//   smooth();
//   let a = 0.0;
//   let inc = TWO_PI/25.0;
//   console.log(" The inc = " + inc);
//   stroke(255, 0, 0);

//   for (let i=0; i < width; i+=4) {
//     line(i, 100, i, 100+sin(a)*50.0);
//     console.log(" The angle = " + a + "The sin = " + sin(a));
//     a = a + inc;
//   }
// }


function setup() {
  createCanvas(400, 200);
  background(20, 90, 50, 85);
  smooth();
  let a = 0.0;
  let inc = TWO_PI/25.0;
  console.log(" The inc = " + inc);
  stroke(255, 20, 150);

  for (let i=0; i < width; i+=8) {
    line(i, 100, i, 100+sin(a)*50.0);
    console.log(" The angle = " + a + "The sin = " + sin(a));
    a = a + inc;
  }
}
