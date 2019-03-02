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
var Ai=[0,0,480,320];var AF=[23,146,233,296];var BV=[47,58,433,112];var CG=[247,146
,457,296];var CH=[367,13,467,46];var DA="Header";var DB=[0,0,210,150];var GE=[29
,76,179,126];var GF="Action";var GG=[51,15,162,51];var GH="Heading";var GI=[0,0,
46,33];var Jc=[0,33];var Jd=[46,33];var Je=[46,0];var Jf=[0,0];var Jg=[0,0,100,33
];var Jh=[54,0,100,33];
C.Fl={BU:null,Cn:null,Cp:null,Cv:null,Ct:null,BN:function(aArg){var A;B.kD([A=B._GetAutoObject(
B.Device.Device),A.Fg],this);},Ja:function(Az){B._GetAutoObject(B.Device.Device).
Fh();},Iu:function(Az){B._GetAutoObject(B.Device.Device).Fi();},_Init:function(aArg
){B.Core.Root._Init.call(this,aArg);B.th.Fe._Init.call(this.BU={Af:this},0);C.Eq.
_Init.call(this.Cn={Af:this},0);B.th.Text._Init.call(this.Cp={Af:this},0);C.Eq._Init.
call(this.Cv={Af:this},0);C.Ct._Init.call(this.Ct={Af:this},0);this.__proto__=C.
Fl;this.Am(Ai);this.BU.Am(Ai);this.BU.Ch(0xFFDCDCDC);this.Cn.Am(AF);this.Cn.E8(B.
r5(B.tg.Hu));this.Cn.Fc(B.r5(B.tg.Ho));this.Cp.Am(BV);this.Cp.HD(true);this.Cp.En(
B.r5(B.tg.Hn));this.Cp.Ch(0xFF000000);this.Cv.Am(CG);this.Cv.E8(B.r5(B.tg.Hv));this.
Cv.Fc(B.r5(B.tg.Hp));this.Ct.Am(CH);this.Bi(this.BU,0);this.Bi(this.Cn,0);this.Bi(
this.Cp,0);this.Bi(this.Cv,0);this.Bi(this.Ct,0);this.Cn.HC([this,this.Ja]);this.
Cp.Gv(B.r0(B.tf.F$));this.Cv.HC([this,this.Iu]);this.BN(aArg);},_Done:function(){
this.__proto__=C.Fl;this.BU._Done();this.Cn._Done();this.Cp._Done();this.Cv._Done(
);this.Ct._Done();B.Core.Root._Done.call(this);},_ReInit:function(){B.Core.Root.
_ReInit.call(this);this.BU._ReInit();this.Cn._ReInit();this.Cp._ReInit();this.Cv.
_ReInit();this.Ct._ReInit();this.Cn.E8(B.r5(B.tg.Hu));this.Cn.Fc(B.r5(B.tg.Ho));
this.Cp.En(B.r5(B.tg.Hn));this.Cv.E8(B.r5(B.tg.Hv));this.Cv.Fc(B.r5(B.tg.Hp));},
_Mark:function(D){var A;B.Core.Root._Mark.call(this,D);if((A=this.BU)._cycle!=D)
A._Mark(A._cycle=D);if((A=this.Cn)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Cp).
_cycle!=D)A._Mark(A._cycle=D);if((A=this.Cv)._cycle!=D)A._Mark(A._cycle=D);if((A=
this.Ct)._cycle!=D)A._Mark(A._cycle=D);},_className:"Application::TutorialApplication"
};C.Eq={BU:null,Ca:null,AK:null,Cq:null,ES:null,Fk:DA,I_:function(Az){var A;(A=this.
ES)?A[1].call(A[0],this):null;},HC:function(value){if(B.sd(this.ES,value))return;
this.ES=value;this.AK.BF=value;},E8:function(value){if(this.Fk===value)return;this.
Fk=value;this.AK.HE(value);},Fc:function(value){if(this.Fk===value)return;this.Fk=
value;this.Cq.En(value);},_Init:function(aArg){B.Core.Ah._Init.call(this,aArg);B.
th.Fe._Init.call(this.BU={Af:this},0);B.th.Ca._Init.call(this.Ca={Af:this},0);B.
tk.AK._Init.call(this.AK={Af:this},0);B.th.Text._Init.call(this.Cq={Af:this},0);
this.__proto__=C.Eq;this.Am(DB);this.BU.Am(DB);this.Ca.Am(DB);this.Ca.I7(1);this.
Ca.Ch(0xFF000000);this.AK.Am(GE);this.AK.HE(GF);this.Cq.Am(GG);this.Cq.HD(true);
this.Cq.En(GH);this.Cq.Ch(0xFF010101);this.Bi(this.BU,0);this.Bi(this.Ca,0);this.
Bi(this.AK,0);this.Bi(this.Cq,0);this.Db(null);this.AK.Db(null);this.AK.BF=[this
,this.I_];this.AK.IE(B._GetAutoObject(B.tk.Gy));this.Cq.Gv(B.r0(B.tf.Ga));},_Done:
function(){this.__proto__=C.Eq;this.BU._Done();this.Ca._Done();this.AK._Done();this.
Cq._Done();B.Core.Ah._Done.call(this);},_ReInit:function(){B.Core.Ah._ReInit.call(
this);this.BU._ReInit();this.Ca._ReInit();this.AK._ReInit();this.Cq._ReInit();},
_Mark:function(D){var A;B.Core.Ah._Mark.call(this,D);if((A=this.BU)._cycle!=D)A.
_Mark(A._cycle=D);if((A=this.Ca)._cycle!=D)A._Mark(A._cycle=D);if((A=this.AK)._cycle
!=D)A._Mark(A._cycle=D);if((A=this.Cq)._cycle!=D)A._Mark(A._cycle=D);if((A=this.
ES)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Application::PushButtonComponent"
};C.DZ={Av:null,AJ:null,BF:null,C_:null,Ab:null,FQ:null,Dv:0,Jt:false,JD:false,JA:
false,Ev:function(Df){var A;B.te.AK.Ev.call(this,Df);var D_=((Df&0x10)===0x10);var
Ju=((Df&0x20)===0x20);var D$=(this.Ab.Down&&this.Ab.CE)||this.Av.BL;this.Jt=D_;this.
JD=Ju;this.JA=D$;},G4:function(Az){this.Cs();B.kD(this.BF,this);},G5:function(Az
){if(this.Ab.Down)return;if(this.AJ.Ff)return;this.Cs();if(this.Av.BL){B.kD(this.
BF,this);this.Av.BG(false);}this.Av.BG(true);},H7:function(Az){this.Cs();},G8:function(
Az){if(!this.Ab.CE)return;if(this.Ab.Cm)return;if(this.Ab.Bt>=this.Av.Eb)B.kD(this.
BF,this);else this.Av.BG(true);},G7:function(Az){if(this.Av.BL){B.kD(this.BF,this
);this.Av.BG(false);}},IF:function(value){if(this.FQ===value)return;this.FQ=value;
this.C_.DX(value);},CW:function(value){if(this.Dv===value)return;this.Dv=value;}
,_Init:function(aArg){B.te.AK._Init.call(this,aArg);B.Core.Timer._Init.call(this.
Av={Af:this},0);B.Core.Du._Init.call(this.AJ={Af:this},0);B.th.E2._Init.call(this.
C_={Af:this},0);B.Core.Fj._Init.call(this.Ab={Af:this},0);this.__proto__=C.DZ;this.
Am(GI);this.Av.E9(0);this.Av.E6(50);this.AJ.C9=149;this.C_.Am(GI);this.Ab.HF(0x3F
);this.Ab.Fb(Jc);this.Ab.Fa(Jd);this.Ab.E$(Je);this.Ab.E_(Jf);this.Ab.Dd=0xF;this.
Ab.HG(100);this.Bi(this.C_,0);this.Bi(this.Ab,0);this.Av.Eo=[this,this.G4];this.
AJ.B2=[this,this.G5];this.C_.DX(B.r0(B.tj.Cd));this.Ab.Da=[this,this.H7];this.Ab.
C$=[this,this.H7];this.Ab.Cg=[this,this.G8];this.Ab.B2=[this,this.G7];},_Done:function(
){this.__proto__=C.DZ;this.Av._Done();this.AJ._Done();this.C_._Done();this.Ab._Done(
);B.te.AK._Done.call(this);},_ReInit:function(){B.te.AK._ReInit.call(this);this.
Av._ReInit();this.AJ._ReInit();this.C_._ReInit();this.Ab._ReInit();},_Mark:function(
D){var A;B.te.AK._Mark.call(this,D);if((A=this.Av)._cycle!=D)A._Mark(A._cycle=D);
if((A=this.AJ)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BF)&&((A=A[0])._cycle!=D
))A._Mark(A._cycle=D);if((A=this.C_)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Ab
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.FQ)&&(A._cycle!=D))A._Mark(A._cycle=D
);},_className:"Application::PushButtonFlag"};C.Ct={Cd:null,CS:null,Ic:function(
Az){B._GetAutoObject(B.Device.Device).CW((C.DZ.isPrototypeOf(Az)?Az:null).Dv);},
_Init:function(aArg){B.Core.Ah._Init.call(this,aArg);C.DZ._Init.call(this.Cd={Af:
this},0);C.DZ._Init.call(this.CS={Af:this},0);this.__proto__=C.Ct;this.Am(Jg);this.
Cd.Am(GI);this.Cd.CW(0);this.CS.Am(Jh);this.CS.CW(1);this.Bi(this.Cd,0);this.Bi(
this.CS,0);this.Cd.BF=[this,this.Ic];this.CS.BF=[this,this.Ic];this.CS.IF(B.r0(B.
tj.F_));},_Done:function(){this.__proto__=C.Ct;this.Cd._Done();this.CS._Done();B.
Core.Ah._Done.call(this);},_ReInit:function(){B.Core.Ah._ReInit.call(this);this.
Cd._ReInit();this.CS._ReInit();},_Mark:function(D){var A;B.Core.Ah._Mark.call(this
,D);if((A=this.Cd)._cycle!=D)A._Mark(A._cycle=D);if((A=this.CS)._cycle!=D)A._Mark(
A._cycle=D);},_className:"Application::LanguageSelector"};
C._Init=function(){C.Fl.__proto__=B.Core.Root;C.Eq.__proto__=B.Core.Ah;C.DZ.__proto__=
B.te.AK;C.Ct.__proto__=B.Core.Ah;};C.AO=function(D){};return C;})();

/* Embedded Wizard tutorial application */