(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[1813],{1813:function(t,i,o){"use strict";o.r(i),o.d(i,{scrollView:function(){return a}});var e=o(9122),s=o(7827),l=o(1160),r=o(5841),h=o(8754),n=o(7870),c=o(9296),a=function(t,i,o){n.s.call(this,t,i,o)};e.x.extend(a.prototype,n.s.prototype),e.x.extend(a.prototype,c.g.prototype),a.prototype.defaultOptions={useConfig:!0,pluginType:"uiplugin.scrollView",pluginName:"scrollView",userEvents:["onscroll","onscrollbottom"],parseChild:!0,verticalScroll:!0,horizontalScroll:!1,bounce:!0,paging:!1,showVerticalScroll:!0,showHorizontalScroll:!0,slideDuration:1200,resilienceDuration:500,pagingDuration:300,slidePeriod:15,scrollTop:0,scrollLeft:0,scrollType:"mobile",resizeAutoScroll:!1,css3d:!1,fadeOutScrollBar:!0,eventSmoothing:!0,overScrollGlow:!1,dragScrollSize:50,slideThreshold:5,useStylus:!1},a.prototype.initialize=function(t){this.isMobile=h.D.isMobile(),this.isAndroid=/android/.test(navigator.userAgent.toLowerCase()),this.transformArr=["-webkit-transform",":","translate3d(",,"px, ",,"px, 0px) scale(1)"],this.support3D="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,this.fingerTop=0,this.fingerLeft=0,this.scrollLock=!1,this.measureDrawTime=!1,WebSquare.dragdrop2.scrollable[this.uuid]={scroll:!1}},a.prototype.toHTML=function(){try{var t=[],i=this.getChildren(),o=this.options.className,e="",s=""==this.options.style?"":"style='"+this.options.style+"'",r=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";this.isMobile||"auto"!=this.options.scrollType?"accessibility"==this.options.scrollType?o+=" nativeScroll":e=" style='width: 100%;height: 100%;overflow: hidden'":o+=" nativeScroll",t.push("<div id='"+this.id+"' "+s+" class='w2scrollView "+o+"' "+r+">"),t.push("<div id='"+this.id+"_container' class='w2scrollView_container'"+e+">");for(var h=0;h<i.length;h++)t.push(i[h].toHTML());return t.push("</div>"),t.push("<div id='"+this.id+"_iScrollX' class='w2scrollView_iScrollX' style='visibility:hidden;left:0px;'></div>"),t.push("<div id='"+this.id+"_iScrollY' class='w2scrollView_iScrollY' style='visibility:hidden;top:0px;'></div>"),t.push("<div id='"+this.id+"_overScrollTop' class='w2scrollView_overScrollTop' style='display:none;top:0px;'></div>"),t.push("<div id='"+this.id+"_overScrollBottom' class='w2scrollView_overScrollBottom' style='display:none;bottom:0px;'></div>"),t.push("</div>"),t.join("")}catch(t){l.w.printStackTrace(t,null,this)}},a.prototype.setAction=function(){this.dom.container=this.getElementById(this.id+"_container"),this.dom.iScrollX=this.getElementById(this.id+"_iScrollX"),this.dom.iScrollY=this.getElementById(this.id+"_iScrollY"),this.dom.overScrollTop=this.getElementById(this.id+"_overScrollTop"),this.dom.overScrollBottom=this.getElementById(this.id+"_overScrollBottom"),this.iScroll={prevTouches:[]},this.isMobile?(this.event.addListener(this.render,"ontouchstart",this.event.bindAsEventListener(this,this.handleTouchStart)),this.event.addListener(this.render,"ontouchmove",this.event.bindAsEventListener(this,this.handleTouchMove)),this.event.addListener(this.render,"ontouchend",this.event.bindAsEventListener(this,this.handleTouchEnd))):"auto"!=this.options.scrollType&&"accessibility"!=this.options.scrollType&&(this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleTouchStart)),this.event.addListener(document.documentElement,"onmousemove",this.event.bindAsEventListener(this,this.handleTouchMove)),this.event.addListener(document.documentElement,"onmouseup",this.event.bindAsEventListener(this,this.handleTouchEnd)),this.event.addListener(document.documentElement,"onmouseout",this.event.bindAsEventListener(this,this.handleMouseOut)),this.event.addListener(this.render,"onselectstart",this.event.bindAsEventListener(this,(function(t){r.B.preventDefault(t)})))),this.iScrollXHeight=parseInt(1.5*this.dom.iScrollX.offsetHeight,10),this.iScrollYWidth=parseInt(1.5*this.dom.iScrollY.offsetWidth,10),
this.checkResize(),this._scrollTo(this.options.scrollLeft,this.options.scrollTop),this.measureDrawTime=!0},a.prototype.setIScroll=function(){try{if(this.options.verticalScroll&&this.options.showVerticalScroll){var t=this.render.clientHeight,i=this.dom.container.scrollHeight;if(i>t){this.options.horizontalScroll&&(t-=this.iScrollXHeight);var o=this.getMaxScrollTop(),e=parseInt(t*t/i,10);e=e<30?30:e;var s=parseInt(this.getScrollTop()*(t-e)/o,10);s<0?(e+=s,s=0):s+e>=t&&(e=t-s),this.options.css3d&&this.support3D?(this.transformArr[3]=0,this.transformArr[5]=s,this.dom.iScrollY.style[this.transformArr[0]]=this.transformArr.slice(2).join("")):this.dom.iScrollY.style.top=s+"px",this.dom.iScrollY.style.height=e+"px",this.dom.iScrollY.style.visibility="visible"}else this.dom.iScrollY.style.visibility="hidden"}if(this.options.horizontalScroll&&this.options.showHorizontalScroll){var r=this.render.clientWidth,h=this.dom.container.scrollWidth;if(h>r){this.options.verticalScroll&&(r-=this.iScrollYWidth);var n=this.getMaxScrollLeft(),c=parseInt(r*r/h,10);c=c<30?30:c;var a=parseInt(this.getScrollLeft()*(r-c)/n,10);a<0?(c+=a,a=0):a+c>=r&&(c=r-a),this.options.css3d&&this.support3D?(this.transformArr[3]=a,this.transformArr[5]=0,this.dom.iScrollX.style[this.transformArr[0]]=this.transformArr.slice(2).join("")):this.dom.iScrollX.style.left=a+"px",this.dom.iScrollX.style.width=c+"px",this.dom.iScrollX.style.visibility="visible"}else this.dom.iScrollX.style.visibility="hidden"}}catch(t){l.w.printStackTrace(t,null,this)}},a.prototype.checkResize=function(){try{var t=this.render.clientHeight,i=this.render.clientWidth,o=this.dom.container.scrollHeight,e=this.dom.container.scrollWidth;if(!this.sizeBackup||this.sizeBackup.renderWidth!=i||this.sizeBackup.renderHeight!=t||this.sizeBackup.scrollWidth!=e||this.sizeBackup.scrollHeight!=o){this.sizeBackup={renderWidth:i,renderHeight:t,scrollWidth:e,scrollHeight:o};var r=parseInt(this.dom.container.style.top||0,10);this.isSliding&&r&&(this.stopSlide(),this._scrollTo(null,this.dom.container.scrollTop-r));var h=this.getScrollLeft(),n=this.getScrollTop(),c=this.getMaxScrollLeft(),a=this.getMaxScrollTop();if(this.options.resizeAutoScroll&&this.sizeBackup){for(var d=document.activeElement,p=d;(p=p.parentNode)&&p!=this.render;);if(p){var S=WebSquare.style.getAbsoluteTop(d),u=WebSquare.style.getAbsoluteTop(this.render),v=n;S<u?v-=u-S:S+d.offsetHeight>u+t&&(v+=S+d.offsetHeight-(u+t)),v!==n&&v>=0&&v<=a&&this._scrollTo(null,v)}}(h>c||n>a)&&(this.stopSlide(),this._scrollTo(h<c?h:c,n<a?n:a)),this.setIScroll()}s.v.setTimer(this.checkResize,{key:this.id+"_checkResize",caller:this,delay:100})}catch(t){l.w.printStackTrace(t,null,this)}},a.prototype.iScrollAddMoveClass=function(){this.options.fadeOutScrollBar&&(s.v.clearTimer(this.id+"_iScrollRemoveClass"),WebSquare.style.setStyle(this.dom.iScrollX,"opacity","1"),WebSquare.style.setStyle(this.dom.iScrollY,"opacity","1")),this.__addClass(this.dom.iScrollX,"w2scrollView_iScrollX_move"),this.__addClass(this.dom.iScrollY,"w2scrollView_iScrollY_move")},a.prototype.iScrollRemoveMoveClass=function(){this.options.fadeOutScrollBar?WebSquare.style.animate([this.dom.iScrollX,this.dom.iScrollY],{opacity:0},{key:this.id+"_iScrollRemoveClass",duration:500,easing:"ease-out",caller:this,complete:function(){this.__removeClass(this.dom.iScrollX,"w2scrollView_iScrollX_move"),this.__removeClass(this.dom.iScrollY,"w2scrollView_iScrollY_move")}}):(this.__removeClass(this.dom.iScrollX,"w2scrollView_iScrollX_move"),this.__removeClass(this.dom.iScrollY,"w2scrollView_iScrollY_move"))},a.prototype.scrollTo=function(t,i,o){this.stopSlide(),(o=o||{}).duration=null==o.duration?500:o.duration,o.timingFunction=o.timingFunction||"ease",this.options.horizontalScroll&&"number"==typeof t&&(o.initX=this.getScrollLeft(),o.finishX=t),this.options.verticalScroll&&"number"==typeof i&&(o.initY=this.getScrollTop(),o.finishY=i),this.iScroll.prevTouches=[],this.isSliding=!0,this.setIScroll(),this.iScrollAddMoveClass()
;var e=o.delay||0;e<=0?this.slide(o):s.v.setTimer(this.slide,{key:this.id+"_iScroll_slide",caller:this,delay:e,args:[o]})},a.prototype._scrollTo=function(t,i){this.measureDrawTime&&s.v.measureTime((function(t){this.options.slidePeriod=parseInt(t.aver,10)}),{key:this.id+"_measureDrawTime",caller:this});t=parseInt(t,10),i=parseInt(i,10);var o=this.getScrollLeft(),e=this.getScrollTop(),l=this.getMaxScrollLeft(),h=this.getMaxScrollTop();if(t=isNaN(t)?o:t,i=isNaN(i)?e:i,t!=o||i!=e){if(WebSquare.getBody().getLayerListener().hideAll(),this.options.css3d&&this.support3D)this.transformArr[3]=-t,this.transformArr[5]=-i,this.dom.container.style.cssText=this.transformArr.join("");else{var n=t,c=0,a=i,d=0;t<0?(n=0,c=-t):l<t&&(n=l,c=-(t-l)),i<0?(a=0,d=-i):h<i&&(a=h,d=-(i-h)),this.dom.container.scrollLeft=n,this.dom.container.scrollTop=a,this.dom.container.style.left=c+"px",this.dom.container.style.top=d+"px"}this.options.scrollLeft=t,this.options.scrollTop=i,this.setIScroll(),r.B.fireEvent(this,"onscroll",t,i),!this.scrollBottom&&i>=h&&(this.scrollBottom=!0,r.B.fireEvent(this,"onscrollbottom"))}},a.prototype.scrollBy=function(t,i,o){this.stopSlide(!0);t=t||0,i=i||0;var e=this.getScrollLeft(),s=this.getScrollTop();this.scrollTo(e+t,s+i,o)},a.prototype.resetScrollBottom=function(){this.scrollBottom=!1},a.prototype.slide=function(t){try{s.v.clearTimer(this.id+"_iScroll_slide");var i=this.render.clientWidth,o=this.render.clientHeight,e=this.getScrollTop(),r=this.getScrollLeft(),h=this.getMaxScrollTop(),n=this.getMaxScrollLeft();null==t.endTime&&(t.endTime=(new Date).getTime()+t.duration),null==t.slidePeriod&&(t.slidePeriod=this.options.slidePeriod);var c=null==t.initX?r:t.initX,a=null==t.initY?e:t.initY,d=null==t.finishX?r:t.finishX,p=null==t.finishY?e:t.finishY,S=t.duration,u=(new Date).getTime()-(t.endTime-S);this.forceToStopSlide&&(u=S),c<0&&2*c<d&&d<0&&(d=0),a<0&&2*a<p&&p<0&&(p=0),c>n&&n<d&&d<2*c-n&&(d=n),a>h&&h<p&&p<2*a-h&&(p=h);var v=WebSquare.style.cubicBezierAtTime(u/S,t.timingFunction,S/1e3),m=c+(d-c)*v,f=a+(p-a)*v;if(this.options.bounce)!t.xResilience&&(m<0&&d<0||n<m&&n<d)&&(t.xResilience=!0,m<-i/2&&(m=-i/2),m>n+i/2&&(m=n+i/2),d<-i?(c=m,d=-i):d>n+i&&(c=m,d=n+i),d<0?t.turningPointX=d/2:d>n&&(t.turningPointX=n+(d-n)/2)),!t.yResilience&&(f<0&&p<0||h<f&&h<p)&&(t.yResilience=!0,f<-o/2&&(f=-o/2),f>h+o/2&&(f=h+o/2),p<-o?(a=f,p=-o):p>h+o&&(a=f,p=h+i),t.turningPointY=p<0?p/2:h+(p-h)/2),t.xResilience&&(m<t.turningPointX&&d<0||m>t.turningPointX&&d>0)&&(m=-m+2*t.turningPointX),t.yResilience&&(f<t.turningPointY&&p<0||f>t.turningPointY&&p>0)&&(f=-f+2*t.turningPointY);else{m<0&&(m=0),m>n&&(m=n),f<0&&(f=0),f>h&&(f=h);var g=d==m||d<=0&&m<=0||d>=n&&m>=n,T=p==f||p<=0&&f<=0||p>=h&&f>=h,y=this.options.horizontalScroll,w=this.options.verticalScroll;(y&&w&&g&&T||y&&!w&&g||!y&&w&&T)&&(u=S)}if(t.initX=c,t.initY=a,t.finishX=d,t.finishY=p,u>=S){m=t.finishX,f=t.finishY,m<0&&(m=0),m>n&&(m=n),f<0&&(f=0),f>h&&(f=h),this._scrollTo(m,f),this.stopSlide();var b=!0;("none"!=this.dom.overScrollTop.style.display&&this.dom.overScrollTop.offsetTop>=-this.dom.overScrollTop.offsetHeight||"none"!=this.dom.overScrollBottom.style.display&&this.dom.overScrollBottom.offsetTop<this.render.clientHeight)&&(b=!1),this.hideOverScrollGlow(b)}else this._scrollTo(m,f),s.v.setTimer(this.slide,{key:this.id+"_iScroll_slide",caller:this,delay:t.slidePeriod,args:[t]})}catch(t){l.w.printStackTrace(t,null,this)}},a.prototype.stopSlide=function(t){try{this.isSliding&&(this.isSliding=!1,this.forceToStopSlide=t,s.v.clearTimer(this.id+"_iScroll_slide",t),this.forceToStopSlide=null,this.iScrollRemoveMoveClass())}catch(t){l.w.printStackTrace(t,null,this)}},a.prototype.getSlideFactor=function(t,i){var o=this.isMobile?.3:1;return parseInt(o*t/100*i,10)},a.prototype.hideOverScrollGlow=function(t){if(!this.options.bounce&&this.options.overScrollGlow){var i=this,o=this.getScrollTop();t?0==o?(WebSquare.style.show(this.dom.overScrollTop),
WebSquare.style.setStyle(this.dom.overScrollTop,"top",-this.dom.overScrollTop.offsetHeight+"px"),WebSquare.style.animate(this.dom.overScrollTop,{top:0},{key:this.id+"_hideOverScrollGlowWithGlow",easing:"ease-in",duration:300,complete:function(){i.hideOverScrollGlow()}})):o==this.getMaxScrollTop()&&(WebSquare.style.show(this.dom.overScrollBottom),WebSquare.style.setStyle(this.dom.overScrollBottom,"bottom",-this.dom.overScrollBottom.offsetHeight+"px"),WebSquare.style.animate(this.dom.overScrollBottom,{bottom:0},{key:this.id+"_hideOverScrollGlowWithGlow",easing:"ease-in",duration:300,complete:function(){i.hideOverScrollGlow()}})):"none"!=this.dom.overScrollTop.style.display&&this.dom.overScrollTop.offsetTop>=-this.dom.overScrollTop.offsetHeight?WebSquare.style.animate(this.dom.overScrollTop,{top:-this.dom.overScrollTop.offsetHeight},{key:this.id+"_hideOverScrollGlow",easing:"ease-out",duration:300,complete:function(){WebSquare.style.hide(i.dom.overScrollTop)}}):"none"!=this.dom.overScrollBottom.style.display&&this.dom.overScrollBottom.offsetTop<this.render.clientHeight&&WebSquare.style.animate(this.dom.overScrollBottom,{bottom:-this.dom.overScrollBottom.offsetHeight},{key:this.id+"_hideOverScrollGlow",easing:"ease-out",duration:300,complete:function(){WebSquare.style.hide(i.dom.overScrollBottom)}})}},a.prototype.setScrollLock=function(t){this.scrollLock=!!t},a.prototype.getContentSize=function(t){try{var i=this.dom.container.scrollWidth,o=this.dom.container.scrollHeight;if(!t)return{width:i,height:o};if("height"==(t=t.toLowerCase()))return o;if("width"==t)return i;$l("getContentSize : wrong sizeName["+t+"]["+this.id+"]")}catch(t){l.w.printStackTrace(t)}},a.prototype.getMaxScrollTop=function(){var t=this.dom.container.scrollHeight-this.render.clientHeight;return t>=0?t:0},a.prototype.getMaxScrollLeft=function(){var t=this.dom.container.scrollWidth-this.render.clientWidth;return t>=0?t:0},a.prototype.getScrollTop=function(){try{if(this.options.css3d&&this.support3D)return this.options.scrollTop;var t=this.dom.container.scrollTop;return 0!=t&&t!=this.getMaxScrollTop()||(t-=parseInt(this.dom.container.style.top||0,10)),this.options.scrollTop=t,t}catch(t){l.w.printStackTrace(t)}},a.prototype.getScrollLeft=function(){try{if(this.options.css3d&&this.support3D)return this.options.scrollLeft;var t=this.dom.container.scrollLeft;return 0!=t&&t!=this.getMaxScrollLeft()||(t-=parseInt(this.dom.container.style.left||0,10)),this.options.scrollLeft=t,t}catch(t){l.w.printStackTrace(t)}},a.prototype.handleTouchStart=function(t){try{if(this.isTouched=!0,this.options.useStylus=t.touches&&t.touches[0].touchType&&t.touches[0].force>0?"stylus"===t.touches[0].touchType:this.options.useStylus||/iPad/.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1&&!window.MSStream,r.B.stopPropagation(t),this.stopSlide(),!t.touches||1==t.touches.length){this.setIScroll(),this.iScrollAddMoveClass(),this.iScroll.prevTouches=[{x:t.touches?t.touches[0].pageX:t.clientX,y:t.touches?t.touches[0].pageY:t.clientY}],this.distX=0,this.distY=0;var i=t.touches?t.touches[0]:t;this.pointX=i.pageX,this.pointY=i.pageY,this.iScroll.direction="",this.options.horizontalScroll&&!this.options.verticalScroll?this.iScroll.direction="horizontal":!this.options.horizontalScroll&&this.options.verticalScroll&&(this.iScroll.direction="vertical"),this.fingerLeft=this.getScrollLeft(),this.fingerTop=this.getScrollTop()}}catch(t){l.w.printStackTrace(t)}},a.prototype.handleTouchMove=function(t){try{if(!t.touches||1==t.touches.length){var i=t.touches?t.touches[0]:t,o=i.pageX-this.pointX,e=i.pageY-this.pointY;this.pointX=i.pageX,this.pointY=i.pageY,this.distX+=o,this.distY+=e,this.options.eventSmoothing?s.v.setTimer(this._handleTouchMove,{key:this.id+"_handleTouchMove",caller:this,args:[{clientX:t.touches?t.touches[0].pageX:t.clientX,clientY:t.touches?t.touches[0].pageY:t.clientY}],delay:1,max:1}):this._handleTouchMove(t),
(this.options.useStylus&&Math.abs(this.distX)>6||Math.abs(this.distY)>6)&&r.B.stopEvent(t)}}catch(t){l.w.printStackTrace(t)}},a.prototype._handleTouchMove=function(t){try{if(this.scrollLock||this.iScroll.prevTouches.length<=0)return;this.iScroll.prevTouches.push({x:t.touches?t.touches[0].pageX:t.clientX,y:t.touches?t.touches[0].pageY:t.clientY});var i=this.iScroll.prevTouches.length;this.iScroll.prevTouches=[this.iScroll.prevTouches[i-2],this.iScroll.prevTouches[i-1]];var o=this.iScroll.prevTouches,e=this.options.horizontalScroll?o[0].x-o[1].x:0,s=this.options.verticalScroll?o[0].y-o[1].y:0,r=this.render.clientWidth,h=this.render.clientHeight,n=this.getScrollTop(),c=this.getScrollLeft(),a=this.getMaxScrollTop(),d=this.getMaxScrollLeft();if(this.options.horizontalScroll&&this.options.verticalScroll&&!this.iScroll.direction){var p=Math.abs(s/e);(0==e||0==s)&&Math.abs(e+s)<=2?this.iScroll.direction="":this.iScroll.direction=0==e||p>2.747?"vertical":p<.364?"horizontal":"both"}if("vertical"==this.iScroll.direction?(e=0,c<0?(this._scrollTo(0,null),c=this.fingerLeft=0):c>d&&(this._scrollTo(d,null),c=this.fingerLeft=d)):"horizontal"==this.iScroll.direction&&(s=0,n<0?(this._scrollTo(null,0),n=this.fingerTop=0):n>a&&(this._scrollTo(null,a),n=this.fingerTop=a)),this.options.bounce||this.options.overScrollGlow||(0<=c&&c<=d&&(this.fingerLeft=c),0<=n&&n<=a&&(this.fingerTop=n)),c=this.fingerLeft+=e,n=this.fingerTop+=s,this.options.bounce)c<0?(c/=2)<-r/2&&(c=-r/2):c>d&&(c=d+(c-d)/2)>d+r/2&&(c=d+r/2),n<0?(n/=2)<-h/2&&(n=-h/2):n>a&&(n=a+(n-a)/2)>a+h/2&&(n=a+h/2);else if(c<0&&(c=0),c>d&&(c=d),n<0&&(n=0),n>a&&(n=a),this.options.overScrollGlow){if(this.fingerTop<0){WebSquare.style.show(this.dom.overScrollTop);var S=-2*(u=this.dom.overScrollTop.offsetHeight)/h*this.fingerTop-u;S>0&&(S=0),WebSquare.style.setStyle(this.dom.overScrollTop,"top",S+"px")}else WebSquare.style.hide(this.dom.overScrollTop);if(this.fingerTop>a){WebSquare.style.show(this.dom.overScrollBottom);var u,v=-2*(u=this.dom.overScrollBottom.offsetHeight)/h*(a-this.fingerTop)-u;v>0&&(v=0),WebSquare.style.setStyle(this.dom.overScrollBottom,"bottom",v+"px")}else WebSquare.style.hide(this.dom.overScrollBottom)}this._scrollTo(c,n)}catch(t){l.w.printStackTrace(t)}},a.prototype.handleTouchEnd=function(t){try{this.isTouched=!1;var i=this.iScroll.prevTouches.length;if(r.B.stopPropagation(t),0==i)return;var o=this.render.clientWidth,e=this.render.clientHeight,s=this.dom.container.scrollWidth,h=this.dom.container.scrollHeight,n=this.getMaxScrollLeft(),c=this.getMaxScrollTop(),a=this.getScrollLeft(),d=this.getScrollTop(),p=null,S=null,u=null,v=null;if(i>=2){this.iScroll.prevTouches=[this.iScroll.prevTouches[i-2],this.iScroll.prevTouches[i-1]];var m=this.iScroll.prevTouches,f=m[0].x-m[1].x,g=m[0].y-m[1].y;if("vertical"==this.iScroll.direction&&(f=0),"horizontal"==this.iScroll.direction&&(g=0),f*f+g*g>this.options.slideThreshold*this.options.slideThreshold){if(this.iScroll.prevTouches=[],this.isSliding=!0,this.options.paging){if(this.options.horizontalScroll)(p=(parseInt(a/o,10)+(f>0?1:0))*o)<0&&(p=0),p>n&&(p=n);if(this.options.verticalScroll)(S=(parseInt(d/e,10)+(g>0?1:0))*e)<0&&(S=0),S>c&&(S=c);u=this.options.pagingDuration,v="ease"}else p=a+this.getSlideFactor(f,s),S=d+this.getSlideFactor(g,h),u=this.options.slideDuration,v="deceleration";return this.slide({initX:a,initY:d,finishX:this.options.horizontalScroll?p:null,finishY:this.options.verticalScroll?S:null,duration:u,timingFunction:v}),void(!this.options.bounce&&this.options.overScrollGlow&&(0==d&&S>0||d==c&&S<c)&&this.hideOverScrollGlow())}}if(this.options.paging){if(this.options.horizontalScroll&&!this.options.verticalScroll)p=parseInt((a+o/2)/o,10)*o;else if(!this.options.horizontalScroll&&this.options.verticalScroll){S=parseInt((d+e/2)/e,10)*e}u=this.options.pagingDuration}else u=this.options.resilienceDuration;a<0?p=0:n<a&&(p=n),d<0?S=0:c<d&&(S=c),null!=p||null!=S?(this.iScroll.prevTouches=[],this.isSliding=!0,this.slide({initX:a,
initY:d,finishX:p,finishY:S,xResilience:null!=p,yResilience:null!=S,duration:u,timingFunction:"deceleration"})):(this.iScrollRemoveMoveClass(),this.iScroll.prevTouches=[]),this.hideOverScrollGlow()}catch(t){l.w.printStackTrace(t,null,this)}},a.prototype.handleMouseOut=function(t){null==r.B.getRelatedTarget(t)&&this.handleTouchEnd(t)},a.prototype.finalize=function(){s.v.clearTimer(this.id+"_checkResize"),s.v.clearTimer(this.id+"_iScroll_slide"),s.v.clearTimer(this.id+"_handleTouchMove"),s.v.clearTimer(this.id+"_hideOverScrollGlowWithGlow"),s.v.clearTimer(this.id+"_hideOverScrollGlow"),s.v.clearTimer(this.id+"_iScrollRemoveClass"),WebSquare.dragdrop2.scrollable[this.uuid]=null,delete WebSquare.dragdrop2.scrollable[this.uuid]}}}]);