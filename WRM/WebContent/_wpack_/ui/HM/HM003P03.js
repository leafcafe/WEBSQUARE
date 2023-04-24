/*amd /ui/HM/HM003P03.xml 5888 248f509d93a9248f9ea8a28f5e22e78fb7abf4ee8f6c51b91bd02862e43fa6b3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{id:'dlt_zipCode',baseNode:'list',style:'',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS',name:'주소',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dma_searchParam',baseNode:'param',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'SEARCH_KEYWORD',name:'검색조건',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_getZipCodeList',ref:'data:json,{"id":"dma_searchParam","key":"param"}',target:'data:json,{"id":"dlt_zipCode","key":"data"}',action:'/member/selectZipCodeList',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.searchCallback','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 우편번호 선택 화면 초기화 작업을 수행한다.
 */
scwin.onpageload = function () {
	var param = com.data.getParameter();
	scwin.closeCallbackFncName = param.callbackFn;

	ibx_searchKeyword.focus();
	com.win.setEnterKeyEvent(tbl_search, scwin.btn_searchZip_onclick);
};

/**
 * 우편번호 선택를 조회한다.
 */
scwin.btn_searchZip_onclick = function () {
	com.sbm.execute(sbm_getZipCodeList);
};

scwin.searchCallback = function () {
	grd_zipCode.setFocusedCell(0, 0);
};

/**
 * 선택된 우편번호 정보를 반환한다.
 */
scwin.btn_confirm_onclick = function () {
	var focusedRowIndex = grd_zipCode.getFocusedRowIndex();

	if (focusedRowIndex >= 0) {
		var returnValue = dlt_zipCode.getRowJSON(focusedRowIndex);
		com.win.closePopup(returnValue);
	} else {
		com.win.alert(com.data.getMessage("MSG_CM_00044"));
	}
};

scwin.grd_zipCode_oncelldblclick = function (row, col) {
	scwin.btn_confirm_onclick();
};

scwin.grd_zipCode_onkeyup = function (e) {
	if (e.keyCode === 13) {
		scwin.btn_confirm_onclick();
	}
};

/**
 * 우편번호 정보 선택을 취소한다.
 */
scwin.btn_cancel_onclick = function () {
	com.win.closePopup();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents flex_gvw'},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tb',id:'tbl_search',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'검색어',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_searchKeyword',placeholder:'주소명(동/읍/면/리/가) 입력',style:'width:100%;',ref:'data:dma_searchParam.SEARCH_KEYWORD'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_searchZip',style:'',type:'button','ev:onclick':'scwin.btn_searchZip_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'',captionTitle:'',checkReadOnlyOnCut:'',class:'wq_gvw',dataList:'data:dlt_zipCode',defaultCellHeight:'26',id:'grd_zipCode',rowStatusHeaderValue:'상태',rowStatusVisible:'false',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:243px;',readOnly:'true','ev:oncelldblclick':'scwin.grd_zipCode_oncelldblclick',focusMode:'row'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column2',value:'우편번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',style:'',id:'column1',value:'주소',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',style:'',id:'ZIP_CD',value:'',blockSelect:'false',displayMode:'label',displayFormat:'###-###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'ADDRESS',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})