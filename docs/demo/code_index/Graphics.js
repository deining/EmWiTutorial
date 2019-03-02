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
);if(index.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);index.Graphics=(function(){var B=index;var C={};
var Ai=[0,0];var AF="Can not resize explicitly attached graphics engine bitmaps";
var BV=[0,0,0,0];var CG="No graphics engine bitmap attached to this canvas";var CH=
"The canvas is already initialized with a graphics engine bitmap";var DA="WarpBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";var DB="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
C.Canvas={Cr:B.pn,HB:null,Ds:0,EB:false,Co:function(){if(this.EB)this.DetachBitmap(
);},BN:function(aArg){this.DW=true;},Gw:function(value){if((value[0]<=0)||(value[
1]<=0))value=Ai;if(B.sa(value,this.FrameSize))return;if(this.EB)throw new Error(
AF);this.FrameSize=value;this.BZ=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(
this.FrameDelay>0))&&(this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.
bitmap;B.rK(handle);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(
this.FrameSize[0]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=
this.NoOfFrames;var frameDelay=this.FrameDelay;var handle=null;{handle=B.md(B.b9
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
Ai;this.FrameDelay=0;this.NoOfFrames=1;}this.Cr=[].concat(Ai,this.FrameSize);}if(
!(((A=this.Cr)[0]>=A[2])||(A[1]>=A[3]))){if((this.FrameSize[0]>0)&&(this.FrameSize[
1]>0))(A=this.HB)?A[1].call(A[0],this):null;this.Cr=BV;}},DetachBitmap:function(
){if(!this.EB)throw new Error(CG);this.bitmap=null;this.EB=false;this.FrameSize=
Ai;this.FrameDelay=0;this.NoOfFrames=1;this.BZ=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(CH);if(!aBitmap)return this;this.
bitmap=aBitmap;this.EB=true;var noOfFrames=1;var frameSize=Ai;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.BZ=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},Hj:function(aClip
,GJ,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,GL,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<
0)aOffset=0;if((!GJ||!GJ.font)||((aOffset>0)&&(aOffset>=aString.length)))return;
var orient=0;if(GL===1)orient=90;else if(GL===2)orient=180;else if(GL===3)orient=
270;var dstFrameNo=this.Ds;var dstBitmap=this.bitmap;var srcFont=GJ.font;{B.mf(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},In:function(aClip,aBitmap,aFrameNr
,aDstRect,D5,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){var A;if(!this.bitmap)this.
Update();if(!this.bitmap)return;if((((!aBitmap||!aBitmap.bitmap)||!D5)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=
aBitmap.bitmap;var dstFrameNo=this.Ds;var srcRect=[].concat(Ai,aBitmap.FrameSize
);var left=((D5&0x1)===0x1);var top=((D5&0x2)===0x2);var right=((D5&0x4)===0x4);
var bottom=((D5&0x8)===0x8);var interior=((D5&0x10)===0x10);{B.rE(dstBitmap,srcBitmap
,dstFrameNo,aFrameNr,aClip,aDstRect,srcRect,left,top,right,bottom,interior,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},GD:function(aClip,aBitmap,aFrameNr,aDstX1
,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect
,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter){if(!this.bitmap)this.Update();if(
!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var M=aDstX1;var P=aDstX2;var N=aDstY1;var Q=aDstY2;if(aDstX2<
M)M=aDstX2;if(aDstX3<M)M=aDstX3;if(aDstX4<M)M=aDstX4;if(aDstX2>P)P=aDstX2;if(aDstX3>
P)P=aDstX3;if(aDstX4>P)P=aDstX4;if(aDstY2<N)N=aDstY2;if(aDstY3<N)N=aDstY3;if(aDstY4<
N)N=aDstY4;if(aDstY2>Q)Q=aDstY2;if(aDstY3>Q)Q=aDstY3;if(aDstY4>Q)Q=aDstY4;if(((((
P-M)>4096.000000)||((P-M)<-4096.000000))||((Q-N)>4096.000000))||((Q-N)<-4096.000000
)){B.ta("%s",DA);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNr=this.Ds;{B.tc(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstX1
,aDstY1,aDstW1,aDstX2,aDstY2,aDstW2,aDstX3,aDstY3,aDstW3,aDstX4,aDstY4,aDstW4,aSrcRect
,aColor1,aColor2,aColor3,aColor4,aBlend,aFilter);}},Jb:function(aClip,aBitmap,aFrameNr
,aDstRect,aSrcRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend,aFilter){if(!this.
bitmap)this.Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<
0))||(aFrameNr>=aBitmap.NoOfFrames))return;var top=aDstRect[1];var left=aDstRect[
0];var right=aDstRect[2];var bottom=aDstRect[3];if(((((right-left)>4096.000000)||((
right-left)<-4096.000000))||((bottom-top)>4096.000000))||((bottom-top)<-4096.000000
)){B.ta("%s",DB);return;}var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;
var dstFrameNo=this.Ds;{B.tc(dstBitmap,srcBitmap,dstFrameNo,aFrameNr,aClip,left,
top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend,aFilter);}},Hf:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcPos
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.bitmap;var dstFrameNr=
this.Ds;{B.fo(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip,aDstRect,aSrcPos,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend);}},Hi:function(aClip,aDstRect,aEdgeWidth,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap
)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Ds;{B.rF(dstBitmap,dstFrameNo
,aClip,aDstRect,aEdgeWidth,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},F0:function(
aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.Ds;{
B.g4(dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend
);}},_Init:function(aArg){B.tf.X._Init.call(this,aArg);this.__proto__=C.Canvas;this.
BN(aArg);},_Done:function(){this.__proto__=C.Canvas;this.Co();B.tf.X._Done.call(
this);},_Mark:function(D){var A;B.tf.X._Mark.call(this,D);if((A=this.HB)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"};C.Hk={Left:0x1
,Kj:0x2,Right:0x4,JN:0x8,JX:0x10};
C._Init=function(){C.Canvas.__proto__=B.tf.X;};C.AO=function(D){};return C;})();

/* Embedded Wizard tutorial application */