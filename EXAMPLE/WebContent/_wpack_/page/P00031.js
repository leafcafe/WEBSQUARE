/*amd /page/P00031.xml 7723 4cc5f03554511502874ced6d64b1d9189469cfb6819702df860465c33fcf7ef7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220522'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_request'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addr',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'name',E:[{T:4,cdata:'WebSquare'}]},{T:1,N:'addr',E:[{T:4,cdata:'Seoul'}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dc_resUserListData',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'birthday',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'height',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gender',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_example1',ref:'data:json,dma_request',target:'data:json,dc_resUserListData',action:'/data/sampleData/sampleData_json_dc_list.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [실행1] 클릭 시
 * $p.deleteSubmission( submissionID );
 */
scwin.btn_ex1_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex1_onclick 실행 **", txa_log, false);
    $c.frame.printExampleLog('$p.deleteSubmission("sbm_example1");', txa_log, false);
    $c.frame.printExampleLog('"sbm_example1" ID를 가진 submission이 없는 경우 오류가 발생합니다. 브라우저 개발자 도구의 콘솔을 확인하세요.', txa_log, false);

    //submission 삭제. - "sbm_example1" ID를 가진 submission을 삭제합니다.
    $p.deleteSubmission("sbm_example1");
};

/**
 * [실행2] 클릭 시
 * $p.getSubmission( submissionID );
 * ex) $p.getSubmission("sbm_example1");
 */
scwin.btn_ex2_onclick = function (e) {
    var tmpRet;
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex2_onclick 실행 **", txa_log, false);
    $c.frame.printExampleLog('$p.getSubmission("sbm_example1");', txa_log, false);
    $c.frame.printExampleLog('"sbm_example1" ID를 가진 submission객체가 반환됩니다. 브라우저 개발자 도구의 콘솔을 확인하세요.', txa_log, false);

    //submisison 객체 반환 - "sbm_example1" ID를 가진 submission을 반환합니다.
    //반환 받은 객체의 속성을 재정의하여 사용할 수 있습니다.
    tmpRet = $p.getSubmission("sbm_example1");

    console.log('$p.getSubmission("sbm_example1"); 반환값 : ', tmpRet);

    //반환된 submission객체가 없는 경우 - null 반환
    if (!tmpRet) {
        $c.frame.printExampleLog('"sbm_example1" ID를 가진 submission객체를 찾을 수 없습니다.', txa_log, false);
    }
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb mb_def'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: left;'},E:[{T:3,text:'Submission&nbsp;삭제하기 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행2'}]}]},{T:1,N:'w2:textbox',A:{class:'mr_def',escape:'false',id:'',label:'$p.deleteSubmission( submissionID );',style:'',tagname:'samp'}},{T:1,N:'w2:textbox',A:{class:'mr_def com_example_inline_code',escape:'false',id:'',label:'ex) $p.deleteSubmission("sbm_example1");',style:'',tagname:'code'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:'\n						Submission&nbsp;객체&nbsp;확인하기\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행2'}]}]},{T:1,N:'w2:textbox',A:{class:'mr_def',escape:'false',id:'',label:'$p.getSubmission( submissionID );',style:'',tagname:'samp'}},{T:1,N:'w2:textbox',A:{class:'mr_def com_example_inline_code',escape:'false',id:'',label:'//[scwin.btn_ex2_onclick] 함수를 참고하세요',style:'',tagname:'code'}}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb mb_def',id:'grp_form',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb mb_def',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n						로그&nbsp;출력 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_clearLog',style:'',type:'button','ev:onclick':'scwin.btn_clearLog_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 200px;'}}]}]}]}]}]}]}]})