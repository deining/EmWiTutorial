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
);if(index.Device)throw new Error("The unit file 'Device.js' included twice!");index.
Device=(function(){var B=index;var C={};
var Ai="Sorry, but this device is not able to ring the bell!";var AF="Sorry, but this device is not able to present a weather forecast!";
C.Cc={Dv:0,Fh:function(){if(this.AP&&this.AP.Fh)return this.AP.Fh.apply(this,arguments
);else return this.Jk.apply(this,arguments);},Jk:function(){B.ta("%s",Ai);},Fi:function(
){if(this.AP&&this.AP.Fi)return this.AP.Fi.apply(this,arguments);else return this.
Jl.apply(this,arguments);},Jl:function(){B.ta("%s",AF);},CW:function(value){if(this.
AP&&this.AP.CW)return this.AP.CW.apply(this,arguments);else return this.Ji.apply(
this,arguments);},Ji:function(value){this.HM(value);},HM:function(HR){this.Dv=HR;
switch(HR){case 0:B._SetLanguage(0);break;case 1:B._SetLanguage(1);break;default:
B._SetLanguage(0);}B.sx([this,this.ID,this.CW],0);},Fg:function(Az){if(this.AP&&
this.AP.Fg)return this.AP.Fg.apply(this,arguments);else return this.Jj.apply(this
,arguments);},Jj:function(Az){},ID:function(){return this.Dv;},_Init:function(aArg
){B.te.Cc._Init.call(this,aArg);this.__proto__=C.Cc;var HO=this._variants();if(HO
){this.AP={};HO._Init.call(this,aArg);}},_Done:function(){this.__proto__=C.Cc;if(
this.AP)this.AP._Done.call(this);B.te.Cc._Done.call(this);},_ReInit:function(){B.
te.Cc._ReInit.call(this);if(this.AP)this.AP._ReInit.call(this);},_Mark:function(
D){B.te.Cc._Mark.call(this,D);if(this.AP)this.AP._Mark(D);},_variants:function(){
return B.tl.FS._variants();},AP:null,_className:"Device::DeviceClass"};C.Device={
_Init:function(){C.Cc._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.Dv={JR:0,JV:1};
C._Init=function(){C.Cc.__proto__=B.te.Cc;};C.AO=function(D){var A;if((A=C.Device.
_this)&&(A._cycle!=D))A._Done(C.Device._this=null);};return C;})();

/* Embedded Wizard tutorial application */