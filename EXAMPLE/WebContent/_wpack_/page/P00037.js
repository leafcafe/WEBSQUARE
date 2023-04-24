/*amd /page/P00037.xml 6253 3c866adae1cba828783396d4529cb905448000a5ea3ce19a9feaf8215f28e2cc */
define({E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220522'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [실행1] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsonObj = { "no": "2", "name": "WebSquare" };
    var jsonStr = JSON.stringify(jsonObj);
    var jsonStrWithTab = JSON.stringify(jsonObj, null, "\t");

    //로그 출력
    $c.frame.printExampleLog("** [실행1] scwin.btn_ex1_onclick 실행 **", txa_log, false);

    //웹스퀘어 API를 사용하여 로그 출력
    $p.log("===========$p.log===========");
    $p.log(jsonObj);
    $p.log(jsonObj.name);
    $p.log(jsonStrWithTab);
    $p.log("========================");

    $c.frame.printExampleLog("브라우저에서 [ctrl]키를 누른채 [마우스 오른쪽 버튼]을 클릭한 뒤 [로그보기]를 클릭합니다.", txa_log, false);
};

/**
 * [실행2] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsonObj = { "no": "2", "name": "WebSquare" };
    var jsonStr = JSON.stringify(jsonObj);
    var jsonStrWithTab = JSON.stringify(jsonObj, null, "\t");

    //로그 출력
    $c.frame.printExampleLog("** [실행2] scwin.btn_ex2_onclick 실행 **", txa_log, false);

    //console 객체를 사용하여 로그 출력
    console.log("===========console===========");
    console.log(jsonObj);
    console.log(jsonObj.name);
    console.log(jsonStrWithTab);
    console.log("========================");

    $c.frame.printExampleLog("브라우저의 [개발자도구]의 [콘솔(console)]탭에서 로그를 확인합니다.", txa_log, false);
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'com_example_dl',id:'',style:'',tagname:'dl'},E:[{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',tagname:'dt',style:''},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'$p.log - 웹스퀘어 로그 API',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행1'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'details',class:'com_example_block_code_details'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'코드 예시',style:'',tagname:'summary',class:''}},{T:1,N:'w2:textbox',A:{tagname:'code',style:'',id:'',label:'//(버튼 클릭 후 브라우저에서 [ctrl]키를 누른채 [마우스 오른쪽 버튼]을 클릭한 뒤 [로그보기]를 클릭합니다.)<br/><br/>var jsonObj = {"No":"2", "name":"WebSquare"};<br/>var jsonStr = JSON.stringify( jsonObj );<br/>var jsonStrWithTab = JSON.stringify( jsonObj ,null,"\\t");<br/><br/>//테스트<br/>$p.log("===========$p.log===========");<br/>$p.log(jsonObj);<br/>$p.log(jsonObj.name);<br/>$p.log(jsonStrWithTab);<br/>$p.log("========================");',class:'',escape:'false'}}]}]},{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',style:'',tagname:'dt'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'console.log - 브라우저 로그 API',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행2'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'dd'},E:[{T:1,N:'xf:group',A:{class:'com_example_block_code_details',id:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'코드 예시',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'//(버튼 클릭 후 브라우저의 [개발자도구]의 [콘솔(console)]탭에서 로그를 확인합니다.)<br/><br/>var jsonObj = {"No":"2", "name":"WebSquare"};<br/>var jsonStr = JSON.stringify( jsonObj );<br/>var jsonStrWithTab = JSON.stringify( jsonObj ,null,"\\t");<br/><br/>//테스트<br/>console.log("===========console===========");<br/>console.log(jsonObj);<br/>console.log(jsonObj.name);<br/>console.log(jsonStrWithTab);<br/>console.log("========================");<br/>',style:'',tagname:'code'}}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})