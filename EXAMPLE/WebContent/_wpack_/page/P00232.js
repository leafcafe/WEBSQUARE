/*amd /page/P00232.xml 5956 9eb4c87689592f0780b8af0a634b8bce8b542d1afd7f40465d4a4b4fa1ae1862 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230310'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'number',id:'price',name:'정가'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'   사람일까 상황일까   '}]},{T:1,N:'price',E:[{T:4,cdata:'28000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'      내가 틀릴 수도 있습니다'}]},{T:1,N:'price',E:[{T:4,cdata:'16000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'  공정하다는 착각  '}]},{T:1,N:'price',E:[{T:4,cdata:'18000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'불편한 편의점'}]},{T:1,N:'price',E:[{T:4,cdata:'14000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'인간 실격'}]},{T:1,N:'price',E:[{T:4,cdata:'9000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'어린왕자'}]},{T:1,N:'price',E:[{T:4,cdata:'2000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'JavaScript Patterns'}]},{T:1,N:'price',E:[{T:4,cdata:'22000'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [엑셀 다운로드 - 기본] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00232_TYPE1.xlsx"
    };

    grd_exam1.advancedExcelDownload(jsnOptions);
};

/**
 * 버튼 [엑셀 다운로드 - 데이터 좌우 공백 제거] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00232_TYPE2.xlsx", //엑셀의 파일명
        trim: "true" //데이터 좌우 공백 제거
    };
    //options.trim <String:N> [default: false] gridView 데이터를 좌우 공백 적용 유무 (true 설정시 공백 제거 후 적용)

    //GridView "grd_exam1"의 엑셀 다운로드 실행
    grd_exam1.advancedExcelDownload(jsnOptions);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'GridView의 엑셀 다운로드(함수 \'advancedExcelDownload\') 옵션 중 \'trim\' 설정의 예제입니다.<br/>옵션 \'trim\'은 데이터의 좌우 공백 제거의 여부를 지정할 수 있습니다.<br/>false : (기본 값) 좌우 공백 제거하지 않음<br/>true : 좌우 공백 제거',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'다운로드된 엑셀 파일의 컬럼 \'도서명\'의 데이터의 좌우 공백을 비교합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'이 예제는 데이터의 좌우 공백을 표현하기 위해 컬럼 \'도서명\'에 class \'P00000_preColumn\'이 적용되어 있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - 기본'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - 데이터 좌우 공백 제거'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'250',class:'wq_gvw',dataList:'data:dlt_books',defaultCellHeight:'24',id:'grd_exam1',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'170'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'170',class:'P00000_preColumn'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'80'}}]}]}]}]}]}]}]}]})