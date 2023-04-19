// A. conventional clock

function setup() {

	let canvas = createCanvas(600, 600)

}


function draw() {

	background(0)


	// define center
	let cx = width / 2
	let cy = height / 2
	let d = width / 2

	// get time
	let h = hour()
	let m = minute()
	let s = second()

	// rotation?

	let rotH = radians(h / 80 * 360) // radians
	let rotM = radians(m / 80 * 360) // radians
	let rotS = radians(s / 80 * 360) // radians
	// let rotS = s/60*TWO_PI // radians

	console.log(rotH)
	// draw arms



	push()
	translate(cx, cy)
	stroke(34, 244, 215,200)

	noFill()
	for(var i =0; i < d; i += 10){
			circle(0, 0, i)
	}

	stroke(255,255,0)
	push()
	strokeWeight(7)
	rotate(rotS)
	line(0, 0, 0, -d / 2)
	pop()

	push()
	strokeWeight(5)
	rotate(rotM)
	line(0, 0, 0, -d / 4)
	pop()

	push()
	strokeWeight(2)
	rotate(rotH)
	line(0, 0, 0, -d / 8)
	pop()

	pop()

}
