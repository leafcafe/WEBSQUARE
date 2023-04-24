/*amd /page/P00173.xml 6452 860e511a31e62dec021e799b56fee2d77dd2d852e7719d4fe839906079f22fc5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221230'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{id:'categoryLabel',name:'분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk_1',name:'기본값 미설정 Checkbox',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk_2',name:'기본값 설정 Checkbox',dataType:'text',defaultValue:'0'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
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
};

/**
 * 버튼 [Data 출력하기] 클릭 시
 * GridView 데이터 출력
 */
scwin.btn_ex1_onclick = function (e) {
    var strLog;
    var jsnData;

    jsnData = dlt_books_1.getAllJSON();

    //로그 출력
    strLog = "[checkbox의 defaultValue 설정 비교하기] dlt_books_1 출력\n";
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
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 속성 InputType을 checkbox로 구성하고 기본 값을 설정하는 예제입니다.<br/>이 기능은 GridView와 연결된 DataList의 컬럼 속성 defaultValue를 지정하여 구현합니다.',style:'',class:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'defaultValue는 checkbox와 연결된 컬럼의 데이터가 없는 경우 사용합니다.<br/>defaultValue를 지정하지 않는 경우 기본 값은 빈 문자열로 할당됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'checkbox의 defaultValue 설정 비교하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'버튼 [Data 출력하기]를 클릭하여 영역 [로그확인]에 출력된 데이터를 비교합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'기본 값 : 빈 문자열, 선택된 값 : 1, 선택 후 해제된 값 : 0',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Data 출력하기'}]}]}]},{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'data:dlt_books_1',defaultCellHeight:'24',id:'grd_exam1',style:'height:100px;',visibleRowNum:'3',visibleRowNumFix:'true',rowNumWidth:'20',autoFit:'lastColumn',autoFitMinWidth:'338'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'114',inputType:'text',style:'',id:'column5',value:'defaultValue 미설정<br/>ID : chk_1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'114',inputType:'text',style:'',id:'column6',value:'defaultValue 설정<br/>ID : chk_2',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'110'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'114',inputType:'checkbox',valueType:'binary',style:'',id:'chk_1',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'114',inputType:'checkbox',style:'',id:'chk_2',value:'',displayMode:'label',valueType:'binary'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'110',value:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})