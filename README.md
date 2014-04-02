stepRTC
=======

Web RTC for STEP project w/ Inquirium


how to use
==========

visit http://uclalabchat.appspot.com

you will get a URL to share

visit that URL on a different computer, and it will share A/V p2p via webRTC. It will work behind NAT / etc - should 'just work'. 

note that you can also just 'hardcode' a single URL, and it will work - do not need to re-generate every seession. 

IE

load - 
https://uclalabchat.appspot.com/?r=55361618

and then somewhere else, load
https://uclalabchat.appspot.com/?r=55361618

that (or any other session ID in same format) will always work. 


notes
=====

it will only allow 2 clients at a single URL. 

currently runs on google app engine. We will eventually make our own that runs anywhere; but until then, here is a working system.
