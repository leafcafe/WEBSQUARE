/*amd /page/P00105.xml 6777 822a223a9175be36ca11afc0a2fe13a5a17cc16c044bc9cc6951579504e92c47 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230306'}]},{T:1,N:'version',E:[{T:4,cdata:'02'}]},{T:1,N:'description',E:[{T:4,cdata:'예제 설명 문구 수정'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220916'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'number',id:'price',name:'정가'}},{T:1,N:'w2:column',A:{id:'price_custom',name:'기능 비교 컬럼',dataType:'number'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'사람일까 상황일까'}]},{T:1,N:'price',E:[{T:4,cdata:'28000'}]},{T:1,N:'price_custom',E:[{T:4,cdata:'28000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'내가 틀릴 수도 있습니다'}]},{T:1,N:'price',E:[{T:4,cdata:'16000'}]},{T:1,N:'price_custom',E:[{T:4,cdata:'16000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'공정하다는 착각'}]},{T:1,N:'price',E:[{T:4,cdata:'18000'}]},{T:1,N:'price_custom',E:[{T:4,cdata:'18000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'정글만리'}]},{T:1,N:'price',E:[{T:4,cdata:'16500'}]},{T:1,N:'price_custom',E:[{T:4,cdata:'16500'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'불편한 편의점'}]},{T:1,N:'price',E:[{T:4,cdata:'14000'}]},{T:1,N:'price_custom',E:[{T:4,cdata:'14000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'인간 실격'}]},{T:1,N:'price',E:[{T:4,cdata:'9000'}]},{T:1,N:'price_custom',E:[{T:4,cdata:'9000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'어린왕자'}]},{T:1,N:'price',E:[{T:4,cdata:'2000'}]},{T:1,N:'price_custom',E:[{T:4,cdata:'2000'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'JavaScript Patterns'}]},{T:1,N:'price',E:[{T:4,cdata:'22000'}]},{T:1,N:'price_custom',E:[{T:4,cdata:'22000'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [엑셀 다운로드 - 기본] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00105_TYPE1.xlsx"
    };

    grd_exam1.advancedExcelDownload(jsnOptions);
};

/**
 * 버튼 [엑셀 다운로드 - "customToDataType" 옵션 활성화] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00105_TYPE2.xlsx", //엑셀의 파일명
        customToDataType: "true"   //inputType이 custom인 경우 엑셀의 서식을 DataList에 정의된 DataType 형으로 지정합니다.(엑셀 내 연산이 가능합니다.)
    };

    //GridView "grd_exam1"의 엑셀 다운로드 실행
    grd_exam1.advancedExcelDownload(jsnOptions);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 엑셀 다운로드 옵션 중 "customToDataType" 설정의 예제입니다.<br/>"customToDataType"을 "true"로 지정하면 엑셀에 숫자형 서식을 적용합니다.<br/>기본 동작은 엑셀에 "일반" 서식으로 적용됩니다.',style:'',class:'mb_def'}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'옵션 "customToDataType"은 아래의 조건일 때 동작됩니다.<br/>GridView 컬럼의 inputType이 custom이고, DataList의 dataType이 number 또는 bigdecimal으로 설정.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - 기본'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',id:'btn_ex2',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true','ev:onclick':'scwin.btn_ex2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 다운로드 - "customToDataType" 옵션 활성화'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_books',defaultCellHeight:'24',id:'grd_exam1',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',rowNumVisible:'true',rowNumWidth:'26',autoFitMinWidth:'280'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column4',value:'inputType<br/>custom',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'140'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'custom',id:'price_custom',displayMode:'label',dataType:'number',displayFormat:'#,###'}}]}]}]}]}]}]}]}]})