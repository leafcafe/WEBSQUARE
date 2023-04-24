/*amd /page/P00052.xml 10615 463061022f11bee11f374091c52889d035fdaf5a3871a57d987c39551193a9d0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220706'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_Member',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:ondataload':'scwin.dlt_Member_ondataload','ev:oninsertrow':'scwin.dlt_Member_oninsertrow','ev:onremoverow':'scwin.dlt_Member_onremoverow'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name16',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'EMP_CD',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMP_NM',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'GENDER_CD',name:'성별',dataType:'text'}},{T:1,N:'w2:column',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'POSITION_CD',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'DUTY_CD',name:'직책',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ROLE_CD',name:'역할',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'EMAIL',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ZIP_CD',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ADDRESS2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IMAGE_PATH',name:'이미지경로',dataType:'text',defaultValue:'/ws5/img/blank.png'}},{T:1,N:'w2:column',A:{id:'CREATED_DATE',name:'생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPDATED_DATE',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'daoType',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_selectAll_json',ref:'data:json,[{"id":"dma_SearchParam"}]',target:'data:json,dlt_Member',action:'/data/sampleData/largeData/dlt_Member_11X2000_json.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중입니다.','ev:submit':'scwin.sbm_selectAll_json_submit','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_selectAll_array',ref:'data:json,[{"id":"dma_SearchParam"}]',target:'data:array,dlt_Member',action:'/data/sampleData/largeData/dlt_Member_11X2000_array.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중입니다.','ev:submit':'scwin.sbm_selectAll_array_submit','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//page onload event
scwin.onpageload = function () {
	com.setCommonCode(
		$p,
		[
			{ "code": "02", "compID": "grd_Member:DUTY_CD" },
			{ "code": "01", "compID": "grd_Member:POSITION_CD" },
			{ "code": "19", "compID": "grd_Member:ROLE_CD" },
			{ "code": "101", "compID": "grd_Member:GENDER_CD" }
		]
	);
};

//data type에 따라 request 값 변경.  
scwin.sbm_selectAll_json_submit = function (e) {
	dma_SearchParam.set("daoType", "json");
};

//data type에 따라 request 값 변경.
scwin.sbm_selectAll_array_submit = function (e) {
	dma_SearchParam.set("daoType", "array");
};

//dlt_Member에 data가 셋팅 될 때 호출
scwin.dlt_Member_ondataload = function () {
	scwin.dlt_Member_dataChange();
};

//dlt_Member에 data가 추가 될 때 호출
scwin.dlt_Member_oninsertrow = function (info) {
	scwin.dlt_Member_dataChange();
};

//dlt_Member에 data가 삭제 될 때 호출
scwin.dlt_Member_onremoverow = function (info) {
	scwin.dlt_Member_dataChange();
};

//dlt_Member에 data가 로딩 된 후 totalCount
scwin.dlt_Member_dataChange = function () {
	spn_MemCount.setValue(dlt_Member.getRowCount());
};

scwin.btn_SearchDefault_onclick = function (e) {
	$p.executeSubmission("sbm_selectAll_json");
};

scwin.btn_SearchLargeHander_onclick = function (e) {
	$p.executeSubmission("sbm_selectAll_array");
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'기본 데이터 포맷(JSON)과 대용량 데이터 포맷(Array)을 DataList에 셋팅하기 위한 Submission의 설정 예제입니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_SearchDefault_onclick',id:'btn_SearchDefault',style:'width:150px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'JSON 타입 조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_SearchLargeHander_onclick',id:'btn_SearchLargeHander',style:'width:150px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ARRAY 타입 조회'}]}]}]},{T:1,N:'xf:group',A:{class:'ofh mb_def',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading fl',id:'',label:'사용자 목록',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def',dataType:'text',displayFormat:'',id:'',label:'열 : 11건, ',style:''}},{T:1,N:'w2:span',A:{class:'mr_def',dataType:'text',displayFormat:'',id:'',label:'행 :',style:''}},{T:1,N:'w2:span',A:{class:'mr_def',dataType:'number',displayFormat:'#,##0',id:'spn_MemCount',label:'0',style:''}},{T:1,N:'w2:span',A:{class:'',dataType:'text',displayFormat:'',id:'',label:'건',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:onscrollend':'scwin.grd_Member_onscrollend',scrollByColumnAdaptive:'false',rowNumVisible:'true',rowStatusWidth:'',summaryAuto:'false',useShiftKey:'true',readOnly:'',rowNumHeaderValue:'번호',scrollByColumn:'false',rowStatusHeaderValue:'',autoFitFilterList:'true',rowStatusVisible:'',fixedColumnWithHidden:'true',rowNumWidth:'40',dataList:'dlt_Member',ignoreCellClick:'false',style:'height: 250px;',autoFit:'allColumn',id:'grd_Member',useFilterList:'true',visibleRowNum:'15',class:'wq_gvw ',ignoreToggleOnDisabled:'false',autoFitMinWidth:'1060',defaultCellHeight:'26'},E:[{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',sortable:'true',class:'',value:'성명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'53',inputType:'text',style:'',id:'column25',sortable:'true',class:'',value:'성별',blockSelect:'false',displayMode:'label',useFilter:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',sortable:'true',class:'',value:'등록일',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'62',inputType:'text',style:'',id:'column21',sortable:'true',class:'',value:'직책',blockSelect:'false',displayMode:'label',useFilter:''}},{T:1,N:'w2:column',A:{width:'62',inputType:'text',style:'',id:'column19',sortable:'true',class:'',value:'직위',blockSelect:'false',displayMode:'label',useFilter:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',sortable:'true',class:'',value:'역할',blockSelect:'false',displayMode:'label',useFilter:''}},{T:1,N:'w2:column',A:{width:'64',inputType:'text',style:'',id:'column15',sortable:'true',value:'담당업무',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'176',inputType:'text',style:'',id:'column13',value:'이메일',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'우편번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'252',inputType:'text',style:'',id:'column9',value:'주소1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'104',inputType:'text',style:'',id:'column7',value:'주소2',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'EMP_NM',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'53',inputType:'select',style:'',id:'GENDER_CD',blockSelect:'false',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',style:'',id:'JOIN_DATE',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'62',inputType:'select',style:'',id:'POSITION_CD',blockSelect:'false',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'62',inputType:'select',style:'',id:'DUTY_CD',blockSelect:'false',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{chooseOption:'',width:'70',inputType:'select',style:'',allOption:'',id:'ROLE_CD',blockSelect:'false',displayMode:'label'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'64',inputType:'text',style:'',id:'ASSIGNED_TASK',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'176',inputType:'text',style:'',id:'EMAIL',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ZIP_CD',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'252',inputType:'text',style:'',id:'ADDRESS1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'104',inputType:'text',style:'',id:'ADDRESS2',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]}]}]})