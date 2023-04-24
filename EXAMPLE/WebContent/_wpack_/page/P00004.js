/*amd /page/P00004.xml 10802 152f7442f5f08d1c50a24f527b37c70f1d0fb220723140165d8d1bfb8b831d79 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'map',id:'dlt_Upload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'size',name:'사이즈',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
	dlt_Upload.setJSON([]);
};

/**
 * upload 컴포넌트의 [전송]버튼 클릭 핸들러
 */
scwin.btn_upload_onclick = function (e) {
	//결과값 출력 textarea 초기화
	txa_uploadDone.setValue("");
	//선택된 파일이 있는지에 따른 분기 처리.
	if (upd_ex01.getValue()) {
		//업로드 실행.
		upd_ex01.submit();
	} else {
		//파일이 선택되지 않은 경우 alert 처리.
		alert("파일이 선택되지 않았습니다.");
	}
};

/**
 * upload 컴포넌트의 ondone 이벤트 발생 시
 * 업로드 결과 출력
 */
scwin.upd_ex01_ondone = function (retXml) {
	var strRet;

	//upload 컴포넌트 초기화.
	upd_ex01.reset();

	//textarea에 출력할 결과값 가공. (xml과 xml을 json으로 변환한 문자열을 함께 출력)
	strRet = WebSquare.xml.indent(retXml);
	strRet += "\n\n******************************************************\n** WebSquare.json.XML2JSONString 로 변환 **\n******************************************************\n\n"
	strRet += WebSquare.json.XML2JSONString(retXml);

	//textarea
	txa_uploadDone.setValue(strRet);

	/*
	//retXml 예시
	<ret>
		<key>C:/ws5/sample/resource/websquare_home/upload/up</key>
		<storedFileList>00_20161227094305.xml</storedFileList>
		<localfileList>00.xml</localfileList>
		<fileSizeList>1436</fileSizeList>
		<maxUploadSize>200000000</maxUploadSize>
		<deniedList/>
		<deniedCodeList/>
	</ret>
	*/
};

/**
 * multiUpload 컴포넌트의 selectCallback 속성에 지정한 함수.
 * 파일 선택이 완료된 경우 발생.
 */
scwin.multiUploadSelectDone = function () {
	//선택된 파일 목록을 그리드에 출력. 그리드에 연결된 DataList에 선택된 파일 정보를 할당. dlt_Upload는 GridView와 연결되어 있음.
	dlt_Upload.setJSON(mpd_html5Type.getFileInfos());
};

/**
 * multiupload 컴포넌트의 ondone 이벤트 발생 시
 * 업로드 결과 출력
 */
scwin.mpd_html5Type_ondone = function (data) {
	alert("업로드가 완료되었습니다.");
	//결과값을 textarea에 출력.
	txa_muliuploadDone.setValue(JSON.stringify(data, null, "\t"));
};

/**
 * multiupload 컴포넌트의 [초기화] 버튼 클릭 시 발생
 */
scwin.btn_InitMultiupload_onclick = function (e) {
	//선택 목록 삭제 - 그리드에 연결된 DataList의 데이터 삭제.
	dlt_Upload.removeAll();
	//multiupload 컴포넌트의 선택된 파일 목록 삭제.
	mpd_html5Type.removeAllFiles();
	//multiupload 결과값 출력 textarea의 value 초기화.
	txa_muliuploadDone.setValue("");
};

/**
 * multiupload 컴포넌트의 [전송] 버튼 클릭 시 발생
 */
scwin.btn_saveMultiupload_onclick = function (e) {
	//선택된 파일이 없는 경우 분기 처리.
	if (mpd_html5Type.getFileCount() === 0) {
		alert("업로드할 파일이 없습니다.");
		return;
	}

	//파일 업로드 시작. 완료되면 multiupload의 ondone 이벤트가 발생.(scwin.mpd_html5Type_ondone)
	mpd_html5Type.startUpload();
};



}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'폼을 구성하는 컴포넌트로, 기본 button ( input type="button" )과 html로 구성 된 업로드 컴포넌트 예시입니다.<br/>MultiUpload의 경우 기본 UI가 Flash임으로 HTML5의 Multiple을 사용하기 위해선 mode속성의 값을 html5_transparent으로 설정하여 UI를 구성해야 합니다.<br/>아래 [type : html5_transparent] 예시는 Multiupload와 GridView컴포넌트로 구성되어 있습니다.<br/>Trigger, Anchor, Upload, MultiUpload',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Trigger',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'',id:'',style:'width: 80px;height: 26px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'type:button'}]}]},{T:1,N:'xf:trigger',A:{class:'',id:'',style:'width: 80px;height: 26px;',type:'anchor'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'type:anchor'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Anchor',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:anchor',A:{class:'mr_def',id:'',outerDiv:'false',style:'text-decoration:underline;'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이동'}]}]},{T:1,N:'w2:anchor',A:{class:'btn_cm',id:'',outerDiv:'true',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'button'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Upload',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'max-width: 600px;'},E:[{T:1,N:'xf:group',A:{class:'dfbox',id:''},E:[{T:1,N:'w2:upload',A:{class:'',disabled:'','ev:ondone':'scwin.upd_ex01_ondone',id:'upd_ex01',imageStyle:'position:absolute;vertical-align:middle;word-wrap:break-word',inputStyle:'position:absolute;vertical-align:middle;word-wrap:break-word',style:'position: relative ;width: calc(100% - 80px);',type:'image'}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_upload_onclick',id:'btn_upload',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송'}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt_bold',id:'',label:'업로드 결과',style:''}}]},{T:1,N:'xf:textarea',A:{class:'',id:'txa_uploadDone',spellcheck:'false',style:'width: 100%;height: 120px;'}}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'MultiUpload',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'max-width: 600px;'},E:[{T:1,N:'w2:textbox',A:{class:'mb_def',id:'',label:'mode="html5_transparent"',style:''}},{T:1,N:'w2:textbox',A:{class:'mb_def',id:'',label:'(Multiupload, Trigger, GridView등의 컴포넌트로 구성)',style:''}},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'position: relative; float: left;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'',id:'ui_SelectFile',nextTabID:'',style:'width:80px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'파일 선택'}]}]},{T:1,N:'w2:multiupload',A:{action:'','ev:ondone':'scwin.mpd_html5Type_ondone',filter:'',id:'mpd_html5Type',maxcount:'',maxsize:'',mode:'html5_transparent',selectCallback:'scwin.multiUploadSelectDone',style:'position:absolute;left:0px;top:0px;width:14px;height:26px;cursor:pointer;z-index:999;',uploadButton:'',wmode:'false',lang:'en'}}]},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.btn_saveMultiupload_onclick',id:'btn_saveMultiupload',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm fr','ev:onclick':'scwin.btn_InitMultiupload_onclick',id:'btn_InitMultiupload',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]}]},{T:1,N:'xf:group',A:{class:'gvwbox',id:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',class:'wq_gvw',dataList:'dlt_Upload',fixedColumnWithHidden:'true',id:'',ignoreCellClick:'false',ignoreToggleOnDisabled:'false',noResultMessage:'선택된 파일이 없습니다.',noResultMessageClass:'w2gridViewNoResult',noResultMessageStyle:'',noResultMessageVisible:'true',rowNumHeaderValue:'No',rowNumVisible:'true',rowNumWidth:'30',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 150px;margin-top: 10px;',summaryAuto:'false',useShiftKey:'true',visibleRowNum:'5'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'height:20px;',value:'파일명',width:'199'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column1',inputType:'text',style:'height:20px;',value:'사이즈(byte)',width:'88'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'name',inputType:'text',style:'height:20px',textAlign:'left',width:'199'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'#,###',displayMode:'label',id:'size',inputType:'text',style:'height:20px',textAlign:'right',width:'88'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt_bold',id:'',label:'업로드 결과',style:''}}]},{T:1,N:'xf:textarea',A:{class:'mb_def',id:'txa_muliuploadDone',spellcheck:'false',style:'width: 100%;height: 120px;'}}]}]}]}]}]}]}]}]})