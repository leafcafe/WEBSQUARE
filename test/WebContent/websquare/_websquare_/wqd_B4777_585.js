(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[585],{1585:(t,e,a)=>{"use strict";a.r(e),a.d(e,{scheduleCalendar:()=>d});var i=a(2981),n=a(1656),o=a(2085),s=a(1960),r=a(3082),l=a(6615),d=function(t,e,a){l.s.call(this,t,e,a)};i.x.extend(d.prototype,l.s.prototype),d.prototype.defaultOptions={useConfig:!0,pluginType:"uiplugin.scheduleCalendar",pluginName:"scheduleCalendar",userEvents:["onclick","onmoveschedule","onaddschedule"],dataList:"",titleColumn:"",startColumn:"",endColumn:"",idColumn:"",themeColumn:"",ioFormat:"yyyyMMdd",defaultDate:"",editable:!1,eventLimit:!0,selectable:!1,scheduleClickPopup:!0,lang:"ko",locale:"ko",headerLeftBtn:!0,headerRightBtn:!0,headerTitle:!0,serverSync:!1,version:"2.3",cssRenderOrder:!1,tooltipDisplay:!1,defaultView:"month",nextDayThreshold:"09:00:00",timeFormat:""},d.prototype.initialize=function(t){this.scheduleEvent=[],this.dragItem={rowIndex:""},this.todayHelper=new WebSquare.uiplugin.dateHelper(this.options.serverSync,this.scope_id),this.selectable=r.D.getBoolean(this.options.selectable)},d.prototype.initAsync=async function(){if(!d.isImported){"3.6"===this.options.version?(WebSquare.skin.addImport(i.x._resourceURI+"externalJS/fullcalendar3.6.2/fullcalendar.css",!0),(!window.jQuery||window.jQuery&&window.jQuery().jquery<"3.2.1")&&(await inquires("externalJS/fullcalendar3.6.2/lib/jquery.min.js"),await inquires("externalJS/fullcalendar3.6.2/lib/jquery-ui.min.js")),await inquires("externalJS/fullcalendar3.6.2/lib/moment.min.js"),await inquires("externalJS/fullcalendar3.6.2/fullcalendar.js"),await inquires("externalJS/fullcalendar3.6.2/locale-all.js")):(WebSquare.skin.addImport(i.x._resourceURI+"externalJS/fullCalendar/fullcalendar.css",!0),await inquires("externalJS/fullCalendar/lib/moment.min.js"),await inquires("externalJS/fullCalendar/fullcalendar.min.js"),await inquires("externalJS/fullCalendar/lang-all.js"));var t=[];if(this.options.cssRenderOrder){var e=document.getElementsByTagName("head")[0];e&&e.getElementsByTagName("link")[1]&&(t[0]=e.getElementsByTagName("link")[1])}WebSquare.WebSquaredoc.cssList=WebSquare.WebSquaredoc.cssList.concat(WebSquare.cssManager.executeImport(t[0])),d.isImported=!0}},d.prototype.toHTML=function(){try{var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'",a=""==this.options.tabIndex?"":"tabIndex='"+this.options.tabIndex+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2scheduleCalendar "+this.options.className+"' "+a+">"),t.push("</div>"),t.join("")}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.setAction=function(){try{this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleMouseDownEvent));var t={left:"prev,next,today",center:"title",right:"month,"};"agendaWeek"==this.options.defaultView?t.right+="agendaWeek,":t.right+="basicWeek,","agendaDay"==this.options.defaultView?t.right+="agendaDay":t.right+="basicDay",this.defaultData={},this.defaultData.header=t;var e=WebSquare.date.getFormattedDate(new Date,"yyyy-MM-dd");this.options.ioFormat=this.options.ioFormat?this.options.ioFormat:"yyyyMMdd",this.defaultData.defaultDate=WebSquare.text.formatDate(this.options.defaultDate,"yyyy-MM-dd",this.options.ioFormat)||e,this.defaultData.editable=this.options.editable||!1,this.defaultData.eventLimit=this.options.eventLimit||!1,this.defaultData.defaultView=this.options.defaultView||"month","3.6"==this.options.version?this.defaultData.locale=this.options.locale:this.defaultData.lang=this.options.lang||"ko",this.defaultData.width=this.render.offsetWidth||"100%",this.defaultData.height=this.render.offsetHeight||"100%",this.options.nextDayThreshold&&("00:00:00"==this.options.nextDayThreshold?this.defaultData.nextDayThreshold="00:00:01":this.defaultData.nextDayThreshold=this.options.nextDayThreshold);this.defaultData.selectable=!0,this.defaultData.selectHelper=!0,this.defaultData.select=(u=this,function(t,e){
u.__removed_object__||u.getDisabled&&1==u.getDisabled()||u.handleClickEvent(t,e)}),this.options.dataList&&this.refreshItemset(),this.headerBtnInfo={headerLeftBtn:this.options.headerLeftBtn,headerRightBtn:this.options.headerRightBtn,headerTitle:this.options.headerTitle},this.defaultDayNameStyle={defaultOption:!0,sun:{body:{background:{"background-color":"#d02121",opacity:"0.1"},num:{color:"#d02121"}}},sat:{body:{background:{"background-color":"#5a82cf",opacity:"0.1"},num:{color:"#5a82cf"}}}},this.dayNameStyle={};var a=this,i=WebSquare.idCache[this.uuid];if(this.defaultData.eventMouseover=function(t,e){if(a.options.tooltipDisplay){if(!t.title)return;var i='<div class="w2scheduleCalendar_tooltip" style="position:absolute;z-index:10001;">'+t.title+"</div>",n=$(i).appendTo("body");$(this).mouseover((function(t){$(this).css("z-index",1e4),n.fadeIn("500"),n.fadeTo("10",1.9)})).mousemove((function(t){n.css("top",t.pageY+10),n.css("left",t.pageX+20)}))}},this.defaultData.eventMouseout=function(t,e){$(this).css("z-index",8),$(".w2scheduleCalendar_tooltip").remove()},this.defaultData.eventAfterRender=function(){},this.defaultData.eventAfterAllRender=function(t,e){a.setHeaderBtn(a.headerBtnInfo),a.setDayNameStyle(a.defaultDayNameStyle),a.setDayNameStyle(a.dayNameStyle),i.handleEventAfterAllRender(i.defaultData.events),$(".fc-day").hasClass(i.options.defaultDateClass)&&$(".fc-today").removeClass("fc-today")},this.defaultData.eventClick=function(t,e,a){var n=i.getScheduleInfo(t.id);i.handleClickEvent(t.start,t.end||t.start,n)},this.defaultData.dayRender=function(t,e){var a=t._d.getDate()+"",n=t._d.getMonth()+1+"",o=t._d.getFullYear()+"";1==n.length&&(n="0"+n),1==a.length&&(a="0"+a);var s=o+n+a;i.options.defaultDate===s&&i.options.defaultDateClass&&!e.hasClass("fc-other-month")&&e.addClass(i.options.defaultDateClass)},this.defaultData.timeFormat=this.options.timeFormat,this.options.eventOrderColumn&&(this.defaultData.eventOrder=function(t,e){var a=t.miscProps[i.options.eventOrderColumn],n=e.miscProps[i.options.eventOrderColumn];return parseInt(a)&&parseInt(n)?parseInt(a)<parseInt(n)?-1:1:a<n?-1:1}),this.options.dataList){var r=function(t,e,a,n){var o=t.id||t.title;i.dragItem=i.getScheduleInfo(o),i.dragItem.rowIndex=i.getScheduleIndex(o)};this.defaultData.eventDragStart=r,this.defaultData.eventDrop=function(t,e,a,n,o,s){var r=i.dragItem,l={};l[i.options.idColumn]=r[i.options.idColumn],l[i.options.titleColumn]=r[i.options.titleColumn],r[i.options.startColumn].substring(0,8)&&(l[i.options.startColumn]=WebSquare.date.dateAdd(r[i.options.startColumn].substring(0,8),e._days)+r[i.options.startColumn].substring(8,r[i.options.startColumn].length),l[i.options.endColumn]=WebSquare.date.dateAdd(r[i.options.endColumn].substring(0,8),e._days)+r[i.options.endColumn].substring(8,r[i.options.endColumn].length)),i.options.eventOrderColumn&&(l[i.options.eventOrderColumn]=r[i.options.eventOrderColumn]);var d=r.rowIndex,u=i._dataList.getRowJSON(d);i._dataList.setRowJSON(d,l,!0),i._scheduleListener(u,d),i.dragItem={}},this.options.editable&&(this.defaultData.eventResizeStart=r,this.defaultData.eventResize=function(t,e,a,n,o,s){var r=i.dragItem,l={};l[i.options.idColumn]=r[i.options.idColumn],l[i.options.titleColumn]=r[i.options.titleColumn],r[i.options.startColumn].substring(0,8)&&(l[i.options.startColumn]=WebSquare.date.dateAdd(r[i.options.startColumn].substring(0,8),0)+r[i.options.startColumn].substring(8,r[i.options.startColumn].length),l[i.options.endColumn]=WebSquare.date.dateAdd(r[i.options.endColumn].substring(0,8),e._days)+r[i.options.endColumn].substring(8,r[i.options.endColumn].length)),i.options.eventOrderColumn&&(l[i.options.eventOrderColumn]=r[i.options.eventOrderColumn]);var d=r.rowIndex,u=i._dataList.getRowJSON(d);i._dataList.setRowJSON(d,l,!0),i._scheduleListener(u,d),i.dragItem={}})}if("synchronous"===(n.v.getConfiguration("/WebSquare/postDrawMode/@value")||"asynchronous")?setTimeout((function(){$("#"+a.id).fullCalendar(a.defaultData)
}),0):$("#"+this.id).fullCalendar(this.defaultData),this.options.serverSync){var l=new Date(this.todayHelper.getYear(),this.todayHelper.getMonth()-1,this.todayHelper.getDate());$("#"+this.id).fullCalendar("gotoDate",l.toISOString())}if("3.6"==this.options.version){var d=this.uuid;$("#"+a.id).on("click","button.fc-prev-button",(function(){var t=$("#"+i.id).fullCalendar("getView").type,e={buttonType:"prev",viewType:t};if("basicDay"==t){var a=new Date($("#"+i.id).fullCalendar("getDate")._d),n=WebSquare.text.fillZero(a.getUTCFullYear()+"",4)+WebSquare.text.fillZero(a.getUTCMonth()+1+"",2)+WebSquare.text.fillZero(a.getUTCDate()+"",2);e.date=n}s.B.fireEvent(WebSquare.idCache[d],"onheaderbtnclick",e)})),$("#"+a.id).on("click","button.fc-next-button",(function(){var t=$("#"+i.id).fullCalendar("getView").type,e={buttonType:"next",viewType:t};if("basicDay"==t){var a=new Date($("#"+i.id).fullCalendar("getDate")._d),n=WebSquare.text.fillZero(a.getUTCFullYear()+"",4)+WebSquare.text.fillZero(a.getUTCMonth()+1+"",2)+WebSquare.text.fillZero(a.getUTCDate()+"",2);e.date=n}s.B.fireEvent(WebSquare.idCache[d],"onheaderbtnclick",e)})),$("#"+a.id).on("click","button.fc-today-button",(function(){var t=new Date($("#"+i.id).fullCalendar("getDate")._d),e={buttonType:"today",viewType:$("#"+i.id).fullCalendar("getView").type,date:WebSquare.text.fillZero(t.getUTCFullYear()+"",4)+WebSquare.text.fillZero(t.getUTCMonth()+1+"",2)+WebSquare.text.fillZero(t.getUTCDate()+"",2)};s.B.fireEvent(WebSquare.idCache[d],"onheaderbtnclick",e)})),$("#"+a.id).on("click","button.fc-month-button",(function(){var t={buttonType:"month",viewType:$("#"+i.id).fullCalendar("getView").type};s.B.fireEvent(WebSquare.idCache[d],"onheaderbtnclick",t)})),$("#"+a.id).on("click","button.fc-basicWeek-button",(function(){var t={buttonType:"basicWeek",viewType:$("#"+i.id).fullCalendar("getView").type};s.B.fireEvent(WebSquare.idCache[d],"onheaderbtnclick",t)})),$("#"+a.id).on("click","button.fc-basicDay-button",(function(){var t={buttonType:"basicDay",viewType:$("#"+i.id).fullCalendar("getView").type};s.B.fireEvent(WebSquare.idCache[d],"onheaderbtnclick",t)}))}}catch(t){o.w.printStackTrace(t,null,this)}var u},d.prototype.refreshItemset=function(){try{var t=this.options.dataList.replace(/^data:/,""),e=this.modelControl.getDataComp(t);if(null==this._dataList&&null!=e){this._dataList=e,this._dataList.addChild(this),this.modelControl.isDataCollectionItemsetBinded=!0,this.modelControl.useItemset=!0;var a=this.getscheduleCalendarData(this.options.titleColumn,this.options.startColumn,this.options.endColumn,this.options.idColumn,this.options.themeColumn,this.options.eventOrderColumn);this.defaultData.events=a}else{a=this.getscheduleCalendarData(this.options.titleColumn,this.options.startColumn,this.options.endColumn,this.options.idColumn,this.options.themeColumn,this.options.eventOrderColumn);this.defaultData.events=a,$("#"+this.id).fullCalendar("removeEvents"),$("#"+this.id).fullCalendar("addEventSource",this.defaultData.events),$("#"+this.id).fullCalendar("refetchEvents")}}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype._scheduleListener=function(t,e){try{var a=this._dataList.getRowJSON(e),i="",n={};for(var r in i=null==t?"onaddschedule":"onmoveschedule",t)a.hasOwnProperty(r)||delete t[r];n.rowIndex=e,n.newObj=a,"onmoveschedule"==i&&(n.oldObj=t),s.B.fireEvent(this,i,n)}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.addSchedule=function(t){try{if(t.length){for(var e=0;e<t.length;e++)if(r.D.getBoolean(this.options.includeScheduleEnd)&&t[e].end){var a=WebSquare.text.formatDate(t[e].end,"yyyyMMdd",this.options.ioFormat);t[e].end=WebSquare.date.dateAdd(a,1),t[e].end=WebSquare.text.formatDate(t[e].end,"yyyy-MM-dd","yyyyMMdd")}this.defaultData.events=t,$("#"+this.id).fullCalendar("removeEvents"),$("#"+this.id).fullCalendar("addEventSource",this.defaultData.events),$("#"+this.id).fullCalendar("refetchEvents")
}else this.options.dataList?(this._dataList.setRowJSON(this._dataList.getTotalRow(),t),this._scheduleListener(null,this._dataList.getTotalRow()-1)):(t.start=WebSquare.text.formatDate(t.start,"yyyy-MM-dd",this.options.ioFormat),r.D.getBoolean(this.options.includeScheduleEnd)&&(t.end=WebSquare.text.formatDate(t.end,"yyyyMMdd",this.options.ioFormat),t.end=WebSquare.date.dateAdd(t.end,1),t.end=WebSquare.text.formatDate(t.end,"yyyy-MM-dd","yyyyMMdd")),t.end=WebSquare.text.formatDate(t.end,"yyyy-MM-dd",this.options.ioFormat),$("#"+this.id).fullCalendar("renderEvent",t,!0))}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.removeschedule=function(t){try{if($("#"+this.id).fullCalendar("removeEvents",t),this.options.dataList){var e=this.getScheduleIndex(t);this._dataList.removeRow(e)}}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.gotoCalendar=function(t,e){try{var a="";e=e||{},a=t.length==this.options.ioFormat.length+6?WebSquare.text.formatDate(t,"yyyy-MM-ddTHH:mm:SS",this.options.ioFormat+"HHmmSS"):WebSquare.text.formatDate(t,"yyyy-MM-dd",this.options.ioFormat),$("#"+this.id).fullCalendar("gotoDate",a),this.selectable&&e.noSelectable?(this.selectable=!1,$("#"+this.id).fullCalendar("select",a),this.selectable=!0):$("#"+this.id).fullCalendar("select",a)}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.getScheduleInfo=function(t){try{var e={};if(this.options.dataList){var a=this.getScheduleIndex(t);if(!(e=this._dataList.getRowJSON(a)).id){var i=e.title;e.id=i}}return e}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.getScheduleIndex=function(t){try{for(var e=this._dataList.getAllJSON(),a=e.length,i=0;i<a;i++)if(e[i][this.options.idColumn]===t)return i}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.getscheduleCalendarData=function(t,e,a,i,n,s){try{this.scheduleEvent=[];var l,d=this._dataList.getRowCount(),u=this._dataList.getColumnIndex(t),h=this._dataList.getColumnIndex(e),c=this._dataList.getColumnIndex(a),f=this._dataList.getColumnIndex(i),p=this._dataList.getColumnIndex(n);s&&(l=this._dataList.getColumnIndex(s));var y,m=this._dataList.getColData(u),C=this._dataList.getColData(h),g=this._dataList.getColData(c),v=this._dataList.getColData(f),b=this._dataList.getColData(p);l&&(y=this._dataList.getColData(l));for(var D=0;D<d;D++){var S,w={};if(w.title=m[D],C[D].length==this.options.ioFormat.length+6?w.start=WebSquare.text.formatDate(C[D],"yyyy-MM-ddTHH:mm:SS",this.options.ioFormat+"HHmmSS"):w.start=WebSquare.text.formatDate(C[D],"yyyy-MM-dd",this.options.ioFormat),g[D].length==this.options.ioFormat.length+6)(S=g[D])&&"00:00:00"==this.options.nextDayThreshold&&"000000"==S.substring(8)&&(S=WebSquare.date.dateAdd(S.substring(0,8),1)+"000000"),w.end=WebSquare.text.formatDate(S,"yyyy-MM-ddTHH:mm:SS",this.options.ioFormat+"HHmmSS");else(S=g[D])&&r.D.getBoolean(this.options.includeScheduleEnd)&&(S=WebSquare.text.formatDate(S,"yyyyMMdd",this.options.ioFormat),S=WebSquare.date.dateAdd(S,1),S=WebSquare.text.formatDate(S,this.options.ioFormat,"yyyyMMdd")),w.end=WebSquare.text.formatDate(S,"yyyy-MM-dd",this.options.ioFormat);if(v[D]?w.id=v[D]:m[D]&&(w.id=m[D]),y&&(w[s]=y[D]),b[D]){var x="string"==typeof b[D]?JSON.parse(b[D]):"object"==typeof b[D]?b[D]:{};x.hasOwnProperty("rendering")&&(w.rendering=x.rendering),(x.hasOwnProperty("class")||x.hasOwnProperty("className"))&&(w.className=x.class||x.className),x.hasOwnProperty("color")&&(w.color=x.color),x.hasOwnProperty("backgroundColor")&&(w.backgroundColor=x.backgroundColor),x.hasOwnProperty("borderColor")&&(w.borderColor=x.borderColor),x.hasOwnProperty("textColor")&&(w.textColor=x.textColor)}w.title&&this.scheduleEvent.push(w)}return this.scheduleEvent}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.setDayNameStyle=function(t){try{if(t.defaultOption||(this.dayNameStyle=t),t)for(var e in t)"defaultOption"!=e&&(t[e].header&&$(".fc-day-header.fc-widget-header.fc-"+e).css(t[e].header),
t[e].body.background&&$(".fc-day.fc-widget-content.fc-"+e).not("."+this.options.defaultDateClass).css(t[e].body.background),t[e].body.num&&$(".fc-day-number.fc-"+e).css(t[e].body.num))}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.setHeaderBtn=function(t){try{if(t&&"object"==typeof t){for(var e in t.headerLeftBtn="string"==typeof t.headerLeftBtn?r.D.getBoolean(t.headerLeftBtn):t.headerLeftBtn,t.headerRightBtn="string"==typeof t.headerRightBtn?r.D.getBoolean(t.headerRightBtn):t.headerRightBtn,t.headerTitle="string"==typeof t.headerTitle?r.D.getBoolean(t.headerTitle):t.headerTitle,t)this.headerBtnInfo[e]=t[e];var a="#"+this.id+" ";void 0===t.headerLeftBtn||t.headerLeftBtn?t.headerLeftBtn&&($(a+".fc-left").css({opacity:100,filter:"alpha(opacity=100)"}),$(a+".fc-left").find("button").removeAttr("disabled"),$(a+".fc-left").find("button").css("cursor","pointer")):($(a+".fc-left").css({opacity:0,filter:"alpha(opacity=0)"}),$(a+".fc-left").find("button").attr("disabled","true"),$(a+".fc-left").find("button").css("cursor","default")),void 0===t.headerRightBtn||t.headerRightBtn?t.headerRightBtn&&($(a+".fc-right").css({opacity:100,filter:"alpha(opacity=100)"}),$(a+".fc-right").find("button").removeAttr("disabled"),$(a+".fc-left").find("button").css("cursor","pointer")):($(a+".fc-right").css({opacity:0,filter:"alpha(opacity=0)"}),$(a+".fc-right").find("button").attr("disabled","true"),$(a+".fc-right").find("button").css("cursor","default")),void 0===t.headerTitle||t.headerTitle?t.headerTitle&&$(a+".fc-center").css({opacity:100,filter:"alpha(opacity=100)"}):$(a+".fc-center").css({opacity:0,filter:"alpha(opacity=0)"})}}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.getDataListInfo=function(){try{if(this.modelControl.isDataCollectionItemsetBinded){var t={};return t.id=this.options.dataList,t.titleColumn=this.options.titleColumn,t.startColumn=this.options.startColumn,t.endColumn=this.options.endColumn,t.themeColumn=this.options.themeColumn,this.options.eventOrderColumn&&(t.eventOrderColumn=this.options.eventOrderColumn),t}return null}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.getView=function(){try{var t=$("#"+this.id).fullCalendar("getView");return t?{name:t.name||"",type:t.type||"",title:t.title||"",intervalStart:t.intervalStart||"",intervalEnd:t.intervalEnd||""}:{}}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.changeView=function(t,e){try{var a=["month","basicWeek","basicDay","agendaWeek","agendaDay"].indexOf(t)>-1?t:"month";$("#"+this.id).fullCalendar("changeView",a,e||{})}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.handleClickEvent=function(t,e,a){try{var i=new Date(t._d),n=new Date(e._d),r=WebSquare.text.fillZero(i.getUTCFullYear()+"",4)+WebSquare.text.fillZero(i.getUTCMonth()+1+"",2)+WebSquare.text.fillZero(i.getUTCDate()+"",2),l=WebSquare.text.fillZero(n.getUTCFullYear()+"",4)+WebSquare.text.fillZero(n.getUTCMonth()+1+"",2)+WebSquare.text.fillZero(n.getUTCDate()+"",2),d=!0;if(!1===this.options.scheduleClickPopup&&a&&(d=!1),this.options.selectable&&this.selectable&&d){var u=prompt("일정 :");if(u){var h={start:""===this.options.startColumn?"start":this.options.startColumn,end:""===this.options.endColumn?"end":this.options.endColumn,id:""===this.options.idColumn?"id":this.options.idColumn,title:""===this.options.titleColumn?"title":this.options.titleColumn},c={title:u,start:r,end:l,id:u};if(c[h.title]=c.title,c[h.start]=c.start,c[h.end]=c.end,c[h.id]=c.id,this.options.eventOrderColumn){var f=0;this.defaultData.events&&this.defaultData.events.length>0&&(f=this.defaultData.events[this.defaultData.events.length-1][this.options.eventOrderColumn]),c[this.options.eventOrderColumn]=f}this.addSchedule(c)}}var p={start:t._d,end:e._d};a&&(p.title=a[this.options.titleColumn],p.id=a[this.options.idColumn]),s.B.fireEvent(this,"onclick",p)}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.handleEventAfterAllRender=function(t){try{s.B.fireEvent(this,"oneventafterallrender",t)}catch(t){
o.w.printStackTrace(t,null,this)}},d.prototype.handleMouseDownEvent=function(t){try{s.B.stopPropagation(t)}catch(t){o.w.printStackTrace(t,null,this)}},d.prototype.setDefaultDate=function(t){try{var e=WebSquare.text.formatDate(this.options.defaultDate,"yyyy-MM-dd");$('.fc-day[data-date="'+e+'"]').removeClass(this.options.defaultDateClass),$(".fc-today").removeClass("fc-today"),this.options.defaultDate=t;var a=WebSquare.text.formatDate(t,"yyyy-MM-dd",this.options.ioFormat),i=WebSquare.text.formatDate(t,"yyyy-MM-dd");this.defaultData.defaultDate=a,$("#"+this.id).fullCalendar("rerenderEvents"),$("#"+this.id).fullCalendar("gotoDate",a),$('.fc-day[data-date="'+i+'"]').addClass(this.options.defaultDateClass)}catch(t){o.w.printStackTrace(t,null,this)}}}}]);