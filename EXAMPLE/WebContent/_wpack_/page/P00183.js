/*amd /page/P00183.xml 6354 bdce53c9b48c6bf0a041e47d382c9c858fc8bb68cd5190e27e41161bd250cc20 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230106'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    //DataList에 데이터 할당
    scwin.setDataList();

    //DataList에 행 추가, 행 삭제, cell 값 변경
    scwin.setDataStatus();
};

/**
 * DataList에 데이터 할당
 */
scwin.setDataList = function () {
    var arrData = [
        { "label": "나로서 충분히 괜찮은 사람", "categoryLabel": "시/에세이" },
        { "label": "공정하다는 착각", "categoryLabel": "인문" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문" }
    ];

    dlt_books_1.setJSON(arrData);
};

/**
 * DataList에 행 추가, 행 삭제, cell 값 변경
 */
scwin.setDataStatus = function () {
    //행 추가
    dlt_books_1.insertRow(1);
    //셀 수정
    dlt_books_1.setCellData(2, "label", "도서명 변경 중");
    //행 삭제
    dlt_books_1.deleteRow(3);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 행 상태 컬럼의 부가 기능 설정 예시입니다.<br/>예제에 설정한 기능은 속성 rowStatusVisible(행 상태 표시 설정)이 true로 지정되어야 동작합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'아래 목록은 적용 속성별 설명입니다.<br/>- rowStatusVisible : 행의 상태(추가/수정/삭제) 컬럼을 표시<br/>- rowNumStatusResize : 행 상태 컬럼의 리사이즈 가능 여부 지정<br/>- rowStatusHeaderValue : 행 상태 컬럼의 헤더의 출력 값(레이블) 지정<br/>- rowStatusWidth : 행 상태 컬럼 너비(폭) 지정',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'행 상태 표시 및 부가 설정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'부가 설정 목록<br/>- 행 상태 컬럼 너비(폭)이 \'34px\'로 지정되었습니다.<br/>- 행 상태 컬럼의 헤더에 문자열 \'상태\'가 표시(출력)됩니다.<br/>- 행 상태 컬럼의 리사이즈가 가능합니다. (헤더 컬럼에서 조작)',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'240',class:'wq_gvw',dataList:'data:dlt_books_1',defaultCellHeight:'24',id:'',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',rowNumStatusResize:'true',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'34'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'160'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',width:'90',value:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'160',value:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'행 상태 표시만 설정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'GridView의 속성 rowStatusVisible=true',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'240',class:'wq_gvw',dataList:'data:dlt_books_1',defaultCellHeight:'24',id:'',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',rowNumStatusResize:'false',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'160'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',value:'',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',value:'',width:'160'}}]}]}]}]}]}]}]}]}]}]})