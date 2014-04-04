
	
var v = document.getElementById('remoteVideo');
//var v = document.getElementById('localVideo');
var canvas = document.getElementById('c');
var context = canvas.getContext('2d');

var cw = canvas.clientWidth;//Math.floor(canvas.clientWidth / 100);
var ch = canvas.clientHeight;//Math.floor(canvas.clientHeight / 100);

canvas.width = cw;
canvas.height = ch;

//v.addEventListener('play', function(){
draw(v,context,cw,ch);
//},false);
//},false);

// frequency of blitting video -> canvas
freq = 3 // ms

function draw(v,c,w,h) {
	console.log("drawing...")
    c.drawImage(v,0,0,w,h);
    setTimeout(draw,5,v,c,w,h);
}