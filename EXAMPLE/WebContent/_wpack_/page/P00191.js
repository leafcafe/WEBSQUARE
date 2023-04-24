/*amd /page/P00191.xml 7658 a9c1c546bc9f6066d8d8c13e0fde9e33f526dda27a4e7f55bef185654ef599e5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230206'}]},{T:1,N:'version',E:[{T:4,cdata:'02'}]},{T:1,N:'description',E:[{T:4,cdata:'설명 추가 및 버튼 명 수정'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230120'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'price',name:'정가'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'price',E:[{T:4,cdata:'2547869000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'price',E:[{T:4,cdata:'8740500'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'price',E:[{T:4,cdata:'543900'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};


/**
 * 버튼 [컬럼 '정가'의 속성 dataType의 설정 값 반환받기] 클릭 시
 */
scwin.btn_ex1_1_onclick = function (e) {
    var returnValue;

    //GridView 'grd_exam1'의 컬럼 '정가'의 속성 dataType의 값을 반환 받습니다.
    returnValue = grd_exam1.getDataType("price");

    //로그 출력
    $c.frame.printExampleLog("** 함수 scwin.btn_ex1_1_onclick **", txa_log, false);
    $c.frame.printExampleLog('grd_exam1.getDataType("price"); 반환 값 : ' + returnValue, txa_log, false);

    console.log("** 함수 scwin.btn_ex1_1_onclick **");
    console.log('grd_exam1.getDataType("price"); 반환 값 : ' + returnValue);

    txa_log.focus();

};

/**
 * 버튼 [컬럼 '정가'의 속성 dataType을 'number'로 지정하고 속성 dispalyFormat을 '#,###'으로 지정하기] 클릭 시
 */
scwin.btn_ex1_2_onclick = function (e) {
    //GridView 'grd_exam1'의 컬럼 '정가'의 속성 dataType의 값을 'number'로 지정합니다.
    grd_exam1.setDataType("price", "number");
    //GridView 'grd_exam1'의 컬럼 '정가'의 속성 displayFormat의 값을 '#,###'으로 지정합니다.
    grd_exam1.setColumnDisplayFormat("price", "#,###");
};

/**
 * 버튼 [컬럼 '정가'의 속성 dataType을 'float'로 지정하고 속성 dispalyFormat을 '#,###.00'으로 지정하기] 클릭 시
 */
scwin.btn_ex1_3_onclick = function (e) {
    //GridView 'grd_exam1'의 컬럼 '정가'의 속성 dataType을 'float'로 지정합니다.
    grd_exam1.setDataType("price", "float");
    //GridView 'grd_exam1'의 컬럼 '정가'의 속성 dispalyFormat을 '#,###.00'으로 지정합니다.
    grd_exam1.setColumnDisplayFormat("price", "#,###.00");
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView 컬럼의 속성 dataType과 속성 displayFormat의 값을 지정하고 속성 dataType의 값을 반환받는 예제입니다.<br/>지정 가능한 dataType 값은 아래와 같습니다.<br/>- text, number, float',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'이 예제에서 사용한 함수는 다음과 같습니다.<br/>- getDataType : 컬럼의 속성 dataType의 값을 반환.<br/>- setDataType : 컬럼의 속성 dataType의 값을 지정.<br/>- setColumnDisplayFormat : 컬럼의 속성 displayFormat의 값을 지정.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'컬럼의 속성 dataType과 속성 dispalyFormat 지정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal txt_info_important',id:'',label:'반환 된 설정 값은 [로그 확인]의 textarea에 로그가 출력됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_1_onclick',id:'btn_ex1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'정가\'의 속성 dataType의 설정 값 반환받기 - 로그 출력'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_2_onclick',id:'btn_ex1_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'정가\'의 속성 dataType을 \'number\'로 지정하고 속성 dispalyFormat을 \'#,###\'으로 지정하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_3_onclick',id:'btn_ex1_3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컬럼 \'정가\'의 속성 dataType을 \'float\'로 지정하고 속성 dispalyFormat을 \'#,###.00\'으로 지정하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'160',class:'wq_gvw',dataList:'data:dlt_books',defaultCellHeight:'24',disabledBackgroundColor:'#eee',disabledFontColor:'#bbb',id:'grd_exam1',rowNumVisible:'true',rowNumWidth:'10',style:'height:100px;',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'70'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})