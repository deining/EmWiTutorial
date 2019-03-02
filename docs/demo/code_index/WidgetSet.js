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
);if(index.tk)throw new Error("The unit file 'WidgetSet.js' included twice!");index.
tk=(function(){var B=index;var C={};
var Ai=[23,23];var AF=[0,0,150,50];var BH=[0,50];var BW=[150,50];var BX=[150,0];var
CX=[0,0];
C.D0={_class:function(){return B.tf.X;},0:{FileName:"./res_index/WidgetSetPushButtonSmall.png"
,Format:B.b9,NoOfFrames:4,FrameSize:[34,34],FrameDelay:0,_this:null}};C.Gy={_Init:
function(){C.Gx._Init.call(this,0);this.IW(0xFFFFFFFF);this.IZ(0xFFFFFFFF);this.
IY(0xFFABABA8);this.IX(0xFF706E6C);this.I1(4);this.I4(4);this.I3(4);this.I2(4);this.
IV(0xAAABABA8);this.IU(0xFF706E6C);this.IQ(4);this.IT(4);this.IS(4);this.IR(4);this.
I0(B.r0(B.tf.Gb));this.IM(3);this.IP(2);this.IO(0);this.IN(1);this.II(B.r0(C.D0)
);this.IL(B.r0(C.D0));this.IK(B.r0(C.D0));this.IJ(B.r0(C.D0));this.I6(Ai);},_variants:
function(){return this;},_this:null};C.Gx={HJ:50,Gl:0xFF000000,Go:0xFF000000,Gn:
0xFF000000,Gm:0xFF000000,Gp:0,Gs:0,Gr:0,Gq:0,Ix:0xFFFFFFFF,Iy:0xFFFFFFFF,Gi:0xFFFFFFFF
,Gh:0xFFFFFFFF,Gd:0,Gg:0,Gf:0,Ge:0,IB:0x12,Ej:null,Iw:0x12,Ip:0x3F,Iq:0xFFFFFFFF
,It:0xFFFFFFFF,Is:0xFFFFFFFF,Ir:0xFFFFFFFF,FW:-1,FZ:-1,FY:-1,FX:-1,Ed:null,Eg:null
,Ef:null,Ee:null,D1:B.pm,D2:B.pm,KeyCode:149,IW:function(value){if(this.Gl===value
)return;this.Gl=value;B.kD([this,this.AX],this);},IZ:function(value){if(this.Go===
value)return;this.Go=value;B.kD([this,this.AX],this);},IY:function(value){if(this.
Gn===value)return;this.Gn=value;B.kD([this,this.AX],this);},IX:function(value){if(
this.Gm===value)return;this.Gm=value;B.kD([this,this.AX],this);},I1:function(value
){if(this.Gp===value)return;this.Gp=value;B.kD([this,this.AX],this);},I4:function(
value){if(this.Gs===value)return;this.Gs=value;B.kD([this,this.AX],this);},I3:function(
value){if(this.Gr===value)return;this.Gr=value;B.kD([this,this.AX],this);},I2:function(
value){if(this.Gq===value)return;this.Gq=value;B.kD([this,this.AX],this);},IV:function(
value){if(this.Gi===value)return;this.Gi=value;B.kD([this,this.AX],this);},IU:function(
value){if(this.Gh===value)return;this.Gh=value;B.kD([this,this.AX],this);},IQ:function(
value){if(this.Gd===value)return;this.Gd=value;B.kD([this,this.AX],this);},IT:function(
value){if(this.Gg===value)return;this.Gg=value;B.kD([this,this.AX],this);},IS:function(
value){if(this.Gf===value)return;this.Gf=value;B.kD([this,this.AX],this);},IR:function(
value){if(this.Ge===value)return;this.Ge=value;B.kD([this,this.AX],this);},I0:function(
value){if(this.Ej===value)return;this.Ej=value;B.kD([this,this.AX],this);},IM:function(
value){if(this.FW===value)return;this.FW=value;B.kD([this,this.AX],this);},IP:function(
value){if(this.FZ===value)return;this.FZ=value;B.kD([this,this.AX],this);},IO:function(
value){if(this.FY===value)return;this.FY=value;B.kD([this,this.AX],this);},IN:function(
value){if(this.FX===value)return;this.FX=value;B.kD([this,this.AX],this);},II:function(
value){if(this.Ed===value)return;this.Ed=value;B.kD([this,this.AX],this);},IL:function(
value){if(this.Eg===value)return;this.Eg=value;B.kD([this,this.AX],this);},IK:function(
value){if(this.Ef===value)return;this.Ef=value;B.kD([this,this.AX],this);},IJ:function(
value){if(this.Ee===value)return;this.Ee=value;B.kD([this,this.AX],this);},I6:function(
value){if(B.sa(this.D2,value))return;this.D2=value;B.kD([this,this.AX],this);},_Init:
function(aArg){C.Ew._Init.call(this,aArg);this.__proto__=C.Gx;},_Mark:function(D
){var A;C.Ew._Mark.call(this,D);if((A=this.Ej)&&(A._cycle!=D))A._Mark(A._cycle=D
);if((A=this.Ed)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Eg)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.Ef)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Ee)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"WidgetSet::PushButtonConfig"
};C.Ew={AX:function(Az){B.pl(this,0);},_Init:function(aArg){this.__proto__=C.Ew;
B.gb++;},_Done:function(){this.__proto__=C.Ew;B.gb--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.Af)&&(A._cycle!=D))A._Mark(A._cycle=D);},Af:null,_cycle:
0,_observers:null,_className:"WidgetSet::WidgetConfig"};C.AK={Bs:null,A5:null,BQ:
null,G7:0,Av:null,AJ:null,Ab:null,Db:null,Da:null,Ci:null,B4:null,BF:null,Hr:-1,
Hu:-1,Ht:-1,Hs:-1,E1:null,E3:B.g3,W:null,Am:function(value){var A;if(!!this.W){var
HY=[value[2]-value[0],value[3]-value[1]];var BR=HY;if(BR[0]<this.W.D2[0])BR=[this.
W.D2[0],BR[1]];if(BR[1]<this.W.D2[1])BR=[BR[0],this.W.D2[1]];if((this.W.D1[0]>0)&&(
BR[0]>this.W.D1[0]))BR=[this.W.D1[0],BR[1]];if((this.W.D1[1]>0)&&(BR[1]>this.W.D1[
1]))BR=[BR[0],this.W.D1[1]];var CL=B.sn(BR,HY);if(!!CL[0]){var Bb=((this.Ch&0x4)===
0x4);var Bc=((this.Ch&0x8)===0x8);if(Bb&&!Bc)value=B.sW(value,value[2]+CL[0]);else
if(!Bb&&Bc)value=[].concat(value[0]-CL[0],value.slice(1,4));else{value=[].concat(
value[0]-((CL[0]/2)|0),value.slice(1,4));value=B.sW(value,value[0]+BR[0]);}}if(!
!CL[1]){var Bd=((this.Ch&0x10)===0x10);var Ba=((this.Ch&0x20)===0x20);if(Bd&&!Ba
)value=[].concat(value.slice(0,3),value[3]+CL[1]);else if(!Bd&&Ba)value=B.sY(value
,value[1]-CL[1]);else{value=B.sY(value,value[1]-((CL[1]/2)|0));value=[].concat(value.
slice(0,3),value[1]+BR[1]);}}}B.Core.Ah.Am.call(this,value);},Ev:function(Dg){var
A;B.Core.Ah.Ev.call(this,Dg);var H2=!!this.W&&(((!!this.W.Ee||!!this.W.Ef)||!!this.
W.Eg)||!!this.W.Ed);var H3=!!this.E1;var H4=(!!this.W&&(this.E3!==B.g3))&&!!this.
W.Ej;var FJ=false;var S=[0,0,(A=this.O)[2]-A[0],A[3]-A[1]];if(H2&&!this.BQ){this.
BQ=B._NewObject(B.th.Gc,0);this.Bi(this.BQ,0);FJ=true;}else if(!H2&&!!this.BQ){this.
Gz(this.BQ);this.BQ=null;}if(H3&&!this.A5){this.A5=B._NewObject(B.th.E2,0);this.
Bi(this.A5,0);FJ=true;}else if(!H3&&!!this.A5){this.Gz(this.A5);this.A5=null;}if(
H4&&!this.Bs){this.Bs=B._NewObject(B.th.Text,0);this.Bi(this.Bs,0);FJ=true;this.
Bs.IH(true);}else if(!H4&&!!this.Bs){this.Gz(this.Bs);this.Bs=null;}if(FJ){if(!!
this.BQ)this.Es(this.BQ);if(!!this.A5)this.Es(this.A5);if(!!this.Bs)this.Es(this.
Bs);}var D_=((Dg&0x10)===0x10);var FA=((Dg&0x40)===0x40);var D$=((this.Ab.Down&&
this.Ab.CG)||this.AJ.Down)||this.Av.BM;if(!!this.BQ){var bitmap=null;var A0=-1;var
EQ=0xFFFFFFFF;var Ay=this.W.Ip;var L=S;if(!D_){bitmap=this.W.Ef;A0=this.W.FY;EQ=
this.W.Is;}else if(D$){bitmap=this.W.Ed;A0=this.W.FW;EQ=this.W.Iq;}else if(FA){bitmap=
this.W.Eg;A0=this.W.FZ;EQ=this.W.It;}else{bitmap=this.W.Ee;A0=this.W.FX;EQ=this.
W.Ir;}this.BQ.Dx(A0<0);this.BQ.Cj(EQ);if(A0<0)A0=0;if(!!bitmap&&!((Ay&0x1)===0x1
)){var Bb=((Ay&0x4)===0x4);var Bc=((Ay&0x8)===0x8);var Ap=bitmap.FrameSize[0];if(
Bb&&!Bc)L=B.sW(L,L[0]+Ap);else if(!Bb&&Bc)L=[].concat(L[2]-Ap,L.slice(1,4));else{
L=[].concat((((L[2]-L[0])/2)|0)-((Ap/2)|0),L.slice(1,4));L=B.sW(L,L[0]+Ap);}}if(
!!bitmap&&!((Ay&0x2)===0x2)){var Bd=((Ay&0x10)===0x10);var Ba=((Ay&0x20)===0x20);
var An=bitmap.FrameSize[1];if(Bd&&!Ba)L=[].concat(L.slice(0,3),L[1]+An);else if(
!Bd&&Ba)L=B.sY(L,L[3]-An);else{L=B.sY(L,(((L[3]-L[1])/2)|0)-((An/2)|0));L=[].concat(
L.slice(0,3),L[1]+An);}}this.BQ.E7(A0);this.BQ.DX(bitmap);this.BQ.Am(L);}if(!!this.
A5&&!!this.W){var A0=-1;var Cz=0xFFFFFFFF;if(!D_){A0=this.Ht;Cz=this.W.Gi;}else if(
D$){A0=this.Hr;Cz=this.W.Ix;}else if(FA){A0=this.Hu;Cz=this.W.Iy;}else{A0=this.Hs;
Cz=this.W.Gh;}this.A5.Dx(A0<0);if(A0<0)A0=0;this.A5.Am([S[0]+this.W.Ge,S[1]+this.
W.Gg,S[2]-this.W.Gf,S[3]-this.W.Gd]);this.A5.E5(this.W.Iw);this.A5.DX(this.E1);this.
A5.E7(A0);this.A5.Cj(Cz);}else if(!!this.A5){var A0=-1;if(!D_){A0=this.Ht;}else if(
D$){A0=this.Hr;}else if(FA){A0=this.Hu;}else{A0=this.Hs;}this.A5.Am(S);this.A5.E5(
0x12);this.A5.DX(this.E1);this.A5.E7(A0);this.A5.Cj(0xFFFFFFFF);}if(!!this.Bs){var
Cz=0xFFFFFFFF;if(!D_)Cz=this.W.Gn;else if(D$)Cz=this.W.Gl;else if(FA)Cz=this.W.Go;
else Cz=this.W.Gm;this.Bs.Am([S[0]+this.W.Gq,S[1]+this.W.Gs,S[2]-this.W.Gr,S[3]-
this.W.Gp]);this.Bs.E5(this.W.IB);this.Bs.I8(true);this.Bs.IG(true);this.Bs.Gv(this.
W.Ej);this.Bs.En(this.E3);this.Bs.Cj(Cz);}},G4:function(Az){var H6=this.AJ.C_;if(
!!this.W)this.AJ.C_=this.W.KeyCode;else this.AJ.C_=149;if(!H6&&!!this.AJ.C_)this.
A7(0x4,0x0);if(!!H6&&!this.AJ.C_)this.A7(0x0,0x4);if(!!this.W)this.Am(this.O);this.
Cu();},G5:function(Az){this.Cu();B.kD(this.BF,this);},Jy:function(Az){var DP=0;if(
!!this.W)DP=this.W.HJ;this.Ab.BG(true);B.kD(this.Db,this);B.kD(this.Ci,this);this.
Cu();if(((this.AJ.AG-this.G7)|0)>=DP)B.kD(this.BF,this);else{this.Av.E6(DP-((this.
AJ.AG-this.G7)|0));this.Av.BG(true);}},G6:function(Az){this.Ab.BG(false);this.Cu(
);if(this.Av.BM){B.kD(this.BF,this);this.Av.BG(false);}this.G7=this.AJ.AG;B.kD(this.
B4,this);B.kD(this.Da,this);},Jx:function(Az){this.Cu();B.kD(this.Db,this);},Jw:
function(Az){this.Cu();B.kD(this.Da,this);},G9:function(Az){var DP=0;if(!!this.W
)DP=this.W.HJ;this.AJ.BM=true;B.kD(this.Ci,this);if(!this.Ab.CG)return;if(this.Ab.
Co)return;if(this.Ab.Bt>=DP)B.kD(this.BF,this);else{this.Av.E6(DP-this.Ab.Bt);this.
Av.BG(true);}},G8:function(Az){this.AJ.BM=false;if(this.Av.BM){B.kD(this.BF,this
);this.Av.BG(false);}B.kD(this.B4,this);},HF:function(value){if(this.E3===value)
return;this.E3=value;this.Cu();},IE:function(value){if(this.W===value)return;if(
!!this.W)B.rA([this,this.G4],this.W,0);this.W=value;if(!!value)B.rl([this,this.G4
],value,0);B.kD([this,this.G4],this);},_Init:function(aArg){B.Core.Ah._Init.call(
this,aArg);B.Core.Timer._Init.call(this.Av={Af:this},0);B.Core.Dv._Init.call(this.
AJ={Af:this},0);B.Core.Fj._Init.call(this.Ab={Af:this},0);this.__proto__=C.AK;this.
Am(AF);this.Av.E9(0);this.Av.E6(50);this.AJ.C_=149;this.Ab.HG(0x3F);this.Ab.Fb(BH
);this.Ab.Fa(BW);this.Ab.E$(BX);this.Ab.E_(CX);this.Ab.I5(16);this.Ab.HH(100);this.
Bi(this.Ab,0);this.Av.Eo=[this,this.G5];this.AJ.Ci=[this,this.Jy];this.AJ.B4=[this
,this.G6];this.Ab.Db=[this,this.Jx];this.Ab.Da=[this,this.Jw];this.Ab.Ci=[this,this.
G9];this.Ab.B4=[this,this.G8];},_Done:function(){this.__proto__=C.AK;this.Av._Done(
);this.AJ._Done();this.Ab._Done();B.Core.Ah._Done.call(this);},_ReInit:function(
){B.Core.Ah._ReInit.call(this);this.Av._ReInit();this.AJ._ReInit();this.Ab._ReInit(
);},_Mark:function(D){var A;B.Core.Ah._Mark.call(this,D);if((A=this.Bs)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.A5)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.BQ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Av)._cycle!=D)A._Mark(A._cycle=
D);if((A=this.AJ)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Ab)._cycle!=D)A._Mark(
A._cycle=D);if((A=this.Db)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Da)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ci)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.B4)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.BF)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.E1)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"WidgetSet::PushButton"};
C._Init=function(){C.Gx.__proto__=C.Ew;C.AK.__proto__=B.Core.Ah;};C.AO=function(D
){var A;if((A=C.D0[0]._this)&&(A._cycle!=D))A._Done(C.D0[0]._this=null);if((A=C.
Gy._this)&&(A._cycle!=D))A._Done(C.Gy._this=null);};return C;})();

/* Embedded Wizard */