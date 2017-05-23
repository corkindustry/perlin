function setup() {
  	createCanvas(800, 600);
	noStroke();
}

var c = 0.1;
var d = 0.1;

function draw() {
  		background(0);
  		for (var x = 0; x < width; x+=50) {
  		  for (var y = 0; y < height; y+=20) {
  		    var i = 255 * noise(c*x, d*y);
  		    fill(0,0,i);
  		    rect(x, y, 100, 20);
  		  }
  	}
  	c = c + 0.00001;
  	d = d + 0.00011;
}