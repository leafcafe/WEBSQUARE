/*amd /page/P00036.xml 5194 f42a1ad71a505983bc9bacfee603cb0f12f9ace45895b8705002da09f101e06f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220522'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [실행1] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsonStr;
    var jsonObj;

    //로그 출력
    $c.frame.printExampleLog("** [실행1] scwin.btn_ex1_onclick 실행 **", txa_log, false);

    jsonStr = '{"no":"1", "name":"WebSquare"}'; //json 문자열
    jsonObj = JSON.parse(jsonStr);    //json 객체 생성

    //로그 출력
    $c.frame.printExampleLog("no : " + jsonObj.no, txa_log, false);
    $c.frame.printExampleLog("name : " + jsonObj.name, txa_log, false);

    //json 객체 console 출력
    console.log(jsonObj);

    alert(jsonObj.name); //테스트
};

/**
 * [실행2] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsonObj;
    var jsonStr;

    //로그 출력
    $c.frame.printExampleLog("** [실행2] scwin.btn_ex2_onclick 실행 **", txa_log, false);

    jsonObj = {
        "no": "2",
        "name": "WebSquare5"
    };

    jsonStr = JSON.stringify(jsonObj);

    //로그 출력
    $c.frame.printExampleLog("JSON 문자열 : " + jsonStr, txa_log, false);

    alert(jsonStr); //테스트
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'mb_def',escape:'false',id:'',label:'JSON 문자열을 JSON 객체로 생성, JSON 객체를 문자열로 반환받는 예제입니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'com_example_dl',id:'',style:'',tagname:'dl'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'dt',class:'com_example_heading_btn'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'String to JSON - JSON.parse',class:'com_example_heading'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행1'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_block_code',escape:'false',id:'',label:'var jsonStr = \'{"No":"1", "name":"WebSquare"}\';<br/>var jsonObj = <span class=\'ws5_example_txt_blue\'>JSON.parse</span>( jsonStr );<br/><br/>alert(jsonObj.name); //테스트',style:'',tagname:'code'}}]},{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',tagname:'dt',style:''},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'JSON to String - JSON.stringify',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행2'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'dd'},E:[{T:1,N:'xf:group',A:{id:'',class:'mb_def'}},{T:1,N:'w2:textbox',A:{class:'com_example_block_code',escape:'false',id:'',label:'var jsonObj = {"no":"2", "name":"WebSquare5"};<br/>var jsonStr = <span class=\'ws5_example_txt_blue\'>JSON.stringify</span>( jsonObj );<br/><br/>alert(jsonStr); //테스트',style:'',tagname:'code'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})