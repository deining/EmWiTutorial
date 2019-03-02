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
);if(index.Core)throw new Error("The unit file 'Core.js' included twice!");index.
Core=(function(){var B=index;var C={};
var Ai=[0,0];var AF=[0,0,0,0];var BH="The view does not belong to this group";var
BW="No view to restack";var BX="View is not in this group";var CX="Sibling view does not belong to the group";
var DB="No view to remove";var GE="No view to add";var GF="View already in a group";
var GG="Recursive invalidate during active update cycle.";var GH="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";
C.Bu={Y:null,R:null,G:null,E:0x103,Ao:null,Ch:0x14,EE:function(T,Fn){},HG:function(
value){var A;var CL=value^this.Ch;if(!CL)return;this.Ch=value;if(!!this.Ao&&!((this.
E&0x400)===0x400)){this.G.E=this.G.E|0x5000;B.kD([A=this.G,A.A1],this);this.G.Ag([
0,0,(A=this.G.O)[2]-A[0],A[3]-A[1]]);}if(!!this.Ao&&((this.E&0x400)===0x400)){this.
Ao.DN.E=this.Ao.DN.E|0x1000;this.G.E=this.G.E|0x4000;B.kD([A=this.G,A.A1],this);
}},DV:function(){var V=this.G;while(!!V){var H$=(C.Root.isPrototypeOf(V)?V:null);
if(!!H$)return H$;V=V.G;}return null;},B2:function(Ar,aClip,aOffset,Aq,aBlend){}
,A2:function(Aa){return null;},CR:function(Ad,J,BI,D4,DF){return null;},ET:function(
T,BZ){return Ai;},Gt:function(aOffset,Fm){},GetExtent:function(){return AF;},A7:
function(CY,DE){var A;if(((this.E&0x200)===0x200))CY=CY&~0x400;var G3=(this.E&~DE
)|CY;var Dk=G3^this.E;this.E=G3;if(!!this.G&&!!(Dk&0x14)){var HZ=((this.E&0x14)===
0x14);if(HZ&&!this.G.B3)this.G.Dc(this);if(!HZ&&(this.G.B3===this))this.G.Dc(this.
G.Hm(this,0x14));}if(!!this.G&&!!(Dk&0x403))this.G.Ag(this.GetExtent());if((!!this.
Ao&&((G3&0x400)===0x400))&&((Dk&0x1)===0x1)){this.E=this.E|0x800;this.G.E=this.G.
E|0x4000;B.kD([A=this.G,A.A1],this);}if(!!this.G&&((Dk&0x400)===0x400)){this.Ao=
null;this.E=this.E|0x800;this.G.E=this.G.E|0x4000;B.kD([A=this.G,A.A1],this);}},
_Init:function(aArg){this.__proto__=C.Bu;B.gb++;},_Done:function(){this.__proto__=
C.Bu;B.gb--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Y)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.R)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ao)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Af)&&(A._cycle!=D))A._Mark(A._cycle=D);},Af:null,_cycle:0
,_observers:null,_className:"Core::View"};C.Er={A4:B.pm,Bq:B.pm,A3:B.pm,Bp:B.pm,
EE:function(T,Fn){var U=B._NewObject(C.E4,0);this.Ao=null;U.By=this.GetExtent();
U.Z=T;U.DN=Fn;U.EJ=this.Bp;U.EK=this.A3;U.EL=this.Bq;U.EM=this.A4;this.Ao=U;},ET:
function(T,BZ){var A;var Ay=this.Ch;var U=(C.E4.isPrototypeOf(A=this.Ao)?A:null);
var M=U.By[0];var N=U.By[1];var P=U.By[2];var Q=U.By[3];var Bx=[T[2]-T[0],T[3]-T[
1]];var Ap=P-M;var An=Q-N;if(!BZ){var Ca=[(A=U.Z)[2]-A[0],A[3]-A[1]];M=M-U.Z[0];
N=N-U.Z[1];if(Ca[0]!==Bx[0]){var Bb=((Ay&0x4)===0x4);var Bc=((Ay&0x8)===0x8);var
CD=((Ay&0x1)===0x1);if(!Bb&&(CD||!Bc))M=((M*Bx[0])/Ca[0])|0;if(!Bc&&(CD||!Bb)){P=
P-U.Z[0];P=((P*Bx[0])/Ca[0])|0;P=P-Bx[0];}else P=P-U.Z[2];M=M+T[0];P=P+T[2];if(!
CD){if(Bb&&!Bc)P=M+Ap;else if(!Bb&&Bc)M=P-Ap;else{M=M+((((P-M)-Ap)/2)|0);P=M+Ap;
}}}else{P=P-U.Z[2];M=M+T[0];P=P+T[2];}if(Ca[1]!==Bx[1]){var Bd=((Ay&0x10)===0x10
);var Ba=((Ay&0x20)===0x20);var CE=((Ay&0x2)===0x2);if(!Bd&&(CE||!Ba))N=((N*Bx[1
])/Ca[1])|0;if(!Ba&&(CE||!Bd)){Q=Q-U.Z[1];Q=((Q*Bx[1])/Ca[1])|0;Q=Q-Bx[1];}else Q=
Q-U.Z[3];N=N+T[1];Q=Q+T[3];if(!CE){if(Bd&&!Ba)Q=N+An;else if(!Bd&&Ba)N=Q-An;else{
N=N+((((Q-N)-An)/2)|0);Q=N+An;}}}else{Q=Q-U.Z[3];N=N+T[1];Q=Q+T[3];}}else{switch(
BZ){case 3:{M=T[0];P=M+Ap;}break;case 4:{P=T[2];M=P-Ap;}break;case 1:{N=T[1];Q=N+
An;}break;case 2:{Q=T[3];N=Q-An;}break;default:;}if((BZ===3)||(BZ===4)){var Bd=((
Ay&0x10)===0x10);var Ba=((Ay&0x20)===0x20);var CE=((Ay&0x2)===0x2);if(CE){N=T[1];
Q=T[3];}else if(Bd&&!Ba){N=T[1];Q=N+An;}else if(Ba&&!Bd){Q=T[3];N=Q-An;}else{N=T[
1]+((((T[3]-T[1])-An)/2)|0);Q=N+An;}}if((BZ===1)||(BZ===2)){var Bb=((Ay&0x4)===0x4
);var Bc=((Ay&0x8)===0x8);var CD=((Ay&0x1)===0x1);if(CD){M=T[0];P=T[2];}else if(
Bb&&!Bc){M=T[0];P=M+Ap;}else if(Bc&&!Bb){P=T[2];M=P-Ap;}else{M=T[0]+((((T[2]-T[0
])-Ap)/2)|0);P=M+Ap;}}}U.isEmpty=(M>=P)||(N>=Q);Ap=(P-M)-1;An=(Q-N)-1;var C0=U.By[
0];var C1=U.By[1];var CN=(U.By[2]-C0)-1;var CM=(U.By[3]-C1)-1;if(!CN)CN=1;if(!CM
)CM=1;if(((this.E&0x100)===0x100)){this.Bp=[M+((((U.EJ[0]-C0)*Ap)/CN)|0),N+((((U.
EJ[1]-C1)*An)/CM)|0)];this.A3=[M+((((U.EK[0]-C0)*Ap)/CN)|0),N+((((U.EK[1]-C1)*An
)/CM)|0)];this.Bq=[M+((((U.EL[0]-C0)*Ap)/CN)|0),N+((((U.EL[1]-C1)*An)/CM)|0)];this.
A4=[M+((((U.EM[0]-C0)*Ap)/CN)|0),N+((((U.EM[1]-C1)*An)/CM)|0)];}else{this.E_([M+((((
U.EJ[0]-C0)*Ap)/CN)|0),N+((((U.EJ[1]-C1)*An)/CM)|0)]);this.E$([M+((((U.EK[0]-C0)
*Ap)/CN)|0),N+((((U.EK[1]-C1)*An)/CM)|0)]);this.Fa([M+((((U.EL[0]-C0)*Ap)/CN)|0)
,N+((((U.EL[1]-C1)*An)/CM)|0)]);this.Fb([M+((((U.EM[0]-C0)*Ap)/CN)|0),N+((((U.EM[
1]-C1)*An)/CM)|0)]);this.Ao=U;}return[Ap+1,An+1];},Gt:function(aOffset,Fm){if(Fm
){this.Bp=B.so(this.Bp,aOffset);this.A3=B.so(this.A3,aOffset);this.Bq=B.so(this.
Bq,aOffset);this.A4=B.so(this.A4,aOffset);}else{this.E_(B.so(this.Bp,aOffset));this.
E$(B.so(this.A3,aOffset));this.Fa(B.so(this.Bq,aOffset));this.Fb(B.so(this.A4,aOffset
));}},GetExtent:function(){if(!!this.Ao&&this.Ao.isEmpty)return AF;var M=this.Bp[
0];var N=this.Bp[1];var P=this.Bq[0];var Q=this.Bq[1];if((((this.A4[0]!==M)||(this.
A3[1]!==N))||(this.A3[0]!==P))||(this.A4[1]!==Q)){if(this.A3[0]<M)M=this.A3[0];if(
this.Bq[0]<M)M=this.Bq[0];if(this.A4[0]<M)M=this.A4[0];if(this.A3[1]<N)N=this.A3[
1];if(this.Bq[1]<N)N=this.Bq[1];if(this.A4[1]<N)N=this.A4[1];if(this.Bp[0]>P)P=this.
Bp[0];if(this.A3[0]>P)P=this.A3[0];if(this.A4[0]>P)P=this.A4[0];if(this.Bp[1]>Q)
Q=this.Bp[1];if(this.A3[1]>Q)Q=this.A3[1];if(this.A4[1]>Q)Q=this.A4[1];}else{var
tmp;if(P<M){tmp=M;M=P;P=tmp;}if(Q<N){tmp=N;N=Q;Q=tmp;}}return[M,N,P+1,Q+1];},Fb:
function(value){var A;if(B.sa(value,this.A4))return;if(!!this.G&&((this.E&0x1)===
0x1))this.G.Ag(this.GetExtent());this.Ao=null;this.A4=value;if(!!this.G&&((this.
E&0x1)===0x1))this.G.Ag(this.GetExtent());if((!!this.G&&((this.E&0x400)===0x400)
)&&!((this.G.E&0x2000)===0x2000)){this.E=this.E|0x800;this.G.E=this.G.E|0x4000;B.
kD([A=this.G,A.A1],this);}},Fa:function(value){var A;if(B.sa(value,this.Bq))return;
if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.GetExtent());this.Ao=null;this.
Bq=value;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.GetExtent());if((!!this.
G&&((this.E&0x400)===0x400))&&!((this.G.E&0x2000)===0x2000)){this.E=this.E|0x800;
this.G.E=this.G.E|0x4000;B.kD([A=this.G,A.A1],this);}},E$:function(value){var A;
if(B.sa(value,this.A3))return;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.GetExtent(
));this.Ao=null;this.A3=value;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.GetExtent(
));if((!!this.G&&((this.E&0x400)===0x400))&&!((this.G.E&0x2000)===0x2000)){this.
E=this.E|0x800;this.G.E=this.G.E|0x4000;B.kD([A=this.G,A.A1],this);}},E_:function(
value){var A;if(B.sa(value,this.Bp))return;if(!!this.G&&((this.E&0x1)===0x1))this.
G.Ag(this.GetExtent());this.Ao=null;this.Bp=value;if(!!this.G&&((this.E&0x1)===0x1
))this.G.Ag(this.GetExtent());if((!!this.G&&((this.E&0x400)===0x400))&&!((this.G.
E&0x2000)===0x2000)){this.E=this.E|0x800;this.G.E=this.G.E|0x4000;B.kD([A=this.G
,A.A1],this);}},Gk:function(Cy){var Au=B.sr(4,B.pm,null);var I=0;var Ax=3;var GY=
false;var GZ=false;Au.Set(0,this.Bp);Au.Set(1,this.A3);Au.Set(2,this.Bq);Au.Set(
3,this.A4);while(I<4){var Ie=Au.Get(I)[0];var FP=Au.Get(I)[1];var JF=Au.Get(Ax)[
0];var Hf=Au.Get(Ax)[1];if(((FP>Cy[1])!==(Hf>Cy[1]))||((FP<Cy[1])!==(Hf<Cy[1]))){
var If=((((JF-Ie)*(Cy[1]-FP))/(Hf-FP))|0)+Ie;if(Cy[0]>If)GY=!GY;if(Cy[0]<If)GZ=!
GZ;}Ax=I;I=I+1;}return GY||GZ;},Iv:function(){return((((this.Bp[0]===this.A4[0])&&(
this.A3[0]===this.Bq[0]))&&(this.Bp[1]===this.A3[1]))&&(this.Bq[1]===this.A4[1])
)||((((this.Bp[0]===this.A3[0])&&(this.Bq[0]===this.A4[0]))&&(this.Bp[1]===this.
A4[1]))&&(this.A3[1]===this.Bq[1]));},_Init:function(aArg){C.Bu._Init.call(this,
aArg);this.__proto__=C.Er;},_className:"Core::QuadView"};C.AN={O:B.pn,EE:function(
T,Fn){var U=B._NewObject(C.Ek,0);U.By=this.O;U.Z=T;U.DN=Fn;this.Ao=U;},ET:function(
T,BZ){var A;var Ay=this.Ch;var U=this.Ao;var M=U.By[0];var N=U.By[1];var P=U.By[
2];var Q=U.By[3];var Bx=[T[2]-T[0],T[3]-T[1]];var Ap=P-M;var An=Q-N;if(!BZ){var Ca=[(
A=U.Z)[2]-A[0],A[3]-A[1]];M=M-U.Z[0];N=N-U.Z[1];if(Ca[0]!==Bx[0]){var Bb=((Ay&0x4
)===0x4);var Bc=((Ay&0x8)===0x8);var CD=((Ay&0x1)===0x1);if(!Bb&&(CD||!Bc))M=((M
*Bx[0])/Ca[0])|0;if(!Bc&&(CD||!Bb)){P=P-U.Z[0];P=((P*Bx[0])/Ca[0])|0;P=P-Bx[0];}
else P=P-U.Z[2];M=M+T[0];P=P+T[2];if(!CD){if(Bb&&!Bc)P=M+Ap;else if(!Bb&&Bc)M=P-
Ap;else{M=M+((((P-M)-Ap)/2)|0);P=M+Ap;}}}else{P=P-U.Z[2];M=M+T[0];P=P+T[2];}if(Ca[
1]!==Bx[1]){var Bd=((Ay&0x10)===0x10);var Ba=((Ay&0x20)===0x20);var CE=((Ay&0x2)===
0x2);if(!Bd&&(CE||!Ba))N=((N*Bx[1])/Ca[1])|0;if(!Ba&&(CE||!Bd)){Q=Q-U.Z[1];Q=((Q
*Bx[1])/Ca[1])|0;Q=Q-Bx[1];}else Q=Q-U.Z[3];N=N+T[1];Q=Q+T[3];if(!CE){if(Bd&&!Ba
)Q=N+An;else if(!Bd&&Ba)N=Q-An;else{N=N+((((Q-N)-An)/2)|0);Q=N+An;}}}else{Q=Q-U.
Z[3];N=N+T[1];Q=Q+T[3];}}else{switch(BZ){case 3:{M=T[0];P=M+Ap;}break;case 4:{P=
T[2];M=P-Ap;}break;case 1:{N=T[1];Q=N+An;}break;case 2:{Q=T[3];N=Q-An;}break;default:;
}if((BZ===3)||(BZ===4)){var Bd=((Ay&0x10)===0x10);var Ba=((Ay&0x20)===0x20);var CE=((
Ay&0x2)===0x2);if(CE){N=T[1];Q=T[3];}else if(Bd&&!Ba){N=T[1];Q=N+An;}else if(Ba&&
!Bd){Q=T[3];N=Q-An;}else{N=T[1]+((((T[3]-T[1])-An)/2)|0);Q=N+An;}}if((BZ===1)||(
BZ===2)){var Bb=((Ay&0x4)===0x4);var Bc=((Ay&0x8)===0x8);var CD=((Ay&0x1)===0x1);
if(CD){M=T[0];P=T[2];}else if(Bb&&!Bc){M=T[0];P=M+Ap;}else if(Bc&&!Bb){P=T[2];M=
P-Ap;}else{M=T[0]+((((T[2]-T[0])-Ap)/2)|0);P=M+Ap;}}}U.isEmpty=(M>=P)||(N>=Q);if(((
this.E&0x100)===0x100)){this.O=[M,N,P,Q];}else{this.Am([M,N,P,Q]);this.Ao=U;}return[
P-M,Q-N];},Gt:function(aOffset,Fm){if(Fm)this.O=B.sq(this.O,aOffset);else this.Am(
B.sq(this.O,aOffset));},GetExtent:function(){return this.O;},Am:function(value){
var A;if(B.sb(value,this.O))return;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.
O);this.Ao=null;this.O=value;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.O);
if((!!this.G&&((this.E&0x400)===0x400))&&!((this.G.E&0x2000)===0x2000)){this.E=this.
E|0x800;this.G.E=this.G.E|0x4000;B.kD([A=this.G,A.A1],this);}},_Init:function(aArg
){C.Bu._Init.call(this,aArg);this.__proto__=C.AN;},_className:"Core::RectView"};
C.Ah={Bl:null,A6:null,FC:null,B0:null,Dl:null,DJ:null,B3:null,Dy:255,B2:function(
Ar,aClip,aOffset,Aq,aBlend){var A;Aq=((Aq+1)*this.Dy)>>8;aBlend=aBlend&&((this.E&
0x2)===0x2);if(!this.B0)this.Js(Ar,aClip,B.so(aOffset,this.O.slice(0,2)),Aq,aBlend
);else{var Bv=255|(255<<8)|(255<<16)|((Aq&0xFF)<<24);this.B0.Update();Ar.Hg(aClip
,this.B0,0,B.sq(this.O,aOffset),Ai,Bv,Bv,Bv,Bv,aBlend);}},CR:function(Ad,J,BI,D4
,DF){var A;var H=this.A6;var DL=null;var S=AF;var Bm=null;var G2=!!this.DJ&&(!!this.
DJ.GT||!!this.DJ.Bl);if(((A=B.hV(Ad,this.O))[0]>=A[2])||(A[1]>=A[3]))return null;
Ad=B.sp(Ad,this.O.slice(0,2));while(!!H){if(((H.E&0x400)===0x400)&&!Bm){Bm=H.R;while(
!!Bm&&!((Bm.E&0x200)===0x200))Bm=Bm.R;if(!!Bm)S=B.hV(Ad,Bm.GetExtent());else S=AF;
}if(Bm===H){Bm=null;S=AF;}if((((((H.E&0x8)===0x8)&&((H.E&0x10)===0x10))&&!((H.E&
0x40000)===0x40000))&&!((H.E&0x20000)===0x20000))&&(!((H.E&0x10000)===0x10000)||((
this.Dl.BK===H)&&!G2))){var By=H.GetExtent();var Ft=D4;var DH=null;if(Ft===H)Ft=
null;if(((H.E&0x400)===0x400)){if(!(((A=B.hV(By,S))[0]>=A[2])||(A[1]>=A[3])))DH=
H.CR(S,J,BI,Ft,DF);}else{if(!(((A=B.hV(By,Ad))[0]>=A[2])||(A[1]>=A[3]))||(D4===H
))DH=H.CR(Ad,J,BI,Ft,DF);}H=H.R;if(!!DH){if(!DL||((DH.Ec<DL.Ec)&&(DH.Ec>=0)))DL=
DH;if(!DH.Ec)H=null;}}else H=H.R;}return DL;},A7:function(CY,DE){var A;var Jv=this.
E;C.AN.A7.call(this,CY,DE);var Dk=this.E^Jv;if(!!this.B3&&((Dk&0x40)===0x40)){if(((
this.E&0x40)===0x40))this.B3.A7(0x40,0x0);else this.B3.A7(0x0,0x40);}if(!!this.Dl&&((
Dk&0x40)===0x40)){if(((this.E&0x40)===0x40)&&((this.Dl.BK.E&0x14)===0x14))this.Dl.
BK.A7(0x40,0x0);else this.Dl.BK.A7(0x0,0x40);}if(!!Dk){this.E=this.E|0x8000;B.kD([
this,this.A1],this);}},Am:function(value){var A;if(B.sb(value,this.O))return;var
Dp=[(A=this.O)[2]-A[0],A[3]-A[1]];var FG=[value[2]-value[0],value[3]-value[1]];var
DQ=!B.sa(Dp,FG);if(DQ&&!!this.B0){this.B0.Gw(FG);B.pl(this,0);B.pl(this.B0,0);}C.
AN.Am.call(this,value);if((DQ&&(Dp[0]>0))&&(Dp[1]>0)){var Z=[].concat(Ai,Dp);var
H=this.Bl;var EC=0x14;while(!!H){if((!H.Ao&&(H.Ch!==EC))&&!((H.E&0x400)===0x400)
)H.EE(Z,null);H=H.Y;}}if(DQ){this.E=this.E|0x5000;B.kD([this,this.A1],this);}},G$:
function(Aa){var H1=(C.KeyEvent.isPrototypeOf(Aa)?Aa:null);var Cm=this.FC;if(!H1
)return null;while(!!Cm&&(!Cm.BM||!Cm.A2(H1)))Cm=Cm.Y;return Cm;},Js:function(Ar
,aClip,aOffset,Aq,aBlend){var A;var H=this.Bl;var HX=AF;var H9=true;while(!!H){if(((
H.E&0x200)===0x200)){var H8=(C.Ep.isPrototypeOf(H)?H:null);HX=B.hV(aClip,B.sq(H8.
O,aOffset));H9=((H8.E&0x1)===0x1);}if(((H.E&0x1)===0x1)){if(((H.E&0x400)===0x400
)){if(H9){var S=B.hV(B.sq(H.GetExtent(),aOffset),HX);if(!((S[0]>=S[2])||(S[1]>=S[
3])))H.B2(Ar,S,aOffset,Aq,aBlend);}}else{var S=B.hV(B.sq(H.GetExtent(),aOffset),
aClip);if(!((S[0]>=S[2])||(S[1]>=S[3])))H.B2(Ar,S,aOffset,Aq,aBlend);}}H=H.Y;}},
JB:function(){var A;var GW=((this.E&0x1000)===0x1000);var C2=[0,0,(A=this.O)[2]-
A[0],A[3]-A[1]];var CO=false;var DK=AF;var Fv=Ai;var ED=0;var Fu=0;var H=this.A6;
var Bm=null;var EC=0x14;while(!!H){if(((H.E&0x800)===0x800)){CO=true;H.E=H.E&~0x800;
}if(CO&&((H.E&0x200)===0x200)){CO=false;if(!!(C.Ep.isPrototypeOf(H)?H:null).EZ)H.
E=H.E|0x1000;}H=H.R;}CO=false;H=this.Bl;if(GW){this.E=this.E&~0x1000;GW=!((C2[0]>=
C2[2])||(C2[1]>=C2[3]));}this.E=this.E|0x2000;while(!!H){if(((H.E&0x400)===0x400
)){if(!!H.Ao&&(H.Ao.DN!==Bm))H.Ao=null;if((!H.Ao&&CO)&&((H.Ch!==EC)||!!Fu))H.EE(
DK,Bm);}if(!!H.Ao){if(GW&&!((H.E&0x400)===0x400))H.ET(C2,0);if(CO&&((H.E&0x400)===
0x400)){var AM=H.ET(B.sq(DK,Fv),Fu);if(((H.E&0x1)===0x1)){var BT=Ai;switch(Fu){case
3:BT=[AM[0]+ED,BT[1]];break;case 4:BT=[-AM[0]-ED,BT[1]];break;case 1:BT=[BT[0],AM[
1]+ED];break;case 2:BT=[BT[0],-AM[1]-ED];break;default:;}Fv=B.so(Fv,BT);}}}if(((
H.E&0x200)===0x200)){CO=((H.E&0x1000)===0x1000);Bm=(C.Ep.isPrototypeOf(H)?H:null
);if(CO){H.E=H.E&~0x1000;DK=B.sq(Bm.O,Bm.CH);Fv=Ai;Fu=Bm.EZ;ED=Bm.Space;CO=!((DK[
0]>=DK[2])||(DK[1]>=DK[3]));}if(CO){this.Ag(Bm.O);}}H=H.Y;}this.E=this.E&~0x2000;
this.HO([C2[2]-C2[0],C2[3]-C2[1]]);},A1:function(Az){var A;var JE=((this.E&0x1000
)===0x1000);if(((this.E&0x4000)===0x4000)){this.E=this.E&~0x4000;this.JB();}if(((
this.E&0x8000)===0x8000)||JE){this.E=this.E&~0x8000;this.Ev(this.E);}},Dc:function(
value){var A;if(!!value&&(value.G!==this))throw new Error(BH);if(!!value&&!((value.
E&0x14)===0x14))value=null;if(!!value&&((value.E&0x10000)===0x10000))value=null;
if(value===this.B3)return;if(!!this.B3)this.B3.A7(0x0,0x60);this.B3=value;if(!!value
){if(((this.E&0x40)===0x40))value.A7(0x60,0x0);else value.A7(0x20,0x0);}},Hy:function(
Cy){var tmp=this;while(!!tmp){Cy=B.sn(Cy,tmp.O.slice(0,2));tmp=tmp.G;}return Cy;
},DispatchEvent:function(Aa){var A;var H=this.B3;var V=(C.Ah.isPrototypeOf(H)?H:
null);var Aj=null;var G2=!!this.DJ&&(!!this.DJ.GT||!!this.DJ.Bl);if(!!H&&((((H.E&
0x10000)===0x10000)||((H.E&0x40000)===0x40000))||((H.E&0x20000)===0x20000))){H=null;
V=null;}if(!!this.Dl&&!G2)Aj=this.Dl.BK.DispatchEvent(Aa);if(!Aj&&!!V)Aj=V.DispatchEvent(
Aa);else if(!Aj&&!!H)Aj=H.A2(Aa);if(!Aj)Aj=this.A2(Aa);if(!Aj)Aj=this.G$(Aa);return Aj;
},BroadcastEventAtPosition:function(Aa,HS,aFilter){var A;var H=this.A6;var Aj=null;
while(!!H&&!Aj){if((!aFilter||((A=aFilter)&&((H.E&A)===A)))&&B.se(H.GetExtent(),
HS)){var V=(C.Ah.isPrototypeOf(H)?H:null);if(!!V)Aj=V.BroadcastEventAtPosition(Aa
,B.sn(HS,V.O.slice(0,2)),aFilter);else Aj=H.A2(Aa);}H=H.R;}if(!Aj)Aj=this.A2(Aa);
return Aj;},BroadcastEvent:function(Aa,aFilter){var A;var H=this.A6;var Aj=null;
while(!!H&&!Aj){if(!aFilter||((A=aFilter)&&((H.E&A)===A))){var V=(C.Ah.isPrototypeOf(
H)?H:null);if(!!V)Aj=V.BroadcastEvent(Aa,aFilter);else Aj=H.A2(Aa);}H=H.R;}if(!Aj
)Aj=this.A2(Aa);if(!Aj)Aj=this.G$(Aa);return Aj;},HO:function(aSize){},Ev:function(
Dg){},Cu:function(){this.E=this.E|0x8000;B.kD([this,this.A1],this);},Ag:function(
Ad){var A;var V=this;while(!!V&&!((Ad[0]>=Ad[2])||(Ad[1]>=Ad[3]))){var D6=V.B0;if(
!V.G&&(V!==this)){V.Ag(Ad);return;}if(!!D6){if(((A=D6.Ct)[0]>=A[2])||(A[1]>=A[3]
)){B.pl(V,0);B.pl(D6,0);}var GV=false;if(GV)D6.Ct=[0,0,(A=V.O)[2]-A[0],A[3]-A[1]
];else D6.Ct=B.pA(D6.Ct,Ad);}if(!((V.E&0x1)===0x1))return;Ad=B.hV(B.sq(Ad,V.O.slice(
0,2)),V.O);V=V.G;}},BO:function(aArg){this.Cu();},Hm:function(F,aFilter){var A;if(
!F||(F.G!==this))return null;var Do=F.Y;var Dq=F.R;var EH=0x10000;if(((aFilter&0x10000
)===0x10000))EH=0x0;while(!!Do||!!Dq){if((!!Do&&(!aFilter||((A=aFilter)&&((Do.E&
A)===A))))&&(!EH||!((A=EH)&&((Do.E&A)===A))))return Do;if((!!Dq&&(!aFilter||((A=
aFilter)&&((Dq.E&A)===A))))&&(!EH||!((A=EH)&&((Dq.E&A)===A))))return Dq;if(!!Do)
Do=Do.Y;if(!!Dq)Dq=Dq.R;}return null;},GB:function(F,Cl){var A;if(!F)throw new Error(
BW);if(F.G!==this)throw new Error(BX);if(!!Cl&&(Cl.G!==this))throw new Error(CX);
if(F.Y===Cl)return;if(((F.E&0x401)===0x401)){if(!!F.R&&!!F.Ao)F.R.E=F.R.E|0x800;
F.E=F.E|0x800;this.E=this.E|0x4000;B.kD([this,this.A1],this);}if(((F.E&0x200)===
0x200)){if(!!F.R)F.R.E=F.R.E|0x800;F.E=F.E|0x800;this.E=this.E|0x4000;B.kD([this
,this.A1],this);}if(!!F.Y)F.Y.R=F.R;else this.A6=F.R;if(!!F.R)F.R.Y=F.Y;else this.
Bl=F.Y;if(!Cl){if(!!this.A6)this.A6.Y=F;F.R=this.A6;F.Y=null;this.A6=F;}else{F.Y=
Cl;F.R=Cl.R;Cl.R=F;if(!!F.R)F.R.Y=F;}if(this.Bl===Cl)this.Bl=F;if(((F.E&0x1)===0x1
))this.Ag(F.GetExtent());},Es:function(F){var A;if(!F)throw new Error(BW);if(F.G
!==this)throw new Error(BX);if(!F.Y)return;if(((F.E&0x401)===0x401)){if(!!F.R&&!
!F.Ao)F.R.E=F.R.E|0x800;F.E=F.E|0x800;this.E=this.E|0x4000;B.kD([this,this.A1],this
);}if(((F.E&0x200)===0x200)){if(!!F.R)F.R.E=F.R.E|0x800;this.E=this.E|0x4000;B.kD([
this,this.A1],this);}if(!!F.R)F.R.Y=F.Y;else this.Bl=F.Y;F.Y.R=F.R;F.R=this.A6;F.
Y=null;this.A6.Y=F;this.A6=F;if(((F.E&0x1)===0x1))this.Ag(F.GetExtent());},GA:function(
F,Bj){var A;if(!F)throw new Error(BW);if(F.G!==this)throw new Error(BX);var Dh=F;
var Di=F;while((Bj>0)&&!!Dh.Y){Dh=Dh.Y;Bj=Bj-1;}while((Bj<0)&&!!Di.R){Di=Di.R;Bj=
Bj+1;}if((Dh===F)&&(Di===F))return;if(((F.E&0x401)===0x401)){if(!!F.R&&!!F.Ao)F.
R.E=F.R.E|0x800;F.E=F.E|0x800;this.E=this.E|0x4000;B.kD([this,this.A1],this);}if(((
F.E&0x200)===0x200)){if(!!F.R)F.R.E=F.R.E|0x800;F.E=F.E|0x800;this.E=this.E|0x4000;
B.kD([this,this.A1],this);}if(!!F.R)F.R.Y=F.Y;if(!!F.Y)F.Y.R=F.R;if(this.Bl===F)
this.Bl=F.Y;if(this.A6===F)this.A6=F.R;if(Dh!==F){F.Y=Dh.Y;F.R=Dh;Dh.Y=F;if(!!F.
Y)F.Y.R=F;}if(Di!==F){F.Y=Di;F.R=Di.R;Di.R=F;if(!!F.R)F.R.Y=F;}if(!F.Y)this.A6=F;
if(!F.R)this.Bl=F;if(((F.E&0x1)===0x1))this.Ag(F.GetExtent());},Gz:function(F){var
A;if(!F)throw new Error(DB);if(F.G!==this)throw new Error(BX);if((((F.E&0x401)===
0x401)&&!!F.R)&&!!F.Ao){F.R.E=F.R.E|0x800;this.E=this.E|0x4000;B.kD([this,this.A1
],this);}if(((F.E&0x200)===0x200)){if(!!F.R)F.R.E=F.R.E|0x800;this.E=this.E|0x4000;
B.kD([this,this.A1],this);}F.Ao=null;if(this.B3===F)this.Dc(this.Hm(F,0x14));if(
!!F.R)F.R.Y=F.Y;if(!!F.Y)F.Y.R=F.R;if(this.Bl===F)this.Bl=F.Y;if(this.A6===F)this.
A6=F.R;F.G=null;F.Y=null;F.R=null;if(((F.E&0x1)===0x1))this.Ag(F.GetExtent());},
Bi:function(F,Bj){var A;if(!F)throw new Error(GE);if(!!F.G)throw new Error(GF);F.
G=this;F.R=this.A6;if(!!this.A6)this.A6.Y=F;this.A6=F;if(!this.Bl)this.Bl=F;if(!
!Bj)this.GA(F,Bj);if(((F.E&0x1)===0x1))this.Ag(F.GetExtent());if(((!this.B3&&((F.
E&0x4)===0x4))&&((F.E&0x10)===0x10))&&!((F.E&0x10000)===0x10000))this.Dc(F);if(((
F.E&0x401)===0x401)){F.E=F.E|0x800;this.E=this.E|0x4000;B.kD([this,this.A1],this
);}if(((F.E&0x200)===0x200)){F.E=F.E|0x800;this.E=this.E|0x4000;B.kD([this,this.
A1],this);}},_Init:function(aArg){C.AN._Init.call(this,aArg);this.__proto__=C.Ah;
this.E=0x1F;this.BO(aArg);},_Mark:function(D){var A;C.AN._Mark.call(this,D);if((
A=this.Bl)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.A6)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.FC)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.B0)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.Dl)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.DJ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.B3)&&(A._cycle!=D))
A._Mark(A._cycle=D);},_className:"Core::Group"};C.Root={BB:null,ER:0,GP:0,C4:null
,Aw:0,CK:null,AV:B.sr(10,0,null),Fs:B.sr(10,B.pn,null),B_:B.sr(10,0,null),CJ:B.sr(
10,B.pm,null),D9:B.sr(10,0,null),CA:null,CZ:B.sr(10,B.pm,null),As:B.sr(10,null,null
),B9:B.sr(10,B.pm,null),BJ:B.sr(10,B.pm,null),CB:B.sr(10,B.pm,null),Ae:0,Fx:0,Fw:
0,FE:B.sr(3,B.pn,null),H5:0,D7:null,Bn:B.sr(4,0,null),AT:B.sr(4,B.pn,null),AL:0,
AU:null,C9:8,Im:250,Dm:0,C3:0,GX:true,FD:false,DV:function(){return this;},B2:function(
Ar,aClip,aOffset,Aq,aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.i6;if(
!fullScreenUpdate)Ar.F0(aClip,B.sq(B.sq(aClip,aOffset),this.O.slice(0,2)),0x00000000
,0x00000000,0x00000000,0x00000000,false);C.Ah.B2.call(this,Ar,aClip,aOffset,Aq,aBlend
);},A7:function(CY,DE){var A;C.Ah.A7.call(this,CY,DE);if(!this.G&&(((CY&0x1)===0x1
)||((DE&0x1)===0x1)))this.Ag([0,0,(A=this.O)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((
CY&0x2)===0x2)||((DE&0x2)===0x2)))this.Ag([0,0,(A=this.O)[2]-A[0],A[3]-A[1]]);},
Dc:function(value){if((value!==this.AU)||!value)C.Ah.Dc.call(this,value);},DispatchEvent:
function(Aa){if((this.GP>0)&&!!(C.KeyEvent.isPrototypeOf(Aa)?Aa:null))return null;
if(!!Aa){Aa.Ei=!!this.Aw;if(!!this.Aw)Aa.AG=this.Aw;}var Aj=null;if(!!this.AU){Aj=
this.AU.DispatchEvent(Aa);if(!!Aj){this.Aw=0;return Aj;}}if(!!this.C4){Aj=this.C4.
BK.DispatchEvent(Aa);if(!Aj)Aj=this.A2(Aa);if(!Aj)Aj=this.G$(Aa);this.Aw=0;return Aj;
}Aj=C.Ah.DispatchEvent.call(this,Aa);this.Aw=0;return Aj;},BroadcastEvent:function(
Aa,aFilter){if(!!Aa){Aa.Ei=!!this.Aw;if(!!this.Aw)Aa.AG=this.Aw;}var Aj=C.Ah.BroadcastEvent.
call(this,Aa,aFilter);this.Aw=0;return Aj;},Ag:function(Ad){var A;if(this.ER>0)throw new
Error(GG);if(!!this.B0&&!this.G){if(((A=this.B0.Ct)[0]>=A[2])||(A[1]>=A[3])){B.pl(
this,0);B.pl(this.B0,0);}var GV=false;if(GV)this.B0.Ct=[0,0,(A=this.O)[2]-A[0],A[
3]-A[1]];else this.B0.Ct=B.pA(this.B0.Ct,Ad);}var fullScreenUpdate=false;fullScreenUpdate=
B.i6;if(fullScreenUpdate)Ad=[0,0,(A=this.O)[2]-A[0],A[3]-A[1]];if(!!this.G){C.Ah.
Ag.call(this,Ad);return;}Ad=B.hV(B.sq(Ad,this.O.slice(0,2)),this.O);if((Ad[0]>=Ad[
2])||(Ad[1]>=Ad[3]))return;var I;for(I=0;I<this.AL;I=I+1)if(!(((A=B.hV(this.AT.Get(
I),Ad))[0]>=A[2])||(A[1]>=A[3]))){this.AT.Set(I,B.pA(this.AT.Get(I),Ad));this.Bn.
Set(I,B.rY(this.AT.Get(I)));return;}if(this.AL<3){this.AT.Set(this.AL,Ad);this.Bn.
Set(this.AL,B.rY(Ad));this.AL=this.AL+1;return;}var Ax;var BA;var EF=0;var EG=0;
var HU=2147483647;this.AT.Set(this.AL,Ad);this.Bn.Set(this.AL,B.rY(Ad));for(Ax=0;
Ax<=this.AL;Ax=Ax+1)for(BA=Ax+1;BA<=this.AL;BA=BA+1){var FO=B.rY(B.pA(this.AT.Get(
Ax),this.AT.Get(BA)));var H_=((FO<<8)/(this.Bn.Get(Ax)+this.Bn.Get(BA)))|0;if(H_<
HU){HU=H_;EF=Ax;EG=BA;}}this.AT.Set(EF,B.pA(this.AT.Get(EF),this.AT.Get(EG)));this.
Bn.Set(EF,B.rY(this.AT.Get(EF)));if(EG!==this.AL){this.AT.Set(EG,this.AT.Get(this.
AL));this.Bn.Set(EG,this.Bn.Get(this.AL));}},GB:function(F,Cl){if((!Cl&&!!this.AU
)&&(this.AU.G===this))Cl=this.AU;C.Ah.GB.call(this,F,Cl);},Es:function(F){if(!!this.
AU&&(this.AU.G===this))this.GB(F,this.AU);else C.Ah.Es.call(this,F);},GA:function(
F,Bj){if(!F)throw new Error(BW);if(((Bj>0)&&!!this.AU)&&(this.AU.G===this)){var H=
F;var FH=Bj;while((H.Y!==this.AU)&&(FH>0)){H=H.Y;FH=FH-1;}Bj=Bj-FH;}C.Ah.GA.call(
this,F,Bj);},Bi:function(F,Bj){if(((Bj>=0)&&!!this.AU)&&(this.AU.G===this))Bj=-1;
C.Ah.Bi.call(this,F,Bj);},Jq:function(){var Bf=B._NewObject(C.EX,0);Bf.Ei=!!this.
Aw;if(!!this.Aw)Bf.AG=this.Aw;return Bf;},DG:function(){var Bf=B._NewObject(C.EV
,0);Bf.Ei=!!this.Aw;if(!!this.Aw)Bf.AG=this.Aw;return Bf;},D8:function(){var Bf=
B._NewObject(C.FR,0);Bf.Ei=!!this.Aw;if(!!this.Aw)Bf.AG=this.Aw;return Bf;},Jr:function(
Az){var I;var DL=false;for(I=0;I<10;I=I+1)if(!!this.As.Get(I)){var AS=this.BJ.Get(
I);var V=this.As.Get(I).G;while(!!V&&(V!==this)){AS=B.sn(AS,V.O.slice(0,2));V=V.
G;}if(!V&&(this.As.Get(I)!==this)){var tmp=this.As.Get(I);this.Ae=I;this.As.Set(
I,null);tmp.A2(this.DG().InitializeUp(I,this.CZ.Get(I),this.CJ.Get(I),this.B_.Get(
I),this.AV.Get(I)+1,this.B9.Get(I),false,this.BJ.Get(I),this.CB.Get(I)));if(tmp===
this.CA)this.CA=null;this.BroadcastEvent(this.D8().InitializeUp(I,this.AV.Get(I)+
1,false,tmp,this.BJ.Get(I)),0x18);}else{this.B_.Set(I,(this.CK.AG-this.D9.Get(I)
)|0);if(this.B_.Get(I)<10)this.B_.Set(I,10);this.Ae=I;this.As.Get(I).A2(this.DG(
).InitializeHold(I,AS,this.CJ.Get(I),this.B_.Get(I),this.AV.Get(I)+1,this.B9.Get(
I),this.BJ.Get(I),this.CB.Get(I)));DL=true;}}if(!DL)this.CK.BG(false);},GetFPS:function(
){var ticksCount=0;var H0=0;ticksCount=((new Date).getTime()-B.pk)|0;if(!!this.Fx&&(
ticksCount>this.Fx))H0=((this.Fw*1000)/((ticksCount-this.Fx)|0))|0;this.Fw=0;this.
Fx=ticksCount;return H0;},Update:function(){var A;if(!this.D7){this.D7=B._NewObject(
B.Graphics.Canvas,0);this.D7.Gw([(A=this.O)[2]-A[0],A[3]-A[1]]);}this.D7.Update(
);return this.UpdateGE20(this.D7);},UpdateGE20:function(Ar){if(!this.BeginUpdate(
))return AF;var CP=this.UpdateCanvas(Ar,Ai);this.EndUpdate();return CP;},EndUpdate:
function(){if(this.AL>0){this.Fw=this.Fw+1;this.AL=0;}},UpdateCanvas:function(Ar
,aOffset){var A;var CP=AF;var Jo=[].concat(aOffset,B.so(Ar.FrameSize,aOffset));var
I;var Ax=this.AL;this.ER=this.ER+1;for(I=0;(I<Ax)&&(I<4);I=I+1){if(this.Bn.Get(I
)>0){this.B2(Ar,B.sp(this.AT.Get(I),aOffset),[-aOffset[0],-aOffset[1]],255,true);
CP=B.pA(CP,B.hV(Jo,this.AT.Get(I)));}else Ax=Ax+1;}this.ER=this.ER-1;if(!((CP[0]>=
CP[2])||(CP[1]>=CP[3])))return B.sp(CP,aOffset);else return CP;},GetUpdateRegion:
function(Fo){var I;var Ax=this.AL;if(Fo<0)return AF;for(I=0;(I<Ax)&&(I<4);I=I+1){
if(!this.Bn.Get(I)){Ax=Ax+1;Fo=Fo+1;}else if(I===Fo)return this.AT.Get(I);}return AF;
},BeginUpdate:function(){var Jz=true;var fullScreenUpdate=false;var I;if((!Jz&&!
fullScreenUpdate)&&(this.AL>0)){var Id=B.sr(3,B.pn,null);var He=this.AL;for(I=0;
I<He;I=I+1)Id.Set(I,this.AT.Get(I));for(I=0;I<this.H5;I=I+1)this.Ag(this.FE.Get(
I));for(I=0;I<He;I=I+1)this.FE.Set(I,Id.Get(I));this.H5=He;}var Ax;var BA;for(Ax=
0;Ax<(this.AL-1);Ax=Ax+1)if(this.Bn.Get(Ax)>0)for(BA=Ax+1;BA<this.AL;BA=BA+1)if(
this.Bn.Get(BA)>0){var FO=B.rY(B.pA(this.AT.Get(Ax),this.AT.Get(BA)));if(((FO-this.
Bn.Get(Ax))-this.Bn.Get(BA))<0){this.AT.Set(Ax,B.pA(this.AT.Get(Ax),this.AT.Get(
BA)));this.Bn.Set(Ax,FO);this.Bn.Set(BA,0);}}for(I=this.AL-1;I>=0;I=I-1)if(!this.
Bn.Get(I))this.AL=this.AL-1;return this.AL;},DoesNeedUpdate:function(){if(this.AL>
0)return true;return false;},Initialize:function(aSize){this.Am([].concat(Ai,aSize
));if(this.GX)this.E=this.E|0x60;else this.E=this.E|0x20;this.Ag(this.O);return this;
},SetRootFocus:function(GK){if(GK===this.GX)return false;this.GX=GK;if(!GK){if(!
!this.AU)this.AU.A7(0x0,0x40);if(!!this.C4)this.C4.BK.A7(0x0,0x40);else this.A7(
0x0,0x40);}else{if(!!this.C4)this.C4.BK.A7(0x40,0x0);else this.A7(0x40,0x0);if(!
!this.AU)this.AU.A7(0x40,0x0);}return true;},SetUserInputTimestamp:function(Jn){
this.Aw=Jn;},DriveKeyboardHitting:function(AH,DD,BY){var A;var Ha=!!this.BB;if(!
!this.BB&&((!BY||(this.Dm!==AH))||(this.C3!==DD))){var Bf=null;var H=(C.Bu.isPrototypeOf(
A=this.BB)?A:null);var Cm=(C.Dv.isPrototypeOf(A=this.BB)?A:null);if(!!this.Dm)Bf=
B._NewObject(C.KeyEvent,0).Initialize(this.Dm,false);if(this.C3!==0x00)Bf=B._NewObject(
C.KeyEvent,0).Initialize2(this.C3,false);if(!!Cm)Cm.A2(Bf);else if(!!H)H.A2(Bf);
this.Dm=0;this.C3=0x00;this.BB=null;}if(!!this.BB){var Bf=null;var H=(C.Bu.isPrototypeOf(
A=this.BB)?A:null);var Cm=(C.Dv.isPrototypeOf(A=this.BB)?A:null);if(!!AH)Bf=B._NewObject(
C.KeyEvent,0).Initialize(AH,true);if(this.C3!==0x00)Bf=B._NewObject(C.KeyEvent,0
).Initialize2(DD,true);if(!!Cm)Cm.A2(Bf);else if(!!H)H.A2(Bf);}if(this.FD&&((!BY||(
this.Dm!==AH))||(this.C3!==DD))){this.Dm=0;this.C3=0x00;this.FD=false;}if((!this.
BB&&BY)&&(this.GP>0)){this.Dm=AH;this.C3=DD;this.FD=true;}if((!this.BB&&BY)&&!this.
FD){if(!!AH)this.BB=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize(AH,
true));if(DD!==0x00)this.BB=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize2(
DD,true));if(!(C.Dv.isPrototypeOf(A=this.BB)?A:null)&&!(C.Bu.isPrototypeOf(A=this.
BB)?A:null))this.BB=null;this.Dm=AH;this.C3=DD;Ha=Ha||!!this.BB;}this.Aw=0;return Ha;
},DriveCursorMovement:function(AQ){return this.DriveMultiTouchMovement(this.Ae,AQ
);},DriveMultiTouchMovement:function(J,AQ){if((J<0)||(J>9)){this.Aw=0;return false;
}var BS=B.sn(AQ,this.BJ.Get(J));this.BJ.Set(J,AQ);if(!this.As.Get(J)||B.sa(BS,Ai
)){this.Aw=0;return false;}var AS=AQ;var V=this.As.Get(J).G;while(!!V&&(V!==this
)){AS=B.sn(AS,V.O.slice(0,2));V=V.G;}if(!V&&(this.As.Get(J)!==this)){var tmp=this.
As.Get(J);this.Ae=J;this.As.Set(J,null);tmp.A2(this.DG().InitializeUp(J,this.CZ.
Get(J),this.CJ.Get(J),this.B_.Get(J),this.AV.Get(J)+1,this.B9.Get(J),false,this.
BJ.Get(J),this.CB.Get(J)));if(tmp===this.CA)this.CA=null;this.BroadcastEvent(this.
D8().InitializeUp(J,this.AV.Get(J)+1,false,tmp,AQ),0x18);}else{this.CZ.Set(J,AS);
this.Ae=J;this.As.Get(J).A2(this.Jq().Initialize(J,AS,this.CJ.Get(J),BS,this.B_.
Get(J),this.AV.Get(J)+1,this.B9.Get(J),AQ,this.CB.Get(J)));}this.Aw=0;return true;
},DriveCursorHitting:function(BY,J,AQ){return this.DriveMultiTouchHitting(BY,J,AQ
);},DriveMultiTouchHitting:function(BY,J,AQ){var A;if((J<0)||(J>9)){this.Aw=0;return false;
}var ticksCount=this.Aw;var DI=[].concat([-this.C9,-this.C9],[this.C9+1,this.C9+
1]);if(!ticksCount){ticksCount=((new Date).getTime()-B.pk)|0;}var JC=this.Aw;this.
DriveMultiTouchMovement(J,AQ);AQ=this.BJ.Get(J);this.Aw=JC;if(BY)this.CB.Set(J,AQ
);if((BY&&!this.As.Get(J))&&!this.GP){var Bz=null;var AS=AQ;if(B.se(this.Fs.Get(
J),AQ)&&((ticksCount-this.D9.Get(J))<=(((A=this.Im)<0)?A+0x100000000:A)))this.AV.
Set(J,this.AV.Get(J)+1);else this.AV.Set(J,0);this.Fs.Set(J,B.sq(DI,AQ));this.D9.
Set(J,ticksCount);if((!!this.AU&&!!this.AU.G)&&((this.AU.E&0x18)===0x18)){var S=
B.sq(DI,this.AU.G.Hy(AQ));Bz=this.AU.CR(S,J,this.AV.Get(J)+1,null,0x0);}if(!Bz){
if(!!this.CA&&!!this.CA.G){if(((this.CA.E&0x8)===0x8)&&((this.CA.E&0x10)===0x10)
){var S=B.sq(DI,this.CA.G.Hy(AQ));Bz=this.CA.CR(S,J,this.AV.Get(J)+1,null,0x0);}
}else if(!!this.C4)Bz=this.CR(B.sq(DI,AQ),J,this.AV.Get(J)+1,this.C4.BK,0x0);else
Bz=this.CR(B.sq(DI,AQ),J,this.AV.Get(J)+1,null,0x0);}if(!!Bz){this.BroadcastEvent(
this.D8().InitializeDown(J,this.AV.Get(J)+1,false,Bz.Bu,AQ),0x18);this.As.Set(J,
Bz.Bu);this.B9.Set(J,Bz.CV);}else{this.As.Set(J,null);this.B9.Set(J,Ai);this.Aw=
0;return false;}var V=Bz.Bu.G;while(!!V&&(V!==this)){AS=B.sn(AS,V.O.slice(0,2));
V=V.G;}this.CJ.Set(J,AS);this.CZ.Set(J,AS);this.B_.Set(J,0);this.CK.BG(true);this.
Ae=J;this.As.Get(J).A2(this.DG().InitializeDown(J,AS,this.AV.Get(J)+1,this.B9.Get(
J),false,AQ));this.Aw=0;return true;}if(!BY&&!!this.As.Get(J)){var AS=AQ;var V=this.
As.Get(J).G;while(!!V&&(V!==this)){AS=B.sn(AS,V.O.slice(0,2));V=V.G;}if(!V)AS=this.
CZ.Get(J);this.Ae=J;var tmp=this.As.Get(J);this.As.Set(J,null);tmp.A2(this.DG().
InitializeUp(J,AS,this.CJ.Get(J),this.B_.Get(J),this.AV.Get(J)+1,this.B9.Get(J),
false,AQ,this.CB.Get(J)));this.BroadcastEvent(this.D8().InitializeUp(J,this.AV.Get(
J)+1,false,tmp,AQ),0x18);this.Aw=0;return true;}this.Aw=0;return false;},Et:function(
CI,HR,DF){var DI=[].concat([-this.C9,-this.C9],[this.C9+1,this.C9+1]);if(CI===this
)CI=null;if(!this.As.Get(this.Ae))return;var Bz;Bz=this.CR(B.sq(DI,this.BJ.Get(this.
Ae)),this.Ae,1,CI,DF);if(!!Bz&&(this.As.Get(this.Ae)!==Bz.Bu))this.Hh(Bz.Bu,Bz.CV
);if(!Bz&&(this.As.Get(this.Ae)!==HR))this.Hh(HR,Ai);},Hh:function(CI,B6){if(!this.
As.Get(this.Ae)||(this.As.Get(this.Ae)===CI))return;var tmp=this.As.Get(this.Ae);
this.As.Set(this.Ae,null);tmp.A2(this.DG().InitializeUp(this.Ae,this.CZ.Get(this.
Ae),this.CJ.Get(this.Ae),this.B_.Get(this.Ae),this.AV.Get(this.Ae)+1,this.B9.Get(
this.Ae),true,this.BJ.Get(this.Ae),this.CB.Get(this.Ae)));this.BroadcastEvent(this.
D8().InitializeUp(this.Ae,this.AV.Get(this.Ae)+1,true,tmp,this.BJ.Get(this.Ae)),
0x18);var AS=this.BJ.Get(this.Ae);var V=null;if(!!CI)V=CI.G;while(!!V&&(V!==this
)){AS=B.sn(AS,V.O.slice(0,2));V=V.G;}if(!V&&(CI!==this)){this.As.Set(this.Ae,null
);this.CK.BG(false);return;}this.BroadcastEvent(this.D8().InitializeDown(this.Ae
,this.AV.Get(this.Ae)+1,true,CI,this.BJ.Get(this.Ae)),0x18);var ticksCount=0;ticksCount=((
new Date).getTime()-B.pk)|0;this.As.Set(this.Ae,CI);this.B9.Set(this.Ae,B6);this.
CJ.Set(this.Ae,AS);this.CZ.Set(this.Ae,AS);this.AV.Set(this.Ae,0);this.B_.Set(this.
Ae,0);this.D9.Set(this.Ae,ticksCount);this.CB.Set(this.Ae,this.BJ.Get(this.Ae));
this.As.Get(this.Ae).A2(this.DG().InitializeDown(this.Ae,AS,this.AV.Get(this.Ae)+
1,this.B9.Get(this.Ae),true,this.CB.Get(this.Ae)));},_Init:function(aArg){C.Ah._Init.
call(this,aArg);C.Timer._Init.call(this.CK={Af:this},0);(this.AV=[]).__proto__=C.
Root.AV;(this.Fs=[]).__proto__=C.Root.Fs;(this.B_=[]).__proto__=C.Root.B_;(this.
CJ=[]).__proto__=C.Root.CJ;(this.D9=[]).__proto__=C.Root.D9;(this.CZ=[]).__proto__=
C.Root.CZ;(this.As=[]).__proto__=C.Root.As;(this.B9=[]).__proto__=C.Root.B9;(this.
BJ=[]).__proto__=C.Root.BJ;(this.CB=[]).__proto__=C.Root.CB;(this.FE=[]).__proto__=
C.Root.FE;(this.Bn=[]).__proto__=C.Root.Bn;(this.AT=[]).__proto__=C.Root.AT;this.
__proto__=C.Root;this.E=0x7F;this.CK.E9(50);this.CK.Eo=[this,this.Jr];},_Done:function(
){this.__proto__=C.Root;this.CK._Done();C.Ah._Done.call(this);},_ReInit:function(
){C.Ah._ReInit.call(this);this.CK._ReInit();},_Mark:function(D){var A;C.Ah._Mark.
call(this,D);if((A=this.BB)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.C4)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.CK)._cycle!=D)A._Mark(A._cycle=D);if((
A=this.CA)&&(A._cycle!=D))A._Mark(A._cycle=D);B.sj(this.As,D);if((A=this.D7)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.AU)&&(A._cycle!=D))A._Mark(A._cycle=D);
},_className:"Core::Root"};C.Event={AG:0,Ei:false,E0:function(){var ticksCount=0;
ticksCount=((new Date).getTime()-B.pk)|0;return ticksCount;},BO:function(aArg){this.
AG=this.E0();},_Init:function(aArg){this.__proto__=C.Event;this.BO(aArg);B.gb++;
},_Done:function(){this.__proto__=C.Event;B.gb--;},_ReInit:function(){},_Mark:function(
D){var A;if((A=this.Af)&&(A._cycle!=D))A._Mark(A._cycle=D);},Af:null,_cycle:0,_observers:
null,_className:"Core::Event"};C.KeyEvent={AI:0,Ak:0,Down:false,Initialize2:function(
AH,BY){this.AI=0;this.Ak=AH;this.Down=BY;if((AH>=0x30)&&(AH<=0x39))this.AI=(10+AH
)-48;if((AH>=0x41)&&(AH<=0x5A))this.AI=(105+AH)-65;if((AH>=0x61)&&(AH<=0x7A))this.
AI=(105+AH)-97;if(AH===0x20)this.AI=131;if(!this.AI)switch(AH){case 0x2B:this.AI=
132;break;case 0x2D:this.AI=133;break;case 0x2A:this.AI=134;break;case 0x2F:this.
AI=135;break;case 0x3D:this.AI=136;break;case 0x2E:this.AI=137;break;case 0x2C:this.
AI=138;break;case 0x3A:this.AI=139;break;case 0x3B:this.AI=140;break;default:;}return this;
},Initialize:function(AH,BY){this.AI=AH;this.Down=BY;this.Ak=0x00;var GR=AH-10;var
GQ=AH-105;if((GR>=0)&&(GR<=9))this.Ak=(48+GR)&0xFFFF;if((GQ>=0)&&(GQ<=25))this.Ak=(
65+GQ)&0xFFFF;if(AH===131)this.Ak=0x20;if(this.Ak===0x00)switch(AH){case 132:this.
Ak=0x2B;break;case 133:this.Ak=0x2D;break;case 134:this.Ak=0x2A;break;case 135:this.
Ak=0x2F;break;case 136:this.Ak=0x3D;break;case 137:this.Ak=0x2E;break;case 138:this.
Ak=0x2C;break;case 139:this.Ak=0x3A;break;case 140:this.Ak=0x3B;break;default:;}
return this;},IA:function(HQ){switch(HQ){case 141:return((this.Ak>=0x41)&&(this.
Ak<=0x5A))||((this.Ak>=0x61)&&(this.Ak<=0x7A));case 142:return(((this.Ak>=0x41)&&(
this.Ak<=0x5A))||((this.Ak>=0x61)&&(this.Ak<=0x7A)))||((this.Ak>=0x30)&&(this.Ak<=
0x39));case 143:return(this.Ak>=0x30)&&(this.Ak<=0x39);case 144:return(((this.Ak>=
0x41)&&(this.Ak<=0x46))||((this.Ak>=0x61)&&(this.Ak<=0x66)))||((this.Ak>=0x30)&&(
this.Ak<=0x39));case 145:return this.Ak!==0x00;case 146:return(this.Ak===0x00)&&
!!this.AI;case 147:return(((this.AI===6)||(this.AI===7))||(this.AI===4))||(this.
AI===5);case 148:return(this.Ak!==0x00)||!!this.AI;default:;}return HQ===this.AI;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;}
,_className:"Core::KeyEvent"};C.FR={GC:null,Cg:B.pm,B5:0,BN:0,Down:false,Co:false
,InitializeUp:function(J,BI,DC,GN,Ck){this.Down=false;this.BN=J;this.B5=BI;this.
Cg=Ck;this.GC=GN;this.Co=DC;return this;},InitializeDown:function(J,BI,DC,GN,Ck){
this.Down=true;this.BN=J;this.B5=BI;this.Cg=Ck;this.GC=GN;this.Co=DC;return this;
},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.FR;},_Mark:
function(D){var A;C.Event._Mark.call(this,D);if((A=this.GC)&&(A._cycle!=D))A._Mark(
A._cycle=D);},_className:"Core::CursorGrabEvent"};C.EV={CU:B.pm,Cg:B.pm,B5:0,Bt:
0,CF:B.pm,Cd:B.pm,BN:0,Down:false,Co:false,InitializeHold:function(J,Df,Ey,Ez,BI
,B6,Ck,Ex){this.Down=true;this.BN=J;this.Cd=B.so(Df,B6);this.CF=B.so(Ey,B6);this.
Bt=Ez;this.B5=BI;this.Cg=Ck;this.CU=Ex;return this;},InitializeUp:function(J,Df,
Ey,Ez,BI,B6,DC,Ck,Ex){this.Down=false;this.BN=J;this.Cd=B.so(Df,B6);this.CF=B.so(
Ey,B6);this.Bt=Ez;this.B5=BI;this.Co=DC;this.Cg=Ck;this.CU=Ex;return this;},InitializeDown:
function(J,Df,BI,B6,DC,Ck){this.Down=true;this.BN=J;this.Cd=B.so(Df,B6);this.CF=
B.so(Df,B6);this.Bt=0;this.B5=BI;this.Co=DC;this.Cg=Ck;this.CU=Ck;return this;},
_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=C.EV;},_className:
"Core::CursorEvent"};C.EX={CU:B.pm,Cg:B.pm,B5:0,Bt:0,CV:B.pm,CF:B.pm,Cd:B.pm,BN:
0,Initialize:function(J,Df,Ey,aOffset,Ez,Jm,B6,Ck,Ex){this.BN=J;this.Cd=B.so(Df,
B6);this.CF=B.so(Ey,B6);this.CV=aOffset;this.Bt=Ez;this.B5=Jm;this.Cg=Ck;this.CU=
Ex;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.EX;},_className:"Core::DragEvent"};C.Ep={CH:B.pm,Space:0,EZ:0,B2:function(Ar,aClip
,aOffset,Aq,aBlend){},Am:function(value){var A;if(B.sb(value,this.O))return;var Dp=[(
A=this.O)[2]-A[0],A[3]-A[1]];var FG=[value[2]-value[0],value[3]-value[1]];var DQ=
!B.sa(Dp,FG);var BS=B.sn(value.slice(0,2),this.O.slice(0,2));if(!B.sa(BS,Ai)&&!DQ
){var H=this.Y;while(!!H&&!((H.E&0x200)===0x200)){if(((H.E&0x400)===0x400)){var tmp=((
H.E&0x100)===0x100);H.Gt(BS,tmp);}H=H.Y;}}if((DQ&&(Dp[0]>0))&&(Dp[1]>0)){var Z=B.
sq(this.O,this.CH);var H=this.Y;var EC=0x14;while(!!H&&!((H.E&0x200)===0x200)){if(((
H.E&0x400)===0x400)){if(!!H.Ao&&(H.Ao.DN!==this))H.Ao=null;if(!H.Ao&&((H.Ch!==EC
)||!!this.EZ))H.EE(Z,this);}H=H.Y;}}C.AN.Am.call(this,value);if(!!this.G&&DQ){this.
E=this.E|0x1000;if(!((this.G.E&0x2000)===0x2000)){this.G.E=this.G.E|0x4000;B.kD([
A=this.G,A.A1],this);}}},_Init:function(aArg){C.AN._Init.call(this,aArg);this.__proto__=
C.Ep;this.E=0x203;},_className:"Core::Outline"};C.Fj={GO:0,BN:0,AG:0,B5:0,Bt:0,CV:
B.pm,CF:B.pm,Cd:B.pm,HB:null,Db:null,Da:null,Em:null,Ci:null,B4:null,I$:1000,Eu:
8,De:0x0,Hx:-1,Hz:1,IC:1,Io:false,Down:false,CG:false,Co:false,HT:false,B2:function(
Ar,aClip,aOffset,Aq,aBlend){},A2:function(Aa){var A;var Bg=(C.EV.isPrototypeOf(Aa
)?Aa:null);var AZ=(C.EX.isPrototypeOf(Aa)?Aa:null);var Fy=this.CG;if(!Bg&&!AZ)return null;
if(!!Bg){this.HT=Bg.Down;this.Down=Bg.Down;this.CG=this.Gk(Bg.Cd);this.CF=Bg.CF;
this.Cd=Bg.Cd;this.CV=Ai;this.Bt=Bg.Bt;this.B5=Bg.B5;this.Co=Bg.Co;this.BN=Bg.BN;
this.GO=Bg.BN;this.AG=Bg.AG;if(Bg.Down&&!Bg.Bt)Fy=false;}if(!!AZ){this.Down=true;
this.CG=this.Gk(AZ.Cd);this.CF=AZ.CF;this.Cd=AZ.Cd;this.CV=AZ.CV;this.Bt=AZ.Bt;this.
B5=AZ.B5;this.BN=AZ.BN;this.GO=AZ.BN;this.Co=false;this.AG=AZ.AG;(A=this.HB)?A[1
].call(A[0],this):null;}if((!!Bg&&this.Down)&&!this.Bt)(A=this.B4)?A[1].call(A[0
],this):null;if((!!Bg&&this.Down)&&(this.Bt>0))(A=this.Em)?A[1].call(A[0],this):
null;if((this.Down&&this.CG)&&!Fy)(A=this.Da)?A[1].call(A[0],this):null;if(((this.
Down&&!this.CG)&&Fy)||((!this.Down&&this.CG)&&Fy))(A=this.Db)?A[1].call(A[0],this
):null;if(!!Bg&&!this.Down)(A=this.Ci)?A[1].call(A[0],this):null;if(!!this.De){if(((((
this.De&0x10)===0x10)&&!!Bg)&&Bg.Down)&&(Bg.Bt>=this.I$))this.DV().Et(null,this,
0x10);if((((this.De&0x1)===0x1)&&!!AZ)&&((AZ.Cg[1]-AZ.CU[1])<=-this.Eu))this.DV(
).Et(null,this,0x1);if((((this.De&0x2)===0x2)&&!!AZ)&&((AZ.Cg[1]-AZ.CU[1])>=this.
Eu))this.DV().Et(null,this,0x2);if((((this.De&0x4)===0x4)&&!!AZ)&&((AZ.Cg[0]-AZ.
CU[0])<=-this.Eu))this.DV().Et(null,this,0x4);if((((this.De&0x8)===0x8)&&!!AZ)&&((
AZ.Cg[0]-AZ.CU[0])>=this.Eu))this.DV().Et(null,this,0x8);}return this;},CR:function(
Ad,J,BI,D4,DF){var A;if(!!D4&&(D4!==this))return null;if((BI<this.IC)||(BI>this.
Hz))return null;if((this.Hx>=0)&&(J!==this.Hx))return null;if((!this.Io&&this.HT
)&&(J!==this.GO))return null;if(!!(DF&this.De))return null;if(this.Iv()){var L=B.
hV(Ad,this.GetExtent());if(!((L[0]>=L[2])||(L[1]>=L[3]))){var Dj=B.rZ(Ad);var BS=
Ai;if(Dj[0]<L[0])BS=[L[0]-Dj[0],BS[1]];if(Dj[0]>=L[2])BS=[(L[2]-Dj[0])-1,BS[1]];
if(Dj[1]<L[1])BS=[BS[0],L[1]-Dj[1]];if(Dj[1]>=L[3])BS=[BS[0],(L[3]-Dj[1])-1];return B.
_NewObject(C.EW,0).Initialize(this,BS);}}else{var Au=B.sr(9,B.pm,null);var I;Au.
Set(0,B.rZ(Ad));Au.Set(1,Au.Get(0));Au.Set(2,Au.Get(0));Au.Set(3,Au.Get(0));Au.Set(
4,Au.Get(0));Au.Set(1,[Ad[0],Au.Get(1)[1]]);Au.Set(2,[Au.Get(2)[0],Ad[1]]);Au.Set(
3,[Ad[2],Au.Get(3)[1]]);Au.Set(4,[Au.Get(4)[0],Ad[3]]);Au.Set(5,Ad.slice(0,2));Au.
Set(6,[Ad[2],Ad[1]]);Au.Set(7,[Ad[0],Ad[3]]);Au.Set(8,Ad.slice(2,4));for(I=0;I<9;
I=I+1)if(this.Gk(Au.Get(I)))return B._NewObject(C.EW,0).Initialize(this,B.sn(Au.
Get(I),Au.Get(0)));}return null;},I5:function(value){if(value<1)value=1;this.Eu=
value;},HH:function(value){if(value<1)value=1;this.Hz=value;},BG:function(value){
if(value)this.A7(0x10,0x0);else this.A7(0x0,0x10);},_Init:function(aArg){C.Er._Init.
call(this,aArg);this.__proto__=C.Fj;this.E=0x11B;},_Mark:function(D){var A;C.Er.
_Mark.call(this,D);if((A=this.HB)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Db)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Da)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Em)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.Ci)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.B4)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"};C.Dv={
DO:0,Y:null,AG:0,HK:0,Ci:null,B4:null,Em:null,C_:148,AI:0,Ak:0,BM:true,Down:false
,Ff:false,EU:false,A2:function(Aa){var A;if(!!Aa&&Aa.IA(this.C_)){this.Down=Aa.Down;
this.AI=Aa.AI;this.Ak=Aa.Ak;this.AG=Aa.AG;this.EU=false;if(Aa.Down){this.HK=this.
DO;this.Ff=this.DO>0;if(this.Ff)(A=this.Em)?A[1].call(A[0],this):null;else(A=this.
B4)?A[1].call(A[0],this):null;if(!this.EU)this.DO=this.DO+1;return!this.EU;}if(!
Aa.Down){this.Ff=this.DO>1;this.HK=this.DO-1;this.DO=0;(A=this.Ci)?A[1].call(A[0
],this):null;return!this.EU;}}return false;},BO:function(aArg){var A;var BK=(C.Ah.
isPrototypeOf(A=this.Af)?A:null);if(!BK)throw new Error(GH);this.Y=BK.FC;BK.FC=this;
},_Init:function(aArg){this.__proto__=C.Dv;this.BO(aArg);B.gb++;},_Done:function(
){this.__proto__=C.Dv;B.gb--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Y)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ci)&&((A=A[0])._cycle!=D
))A._Mark(A._cycle=D);if((A=this.B4)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Em)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Af)&&(A._cycle!=
D))A._Mark(A._cycle=D);},Af:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.EW={Ec:0,CV:B.pm,Bu:null,Initialize:function(F,aOffset){this.Bu=F;this.CV=aOffset;
this.Ec=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=C.EW;B.gb++;},_Done:function(){this.__proto__=C.EW;B.gb--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.Bu)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.Af)&&(A._cycle!=D))A._Mark(A._cycle=D);},Af:null,_cycle:0
,_observers:null,_className:"Core::CursorHit"};C.HA={BK:null,_Init:function(aArg
){this.__proto__=C.HA;B.gb++;},_Done:function(){this.__proto__=C.HA;B.gb--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.BK)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Af)&&(A._cycle!=D))A._Mark(A._cycle=D);},Af:null,_cycle:0,_observers:
null,_className:"Core::ModalContext"};C.Ek={By:B.pn,Z:B.pn,DN:null,isEmpty:false
,_Init:function(aArg){this.__proto__=C.Ek;B.gb++;},_Done:function(){this.__proto__=
C.Ek;B.gb--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.DN)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Af)&&(A._cycle!=D))A._Mark(A._cycle=D);},Af:
null,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.E4={EM:B.pm,EL:
B.pm,EK:B.pm,EJ:B.pm,_Init:function(aArg){C.Ek._Init.call(this,aArg);this.__proto__=
C.E4;},_className:"Core::LayoutQuadContext"};C.Hi={BK:null,_Init:function(aArg){
this.__proto__=C.Hi;B.gb++;},_Done:function(){this.__proto__=C.Hi;B.gb--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.BK)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Af)&&(A._cycle!=D))A._Mark(A._cycle=D);},Af:null,_cycle:0,_observers:
null,_className:"Core::DialogContext"};C.HM={GT:null,Bl:null,_Init:function(aArg
){this.__proto__=C.HM;B.gb++;},_Done:function(){this.__proto__=C.HM;B.gb--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.GT)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Bl)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Af)&&(A._cycle!=
D))A._Mark(A._cycle=D);},Af:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"
};C.HL={_Init:function(aArg){this.__proto__=C.HL;B.gb++;},_Done:function(){this.
__proto__=C.HL;B.gb--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.
Af)&&(A._cycle!=D))A._Mark(A._cycle=D);},Af:null,_cycle:0,_observers:null,_className:
"Core::Task"};C.Dd={resource:null,Cq:function(){this.resource=null;},BO:function(
aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=C.Dd;this.BO(aArg
);B.gb++;},_Done:function(){this.__proto__=C.Dd;this.Cq();B.gb--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.Af)&&(A._cycle!=D))A._Mark(A._cycle=D);},
Af:null,_cycle:0,_observers:null,_className:"Core::Resource"};C.Timer={timer:null
,AG:0,Eo:null,Period:1000,Eb:0,BM:false,Cq:function(){var tmp=this.timer;if(!!tmp
)tmp.DestroyTimer();this.timer=null;},FK:function(aBegin,aPeriod){if(aBegin<0)aBegin=
0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>0)))tmp=
B.rz(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin,aPeriod
);}this.timer=tmp;},E9:function(value){if(value<0)value=0;if(value===this.Period
)return;this.Period=value;if(this.BM)this.FK(this.Eb,value);},E6:function(value){
if(value<0)value=0;if(value===this.Eb)return;this.Eb=value;if(this.BM)this.FK(value
,this.Period);},BG:function(value){if(value===this.BM)return;this.BM=value;if(value
)this.FK(this.Eb,this.Period);else this.FK(0,0);this.AG=this.E0();},E0:function(
){var ticksCount=0;ticksCount=((new Date).getTime()-B.pk)|0;return ticksCount;},
Trigger:function(){var A;this.AG=this.E0();if(!this.Period)this.BG(false);(A=this.
Eo)?A[1].call(A[0],this):null;},_Init:function(aArg){this.__proto__=C.Timer;B.gb++;
},_Done:function(){this.__proto__=C.Timer;this.Cq();B.gb--;},_ReInit:function(){
},_Mark:function(D){var A;if((A=this.Eo)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Af)&&(A._cycle!=D))A._Mark(A._cycle=D);},Af:null,_cycle:0,_observers:
null,_className:"Core::Timer"};C.Kn={Ko:0x1,JM:0x2,JT:0x4,Kl:0x8,BM:0x10,Kg:0x20
,JU:0x40,J1:0x80,JS:0x100,JY:0x200,JQ:0x400,J7:0x800,HO:0x1000,Km:0x2000,J5:0x4000
,J6:0x8000,JP:0x10000,J4:0x20000,Kd:0x40000};C.Ch={J8:0x1,J9:0x2,JJ:0x4,JK:0x8,JL:
0x10,JI:0x20};C.EZ={J2:0,Kk:1,JO:2,JZ:3,J$:4};C.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:
3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:12,Key3:13
,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:21,Blue:22,Yellow:
23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:34,F10:
35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:40,Home:41,End:42
,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48,Hide:49,Play:50,
Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:
59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:
70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:
78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,User1:86,User2:87
,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94,User10:95,User11:
96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:102,User18:103,User19:
104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:
113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:
122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:
131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136,Period:137,Comma:138,Colon:
139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:
144,CharacterKeys:145,ControlKeys:146,CursorKeys:147,AnyKey:148,Enter:149,Escape:
150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:
157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163
,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:
170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176
,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,
CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:
189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196
,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:
203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208
,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:
214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:
219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:
224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:
229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:
234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:
239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:
244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:
249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:
254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:
259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:
264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:268
,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:272
,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
279,AltF6:280,AltF7:281,AltF8:282,AltF9:283,AltF10:284,AltEnter:285,AltEscape:286
,AltUp:287,AltDown:288,AltLeft:289,AltRight:290,AltPageUp:291,AltPageDown:292,AltBackspace:
293,AltInsert:294,AltDelete:295,AltHome:296,AltEnd:297,AltTab:298,AltShiftF1:299
,AltShiftF2:300,AltShiftF3:301,AltShiftF4:302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:
305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:308,AltShiftEnter:309,AltShiftEscape:
310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:313,AltShiftRight:314,AltShiftPageUp:
315,AltShiftPageDown:316,AltShiftBackspace:317,AltShiftInsert:318,AltShiftDelete:
319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:322,ShiftF1:323,ShiftF2:324,ShiftF3:
325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:329,ShiftF8:330,ShiftF9:331,ShiftF10:
332,ShiftEnter:333,ShiftEscape:334,ShiftUp:335,ShiftDown:336,ShiftLeft:337,ShiftRight:
338,ShiftPageUp:339,ShiftPageDown:340,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.J_={Ks:0x1,Kp:0x2,Kq:0x4,Kr:0x8,J0:
0x10};
C._Init=function(){C.Er.__proto__=C.Bu;C.AN.__proto__=C.Bu;C.Ah.__proto__=C.AN;C.
Root.__proto__=C.Ah;C.KeyEvent.__proto__=C.Event;C.FR.__proto__=C.Event;C.EV.__proto__=
C.Event;C.EX.__proto__=C.Event;C.Ep.__proto__=C.AN;C.Fj.__proto__=C.Er;C.E4.__proto__=
C.Ek;};C.AO=function(D){};return C;})();

/* Embedded Wizard */