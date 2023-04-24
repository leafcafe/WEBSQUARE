/*amd /page/P00244.xml 6617 c09867e96df55064259da1ed93a6780394f6ebec8e465ee05e26ade93695a6b9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230310'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'price',name:'정가'}},{T:1,N:'w2:column',A:{id:'published_date',name:'출간일',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'사람일까 상황일까'}]},{T:1,N:'price',E:[{T:4,cdata:'28000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20190826'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'내가 틀릴 수도 있습니다'}]},{T:1,N:'price',E:[{T:4,cdata:'16000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20220418'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'공정하다는 착각'}]},{T:1,N:'price',E:[{T:4,cdata:'18000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20201201'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'불편한 편의점'}]},{T:1,N:'price',E:[{T:4,cdata:'14000'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20210420'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [CSV 다운로드 - (기본 값) 화면의 출력 값으로 다운로드] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00244_TYPE1.csv", //파일명
        type: "1" //다운로드할 데이터 - 화면의 출력 값
    };

    //GridView 'grd_exam1'의 데이터를 CSV 형식으로 다운로드합니다.
    grd_exam1.saveCSV(jsnOptions);
};

/**
 * 버튼 [CSV 다운로드 - value로 다운로드] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsnOptions;

    jsnOptions = {
        fileName: "SP5_EXAMPLE_P00244_TYPE2.csv", //파일명
        type: "0" //다운로드할 데이터 - value

    };

    //GridView 'grd_exam1'의 데이터를 CSV 형식으로 다운로드합니다.
    grd_exam1.saveCSV(jsnOptions);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'GridView의 데이터를 CSV로 다운로드 시 다운로드할 데이터를 지정하는 예제입니다.<br/>GridView의 함수 \'saveCSV\'의 옵션 \'type\'으로 다운로드할 데이터를 지정합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'옵션의 설명은 아래와 같습니다.<br/>- type : [default: 1, 0] 사용할 데이터. 0: value 값 사용. 1: 화면의 출력 값 사용.',style:''}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'더보기',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'다운로드할 데이터를 화면의 출력값으로 지정하고 구분자를 \',\'(쉼표)로 설정하고자 할 때, 출력값에 \',\'(쉼표)를 제거하는 옵션을 지정할 수 있습니다.<br/>관련 옵션은 아래와 같습니다.<br/>- delim : [default: \';\'] CSV 파일에서 데이터를 구분할 구분자<br/>- removeQuotation : [default: 0, 1] value에 \',\'(쉼표/comma)의 제거 여부 (0 : 유지, 1 : 제거)',style:'margin-bottom: 6px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CSV 다운로드 - (기본 값) 화면의 출력 값으로 다운로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',localeRef:'',style:'min-width:30px;height:26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'CSV 다운로드 - value로 다운로드'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'wq_gvw',dataList:'data:dlt_books',defaultCellHeight:'24',id:'grd_exam1',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'178'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출간일',width:'83'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'178'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'63'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',width:'83'}}]}]}]}]}]}]}]}]})