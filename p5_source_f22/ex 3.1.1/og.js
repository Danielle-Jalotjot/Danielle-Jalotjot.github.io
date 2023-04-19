function setup() {
  createCanvas(400, 400);
  background(20);
  noStroke();
}

function draw() {
  fill(20, 10);
  rect(0, 0, width, height);
  StevesRanDots();
}

function StevesRanDots() {
  let r = random(50);
  let rloop = random(20);
  for (let i = 0; i < r; i++) {
    fill(r+150, rloop+10, random(150));
    ellipse(random(width), random(height), r+10, r+10);
  }
}
