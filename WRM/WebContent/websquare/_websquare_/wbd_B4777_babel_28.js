(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[28],{8028:function(e,t,a){"use strict";a.r(t),a.d(t,{iframe:function(){return g}});var o=a(484),n=a(9122),r=a(7827),i=a(1160),s=a(5841),c=a(8754),l=a(6079),m=a(7870),g=function(e,t,a){m.s.call(this,e,t,a)};n.x.extend(g.prototype,m.s.prototype),g.prototype.defaultOptions={pluginType:"uiplugin.iframe",pluginName:"iframe",userEvents:["oniframeload","oniframeunload"],src:"",scrolling:"",title:"",name:"",allowTransparency:"",spa:!1,spaParam:"wq_spaParam",relativePath:!1,spaReplaceHistory:!1,msaName:""},g.prototype.initialize=function(e){try{"true"==r.v.getConfiguration("/WebSquare/spa/@value")&&(this.options.spa=!0),"true"==r.v.getConfiguration("/WebSquare/iframe/relativePath/@value")&&(this.options.relativePath=!0),this.options.dataObject&&this.setDataObject(this.options.dataObject)}catch(e){i.w.printStackTrace(e,null,this)}},g.prototype.toHTML=function(){try{var e="."+WebSquare.w2xExtension,t=this.options.src;if(""!=t){var a,o=t.slice(0),n=-1;(a=t.indexOf("?"))>-1?o=o.substring(0,a):(n=t.indexOf("#"))>-1&&(o=o.substring(0,n)),o.indexOf("&")>-1&&(o=o.substring(0,o.indexOf("&")));var s="w2xPath";if(c.D.getEncodeParameterOption("pathName")?s=c.D.getEncodeParameterOption("pathName"):c.D.isEncodeParameter()&&(s=c.D.encodeParameter("w2xPath")),".xml"===o.substring(o.lastIndexOf(".")))if(this.options.spa){var l="?"+this.options.spaParam+"="+(this.uuid||this.id),m=this.getURL(t),g=location.toString();(b=g.indexOf("?"))<0&&(b=g.indexOf("#")),b<0&&(b=g.length);var u=g.substring(0,b);if(c.D.getEncodeParameterOption("onlyParam")){for(var d=m.split(/[\&\?]/),f=0;f<d.length;f++)(D=d[f].indexOf("="))>=0&&(d[f]=c.D.encodeParameter(d[f].substring(0,D))+d[f].substring(D));m=d.join("&")}if(u.indexOf(e)>=0){var h=m.substring(0,m.lastIndexOf(".xml"))+e;if(c.D.getBoolean(r.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))t=h;else{var w="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();c.D.isEncodeParameter()&&(w=c.D.getEncodeParameterOption("onlyParam")?c.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():c.D.encodeParameter(w)),t=h+w}}else if(WebSquare.isHoneyComb){window.frameElement?window.sessionStorage[window.frameElement.id]=m:window.sessionStorage.w2xpath=m;var p=u.indexOf("?");p>=0&&(u=u.substring(0,p)),t=u+l}else if(c.D.getBoolean(r.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))t=c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?u+l+"#"+s+"="+m:u+l+"#"+s+"="+c.D.encodeParameter(m):u+l+"#"+s+"="+m;else{w="&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();t=c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?u+l+"#"+s+"="+m+(w=c.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config()):u+l+"#"+s+"="+c.D.encodeParameter(m+w):u+l+"#"+s+"="+m+w}}else{var b;t=this.getURL(t),(b=location.toString().indexOf("?"))<0&&(b=location.toString().indexOf("#"));var x=location.toString().substring(0,b);if(b<0&&(x=location.toString()),t=t.replace("?","&"),c.D.getEncodeParameterOption("onlyParam")){var D;for(d=t.split(/[\&\?]/),f=0;f<d.length;f++)(D=d[f].indexOf("="))>=0&&(d[f]=c.D.encodeParameter(d[f].substring(0,D))+d[f].substring(D));t=d.join("&")}if(x.indexOf(e)>=0){h=t.substring(0,t.lastIndexOf(".xml"))+e;if(c.D.getBoolean(r.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))t=h;else{w="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();c.D.isEncodeParameter()&&(w=c.D.getEncodeParameterOption("onlyParam")?c.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():c.D.encodeParameter(w)),t=h+w}
}else WebSquare.isHoneyComb?(window.frameElement?window.sessionStorage[window.frameElement.id]=t:window.sessionStorage.w2xpath=t,t=x):t=c.D.getBoolean(r.v.getConfiguration("/WebSquare/stylesheet/@relativePath"))?c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?x+"?"+s+"="+t+this._getW2Config():x+"?"+s+"="+c.D.encodeParameter(t)+this._getW2Config():x+"?"+s+"="+t+this._getW2Config():c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?x+"?"+s+"="+t+c.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():x+"?"+s+"="+c.D.encodeParameter(t+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()):x+"?"+s+"="+t+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()}else this.options.relativePath&&(t=this.getURL(t));t="src='"+t+"'"}else""==(t=WebSquare.net.getSSLBlankPage())&&(t="src='about:blank'");var S=""==this.options.allowTransparency?"":"allowTransparency='"+this.options.allowTransparency+"'",P=""==this.options.name?"":"name='"+this.options.name+"'",W=""==this.options.scrolling?"":"scrolling='"+this.options.scrolling+"'",y=""==this.options.style?"":"style='"+this.options.style+"'",O=""==this.options.title?"":"title='"+this.options.title+"'";return"<iframe id='"+this.id+"' "+t+" "+y+" class='w2iframe "+this.options.className+"' frameBorder='0' "+O+" "+S+" "+P+" "+W+"></iframe>"}catch(e){i.w.printStackTrace(e,null,this)}},g.prototype.setAction=function(){},g.prototype.finalize=function(){try{this.fireIframeunload(),this.activeStatus="finalize"}catch(e){i.w.printStackTrace(e,null,this)}},g.prototype.setSrc=function(e,t){try{"object"===(0,o.Z)(t)&&null!=t&&"object"===(0,o.Z)(t.dataObject)&&(this._removeDataObject(),this.setDataObject(t.dataObject));var a,n,s="."+WebSquare.w2xExtension,m=!1,g=c.D.getBoolean(t),u=e.slice(0),d=-1;if((a=e.indexOf("?"))>-1?u=u.substring(0,a):(d=e.indexOf("#"))>-1&&(u=u.substring(0,d)),(n=u.indexOf("&"))>-1&&(u=u.substring(0,n)),".xml"===u.substring(u.lastIndexOf(".")))t="1",m=this.options.spa;else{var f=this.getWindow(),h=this.getSrc();try{null!=f&&null!=f.WebSquare&&(h=f.location.toString());var w=h.indexOf("#"),p=e.indexOf("#");w<0&&(w=h.length),p<0&&(p=e.length),m=h.substring(0,w)==e.substring(0,p)}catch(e){l.k.printLog("warning : cross-origin frame["+this.id+"]")}}var b="w2xPath";c.D.getEncodeParameterOption("pathName")?b=c.D.getEncodeParameterOption("pathName"):c.D.isEncodeParameter()&&(b=c.D.encodeParameter("w2xPath"));try{if(!m)"true"!=r.v.getConfiguration("/WebSquare/clearMemory/@value")&&this.getWindow().WebSquare&&"function"==typeof this.getWindow().WebSquare.clearMemory&&this.getWindow().WebSquare.clearMemory()}catch(e){}"about:blank"==e||m||("https:"==location.protocol?this.render.setAttribute("src",WebSquare.net.getSSLBlankPage(!0)):this.render.setAttribute("src","about:blank"));u=e;if(e.indexOf("?")>-1&&(u=u.substring(0,u.indexOf("?"))),null!=e){f=this.getWindow();var x=location.toString();try{null!=f&&null!=f.WebSquare&&(x=f.location.toString(),f.WebSquare.pageXMLString=null)}catch(e){l.k.printLog("warning : cross-origin frame["+this.id+"]")}if("1"===t&&m){var D=this.getURL(e);(E=x.indexOf("#"))<0&&(E=x.length);var S=x.substring(0,E),P="",W="";if(this.options.spaParam){W="?"+this.options.spaParam+"="+(this.uuid||this.id);var y=new RegExp("\\?"+this.options.spaParam+"=wq_uuid_[0-9]+","g");S=S.replace(y,"")}if(c.D.getEncodeParameterOption("onlyParam")){for(var O=D.split(/[\&\?]/),q=0;q<O.length;q++)(H=O[q].indexOf("="))>=0&&(O[q]=c.D.encodeParameter(O[q].substring(0,H))+O[q].substring(H));D=O.join("&")}if(W&&S.indexOf(s)>=0){var v=D.substring(0,D.lastIndexOf(".xml"))+s;if(c.D.getBoolean(r.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))e=v;else{P="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()
;c.D.isEncodeParameter()&&(P=c.D.getEncodeParameterOption("onlyParam")?c.D.encodeParameter("?w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():c.D.encodeParameter(P)),e=v+P}}else if(WebSquare.isHoneyComb){window.frameElement?window.sessionStorage[window.frameElement.id]=D:window.sessionStorage.w2xpath=D;var C=S.indexOf("?");C>=0&&(S=S.substring(0,C)),e=S+W}else c.D.getBoolean(r.v.getConfiguration("/WebSquare/stylesheet/@relativePath"))?e=c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?S+W+"#"+b+"="+D:S+W+"#"+b+"="+c.D.encodeParameter(D):S+W+"#"+b+"="+D:(P="&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config(),e=c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?S+W+"#"+b+"="+D+(P=c.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config()):S+W+"#"+b+"="+c.D.encodeParameter(D+P):S+W+"#"+b+"="+D+P);if((e==x+P||e==x)&&f&&f.WebSquare)f.util.reinitialize(g);else if(g&&f&&f.WebSquare)"onhashchange"in f.window?f.window.onhashchange=null:clearInterval(f.util._hashTestKey),f.core.finalize(),this.render.setAttribute("src",e),f.location.reload();else{f&&f.WebSquare&&(f.WebSquare.w2xPath="");try{(this.options.spaReplaceHistory||"https:"==location.protocol&&WebSquare.net.isSSLBlankPage(f.location.toString()))&&f.location.replace(e)}catch(e){l.k.printLog("warning : cross-origin frame["+this.id+"]")}this.render.setAttribute("src",e)}return}if("1"===t){var E;e=this.getURL(e),(E=x.indexOf("?"))<0&&(E=x.indexOf("#"))<0&&(E=x.length);var R=x.substring(0,E);if(e=e.replace("?","&"),c.D.getEncodeParameterOption("onlyParam")){var H;for(O=e.split(/[\&\?]/),q=0;q<O.length;q++)(H=O[q].indexOf("="))>=0&&(O[q]=c.D.encodeParameter(O[q].substring(0,H))+O[q].substring(H));e=O.join("&")}if(R.indexOf(s)>=0){v=e.substring(0,e.lastIndexOf(".xml"))+s;if(c.D.getBoolean(r.v.getConfiguration("/WebSquare/stylesheet/@relativePath")))e=v;else{P="?w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();c.D.isEncodeParameter()&&(P=c.D.getEncodeParameterOption("onlyParam")?c.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():c.D.encodeParameter(P)),e=v+P}}else WebSquare.isHoneyComb?(window.frameElement?window.sessionStorage[window.frameElement.id]=e:window.sessionStorage.w2xpath=e,e=R):e=c.D.getBoolean(r.v.getConfiguration("/WebSquare/stylesheet/@relativePath"))?c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?R+"?"+b+"="+e:R+"?"+b+"="+c.D.encodeParameter(e):R+"?"+b+"="+e:c.D.isEncodeParameter()?c.D.getEncodeParameterOption("onlyParam")?R+"?"+b+"="+e+c.D.encodeParameter("&w2xHome=")+WebSquare.w2xHome+c.D.encodeParameter("&w2xDocumentRoot=")+WebSquare.w2xDocumentRoot+this._getW2Config():R+"?"+b+"="+c.D.encodeParameter(e+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config()):R+"?"+b+"="+e+"&w2xHome="+WebSquare.w2xHome+"&w2xDocumentRoot="+WebSquare.w2xDocumentRoot+this._getW2Config();try{"https:"==location.protocol&&WebSquare.net.isSSLBlankPage(f.location.toString())&&f.location.replace(e)}catch(e){l.k.printLog("warning : cross-origin frame["+this.id+"]")}return void this.render.setAttribute("src",e)}try{"https:"==location.protocol&&WebSquare.net.isSSLBlankPage(f.location.toString())&&f.location.replace(e)}catch(e){l.k.printLog("warning : cross-origin frame["+this.id+"]")}this.options.relativePath&&""!=e&&(e=this.getURL(e)),this.render.setAttribute("src",e),m&&e==x&&f&&f.WebSquare&&f.util.reinitialize(g)}}catch(e){i.w.printStackTrace(e,null,this)}},g.prototype.getSrc=function(){try{var e;return this.render&&(e=this.render.getAttribute("src")),e}catch(e){i.w.printStackTrace(e,null,this)}},g.prototype.getWindow=function(){try{return this.render.contentWindow}catch(e){
i.w.printStackTrace(e,null,this)}},g.prototype.setDisabled=function(){$l("iframe에서는 setDisabled를 사용하실 수 없습니다.["+this.id+"]")},g.prototype.setReadOnly=function(){$l("iframe에서는 setReadOnly를 사용하실 수 없습니다.["+this.id+"]")},g.prototype.fireIframeload=function(){s.B.fireEvent(this,"oniframeload",this.getSrc())},g.prototype.fireIframeunload=function(){"finalize"!==this.activeStatus&&s.B.fireEvent(this,"oniframeunload",this.getSrc())},g.prototype._getW2Config=function(){try{var e="",t=-1;if(c.D.isEncodeParameter()){if((t=location.toString().indexOf(c.D.encodeParameter("w2Config")))>=0)(o=(a=location.toString().slice(t+"w2Config=".length)).slice(0,a.indexOf(c.D.encodeParameter("config.xml"))+"config.xml".length))&&(e=c.D.encodeParameter("&w2Config=")+o);else if(c.D.getBoolean(r.v.getConfiguration("/WebSquare/encodeParameter/@fallback"))){var a,o;if((t=location.toString().indexOf("w2Config"))>=0)(o=(a=location.toString().slice(t+"w2Config=".length)).slice(0,a.indexOf("config.xml")+"config.xml".length))&&(e=c.D.getEncodeParameterOption("onlyParam")?c.D.encodeParameter("&w2Config=")+o:c.D.encodeParameter("&w2Config="+o))}}else if((t=location.toString().indexOf("w2Config"))>=0)(o=(a=location.toString().slice(t+"w2Config=".length)).slice(0,a.indexOf("config.xml")+"config.xml".length))&&(e="&w2Config="+o);return e}catch(e){i.w.printStackTrace(e,null,this)}},g.prototype.setDataObject=function(e){try{if("string"==typeof e&&(e=JSON.parse(e)),null==e||"string"!=typeof e.name||0===e.name.length)return;var t=e.type||"string";t=t.toLowerCase();var a,o=e.data,n=e.name;switch(t){case"json":a=JSON.stringify(o);break;case"xml":a=WebSquare.xml.serialize(o);break;case"array":a=c.D.parseArray(o);break;default:a=o}this._dataObject={type:t,name:n,data:a}}catch(e){i.w.printStackTrace(e,null,this)}},g.prototype._getDataObject=function(e){try{var t;return this._dataObject&&"string"==typeof this._dataObject.name&&this._dataObject.name.length>0&&this._dataObject.data&&(t=null==e?this._dataObject:this._dataObject[e]),t}catch(e){i.w.printStackTrace(e,null,this)}},g.prototype._removeDataObject=function(){try{this._dataObject&&(this._dataObject=null,delete this._dataObject)}catch(e){i.w.printStackTrace(e,null,this)}}}}]);