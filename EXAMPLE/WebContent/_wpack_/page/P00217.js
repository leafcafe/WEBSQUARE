/*amd /page/P00217.xml 7149 6fd2b57dd1a69a1277e90abc59888d5c22e4fe6dc98556321ef91fb45015115f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230224'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'price',name:'정가'}},{T:1,N:'w2:column',A:{id:'published_date',name:'출간일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.setInitData();
};

scwin.setInitData = function () {
    var arrData = [
        { "book_name": "불편한 편의점", "price": "14000", "published_date": "20210420" },
        { "book_name": "사람일까 상황일까", "price": "28000", "published_date": "20190826" },
        { "book_name": "내가 틀릴 수도 있습니다", "price": "16000", "published_date": "20220418" },
        { "book_name": "인간 실격", "price": "9000", "published_date": "20040515" },
        { "book_name": "공정하다는 착각", "price": "18000", "published_date": "20201201" },
        { "book_name": "JavaScript Patterns", "price": "22000", "published_date": "20111103" }
    ];

    dlt_books_1.setJSON(arrData);
};

/**
 * GridView grd_exam1의 oncellclick 이벤트 핸들러
 */
scwin.grd_exam1_oncellclick = function (row, col, colId) {
    let strLog = "";

    strLog += "** scwin.grd_exam1_oncellclick ** \n";
    strLog += "row index : " + row + "\n";
    strLog += "column index : " + col + "\n";
    strLog += "column id : " + colId;

    //textarea에 log 출력
    $c.frame.printExampleLog(strLog, txa_log, false);

    //console에 log 출력
    console.log(strLog);

    //컬럼별 로직 구현 예시 - 도서명을 click한 경우 현재 행의 데이터를 JSON으로 출력
    switch (colId) {
        case "book_name":
            //연결된 DataList를 모르는 경우
            //let jsnRowData = $p.getComponentById(this.getDataList()).getRowJSON(row);

            //연결된 DataList를 아는 경우
            let jsnRowData = dlt_books_1.getRowJSON(row);

            //textarea에 log 출력
            $c.frame.printExampleLog("JSON Data : " + JSON.stringify(jsnRowData), txa_log, false);

            //console에 log 출력
            console.log(jsnRowData);
            break;
        case "price":
            break;
        case "published_date":
            break;
        default:
            break;
    }
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 이벤트 onCellClick 예제입니다.<br/>onCellClick 이벤트는 Body영역의 셀이 클릭된 경우 발생합니다.<br/>지정된 이벤트 핸들러에서 클릭된 셀의 row index, column index, column id 값을 확인할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'txt_info_important',id:'',label:'컴포넌트의 이벤트 발생 시 영역 [로그 확인]의 textarea 또는 브라우저 개발자도구 콘솔에 로그가 출력됩니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'GridView의 oncellclick 이벤트 핸들러 등록',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Body영역의 셀을 클릭하여 [로그 확인]영역의 로그를 확인합니다.<br/>컬럼 \'도서명\'의 셀을 클릭하면 행의 JSON 데이터가 출력됩니다.',style:''}},{T:1,N:'w2:gridView',A:{autoFitMinWidth:'272',class:'wq_gvw',dataList:'data:dlt_books_1',defaultCellHeight:'24',id:'grd_exam1',style:'height:100px;',visibleRowNum:'3',rowNumVisible:'true',rowNumWidth:'26',visibleRowNumFix:'true',autoFit:'allColumn','ev:oncellclick':'scwin.grd_exam1_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'h_col1',inputType:'text',value:'도서명',width:'130'}},{T:1,N:'w2:column',A:{hidden:'false',width:'66',inputType:'text',id:'h_col2',value:'정가',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'76',inputType:'text',id:'h_col3',value:'출간일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'130',value:''}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'66',value:''}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',width:'76',value:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})