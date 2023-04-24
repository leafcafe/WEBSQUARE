/*amd /page/P00038.xml 16187 12702f956f2845467f15c4f5c8dee66e41fbe98db13f89d09afad2ec0495e150 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220522'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_reqCode'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'userID'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'userID',E:[{T:3,text:'EDU001'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_reqInfo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'pageNm'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'pageNm',E:[{T:3,text:'P00038.xml'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_resMessage',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'code',name:'상태코드'}},{T:1,N:'w2:key',A:{dataType:'text',id:'msg',name:'메세지'}},{T:1,N:'w2:key',A:{dataType:'text',id:'rsCount',name:'검색건수'}}]}]},{T:1,N:'w2:dataList',A:{id:'dc_resUserListData',baseNode:'list',repeatNode:'map',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'birthday',name:'birthday',dataType:'text'}},{T:1,N:'w2:column',A:{id:'height',name:'height',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'weight',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_resUserMapData'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'name'}},{T:1,N:'w2:key',A:{id:'birthday',dataType:'text'}},{T:1,N:'w2:key',A:{id:'height',dataType:'text'}},{T:1,N:'w2:key',A:{id:'weight',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dc_sbxType',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'desc',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'ref와 target을 설정하지 않은 예시'}]},{T:1,N:'value',E:[{T:4,cdata:'sbm_json_dataMap_noRef_noTarget'}]},{T:1,N:'desc',E:[{T:4,cdata:'\n이 예시는 submission의 속성중 ref와 target을 설정하지 않았습니다.\nref의 설정값이 없기 때문에 화면에서 전송되는 request는 없습니다.\n통신 후 response데이터가 있지만 target의 설정값이 없기 때문에 response데이터가 dataCollection에 셋팅되지 않습니다.\n\nid="sbm_json_dataMap_noRef_noTarget"\nref=""\ntarget=""\naction="/data/sampleData/sampleData_json_dc_map.json"							\n							'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'ref와 target 설정 예시- 1개의 data 객체 연결'}]},{T:1,N:'value',E:[{T:4,cdata:'sbm_json_dataList'}]},{T:1,N:'desc',E:[{T:4,cdata:'\nid="sbm_json_dataList"\nref="data:json,dc_reqCode"\ntarget="data:json,dc_resUserListData"\naction="/data/sampleData/sampleData_json_dc_list.json"\n							'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'ref와 target 설정 예시 - 2개의 data 객체 연결'}]},{T:1,N:'value',E:[{T:4,cdata:'sbm_json_dataListWithMessge_01'}]},{T:1,N:'desc',E:[{T:4,cdata:'\nid="sbm_json_dataListWithMessge_01"\nref="data:json,[\'dc_reqCode\',\'dc_reqInfo\']"\ntarget="data:json,[\'dc_resUserListData\',\'dc_resMessage\']"\naction="/data/sampleData/sampleData_json_dc_combination.json"\n							'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'singleMode 설정 예시'}]},{T:1,N:'value',E:[{T:4,cdata:'sbm_json_dataList_singleMode'}]},{T:1,N:'desc',E:[{T:4,cdata:'\n:: response data singleMode::\nid="sbm_json_dataList_singleMode"\nsingleMode="true"\ntarget="data:json,dc_resUserListData"\naction="/data/sampleData/sampleData_json_dc_list_singleMode.json"\n							'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'response 데이터와 dataCollection 자동 매칭 설정 예시'}]},{T:1,N:'value',E:[{T:4,cdata:'sbm_json_dataList_autoBind'}]},{T:1,N:'desc',E:[{T:4,cdata:'\n:: 자동매칭 - 비권장(성능저하) ::\nid="sbm_json_dataList_autoBind"\ntarget="data:json"\naction="/data/sampleData/sampleData_json_dc_combination.json"\n							'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'ref를 설정하고 requestData를 동적으로 할당한 예시'}]},{T:1,N:'value',E:[{T:4,cdata:'sbm_json_dataListWithMessge_02'}]},{T:1,N:'desc',E:[{T:4,cdata:'\n:: request data 동적 할당:: \nid="sbm_json_dataListWithMessge_02"\nref="data:json,[\'dc_reqCode\',\'dc_reqInfo\']"\ntarget="data:json,[\'dc_resUserListData\']"\naction="/data/sampleData/sampleData_json_dc_map_singleMode.json"							\n							'}]}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dc_defInfoMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'defDesc',name:'name1',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'defDesc',E:[{T:4,cdata:'\n이 화면은 Submission의 ref속성과 target속성의 설정에 따른 예시를 담고 있습니다.\nref속성은 request data와 연관있고 target속성은 response data와 연관이 있습니다.  \ntarget속성의 설정값에 따라 통신 후 내려온 response data를 dataCollection에 셋팅됩니다.\n예시를 실행하는 방법은 다음과 같습니다.\n1. [Submission의 ref와 target 설정 예시]에 있는 selectbox에 항목을 선택합니다.\n	선택된 항목의 설명이 selectbox의 하위에 표현됩니다.\n2. [실행]버튼을 클릭합니다.\n	선택된 항목과 연관이 있는 submission(항목의 설명부분의 id를 참조)이 실행됩니다.\n3. [Request, Response 정보]하위에 있는 textare에 출력된 데이터를 확인합니다.\n	출력된 데이터는 통신 이후 서버에 호출한 url과 서버로 전송된 request data와 서버에서 받은 response data를 표현합니다.\n4. [이전/이후 DataCollection 정보]하위에 있는 textare에 출력된 통신 이전/이후의 데이터를 비교합니다.\n	위에 있는 textare에는 초기화시킨 통신 이전의 dataCollection 전체가 출력됩니다.\n	아래에 있는 textare에는  통신 이후의 dataCollection 전체가 출력됩니다.\n	target에 설정된 정보에 따라 변경된 dataCollection의 데이터를 비교해봅니다.\n						'}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_json_dataMap_noRef_noTarget',ref:'',target:'',action:'/data/sampleData/sampleData_json_dc_map.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_json_dataMap_noRef_noTarget_submitdone','ev:submiterror':'scwin.sbm_json_dataMap_noRef_noTarget_submiterror','ev:submit':'scwin.sbm_submit_resetDataCollection',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_json_dataList',ref:'data:json,dc_reqCode',target:'data:json,dc_resUserListData',action:'/data/sampleData/sampleData_json_dc_list.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_json_dataList_submitdone','ev:submiterror':'scwin.sbm_json_dataList_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'','ev:submit':'scwin.sbm_submit_resetDataCollection'}},{T:1,N:'xf:submission',A:{id:'sbm_json_dataListWithMessge_01',ref:'data:json,[\'dc_reqCode\',\'dc_reqInfo\']',target:'data:json,[\'dc_resUserListData\',\'dc_resMessage\']',action:'/data/sampleData/sampleData_json_dc_combination.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_json_dataListWithMessge_01_submitdone','ev:submiterror':'scwin.sbm_json_dataListWithMessge_01_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'','ev:submit':'scwin.sbm_submit_resetDataCollection'}},{T:1,N:'xf:submission',A:{id:'sbm_json_dataListWithMessge_02',ref:'data:json,[\'dc_reqCode\',\'dc_reqInfo\']',target:'data:json,[\'dc_resUserListData\']',action:'/data/sampleData/sampleData_json_dc_combination2.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_json_dataListWithMessge_02_submitdone','ev:submiterror':'scwin.sbm_json_dataListWithMessge_02_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'','ev:submit':'scwin.sbm_submit_resetDataCollection'}},{T:1,N:'xf:submission',A:{id:'sbm_json_dataList_singleMode',ref:'',target:'data:json,dc_resUserListData',singleMode:'true',action:'/data/sampleData/sampleData_json_dc_list_singleMode.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_json_dataList_singleMode_submitdone','ev:submiterror':'scwin.sbm_json_dataList_singleMode_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'','ev:submit':'scwin.sbm_submit_resetDataCollection'}},{T:1,N:'xf:submission',A:{id:'sbm_json_dataList_autoBind',ref:'',target:'data:json',action:'/data/sampleData/sampleData_json_dc_combination.json',mediatype:'application/json',method:'post',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_json_dataList_autoBind_submitdone','ev:submiterror':'scwin.sbm_json_dataList_autoBind_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',processMsg:'','ev:submit':'scwin.sbm_submit_resetDataCollection'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    sbx_exampleType.setSelectedIndex(1);
};

/**
 * [실행1] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var sbmId = sbx_exampleType.getValue();

    if (sbmId) {
        if (sbmId == "sbm_json_dataListWithMessge_02") {
            //ref를 설정하고 requestData를 동적으로 할당한 예시
            $p.executeSubmission(sbmId, { "req_info": { "userID": "Dynamic_EDU003" } });
        } else {
            $p.executeSubmission(sbmId);
        }
    } else {
        alert("선택된 항목이 없습니다.");
    }
};

/**
 * submission 공통 모듈
 * 응답 데이터 출력
 */
scwin.setResData = function (reqTxt, submissionID, resTxt, dataType) {
    var rsTxt;
    rsTxt = "::: submission ID :" + submissionID + "\n\n::: Reqeust Data\n" + reqTxt + "\n\n::: Response Data\n" + resTxt;
    txa_desc1.setValue(rsTxt);
    txa_desc3.setValue("::: 이후 DataCollection :::\n" + JSON.stringify($p.data.get("JSON", ["dc_reqCode", "dc_reqInfo", "dc_resMessage", "dc_resUserMapData", "dc_resUserListData"]), null, "\t"));
};

/**
 * 공통 모듈
 * 오리지널 데이터 셋팅.
 */
scwin.setOrgData = function () {
    var dataObj = scwin.getOrgData();
    txa_desc2.setValue("::: 이전 DataCollection :::\n" + JSON.stringify(dataObj, null, "\t"));
    $p.data.set("json", dataObj);
}

/**
 * 공통 모듈
 * 오리지널 데이터 반환
 */
scwin.getOrgData = function () {
    return { "dc_reqCode": { "userID": "EDU001" }, "dc_reqInfo": { "pageNm": "P00038.xml" }, "dc_resMessage": { "code": "", "msg": "", "rsCount": "" }, "dc_resUserMapData": { "name": "", "birthday": "", "height": "", "weight": "" }, "dc_resUserListData": [] };
};

/**
 * submission submit handler
 * submisison 실행 전 호출
 */
scwin.sbm_submit_resetDataCollection = function (e) {
    scwin.setOrgData();
};

/**
 * 예제 타입 selectbox 변경 시
 */
scwin.sbx_exampleType_onchange = function (info) {
    var strValue = info.newValue;
    if (strValue) {
        tbx_desc.setValue("<pre>" + dc_sbxType.getMatchedColumnData("value", strValue, "desc")[0] + "</pre>");
    } else {
        tbx_desc.setValue("");
    }
};

scwin.sbm_json_dataMap_noRef_noTarget_submitdone = function (e) {
    scwin.setResData(e.requestBody, e.id, e.responseText, "json");
};

scwin.sbm_json_dataMap_noRef_noTarget_submiterror = function (e) {
    alert("ERROR::" + e.responseStatusCode);
};

scwin.sbm_json_dataList_submitdone = function (e) {
    scwin.setResData(e.requestBody, e.id, e.responseText, "json");
};

scwin.sbm_json_dataList_submiterror = function (e) {
    alert("ERROR::" + e.responseStatusCode);
};

scwin.sbm_json_dataListWithMessge_01_submitdone = function (e) {
    scwin.setResData(e.requestBody, e.id, e.responseText, "json");
};

scwin.sbm_json_dataListWithMessge_01_submiterror = function (e) {
    alert("ERROR::" + e.responseStatusCode);
};

scwin.sbm_json_dataListWithMessge_02_submitdone = function (e) {
    scwin.setResData(e.requestBody, e.id, e.responseText, "json");
};

scwin.sbm_json_dataListWithMessge_02_submiterror = function (e) {
    alert("ERROR::" + e.responseStatusCode);
};

scwin.sbm_json_dataList_singleMode_submitdone = function (e) {
    scwin.setResData(e.requestBody, e.id, e.responseText, "json");
};

scwin.sbm_json_dataList_singleMode_submiterror = function (e) {
    alert("ERROR::" + e.responseStatusCode);
};

scwin.sbm_json_dataList_autoBind_submitdone = function (e) {
    scwin.setResData(e.requestBody, e.id, e.responseText, "json");
};

scwin.sbm_json_dataList_autoBind_submiterror = function (e) {
    alert("ERROR::" + e.responseStatusCode);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_example_refresh',type:'page',variableClone:'true',src:'/frame/udc/example_refresh.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:udc_example_refresh',A:{id:'udc_example_refresh',style:'margin-bottom:10px;'}},{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'Submission의 ref와 target 설정 예시',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'dfbox'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'tal mr_def',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_exampleType',ref:'',renderType:'',style:'width: 250px;',submenuSize:'auto',tooltipDisplay:'true',tooltipTime:'0','ev:onchange':'scwin.sbx_exampleType_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dc_sbxType'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'value'}}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행1'}]}]}]},{T:1,N:'w2:textbox',A:{class:'com_example_block_code minH mb_def',escape:'false',id:'tbx_desc',label:'',style:'',tagname:'div'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'ofh box_flex_1x1'},E:[{T:1,N:'xf:group',A:{id:'',style:'width:calc(50% - 3px);margin-right:6px;float: left;'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'Request, Response 정보',style:'',tagname:'h3'}},{T:1,N:'xf:textarea',A:{class:'',id:'txa_desc1',style:'width:100%;height:310px;'}}]},{T:1,N:'xf:group',A:{id:'',style:'width:calc(50% - 3px);float: left;'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'이전/이후 DataCollection 정보',style:'',tagname:'h3'}},{T:1,N:'xf:textarea',A:{class:'',id:'txa_desc2',style:'width:100%;height:150px;margin-bottom: 10px;'}},{T:1,N:'xf:textarea',A:{class:'',id:'txa_desc3',style:'width:100%;height:150px;'}}]}]}]}]}]}]})