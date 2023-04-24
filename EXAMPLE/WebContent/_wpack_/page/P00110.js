/*amd /page/P00110.xml 6230 f1ac226f1f9d8208b54e07360013f387f40ddccea11e748e0aaa39ba170854fe */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220930'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_excel',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'number_1',name:'number_1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'number_2',name:'number_2'}},{T:1,N:'w2:column',A:{id:'date_1',name:'date_1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'date_2',name:'date_2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.initPage();
};

/**
 * 화면 초기화
 */
scwin.initPage = function () {
    var strCurDate;

    strCurDate = $p.getCurrentServerDate("yyyyMMdd");

    dlt_excel.setJSON([
        { "number_1": "2345600", "number_2": "2345600", "date_1": strCurDate, "date_2": strCurDate },
        { "number_1": "78900", "number_2": "78900", "date_1": strCurDate, "date_2": strCurDate }
    ]);
};

/**
 * 버튼 [엑셀 다운로드 - 기본] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00110_default.xlsx"
    };

    //GridView의 엑셀다운로드 API를 호출합니다.
    grd_exam1.advancedExcelDownload(jsnOptions);
};

/**
 * 버튼 [엑셀 다운로드 - useDataFormat 설정] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00110_useDataFormat.xlsx",
        useDataFormat: true //[default: 없음] "true"인 경우 dataType에 따라 Excel 파일에 표시 형식을 출력. dataType="text"인 셀은 Excel의 표시형식에 '텍스트' 출력, dataType="number" 혹은 "bigDecimal" 셀은 "숫자" 출력.
    };

    //GridView의 엑셀다운로드 API를 호출합니다. 
    grd_exam1.advancedExcelDownload(jsnOptions);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 엑셀 다운로드 시 엑셀에 설정할 셀의 데이터의 타입(유형)을 지정하는 예제입니다.<br/>이 기능은 엑셀 다운로드 옵션 "useDataFormat"과 GridView 컬럼의 excelCellType 속성을 통해 사용할 수 있습니다.',style:'',class:'mb10'}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView에는 숫자(number)형과 날짜(date)형 데이터가 각 컬럼에 할당되었습니다.<br/>GridView의 헤더에 "no excelCellType" 문자열이 포함된 경우는 excelCellType 속성이 지정되지 않았습니다.',style:'',class:'mb10'}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'각 엑셀 다운로드 버튼을 클릭하여 엑셀을 다운로드 합니다.<br/>다운로드된 엑셀의 셀의 "표현 형식"에 설정된 값을 비교합니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - 기본 동작'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',id:'btn_ex2',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true','ev:onclick':'scwin.btn_ex2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - useDataFormat 사용'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'400',class:'wq_gvw',dataList:'data:dlt_excel',defaultCellHeight:'24',id:'grd_exam1',rowNumWidth:'26',style:'height:80px;',visibleRowNum:'2',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column6',value:'number 1<br/>no excelCellType',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'number 2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column4',value:'date 1<br/>no excelCellType',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'date 2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'number_1',displayMode:'label',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'number_2',displayMode:'label',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'date_1',displayMode:'label',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'date_2',displayMode:'label',excelCellType:'date',dataType:'date'}}]}]}]}]}]}]}]}]})