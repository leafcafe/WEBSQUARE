(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[789],{6789:(t,e,i)=>{"use strict";i.r(e),i.d(e,{mapchart:()=>p});var o=i(2981),a=i(2085),s=i(1960),r=i(3082),n=i(6615),p=function(t,e,i){n.s.call(this,t,e,i)};p.prototype.initAsync=async function(){p.isImported||(await inquires("externalJS/mapchart/d3.min.js"),await inquires("externalJS/mapchart/topojson.min.js"),await inquires("externalJS/mapchart/textures.min.js"),p.isImported=!0)},o.x.extend(p.prototype,n.s.prototype),p.prototype.defaultOptions={pluginType:"uiplugin.mapchart",pluginName:"mapchart",useConfig:!0,userEvents:["onbeforemapchange","onaftermapchange","onmapmouseover","onmapmouseout","onmapclick","onmapdblclick","onmapmousemove","onmapdatachange"],dataMapPath:"",dataMapRatio_level0:"simp1",dataMapRatio_level1:"simp1",dataMapRatio_level2:"simp1",startMap:"0",dataLists:"",zoomMin:"0.2",zoomMax:"5",maxDepth:-1,usePattern:!0,showMunicipalityLabel:!0,setTooltipStrFunc:"",event_drillup:"oncontextmenu",event_drilldown:"onclick",event_select:"onmouseover",event_deselect:"onmouseout",event_tooltipon:"onmouseover",event_tooltipoff:"onmouseout",event_zoom:"onzoom",event_drag:"ondrag",accessibility:!1},p.prototype.initialize=function(t){try{if(!this.options.dataMapPath){var e=location.pathname.lastIndexOf("/");this.options.dataMapPath=e>=0?location.pathname.slice(0,e)+"/_websquare_/externalJS/mapchart":"/_websquare_/externalJS/mapchart"}this.currentMap="",this._dataListsObj={},this._load=!1,this.patternList=[]}catch(t){a.w.printStackTrace(t)}},p.prototype.toHTML=function(){try{var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2mapchart "+this.options.className+"'>"),t.push("<div id='"+this.id+"_tooltip' class='w2mapchart_tooltip' style='position:absolute;border:1px solid black;display:none;z-index:10;'></div>"),1==this.options.accessibility&&(t.push("<div id='"+this.id+"_accessibilityZone' class='w2mapchart_accessibility'>"),t.push("<select id='"+this.id+"_level1' class='w2mapchart_accessibility_select'><option value='LEVEL1'>LEVEL1</options></select>"),t.push("<select id='"+this.id+"_level2' class='w2mapchart_accessibility_select'><option value='LEVEL2'>LEVEL2</options></select>"),t.push("<select id='"+this.id+"_level3' class='w2mapchart_accessibility_select'><option value='LEVEL3'>LEVEL3</options></select>"),t.push("</div>")),t.push("</div>"),t.join("")}catch(t){a.w.printStackTrace(t)}},p.prototype.setAction=function(){try{this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:this.getDataMapPath(this.options.startMap),topoObj:this.options.startMap})}catch(t){a.w.printStackTrace(t)}},p.prototype.refreshItemset=function(){},p.prototype.finalize=function(){},p.prototype.createMap=function(t){try{var e=this;this.currentMap=t.topoObj;var i=d3.select("#"+this.id).append("svg").attr("width",t.width).attr("height",t.height).attr("id",this.id+"_svg").style("overflow","hidden"),n=i.append("g").attr("class","w2mapchart_map").attr("id",this.id+"_map"),p=i.append("g").attr("class","w2mapchart_places").attr("id",this.id+"_places"),c=this.id,l=this.uuid,d=t.width,h=t.height,u=parseFloat(this.options.zoomMin),f=parseFloat(this.options.zoomMax),v=this.options.event_drillup.replace(/^on/,""),m=this.options.event_drilldown.replace(/^on/,""),y=this.options.event_select.replace(/^on/,""),B=this.options.event_deselect.replace(/^on/,""),D=this.options.event_tooltipon.replace(/^on/,""),k=this.options.event_tooltipoff.replace(/^on/,""),g=this.options.event_drag.replace(/^on/,""),b=this.options.event_zoom.replace(/^on/,""),_=this.patternList,W=null;this.options.setTooltipStrFunc&&(W=r.D.getGlobalFunction(this.options.setTooltipStrFunc,this.scope_id)),d3.json(t.topoFile,(function(a,z){
var S,w=d/z.transform.scale[0],M=h/z.transform.scale[1]*.8,x=Math.min(w,M)/180,E=Math.min(1.25*w*z.transform.scale[1],h),L=Math.min(Math.min(w,M)*z.transform.scale[0],d),q=E+(h-E)/2-h/100,C=(d-L)/2+d/100,T=d3.geo.mercator().center(z.transform.translate).scale(x).translate([C,q]);if(i.on(v+".drillup",(function(){d3.event.preventDefault(),WebSquare.idCache[l].drillup()})),parseFloat(u)==parseFloat(f)||"none"===b){if("none"!==g){var P=d3.behavior.drag().on(g+".drag",(function(t,e){var i=d3.transform(n.attr("transform")),o=d3.transform(p.attr("transform")),a=[i.translate[0]+d3.event.dx,i.translate[1]+d3.event.dy].toString(),s=[o.translate[0]+d3.event.dx,o.translate[1]+d3.event.dy].toString(),r=[i.scale[0],i.scale[1]].toString(),c=[o.scale[0],o.scale[1]].toString();n.attr("transform",(function(){return"translate("+a+")scale("+r+")"})),p.attr("transform",(function(){return"translate("+s+")scale("+c+")"}))}));i.call(P)}}else"none"===g?((S=d3.behavior.zoom()).scaleExtent([u,f]),S.on(b+".zoom",(function(){n.attr("transform","scale("+d3.event.scale+")"),p.attr("transform","scale("+d3.event.scale+")")})),i.call(S),i.call(S.event)):((S=d3.behavior.zoom()).scaleExtent([u,f]),S.on(b+".zoom",(function(){n.attr("transform","translate("+d3.event.translate+")scale("+d3.event.scale+")"),p.attr("transform","translate("+d3.event.translate+")scale("+d3.event.scale+")")})),i.call(S),i.call(S.event));var j=d3.geo.path().projection(T),A=topojson.feature(z,z.objects[t.topoObj]).features;if(0!=_.length)for(var F in _)i.call(_[F]);var O=n.selectAll("path").data(A).enter().append("path").attr("class",(function(t){return"municipality c"+t.properties.code})).attr("d",j);0!=_.length&&O.style("fill",(function(t,e){return _[e%_.length].url()})),"none"!==D&&O.on(D+".tooltipon",(function(t){var e="";if(e+='<div class="kv">',e+='<span class="key">',"function"==typeof W){var i=W(t.properties.name,t.properties.code);e+=null!=i?i:t.properties.name+"("+t.properties.code+")"}else e+=t.properties.name+"("+t.properties.code+")";e+="</span>",e+="</div>",d3.select("#"+c+"_tooltip").html(e).style("display","block").style("pointer-events","none");var o=j.centroid(t),a=d3.transform(n.attr("transform"));d3.select("#"+c+"_tooltip").style("top",(o[1]+10)*a.scale[1]+a.translate[1]+"px").style("left",(o[0]+10)*a.scale[0]+a.translate[0]+"px")})),"none"!==y&&O.on(y+".select",(function(t){this.setAttribute("fill-opacity","0.6")})),"none"!==k&&O.on(k+".tooltipoff",(function(){d3.select("#"+c+"_tooltip").style("display","none")})),"none"!==B&&O.on(B+".deselect",(function(){this.setAttribute("fill-opacity","1.0")})),"none"!==m&&O.on(m+".drilldown",(function(t){WebSquare.idCache[l].changeMap(t.properties.code)})),O.on("click.onmapclick",(function(t){s.B.fireEvent(WebSquare.idCache[l],"onmapclick",o.x.extend({},t.properties))})).on("dblclick.onmapdblclick",(function(t){s.B.fireEvent(WebSquare.idCache[l],"onmapdblclick",o.x.extend({},t.properties))})).on("mouseover.onmapmouseover",(function(t){s.B.fireEvent(WebSquare.idCache[l],"onmapmouseover",o.x.extend({},t.properties))})).on("mouseout.onmapmouseout",(function(t){s.B.fireEvent(WebSquare.idCache[l],"onmapmouseout",o.x.extend({},t.properties))})).on("mousemove.onmapmousemove",(function(t){s.B.fireEvent(WebSquare.idCache[l],"onmapmousemove",o.x.extend({},t.properties))}));var I=[],R=[],V=[],H=0;n.selectAll("text").data(A).enter().append("text").attr("transform",(function(t){if(1==e.options.accessibility){var i=t.properties.code;i.length>=7?(H=3,V.push({text:t.properties.name,value:t.properties.code})):i.length>=5?(H=2,R.push({text:t.properties.name,value:t.properties.code})):i.length>=2&&(H=1,I.push({text:t.properties.name,value:t.properties.code}))}var o=j.centroid(t);return"31"==t.properties.code||"23"==t.properties.code?"translate("+[1.1*o[0],1.1*o[1]]+")":"translate("+o+")"})).attr("dy",".35em").attr("class",(function(t){return"municipality-label c"+t.properties.code})).style("font-size",(function(t){
if(!1===e.options.showMunicipalityLabel)return"0px"})).text((function(t){return t.properties.name})),1==e.options.accessibility&&(1==H?e.setSelectOptions(I,H):2==H?e.setSelectOptions(R,H):3==H&&e.setSelectOptions(V,H));var J=WebSquare.idCache[l].options.csvFileName;if(WebSquare.idCache[l].options.csvHandler)var N=r.D.getGlobalFunction(WebSquare.idCache[l].options.csvHandler);if(J&&"function"==typeof N&&d3.csv(WebSquare.idCache[l].getURL(J),(function(t){N.call(WebSquare.idCache[l],p,t,T)})),s.B.fireEvent(WebSquare.idCache[l],"onaftermapchange"),!WebSquare.idCache[l]._load){WebSquare.idCache[l]._load=!0;var G=WebSquare.idCache[l].options.dataLists.split(",");for(F=0;F<G.length;F++){var U=G[F].wq_trim(),Z=r.D.getComponentById(U,WebSquare.idCache[l].scope_id);null!=Z&&(Z.addChild(WebSquare.idCache[l]),WebSquare.idCache[l].refreshDataLists(Z.id))}}}))}catch(t){a.w.printStackTrace(t)}},p.prototype.setSelectOptions=function(t,e){try{var i=document.getElementById(this.id+"_level"+e);if(1==e)for(var o=1;o<3;o++){for(var s=(r=document.getElementById(this.id+"_level"+(e+o))).options.length;s>=0;s--)r.remove(s);(n=document.createElement("option")).text="LEVEL"+(e+o),n.value="",r.options[0]=n}else if(2==e){var r;for(o=(r=document.getElementById(this.id+"_level"+(e+1))).options.length;o>=0;o--)r.remove(o);(n=document.createElement("option")).text="LEVEL3",n.value="",r.options[0]=n}for(o=0;o<t.length;o++){var n;(n=document.createElement("option")).text=t[o].text,n.value=t[o].value,i.options[o]=n}}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.drillup=function(){try{if("0"===this.currentMap)return;var t="0";this.currentMap.length>2&&(t=this.currentMap.slice(0,2)),this.changeMap(t)}catch(t){a.w.printStackTrace(t)}},p.prototype.changeMap=function(t){try{var e;if(1==this.options.accessibility)t.length>=7?e=document.getElementById(this.id+"_level3"):t.length>=5?e=document.getElementById(this.id+"_level2"):t.length>=2&&(e=document.getElementById(this.id+"_level1")),e&&(e.value=t);if(t.length<=5){if(!1===s.B.fireEvent(this,"onbeforemapchange",{oldMapCode:this.currentMap,newMapCode:t}))return;d3.select("#"+this.id+"_svg").remove(),d3.select("#"+this.id+"_svg").selectAll("defs").remove();var i=t,o=this.getDataMapPath(i);this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:o,topoObj:i})}}catch(t){a.w.printStackTrace(t)}},p.prototype.changeMapPath=function(t){try{d3.select("#"+this.id+"_svg").remove(),d3.select("#"+this.id+"_svg").selectAll("defs").remove(),this.options.dataMapPath=t,this.createMap({width:this.render.offsetWidth,height:this.render.offsetHeight,topoFile:this.getDataMapPath(this.options.startMap),topoObj:this.options.startMap})}catch(t){a.w.printStackTrace(t)}},p.prototype.getCurrentMap=function(){try{return this.currentMap}catch(t){a.w.printStackTrace(t)}},p.prototype.getParentMap=function(){try{return this.currentMap.length>2?this.currentMap.slice(0,2):"0"}catch(t){a.w.printStackTrace(t)}},p.prototype.addMapEvent=function(t,e){try{for(var i=!1,r=0;r<this.options.userEvents.length;r++)if(this.options.userEvents[r]===t){i=!0;break}i||this.options.userEvents.push(t);var n=t.replace("on",""),p=this.uuid;d3.select("#"+this.id+"_svg").select(".w2mapchart_map").selectAll("path").on(n+".onmap"+n,(function(t){s.B.fireEvent(WebSquare.idCache[p],"onmap"+n,o.x.extend({},t.properties))})),this.bind("onmap"+n,e)}catch(t){a.w.printStackTrace(t)}},p.prototype.setScale=function(t){try{d3.select("#"+this.id+"_map").attr("transform",(function(e){return"scale("+t+")"})),d3.select("#"+this.id+"_places").attr("transform",(function(e){return"scale("+t+")"}))}catch(t){a.w.printStackTrace(t)}},p.prototype.getDataMapPath=function(t){try{var e=0,i=this.options.dataMapRatio_level0;t.length>=5?(e=2,i=this.options.dataMapRatio_level2):t.length>=2&&(e=1,i=this.options.dataMapRatio_level1);var o=this.options.dataMapPath+"/level"+e+"/"+i+"/"+t+".json";return o=WebSquare.BootLoader.getResourcePostfix(o)}catch(t){
a.w.printStackTrace(t)}},p.prototype.createPattern=function(t,e){try{var i=[{type:"line",size:4,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["vertical"],size:4,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["7/8"],size:8,stroke:"#BDBDBD",strokeWidth:.7},{type:"line",orientation:["vertical","horizontal"],size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8"],size:8,stroke:"#BDBDBD",strokeWidth:1},{type:"line",orientation:["1/8","6/8"],size:8,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["3/8","7/8"],size:8,stroke:"#BDBDBD",strokeWidth:.6},{type:"line",orientation:["3/8","7/8"],size:6,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8","6/8"],size:6,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8","6/8"],size:3,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["2/8"],size:2,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["6/8"],size:3,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","5/8"],size:5,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["3/8"],size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","4/8","6/8"],size:8,stroke:"#BDBDBD",strokeWidth:.5},{type:"line",orientation:["1/8","4/8","6/8","8/8"],size:8,stroke:"#BDBDBD",strokeWidth:.5},{type:"circle",size:5,radius:1.5,fill:"#BDBDBD"},{type:"circle",size:2,radius:.5,fill:"#BDBDBD"},{type:"circle",size:5,radius:2,fill:"#BDBDBD"},{type:"circle",size:8,radius:2,fill:"#BDBDBD",strokeWidth:.5},{type:"circle",size:3,radius:.4,fill:"#BDBDBD"},{type:"circle",size:10,radius:2,fill:"#BDBDBD"},{type:"circle",size:5,radius:1.5,fill:"#BDBDBD"},{type:"circle",size:10,radius:4,fill:"#BDBDBD"},{type:"circle",size:6,radius:2,fill:"transparent",stroke:"#BDBDBD",strokeWidth:1},{type:"circle",size:8,radius:4,fill:"transparent",stroke:"#BDBDBD",strokeWidth:2},{type:"circle",size:5,radius:1.5,fill:"#EAEAEA",stroke:"#BDBDBD",strokeWidth:2},{type:"path",d:"hexagons",size:3.5,strokeWidth:2,stroke:"#BDBDBD"},{type:"path",d:"crosses",size:8,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"caps",size:7,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"woven",size:10,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"waves",size:5,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"nylon",size:10,stroke:"#BDBDBD",strokeWidth:1},{type:"path",d:"squares",size:5,stroke:"#BDBDBD",strokeWidth:.7},{type:"path",d:"waves",size:4,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"caps",size:4,stroke:"#BDBDBD",strokeWidth:.3},{type:"path",d:"nylon",size:7,stroke:"#BDBDBD",strokeWidth:.5},{type:"path",d:"woven",size:6,stroke:"#BDBDBD",strokeWidth:1.5},{type:"path",d:"squares",size:2,stroke:"#BDBDBD",strokeWidth:.5}];t&&"object"==typeof t?0!=e&&void 0!==e||(i=t):0!=e&&void 0!==e||(i=[]);for(var o=0;o<i.length;o++){var s=this.createPatternElement(i[o]);this.patternList.push(s);d3.select("#"+this.id).select("svg").call(s).select("pattern")}}catch(t){a.w.printStackTrace(t)}},p.prototype.addPattern=function(t){try{if(this.options.usePattern){var e=this.createPatternElement(t);this.patternList.push(e);var i=d3.select("#"+this.id).select("svg").call(e).selectAll("pattern")[0];return i[i.length-1].getAttribute("id")}}catch(t){a.w.printStackTrace(t)}},p.prototype.createPatternElement=function(t){var e;switch(t.type){case"line":e=textures.lines();break;case"circle":e=textures.circles();break;case"path":case"userDefine":e=textures.paths();break;default:return e}return t.orientation&&"line"==t.type&&e.orientation.apply(this,t.orientation),t.d&&"path"==t.type&&e.d(t.d),t.radius&&"circle"==t.type&&e.radius(t.radius),t.stroke&&e.stroke(t.stroke),t.strokeWidth&&e.strokeWidth(t.strokeWidth),t.background&&e.background(t.background),t.size&&e.size(t.size),t.fill&&"circle"==t.type&&e.fill(t.fill),e},p.prototype.refreshDataLists=function(t){try{this._load&&s.B.fireEvent(this,"onmapdatachange",t)}catch(t){a.w.printStackTrace(t)}}}}]);