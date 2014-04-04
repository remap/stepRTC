	
var v = document.getElementById('remoteVideo');
//var v = document.getElementById('localVideo');
var canvas = document.getElementById('c');
var context = canvas.getContext('2d');

var cw = canvas.clientWidth;
var ch = canvas.clientHeight;

canvas.width = cw;
canvas.height = ch;


draw(v,context,cw,ch);

// frequency of blitting video -> canvas
freq = 5 // ms

function draw(v,c,w,h) {
	console.log("drawing...")
    c.drawImage(v,0,0,w,h);
    setTimeout(draw,freq,v,c,w,h);
}
