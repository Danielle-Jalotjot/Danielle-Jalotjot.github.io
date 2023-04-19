
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


var image1_up, image2_over, snd1, metal, punch, calm, vogue, shutter;
// var image1_up, image2_over, snd1;

var metal_bg, punching_bag, calm_bg, vogue_bg, deep_breath;

// clickable
var canvas, click1, click2, click3, clickImg;

// let cx = 0;
// let cy = 0;
// let cw = 600;
// let ch = 600;

// var duration;
// var  slideWidth = 500;

function preload() {

// music and sound effects
  snd1 = loadSound("assets/beat.mp3");
  metal = loadSound("assets/metal_music.mp3");
  punch = loadSound("assets/punch_sound.mp3");

  calm = loadSound("assets/calm_music.mp3");

  vogue = loadSound("assets/vogue_music.mp3");
  shutter = loadSound("assets/camera_shutter.mp3");

// images
  metal_bg = loadImage("assets/metal_bg.jpg");
  punching_bag = loadImage("assets/punching_bag.png");

  calm_bg = loadImage("assets/calm_bg.jpg");
  deep_breath = loadImage("assets/deep_breath.gif");

  vogue_bg = loadImage("assets/vogue_bg.jpg");

  clickImg = loadImage('images/logo.png');
  clickHeart = loadImage('images/heart.png');

}


// define your p5.play sprites as global objects first.
var ghosty;


// global manager object
var mgr, createCanvas;


// let cnv = createCanvas(500, 500);


function setup() {
let cnv  =  createCanvas(600, 600);
  //  console.log(hell);
  cnv.mousePressed(setupSound); // callback function
     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);
    mgr.addScene (theend);
    mgr.showNextScene();

    //Create, style and resize clickables.
    click1 = new Clickable();
    click1.locate(20, 20);
    //This function is ran when the clickable is hovered but not pressed.
    click1.onHover = function () {
      this.color = "#AAAAFF";
      this.textColor = "#FFFFFF";
      this.text = "Yay!";
    }

    //This function is ran when the clickable is NOT hovered.
    click1.onOutside = function () {
      this.color = "#EEEEEE";
      this.text = "Hello there!";
      this.textColor = "#000000";
    }

    //This function is ran when the clickable is pressed.
    click1.onPress = function () {
      this.stroke = "#FF0000";
    }

    //This funcion is ran when the cursor was pressed and then
    //rleased inside the clickable. If it was pressed inside and
    //then released outside this won't work.
    click1.onRelease = function () {
      this.x += 50;
    }



    click2 = new Clickable();
    click2.cornerRadius = 0;
    click2.textScaled = true;
    click2.text = "Notification";
    click2.locate(45, 45);
    click2.resize(200, 80);
    click2.onOutside = function () {
      this.color = "#FFFFFF";
    }

    click2.onHover = function () {
      this.color = "#FFD500";
    }

    click2.onPress = function () {
      alert("Beyoncé has requested to follow you");
    }



    click3 = new Clickable();
    click3.image = clickHeart;
    click3.imageScale = 0.8;
    click3.locate(380,180);
    click3.resize(70,70);
    click3.text = "";
    click3.onHover = function () {
      this.color = "#FFD500";
      this.noTint = false;
      this.tint = "#FFFFFF";
    }

    click3.onOutside = function () {
      this.color = "#FFFFFF";
      this.noTint = true;
    }

    click3.onPress = function () {
      alert("Zendaya and 6,389 others liked your post");
    }



    // image will stretch to fill button by default
    click4 = new Clickable();
    click4.image = clickImg;
    click4.imageScale = 1;
    click4.text = "";
    click4.locate(10, 200);
    click4.resize(120, 90);
    click4.onHover = function () {
      click4.imageScale = 1.1;
    }

    click4.onOutside = function () {
      click4.imageScale = 1;
    }



    // centered and fitted
    click5 = new Clickable();
    click5.image = clickImg;
    click5.fitImage = true; // no stretching!
    click5.imageScale = 1;
    click5.text = "";
    click5.locate(140, 200);
    click5.resize(120, 90);
    click5.onHover = function () {
      click5.imageScale = 1.1;
    }

    click5.onOutside = function () {
      click5.imageScale = 1;
    }

}

function setupSound() {
    // This is required now for most audio in browser apps.
    userStartAudio();
}


function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseDragged");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case 's':
            mgr.showScene( intro );
            break;
        case '1':
            mgr.showScene( scene2 ); // INTRO --> click or key 1 --> RAGE
            break;
        case '2':
            mgr.showScene( scene3 ); // RAGE --> key 2 --> CALM
            break;
        case '3':
            mgr.showScene( scene4 );
            break;
         case 'e':
            mgr.showScene( theend );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
