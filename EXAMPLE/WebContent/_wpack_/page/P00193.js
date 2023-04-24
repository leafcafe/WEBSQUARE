/*amd /page/P00193.xml 17916 3c8f99e9ef04b71a0c7bbdff49b7797d947058ab98528cdbdee3f2b6404a35b1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230127'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_gridview',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'chk',ignoreStatus:'true',name:'chk'}},{T:1,N:'w2:column',A:{dataType:'text',id:'account',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'account_name',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'owner',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'national',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stock_usd',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'stock_rate',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bond_usd',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bond_rate',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etc_usd',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etc_rate',name:'name10'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tot_usd',name:'name11'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tot_rate',name:'name12'}},{T:1,N:'w2:column',A:{dataType:'text',id:'date',name:'name13'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_gridview',ref:'',target:'',action:'/data/sampleData/sampleData_json_gridview.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_gridview1_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
};

// 시간 저장 변수
scwin.startTime;
scwin.serverEnd;
scwin.renderEnd;

// 점유율상세내역 버튼 클릭 이벤트
scwin.btn_search_onclick = function (e) {
    var sbm = $p.getSubmission("sbm_gridview");
    var select_val = acb_size.getValue();
    sbm.action = "/data/sampleData/sampleData_json_gridview"+select_val;
    // 시간 측정 시작
    scwin.startTime = new Date();
    $p.executeSubmission("sbm_gridview");
};

// up 버튼 클릭 이벤트
scwin.btn_up_onclick = function (e) {
    var options = {};

    options.useModalDisable = "true";
    options.headerExist = "1";

    grd.advancedExcelUpload(options);

};

// down 버튼 클릭 이벤트
scwin.btn_down_onclick = function (e) {
    var options = {};

    options.fileName = "excel.xlsx";
    options.chunkRow = 10000;

    options.type = "1";
    // 컬럼 무브를 적용해 다운 받을지 여부
    options.columnMove = "true";
    // 스타일 사용 여부
    options.useStyle = "true";
    // subtotal 포함 여부
    options.useSubTotal = scwin.subTotVisble;
    // footer 포함 여부
    options.useFooter = "true";
    // colMerge(예탁계좌 컬럼) 포함 여부
    options.colMerge = "true";
    options.startRowIndex = 0;
    options.startColumnIndex = 0;
    options.showProcess = true;
    
    grd.advancedExcelDownload(options);
};

// 저장된 각 파트별 시간을 이용해 전체, 서버, 렌더 완료 시간을 계산하고 세팅한다.
scwin.calcTime = function (e) {
    var total_time = scwin.renderEnd - scwin.startTime;
    var server_time = scwin.serverEnd - scwin.startTime
    var render_time = scwin.renderEnd - scwin.serverEnd;
    var result = {
        total : total_time,
        server : server_time,
        render : render_time
    }
    totalTime.setValue(total_time);
    serverTime.setValue(server_time);
    renderTime.setValue(render_time);

    return result;
};

// submit 완료 함수
scwin.sbm_gridview1_submitdone = function(e) {
    // 서버 완료 시간
    scwin.serverEnd = new Date();
    // 조회한 데이터 -> 데이터리스트에 입력후 그리드 렌더링
    var jsonData = e.responseJSON.dlt_gridview;
    dlt_gridview.setJSON(jsonData);
    // 렌더링 완료 시간
    scwin.renderEnd = new Date();
    // 측정된 시간 표기
    scwin.calcTime();
};

// 데이터 초기화
scwin.btn_clear_onclick = function(e) {
    dlt_gridview.setJSON([]);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Gridview를 활용한 Sample 예제입니다.<br/>데이터를 조회 할 때 서버 시간, 렌더링 시간을 측정하는 예제입니다.<br/>selectbox에서 데이터량을 선택하고 조회 버튼을 클릭 시 데이터 조회와 함께 시간을 측정합니다.<br/>조작 방법<br/>1. selectbox에서 조회 할 대이터량을 선택하고 조회 버튼을 클릭해 데이터를 조회합니다.<br/>2. download 버튼을 클릭해 excel을 다운로드 합니다.<br/>3. clean 버튼을 클릭해 GridView의 데이터를 초기화 합니다.<br/>4. upload 버튼을 클릭합니다.<br/>5. 3번에서 download한 excel 파일을 선택해 데이터를 업로드 합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 PC에 최적화 된 화면입니다. 모바일에서는 기능 일부가 작동하지 않을 수 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'ofh'},E:[{T:1,N:'xf:group',A:{class:'fr mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'time',id:'',style:'display: inline;'},E:[{T:1,N:'xf:group',A:{class:'tg',id:'',style:'display: inline-table;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Render: ',style:'display: inline-table;'}},{T:1,N:'w2:textbox',A:{class:'pt',id:'renderTime',label:'',style:'display: inline-table;color: red'}},{T:1,N:'w2:textbox',A:{id:'',label:'ms',style:'margin-right: 30px;margin-left: 5px;display: inline-table;'}}]},{T:1,N:'xf:group',A:{class:'tg',id:'',style:'display: inline-table;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Server: ',style:'display: inline-table;'}},{T:1,N:'w2:textbox',A:{class:'pt',id:'serverTime',label:'',style:'display: inline-table;color: red;'}},{T:1,N:'w2:textbox',A:{id:'',label:'ms',style:'margin-right: 30px;margin-left: 5px;display: inline-table;'}}]},{T:1,N:'xf:group',A:{class:'tg',id:'',style:'display: inline-table;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'Total :',style:'display: inline-table;'}},{T:1,N:'w2:textbox',A:{class:'pt',id:'totalTime',label:'',style:'display: inline-table;color: red;'}},{T:1,N:'w2:textbox',A:{id:'',label:'ms',style:'margin-right: 30px;margin-left: 5px;display: inline-table;'}}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'acb_size',ref:'',renderType:'',style:'width:70px;margin-left: 5px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1만'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'_1.json'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10만'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'_10.json'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_down',style:'',type:'button','ev:onclick':'scwin.btn_down_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'download'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm btn_line',id:'btn_clear',style:'width: 80px;',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'clean'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_up_onclick',id:'btn_up',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'upload'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'gwbox'},E:[{T:1,N:'w2:gridView',A:{adaptive:'',autoFit:'allColumn',autoFitMinWidth:'1187',class:'wq_gvw',columnMove:'false',dataList:'data:dlt_gridview',enterKeyMove:'','ev:onafteredit':'','ev:oncellclick':'scwin.grd_menu_oncellclick','ev:oneditkeyup':'scwin.grd_menu_oneditkeyup','ev:onkeyup':'','ev:onrowindexchange':'','ev:ontextimageclick':'scwin.grd_menu_ontextimageclick','ev:onviewchange':'',fixedColumnWithHidden:'true',focusMode:'row',id:'grd',ignoreCellClick:'false',keepDefaultColumnWidth:'true',rowNumHeaderValue:'순번',rowNumVisible:'true',rowNumWidth:'50',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'40',scrollByColumn:'false',style:'height:300px;',tooltipFormatter:'',useShiftKey:'true',userData3:'',visibleRowNum:'10',wheelRows:''},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',rowSpan:'2',style:'height:84px;',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',rowSpan:'2',style:'height:64px;',value:'예탁계좌',width:'79'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column109',inputType:'text',removeBorderStyle:'false',rowSpan:'2',style:'height:64px;',value:'예탁계좌명',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'false',id:'column104',inputType:'text',removeBorderStyle:'false',rowSpan:'2',style:'height:64px;',value:'보관기관',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',hidden:'false',id:'column105',inputType:'text',removeBorderStyle:'false',rowSpan:'2',style:'height:64px;',value:'국가',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'2',displayMode:'label',id:'column25',inputType:'text',removeBorderStyle:'false',style:'height:64px;',value:'주식',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'2',displayMode:'label',id:'column23',inputType:'text',removeBorderStyle:'false',style:'height:64px;',value:'채권',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'2',displayMode:'label',id:'column21',inputType:'text',removeBorderStyle:'false',style:'height:64px;',value:'기타',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',colSpan:'2',displayMode:'label',id:'column99',inputType:'text',removeBorderStyle:'false',style:'height:64px;',value:'전체증권',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column89',inputType:'text',removeBorderStyle:'false',rowSpan:'2',style:'height:64px;',value:'기준일',width:'70'}}]},{T:1,N:'w2:row',A:{id:'row7',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column43',inputType:'text',removeBorderStyle:'false',style:'height:20px;',value:'평균보관금액<br/>(USD)',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column51',inputType:'text',removeBorderStyle:'false',style:'height:20px;',value:'점유율',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column42',inputType:'text',removeBorderStyle:'false',style:'height:20px;',value:'평균보관금액<br/>(USD)',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column57',inputType:'text',removeBorderStyle:'false',style:'height:20px;',value:'점유율',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column41',inputType:'text',removeBorderStyle:'false',style:'height:20px;',value:'평균보관금액<br/>(USD)',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column60',inputType:'text',removeBorderStyle:'false',style:'height:20px',value:'점유율',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column100',inputType:'text',removeBorderStyle:'false',style:'height:20px',value:'평균보관금액<br/>(USD)',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column95',inputType:'text',removeBorderStyle:'false',style:'height:20px',value:'점유율',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'height:38px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',customFormatter:'scwin.setFontFormat',displayMode:'label',hidden:'false',id:'account',inputType:'text',readOnly:'true',style:'height:38px;',width:'79'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'account_name',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'owner',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'national',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'stock_usd',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'stock_rate',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bond_usd',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'bond_rate',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'etc_usd',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'etc_rate',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'tot_usd',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'tot_rate',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'date',inputType:'text',removeBorderStyle:'false',style:'height:38px',width:'70'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row8',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column132',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column76',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'79'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column113',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column75',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column74',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column73',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column72',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column70',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column69',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column67',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column66',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column103',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'130'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column98',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayFormat:'#,###,### 건',displayMode:'label',expression:'COUNT("chk")',id:'column93',inputType:'expression',removeBorderStyle:'false',style:'height:20px',value:'',width:'70'}}]}]}]}]}]}]}]}]})