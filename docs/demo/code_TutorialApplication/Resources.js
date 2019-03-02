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

var TutorialApplication;if(!TutorialApplication)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(TutorialApplication.tf)throw new Error("The unit file 'Resources.js' included twice!"
);TutorialApplication.tf=(function(){var B=TutorialApplication;var C={};
var Ai=[0,0];var AF="The property \'FrameSize\' is READ ONLY.";
C.X={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.pm,BZ:false,DW:false,Co:function(
){if(!this.bitmap)return;var handle=this.bitmap;B.rK(handle);this.bitmap=null;this.
FrameSize=Ai;this.FrameDelay=0;this.NoOfFrames=1;this.BZ=false;},BN:function(aArg
){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Ai;var frameDelay=
0;{var bmp=B.sg(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.DW=true;this.BZ=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Gv:function(value){throw new
Error(AF);},Update:function(){},_Init:function(aArg){B.Core.Dc._Init.call(this,aArg
);this.__proto__=C.X;this.BN(aArg);},_Done:function(){this.__proto__=C.X;this.Co(
);B.Core.Dc._Done.call(this);},_className:"Resources::Bitmap"};C.AY={font:null,Leading:
0,Descent:0,Ascent:0,Co:function(){if(!this.font)return;var handle=this.font;B.rL(
handle);this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},BN:function(
aArg){if(!aArg)return;var handle=null;var ascent=0;var descent=0;var leading=0;{
var font=B.si(aArg);if(font){ascent=font.Ascent;descent=font.Descent;leading=font.
Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=descent;this.
Leading=leading;},Hl:function(aFlowString){if(!this.font)return 0;var handle=this.
font;var advance=0;advance=B.rR(handle,aFlowString);return advance;},I8:function(
aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;if(!this.font||((
aOffset>0)&&(aOffset>=aString.length)))return B.g3;var handle=this.font;var result=
B.g3;result=B.sD(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi);return result;
},Eh:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(!this.font||((aOffset>
0)&&(aOffset>=aString.length)))return 0;var handle=this.font;var advance=0;advance=
B.i7(handle,aString,aOffset,aCount);return advance;},OnGetLeading:function(){return this.
Leading;},OnGetDescent:function(){return this.Descent;},OnGetAscent:function(){return this.
Ascent;},_Init:function(aArg){B.Core.Dc._Init.call(this,aArg);this.__proto__=C.AY;
this.BN(aArg);},_Done:function(){this.__proto__=C.AY;this.Co();B.Core.Dc._Done.call(
this);},_className:"Resources::Font"};C.Ga={_class:function(){return C.AY;},0:{Data:
function(){return B.tp;},Cache:[],_this:null}};C.F$={_class:function(){return C.
AY;},0:{Data:function(){return B.to;},Cache:[],_this:null}};C.F_={_class:function(
){return C.AY;},0:{Data:function(){return B.tn;},Cache:[],_this:null}};
C._Init=function(){C.X.__proto__=B.Core.Dc;C.AY.__proto__=B.Core.Dc;};C.AO=function(
D){var A;if((A=C.Ga[0]._this)&&(A._cycle!=D))A._Done(C.Ga[0]._this=null);if((A=C.
F$[0]._this)&&(A._cycle!=D))A._Done(C.F$[0]._this=null);if((A=C.F_[0]._this)&&(A.
_cycle!=D))A._Done(C.F_[0]._this=null);};return C;})();

/* Embedded Wizard */