// example #6.1
    // this is a 7x7 array
    var gridarr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 2, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
    ];

    var a = 0;

    function setup() {

    createCanvas(240, 240);

    background(120);

    for (var i = 0; i < gridarr.length; i++) {
              // for (var j = 0; j < gridarr.length; j++) {
        for (var j = 0; j < gridarr.length; j++) {
            a = gridarr[i][j];
            if (a === 1) {
             fill(223, 126, 208);
           } else if (a === 2) {
            fill(234, 195, 59);
          } else {
            fill(0);
            }

            // typical way of mapping out a grid (value * scale) + offset
            // value  -- the increment counter from the forloop
            // scale -- a multiple that effects the size/position of each drawing
            // offset -- relative movement of the x/y position on the canvas

            rect((j * 30) + 15, (i * 30) + 15, 20, 20);
         }
     }
 }
