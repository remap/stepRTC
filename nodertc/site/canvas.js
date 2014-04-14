
function initCanvas(){
var v = document.getElementById('remote' + gSocketId);
var canvas = document.getElementById('c');
var context = canvas.getContext('2d');

// this size below doesn't really matter - 
// it just has to be *something* other than clientWidth/Height
// the true size of display is set in css for c element

var cw = 640;//document.body.clientWidth; 
var ch = 480;//document.body.clientHeight;

canvas.width = cw;
canvas.height = ch;

draw(v,context,cw,ch);

}
// frequency of blitting video -> canvas
freq = 5 //ms

function draw(v,c,w,h) {
    c.drawImage(v,0,0,w,h);
    setTimeout(draw,freq,v,c,w,h);
}