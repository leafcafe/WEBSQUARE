/*amd /page/P00034.xml 5110 f1eeae4824b052eae65dbe3e0c8af29c079ddb1774d68db4d16219a484101868 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221108'}]},{T:1,N:'version',E:[{T:4,cdata:'02'}]},{T:1,N:'description',E:[{T:4,cdata:'예제 분리(이벤트 제거, 이벤트 발생 시키기)'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220522'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

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
 * 영역 [이벤트 연결하기]의
 * 버튼 [이벤트 연결 - bind] 클릭 시
 * [컴포넌트 ID].bind( eventType , function );
 */
scwin.btn_ex1_onclick = function (e) {
    var strLog;

    //로그 출력
    strLog = "** 함수 scwin.btn_ex1_onclick **";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
    strLog = 'btn_exam_test1.bind("onclick", scwin.btn_example_test_onclick_user);';
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);

    //버튼 [테스트 버튼 1]에 onclick 이벤트 핸들러(scwin.btn_example_test_onclick_user) 연결
    btn_exam_test1.bind("onclick", scwin.btn_example_test_onclick_user);
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};





}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc mb_def_box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'컴포넌트의 API bind의 예제입니다.<br/>bind는 이벤트 핸들러를 추가하는 기능을 제공합니다.',style:''}},{T:1,N:'w2:textbox',A:{id:'',label:'컴포넌트의 이벤트 발생 시 영역 [로그 확인]의 textarea에 로그가 출력됩니다.',style:'',class:'txt_info_important'}}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''}},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'이벤트 연결하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'trigger에 onclick 이벤트 핸들러를 연결합니다.<br/>[테스트 버튼1]에는 등록된 이벤트가 없습니다.',style:''}},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_ex1_onclick',disabled:'',style:'',id:'btn_ex1',type:'button',class:'btn_exam_exec btn_txt_of',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이벤트 연결 - bind'}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_exam_test1',style:'width: 100px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테스트 버튼 1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})