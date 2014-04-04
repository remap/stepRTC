stepRTC
=======

Web RTC for STEP project w/ Inquirium

nano@remap.ucla.edu

Allows realtime video streaming in a browser in a canvas element to faciliate overlaying sprites onto live preview of the space. A sort of 'webRTC / OpenPtrack' Augmented Reality. 


Usage Instructions
==================

visit http://uclalabchat.appspot.com in Google Chrome

you will get a URL to share

visit that URL on a different computer, and it will share A/V p2p via webRTC. 

then, double-click on the 'preview' window, and it will go full-screen.


Usage Notes
===========

Publisher can be Firefox, but the active canvas page works best in Chrome. 

Note that you can also just 'hardcode' a single URL, and it will work - do not need to re-generate every seession.

App will only allow 2 clients at a single URL. 

Your screen's aspect ratio must match the webcam's aspect for this to look good. If this is not possible, we can modify this manually. 


Codebase Notes:
===============

Currently runs on google app engine - we will eventually make our own codebase. Meanwhile, this works to begin client-side iteration. just draw on global variable 'canvas' (as defined in canvas.js)

The codebase is a modified version of the google/mozilla collab webrtc example (http://goo.gl/tbJXto) - modified, specifically, to include remote video preview on a canvas element. Primary modifications are in canvas.css & canvas.js, index.html, and minor modifiations to main.css. 

Also note you can run this locally (via localhost:8080) if you install googleappengine launcher, import the code, and hit 'run'.


