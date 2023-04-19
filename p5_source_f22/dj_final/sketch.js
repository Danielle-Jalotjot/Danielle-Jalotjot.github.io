
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/

var recycle_bin_icon_old_sk, notepad_icon_old_sk;

var bg_fd, welcome_window_fd, quick_controls_window_fd, music_icon_fd, weather_icon_fd, todo_list_icon_fd, camera_icon_fd;
var copy_recycle_bin_icon_old_sk, copy_notepad_icon_old_sk, copy_calculator_window_old_sk;

var chime_old_sk, calc_button_old_sk, paper_old_sk, paper_check_old_sk, penclick_old_sk, elevator_music;
var music_icon, weather_icon, todo_list_icon, camera_icon;

var combined_bg, combined_bottombar, combined_cal, settings_icon_com, calendar_icon_com, night_light_icon_com;
var combined_recycle_bin, combined_notepad;

var bg_all;

function preload() {

bg_all = loadImage('images/bg_all.gif');

// OLD SK
// images
bg_old_sk = loadImage('images/bg_old_sk.png');
welcome_window_old_sk = loadImage('images/welcome_window_old_sk.png');
calculator_window_old_sk = loadImage('images/calculator_window_old_sk.png');
recycle_bin_icon_old_sk = loadImage('images/recycle_bin_icon_old_sk.png');
notepad_icon_old_sk = loadImage('images/notepad_icon_old_sk.png');

copy_recycle_bin_icon_old_sk = loadImage('images/copy_recycle_bin_icon_old_sk.png');
copy_notepad_icon_old_sk = loadImage('images/copy_notepad_icon_old_sk.png');
copy_calculator_window_old_sk = loadImage('images/copy_calculator_window_old_sk.png');

// sounds/music
chime_old_sk = loadSound('assets/chime_old_sk.mp3');
calc_button_old_sk = loadSound('assets/calc_button_old_sk.mp3');
paper_old_sk = loadSound('assets/paper_old_sk.mp3');
paper_check_old_sk = loadSound('assets/paper_check_old_sk.mp3');
penclick_old_sk = loadSound('assets/penclick_old_sk.mp3');
elevator_music = loadSound('assets/elevator_music.mp3');


// FD
// images
bg_fd = loadImage('images/bg_fd.png');
welcome_window_fd = loadImage('images/welcome_window_fd.png');
quick_controls_window_fd = loadImage('images/quick_controls_window_fd.png');
music_icon_fd = loadImage('images/music_icon_fd.png');
weather_icon_fd = loadImage('images/weather_icon_fd.png');
todo_list_icon_fd = loadImage('images/todo_list_icon_fd.png');
camera_icon_fd = loadImage('images/camera_icon_fd.png');

// sounds/music
music_icon = loadSound('assets/UI_sound_pack/music_icon.mp3');
weather_icon = loadSound('assets/UI_sound_pack/weather_icon.mp3');
todo_list_icon = loadSound('assets/UI_sound_pack/todo_list_icon.mp3');
camera_icon = loadSound('assets/UI_sound_pack/camera_icon.mp3');

// COMBINED
// images
combined_bg = loadImage('images/combined_bg.png');
combined_cal = loadImage('images/combined_cal.png');
settings_icon_com = loadImage('images/settings_icon_com.png');
calendar_icon_com = loadImage('images/calendar_icon_com.png');
night_light_icon_com = loadImage('images/night_light_icon_com.png');
combined_bottombar = loadImage('images/combined_bottombar.png');
combined_recycle_bin = loadImage('images/combined_recycle_bin.png');
combined_notepad = loadImage('images/combined_notepad.png');

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
    mgr.addScene (instructions);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);
    mgr.addScene (theend);
    mgr.showNextScene();

    slider = createSlider(0, 1.0, 0.1, 0.1);


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


// ?
    click2 = new Clickable();
    click2.cornerRadius = 0;
    click2.textScaled = true;
    click2.text = "?";
    click2.locate(314, 215);
    click2.resize(80, 60);
    click2.onOutside = function () {
      this.color = (160);
    }

    click2.onHover = function () {
      this.color = (200);
    }

    click2.onPress = function () {
      chime_old_sk.play();
      alert("Press '2' for a modern look...");
    }

// :)
    click2_2 = new Clickable();
    click2_2.cornerRadius = 0;
    click2_2.textScaled = true;
    click2_2.text = ":)";
    click2_2.locate(88, 215);
    click2_2.resize(80, 60);
    click2_2.onOutside = function () {
      this.color = (160);
    }

    click2_2.onHover = function () {
      this.color = (200);
    }

    click2_2.onPress = function () {
      chime_old_sk.play();
      alert(":D");
    }

    // old sk - recycle bin icon
            click2_3 = new Clickable();
            click2_3.image = copy_recycle_bin_icon_old_sk;
            click2_3.cornerRadius = 0;
            click2_3.imageScale = 1.0;
            click2_3.locate(30,420);
            click2_3.resize(70,70);
            click2_3.text = "";
            click2_3.onOutside = function () {
              this.color = (160);
            }

            click2_3.onHover = function () {
              this.color = (200);
            }

            click2_3.onPress = function () {
              paper_old_sk.play();
              paper_check_old_sk.play();
            }

            // old sk - notepad icon
                    click2_4 = new Clickable();
                    click2_4.image = copy_notepad_icon_old_sk;
                    click2_4.cornerRadius = 0;
                    click2_4.imageScale = 1.0;
                    click2_4.locate(30,500);
                    click2_4.resize(70,70);
                    click2_4.text = "";
                    click2_4.onOutside = function () {
                      this.color = (160);
                    }

                    click2_4.onHover = function () {
                      this.color = (200);
                    }

                    click2_4.onPress = function () {
                      penclick_old_sk.play();
                    }

                    // old sk - calculator window
                            click2_4_1 = new Clickable();
                            click2_4_1.image = copy_calculator_window_old_sk;
                            click2_4_1.cornerRadius = 0;
                            click2_4_1.imageScale = 0.95;
                            click2_4_1.locate(365,367);
                            click2_4_1.resize(130,160);
                            click2_4_1.text = "";
                            click2_4_1.onOutside = function () {
                              this.color = (160);
                            }

                            click2_4_1.onHover = function () {
                              this.color = (200);
                            }

                            click2_4_1.onPress = function () {
                              calc_button_old_sk.play();
                            }



// fd - music_icon_fd
    click3 = new Clickable();
    click3.image = music_icon_fd;
    click3.imageScale = 0.8;
    click3.stroke = "#0F6FB3";
    click3.locate(110,400);
    click3.resize(60,60);
    click3.text = "";
    click3.onHover = function () {
      this.color = (255);
      this.noTint = false;
      this.tint = (255);
    }

    click3.onOutside = function () {
      this.color = "#A0D6FF";
      this.noTint = true;
    }

    click3.onPress = function () {
      music_icon.play();

    }

// fd - weather_icon_fd
        click3_2 = new Clickable();
        click3_2.image = weather_icon_fd;
        click3_2.imageScale = 0.8;
        click3_2.stroke = "#0F6FB3";
        click3_2.locate(200,400);
        click3_2.resize(60,60);
        click3_2.text = "";
        click3_2.onHover = function () {
          this.color = (255);
          this.noTint = false;
          this.tint = (255);
        }

        click3_2.onOutside = function () {
          this.color = "#A0D6FF";
          this.noTint = true;
        }

        click3_2.onPress = function () {
          // alert("Zendaya and 6,389 others liked your post");
          weather_icon.play(); // PLACEHOLDER FOR NOW
        }

        // fd - todo_list_icon_fd
                click3_3 = new Clickable();
                click3_3.image = todo_list_icon_fd;
                click3_3.imageScale = 0.8;
                click3_3.stroke = "#0F6FB3";
                click3_3.locate(290,400);
                click3_3.resize(60,60);
                click3_3.text = "";
                click3_3.onHover = function () {
                  this.color = (255);
                  this.noTint = false;
                  this.tint = (255);
                }

                click3_3.onOutside = function () {
                  this.color = "#A0D6FF";
                  this.noTint = true;
                }

                click3_3.onPress = function () {
                  todo_list_icon.play();
                }

                // fd - camera_icon_fd
                        click3_4 = new Clickable();
                        click3_4.image = camera_icon_fd;
                        click3_4.imageScale = 0.75;
                        click3_4.stroke = "#0F6FB3";
                        click3_4.locate(380,400);
                        click3_4.resize(60,60);
                        click3_4.text = "";
                        click3_4.onHover = function () {
                          this.color = (255);
                          this.noTint = false;
                          this.tint = (255);
                        }

                        click3_4.onOutside = function () {
                          this.color = "#A0D6FF";
                          this.noTint = true;
                        }

                        click3_4.onPress = function () {
                          camera_icon.play();
                        }

                        // :o
                            click3_6 = new Clickable();
                            click3_6.cornerRadius = 10;
                            click3_6.textScaled = true;
                            click3_6.stroke = "#8422AE";
                            click3_6.text = ":o";
                            click3_6.locate(280-8, 240);
                            click3_6.resize(60, 60);
                            click3_6.onHover = function () {
                              this.color = (255);
                              this.noTint = false;
                              this.tint = (255);
                            }

                            click3_6.onOutside = function () {
                              this.color = "#DD8FFF";
                              this.noTint = true;
                            }


                            click3_6.onPress = function () {
                              chime_old_sk.play();
                              alert("Did you know? Flat design originates from Swiss style, or International Typographic Style, which became the foundation of modern UI design.");
                            }

                                // ?
                                    click3_5 = new Clickable();
                                    click3_5.cornerRadius = 10;
                                    click3_5.textScaled = true;
                                    click3_5.stroke = "#8422AE";
                                    click3_5.text = "?";
                                    click3_5.locate(460-8, 240);
                                    click3_5.resize(60, 60);
                                    click3_5.onHover = function () {
                                      this.color = (255);
                                      this.noTint = false;
                                      this.tint = (255);
                                    }

                                    click3_5.onOutside = function () {
                                      this.color = "#DD8FFF";
                                      this.noTint = true;
                                    }


                                    click3_5.onPress = function () {
                                      chime_old_sk.play();
                                      alert("Press '3' for a combined aesthetic...");
                                    }

                                    // !
                                        click3_7 = new Clickable();
                                        click3_7.cornerRadius = 10;
                                        click3_7.textScaled = true;
                                        click3_7.stroke = "#8422AE";
                                        click3_7.text = "!";
                                        click3_7.locate(370-8, 240);
                                        click3_7.resize(60, 60);
                                        click3_7.onHover = function () {
                                          this.color = (255);
                                          this.noTint = false;
                                          this.tint = (255);
                                        }

                                        click3_7.onOutside = function () {
                                          this.color = "#DD8FFF";
                                          this.noTint = true;
                                        }


                                        click3_7.onPress = function () {
                                          chime_old_sk.play();
                                          alert("You can also press '1' to return back to 80's skeuormorphism!");
                                        }


// combined
//  widget - settings
click4_1 = new Clickable();
click4_1.cornerRadius = 8;
click4_1.image = settings_icon_com;
click4_1.imageScale = 0.8;
click4_1.stroke = "#939191";
click4_1.locate(268,380);
click4_1.resize(45,45);
click4_1.text = "";
click4_1.onHover = function () {
  this.color = "#939191";
  this.noTint = false;
  this.tint = "#939191";
}

click4_1.onOutside = function () {
  this.color = (210);
  this.noTint = true;
}

click4_1.onPress = function () {
  music_icon.play();

}

  //  widget - night light
  click4_2 = new Clickable();
  click4_2.cornerRadius = 8;
  click4_2.image = night_light_icon_com;
  click4_2.imageScale = 0.80;
  click4_2.stroke = "#939191";
  click4_2.locate(268,435);
  click4_2.resize(46,46);
  click4_2.text = "";
  click4_2.onHover = function () {
    this.color = "#939191";
    this.noTint = false;
    this.tint = "#939191";
  }

  click4_2.onOutside = function () {
    this.color = (210);
    this.noTint = true;
  }

  click4_2.onPress = function () {
    camera_icon.play();
  }

// thank u
  click4_3 = new Clickable();
  click4_3.cornerRadius = 8;
  click4_3.stroke = "#939191";
  click4_3.locate(190,240);
  click4_3.resize(130,45);
  click4_3.textSize = 18;
  click4_3.text = "Thank you!";
  click4_3.onHover = function () {
    this.color = "#939191"; // dark gray
    this.noTint = false;
    this.tint = "#939191";
  }

  click4_3.onOutside = function () {
    this.color = (210); // light gray
    this.noTint = true;
  }

  click4_3.onPress = function () {
    chime_old_sk.play();
    alert("Thank you for clicking around! To end the program, press 'e.'");

  }

  // combined - recycle bin icon
          click4_4 = new Clickable();
          click4_4.image = combined_recycle_bin;
          click4_4.cornerRadius = 8;
          click4_4.stroke = "#76C4E6";
          click4_4.imageScale = 0.95;
          click4_4.locate(520,18);
          click4_4.resize(60,60);
          click4_4.text = "";
          click4_4.onHover = function () {
            this.color = (255);
            this.noTint = false;
            this.tint = (255);
          }

          click4_4.onOutside = function () {
            this.color = "#ace4fc";
          }

          click4_4.onPress = function () {
            paper_old_sk.play();
            paper_check_old_sk.play();
          }

          // combined - notepad icon
                  click4_5 = new Clickable();
                  click4_5.image = combined_notepad;
                  click4_5.cornerRadius = 8;
                  click4_5.stroke = "#76C4E6";
                  click4_5.imageScale = 0.8;
                  click4_5.locate(520,90);
                  click4_5.resize(60,60);
                  click4_5.text = "";
                  click4_5.onHover = function () {
                    this.color = (255);
                    this.noTint = false;
                    this.tint = (255);
                  }

                  click4_5.onOutside = function () {
                    this.color = "#ace4fc";
                  }

                  click4_5.onPress = function () {
                    penclick_old_sk.play();
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
        case 'i':
                mgr.showScene( instructions );
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
