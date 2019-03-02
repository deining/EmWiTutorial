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
);if(TutorialApplication.ti)throw new Error("The unit file 'Effects.js' included twice!"
);TutorialApplication.ti=(function(){var B=TutorialApplication;var C={};

C.FS={Trigger:function(){B.Core.Timer.Trigger.call(this);B.pl(this,0);},_Init:function(
aArg){B.Core.Timer._Init.call(this,aArg);this.__proto__=C.FS;},_className:"Effects::EffectTimerClass"
};C.EY={_Init:function(){C.FS._Init.call(this,0);this.E9(15);this.BG(true);},_variants:
function(){return this;},_this:null};
C._Init=function(){C.FS.__proto__=B.Core.Timer;};C.AO=function(D){var A;if((A=C.EY.
_this)&&(A._cycle!=D))A._Done(C.EY._this=null);};return C;})();

/* Embedded Wizard */