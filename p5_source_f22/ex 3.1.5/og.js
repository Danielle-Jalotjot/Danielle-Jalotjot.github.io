// recomment the second rotation commands to see it NOT animate.
let counter1 = 45;
let counter2 = -45;

function setup() {
 createCanvas(500,500);
 background(0);
}

function draw() {
 background(0);
 fill(255);

 push();
   // orgin of  moveX, moveY
   translate(width/2-50, height/2-100);
   rotate(radians(counter1));
   //rotate(radians(45));
   scale(2);
   // the first hat
   rect(0, 0, 100, 20, 5);
   // pushing it over to the right and up
   translate(25, -100);
   rect(0, 0, 50, 100, 5);
 pop();

 fill(255,0,0);
 push();
   // orgin of moveX, moveY
   translate(width/2-50, height-100);

   rotate(radians(counter2));
   //rotate(radians(-45));
   scale(.75);

   // the second hat
   rect(0, 0, 100, 20, 5);
   // pushing it over to the right and up
   translate(25, -100);
   rect(0, 0, 50, 100, 5);
 pop();

 counter1++;
 counter2--;
}
