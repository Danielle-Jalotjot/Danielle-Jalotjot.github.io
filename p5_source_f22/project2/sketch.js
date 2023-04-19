let bubbles;
let topcolor, bottomcolor;
let bug;
let e1, e2, e3;
let can;
let recMode = false;

function setup() {
  can = createCanvas(600, 400);
  createP("hold right-click & drag to generate new bubbles :)");

    bubbles = new B();
  // Add an initial set of boids into the system
  for (let i = 0; i < 130; i++) {
    let b = new Boid(width / 2,height / 2);
    bubbles.addBoid(b);

    bug = new djEllipse();

    frameRate(25);

    console.log(frameCount);

    e0 = new djEllipse();
    e1 = new djEllipse();
    e2 = new djEllipse();
    e3 = new djEllipse();
    e4 = new djEllipse();
    e5 = new djEllipse();
    e6 = new djEllipse();
    e7 = new djEllipse();

  }
  }

function draw() {

  topcolor = color(199, 76, 71);
  bottomcolor = color(109, 65, 226);


    for(let y =0; y < height; y++) {

    n = map(y,0,height,0,1);

    let newcolor = lerpColor(topcolor,bottomcolor,n);
    stroke(newcolor);
    line(0,y,width,y);
  }

    // FRAMECOUNT

if (frameCount < 200) {
    console.log("none");
    push();
    e0.display();
    pop();

} else if (frameCount < 400) {
    console .log("display1 - 1: ellipse");
    push();
    e1.display1();
    pop();

  } else if (frameCount < 600) {
    console .log("display2 - 2: rect");
    push();
    e2.display2();
    pop();

  } else if (frameCount < 800) {
    console .log("display3 - 3: ellipse");
    push();
    e3.display3();
    pop();

  } else if (frameCount < 1000) {
    console .log("display4 - 4: rect");
    push();
    e4.display4();
    pop();

  } else if (frameCount < 1200) {
    console .log("display5 - 5: ellipse");
    push();
    e5.display5();
    pop();

  } else if (frameCount < 1400) {
    console .log("back to none");
    push();
    e6.display6();
    pop();

} else {
    console.log("The End");
    push();
    e7.display7();
    pop();
    noLoop();

}

  bug.move();
  // bug.display();
  bubbles.run();

  recordit();

}


// Add a new boid into the System
function mouseDragged() {
  bubbles.addBoid(new Boid(mouseX, mouseY));
}

// Flock object
// Does very little, simply manages the array of all the boids

function B() {
  // An array for all the boids
  this.boids = []; // Initialize the array
}

B.prototype.run = function() {
  for (let i = 0; i < this.boids.length; i++) {
    this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
  }
}

B.prototype.addBoid = function(b) {
  this.boids.push(b);
}

// Boid class
// Methods for Separation, Cohesion, Alignment added

function Boid(x, y) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = createVector(x, y);
  this.r = 5.0;
  this.maxspeed = 2;    // Maximum speed
  this.maxforce = 0.25; // Maximum steering force
}

Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  this.borders();
  this.render();
}

Boid.prototype.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force);
}

// We accumulate a new acceleration each time based on three rules
Boid.prototype.flock = function(boids) {
  let sep = this.separate(boids);   // Separation
  let ali = this.align(boids);      // Alignment
  let coh = this.cohesion(boids);   // Cohesion
  // Arbitrarily weight these forces
  sep.mult(2.5);
  ali.mult(1.0);
  coh.mult(1.0);
  // Add the force vectors to acceleration
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}

// Method to update location
Boid.prototype.update = function() {
  // Update velocity
  this.velocity.add(this.acceleration);
  // Limit speed
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  // Reset accelertion to 0 each cycle
  this.acceleration.mult(0);
}

// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
  let desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  desired.normalize();
  desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  let steer = p5.Vector.sub(desired,this.velocity);
  steer.limit(this.maxforce);  // Limit to maximum steering force
  return steer;
}

Boid.prototype.render = function() {
  // Draw a triangle rotated in the direction of velocity
  let theta = this.velocity.heading() + radians(90);
//   topcolor = color(199, 76, 71);
  // bottomcolor = color(109, 65, 226);
  fill(random(109, 199),random(65, 76), random(71, 226), 130);
  // fill(253, 198, 156, 100);
  stroke(200);
  // noStroke();
  push();
  translate(this.position.x, this.position.y);
  rotate(theta);
  ellipse(0, -this.r * 2, random(15, 25), random(15, 25));
  pop();
}

// Wraparound
Boid.prototype.borders = function() {
  if (this.position.x < -this.r)  this.position.x = width + this.r;
  if (this.position.y < -this.r)  this.position.y = height + this.r;
  if (this.position.x > width + this.r) this.position.x = -this.r;
  if (this.position.y > height + this.r) this.position.y = -this.r;
}

// Separation
// Method checks for nearby boids and steers away
Boid.prototype.separate = function(boids) {
  let desiredseparation = 25.0;
  let steer = createVector(0, 0);
  let count = 0;
  // For every boid in the system, check if it's too close
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
    if ((d > 0) && (d < desiredseparation)) {
      // Calculate vector pointing away from neighbor
      let diff = p5.Vector.sub(this.position, boids[i].position);
      diff.normalize();
      diff.div(d);        // Weight by distance
      steer.add(diff);
      count++;            // Keep track of how many
    }
  }
  // Average -- divide by how many
  if (count > 0) {
    steer.div(count);
  }

  // As long as the vector is greater than 0
  if (steer.mag() > 0) {
    // Implement Reynolds: Steering = Desired - Velocity
    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
  }
  return steer;
}

// Alignment
// For every nearby boid in the system, calculate the average velocity
Boid.prototype.align = function(boids) {
  let neighbordist = 50;
  let sum = createVector(0,0);
  let count = 0;
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    let steer = p5.Vector.sub(sum, this.velocity);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}

// Cohesion
// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
Boid.prototype.cohesion = function(boids) {
  let neighbordist = 50;
  let sum = createVector(0, 0);   // Start with empty vector to accumulate all locations
  let count = 0;
  for (let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position); // Add location
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum);  // Steer towards the location
  } else {
    return createVector(0, 0);
  }
}

class djEllipse {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    // this.diameter = random(150,250);
    this.diameter = 200;
    this.speed = 3.0;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

//    topcolor = color(199, 76, 71);
// 159, 70, 156 (transitional color);
// bottomcolor = color(109, 65, 226);

  display() {
    // noStroke();
    // rectMode(CENTER);
    // // fill(random(169, 229),random(46, 106), random(41, 101), 150);
    // fill(random(189, 209),random(66, 86), random(61, 81), 255);
    // ellipse(this.x, this.y, this.diameter, this.diameter);
  }

    display1() {
    noStroke();
    rectMode(CENTER);
    // fill(random(169, 229),random(46, 106), random(41, 101), 150);
    fill(random(189, 209),random(66, 86), random(61, 81), 255);
    ellipse(this.x, this.y, this.diameter - 25, this.diameter - 25);
  }


  display2() {
  noStroke();
  rectMode(CENTER);
  // fill(random(169, 229),random(46, 106), random(41, 101), 200);
  fill(random(149, 169),random(60, 80), random(146, 166), 255);
  rect(this.x, this.y, 200 + 25, 200 + 25);
  }

// PEAK IN ANIMATION
  display3() {
  noStroke();
  rectMode(CENTER);
  fill(random(169, 229),random(46, 106), random(41, 101), 255);
  ellipse(this.x, this.y, this.diameter + 100, this.diameter + 100);
  }

//   COPY OF DISPLAY 2
  display4() {
  noStroke();
  rectMode(CENTER);
  // fill(random(169, 229),random(46, 106), random(41, 101), 200);
  fill(random(149, 169),random(60, 80), random(146, 166), 255);
  rect(this.x, this.y, 200 + 25, 200 + 25);
  }

//   COPY OF DISPLAY
  display5() {
    noStroke();
    rectMode(CENTER);
    // fill(random(169, 229),random(46, 106), random(41, 101), 150);
    fill(random(189, 209),random(66, 86), random(61, 81), 255);
    ellipse(this.x, this.y, this.diameter - 25, this.diameter - 25);
  }

    display6() {
  }

    display7() {
  }

}

/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {

if (keyIsPressed === true) {
    let k = key;
    console.log("k is " + k);

 if (k == 's' || k == 'S') {
     console.log("Stopped Recording");
     recMode = false;
     noLoop();
 }

 if (k == ' ') {
     console.log("Start Recording");
     recMode = true;
     loop();
 }

 }

}


function recordit() {

    if (recMode == true) {
      let ext = nf(frameCount, 4);
      saveCanvas(can, 'frame-' + ext, 'jpg');
      console.log("rec " + ext);
  }
}
