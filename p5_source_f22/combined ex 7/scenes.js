
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy= 0;

////////////////////////////// 1 - INTRO /////////////////
function intro()  {


    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      background(255);
      textAlign(CENTER);
      textSize(29);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        metal.stop();
        calm.stop();
        vogue.stop();
        console.log("We are at entering scene1");
        // textX = 10;
        // textY = 0;

      loy = 100;
      background("red");

    }


    this.draw = function()
    {
        background(0,0,255-loy);
        textAlign(CENTER);
        textSize(22);
        // fill(200,0,0);

        push();
        //
        translate(width/2,150);
        fill(255);
        text("ready to lose your sh*t?", 0, 100);
        text("press '1' to get your rage out!", 0, 150);
        textSize(16);
        text("(and maybe lower your volume)", 0, 180);
        // ellipse(0,0,30,30);
        if (loy > 255) {
          loy = 0;
        } else {
          loy++;
        }
        //
        pop();


    }

    this.mousePressed = function()
    {
      // punch.play();
    //
    //     this.sceneManager.showNextScene();
    }

}

///////////////////////  2 - RAGE ////////////////////////
// click 1 to return back to rage scene

function scene2()  {

  this.setup = function() {
      background(0);
      console.log("We are at setup for scene2");

  }

  this.enter = function() {
    metal.play();
    calm.stop();
    vogue.stop();

      console.log("We are at  scene2 (again?)");

  }

    this.draw = function()
    {
      background(metal_bg);

      strokeWeight(8);
      line(width/2+10,50,270,120);
      line(width/2+10,50,310,120);
      line(width/2+10,50,350,120);

      push();
      strokeWeight(3);
      fill(40);
      rect(width/2-50,120,120,400,15);
      fill(120);
      rect(width/2-50,200,120,15);
      fill(120);
      rect(width/2-50,230,120,15);

      rect(-10,0,620,50);

      pop();

      textSize(22);
      fill(255);
      text("click to hit the punching bag >:)", width/2-140, 30);
      textSize(16);
      text("press '2' to feel more at peace...", width/2+65, 590);

    }


    this.mousePressed = function()
    {
            punch.play();

          }


        // this.sceneManager.showNextScene();


}


////////////////////////////// 3 - CALM /////////////////

function scene3() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene3");

    }

    this.enter = function()  {
      metal.stop();
      calm.play();
      vogue.stop();

        let loy= 255;
        console.log("We are entering scene3");
    }




    this.draw = function() {
      background(calm_bg);
      noStroke();
      fill(0,0,0,100);
      ellipse(300,300,300,300);
      image(deep_breath, 180, 180, deep_breath.width / 2, deep_breath.height / 2);

      textSize(16);
      fill(255);
      text("press '3' to feel like a star...", width/2+98, 590);

    }

    this.mousePressed = function()
    {

        // this.sceneManager.showNextScene();
    }


}



////////////////////////////// 4 /////////////////

function scene4() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene4");

    }

    this.enter = function()  {1
      metal.stop();
      calm.stop();
      vogue.play();

        let loy= 255;
        console.log("We are entering scene4");
    }




    this.draw = function() {
      background(vogue_bg);

      textSize(16);
      fill(255);
      text("press 'e' to end or 's' to restart :)", width/2+66, 590);

      // click1.draw();
      click2.draw();
      click3.draw();
      // click4.draw();
      // click5.draw();

    }

    this.mousePressed = function()  {


      // mgr.showScene( scene4 );
        // this.sceneManager.showNextScene();

    }

    }

function theend() {

  this.setup = function()  {
      console.log("we are setting up on the result scene");
  }

  this.enter = function() {
    metal.stop();
    calm.stop();
    vogue.stop();

     console.log("we are entering the result scene");

  }

 this.draw = function() {

   push();
   translate(width/2,150);
   background(0,0,255-loy);
   textSize(22);
   fill(255);
   text("good job hehe",-60, 150);
   textSize(16);
   text("press 's' to restart...", -60, 180);

   if (loy > 255) {
     loy = 0;
   } else {
     loy++;
   }

   pop();

 }


}
