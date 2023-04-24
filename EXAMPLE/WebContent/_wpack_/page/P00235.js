/*amd /page/P00235.xml 8573 8ccf563bc14e138ef626673f2b46d25def44d2fbbc5a7847cb6182f541cee622 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230310'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'price',name:'정가'}},{T:1,N:'w2:column',A:{id:'published_date',name:'출간일',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'사람일까 상황일까'}]},{T:1,N:'price',E:[{T:4,cdata:'28000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20190826'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'내가 틀릴 수도 있습니다'}]},{T:1,N:'price',E:[{T:4,cdata:'16000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20220418'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'공정하다는 착각'}]},{T:1,N:'price',E:[{T:4,cdata:'18000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20201201'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'불편한 편의점'}]},{T:1,N:'price',E:[{T:4,cdata:'14000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20210420'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [엑셀 다운로드 - 기본] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00235_TYPE1.xlsx"
    };

    grd_exam1.advancedExcelDownload(jsnOptions);
};

/**
 * 버튼 [엑셀 다운로드 - 바디의 스타일 적용] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00235_TYPE2.xlsx", //엑셀의 파일명
        useStyle: "false", //필수 지정
        bodyColor: "#F0E68C", //바디의 배경색 - Khaki
        bodyFontName: "Arial", //바디의 글자체
        bodyFontSize: "13", //바디의 글자 크기
        bodyFontColor: "#0000FF", //바디의 글자색 - Blue
        bodyFontBold: "true" //바디의 글자 굵게 적용
    };

    //useStyle <String:N> [default: false] 다운로드시 css를 제외한, style을 excel에도 적용할 지 여부 (배경색,폰트)
    //bodyColor : <String:N> [default: #FFFFFF] Excel 파일에서 그리드의 body의 색
    //bodyFontName : <String:N> [default: 없음] Excel 파일에서 그리드의 body의 font name
    //bodyFontSize : <String:N> Excel 파일에서 그리드의 body의 font size
    //bodyFontColor : <String:N> [default: 없음] Excel 파일에서 그리드의 body의 font 색
    //bodyFontBold : <String:N> [default: 없음] Excel 파일에서 그리드의 body의 Bold 적용 유무

    //GridView "grd_exam1"의 엑셀 다운로드 실행
    grd_exam1.advancedExcelDownload(jsnOptions);
};

/**
 * 버튼 [엑셀 다운로드 - 바디의 홀수행, 짝수행 배경색 적용] 클릭 시
 */
scwin.btn_ex3_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00235_TYPE3.xlsx", //엑셀의 파일명
        oddRowBackgroundColor: "#F0E68C", //바디의 홀수행 배경색 - Khaki
        evenRowBackgroundColor: "#FFA500" //바디의 짝수행 배경색 - Orange
    };

    //oddRowBackgroundColor : <String:N> [default: 없음] Excel 파일에서 그리드 body의 홀수 줄의 배경색
    //evenRowBackgroundColor : <String:N> [default: 없음] Excel 파일에서 그리드 body의 짝수 줄의 배경색

    //GridView "grd_exam1"의 엑셀 다운로드 실행
    grd_exam1.advancedExcelDownload(jsnOptions);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'GridView의 엑셀 다운로드(함수 \'advancedExcelDownload\') 옵션 중 바디의 스타일을 적용할 수 있는 옵션 설정의 예제입니다.<br/>바디 스타일을 지정할 수 있는 옵션은 아래와 같습니다.<br/>- bodyColor : [default: #FFFFFF] Excel 파일에서 그리드의 body의 색<br/>- bodyFontName : [default: 없음] Excel 파일에서 그리드의 body의 font name<br/>- bodyFontSize : Excel 파일에서 그리드의 body의 font size<br/>- bodyFontColor : [default: 없음] Excel 파일에서 그리드의 body의 font 색<br/>- bodyFontBold : [default: 없음] Excel 파일에서 그리드의 body의 Bold 적용 유무<br/>- oddRowBackgroundColor : [default: 없음] Excel 파일에서 그리드 body의 홀수 줄의 배경색<br/>- evenRowBackgroundColor : [default: 없음] Excel 파일에서 그리드 body의 짝수 줄의 배경색',style:''}},{T:1,N:'w2:textbox',A:{class:'txt_info_important',escape:'false',id:'',label:'옵션 bodyColor, bodyFontName, bodyFontSize, bodyFontColor, bodyFontBold는 옵션 \'useStyle\'을 \'false\'로 지정해야 동작합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'다운로드된 엑셀 파일의 바디 영역의 스타일을 비교합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - 기본'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',localeRef:'',style:'min-width:30px;height:26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - 바디의 스타일 적용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',localeRef:'',style:'min-width:30px;height:26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - 바디의 홀수행, 짝수행 배경색 적용'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'wq_gvw',dataList:'data:dlt_books',defaultCellHeight:'24',id:'grd_exam1',readOnly:'true',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'178'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출간일',width:'83'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'178'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'63'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',width:'83'}}]}]}]}]}]}]}]}]})