function setup() {
     createCanvas(500,400);
     background(255);
   }


   function draw() {
     background(255);
     sdSign1("Open for Business", 60,100);
     sdSign2("Closed for Lunch", 60,250);

   }


    function sdSign1( ss, locx, loy) {
      fill(120,50);
      rect(locx,loy,300,50);
      fill(34);
      rect(locx-10,loy-10,300,50);
      let k = color(0,255,0);
      sdDrawText(ss,locx+5,loy-5,k);
      sdRanGrcs(locx,loy,color(200,255,0,30));
    }

    function sdSign2( ss, locx, loy) {
      fill(20,50);
      rect(locx,loy,300,50);
      fill(20,0,80);
      rect(locx-10,loy-10,300,50);
      let k = color(255,0,0);
      sdDrawText(ss,locx+5,loy-5,k);
      sdRanGrcs(locx+300,loy,color(255,0,0,30));
    }

   function sdDrawText(s,lx,ly,c) {
     fill(c);
     text(s, lx, ly,20);
   }

   function sdRanGrcs(lx,ly,c) {
     fill(c);
     let r = random(50);
     for (let i= 0; i < 30; i++) {
       ellipse(lx-r,ly-r,10,10);
     }

   }
