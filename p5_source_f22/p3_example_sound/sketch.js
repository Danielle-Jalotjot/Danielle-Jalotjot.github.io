// this is built off the orginal sound example on the project page. however the Oscillator object was added.

// let monoSynth;
// let osc;

let lastsec;
let lastsmin;

let snd1;
let gamesound;
let sweepsound;

function preload() { // load all assets (fonts/images/sound/etc)
  gamesound = loadSound("misc/mixkit-fast-small-sweep-transition-166.wav");
  sweepsound = loadSound("misc/mixkit-fast-small-sweep-transition-166.wav");
}

function setup() {
  let cnv = createCanvas(200, 200);
  cnv.mousePressed(setupSound);  // callback function
  background(220);
  textAlign(CENTER);
  // osc = new p5.Oscillator(300);
  //frameRate(1);
   lastsec = second();  // 3
   lastmin = minute();  // 3
  // monoSynth = new p5.MonoSynth();

}


function draw() {
background(220);
text('click to play', width/2, height/2);

  let s = second();  //4
  let m = minute();

  let ms = map(s,0,59,0,width);
  rect(ms,100,20,50);

  let mm = map(m,0,59,0,width);
  rect(mm,140,20,50);

      console.log(s);

  if ( s != lastsec ) {
    lastsec = s;
    console.log("second chime" );
    // playSynthSec();
    // playOscillator();
    //playSynthMin();
    playGameSound();
  }


  if ( m != lastmin ) {
    lastmin = m;
    console.log("minute chime" );
    // playSynthMin();
    // playOscillator();
  }
}


function setupSound() {
  // This is required now for most audio in browser apps.
  // you click to start the sound engine.
  userStartAudio();

}

// function waterAlarm1() {
//
//   let d = day();
//   let h = hour();
//   let m = minute();
//
// //
//   if ( d == 9 && h == 13 && m == 33) {
//
// //            -1 (to start at 0)
//       if (s > 0 && s < 20) {
//           console.log("water bich");
//       }
//
// // playTheSound();
//
// }
// }

function playGameSound() {

let song = gamesound;

  if (song.isPlaying()) {
      // .isPlaying() returns a boolean
      song.stop();
      // background(255, 0, 0);
    } else {
      song.play();
      // background(0, 255, 0);
    }

}

function playSweepSound() {

let song2 = sweepsound;

  if (song2.isPlaying()) {
      // .isPlaying() returns a boolean
      song2.stop();
    } else {
      song2.play();
    }

}


// function playSynthSec() {
//
//   let note = random([180,180,100]);
//   // note velocity (volume, from 0 to 1)
//   let velocity = 0.5 ; random(100,200);
//   // time from now (in seconds)
//   let time = 1.9;
//   // note duration (in seconds)
//   let dur = 1/6;
//   monoSynth.play(note, velocity, time, dur);
// }
//
// function playSynthMin() {
//
//   // note velocity (volume, from 0 to 1)
//   let velocity = 0.5 ; random(100,200);
//   // time from now (in seconds)
//   let time = 1.9;
//   // note duration (in seconds)
//   let dur = 1/4;
//
//
//   monoSynth.play(300, .8, 4.5, dur);
//
//
//
// }



// function playOscillator() {
//   osc.start();
//   osc.amp(0.5);
//   // start at 700Hz
//   osc.freq(700);
//   // ramp to 60Hz over 0.7 seconds
//   osc.freq(60, 0.7);
//   osc.amp(0, 0.1, 0.7);
// }
