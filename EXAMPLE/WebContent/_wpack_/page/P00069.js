/*amd /page/P00069.xml 5239 cad461bb37d2554fadb3e577c87f8d5b4f1d336aafe7b71ed2d13100b6894d5c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220803'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};


/**
 * acb_exam 컴포넌트의 이벤트 onselected 핸들러
 */
scwin.acb_exam_onselected = function (info) {
    var strLog;

    var _newSelectedIndex = info.newSelectedIndex;  //선택된 항목의 index
    var _newValue = info.newValue;  //선택된 값
    var _oldSelectedIndex = info.oldSelectedIndex;  //이전에 선택된 항목의 index
    var _oldValue = info.oldValue;  //이전 값

    //이벤트 확인용 로그 출력
    console.log("scwin.acb_exam_onselected >> ", info);

    $c.frame.printExampleLog("scwin.acb_exam_onselected", txa_log);
    $c.frame.printExampleLog("info : \n" + JSON.stringify(info, null, "\t"), txa_log, false);
    strLog = "info.newSelectedIndex : " + _newSelectedIndex + "\n";
    strLog += "info.newValue : " + _newValue + "\n";
    strLog += "info.oldSelectedIndex : " + _oldSelectedIndex + "\n";
    strLog += "info.oldValue : " + _oldValue;
    $c.frame.printExampleLog(strLog, txa_log, false);

    //로직 구성
};

/**
 * acb_exam 컴포넌트의 이벤트 onitemclick 핸들러
 */
scwin.acb_exam_onitemclick = function (index) {
    //이벤트 확인용 로그 출력
    console.log("scwin.acb_exam_onitemclick >> ", index);

    $c.frame.printExampleLog("scwin.acb_exam_onitemclick", txa_log);
    $c.frame.printExampleLog("index : " + index, txa_log, false);

    //로직 구성
};

/**
 * 로그 출력용 함수
 */
scwin.printLog = function (argStr) {
    var strLog;
    strLog = txa_log.getValue();
    txa_log.setValue(strLog + "\n" + argStr);

};


/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    //textarea value를 빈문자열로 할당.
    txa_log.setValue("");
};



}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'검색어 "b"를 입력 후 목록에서 항목을 클릭하거나 방향키를 이용하여 항목을 선택합니다.<br/>로그 확인 영역에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'AutoComplete',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:autoComplete',A:{editType:'select',style:'width: 150px;min-height:24px;',submenuSize:'auto',id:'acb_exam',nextTabByEnter:'true','ev:onselected':'scwin.acb_exam_onselected','ev:onitemclick':'scwin.acb_exam_onitemclick'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label'},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'apple'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'grapes'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'strawberry'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'blueberry'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'example_div_th_style'},E:[{T:1,N:'w2:span',A:{label:'로그 확인',style:'',id:'',class:'mr_def txt_blue'}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})