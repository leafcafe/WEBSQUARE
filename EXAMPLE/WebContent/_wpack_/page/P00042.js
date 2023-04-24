/*amd /page/P00042.xml 20497 bb100eeb11909b2d326d98bce16d7369c3d3deb2ddca423a051df56d29aa972d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220706'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{id:'dc_gridViewData',baseNode:'list',style:'',repeatNode:'map',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'dept',dataType:'text',ignoreStatus:'true',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'dept',name:'dept',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name',dataType:'text'}}]},{T:1,N:'w2:data',A:{xmlns:'',use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'dept',E:[{T:4,cdata:'인사'}]},{T:1,N:'name',E:[{T:4,cdata:'손예진'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'dept',E:[{T:4,cdata:'홍보'}]},{T:1,N:'name',E:[{T:4,cdata:'송강호'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'dept',E:[{T:4,cdata:'IT'}]},{T:1,N:'name',E:[{T:4,cdata:'전지현'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'dept',E:[{T:4,cdata:'인사'}]},{T:1,N:'name',E:[{T:4,cdata:'류승룡'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'dept',E:[{T:4,cdata:'홍보'}]},{T:1,N:'name',E:[{T:4,cdata:'이광수'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sub_save01',ref:'data:json,[{"id":"dc_gridViewData","action":"inserted","key":"insertParam"},{"id":"dc_gridViewData","action":"deleted","key":"deleteParam"},{"id":"dc_gridViewData","action":"updated","key":"updateParam"}]',target:'',action:'/save01.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'scwin.sub_save01_submiterror'}},{T:1,N:'xf:submission',A:{id:'sub_save02',ref:'data:json,{"id":"dc_gridViewData","action":"modified"}',target:'',action:'/save01.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'scwin.sub_save02_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gVar = {
    "orgGridData": []
};


scwin.onpageload = function () {
    scwin.gVar.orgGridData = dc_gridViewData.getAllJSON();
};

/**
 * [상태별 데이터 셋팅 - setCRUDData] 버튼 클릭 시
 * C, R, U, D에 해당하는 데이터를 할당합니다.
 */
scwin.btn_setCRUDData_onclick = function (e) {
    //data 초기화
    dc_gridViewData.undoAll();

    alert("0번째 행에 행 추가(insertRow)\n1번째 행의 name을 수정(setCellData)\n2번째 행을 삭제 상태로 변경(deleteRow)\n3번째 행을 삭제(removeRow)");

    dc_gridViewData.insertRow(0);
    //dc_gridViewData.insertJSON( 0 , [{"name":"NEW"}] );

    dc_gridViewData.setCellData(1, "name", "WebSquare");

    //2번째행(Num:3)을 삭제 상태로 변경
    dc_gridViewData.deleteRow(2);

    //3번째행(Num:4)을 삭제
    dc_gridViewData.removeRow(3);
};

/**
 * [데이터 복원] 버튼 클릭 시
 */
scwin.btn_reset_onclick = function (e) {
    //data를 복원합니다.
    dc_gridViewData.reset();
};

/**
 * [새로고침] 버튼 클릭 시
 * 화면을 새로 고침합니다.
 */
scwin.btn_reinitializePage_onclick = function (e) {
    $p.reinitialize();
};

/**
 * [행추가 - insertRow] 버튼 클릭 시
 */
scwin.btn_insertRow_onclick = function (e) {
    //첫 번째에 행에 빈 행을 추가합니다.
    dc_gridViewData.insertRow(0);
};

/**
 * [선택 삭제 - removeRows] 버튼 클릭 시
 * 체크된 행을 reomve 합니다.
 */
scwin.btn_removeRows_onclick = function (e) {
    var chArr;

    //chk 컬럼에 체크된 행을 추출합니다.
    chArr = grd_example.getCheckedIndex("chk");

    if (chArr.length < 1) {
        //체크된 행이 없으면 alert 합니다.
        alert("선택 된 항목이 없습니다.");
    } else {
        //체크괸 행이 있으면 remove 합니다.
        dc_gridViewData.removeRows(chArr);
    }
};

/**
 * [상태별 데이터 전송] 버튼 클릭 시
 */
scwin.btn_sub_save01_onclick = function (e) {
    //sub_save01 id를 가진 submission을 실행합니다.
    //브라우저 개발자 도구의 네트워크를 통해 requestData를 확인하는 것을 추천합니다.
    $p.executeSubmission("sub_save01");
};

/**
 * [modified 데이터 전송] 버튼 클릭 시
 */
scwin.btn_sub_save02_onclick = function (e) {
    //sub_save02 id를 가진 submission을 실행합니다.
    //브라우저 개발자 도구의 네트워크를 통해 requestData를 확인하는 것을 추천합니다.
    $p.executeSubmission("sub_save02");
};

/**
 * GridView의 oncellclick 이벤트 핸들러
 */
scwin.grd_example_oncellclick = function (row, col, colID) {
    switch (colID) {
        case "deleteBtn":   //deleteRow 버튼 클릭 시
            dc_gridViewData.deleteRow(row);
            break;
        case "removeBtn":   //removeRow 버튼 클릭 시
            dc_gridViewData.removeRow(row);
            break;
        default:
            break;
    }
};

/**
 * [action - inserted] 버튼 클릭 시
 */
scwin.btn_actionInserted_onclick = function (e) {
    var tmpGetOpt;
    var tmpJSON;

    tmpGetOpt = {
        id: "dc_gridViewData"
        , action: "inserted"
    };

    //dc_gridViewData 에서 inserted 된 데이터만 추출
    tmpJSON = $p.data.get("JSON", [tmpGetOpt]);

    alert(JSON.stringify(tmpJSON, null, "\t"));
};


/**
 * [action - updated] 버튼 클릭 시
 */
scwin.btn_actionUpdated_onclick = function (e) {
    var tmpGetOpt;
    var tmpJSON;

    tmpGetOpt = {
        id: "dc_gridViewData"
        , action: "updated"
    };

    //dc_gridViewData 에서 updated 된 데이터만 추출
    tmpJSON = $p.data.get("JSON", [tmpGetOpt]);

    alert(JSON.stringify(tmpJSON, null, "\t"));
};

/**
 * [action - deleted] 버튼 클릭 시
 */
scwin.btn_actionDeleted_onclick = function (e) {
    var tmpGetOpt;
    var tmpJSON;

    tmpGetOpt = {
        id: "dc_gridViewData"
        , action: "deleted"
    };

    //dc_gridViewData 에서 deleted 된 데이터만 추출
    tmpJSON = $p.data.get("JSON", [tmpGetOpt]);

    alert(JSON.stringify(tmpJSON, null, "\t"));
};

/**
 * [action - modified] 버튼 클릭 시
 */
scwin.btn_actionModified_onclick = function (e) {
    var tmpGetOpt;
    var tmpJSON;

    tmpGetOpt = {
        id: "dc_gridViewData"
        , action: "modified"
    };

    //dc_gridViewData 에서 modified 된 데이터만 추출
    tmpJSON = $p.data.get("JSON", [tmpGetOpt]);

    alert(JSON.stringify(tmpJSON, null, "\t"));
};

/**
 * [action - all 또는 action 미정의] 버튼 클릭 시
 */
scwin.btn_actionAll_onclick = function (e) {
    var tmpGetOpt;
    var tmpJSON;

    tmpGetOpt = {
        id: "dc_gridViewData"
        //, action : "all"
    };

    //dc_gridViewData 에서 전체 데이터 추출
    tmpJSON = $p.data.get("JSON", [tmpGetOpt]);

    alert(JSON.stringify(tmpJSON, null, "\t"));
};

/**
 * [getInsertedJSON] 버튼 클릭 시
 */
scwin.btn_getInsertedJSON_onclick = function (e) {
    var tmpJSON;

    //dc_gridViewData에서 tkqdlq(C) 상태인 데이터를 추출한다.
    tmpJSON = dc_gridViewData.getInsertedJSON();

    alert(JSON.stringify(tmpJSON, null, "\t"));
};

/**
 * [getUpdatedJSON] 버튼 클릭 시
 */
scwin.btn_getUpdatedJSON_onclick = function (e) {
    var tmpJSON;

    //dc_gridViewData에서 수정(U) 상태인 데이터를 추출한다.
    tmpJSON = dc_gridViewData.getUpdatedJSON();

    alert(JSON.stringify(tmpJSON, null, "\t"));
};

/**
 * [getDeletedJSON] 버튼 클릭 시
 */
scwin.btn_getDeletedJSON_onclick = function (e) {
    var tmpJSON;

    //dc_gridViewData에서 삭제(D,E) 상태인 데이터를 추출한다.
    tmpJSON = dc_gridViewData.getDeletedJSON();

    alert(JSON.stringify(tmpJSON, null, "\t"));
};

/**
 * [getModifiedJSON] 버튼 클릭 시
 */
scwin.btn_getModifiedJSON_onclick = function (e) {
    var tmpJSON;

    //dc_gridViewData에서 삭제(C,U,D,E) 상태인 데이터를 추출한다.
    tmpJSON = dc_gridViewData.getModifiedJSON();

    alert(JSON.stringify(tmpJSON, null, "\t"));
};

/**
 * [getAllJSON] 버튼 클릭 시
 */
scwin.btn_getAllJSON_onclick = function (e) {
    var tmpJSON;

    //dc_gridViewData에서 전체 데이터를 추출한다.
    tmpJSON = dc_gridViewData.getAllJSON();

    alert(JSON.stringify(tmpJSON, null, "\t"));
};

/**
 * submission sub_save01의 error 핸들러
 */
scwin.sub_save01_submiterror = function (e) {
    //브라우저 개발자 도구의 네트워크를 통해 requestData를 확인하는 것을 추천합니다.
    alert(e.requestBody);
};

/**
 * submission sub_save02의 error 핸들러
 */
scwin.sub_save02_submiterror = function (e) {
    //브라우저 개발자 도구의 네트워크를 통해 requestData를 확인하는 것을 추천합니다.
    alert(e.requestBody);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataList의 상태별 데이터(추가/수정/삭제)를 제어하는 기본 method를 소개하고 시연하는 예제입니다.<br/>버튼에 마우스를 올리면 실행된 기능의 설명이 툴팁으로 표현됩니다.<br/>스크립트는 버튼의 onclick 이벤트 핸들러에서 확인할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'ofh',id:'',style:'max-width: 700px;'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'fr mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'com_example_btn_blue','ev:onclick':'scwin.btn_setCRUDData_onclick',id:'btn_setCRUDData',style:'',tooltip:'데이터를 추가,수정,삭제합니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상태별 데이터 셋팅 - setCRUDData'}]}]},{T:1,N:'xf:trigger',A:{class:'com_example_btn_blue','ev:onclick':'scwin.btn_reset_onclick',id:'btn_reset',style:'',tooltip:'초기 데이터로 복원합니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'데이터 복원'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_reinitializePage_onclick',id:'btn_reinitializePage',style:'',tooltip:'화면을 새로고칩니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]}]},{T:1,N:'xf:group',A:{class:'fl mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_insertRow_onclick',id:'btn_insertRow',style:'margin-right:6px;',tooltip:'0번째 행에 빈 행을 추가합니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가 - insertRow'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_removeRows_onclick',id:'btn_removeRows',style:'',tooltip:'GridView의 체크박스에 체크된 행을 삭제합니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택 삭제 - removeRows'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{sortEvent:'ondblclick','ev:oncellclick':'scwin.grd_example_oncellclick',rowNumVisible:'true',rowStatusWidth:'34',selectedRowColor:'#9ADDE4',rowNumHeaderValue:'NO',scrollByColumn:'false',sortable:'true',rowStatusHeaderValue:'상태',focusMode:'row',rowStatusVisible:'true',rowNumWidth:'25',dataList:'dc_gridViewData',style:'height: 140px;margin-bottom:6px;max-width: 700px;',autoFit:'allColumn',id:'grd_example',visibleRowNum:'all',class:'wq_gvw',defaultCellHeight:'26',autoFitMinWidth:'500'},E:[{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'checkbox',style:'',id:'column16',value:'chk',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'104',inputType:'text',style:'',id:'column7',value:'이름'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column3',value:'부서'}},{T:1,N:'w2:column',A:{width:'118',inputType:'text',style:'',id:'column11',value:'삭제 상태로 변경'}},{T:1,N:'w2:column',A:{width:'131',inputType:'text',style:'',id:'column12',value:'데이터 삭제',blockSelect:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'31',inputType:'checkbox',style:'',id:'chk',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'104',inputType:'text',style:'',id:'name'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'dept'}},{T:1,N:'w2:column',A:{width:'118',inputType:'button',style:'',id:'deleteBtn',class:'',value:'deleteRow'}},{T:1,N:'w2:column',A:{width:'131',inputType:'button',style:'',id:'removeBtn',value:'removeRow',blockSelect:'false'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'com_example_dl_code',id:'',style:'',tagname:'dl'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Submission의 ref(reference) 속성에 정의하기',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'상태별 데이터는 일반적으로 서버로 보낼 때 많이 사용됩니다.<br/>그래서 Submission의 reference속성에 각 상태별 데이터만 보낼수 있는 기능을 제공합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'dp',id:'',label:'&lt;xf:submission id="sub_save01" action="/save01.do" <br/>&nbsp;&nbsp;&nbsp;ref=\'data:json,[{"id":"dc_gridViewData","action":"modified","key":"modifiedParam"}]\'&gt;<br/>&lt;/xf:submission&gt;',style:'',tagname:'samp',escape:'false'}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_sub_save01_onclick',id:'btn_sub_save01',style:'',tooltip:'버튼을 클릭하기 전 GridView에 데이터의 상태를 변경하거나 [상태별 데이터 셋팅 - setCRUDData]버튼을 클릭하여 상태를 변경합니다.<br/>GridView에 연결된 dc_gridViewData객체의 데이터를 상태별로 서버로 전송하는 예시로 sub_save01 submission의 Reference 설정을 확인합니다.<br/>버튼을 클릭하면 서버로 전송된 requestBody가 alert으로 표현됩니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상태별 데이터 전송'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_sub_save02_onclick',id:'btn_sub_save02',style:'',tooltip:'버튼을 클릭하기 전 GridView에 데이터의 상태를 변경하거나 [상태별 데이터 셋팅 - setCRUDData]버튼을 클릭하여 상태를 변경합니다.<br/>GridView에 연결된 dc_gridViewData객체의 데이터중 변경된 모든 데이터를 한번에 서버로 전송하는 예시로 sub_save02 submission의 Reference 설정을 확인합니다.<br/>버튼을 클릭하면 서버로 전송된 requestBody가 alert으로 표현됩니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'modified 데이터 전송'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DataList 객체의 Method를 이용하여 data 가져오기',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'DataList의 Method들 중 get[상태][데이터타입](getAllJSON)의 형식을 가진 Method가 해당됩니다.<br/>대표적으로 JSON을 꺼내오는 주요 method는 다음과 같다.<br/>getInsertedJSON, getUpdatedJSON, getDeletedJSON, getModifiedJSON, getAllJSON',style:'',escape:'false'}},{T:1,N:'w2:textbox',A:{class:'dp',id:'',label:'var modiArr = dataList1.getModifiedJSON( ); //추가, 삭제, 업데이트 상태의 데이터를 반환합니다.',style:'',tagname:'samp',escape:'false'}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getInsertedJSON_onclick',id:'btn_getInsertedJSON',style:'',tooltip:'dc_gridViewData에서 추가된 데이터를 가져옵니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getInsertedJSON'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getUpdatedJSON_onclick',id:'btn_getUpdatedJSON',style:'',tooltip:'dc_gridViewData에서 수정된 데이터를 가져옵니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getUpdatedJSON'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getDeletedJSON_onclick',id:'btn_getDeletedJSON',style:'',tooltip:'dc_gridViewData에서 삭제된 데이터를 가져옵니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getDeletedJSON'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getModifiedJSON_onclick',id:'btn_getModifiedJSON',style:'',tooltip:'dc_gridViewData에서 추가/수정/삭제된 데이터를 가져옵니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getModifiedJSON'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_getAllJSON_onclick',id:'btn_getAllJSON',style:'',tooltip:'dc_gridViewData의 데이터를 가져옵니다. 단, removeRow로 데이터가 삭제된 경우는 제외됩니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getAllJSON'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DataCollection 객체의 Method를 이용하여 data 가져오기',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'dd'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'여러개의 DataList의 값을 꺼내올 때 사용합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'var tmpGetOpt = {<br/> &nbsp;id : "dc_gridViewData"<br/> &nbsp;, action : "updated"<br/>};<br/>var dataArr = $p.data.get("JSON",[tmpGetOpt]);',style:'',tagname:'samp',escape:'false'}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_actionInserted_onclick',id:'btn_actionInserted',style:'',tooltip:'전체 데이터 객체(DataCollection)에서 dc_gridViewData 객체에 추가된 데이터를 가져옵니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'action - inserted'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_actionUpdated_onclick',id:'btn_actionUpdated',style:'',tooltip:'전체 데이터 객체(DataCollection)에서 dc_gridViewData 객체에 수정된 데이터를 가져옵니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'action - updated'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_actionDeleted_onclick',id:'btn_actionDeleted',style:'',tooltip:'전체 데이터 객체(DataCollection)에서 dc_gridViewData 객체에 삭제된 데이터를 가져옵니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'action - deleted'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_actionModified_onclick',id:'btn_actionModified',style:'',tooltip:'전체 데이터 객체(DataCollection)에서 dc_gridViewData 객체에 추가/수정/삭제된 데이터를 가져옵니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'action - modified'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_actionAll_onclick',id:'btn_actionAll',style:'',tooltip:'전체 데이터 객체(DataCollection)에서 dc_gridViewData 객체에 전체 데이터를 가져옵니다. 단, removeRow로 데이터가 삭제된 경우는 제외됩니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'action - all 또는 action 미정의'}]}]}]}]}]}]}]}]}]})