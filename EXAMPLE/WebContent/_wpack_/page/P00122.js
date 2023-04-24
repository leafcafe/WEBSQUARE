/*amd /page/P00122.xml 4017 5dfaa8285e2b6bc690a3ead04b466c374fd346852b39bacff4c168df560ba067 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220930'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

/**
 * Group "grp_exam1"의 onmouseenter 핸들러
 * 마우스 포인터가 영역 안으로 들어올 때 발생.
 */
scwin.grp_exam1_onmouseenter = function (e) {
    var strLog;

    //로그 출력
    $c.frame.printExampleLog("**** onmouseenter 발생 ****", txa_log);

    //이벤트 정보 출력
    console.log(e);

    $c.frame.printExampleLog("브라우저의 개발자 도구 콘솔을 확인하세요.", txa_log, false);

    strLog = "이벤트 발생 컴포넌트 ID : " + this.getOriginalID() + " | ";
    strLog += "이벤트 타입 : " + e.type;

    //로그 출력
    $c.frame.printExampleLog(strLog, txa_log, false);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Group의 이벤트 onmouseenter 예제입니다.<br/>이벤트 발생 조건은 아래와 같습니다.<br/>onmouseenter : 마우스 포인터가 영역 안으로 들어올 때 발생.<br/>',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Group',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'마우스를 Group 영역 밖에서 Group 영역으로 이동합니다.<br/>이벤트 로그가 [로그 확인] 영역과 개발자 도구 콘솔에 출력됩니다.',style:''}},{T:1,N:'xf:group',A:{id:'grp_exam1',style:'height: 120px;background-color: MistyRose;','ev:onmouseenter':'scwin.grp_exam1_onmouseenter'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Group 영역',style:'text-align: center;font-size: 2em;padding-top: 30px;'}}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})