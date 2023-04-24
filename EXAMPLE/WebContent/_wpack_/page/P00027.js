/*amd /page/P00027.xml 6558 ed3667379604ab1a6389ba03679cf8382b277afc3a06acca7d2c722da2f2b526 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [실행1] 클릭 시
 * [컴포넌트 ID].setUserData(KEY 문자열, VALUE);
 * ex) ibx_input.setUserData("userData1", "Websquare5");
 */
scwin.btn_ex1_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex1_onclick 실행 **", txa_log, false);
    //로그 출력
    $c.frame.printExampleLog('ibx_input.setUserData("userData1", "userData1 - Websquare5");', txa_log, false);

    //inputbox에 userData 할당하기
    ibx_input.setUserData("userData1", "userData1 - Websquare5");
};

/**
 * [실행2] 클릭 시
 * [컴포넌트 ID].getUserData(KEY 문자열);
 * ex) ibx_input.getUserData("userData1");
 */
scwin.btn_ex2_onclick = function (e) {
    var strRet;

    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex2_onclick 실행 **", txa_log, false);
    //로그 출력
    $c.frame.printExampleLog('ibx_input.getUserData("userData1");', txa_log, false);

    //inputbox의 userData의 "userData1" 값 반환받기.
    strRet = ibx_input.getUserData("userData1");

    //반환값 로그 출력
    $c.frame.printExampleLog('반환값 : ' + strRet, txa_log, false);

    //반환값 alert
    alert(strRet);
};


/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc mb_def_box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'화면에 구성된 컴포넌트에 사용자 정의 값을 저장하는 기능인 userData 예제입니다. <br/>HTML의 dataset 기능과 유사하지만 dataset으로 구현한 기능은 아니기 때문에 웹스퀘어 API로 제어해야 합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'com_example_dl',id:'',style:'',tagname:'dl'},E:[{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',tagname:'dt'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'InputBox에 userData 할당하기',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행1'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'},E:[{T:1,N:'xf:group',A:{class:'com_example_block_code_details',id:'',tagname:'details'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:open'}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'코드 예시',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'[컴포넌트 ID].setUserData(KEY 문자열, VALUE);<br/>ex) ibx_input.setUserData("userData1", "userData1 - Websquare5");',style:'',tagname:'code'}}]}]},{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',style:'',tagname:'dt'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'InputBox의 userData 반환받기',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행2'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'dd'},E:[{T:1,N:'xf:group',A:{class:'com_example_block_code_details',id:'',tagname:'details',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:open'}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'코드 예시',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'[컴포넌트 ID].getUserData(KEY 문자열);<br/>ex) ibx_input.getUserData("userData1");',style:'',tagname:'code'}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'grp_form',class:'w2tb tb',adaptive:'layout',adaptiveThreshold:'800'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							InputBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'width:140px;',id:'ibx_input',placeholder:'',class:'mr_def',initValue:'WebSquare'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})