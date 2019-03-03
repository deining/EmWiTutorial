/*******************************************************************************
*
* E M B E D D E D   W I Z A R D   T U T O R I A L   S A M P L E   P R O J E C T
*
*                                               written by Dr. Andreas Deininger
*
********************************************************************************
*
* Embedded Wizard is a graphical user interface tool developed and distributed
* by TARA Systems GmbH for creating graphical user interface (GUI) applications
* mainly for embedded systems.

* This file is part of sample application developed in the course of a tutorial
* for novice users of Embedded Wizard.
*
* The tutorial project in its entirety (Embedded Wizard code + code for tutorial
* web site) is hosted on GitHub and on GitHub pages:
*
* Tutorial web site: https://deining.github.io/EmWiTutorial
* Demo site sample application: https://deining.github.io/EmWiTutorial/demo
*
* GitHub repository: https://github.com/deining/EmWiTutorial
*
* For further information refer to the README file of the GitHub repository.
*
* Version  : 9.10
* Profile  : Browser
* Platform : Tara.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.tl)throw new Error("The unit file 'BrowserDevice.js' included twice!"
);index.tl=(function(){var B=index;var C={};
var Ai="Ring the bell command on browser device was called";var AF="Show forecast command on browser device was called";
var BV="0";
C.FS={Fh:function(){B.ta("%s",Ai);beep();},Fi:function(){B.ta("%s",AF);window.open(
'https://worldweather.wmo.int','_self');},CW:function(value){localStorage.setItem(
"Language",value);this.HM(value);},Fg:function(Az){var lang=BV;lang=localStorage.
getItem("Language");B._GetAutoObject(B.Device.Device).CW(B.s6(lang,0,10));},_Init:
function(aArg){var AP=this.AP;AP.__proto__=C.FS;B.gb++;},_Done:function(){var AP=
this.AP;AP.__proto__=C.FS;B.gb--;},_ReInit:function(){},_Mark:function(D){},_variants:
function(){return this;},_className:"BrowserDevice::DeviceClassBrowser"};var audioContext=
new AudioContext();function beep(){var oscillatorNode=audioContext.createOscillator(
);var gainNode=audioContext.createGain();oscillatorNode.connect(gainNode);oscillatorNode.
frequency.value=500;oscillatorNode.type="square";gainNode.connect(audioContext.destination
);gainNode.gain.value=1.5;oscillatorNode.start(audioContext.currentTime);oscillatorNode.
stop(audioContext.currentTime+0.2);}
C._Init=function(){};C.AO=function(D){};return C;})();

/* Embedded Wizard tutorial application */
