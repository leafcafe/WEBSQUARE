(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[426],{426:function(t,i,e){"use strict";e.r(i),e.d(i,{roundRectangle:function(){return a}});var o=e(9122),n=e(7827),s=e(1160),r=e(7870),a=function(t,i,e){r.s.call(this,t,i,e)};o.x.extend(a.prototype,r.s.prototype),a.prototype.defaultOptions={pluginType:"uiplugin.roundRectangle",pluginName:"roundRectangle",x:null,y:null,width:null,height:null,arcsize:5,borderWidth:"1px",borderColor:"#000000",fillColor:"#ffffff",gradient:!1,color1:"#ffffff",color2:"#ffffff",gradientType:""},a.prototype.initialize=function(t){try{if(this.mainGU=null,this.gradientList=[],t&&(this.gradientList=WebSquare.Elem.api.getElementsByTagName(t,"gradient",n.v._XML_NAMESPACE.W2),this.gradientList.length>0)){var i=this.gradientList[0];this.options.color1=WebSquare.WebSquareparser.getAttribute(i,"color1"),this.options.color2=WebSquare.WebSquareparser.getAttribute(i,"color2"),this.options.gradientType=WebSquare.WebSquareparser.getAttribute(i,"gradientType")}}catch(t){s.w.printStackTrace(t,null,this)}},a.prototype.toHTML=function(){try{var t=[],i=""==this.options.style?"":"style='"+this.options.style+"'",e=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";return t.push("<div id='"+this.id+"' "+i+" class='w2roundRectangle "+this.options.className+"' "+e+">"),t.push("</div>"),t.join("")}catch(t){s.w.printStackTrace(t,null,this)}},a.prototype.setAction=function(){try{var t=0,i=0,e=0,o=0;t=null!=this.options.x?this.options.x:0,i=null!=this.options.y?this.options.y:0;var r=n.v.makeStyle(this.options.style);e=null!=this.options.width?this.options.width:parseInt(r.width),o=null!=this.options.height?this.options.height:parseInt(r.height),this.mainGU=new WebSquare.uiplugin.graphicUtil(this.id+"_GU",this.render),this.mainGU.drawToolkit.createRoundRect(this.id+"_graphic",this.options.borderWidth,t,i,e,o,this.options.arcsize,this.options.borderColor,this.options.fillColor,!0),""!=this.options.gradientType&&this.mainGU.drawToolkit.addLinearGradient(this.id+"_graphic",this.options.gradientType,this.options.color1,this.options.color2)}catch(t){s.w.printStackTrace(t,null,this)}},a.prototype.gradient=function(t,i,e){try{this.mainGU.drawToolkit.addLinearGradient(this.id+"_graphic",t,i,e)}catch(t){s.w.printStackTrace(t,null,this)}},a.prototype.setSize=function(t,i){try{this.mainGU.drawToolkit.setStyle(this.id+"_graphic",null,null,t,i)}catch(t){s.w.printStackTrace(t,null,this)}}}}]);