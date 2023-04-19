
let monoSynth;
let lastsec;

function setup() {
// var for canvas
  let cnv = createCanvas(200, 200);
  // sTime = millis();
  cnv.mousePressed(setupSound); // (setupSound) = callback function; click to hear
  background(220);
  textAlign(CENTER);

   lastsec = second();
  monoSynth = new p5.MonoSynth();

}


function draw() {
    background(220);
    text('tap to play', width/2, height/2);
  let s = second();
  let ms = map(s,0,59,0,width);

  rect(ms,100,20,50);

  if ( s != lastsec ) {
    lastsec = s;
    console.log("chime" );
    playSynth();
  }

}


function setupSound() { // trigger to play sound
  // This is required now for most audio in browser apps.
  // you click to start the sound engine.
  userStartAudio(); //

}


function playSynth() {
  let note = random(['Fb4', 'F3']);
  // note velocity (volume, from 0 to 1)
  let velocity = random();
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1/6;
  monoSynth.play(note, velocity, time, dur);
}
