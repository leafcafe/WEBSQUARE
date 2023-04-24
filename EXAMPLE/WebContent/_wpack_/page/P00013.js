/*amd /page/P00013.xml 11227 c24cb8aadf36225d4dbee87cd6abb0c750adff5c0109fc7f5c16436d9c077bcb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_grid',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.setGridData();
};

/**
 * gridView의 데이터 생성 및 할당
 */
scwin.setGridData = function () {
    var arr = [];
    var i, j;

    for (i = 0; i < 4; i++) {
        if (i == 0) {
            arr.push("A");
        } else if (i == 1) {
            arr.push("B");
        } else if (i == 2) {
            arr.push("C");
        } else if (i == 3) {
            arr.push("D");
        }

        for (j = 0; j < 4; j++) {
            arr.push(Math.floor(Math.random() * 1000));
        }
    }

    dlt_grid.setData(arr);
};

// line chart
scwin.btn_linechart_onclick = function (e) {
    var options = {};
    options.fileName = "line.xlsx";
    options.type = "1";
    options.showProcess = false;
    options.chart = {
        "chartName": "line",
        "chartType": "",
        "title": "차트 타이틀",
        "yTitle": "Y 타이틀",
        "xTitle": "X 타이틀",
        "startRowIndex": 0,
        "startColIndex": 5,
        "endRowIndex": 20,
        "endColIndex": 15,
        "serAxis": "true",
        "catAxis": "true",
        "catAxisRange": {
            "startColIndex": 1,
            "startRowIndex": 0,
            "endColIndex": 4,
            "endRowInex": 0
        },
        "serAxisRange": {
            "startColIndex": 0,
            "startRowIndex": 1,
            "endColIndex": 0,
            "endRowIndex": 4
        },
        "dataAxisRange": {
            "startColIndex": 1,
            "startRowIndex": 1,
            "endColIndex": 4,
            "endRowIndex": 4
        },
        "catGridLines": "true",    // 가로
        "serGridLines": "true",    // 세로
        "legend": "true",          // 범례
        "legendPosition": "bottom" // 범례위치
    };

    var infoArr = [];
    grd_ex01.advancedExcelDownload(options, infoArr);
};

// bar chart
scwin.btn_barchart_onclick = function (e) {
    var options = {};
    options.fileName = "bar.xlsx";
    options.type = "1";
    options.showProcess = false;
    options.chart = {
        "chartName": "bar",
        "chartType": "",
        "title": "차트 타이블",
        "yTitle": "Y 타이틀",
        "xTitle": "X 타이틀",
        "startRowIndex": 0,
        "startColIndex": 5,
        "endRowIndex": 20,
        "endColIndex": 15,
        "serAxis": "true",
        "catAxis": "true",
        "catAxisRange": {
            "startColIndex": 1,
            "startRowIndex": 0,
            "endColIndex": 4,
            "endRowIndex": 0
        },
        "serAxisRange": {
            "startColIndex": 0,
            "startRowIndex": 1,
            "endColIndex": 0,
            "endRowIndex": 4
        },
        "dataAxisRange": {
            "startColIndex": 1,
            "startRowIndex": 1,
            "endColIndex": 4,
            "endRowIndex": 1
        },
        "catGridLines": "true",     // 가로
        "serGridLines": "true",     // 세로
        "legend": "true",           // 범례
        "legendPosition": "bottom", //범례위치
    };

    var infoArr = [];
    grd_ex01.advancedExcelDownload(options, infoArr);
};

// area chart
scwin.btn_areachart_onclick = function (e) {
    var options = {};
    options.fileName = "area.xlsx";
    options.type = "1";
    options.showProcess = false;
    options.chart = {
        "chartName": "area",
        "chartType": "",
        "title": "차트 타이틀",
        "yTitle": "Y 타이틀",
        "xTitle": "X 타이틀",
        "startRowIndex": 0,
        "startColIndex": 5,
        "endRowIndex": 20,
        "endColIndex": 15,
        "serAxis": "true",
        "catAxis": "true",
        "catAxisRange": {
            "startColIndex": 1,
            "startRowIndex": 0,
            "endColIndex": 4,
            // "endRowIndex": 0 필요없을듯
        },
        "serAxisRange": {
            "startColIndex": 0,
            "startRowIndex": 1,
            // "endColIndex": 0, 필요없을듯
            "endRowIndex": 4
        },
        "dataAxisRange": {
            "startColIndex": 1,
            "startRowIndex": 1,
            "endColIndex": 4,
            "endRowIndex": 4
        },
        "catGridLines": "true",    // 가로
        "serGridLines": "true",    // 세로
        "legend": "true",          // 범례
        "legendPosition": "bottom" // 범례위치
    };

    var infoArr = [];
    grd_ex01.advancedExcelDownload(options, infoArr);
};

// pie chart
scwin.btn_piechart_onclick = function (e) {
    var options = {};
    options.fileName = "pie.xlsx";
    options.type = "1";
    options.showProcess = false;
    options.chart = {
        "chartName": "pie",
        "chartType": "",
        "title": "차트 타이틀",
        "yTitle": "y 타이틀",
        "xTitle": "x 타이틀",
        "startRowIndex": 0,
        "startColIndex": 5,
        "endRowIndex": 20,
        "endColIndex": 15,
        "serAxis": "true",
        "catAxis": "true",
        "catAxisRange": {
            "startColIndex": 1,
            "startRowIndex": 0,
            "endColIndex": 4,
        },
        "serAxisRange": {
            "startColIndex": 0,
            "startRowIndex": 1,
            "endColIndex": 0,
            "endRowIndex": 1
        },
        "dataAxisRange": {
            "startColIndex": 1,
            "startRowIndex": 1,
            "endColIndex": 4,
            "endRowIndex": 1
        },
        "catGridLines": "true",    // 가로
        "serGridLines": "true",    // 세로
        "legend": "true",          // 범례
        "legendPosition": "bottom" // 범례위치
    };

    var infoArr = [];
    grd_ex01.advancedExcelDownload(options, infoArr);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 ExcelDownload 기능 중 엑셀에 차트형 이미지를 포함하는 기능의 예시입니다.<br/>이 기능은 데이터를 차트형 이미지로 변환한 뒤 엑셀로 내려주기 때문에 사용자 PC 환경에 따라 대용량 데이터의 경우 속도 이슈가 발생할 수 있습니다.<br/>프로젝트 적용 전, 최저 사양 PC에서 적정 데이터를 확인하여 제한하는 것을 권장합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_linechart_onclick',style:'width:150px;margin-right:10px;',id:'btn_linechart',type:'button',class:'btn_exam_exec'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Line chart Download'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_barchart_onclick',style:'width:150px;margin-right:10px;',id:'btn_barchart',type:'button',class:'btn_exam_exec'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Bar chart Download'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_areachart_onclick',style:'width:160px;margin-right:10px;',id:'btn_areachart',type:'button',class:'btn_exam_exec'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Area chart Download'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_piechart_onclick',style:'width:150px;margin-right:10px;',id:'btn_piechart',type:'button',class:'btn_exam_exec'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Pie chart Download'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',syncScroll:'false',summaryAuto:'false',useShiftKey:'true',scrollByColumn:'false',summaryOnlyAuto:'false',defaultCellHeight:'26',applyAllColumnStyle:'false',dataList:'data:dlt_grid',style:'height:150px;',ignoreCellClick:'false',id:'grd_ex01',autoFit:'allColumn',ignoreToggleOnDisabled:'false',class:'wq_gvw',autoFitMinWidth:'500',visibleRowNumFix:'true',visibleRowNum:'4'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'-',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'Field1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'Field2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'Field3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',value:'Field4',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{dataType:'bigDecimal',width:'70',inputType:'text',id:'col1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'bigDecimal',width:'70',inputType:'text',id:'col2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'bigDecimal',width:'70',inputType:'text',id:'col3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'bigDecimal',width:'70',inputType:'text',id:'col4',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'bigDecimal',width:'70',inputType:'text',id:'col5',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]}]}]})