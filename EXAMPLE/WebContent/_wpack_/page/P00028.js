/*amd /page/P00028.xml 11028 8f9057890be6acacb73f66447a3d1b622457804c42cb508a4183e67326457ad5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221108'}]},{T:1,N:'version',E:[{T:4,cdata:'02'}]},{T:1,N:'description',E:[{T:4,cdata:'화면 구성 변경 및 문서 변경'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 영역 [style 할당하기]의 
 * 버튼 [border-color 변경하기] 클릭 시
 * [컴포넌트 ID].setStyle(style 속성명, 값);
 * ex) ibx_exam1.setStyle("border-color", "red");
 */
scwin.btn_ex1_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex1_onclick 실행 **", txa_log, false);
    //로그 출력
    $c.frame.printExampleLog('ibx_exam1.setStyle("border-color", "red");', txa_log, false);

    ibx_exam1.setStyle("border-color", "red");
};

/**
 * 영역 [style 속성값 반환받기]의
 * 버튼 [border-color 속성값 반환받기] 클릭 시
 * [컴포넌트 ID].getStyle(style 속성명);
 * ex) ibx_exam2.getStyle("border-color");
 */
scwin.btn_ex2_onclick = function (e) {
    var strRet;

    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex2_onclick 실행 **", txa_log, false);
    //로그 출력
    $c.frame.printExampleLog('ibx_exam2.getStyle("border-color");', txa_log, false);

    //inputbox의 border-color style 값 반환받기.
    strRet = ibx_exam2.getStyle("border-color");

    //반환값 로그 출력
    $c.frame.printExampleLog('반환값 : ' + strRet, txa_log, false);

    //반환값 alert
    alert(strRet);
};

/**
 * 영역 [style 속성값을 초기 값으로 할당하기]의 
 * 버튼 [1. color 변경하기] 클릭 시
 * [컴포넌트 ID].setStyle(style 속성명, 값);
 * ex) ibx_exam3.setStyle("color", "red");
 */
scwin.btn_ex3_1_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex3_1_onclick 실행 **", txa_log, false);
    //로그 출력
    $c.frame.printExampleLog('ibx_exam3.setStyle("color", "red");', txa_log, false);

    //컴포넌트의 style 속성 중 color를 할당합니다.
    ibx_exam3.setStyle("color", "red");
};

/**
 * 영역 [style 속성값을 초기 값으로 할당하기]의 
 * [2. color 속성값을 초기값으로 할당하기] 클릭 시
 * [컴포넌트 ID].setInitStyle(style 속성명, 값);
 * ex) ibx_exam3.setInitStyle("color");
 */
scwin.btn_ex3_2_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex3_onclick 실행 **", txa_log, false);
    //로그 출력
    $c.frame.printExampleLog('ibx_exam3.setInitStyle("color");', txa_log, false);

    //컴포넌트의 style 속성 중 color를 초기값으로 복구합니다.
    ibx_exam3.setInitStyle("color");
};


/**
 * 영역 [초기 style 속성값 반환받기]의 
 * 버튼 [1. border-color 변경하기] 클릭 시
 * [컴포넌트 ID].setStyle(style 속성명, 값);
 * ex) ibx_exam4.setStyle("border-color", "blue");
 */
scwin.btn_ex4_1_onclick = function (e) {
    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex4_1_onclick 실행 **", txa_log, false);
    //로그 출력
    $c.frame.printExampleLog('ibx_exam4.setStyle("border-color", "blue");', txa_log, false);

    //컴포넌트의 style 속성 중 border-color를 할당합니다.
    ibx_exam4.setStyle("border-color", "blue");
};

/**
 * 영역 [초기 style 속성값 반환받기]의 
 * 버튼 [2. 초기 border-color 값 반환받기] 클릭 시
 * [컴포넌트 ID].getInitStyle(style 속성명);
 * ex) ibx_exam4.getInitStyle("border-color");
 */
scwin.btn_ex4_2_onclick = function (e) {
    var strRet;

    //로그 출력
    $c.frame.printExampleLog("** scwin.btn_ex4_onclick 실행 **", txa_log, false);
    //로그 출력
    $c.frame.printExampleLog('ibx_exam4.getInitStyle("border-color");', txa_log, false);

    //inputbox의 초기 border-color style 값 반환받기.
    strRet = ibx_exam4.getInitStyle("border-color");

    //console에 반환값 출력
    console.log(strRet);

    if ($.isPlainObject(strRet)) {
        strRet = JSON.stringify(strRet, null, "\t");
    }

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

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'mb10',escape:'false',id:'',label:'컴포넌트의 style를 제어하는 API 사용 예제입니다.<br/>영역 [로그 확인]에서 실행 스크립트를 확인할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'아래의 API로 CSS 속성을 제어 할 수 있습니다.<br/>- CSS 속성값 설정 : setStyle<br/>- CSS 속성값 반환 : getStyle<br/>- 초기 CSS 속성값으로 복구 : setInitStyle<br/>- 초기 CSS 속성값 반환 : getInitStyle<br/>',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'style 할당하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'InputBox의 style 속성 border-color를 변경합니다.',style:''}},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_ex1_onclick',disabled:'',style:'',id:'btn_ex1',type:'button',class:'btn_exam_exec',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'border-color 변경하기'}]}]}]},{T:1,N:'xf:input',A:{class:'mr_def',id:'ibx_exam1',initStyle:'true',initValue:'WebSquare',style:'width:100px;border-width: 2px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'style 속성값 반환받기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'InputBox의 style 속성 border-color의 값을 alert 합니다.',style:''}},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_ex2_onclick',disabled:'',style:'',id:'btn_ex2',type:'button',class:'btn_exam_exec btn_txt_of',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'border-color 속성값 반환받기'}]}]}]},{T:1,N:'xf:input',A:{class:'mr_def',id:'ibx_exam2',initStyle:'true',initValue:'WebSquare',style:'width:100px;border-color: red;border-width: 2px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'style 속성값을 초기 값으로 할당하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'버튼을 순서대로 클릭하여 실행 결과를 확인합니다.',style:''}},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_1_onclick',id:'btn_ex3_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1. color 변경하기'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_ex3_2_onclick',disabled:'',style:'',id:'btn_ex3_2',type:'button',class:'btn_exam_exec',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2. color 속성값을 초기값으로 할당하기'}]}]}]},{T:1,N:'xf:input',A:{class:'mr_def',id:'ibx_exam3',initStyle:'true',initValue:'WebSquare',style:'width:100px;border-width: 2px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'초기 style 속성값 반환받기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'버튼을 순서대로 클릭하여 실행 결과를 확인합니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex4_1_onclick',id:'btn_ex4_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1. border-color 변경하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex4_2_onclick',id:'btn_ex4_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2. 초기 border-color 값 반환받기'}]}]}]},{T:1,N:'xf:input',A:{class:'mr_def',id:'ibx_exam4',initStyle:'true',initValue:'WebSquare',style:'width:100px;border-color: red;border-width: 2px;'}}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})