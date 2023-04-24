/*amd /page/P00005.xml 17783 28d1ca2c518a1e36a7c2acc6e95a3d4b0ad5844cdb8ae1fb16183d0bcacfca7c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_request',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'reqData1',name:'전송값1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqData2',name:'전송값2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqData3',name:'전송값3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqData4',name:'전송값4',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{id:'dc_resUserMapData',style:'',valueAttribute:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'name',name:'name',dataType:'text'}},{T:1,N:'w2:key',A:{id:'birthday',name:'birthday',dataType:'text'}},{T:1,N:'w2:key',A:{id:'height',name:'height',dataType:'text'}},{T:1,N:'w2:key',A:{id:'weight',name:'weight',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gender',name:'gender',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_getUserData',ref:'data:json,dma_request',target:'data:json,dc_resUserMapData',action:'/data/sampleData/sampleData_json_dc_map.json',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_getUserData_submit','ev:submitdone':'scwin.sbm_getUserData_submitdone','ev:submiterror':'scwin.sbm_getUserData_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getUserData_404',ref:'data:json,dma_request',target:'data:json,dc_resUserMapData',action:'/sp5555/data/sampleData/sampleData_json_dc_map.json',method:'post',mediatype:'application/json',encoding:'UTF-8',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_getUserData_submit','ev:submitdone':'scwin.sbm_getUserData_submitdone','ev:submiterror':'scwin.sbm_getUserData_submiterror',instance:'',replace:'',errorHandler:'',customHandler:'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [Submission 정상 상태] 버튼 클릭 시 
 */
scwin.btn_submission_onclick = function (e) {
    //submission 실행
    $p.executeSubmission("sbm_getUserData");
};

/**
 * [Submission Error 발생] 버튼 클릭 시
 */
scwin.btn_submission_error_onclick = function (e) {
    //submission 실행 - 404 페이지 없음 error
    $p.executeSubmission("sbm_getUserData_404");
};

/**
 * submission의 submit 이벤트 핸들러
 * 통신을 수행하기 전에 실행되며 return의 값이 false인 경우 실행을 중단한다.
 */
scwin.sbm_getUserData_submit = function () {
    var searchTxt;

    //필수 전송값1의 input의 값을 반환받아 좌우 공백을 제거한다.
    searchTxt = ibx_reqData1.getValue().trim();

    //응답값 출력 영역 초기화
    scwin.grp_response_init();

    //필수 전송값1이 없는 경우 분기
    if (searchTxt === "") {
        alert("검색어를 입력하세요");

        //input 컴포넌트에 focus
        ibx_reqData1.focus();


        //textarea에 로그 출력
        scwin.printLog("submission 실행이 중단 되었습니다. -> scwin.sbm_getUserData_submit");

        //통신 실행 중단.
        return false;
    }

    return true;
};

/**
 * submission이 submit done 이벤트 핸들러
 * 통신이 정상적으로 완료된 경우 발생.
 * (http status code가 정상 범주인 경우)
 */
scwin.sbm_getUserData_submitdone = function (e) {
    console.log("scwin.sbm_getUserData_submitdone >>>>>>>>> ", e);
    scwin.printLog("개발자도구 console에 더 많은 정보가 출력됩니다.\nsubmission 완료-scwin.sbm_getUserData_submitdone\nresponseText :\n" + e.responseText);
};

/**
 * submission이 submit error 이벤트 핸들러
 * 통신의 응답값이 오류인 경우 발생.
 * (http status code가 정상 범주가 아닌 경우 - 200 > http status 또는 300 <= http status 또는 0 == e.status)
 */
scwin.sbm_getUserData_submiterror = function (e) {
    console.log("scwin.sbm_getUserData_submiterror >>>>>>>>> ", e);
    scwin.printLog("개발자도구 console에 더 많은 정보가 출력됩니다.\nsubmission 에러-scwin.sbm_getUserData_submiterror\nresponseStatusCode : " + e.responseStatusCode + "\nresponseReasonPhrase : " + e.responseReasonPhrase + "\nerrorType : " + e.errorType);
};

/**
 * [$p.ajax 사용] 버튼 클릭 시
 */
scwin.btn_ajax_onclick = function (e) {
    scwin.fn_execAjax(
        "/data/sampleData/sampleData_json_dc_map02.json",
        "dma_request",
        "dc_resUserMapData"
    );

};

/**
 * [$p.ajax 404 Error 발생] 버튼 클릭 시
 */
scwin.btn_ajax_error_onclick = function (e) {
    //404 페이지 없음 error
    scwin.fn_execAjax(
        "/sp5555/data/sampleData/sampleData_json_dc_map02.json",
        "dma_request",
        "dc_resUserMapData"
    );
};


//reqDC , resDC 가 다건인 경우 ,로 구분한다.
scwin.fn_execAjax = function (actionUrl, reqDC, resDC) {
    var tmpReqDC;
    var sendOpt;

    //응답값 출력 영역 초기화
    scwin.grp_response_init();

    if (typeof actionUrl != "string") {
        alert("action이 정의되지 않았습니다.");
        return;
    }

    /*
        ajax통신용 함수
        Parameters : - Object options JSON형태 객체 
        options.action : ajax 요청주소
        options.mode : asynchronous(default)/synchronous 
        options.mediatype : application/x-www-form-urlencoded , application/json , application/xml , text/xml
        options.method : get/post/put/delete
        options.requestData : 요청본문
        options.timeout : ajax요청후 timeout 시간. 이시간이 초과해도 응답이 오지 않는 경우 error callback함수를 실행
        options.type : xml/json. xml인 경우 success callback함수의 인자객체의 responseBody속성에 xml객체가 설정되고,
                        json인 경우 자바스크립트 객체가 설정된다.나머지 경우는 text형식이 설정.
        options.beforeAjax : 요청전에 실행되는 함수로 이 함수내에서 false를 return하면 ajax요청을 하지 않는다
        options.success : 요청이 성공한 경우 실행되는 callback함수
        options.error : 요청이 실패한 경우 실행되는 callback함수
    */
    tmpReqDC = reqDC.split(",") || [];

    sendOpt = {};

    sendOpt.action = actionUrl;
    sendOpt.mediatype = "application/json";
    sendOpt.method = "post";
    sendOpt.requestHeader = {
        insUserData: "w5Edu"
    };
    sendOpt.requestData = JSON.stringify($p.data.get("JSON", tmpReqDC));

    sendOpt.beforeAjax = function (e) {
        $p.log("Before");
        for (var tmp in e) {
            $p.log("==::" + tmp);
        }
        e.requestData = '{"userInfo":' + e.requestData + '}';
        return true;
    };

    sendOpt.success = function (e) {
        console.log("$p.ajax sendOpt.success >>>>>>>>> ", e);
        scwin.printLog("개발자도구 console에 더 많은 정보가 출력됩니다.\n$p.ajax success\nresponseText :\n" + e.responseText);
        if (resDC)
            $p.getComponentById(resDC).setJSON(e.responseJSON[resDC]);
    };

    sendOpt.error = function (e) {
        console.log("$p.ajax sendOpt.error >>>>>>>>> ", e);
        scwin.printLog("개발자도구 console에 더 많은 정보가 출력됩니다.\n$p.ajax 통신 에러\nresponseStatusCode : " + e.responseStatusCode + "\nresponseReasonPhrase : " + e.responseReasonPhrase + "\nerrorType : " + e.errorType);
    };

    $p.ajax(sendOpt);

};

/**
 * 로그출력 영역의 textarea에 통신 결과를 출력.
 */
scwin.printLog = function (argStrLog) {
    var strPreData;

    //textarea에 출력된 기존 데이터 추출.
    strPreData = txa_log.getValue();

    if (strPreData) {
        strPreData += "\n\n*********************************************************************\n\n";
    }

    //기존 데이터에 추가하여 출력
    txa_log.setValue(strPreData + argStrLog);
    $c.frame.scrollToBottom(txa_log);
};

/**
 * 응답값 출력 영역 초기화 - 빈 값으로 출력
 */
scwin.grp_response_init = function () {
    //dc_resUserMapData의 전체 데이터를 빈값으로 할당한다.
    dc_resUserMapData.setEmptyValue();
    //현재 값으로 dc_resUserMapData을 초기화한다.
    dc_resUserMapData.reform();
};



}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'웹스퀘어에서 제공하는 통신 모듈 예시입니다.<br/>웹스퀘어는 AJAX로 통신을 합니다.(HTML의 Form Submit을 이용하지 않음).<br/>제공되는 통신 모듈은 Submission과 Ajax Util (API) 모듈이 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'1240',class:'w2tb tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'필수 전송값1',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_reqData1',ref:'data:dma_request.reqData1',style:'',initValue:'websquare'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송값2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:checkcombobox',A:{id:'',displayAllOptionLabel:'false',chooseOption:'true',displayMode:'label',style:'',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',chooseOptionLabel:'',ref:'data:dma_request.reqData2',separator:','},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'코드01'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'코드02'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'코드03'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C03'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송값3',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_request.reqData3',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미혼'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기혼'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송값4',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',id:'',style:'',renderDiv:'true',focusOnDateSelect:'false',calendarValueType:'yearMonthDate',rightAlign:'false',renderType:'component',setCurrentDate:'true',ref:'data:dma_request.reqData4'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm event',disabled:'',escape:'false',id:'btn_submission',style:'',type:'button','ev:onclick':'scwin.btn_submission_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Submission 정상 상태'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm event',disabled:'',escape:'false',id:'btn_ajax',style:'',type:'button','ev:onclick':'scwin.btn_ajax_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.ajax 정상 상태'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm event',disabled:'',escape:'false',id:'btn_submission_error',style:'',type:'button','ev:onclick':'scwin.btn_submission_error_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Submission 404 Error 발생'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm event',disabled:'',escape:'false',id:'btn_ajax_error',style:'',type:'button','ev:onclick':'scwin.btn_ajax_error_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.ajax 404 Error 발생'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mwp100 mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'응답값 출력',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'grp_response',class:'w2tb tb',adaptive:'layout',adaptiveThreshold:'800'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:' name '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:span',A:{ref:'data:dc_resUserMapData.name',style:'',label:'',id:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:' weight '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:span',A:{ref:'data:dc_resUserMapData.weight',dataType:'number',displayFormat:'#,### kg',style:'',id:'',label:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							birthday '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:span',A:{ref:'data:dc_resUserMapData.birthday',dataType:'date',displayFormat:'yyyy-MM-dd',style:'',id:'',label:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:' gender '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{ref:'data:dc_resUserMapData.gender',appearance:'full',style:'',id:'',renderType:'radiogroup',rows:'',cols:'',selectedIndex:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'남성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'M'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:' height '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:span',A:{ref:'data:dc_resUserMapData.height',dataType:'number',displayFormat:'#,### cm',style:'',id:'',label:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}}]}]}]}]}]}]}]})