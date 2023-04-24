/*amd /page/P00109.xml 5119 9ea50c613f2e6e63f7ba8bf03240422bdb41739a495d1265e7f53ff31013c777 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220930'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [업로드할 엑셀 파일 다운로드] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    //엑셀 업로드 양식 다운로드
    $c.frame.downloadSource("/page/resource/SP5_EXAMPLE_P00109_UPLOAD.xlsx");
};

/**
 * 버튼 [엑셀 업로드 - 기본] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        headerExist: "1" //[default: 0] Excel 파일에서 그리드의 데이터에 header가 있는지 여부(1이면 header 존재 0이면 없음)
    };

    //GridView "grd_exam1"의 엑셀 업로드 실행
    grd_exam1.advancedExcelUpload(jsnOptions);
};

/**
 * 버튼 [엑셀 업로드 - trim 적용] 클릭 시
 */
scwin.btn_ex3_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        headerExist: "1", //[default: 0] Excel 파일에서 그리드의 데이터에 header가 있는지 여부(1이면 header 존재 0이면 없음)
        trim: 1 //[default: 0, 1] 엑셀 각각의 셀데이터 좌, 우에 공백이 있는 경우 제거할지 여부 (1이면 제거, 0이면 유지)
    };

    //GridView "grd_exam1"의 엑셀 업로드 실행
    grd_exam1.advancedExcelUpload(jsnOptions);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 엑셀 업로드 옵션 중 "trim" 설정의 예제입니다.<br/>옵션 "trim"은 업로드할 엑셀 파일의 셀 데이터에 trim(앞뒤 공백 제거)을 적용하는 기능을 제공합니다.<br/>[엑셀 업로드 파일 다운로드] 버튼을 클릭하여 미리 생성된 엑셀 양식으로 업로드 테스트를 진행하는 것을 권장합니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'example_div_tb_style_wrap'},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 업로드 파일 다운로드'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 업로드 - 기본'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',id:'btn_ex3',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true','ev:onclick':'scwin.btn_ex3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 업로드 - trim 적용'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_books',defaultCellHeight:'24',id:'grd_exam1',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',autoFitMinWidth:'250'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'150'}}]}]}]}]}]}]}]}]})