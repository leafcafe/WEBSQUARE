/*amd /page/P00032.xml 9634 6a3e849e7581306bbd2b45ea6b301a076a370082ac5febad9371132466835529 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220522'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_request'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'addr',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'name',E:[{T:4,cdata:'WebSquare'}]},{T:1,N:'addr',E:[{T:4,cdata:'Seoul'}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dc_resUserListData',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'name',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'birthday',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'height',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gender',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_example1',ref:'data:json,dma_request',target:'data:json,dc_resUserListData',action:'/data/sampleData/sampleData_json_dc_list.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_example1_submitdone','ev:submiterror':'scwin.sbm_example1_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [실행1] 클릭 시
 * $p.executeSubmission( submissionID , requestData );
 * ex) $p.executeSubmission("sbm_example1");
 */
scwin.btn_ex1_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex1_onclick 실행 **", txa_log, false);
    $c.frame.printExampleLog('$p.executeSubmission("sbm_example1");', txa_log, false);
    $c.frame.printExampleLog('"sbm_example1" ID를 가진 submission이 없는 경고 로그가 출력됩니다. 브라우저 개발자 도구의 콘솔을 확인하세요.', txa_log, false);

    //submission 실행. - "sbm_example1" ID를 가진 submission을 실행합니다.  
    $p.executeSubmission("sbm_example1");
};

/**
 * [실행2] 클릭 시
 * $p.executeSubmission( submissionID , requestData );
 */
scwin.btn_ex2_onclick = function (e) {
    var jsnRequestData;
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex2_onclick 실행 **", txa_log, false);
    $c.frame.printExampleLog('$p.executeSubmission("sbm_example1", jsnRequestData);', txa_log, false);

    //request data 정의
    jsnRequestData = {
        "dma_example": {
            "name": "example01"
        }
    };

    //submission 실행.
    //"sbm_example1" ID를 가진 submission을 실행합니다.
    //ref 속성에 정의된 참조 데이터는 무시하고 사용자가 정의한 데이터를 request로 할당합니다. 
    $p.executeSubmission("sbm_example1", jsnRequestData);

    //로그 출력
    $c.frame.printExampleLog('브라우저 개발자 도구를 통해 request 데이터를 확인하세요. 또는 [실행1], [실행2]의 응답 객체의 "requestBody"를 비교해보세요.', txa_log, false);
};

/**
 * submission 완료 시 발생 - sbm_example1
 */
scwin.sbm_example1_submitdone = function (e) {
    //응답 본문 alert 출력
    alert(e.responseText);

    //e.id 							//Submission 객체의 ID 반환.
    //e.resourceUri					//통신 URI 반환.
    //e.responseHeaders				//Response Headers 내용 반환.
    //e.responseStatusCode 			//Response Status Code 반환.
    //e.responseReasonPhrase 		//Response Status Text 반환.
    //e.responseBody 				//Response Data를 XML 데이터로 parse 한 XML 객체 반환. Response Content-Type이 JSON 인 경우 json객체를 XML로 파싱.
    //e.responseText				//Response Data 원본으로 String 형태 반환.
    //e.responseHeadersJSON			//Response Headers를 JSON으로 반환.
    //e.responseJSON 				//responseText를 JSON으로 변환. response header의 content-type에 "json" 문자열이 있는 경우에만 변환을 수행.

    //submission 완료 객체 출력
    console.log('"sbm_example1" done 객체 >>> ', e);

    //응답 본문 log 출력
    $c.frame.printExampleLog("sbm_example1 - scwin.sbm_example1_submitdone", txa_log, false);
    $c.frame.printExampleLog(e.responseText, txa_log, false);
    $c.frame.printExampleLog('브라우저 개발자 도구의 콘솔에 통신이 완료된 submission 객체 정보가 출력하였습니다. 브라우저 개발자 도구의 콘솔을 확인하세요.', txa_log, false);
};

/**
 * submission 오류 시 발생 - sbm_example1
 */
scwin.sbm_example1_submiterror = function (e) {
    $c.frame.printExampleLog("sbm_example1 - scwin.sbm_example1_submiterror", txa_log, false);
    //개발자 도구 console에 에러 객체 출력
    console.error("sbm_example1 - scwin.sbm_example1_submiterror", e);
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};




}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb mb_def'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: left;'},E:[{T:3,text:'Submission&nbsp;실행하기 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행1'}]}]},{T:1,N:'w2:textbox',A:{class:'mr_def',escape:'false',id:'',label:'$p.executeSubmission( submissionID );',style:'',tagname:'samp'}},{T:1,N:'w2:textbox',A:{class:'mr_def com_example_inline_code',escape:'false',id:'',label:'ex) $p.executeSubmission("sbm_example1");',style:'',tagname:'code'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th',style:'text-align: left;'},E:[{T:3,text:'\n						Submission&nbsp;실행하기&nbsp;-&nbsp;request&nbsp;data&nbsp;직접&nbsp;할당하기\n						'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행2'}]}]},{T:1,N:'w2:textbox',A:{class:'mr_def',escape:'false',id:'',label:'$p.executeSubmission( submissionID, requestData );',style:'',tagname:'samp'}},{T:1,N:'w2:textbox',A:{class:'mr_def com_example_inline_code',escape:'false',id:'',label:'//[scwin.btn_ex2_onclick] 함수를 참고하세요',style:'',tagname:'code'}}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb mb_def',id:'grp_form',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb mb_def',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n						로그&nbsp;출력 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_clearLog',style:'',type:'button','ev:onclick':'scwin.btn_clearLog_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 200px;'}}]}]}]}]}]}]}]})