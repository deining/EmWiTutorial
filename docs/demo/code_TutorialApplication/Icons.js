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
);if(TutorialApplication.tj)throw new Error("The unit file 'Icons.js' included twice!"
);TutorialApplication.tj=(function(){var B=TutorialApplication;var C={};

C.F0={_class:function(){return B.tf.X;},0:{FileName:"./res_TutorialApplication/IconsFlagGerman.png"
,Format:B.b9,NoOfFrames:1,FrameSize:[46,33],FrameDelay:0,_this:null}};C.Cd={_class:
function(){return B.tf.X;},0:{FileName:"./res_TutorialApplication/IconsFlagUK.png"
,Format:B.b9,NoOfFrames:1,FrameSize:[46,33],FrameDelay:0,_this:null}};
C._Init=function(){};C.AO=function(D){var A;if((A=C.F0[0]._this)&&(A._cycle!=D))A.
_Done(C.F0[0]._this=null);if((A=C.Cd[0]._this)&&(A._cycle!=D))A._Done(C.Cd[0]._this=
null);};return C;})();

/* Embedded Wizard */