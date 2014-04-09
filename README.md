stepRTC
=======

Initial WebRTC Demo for STEP project w/ Inquirium

nano@remap.ucla.edu / jburke@remap.ucla.edu

Demonstrates realtime video streaming from browser-to-browser from a local camera to a canvas element in a remote browser.

This example has a publisher - publish.html and a receiver - receive.html. 

Usage Instructions
==================

1. Use either Chrome or Firefox for both the publisher and receiver but do not mix for now. 

2. First, connect to the publisher without a room number:

http://uclalabchat.appspot.com/?pub=1

This will redirect to a URL with a unique room number, such as:

https://uclalabchat.appspot.com/?r=57639312&pub=1

3. Then, in another tab or on another machine, connect to the corresponding receiver by copying over that URL and changing 'pub' to 'rec' in the URL but leaving the room number the same:

https://uclalabchat.appspot.com/?r=57639312&rec=1

Usage Notes
===========

Note that you can also just 'hardcode' a single URL, and it will work - do not need to re-generate every seession.

The current application will only allow 2 clients at a single URL. 

Your screen's aspect ratio must match the webcam's aspect for this to look good in the current version. 

To Run Locally
==============

You can run the server locally (via localhost:8080) if you install googleappengine launcher, import the code, and hit 'run'.

Codebase Notes:
===============

Currently runs on google app engine - we will eventually remove this dependency. Meanwhile, this works to begin client-side iteration. just draw on global variable 'canvas' (as defined in canvas.js)

The codebase is a hacked version of the google/mozilla collab webrtc example (http://goo.gl/tbJXto) - modified, specifically, to include remote video preview on a canvas element and split publisher and receiver functions. 



