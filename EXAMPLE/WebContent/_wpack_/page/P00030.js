/*amd /page/P00030.xml 10146 cb7ced057684e351c7446ad2cfdbe6b5ccf2f07866acc386303c17181e08e81d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_request'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addr',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'name',E:[{T:4,cdata:'WebSquare'}]},{T:1,N:'addr',E:[{T:4,cdata:'Seoul'}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dc_resUserListData',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'birthday',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'height',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gender',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_example1',ref:'data:json,dma_request',target:'data:json,dc_resUserListData',action:'/data/sampleData/sampleData_json_dc_list.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_example1_submitdone','ev:submiterror':'scwin.sbm_example1_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [실행1] 클릭 시
 * $p.createSubmission( 옵션 객체 );
 */
scwin.btn_ex1_onclick = function (e) {
    var jsnSubmissionOptions;
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex1_onclick 실행 **", txa_log, false);

    //서브미션 옵션 설정.
    jsnSubmissionOptions = {
        id: "sbm_example_dynamic",
        ref: "data:json,dma_request",              //생략 가능 - $p.executeSubmission 호출시 request data 전달이 가능합니다. 
        target: "data:json,dc_resUserListData",    //생략 가능 - submitDoneHandler 함수에서 response data의 제어가 가능합니다.
        action: "/data/sampleData/sampleData_json_dc_list.json",
        mediatype: "application/json",
        submitDoneHandler: function (e) {
            //응답 본문 alert 출력
            alert(e.responseText);

            //응답 본문 log 출력
            $c.frame.printExampleLog("sbm_example_dynamic - submitDoneHandler", txa_log, false);
            $c.frame.printExampleLog(e.responseText, txa_log, false);
        },
        submitErrorHandler: function (e) {
            $c.frame.printExampleLog("sbm_example_dynamic - submitErrorHandler", txa_log, false);
            //개발자 도구 console에 에러 객체 출력
            console.error("sbm_example_dynamic - submitErrorHandler", e);
        }
    };

    //submission 생성
    $p.createSubmission(jsnSubmissionOptions);
};

/**
 * [실행2] 클릭 시
 * $p.deleteSubmission( submissionID );
 */
scwin.btn_ex2_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex2_onclick 실행 **", txa_log, false);
    $c.frame.printExampleLog('"sbm_example1" ID를 가진 submission이 이미 삭제된 경우는 오류가 발생합니다. 브라우저 개발자 도구의 콘솔을 확인하세요.', txa_log, false);
    $c.frame.printExampleLog('$p.deleteSubmission("sbm_example1");', txa_log, false);

    //submission 삭제. - "sbm_example1" ID를 가진 submission을 삭제합니다.
    $p.deleteSubmission("sbm_example1");

    //로그 출력
    $c.frame.printExampleLog('정상적으로 삭제되었습니다.', txa_log, false);
};

/**
 * [실행3] 클릭 시
 * $p.executeSubmission( submissionID , requestData );
 * ex) $p.executeSubmission("sbm_example1");
 */
scwin.btn_ex3_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex3_onclick 실행 **", txa_log, false);
    $c.frame.printExampleLog('$p.executeSubmission("sbm_example1");', txa_log, false);
    $c.frame.printExampleLog('"sbm_example1" ID를 가진 submission이 없는 경고 로그가 출력됩니다. 브라우저 개발자 도구의 콘솔을 확인하세요.', txa_log, false);

    //submission 실행. - "sbm_example1" ID를 가진 submission을 실행합니다.
    $p.executeSubmission("sbm_example1");
};

/**
 * [실행4] 클릭 시
 * $p.getSubmission( submissionID );
 * ex) $p.getSubmission("sbm_example1");
 */
scwin.btn_ex4_onclick = function (e) {
    var tmpRet;
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex4_onclick 실행 **", txa_log, false);
    $c.frame.printExampleLog('$p.getSubmission("sbm_example1");', txa_log, false);
    $c.frame.printExampleLog('"sbm_example1" ID를 가진 submission객체가 반환됩니다. 브라우저 개발자 도구의 콘솔을 확인하세요.', txa_log, false);

    //submisison 객체 반환 - "sbm_example1" ID를 가진 submission을 반환합니다.
    //반환 받은 객체의 속성을 재정의하여 사용할 수 있습니다.
    tmpRet = $p.getSubmission("sbm_example1");

    console.log('$p.getSubmission("sbm_example1"); 반환값 : ', tmpRet);

    if (!tmpRet) {
        //반환된 submission객체가 없는 경우 - null 반환
        $c.frame.printExampleLog('"sbm_example1" ID를 가진 submission객체를 찾을 수 없습니다.', txa_log, false);
    } else {
        //반환된 submission의 정보 출력
        $c.frame.printExampleLog('action : ' + tmpRet.action, txa_log, false);
        $c.frame.printExampleLog('ref : ' + tmpRet.ref, txa_log, false);
    }
};

/**
 * sbm_example1의 submitdone handler
 */
scwin.sbm_example1_submitdone = function (e) {
    //응답 본문 console 출력
    console.log(e.responseText);
    //응답 객체 console 출력
    console.log(e.responseJSON);

    //응답 본문 log 출력
    $c.frame.printExampleLog("submitDoneHandler", txa_log, false);
    $c.frame.printExampleLog(e.responseText, txa_log, false);
};

/**
 * sbm_example1의 submiterror handler
 */
scwin.sbm_example1_submiterror = function (e) {
    $c.frame.printExampleLog("submitErrorHandler", txa_log, false);

    //개발자 도구 console에 에러 객체 출력
    console.error("submitErrorHandler", e);
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

}}}]},{T:1,N:'w2:require',A:{as:'udc_example_refresh',type:'page',variableClone:'true',src:'/frame/udc/example_refresh.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:udc_example_refresh',A:{id:'udc_example_refresh',style:'margin-bottom:10px;'}},{T:1,N:'xf:group',A:{class:'mb_def',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'Submission 생성하기',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행1'}]}]}]},{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'Submission 생성하기',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행2'}]}]}]},{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'Submission 실행하기',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행3'}]}]}]},{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'Submission 객체 반환받기',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex4_onclick',id:'btn_ex4',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행4'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})