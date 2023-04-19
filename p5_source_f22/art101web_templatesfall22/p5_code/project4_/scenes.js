
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy= 0;
var elevator_music, slider, bg_all;

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

        elevator_music.play();
        elevator_music.loop();

        console.log("We are at entering scene1");

      loy = 100;
      background("red");

    }


    this.draw = function()
    {
        background(bg_all);
        // fill(200,0,0);

        noStroke();
        fill(0,0,0,100);
        rect(100,210,400,90,10);

        push();
        //
        translate(width/2,150);
        fill(255);
        textAlign(CENTER);
        textSize(26);
        text("Welcome to Dani's final project!", 0, 100);
        textSize(24);
        text("Press 'i' for instructions...", 0, 130);

        if (loy > 255) {
          loy = 0;
        } else {
          loy++;
        }

        pop();

        elevator_music.setVolume(slider.value());


    }

    this.mousePressed = function()
    {
    //     this.sceneManager.showNextScene();
    }

}


function instructions()  {


    this.setup = function() {
      console.log("We are at setup for scene2");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      // background(255);
      textAlign(CENTER);
      textSize(29);

    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {

        console.log("We are at entering scene2");
        // textX = 10;
        // textY = 0;

      // loy = 100;
      // background("red");

    }


    this.draw = function()
    {
        background(bg_all);
        textAlign(CENTER);
        textSize(22);
        // fill(200,0,0);

        noStroke();
        fill(0,0,0,100);
        rect(10,212,580,120,10);

        push();
        //
        translate(width/2,150);
        fill(255);
        textAlign(CENTER);
        textSize(22);
        text("There are multiple clickable objects around each scene.", 0, 100);
        text("Simply click to trigger an effect or sound...", 0, 130);
        text("Press '1' to get started!", 0, 160);

        if (loy > 255) {
          loy = 0;
        } else {
          loy++;
        }

        pop();

        elevator_music.setVolume(slider.value());

    }

    this.mousePressed = function()
    {

    //     this.sceneManager.showNextScene();
    }

}

///////////////////////  2 - OLD SK ////////////////////////

function scene2()  {

  this.setup = function() {
      background(0);
      console.log("We are at setup for scene3");

  }

  this.enter = function() {

      console.log("We are at  scene3 (again?)");

  }

    this.draw = function()
    {

      background(bg_old_sk);
      image(welcome_window_old_sk, 0, 0);
      image(calculator_window_old_sk, 0, 0);
      image(recycle_bin_icon_old_sk, 0, 0);
      image(notepad_icon_old_sk, 0, 0);

      click2.draw(); // ?
      click2_2.draw(); // :)
      click2_3.draw(); // recycling bin icon
      click2_4.draw(); // notepad icon
      click2_4_1.draw(); // calculator numberpad

        elevator_music.setVolume(slider.value());

    }


    this.mousePressed = function()
    {
      // punch.play();

          }
        // this.sceneManager.showNextScene();
}


////////////////////////////// 3 - FLAT DESIGN /////////////////

function scene3() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene4");

    }

    this.enter = function()  {

        let loy= 255;
        console.log("We are entering scene4");
    }




    this.draw = function() {
      background(bg_fd);
      image(welcome_window_fd, 0, 0);
      image(quick_controls_window_fd, 0, 0);

      click3.draw(); // music icon
      click3_2.draw(); // weather icon
      click3_3.draw(); // to do list
      click3_4.draw(); // camera
      click3_5.draw(); // ?
      click3_6.draw(); // :o
      click3_7.draw(); // !


        elevator_music.setVolume(slider.value());

    }

    this.mousePressed = function()
    {

        // this.sceneManager.showNextScene();
    }


}



////////////////////////////// 4 - COMBINED AESTHETIC /////////////////

function scene4() {

  let loy= 255;

    this.setup = function()  {
        console.log("We are at setup for scene5");

    }

    this.enter = function()  {

        let loy= 255;
        console.log("We are entering scene5");
    }




    this.draw = function() {
      background(combined_bg);

// recycle bin (520,18,60,60) / notepad (520,90,60,60)
      noStroke();
      fill("#939191");
      rect(520+5,18+5,60,60,8);
      rect(520+5,90+5,60,60,8);

      click4_1.draw(); // settings icon
      click4_2.draw(); // night light icon
      click4_3.draw(); // thank u
      click4_4.draw(); // recycle bin
      click4_5.draw(); // notepad

              elevator_music.setVolume(slider.value());

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

     console.log("we are entering the result scene");

  }

  this.draw = function()
  {
      background(bg_all);
      // fill(200,0,0);

      noStroke();
      fill(0,0,0,100);
      rect(100,210,400,90,10);

      push();
      //
      translate(width/2,150);
      fill(255);
      textAlign(CENTER);
      textSize(26);
      text("Hope you enjoyed :)", 0, 100);
      textSize(20);
      text("Refresh the page to restart...", 0, 130);

      if (loy > 255) {
        loy = 0;
      } else {
        loy++;
      }

      pop();

      elevator_music.setVolume(slider.value());


  }


}
