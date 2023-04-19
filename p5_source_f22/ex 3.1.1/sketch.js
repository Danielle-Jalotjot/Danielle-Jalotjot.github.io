function setup() {
  createCanvas(400, 400);
  background(20);
  noStroke();
}

function draw() {
  fill(20, 10);
  rect(0, 0, width, height);
  DaniRanDots();
}

function DaniRanDots() {
  let r = random(30);
  let rloop = random(10);
  for (let i = 0; i < r; i++) {
    fill(r+100, rloop+160, random(150));
    ellipse(random(width), random(height), r+10, r+10);
  }
}
