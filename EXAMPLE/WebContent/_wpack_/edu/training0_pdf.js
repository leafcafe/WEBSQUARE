/*amd /edu/training0_pdf.xml 1725 78348a2f03cec1c32bdad51c915cb78dd79ec05848c073bd9436564bc821f994 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	var tmpJSON;
    
    tmpJSON = $p.getParameter( "rowObj" ); 

     

	tab1.deleteAllTabs();
    var _tabKey = "pdf1";
    var _url = tmpJSON.pdfNm; 
    var _label = tmpJSON.label;
     
    		var tabOptions = {
			"label" : _label,
			"closable" : true,
			"openAction" : "select"
		};
		
		var contentsOptions = {
			"src" : _url,
			"frameMode" : "iframe"
		};
 
		console.log(_tabKey);
		console.log(_url);
		tab1.addTab(_tabKey, tabOptions, contentsOptions); 
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'position: absolute;left:10px;top:10px;bottom:0px;right: 0px;'},E:[{T:1,N:'w2:iframe',A:{id:'iframe1',src:'',style:'position:relative;width:100%;height:100%;display: none;'}},{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'tac_layout',closable:'',confirmFalseAction:'new',confirmTrueAction:'exist',hiddenTab:'',id:'tab1',style:'position:absolute;left:5px;right:0px;top:5px;bottom:0px;background:transparent;',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'}}]}]}]}]})