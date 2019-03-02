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
);if(index.te)throw new Error("The unit file 'Templates.js' included twice!");index.
te=(function(){var B=index;var C={};

C.AK={_Init:function(aArg){B.Core.Ah._Init.call(this,aArg);this.__proto__=C.AK;},
_className:"Templates::PushButton"};C.Ce={_Init:function(aArg){this.__proto__=C.
Ce;B.gb++;},_Done:function(){this.__proto__=C.Ce;B.gb--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.Af)&&(A._cycle!=D))A._Mark(A._cycle=D);},Af:null,_cycle:
0,_observers:null,_className:"Templates::DeviceClass"};
C._Init=function(){C.AK.__proto__=B.Core.Ah;};C.AO=function(D){};return C;})();

/* Embedded Wizard */