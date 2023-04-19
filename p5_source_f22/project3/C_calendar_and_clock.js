/*
 * Creative Coding
 * Week 5, 02 - Digital Clock
 * by Indae Hwang and Jon McCormack
 * Copyright (c) 2014 Monash University
 *
 * This sketch shows how to use text in Processing
 * The sketch creates a digital clock that shows the current time in hours, minutes and seconds
 * Use the 'y', 'm','d','h', 'n','s' and 'm'keys to enlarge the years, months, days, hours, minutes, seconds or milliseconds in the display.
 *
 */
/*@pjs font="arial.ttf";*/
PFont myFont;    // font data
char  selected;  // what is selected (h,m,s)
int mils, sec0, sec, off;
Timecan []timecans=new Timecan[7];
String []labels= {
  "Y", "M", "D", "H", "Mn", "S", "Ms"
};
char []keyb= {
  'y', 'm', 'd', 'h', 'n', 's', 't'
};
int []daysinmonth= {
  31, 28+int((year()%4==0 && year()%100!=0)||year()%400==0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
};
int []divisions= {
  100, 12, daysinmonth[month()-1], 24, 60, 60, 1000
};
void setup() {
  size(600, 600);
  colorMode(HSB,360,255,255);
  ellipseMode(CENTER);
  char [] charset= {
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  };
  myFont = createFont("arial.ttf",18,true,charset);  // load the font from this sketch's data directory
  textFont(myFont);  // set the current font to myFont
  selected = '0';
  off=0;
  for (int i=0; i<timecans.length; i++) {
    timecans[i]=new Timecan(i, i);
  }
  sec=sec0=second();
  strokeWeight(.5);
}

void draw() {
  background(320,150,100);
  fill(0);

  mils=millis()-off;
  if (sec!=second() || mils>1000) {
    off=max(999, millis());
  }
  for (Timecan tc : timecans) {
    tc.fillTime();
  }
  for (Timecan tc : timecans) {
    tc.drawNumber();
  }
  fill(320,250,50);
  ellipse(width/2,height/2,70,70);
  sec=second();
}

void keyReleased() {
  // set selected to be the last key released
  selected = key;
}
class Timecan {
  int mode;
  int col,col2;
  int index;
  PVector baseloc;
  int margin=20;
  int h=height-200;
  int diameter;
  float angle;

  Timecan(int mode, int index) {
    this.mode=mode;
    this.index=index;
    diameter=(8-index)*70;
    baseloc=new PVector(width/2, height/2);
    col2=color(250-30*mode,255,255,200);
  }
  void drawNumber() {
    boolean big=(selected==keyb[mode]);
    String label=labels[mode];
    float x=baseloc.x;
    int num=getNumber();
    float y=baseloc.y+h-num*h/divisions[mode];
    String theText = str(num); // convert number to string
    if(mode==0)theText=str(2000+num);
    // draw text offset from the centre of the screen

    textSize(16);
    float textAs = textAscent() ;
    fill(200,150,255,150);
    ellipse(x,baseloc.y-diameter/2+1.5*textAs,25,25);
    fill(0,200);
    text(label, x-textWidth(label) * 0.5, baseloc.y-diameter/2+2*textAs);
    angle=PI-TWO_PI*num/divisions[mode];
    if (big)
      textSize(20); // set big font size
    else
      textSize(16);  // normal font size
    float textWid = textWidth(theText) * 0.5;
    textAs = textAscent();
    fill(col2);
    ellipse(sin(angle)*(diameter/2-17.5)+baseloc.x,cos(angle)*(diameter/2-17.5)+baseloc.y,35,35);
    fill(0);
    text(theText,sin(angle)*(diameter/2-17.5)+baseloc.x-textWid,cos(angle)*(diameter/2-17.5)+baseloc.y+textAs/2);// x-textWid, y);
  }

  void fillTime() {
    fill(255);
    int num=getNumber();
    ellipse(baseloc.x, baseloc.y, diameter,diameter);
    col=color(50-7*(mode),num*255/divisions[mode],128+num*128/divisions[mode]);
    fill(col);
    arc(baseloc.x, baseloc.y, diameter,diameter, -HALF_PI, TWO_PI*num/divisions[mode]-HALF_PI);
  }
  int getNumber() {
    int number;
    switch (mode) {
    case 0:
      number=year()-2000;
      break;
    case 1:
      number=month();
      break;
    case 2:
      number=day();
      break;
    case 3:
      number=hour();
      break;
    case 4:
      number=minute();
      break;
    case 5:
      number=second();
      break;
    case 6:
      number=min(mils, 999);
      break;
    }
    return number;
  }
}
