/*amd /page/P00192.xml 21672 d02d09132a6ba67ecc0d87d46d411da2e8b0ab18176c7c89e98512fad7841f38 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230127'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_gridview',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'account',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'account_name',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'owner',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'national',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stock_usd',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stock_rate',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bond_usd',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bond_rate',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etc_usd',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etc_rate',name:'name10'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tot_usd',name:'name11'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tot_rate',name:'name12'}},{T:1,N:'w2:column',A:{dataType:'text',id:'date',name:'name13'}},{T:1,N:'w2:column',A:{id:'chk',name:'chk',dataType:'text',ignoreStatus:'true'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_gridview',ref:'',target:'data:json,dlt_gridview',action:'/data/sampleData/sampleData_json_gridview.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_gridview1_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    $p.executeSubmission("sbm_gridview");
    // 초기 subtotal 상태 값
    scwin.subTotVisble = true;
};

// 검색 버튼 클릭 이벤트 - 그리드뷰 데이터 submission 실행
scwin.btn_search_onclick = function (e) {
    $p.executeSubmission("sbm_gridview");
};


// On/Off 버튼 클릭 이벤트 - subtotal 표시 변경
scwin.btn_onoff_onclick = function (e) {
    // 표시할 데이터 없을 시 안내 메세지
    if (grd.getRowCount() == 0) {
        alert("조회를 먼저 해주세요");
        return;
    }
    // subtotal 상태 변경
    scwin.subTotVisble = !scwin.subTotVisble;
    grd.setSubtotalVisible(scwin.subTotVisble);
};

// 다운로드 버튼
scwin.btn_down_onclick = function (e) {
    // 옵션 변수
    var options = {};
    // xlsx, xls, csv 구분 ex) .csv
    var type = acb_type.getValue();

    // 옵션 설정
    options.fileName = "excel" + type;
    options.type = "1";

    // csv 다운로드인 경우
    if (type == ".csv") {
        // 구분자 설정
        options.delim = ";"
        // 다운로드
        grd.saveCSV(options);
        return;
    }
    // 컬럼 무브를 적용해 다운 받을지 여부
    options.columnMove = "true";
    // 스타일 사용 여부
    options.useStyle = "true";
    // subtotal 포함 여부
    options.useSubTotal = scwin.subTotVisble;
    // footer 포함 여부
    options.useFooter = "true";
    // colMerge(예탁계좌 컬럼) 포함 여부
    options.colMerge = "false";
    // 다운로드
    grd.advancedExcelDownload(options);

};

// 업로드 버튼 클릭 이벤트
scwin.btn_up_onclick = function (e) {
    var options = {};
    var type = acb_type.getValue();

    // 업로드 창 modal 사용 여부
    options.useModalDisable = "true";
    // 헤더 존재 여부
    options.headerExist = "1";

    // csv 타입인 경우
    if (type == ".csv") {
        options.delim = ";"
        grd1.readCSV(options);
        return;
    }
    // 업로드
    grd.advancedExcelUpload(options);

};

// clear 버튼 클릭 이벤트 - 그리드뷰1번 초기화
scwin.btn_clean_onclick = function (e) {
    dlt_gridview.setJSON([]);
};

// 행 삽입 버튼 (insert) 클릭 이벤트
scwin.btn_insert_onclick = function (e) {
    // 현재 클릭된 행의 인덱스 확인
    var index = grd.getFocusedRowIndex();
    // 행을 선택(클릭)하지 않은 경우 마지막에 추가하도록 index 설정
    if (index == -1) {
        index = grd.getRowCount() - 1;
    }
    // 행 삽입
    dlt_gridview.insertRow(index + 1);
    // 삽입된 행으로 focus 이동
    grd.setFocusedCell(index + 1, 0, true);
};

// Delete 버튼 - 행 삭제 버튼
scwin.btn_delete_onclick = function (e) {
    // 선택한 행의 인덱스
    var row = grd.getFocusedRowIndex();
    // 선택하지 않은 경우
    if (row == -1) {
        alert("삭제할 행을 선택해주세요");
        return;
    }
    dlt_gridview.deleteRow(row);
};

// formmater
scwin.masking_formatter = function (data) {
    var len = data.length;
    var str = "";
    if (len <= 0) {
        return "";
    }
    for (var i = 0; i < len - 2; i++)
        str += '*';
    return str + "증권";
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Gridview를 활용한 Sample 예제입니다.<br/><br/>각 버튼 기능<br/>조회: 데이터 조회, clean: 데이터 초기화, Insert: 선택한 열 혹은 마지막 열 추가, Delete: 선택한 열 삭제<br/>download: seletbox에서 선택한 형식으로 다운로드, upload: 선택한 유형의 파일을 업로드, ON/OFF: subtotal on/off',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 PC에 최적화 된 화면입니다. 모바일에서는 기능 일부가 작동하지 않을 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'ofh'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'fr mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_search_onclick',style:'',id:'trigger2',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_clean_onclick',style:'width: 80px;',id:'trigger1',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'clean'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_insert_onclick',style:'',id:'trigger3',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Insert'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_delete_onclick',style:'',id:'trigger4',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Delete'}]}]},{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOption:'',toolTip:'형식을 선택하세요',allOption:'',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width:70px;margin-right: 5px;',id:'acb_type',renderType:'',class:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xlsx'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'.xlsx'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'csv'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'.csv'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'xls'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'.xls'}]}]}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_down_onclick',style:'width: 80px;',id:'btn_down',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'download'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_up_onclick',style:'width: 80px;',id:'btn_up',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'upload'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_onoff_onclick',style:'',id:'btn_onoff',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ON/OFF'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'gwbox'},E:[{T:1,N:'w2:gridView',A:{tooltipFormatter:'','ev:ontextimageclick':'scwin.grd_menu_ontextimageclick',wheelRows:'',rowNumVisible:'true',rowStatusWidth:'40',userData3:'',keepDefaultColumnWidth:'true',rowNumHeaderValue:'순번',scrollByColumn:'false',adaptive:'',focusMode:'row',rowNumWidth:'50','ev:onkeyup':'',enterKeyMove:'',autoFit:'allColumn',id:'grd',class:'wq_gvw','ev:oncellclick':'scwin.grd_menu_oncellclick','ev:onrowindexchange':'',useShiftKey:'true',columnMoveWithFooter:'true','ev:oneditkeyup':'scwin.grd_menu_oneditkeyup',rowStatusHeaderValue:'상태',rowStatusVisible:'true',fixedColumnWithHidden:'true',dataList:'data:dlt_gridview','ev:onviewchange':'',columnMove:'true',ignoreCellClick:'false',style:'height:300px;','ev:onafteredit':'',visibleRowNum:'5',autoFitMinWidth:'1187'},E:[{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{rowSpan:'2',width:'79',inputType:'text',style:'height:64px;',id:'column16',value:'예탁계좌',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',style:'height:64px;',id:'column109',value:'예탁계좌명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'height:64px;',id:'column104',value:'보관기관',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',hidden:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'height:64px;',id:'column105',value:'국가',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',style:'height:64px;',id:'column25',value:'주식',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',style:'height:64px;',id:'column23',value:'채권',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'2',removeBorderStyle:'false',width:'130',inputType:'text',style:'height:64px;',id:'column21',value:'기타',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{colSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',style:'height:64px;',id:'column99',value:'전체증권',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{rowSpan:'2',removeBorderStyle:'false',width:'70',inputType:'text',style:'height:64px;',id:'column89',value:'기준일',blockSelect:'false',displayMode:'label'}}]},{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'130',inputType:'text',style:'height:20px;',id:'column43',value:'평균보관금액<br/>(USD)',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column51',value:'점유율',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'130',inputType:'text',style:'height:20px;',id:'column42',value:'평균보관금액<br/>(USD)',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px;',id:'column57',value:'점유율',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'130',inputType:'text',style:'height:20px;',id:'column41',value:'평균보관금액<br/>(USD)',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column60',value:'점유율',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'130',inputType:'text',style:'height:20px',id:'column100',value:'평균보관금액<br/>(USD)',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column95',value:'점유율',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody4'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{customFormatter:'scwin.setFontFormat',hidden:'false',colMerge:'true',width:'79',inputType:'text',readOnly:'false',style:'height:38px;',id:'account',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.masking_formatter',removeBorderStyle:'false',width:'70',inputType:'text',style:'height:38px',id:'account_name',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:38px',id:'owner',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:38px',id:'national',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',excelCellType:'number',inputType:'text',style:'height:38px',id:'stock_usd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',excelCellType:'number',inputType:'text',style:'height:38px',id:'stock_rate',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',excelCellType:'number',inputType:'text',style:'height:38px',id:'bond_usd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',excelCellType:'number',inputType:'text',style:'height:38px',id:'bond_rate',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',excelCellType:'number',inputType:'text',style:'height:38px',id:'etc_usd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',excelCellType:'number',inputType:'text',style:'height:38px',id:'etc_rate',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',excelCellType:'number',inputType:'text',style:'height:38px',id:'tot_usd',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',excelCellType:'number',inputType:'text',style:'height:38px',id:'tot_rate',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',style:'height:38px',id:'date',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'account',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row9'},E:[{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'',removeBorderStyle:'false',width:'79',inputType:'text',style:'height:20px;',id:'column88',value:'소계',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column113',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column114',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column115',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("stock_usd")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',inputType:'expression',style:'height:20px',id:'column85',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("stock_rate")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column84',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("bond_usd")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',inputType:'expression',style:'height:20px',id:'column82',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("bond_rate")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column81',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("etc_usd")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',inputType:'expression',style:'height:20px',id:'column79',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("etc_rate")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column78',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("tot_usd")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',inputType:'expression',style:'height:20px',id:'column102',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("tot_rate")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column97',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'70',inputType:'text',style:'height:20px',id:'column92',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1',class:''},E:[{T:1,N:'w2:row',A:{style:'',id:''},E:[{T:1,N:'w2:column',A:{rowSpan:'',colSpan:'',removeBorderStyle:'false',width:'79',inputType:'text',style:'height:20px;',id:'column76',value:'총계',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column110',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column111',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column112',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("stock_usd")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',inputType:'expression',style:'height:20px',id:'column73',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("stock_rate")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column72',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("bond_usd")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',inputType:'expression',style:'height:20px',id:'column70',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("bond_rate")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column69',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("etc_usd")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',inputType:'expression',style:'height:20px',id:'column67',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("etc_rate")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column66',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("tot_usd")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'130',displayFormat:'#,###',inputType:'expression',style:'height:20px',id:'column103',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'SUM("tot_rate")',textAlign:'right',dataType:'number',removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column98',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.dis',expression:'COUNT("account")',removeBorderStyle:'false',width:'70',inputType:'expression',style:'height:20px',id:'column93',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]}]}]})