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
);if(index.hN)throw new Error("The unit file 'Application.js' included twice!");
index.hN=(function(){var B=index;var C={};
var Ai=[0,0,480,320];var AF=[23,146,233,296];var BH=[47,58,433,112];var BW=[247,146
,457,296];var BX=[367,13,467,46];var CX="Header";var DB=[0,0,210,150];var GE=[29
,76,179,126];var GF="Action";var GG=[51,15,162,51];var GH="Heading";var GI=[0,0,
46,33];var Jc=[0,33];var Jd=[46,33];var Je=[46,0];var Jf=[0,0];var Jg=[0,0,100,33
];var Jh=[54,0,100,33];
C.Fl={BV:null,Cp:null,Cr:null,Cx:null,Cv:null,BO:function(aArg){var A;B.kD([A=B._GetAutoObject(
B.Device.Device),A.Fg],this);},Ja:function(Az){B._GetAutoObject(B.Device.Device).
Fh();},Iu:function(Az){B._GetAutoObject(B.Device.Device).Fi();},_Init:function(aArg
){B.Core.Root._Init.call(this,aArg);B.th.Fe._Init.call(this.BV={Af:this},0);C.Eq.
_Init.call(this.Cp={Af:this},0);B.th.Text._Init.call(this.Cr={Af:this},0);C.Eq._Init.
call(this.Cx={Af:this},0);C.Cv._Init.call(this.Cv={Af:this},0);this.__proto__=C.
Fl;this.Am(Ai);this.BV.Am(Ai);this.BV.Cj(0xFFDCDCDC);this.Cp.Am(AF);this.Cp.E8(B.
r5(B.tg.Hv));this.Cp.Fc(B.r5(B.tg.Hp));this.Cr.Am(BH);this.Cr.HE(true);this.Cr.En(
B.r5(B.tg.Ho));this.Cr.Cj(0xFF000000);this.Cx.Am(BW);this.Cx.E8(B.r5(B.tg.Hw));this.
Cx.Fc(B.r5(B.tg.Hq));this.Cv.Am(BX);this.Bi(this.BV,0);this.Bi(this.Cp,0);this.Bi(
this.Cr,0);this.Bi(this.Cx,0);this.Bi(this.Cv,0);this.Cp.HD([this,this.Ja]);this.
Cr.Gv(B.r0(B.tf.F$));this.Cx.HD([this,this.Iu]);this.BO(aArg);},_Done:function(){
this.__proto__=C.Fl;this.BV._Done();this.Cp._Done();this.Cr._Done();this.Cx._Done(
);this.Cv._Done();B.Core.Root._Done.call(this);},_ReInit:function(){B.Core.Root.
_ReInit.call(this);this.BV._ReInit();this.Cp._ReInit();this.Cr._ReInit();this.Cx.
_ReInit();this.Cv._ReInit();this.Cp.E8(B.r5(B.tg.Hv));this.Cp.Fc(B.r5(B.tg.Hp));
this.Cr.En(B.r5(B.tg.Ho));this.Cx.E8(B.r5(B.tg.Hw));this.Cx.Fc(B.r5(B.tg.Hq));},
_Mark:function(D){var A;B.Core.Root._Mark.call(this,D);if((A=this.BV)._cycle!=D)
A._Mark(A._cycle=D);if((A=this.Cp)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Cr).
_cycle!=D)A._Mark(A._cycle=D);if((A=this.Cx)._cycle!=D)A._Mark(A._cycle=D);if((A=
this.Cv)._cycle!=D)A._Mark(A._cycle=D);},_className:"Application::TutorialApplication"
};C.Eq={BV:null,Cc:null,AK:null,Cs:null,ES:null,Fk:CX,I_:function(Az){var A;(A=this.
ES)?A[1].call(A[0],this):null;},HD:function(value){if(B.sd(this.ES,value))return;
this.ES=value;this.AK.BF=value;},E8:function(value){if(this.Fk===value)return;this.
Fk=value;this.AK.HF(value);},Fc:function(value){if(this.Fk===value)return;this.Fk=
value;this.Cs.En(value);},_Init:function(aArg){B.Core.Ah._Init.call(this,aArg);B.
th.Fe._Init.call(this.BV={Af:this},0);B.th.Cc._Init.call(this.Cc={Af:this},0);B.
tk.AK._Init.call(this.AK={Af:this},0);B.th.Text._Init.call(this.Cs={Af:this},0);
this.__proto__=C.Eq;this.Am(DB);this.BV.Am(DB);this.Cc.Am(DB);this.Cc.I7(1);this.
Cc.Cj(0xFF000000);this.AK.Am(GE);this.AK.HF(GF);this.Cs.Am(GG);this.Cs.HE(true);
this.Cs.En(GH);this.Cs.Cj(0xFF010101);this.Bi(this.BV,0);this.Bi(this.Cc,0);this.
Bi(this.AK,0);this.Bi(this.Cs,0);this.Dc(null);this.AK.Dc(null);this.AK.BF=[this
,this.I_];this.AK.IE(B._GetAutoObject(B.tk.Gy));this.Cs.Gv(B.r0(B.tf.Ga));},_Done:
function(){this.__proto__=C.Eq;this.BV._Done();this.Cc._Done();this.AK._Done();this.
Cs._Done();B.Core.Ah._Done.call(this);},_ReInit:function(){B.Core.Ah._ReInit.call(
this);this.BV._ReInit();this.Cc._ReInit();this.AK._ReInit();this.Cs._ReInit();},
_Mark:function(D){var A;B.Core.Ah._Mark.call(this,D);if((A=this.BV)._cycle!=D)A.
_Mark(A._cycle=D);if((A=this.Cc)._cycle!=D)A._Mark(A._cycle=D);if((A=this.AK)._cycle
!=D)A._Mark(A._cycle=D);if((A=this.Cs)._cycle!=D)A._Mark(A._cycle=D);if((A=this.
ES)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Application::PushButtonComponent"
};C.DZ={Av:null,AJ:null,BF:null,C$:null,Ab:null,FQ:null,Dw:0,Jt:false,JD:false,JA:
false,Ev:function(Dg){var A;B.te.AK.Ev.call(this,Dg);var D_=((Dg&0x10)===0x10);var
Ju=((Dg&0x20)===0x20);var D$=(this.Ab.Down&&this.Ab.CG)||this.Av.BM;this.Jt=D_;this.
JD=Ju;this.JA=D$;},G5:function(Az){this.Cu();B.kD(this.BF,this);},G6:function(Az
){if(this.Ab.Down)return;if(this.AJ.Ff)return;this.Cu();if(this.Av.BM){B.kD(this.
BF,this);this.Av.BG(false);}this.Av.BG(true);},H7:function(Az){this.Cu();},G9:function(
Az){if(!this.Ab.CG)return;if(this.Ab.Co)return;if(this.Ab.Bt>=this.Av.Eb)B.kD(this.
BF,this);else this.Av.BG(true);},G8:function(Az){if(this.Av.BM){B.kD(this.BF,this
);this.Av.BG(false);}},IF:function(value){if(this.FQ===value)return;this.FQ=value;
this.C$.DX(value);},CW:function(value){if(this.Dw===value)return;this.Dw=value;}
,_Init:function(aArg){B.te.AK._Init.call(this,aArg);B.Core.Timer._Init.call(this.
Av={Af:this},0);B.Core.Dv._Init.call(this.AJ={Af:this},0);B.th.E2._Init.call(this.
C$={Af:this},0);B.Core.Fj._Init.call(this.Ab={Af:this},0);this.__proto__=C.DZ;this.
Am(GI);this.Av.E9(0);this.Av.E6(50);this.AJ.C_=149;this.C$.Am(GI);this.Ab.HG(0x3F
);this.Ab.Fb(Jc);this.Ab.Fa(Jd);this.Ab.E$(Je);this.Ab.E_(Jf);this.Ab.De=0xF;this.
Ab.HH(100);this.Bi(this.C$,0);this.Bi(this.Ab,0);this.Av.Eo=[this,this.G5];this.
AJ.B4=[this,this.G6];this.C$.DX(B.r0(B.tj.Cf));this.Ab.Db=[this,this.H7];this.Ab.
Da=[this,this.H7];this.Ab.Ci=[this,this.G9];this.Ab.B4=[this,this.G8];},_Done:function(
){this.__proto__=C.DZ;this.Av._Done();this.AJ._Done();this.C$._Done();this.Ab._Done(
);B.te.AK._Done.call(this);},_ReInit:function(){B.te.AK._ReInit.call(this);this.
Av._ReInit();this.AJ._ReInit();this.C$._ReInit();this.Ab._ReInit();},_Mark:function(
D){var A;B.te.AK._Mark.call(this,D);if((A=this.Av)._cycle!=D)A._Mark(A._cycle=D);
if((A=this.AJ)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BF)&&((A=A[0])._cycle!=D
))A._Mark(A._cycle=D);if((A=this.C$)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Ab
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.FQ)&&(A._cycle!=D))A._Mark(A._cycle=D
);},_className:"Application::PushButtonFlag"};C.Cv={Cf:null,CS:null,Ic:function(
Az){B._GetAutoObject(B.Device.Device).CW((C.DZ.isPrototypeOf(Az)?Az:null).Dw);},
_Init:function(aArg){B.Core.Ah._Init.call(this,aArg);C.DZ._Init.call(this.Cf={Af:
this},0);C.DZ._Init.call(this.CS={Af:this},0);this.__proto__=C.Cv;this.Am(Jg);this.
Cf.Am(GI);this.Cf.CW(0);this.CS.Am(Jh);this.CS.CW(1);this.Bi(this.Cf,0);this.Bi(
this.CS,0);this.Cf.BF=[this,this.Ic];this.CS.BF=[this,this.Ic];this.CS.IF(B.r0(B.
tj.F_));},_Done:function(){this.__proto__=C.Cv;this.Cf._Done();this.CS._Done();B.
Core.Ah._Done.call(this);},_ReInit:function(){B.Core.Ah._ReInit.call(this);this.
Cf._ReInit();this.CS._ReInit();},_Mark:function(D){var A;B.Core.Ah._Mark.call(this
,D);if((A=this.Cf)._cycle!=D)A._Mark(A._cycle=D);if((A=this.CS)._cycle!=D)A._Mark(
A._cycle=D);},_className:"Application::LanguageSelector"};
C._Init=function(){C.Fl.__proto__=B.Core.Root;C.Eq.__proto__=B.Core.Ah;C.DZ.__proto__=
B.te.AK;C.Cv.__proto__=B.Core.Ah;};C.AO=function(D){};return C;})();

/* Embedded Wizard */