/*amd /frame/udc/example_refresh.xml 1680 a9f83192096fc888aa06c11648a4c96b42ed691e9043968d9cd3765215b9af58 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * @component
 * @company 
 * @developer na
 * @variableClone true
 * @notSupportBrowser 
 * @version 
 * @htmlRender 
 * @icon 
 * @disableIcon 
 * @width 
 * @height 
 * @description 
 */ 

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description desc
 */ 

/**
 * @property
 * @name class
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description desc
 */ 

/**
 * @property
 * @name id
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default udc_example_refresh
 * @necessary N
 * @description desc
 */ 

scwin.onpageload = function() {
	
};

scwin.btn_refresh_onclick = function(e) {
    $p.parent().$p.reinitialize();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.btn_refresh_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]}]}]}]})