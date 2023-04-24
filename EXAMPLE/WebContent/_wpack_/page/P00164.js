/*amd /page/P00164.xml 10404 02eaa69a02c1c232dcdacf5281d03e9cffdfe9f53d28c177281887eedbfedae1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221109'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

    //예제 테스트를 위해 버튼 [테스트 버튼 3]에 onclick 핸들러를 연결합니다.
    btn_exam_test3.bind("onclick", scwin.btn_example_test_onclick_user);

    //예제 테스트를 위해 버튼 [테스트 버튼 4]에 onclick 핸들러를 연결합니다.
    btn_exam_test4.bind("onclick", scwin.btn_example_test_onclick_user);

};


/**
 * 예제 테스트를 위한 공용 onclick 핸들러
 */
scwin.btn_example_test_onclick_user = function (e) {
    var strLog;

    //로그 출력
    strLog = "[공용] onclick 이벤트 핸들러 - 함수 scwin.btn_example_test_onclick_user";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);

};

/**
 * 영역 [모든 이벤트의 모든 핸들러 제거하기]의
 * 버튼 [모든 이벤트의 모든 핸들러 제거하기 - unbind] 클릭 시
 * [컴포넌트 ID].unbind();
 */
scwin.btn_ex2_onclick = function (e) {
    var strLog;

    //로그 출력
    strLog = "** 함수 scwin.btn_ex2_onclick **";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
    strLog = 'btn_exam_test2.unbind();';
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);

    //버튼 [테스트 버튼 2]의 모든 이벤트의 모든 핸들러 모두 제거
    btn_exam_test2.unbind();
};

/**
 * 영역 [모든 이벤트의 모든 핸들러 제거하기]의
 * 버튼 [테스트 버튼 2]의 onclick 핸들러
 */
scwin.btn_exam_test2_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("[테스트 버튼 2] - onclick 발생 - 함수 scwin.btn_exam_test2_onclick", txa_log, false);
};

/**
 * 영역 [모든 이벤트의 모든 핸들러 제거하기]의
 * 버튼 [테스트 버튼 2]의 onmouseup 핸들러
 */
scwin.btn_exam_test2_onmouseup = function (e) {
    //로그 출력
    $c.frame.printExampleLog("[테스트 버튼 2] - onmouseup 발생 - 함수 scwin.btn_exam_test2_onmouseup", txa_log, false);
};

/**
 * 영역 [특정 이벤트의 모든 핸들러 제거하기]의
 * 버튼 [특정 이벤트의 모든 핸들러 제거하기 - unbind] 클릭 시
 * [컴포넌트 ID].unbind( type );
 */
scwin.btn_ex3_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("** 함수 scwin.btn_ex3_onclick **", txa_log, false);
    $c.frame.printExampleLog('btn_exam_test3.unbind("onclick");', txa_log, false);

    //버튼 [테스트 버튼 3]의 onclick 이벤트 핸들러 모두 제거
    btn_exam_test3.unbind("onclick");
};

/**
 * 영역 [특정 이벤트의 모든 핸들러 제거하기]의
 * 버튼 [테스트 버튼 3]의 onclick 핸들러
 */
scwin.btn_exam_test3_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("[테스트 버튼 3] - onclick 발생 - 함수 scwin.btn_exam_test3_onclick", txa_log, false);
};

/**
 * 영역 [특정 이벤트의 모든 핸들러 제거하기]의
 * 버튼 [테스트 버튼 3]의 onmouseup 핸들러
 */
scwin.btn_exam_test3_onmousedown = function (e) {
    //로그 출력
    $c.frame.printExampleLog("[테스트 버튼 3] - onmouseup 발생 - 함수 scwin.btn_exam_test3_onmouseup", txa_log, false);
};

/**
 * 영역 [특정 이벤트의 특정 핸들러 제거하기]의
 * 버튼 [특정 이벤트의 특정 핸들러 제거하기 - unbind] 클릭 시
 * [컴포넌트 ID].unbind( type, function );
 */
scwin.btn_ex4_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("** 함수 scwin.btn_ex4_onclick **", txa_log, false);
    $c.frame.printExampleLog('btn_exam_test4.unbind("onclick", scwin.btn_example_test_onclick_user);', txa_log, false);

    //컴포넌트의 onclick 이벤트의 'scwin.btn_example_test_onclick_user' 핸들러 제거
    btn_exam_test4.unbind("onclick", scwin.btn_example_test_onclick_user);
};

/**
 * 영역 [특정 이벤트의 특정 핸들러 제거하기]의
 * 버튼 [테스트 버튼 4]의 onclick 핸들러
 */
scwin.btn_exam_test4_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("[테스트 버튼 4] - onclick 발생 - 함수 scwin.btn_exam_test4_onclick", txa_log, false);
};


/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};





}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc mb_def_box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'컴포넌트의 API unbind의 예제입니다.<br/>unbind는 이벤트 핸들러를 제거하는 기능을 제공합니다.',style:''}},{T:1,N:'w2:textbox',A:{id:'',label:'컴포넌트의 이벤트 발생 시 영역 [로그 확인]의 textarea에 로그가 출력됩니다.',style:'',class:'txt_info_important'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'모든 이벤트의 모든 핸들러 제거하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'trigger에 모든 이벤트 핸들러를 제거합니다.<br/>[테스트 버튼2]에는 onclick 핸들러 1개, onmouseup 핸들러 1개가 등록되어있습니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'모든 이벤트의 모든 핸들러 제거하기 - unbind'}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_exam_test2',style:'width: 100px;',type:'button','ev:onclick':'scwin.btn_exam_test2_onclick','ev:onmouseup':'scwin.btn_exam_test2_onmouseup'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테스트 버튼 2'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'특정 이벤트의 모든 핸들러 제거하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'trigger의 onclick 이벤트의 모든 핸들러를 제거합니다.<br/>[테스트 버튼3]에는 onclick 핸들러 2개, onmouseup 핸들러 1개가 등록되어있습니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'특정 이벤트의 모든 핸들러 제거하기 - unbind'}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_exam_test3',style:'width: 100px;',type:'button','ev:onclick':'scwin.btn_exam_test3_onclick','ev:onmousedown':'scwin.btn_exam_test3_onmousedown'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테스트 버튼 3'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'특정 이벤트의 특정 핸들러 제거하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'trigger의 onclick 이벤트의 핸들러 [scwin.btn_example_test_onclick_user]를 제거합니다.<br/>[테스트 버튼4]에는 onclick 핸들러 2개가 등록되어있습니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex4_onclick',id:'btn_ex4',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'특정 이벤트의 특정 핸들러 제거하기 - unbind'}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_exam_test4',style:'width: 100px;',type:'button','ev:onclick':'scwin.btn_exam_test4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테스트 버튼 4'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})