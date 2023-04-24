/*amd /page/P00174.xml 13054 d6984434609141ca470d64181313e2f34a9f1320795f127f9ec34ba984a1c7cd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221230'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{id:'categoryLabel',name:'분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk_1',name:'Checkbox',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_2',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{id:'categoryLabel',name:'분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk_1',name:'Checkbox',dataType:'text',defaultValue:'false'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_3',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{id:'categoryLabel',name:'분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk_1',name:'Checkbox',dataType:'text',defaultValue:'N'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.setInitData();
};

/**
 * DataList에 Data 할당
 */
scwin.setInitData = function () {
    var arrData = [
        { "book_name": "공정하다는 착각", "categoryLabel": "인문" },
        { "book_name": "사람일까 상황일까", "categoryLabel": "인문" },
        { "book_name": "무엇이 옳은가", "categoryLabel": "인문" },
    ];

    dlt_books_1.setJSON(arrData);
    dlt_books_2.setJSON(arrData);
    dlt_books_3.setJSON(arrData);
};

/**
 * 버튼 [Data 출력하기 - dlt_books_1] 클릭 시
 * DataList dlt_books_1 출력
 */
scwin.btn_ex1_onclick = function (e) {
    var strLog;
    var jsnData;

    jsnData = dlt_books_1.getAllJSON();

    //로그 출력
    strLog = "[valueType : binary (기본 값)] dlt_books_1 출력\n";
    strLog += JSON.stringify(jsnData, null, "\t");

    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * 버튼 [Data 출력하기 - dlt_books_2] 클릭 시
 * DataList dlt_books_2 출력
 */
scwin.btn_ex2_onclick = function (e) {
    var strLog;
    var jsnData;

    jsnData = dlt_books_2.getAllJSON();

    //로그 출력
    strLog = "[valueType : boolean] dlt_books_2 출력\n";
    strLog += JSON.stringify(jsnData, null, "\t");

    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

/**
 * 버튼 [Data 출력하기 - dlt_books_3] 클릭 시
 * DataList dlt_books_3 출력
 */
scwin.btn_ex3_onclick = function (e) {
    var strLog;
    var jsnData;

    jsnData = dlt_books_3.getAllJSON();

    //로그 출력
    strLog = "[valueType : other] dlt_books_3 출력\n";
    strLog += JSON.stringify(jsnData, null, "\t");

    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};


/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 컬럼 속성 inputType이 checkbox일 때, <br/>컬럼 속성 valueType(값의 유형)의 설정 값에 따라 엔진에서 할당되는 체크된 값과 체크가 해제된 값을 비교하는 예제입니다.',style:'',class:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'속성 valueType의 설정 값에 따라 엔진에서 checkbox가 체크되었을 때 value로 할당하는 값과 체크가 해제되었을 때 value로 할당하는 값이 달라집니다.<br/>사용자(개발자)가 직접 값을 할당하고자 하는 경우는 valueType을 other로 지정하고 속성 trueValue(체크된 값)와 falseValue(체크 해제된 값)를 지정합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'주요 속성은 아래와 같습니다.<br/>- GridView의 Column : valueType, trueValue, falseValue<br/>- DataList의 Column : defaultValue',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'valueType : binary (기본 값)',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'컬럼 [선택]의 checkbox를 체크, 체크 후 해제합니다.<br/>버튼 [Data 출력하기]를 클릭하고 로그 확인 영역의 JSON 데이터를 확인합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'체크된 값 : 1, 체크 해제된 값 : 0, 기본 값(사용자 지정) : 0',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_ex1',style:'',type:'button','ev:onclick':'scwin.btn_ex1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Data 출력하기 - dlt_books_1'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'162',class:'wq_gvw',dataList:'data:dlt_books_1',defaultCellHeight:'24',id:'grd_exam1',rowNumVisible:'true',rowNumWidth:'20',style:'height:100px;',visibleRowNum:'3',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'40',rowStatusHeaderValue:'상태'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'선택',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',style:'',value:'분류',width:'52'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'110'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk_1',inputType:'checkbox',style:'',value:'',valueType:'binary',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',style:'',value:'',width:'52'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',value:'',width:'110'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'valueType : boolean',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'컬럼 [선택]의 checkbox를 체크, 체크 후 해제합니다.<br/>버튼 [Data 출력하기]를 클릭하고 로그 확인 영역의 JSON 데이터를 확인합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'체크된 값 : true, 체크 해제된 값 : false, 기본 값(사용자 지정) : false',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_ex2',style:'',type:'button','ev:onclick':'scwin.btn_ex2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Data 출력하기 - dlt_books_2'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'162',class:'wq_gvw',dataList:'data:dlt_books_2',defaultCellHeight:'24',id:'grd_exam2',rowNumVisible:'true',rowNumWidth:'20',style:'height:100px;',visibleRowNum:'3',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'40',rowStatusHeaderValue:'상태'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'선택',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',style:'',value:'분류',width:'52'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'110'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk_1',inputType:'checkbox',style:'',value:'',valueType:'boolean',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',style:'',value:'',width:'52'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',value:'',width:'110'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'valueType : other',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'컬럼 [선택]의 checkbox를 체크, 체크 후 해제합니다.<br/>버튼 [Data 출력하기]를 클릭하고 로그 확인 영역의 JSON 데이터를 확인합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'체크된 값 : Y, 체크 해제된 값 : N, 기본 값 (사용자 지정): N',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false',id:'btn_ex3',style:'',type:'button','ev:onclick':'scwin.btn_ex3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Data 출력하기 - dlt_books_3'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'162',class:'wq_gvw',dataList:'data:dlt_books_3',defaultCellHeight:'24',id:'grd_exam3',rowNumVisible:'true',rowNumWidth:'20',style:'height:100px;',visibleRowNum:'3',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'40',rowStatusHeaderValue:'상태'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'선택',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',style:'',value:'분류',width:'52'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'110'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk_1',inputType:'checkbox',style:'',value:'',valueType:'other',width:'40',trueValue:'Y',falseValue:'N'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',style:'',value:'',width:'52'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',value:'',width:'110'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})