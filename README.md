#step-nodeRTC
==============


Second WebRTC Demo for STEP project w/ Inquirium

nano@remap.ucla.edu

Demonstrates realtime video streaming from browser-to-browser from a local camera to a canvas element in a remote browser - assuming they're on same LAN - as there is no turn/ice / NAT hole punching.

This example has a seperate publisher and a receiver.

##Instructions on how to use

Run in your terminal

```bash 
git clone https://github.com/remap/stepRTC
```

```bash 
cd stepRTC/nodertc
```

```bash 
npm install
```

```bash 
cd site
```

```bash 
node server.js
```

In a version of Chrome that have webRTC support:

publisher:

go to [localhost:8080](http://localhost:8080/publish)

click allow to see your camera... 

it's now publishing. 

receiver:

go to publisher IP:8080

click allow to see your camera; it's now receiving. 

then double click the video in the browser to go full screen w/ canvas element. 

at this point, you can kill the node process - the browsers will now communicate directly. 


##Version Notes


Your screen's aspect ratio must match the webcam's aspect for this to look good in the current version. If this is an issue, hardcode the width/height of 'c' element in style.css.


##Codebase Notes:


uses webRTC.io - a wrapper for webrtc signaling in node.js
[https://github.com/webRTC/webRTC.io](https://github.com/webRTC/webRTC.io)

view codebase borrows heavily from  [demo](http://webrtc.dennis.is/)
modified, specifically, to include remote video preview on a canvas element and split publisher and receiver functions. 


