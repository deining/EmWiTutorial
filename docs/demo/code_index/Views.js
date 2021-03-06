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
);if(index.th)throw new Error("The unit file 'Views.js' included twice!");index.
th=(function(){var B=index;var C={};
var Ai=[0,0];var AF=[0,0,0,0];var BV="\uFEFF";
C.Fe={A8:0xFFFFFFFF,A9:0xFFFFFFFF,A$:0xFFFFFFFF,A_:0xFFFFFFFF,B0:function(Ar,aClip
,aOffset,Aq,aBlend){var A;aBlend=aBlend&&((this.E&0x2)===0x2);Aq=Aq+1;if(Aq<256){
var AD=this.A_;var AE=this.A$;var AB=this.A8;var AC=this.A9;AD=(AD&0x00FFFFFF)|((((
Aq*((AD>>24)&0xFF))>>8)&0xFF)<<24);AE=(AE&0x00FFFFFF)|((((Aq*((AE>>24)&0xFF))>>8
)&0xFF)<<24);AB=(AB&0x00FFFFFF)|((((Aq*((AB>>24)&0xFF))>>8)&0xFF)<<24);AC=(AC&0x00FFFFFF
)|((((Aq*((AC>>24)&0xFF))>>8)&0xFF)<<24);Ar.F0(aClip,B.sq(this.O,aOffset),AD,AE,
AC,AB,aBlend);}else Ar.F0(aClip,B.sq(this.O,aOffset),this.A_,this.A$,this.A9,this.
A8,aBlend);},Ch:function(value){var A;if((((value===this.A_)&&(value===this.A$))&&(
value===this.A8))&&(value===this.A9))return;this.A_=value;this.A$=value;this.A8=
value;this.A9=value;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.O);},_Init:
function(aArg){B.Core.AN._Init.call(this,aArg);this.__proto__=C.Fe;},_className:
"Views::Rectangle"};C.Ca={Width:1,A8:0xFFFFFFFF,A9:0xFFFFFFFF,A$:0xFFFFFFFF,A_:0xFFFFFFFF
,B0:function(Ar,aClip,aOffset,Aq,aBlend){var A;aBlend=aBlend&&((this.E&0x2)===0x2
);Aq=Aq+1;if(Aq<256){var AD=this.A_;var AE=this.A$;var AB=this.A8;var AC=this.A9;
AD=(AD&0x00FFFFFF)|((((Aq*((AD>>24)&0xFF))>>8)&0xFF)<<24);AE=(AE&0x00FFFFFF)|((((
Aq*((AE>>24)&0xFF))>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF)|((((Aq*((AB>>24)&0xFF))>>8
)&0xFF)<<24);AC=(AC&0x00FFFFFF)|((((Aq*((AC>>24)&0xFF))>>8)&0xFF)<<24);Ar.Hi(aClip
,B.sq(this.O,aOffset),this.Width,AD,AE,AC,AB,aBlend);}else Ar.Hi(aClip,B.sq(this.
O,aOffset),this.Width,this.A_,this.A$,this.A9,this.A8,aBlend);},I7:function(value
){var A;if(value<0)value=0;if(value===this.Width)return;this.Width=value;if(!!this.
G&&((this.E&0x1)===0x1))this.G.Ag(this.O);},Ch:function(value){var A;if((((value===
this.A_)&&(value===this.A$))&&(value===this.A8))&&(value===this.A9))return;this.
A_=value;this.A$=value;this.A8=value;this.A9=value;if(!!this.G&&((this.E&0x1)===
0x1))this.G.Ag(this.O);},_Init:function(aArg){B.Core.AN._Init.call(this,aArg);this.
__proto__=C.Ca;},_className:"Views::Border"};C.Gc={Be:-1,timer:null,A8:0xFFFFFFFF
,A9:0xFFFFFFFF,A$:0xFFFFFFFF,A_:0xFFFFFFFF,El:null,Hk:0x1F,CT:0,X:null,Dx:255,DR:
0,Gu:B.pm,BZ:false,FV:true,B0:function(Ar,aClip,aOffset,Aq,aBlend){var A;var AR=
this.CT;if(this.Be>=0)AR=this.Be;if(!this.X||(AR>=this.X.NoOfFrames))return;this.
X.Update();var AD=this.A_;var AE=this.A$;var AC=this.A9;var AB=this.A8;var BC=(((
Aq+1)*this.Dx)>>8)+1;var Bk=this.Hk;var L=B.sq(this.O,aOffset);var FN=B.sn([L[2]-
L[0],L[3]-L[1]],this.Gu);aBlend=aBlend&&((this.E&0x2)===0x2);if(BC<256){AD=(AD&0x00FFFFFF
)|((((((AD>>24)&0xFF)*BC)>>8)&0xFF)<<24);AE=(AE&0x00FFFFFF)|((((((AE>>24)&0xFF)*
BC)>>8)&0xFF)<<24);AC=(AC&0x00FFFFFF)|((((((AC>>24)&0xFF)*BC)>>8)&0xFF)<<24);AB=(
AB&0x00FFFFFF)|((((((AB>>24)&0xFF)*BC)>>8)&0xFF)<<24);}if(((this.Gu[0]>0)&&(FN[0
]>0))&&!((Bk&0x5)===0x5)){var Bw=((this.X.FrameSize[0]/3)|0)-FN[0];if(((Bk&0x1)===
0x1)){if(aClip[2]>L[2])aClip=B.sW(aClip,L[2]);if(Bw>0)L=B.sW(L,L[2]+Bw);Bk=Bk|0x4;
}else if(((Bk&0x4)===0x4)){if(aClip[0]<L[0])aClip=[].concat(L[0],aClip.slice(1,4
));if(Bw>0)L=[].concat(L[0]-Bw,L.slice(1,4));Bk=Bk|0x1;}else{if(aClip[0]<L[0])aClip=[
].concat(L[0],aClip.slice(1,4));if(aClip[2]>L[2])aClip=B.sW(aClip,L[2]);if(Bw>0){
L=[].concat(L[0]-((Bw/2)|0),L.slice(1,4));L=B.sW(L,(L[2]+Bw)-((Bw/2)|0));}Bk=Bk|
0x5;}}if(((this.Gu[1]>0)&&(FN[1]>0))&&!((Bk&0xA)===0xA)){var Bw=((this.X.FrameSize[
1]/3)|0)-FN[1];if(((Bk&0x2)===0x2)){if(aClip[3]>L[3])aClip=[].concat(aClip.slice(
0,3),L[3]);if(Bw>0)L=[].concat(L.slice(0,3),L[3]+Bw);Bk=Bk|0x8;}else if(((Bk&0x8
)===0x8)){if(aClip[1]<L[1])aClip=B.sY(aClip,L[1]);if(Bw>0)L=B.sY(L,L[1]-Bw);Bk=Bk|
0x2;}else{if(aClip[1]<L[1])aClip=B.sY(aClip,L[1]);if(aClip[3]>L[3])aClip=[].concat(
aClip.slice(0,3),L[3]);if(Bw>0){L=B.sY(L,L[1]-((Bw/2)|0));L=[].concat(L.slice(0,
3),(L[3]+Bw)-((Bw/2)|0));}Bk=Bk|0xA;}}Ar.In(aClip,this.X,AR,L,Bk,AD,AE,AC,AB,aBlend
);},EI:function(Az){var A;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.O);},
C6:function(Az){var A;var AR=this.Be;var BT=0;if(!!this.X)BT=this.X.NoOfFrames*this.
X.FrameDelay;if((!!this.timer&&(this.Be<0))&&(BT>0))this.DR=this.timer.AG-(this.
CT*this.X.FrameDelay);if(!!this.timer&&(BT>0)){var DS=(this.timer.AG-this.DR)|0;
AR=(DS/this.X.FrameDelay)|0;if(DS>=BT){AR=AR%this.X.NoOfFrames;this.DR=this.timer.
AG-(DS%BT);if(!this.FV){AR=this.X.NoOfFrames-1;BT=0;}}}if(((AR!==this.Be)&&!!this.
G)&&((this.E&0x1)===0x1))this.G.Ag(this.O);this.Be=AR;if(!BT&&!!this.timer){B.rA([
this,this.C6],this.timer,0);this.timer=null;(A=this.El)?A[1].call(A[0],this):null;
}},Ch:function(value){var A;if((((value===this.A_)&&(value===this.A$))&&(value===
this.A8))&&(value===this.A9))return;this.A_=value;this.A$=value;this.A8=value;this.
A9=value;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.O);},Dw:function(value
){var A;if(this.BZ===value)return;this.BZ=value;this.Be=-1;if(!value&&!!this.timer
){B.rA([this,this.C6],this.timer,0);this.timer=null;}if(value){this.timer=B._GetAutoObject(
B.ti.EY);B.rl([this,this.C6],this.timer,0);B.kD([this,this.C6],this);}if(!!this.
G&&((this.E&0x1)===0x1))this.G.Ag(this.O);},E7:function(value){var A;if(value<0)
value=0;if((value===this.CT)&&(this.Be===-1))return;this.CT=value;if(!this.timer
)this.Be=-1;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.O);},DX:function(value
){var A;if(value===this.X)return;if(!!this.X&&this.X.DW)B.rA([this,this.EI],this.
X,0);this.X=value;this.Be=-1;if(!!value&&value.DW)B.rl([this,this.EI],value,0);if(
this.BZ){this.Dw(false);this.Dw(true);}if(!!this.G&&((this.E&0x1)===0x1))this.G.
Ag(this.O);},_Init:function(aArg){B.Core.AN._Init.call(this,aArg);this.__proto__=
C.Gc;},_Mark:function(D){var A;B.Core.AN._Mark.call(this,D);if((A=this.timer)&&(
A._cycle!=D))A._Mark(A._cycle=D);if((A=this.El)&&((A=A[0])._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.X)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Frame"
};C.E2={DR:0,Be:0,timer:null,A8:0xFFFFFFFF,A9:0xFFFFFFFF,A$:0xFFFFFFFF,A_:0xFFFFFFFF
,El:null,CF:B.pm,CQ:0x12,CT:0,X:null,Dx:255,Cu:0,BZ:false,FV:true,C7:false,Fd:true
,B0:function(Ar,aClip,aOffset,Aq,aBlend){var A;var AR=this.CT;if(this.Be>=0)AR=this.
Be;if(!this.X||(AR>=this.X.NoOfFrames))return;this.X.Update();var S=this.Dt();var
AM=this.X.FrameSize;var orient=this.Cu;if((S[0]>=S[2])||(S[1]>=S[3]))return;var AD=
this.A_;var AE=this.A$;var AC=this.A9;var AB=this.A8;var BC=(((Aq+1)*this.Dx)>>8
)+1;aBlend=aBlend&&((this.E&0x2)===0x2);if(BC<256){AD=(AD&0x00FFFFFF)|((((((AD>>
24)&0xFF)*BC)>>8)&0xFF)<<24);AE=(AE&0x00FFFFFF)|((((((AE>>24)&0xFF)*BC)>>8)&0xFF
)<<24);AC=(AC&0x00FFFFFF)|((((((AC>>24)&0xFF)*BC)>>8)&0xFF)<<24);AB=(AB&0x00FFFFFF
)|((((((AB>>24)&0xFF)*BC)>>8)&0xFF)<<24);}if(B.sa([S[2]-S[0],S[3]-S[1]],AM)&&!orient
)Ar.Hf(aClip,this.X,AR,B.sq(this.O,aOffset),B.sn(this.O.slice(0,2),S.slice(0,2))
,AD,AE,AC,AB,aBlend);else if(!orient)Ar.Jb(aClip,this.X,AR,B.sq(S,aOffset),[].concat(
Ai,AM),AD,AE,AC,AB,aBlend,this.Fd);else{var left=S[0]+aOffset[0];var top=S[1]+aOffset[
1];var right=S[2]+aOffset[0];var bottom=S[3]+aOffset[1];if(orient===1)Ar.GD(aClip
,this.X,AR,left,bottom,1.000000,left,top,1.000000,right,top,1.000000,right,bottom
,1.000000,[].concat(Ai,AM),AB,AD,AE,AC,aBlend,this.Fd);else if(orient===2)Ar.GD(
aClip,this.X,AR,right,bottom,1.000000,left,bottom,1.000000,left,top,1.000000,right
,top,1.000000,[].concat(Ai,AM),AC,AB,AD,AE,aBlend,this.Fd);else if(orient===3)Ar.
GD(aClip,this.X,AR,right,top,1.000000,right,bottom,1.000000,left,bottom,1.000000
,left,top,1.000000,[].concat(Ai,AM),AE,AC,AB,AD,aBlend,this.Fd);}},EI:function(Az
){var A;if(((this.C7&&!!this.X)&&(this.X.FrameSize[0]>0))&&(this.X.FrameSize[1]>
0))this.Am(B.sp(this.Dt(),this.CF));if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(
this.O);},C6:function(Az){var A;var AR=this.Be;var BT=0;if(!!this.X)BT=this.X.NoOfFrames
*this.X.FrameDelay;if((!!this.timer&&(this.Be<0))&&(BT>0))this.DR=this.timer.AG-(
this.CT*this.X.FrameDelay);if(!!this.timer&&(BT>0)){var DS=(this.timer.AG-this.DR
)|0;AR=(DS/this.X.FrameDelay)|0;if(DS>=BT){AR=AR%this.X.NoOfFrames;this.DR=this.
timer.AG-(DS%BT);if(!this.FV){AR=this.X.NoOfFrames-1;BT=0;}}}if(((AR!==this.Be)&&
!!this.G)&&((this.E&0x1)===0x1))this.G.Ag(this.O);this.Be=AR;if(!BT&&!!this.timer
){B.rA([this,this.C6],this.timer,0);this.timer=null;(A=this.El)?A[1].call(A[0],this
):null;}},Ch:function(value){var A;if((((value===this.A_)&&(value===this.A$))&&(
value===this.A8))&&(value===this.A9))return;this.A_=value;this.A$=value;this.A8=
value;this.A9=value;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.O);},Dw:function(
value){var A;if(this.BZ===value)return;this.BZ=value;this.Be=-1;if(!value&&!!this.
timer){B.rA([this,this.C6],this.timer,0);this.timer=null;}if(value){this.timer=B.
_GetAutoObject(B.ti.EY);B.rl([this,this.C6],this.timer,0);B.kD([this,this.C6],this
);}if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.O);},E5:function(value){var A;
if(value===this.CQ)return;this.CQ=value;if(!!this.G&&((this.E&0x1)===0x1))this.G.
Ag(this.O);},E7:function(value){var A;if(value<0)value=0;if((value===this.CT)&&(
this.Be===-1))return;this.CT=value;if(!this.timer)this.Be=-1;if(!!this.G&&((this.
E&0x1)===0x1))this.G.Ag(this.O);},DX:function(value){var A;if(value===this.X)return;
if(!!this.X&&this.X.DW)B.rA([this,this.EI],this.X,0);this.X=value;this.Be=-1;if(
!!value&&value.DW)B.rl([this,this.EI],value,0);if(this.BZ){this.Dw(false);this.Dw(
true);}if(((this.C7&&!!value)&&(value.FrameSize[0]>0))&&(value.FrameSize[1]>0))this.
Am(B.sp(this.Dt(),this.CF));if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.O);
},Dt:function(){var A;if(!this.X)return AF;var orient=this.Cu;var Al=this.CQ;var
AM=this.X.FrameSize;var Z=this.O;var width=Z[2]-Z[0];var height=Z[3]-Z[1];if(!AM[
0]||!AM[1])return AF;if((orient===1)||(orient===3)){width=height;height=Z[2]-Z[0
];}var Ac=[0,0,width,height];var K=Ac;if(((Al&0x40)===0x40)){var Hc=((((Ac[2]-Ac[
0])<<16)+((AM[0]/2)|0))/AM[0])|0;var EP=((((Ac[3]-Ac[1])<<16)+((AM[1]/2)|0))/AM[
1])|0;var C5=Hc;if(EP>C5)C5=EP;K=B.sU(K,((AM[0]*C5)+32768)>>16);K=B.sR(K,((AM[1]
*C5)+32768)>>16);}else if(((Al&0x80)===0x80)){var Hc=((((Ac[2]-Ac[0])<<16)+((AM[
0]/2)|0))/AM[0])|0;var EP=((((Ac[3]-Ac[1])<<16)+((AM[1]/2)|0))/AM[1])|0;var C5=Hc;
if(EP<C5)C5=EP;K=B.sU(K,((AM[0]*C5)+32768)>>16);K=B.sR(K,((AM[1]*C5)+32768)>>16);
}else if(!((Al&0x100)===0x100))K=B.sT(K,AM);if((K[2]-K[0])!==(Ac[2]-Ac[0])){if(((
Al&0x4)===0x4))K=B.sV(K,Ac[2]-(K[2]-K[0]));else if(((Al&0x2)===0x2))K=B.sV(K,(Ac[
0]+(((Ac[2]-Ac[0])/2)|0))-(((K[2]-K[0])/2)|0));}if((K[3]-K[1])!==(Ac[3]-Ac[1])){
if(((Al&0x20)===0x20))K=B.sX(K,Ac[3]-(K[3]-K[1]));else if(((Al&0x10)===0x10))K=B.
sX(K,(Ac[1]+(((Ac[3]-Ac[1])/2)|0))-(((K[3]-K[1])/2)|0));}if(!orient)K=B.sq(K,Z.slice(
0,2));else if(orient===1){var BD=[Z[0]+K[1],Z[3]-K[2]];K=[].concat(BD,B.so(BD,[K[
3]-K[1],K[2]-K[0]]));}else if(orient===2){var BD=[Z[2]-K[2],Z[3]-K[3]];K=[].concat(
BD,B.so(BD,[K[2]-K[0],K[3]-K[1]]));}else if(orient===3){var BD=[Z[2]-K[3],Z[1]+K[
0]];K=[].concat(BD,B.so(BD,[K[3]-K[1],K[2]-K[0]]));}return B.sq(K,this.CF);},_Init:
function(aArg){B.Core.AN._Init.call(this,aArg);this.__proto__=C.E2;},_Mark:function(
D){var A;B.Core.AN._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.El)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.X)&&(
A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};C.Text={BO:null,B$:
B.pm,At:B.g3,DY:0,Dy:0,HH:null,A8:0xFFFFFFFF,A9:0xFFFFFFFF,A$:0xFFFFFFFF,A_:0xFFFFFFFF
,Dz:0,CF:B.pm,CQ:0x12,String:B.g3,AY:null,Dx:255,Cu:0,D3:false,C7:false,DU:false
,FU:false,Bo:false,B0:function(Ar,aClip,aOffset,Aq,aBlend){var A;if((this.At===B.
g3)||!this.AY)return;var Al=this.CQ;var orient=this.Cu;var font=this.AY;var Ac=B.
sq(this.O,aOffset);var AD=this.A_;var AE=this.A$;var AC=this.A9;var AB=this.A8;var
BC=(((Aq+1)*this.Dx)>>8)+1;var CA=this.At.charCodeAt(0)||0;var S=B.sq(this.Dt(),
aOffset);var BS=[Ac[0]-S[0],(Ac[1]-S[1])-font.Ascent];if(CA<1)return;if(BC<256){
AD=(AD&0x00FFFFFF)|((((((AD>>24)&0xFF)*BC)>>8)&0xFF)<<24);AE=(AE&0x00FFFFFF)|((((((
AE>>24)&0xFF)*BC)>>8)&0xFF)<<24);AC=(AC&0x00FFFFFF)|((((((AC>>24)&0xFF)*BC)>>8)&
0xFF)<<24);AB=(AB&0x00FFFFFF)|((((((AB>>24)&0xFF)*BC)>>8)&0xFF)<<24);}if(((Al&0x80
)===0x80)){if(this.Gj())Al=(Al&~0x80)|0x4;else Al=(Al&~0x80)|0x1;}if(((CA===1)&&
!((Al&0x40)===0x40))&&!orient){Ar.Hj(aClip,font,this.At,2,(this.At.charCodeAt(1)||
0)-1,Ac,BS,0,orient,AD,AE,AC,AB,true);return;}var leading=font.Leading;if(this.Dy>
0)leading=(this.Dy-font.Ascent)-font.Descent;var Hb=(font.Ascent+font.Descent)+leading;
var Fq=aClip[1]-S[1];var Fr=aClip[3]-S[1];var EA=S[2]-S[0];var DT=0;var I=1;var Bv=
this.At.charCodeAt(I)||0;if(orient===1){BS=[S[3]-Ac[3],(Ac[0]-S[0])-font.Ascent];
Fq=aClip[0]-S[0];Fr=aClip[2]-S[0];EA=S[3]-S[1];}else if(orient===2){BS=[S[2]-Ac[
2],(S[3]-Ac[3])-font.Ascent];Fq=S[3]-aClip[3];Fr=S[3]-aClip[1];}else if(orient===
3){BS=[Ac[1]-S[1],(S[2]-Ac[2])-font.Ascent];Fq=S[2]-aClip[2];Fr=S[2]-aClip[0];EA=
S[3]-S[1];}while(((DT+Hb)<Fq)&&(Bv>0)){I=I+Bv;DT=DT+Hb;Bv=this.At.charCodeAt(I)||
0;}while((DT<Fr)&&(Bv>0)){var DM=B.sn(BS,[0,DT]);var Ib=0;var FB=false;if(((((Al&
0x40)===0x40)&&((this.At.charCodeAt((I+Bv)-1)||0)!==0x0A))&&((this.At.charCodeAt(
I+1)||0)!==0x0A))&&((this.At.charCodeAt(I+Bv)||0)!==0x00))FB=true;if(FB&&!!(Al&0x6
)){var Ia=I+Bv;var HV=this.At.indexOf(String.fromCharCode(0x20),I+1);var HW=this.
At.indexOf(String.fromCharCode(0xA0),I+1);if(((HV<0)||(HV>=Ia))&&((HW<0)||(HW>=Ia
)))FB=false;}if(FB)Ib=EA;else if(((Al&0x4)===0x4))DM=[(DM[0]-EA)+font.Eh(this.At
,I+1,Bv-1),DM[1]];else if(((Al&0x2)===0x2))DM=[(DM[0]-((EA/2)|0))+((font.Eh(this.
At,I+1,Bv-1)/2)|0),DM[1]];Ar.Hj(aClip,font,this.At,I+1,Bv-1,Ac,DM,Ib,orient,AD,AE
,AC,AB,true);I=I+Bv;DT=DT+Hb;Bv=this.At.charCodeAt(I)||0;}},Am:function(value){var
A;if(B.sb(value,this.O))return;var Ha=false;if(!this.Cu||(this.Cu===2))Ha=((A=this.
O)[2]-A[0])!==(value[2]-value[0]);else Ha=((A=this.O)[3]-A[1])!==(value[3]-value[
1]);if((((Ha&&!this.Dz)&&this.D3)&&this.Bo)&&!((this.E&0x2000)===0x2000)){this.At=
B.g3;this.Bo=false;B.kD([this,this.C4],this);}if(((this.DU&&this.Bo)&&!B.sa([(A=
this.O)[2]-A[0],A[3]-A[1]],[value[2]-value[0],value[3]-value[1]]))&&!((this.E&0x2000
)===0x2000)){this.At=B.g3;this.Bo=false;B.kD([this,this.C4],this);}B.Core.AN.Am.
call(this,value);B.kD([this,this.G9],this);},Co:function(){if(!!this.BO){this.GT(
this.BO);this.BO=null;}},GT:function(aBidi){if(!aBidi)return;B.mg(aBidi);},Jp:function(
aSize){var bidi=null;bidi=B.pd(aSize);return bidi;},G9:function(Az){B.kD(this.HH
,this);},C4:function(Az){B.kD([this,this.FI],this);},FI:function(Az){var A;if(this.
Bo)return;var orient=this.Cu;var width=(A=this.O)[2]-A[0];var height=(A=this.O)[
3]-A[1];var B9=-1;if((orient===1)||(orient===3)){width=height;height=(A=this.O)[
2]-A[0];}if(this.D3){if(this.Dz>0)B9=this.Dz;else if(!this.C7)B9=width-(this.DY*
2);else B9=width;if(B9<0)B9=1;}if(!!this.BO);{this.GT(this.BO);this.BO=null;}this.
Bo=true;if((this.String!==B.g3)&&!!this.AY){var length=this.String.length;if(this.
FU)this.BO=this.Jp(length);this.At=this.AY.I9(this.String,0,B9,length,this.BO);if(
!!this.BO&&!this.Iz()){this.GT(this.BO);this.BO=null;}}else this.At=B.g3;this.B$=
Ai;if((this.DU&&(this.At!==B.g3))&&!this.C7){var Al=this.CQ;var font=this.AY;var
leading=font.Leading;var AA=this.At;var FM=this.Gj();if(((Al&0x80)===0x80)){if(FM
)Al=(Al&~0x80)|0x4;else Al=(Al&~0x80)|0x1;}if(this.Dy>0)leading=(this.Dy-font.Ascent
)-font.Descent;var EN=(font.Ascent+font.Descent)+leading;var CA=AA.charCodeAt(0)||
0;var Dm=((height+leading)/EN)|0;var GR=false;var Fp=false;if(Dm<=0)Dm=1;if(CA>Dm
){var Cl=0;var EO=0;var FL=CA-1;var AW=0;var Bh=AA.length;var tmp=B.g3;if(((Al&0x20
)===0x20))EO=CA-Dm;else if(((Al&0x10)===0x10)){EO=((CA-Dm)/2)|0;FL=(EO+Dm)-1;}else
FL=Dm-1;GR=EO>0;Fp=FL<(CA-1);for(AW=1;Cl<EO;Cl=Cl+1)AW=AW+(AA.charCodeAt(AW)||0);
if(Fp)for(Bh=AW;Cl<FL;Cl=Cl+1)Bh=Bh+(AA.charCodeAt(Bh)||0);if(GR){var Br=AA.charCodeAt(
AW)||0;tmp=(BV+B.s4(AA,AW,Br))+BV;tmp=B.sZ(tmp,0,(Br+2)&0xFFFF);AW=AW+Br;if((tmp.
charCodeAt(Br)||0)===0x0A){tmp=B.sZ(tmp,Br,0xFEFF);tmp=B.sZ(tmp,Br+1,0x0A);}if((
tmp.charCodeAt(2)||0)===0x0A){tmp=B.sZ(tmp,2,0xFEFF);tmp=B.sZ(tmp,1,0x0A);}else tmp=
B.sZ(tmp,1,0xFEFF);}tmp=tmp+B.s4(AA,AW,Bh-AW);if(Fp&&(Bh>=AW)){var Br=AA.charCodeAt(
Bh)||0;var BE=(BV+B.s4(AA,Bh,Br))+BV;BE=B.sZ(BE,0,(Br+2)&0xFFFF);BE=B.sZ(BE,1,0xFEFF
);if((BE.charCodeAt(Br)||0)===0x0A){BE=B.sZ(BE,Br,0xFEFF);BE=B.sZ(BE,Br+1,0x0A);
}if((BE.charCodeAt(2)||0)===0x0A){BE=B.sZ(BE,2,0xFEFF);BE=B.sZ(BE,1,0x0A);}else BE=
B.sZ(BE,1,0xFEFF);tmp=tmp+BE;}AA=String.fromCharCode(Dm&0xFFFF)+tmp;}var Cl=0;var
Fz=1;var FF=width-(this.DY*2);if(this.D3&&(this.Dz>0))FF=this.Dz;CA=AA.charCodeAt(
0)||0;for(;Cl<CA;Cl=Cl+1){var Dq=GR&&!Cl;var Dr=Fp&&(Cl===(CA-1));var B5=false;var
B6=false;var Ea=FM;if((FM&&Dq)&&!Dr){Dq=false;Dr=true;}else if((FM&&Dr)&&!Dq){Dr=
false;Dq=true;}var start=Fz+1;var Br=AA.charCodeAt(Fz)||0;var AW=start;var Bh=(start+
Br)-2;var GZ=-1;var G0=-1;if(!this.D3&&(font.Eh(AA,start,Br-1)>FF)){if(((Al&0x4)===
0x4))B5=true;else if(((Al&0x2)===0x2)){B5=true;B6=true;}else B6=true;}if((AA.charCodeAt(
AW)||0)===0x0A)AW=AW+1;if((AA.charCodeAt(Bh)||0)===0x0A)Bh=Bh-1;while(B5&&((AA.charCodeAt(
AW)||0)===0xFEFF))AW=AW+1;while(B6&&((AA.charCodeAt(Bh)||0)===0xFEFF))Bh=Bh-1;B5=
B5&&!Dr;B6=B6&&!Dq;while((((B5||B6)||Dq)||Dr)&&(AW<Bh)){if((B5&&(Ea||!B6))||Dq){
if(GZ>0)AA=B.sZ(AA,GZ,0xFEFF);AA=B.sZ(AA,AW,0x2026);GZ=AW;AW=AW+1;Ea=!Ea;Dq=false;
if(font.Eh(AA,start,Br-1)<=FF){B5=false;B6=false;}else B5=B5||!B6;}if((B6&&(!Ea||
!B5))||Dr){if(G0>0)AA=B.sZ(AA,G0,0xFEFF);AA=B.sZ(AA,Bh,0x2026);G0=Bh;Bh=Bh-1;Ea=
!Ea;Dr=false;if(font.Eh(AA,start,Br-1)<=FF){B5=false;B6=false;}else B6=B6||!B5;}
}Fz=Fz+Br;}this.B$=[font.Hm(AA),((AA.charCodeAt(0)||0)*EN)-leading];this.At=AA;}
if(this.C7&&(this.At!==B.g3)){var BK=[this.DY,0];if((orient===1)||(orient===3)){
BK=[BK[0],BK[0]];BK=[0,BK[1]];}this.E=this.E|0x2000;this.Am(B.sp(B.r7(this.Dt(),
BK),this.CF));this.E=this.E&~0x2000;}if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(
this.O);B.kD([this,this.G9],this);},IH:function(value){if(value===this.FU)return;
this.FU=value;this.At=B.g3;this.Bo=false;B.kD([this,this.C4],this);},IG:function(
value){if(value===this.DU)return;this.DU=value;this.At=B.g3;this.Bo=false;B.kD([
this,this.C4],this);},HD:function(value){if(value===this.C7)return;this.C7=value;
if(value&&this.DU){this.At=B.g3;this.Bo=false;B.kD([this,this.C4],this);}if(value&&
this.Bo){var BK=[this.DY,0];if((this.Cu===1)||(this.Cu===3)){BK=[BK[0],BK[0]];BK=[
0,BK[1]];}this.E=this.E|0x2000;this.Am(B.sp(B.r7(this.Dt(),BK),this.CF));this.E=
this.E&~0x2000;}},I8:function(value){if(value===this.D3)return;this.D3=value;if(
this.Bo){this.At=B.g3;this.Bo=false;B.kD([this,this.C4],this);}if(value&&!this.Dz
)this.E=this.E&~0x100;else this.E=this.E|0x100;},E5:function(value){var A;if(value===
this.CQ)return;this.CQ=value;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.O);
if(this.DU){this.At=B.g3;this.Bo=false;B.kD([this,this.C4],this);}if(this.Bo)B.kD([
this,this.G9],this);},En:function(value){if(value===this.String)return;this.String=
value;this.At=B.g3;this.Bo=false;B.kD([this,this.C4],this);},Gv:function(value){
if(value===this.AY)return;this.AY=value;this.At=B.g3;this.Bo=false;B.kD([this,this.
C4],this);},Ch:function(value){var A;if((((value===this.A_)&&(value===this.A$))&&(
value===this.A8))&&(value===this.A9))return;this.A_=value;this.A$=value;this.A8=
value;this.A9=value;if(!!this.G&&((this.E&0x1)===0x1))this.G.Ag(this.O);},Gj:function(
){if(!this.Bo)this.FI(this);if(!this.BO)return false;var result=false;var bidi=this.
BO;result=B.pc(bidi);return result;},Iz:function(){if(!this.Bo)this.FI(this);if(
!this.BO)return false;var result=false;var bidi=this.BO;result=B.rq(bidi);return result;
},Dt:function(){var A;if((this.String===B.g3)||!this.AY)return AF;if(!this.Bo)this.
FI(this);if(this.At===B.g3)return AF;var leading=this.AY.Leading;var EN=(this.AY.
Ascent+this.AY.Descent)+this.AY.Leading;if(this.Dy>0){leading=(this.Dy-this.AY.Ascent
)-this.AY.Descent;EN=this.Dy;}if(B.sa(this.B$,Ai))this.B$=[this.AY.Hm(this.At),this.
B$[1]];this.B$=[this.B$[0],((this.At.charCodeAt(0)||0)*EN)-leading];var Al=this.
CQ;var orient=this.Cu;var Z=this.O;var BK=this.DY;var width=Z[2]-Z[0];var height=
Z[3]-Z[1];if((orient===1)||(orient===3)){width=height;height=Z[2]-Z[0];}var Ac=[
BK,0,width-BK,height];var K=[].concat(Ac.slice(0,2),B.so(Ac.slice(0,2),this.B$));
if(((Al&0x80)===0x80)){if(this.Gj())Al=(Al&~0x80)|0x4;else Al=(Al&~0x80)|0x1;}if(((
Al&0x40)===0x40)){var B9=this.Dz;if(B9<=0)B9=width-(this.DY*2);if(B9<0)B9=0;if(B9>(
K[2]-K[0]))K=B.sU(K,B9);}if((K[2]-K[0])!==(Ac[2]-Ac[0])){if(((Al&0x4)===0x4))K=B.
sV(K,Ac[2]-(K[2]-K[0]));else if(((Al&0x2)===0x2))K=B.sV(K,(Ac[0]+(((Ac[2]-Ac[0])
/2)|0))-(((K[2]-K[0])/2)|0));}if((K[3]-K[1])!==(Ac[3]-Ac[1])){if(((Al&0x20)===0x20
))K=B.sX(K,Ac[3]-(K[3]-K[1]));else if(((Al&0x10)===0x10))K=B.sX(K,(Ac[1]+(((Ac[3
]-Ac[1])/2)|0))-(((K[3]-K[1])/2)|0));}if(!orient)K=B.sq(K,Z.slice(0,2));else if(
orient===1){var BD=[Z[0]+K[1],Z[3]-K[2]];K=[].concat(BD,B.so(BD,[this.B$[1],this.
B$[0]]));}else if(orient===2){var BD=[Z[2]-K[2],Z[3]-K[3]];K=[].concat(BD,B.so(BD
,this.B$));}else if(orient===3){var BD=[Z[2]-K[3],Z[1]+K[0]];K=[].concat(BD,B.so(
BD,[this.B$[1],this.B$[0]]));}return B.sq(K,this.CF);},_Init:function(aArg){B.Core.
AN._Init.call(this,aArg);this.__proto__=C.Text;},_Done:function(){this.__proto__=
C.Text;this.Co();B.Core.AN._Done.call(this);},_Mark:function(D){var A;B.Core.AN.
_Mark.call(this,D);if((A=this.HH)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.AY)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Text"};C.JW={
Ih:0x1,Ig:0x2,Ii:0x4,Il:0x8,Ik:0x10,Ij:0x20,Ke:0x40,Kf:0x80,Kh:0x100};C.Ki={Ih:0x1
,Ig:0x2,Ii:0x4,Il:0x8,Ik:0x10,Ij:0x20,JH:0x40,JG:0x80};C.Cu={J3:0,Kc:1,Ka:2,Kb:3
};
C._Init=function(){C.Fe.__proto__=B.Core.AN;C.Ca.__proto__=B.Core.AN;C.Gc.__proto__=
B.Core.AN;C.E2.__proto__=B.Core.AN;C.Text.__proto__=B.Core.AN;};C.AO=function(D){
};return C;})();

/* Embedded Wizard tutorial application */