/*amd /page/P00184.xml 9580 334aa924e4caa137a1d1f4a73ef0d554ced392845d2d2cb6cf3ff9cf61e2ae27 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221223'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{id:'published_date',name:'출간일',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'공정하다는 착각'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20201201'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'불편한 편의점'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20210420'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'book_name',E:[{T:4,cdata:'사람일까 상황일까'}]},{T:1,N:'published_date',E:[{T:4,cdata:'20190826'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [autoFit의 설정 값을 'allColumn'으로 지정하기] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsnAutoFitOptions;

    jsnAutoFitOptions = {
        type: "allColumn"  //autoFit 타입
        //, minWidth : "300" //설정 값은 px 단위이며, gridView의 width가 설정 값보다 작아질 경우에 각 컬럼의 width의 합이 설정 값로 고정되어 계산됩니다. GridView의 속성 autoFitMinWidth과는 다른 기능입니다.
    };

    //GridView [grd_exam1]에 autoFit 속성을 지정합니다.
    grd_exam1.setAutoFit(jsnAutoFitOptions);
};

/**
 * 버튼 [autoFit의 설정 값을 'lastColumn'으로 지정하기] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsnAutoFitOptions;

    jsnAutoFitOptions = {
        type: "lastColumn"  //autoFit 타입
    };

    //GridView [grd_exam2]에 autoFit 속성을 지정합니다.
    grd_exam2.setAutoFit(jsnAutoFitOptions);
};

/**
 * 버튼 [속성 autoFit 설정 해제하기] 클릭 시
 */
scwin.btn_ex3_onclick = function (e) {
    //GridView [grd_exam3]에 autoFit 속성을 해제합니다.
    grd_exam3.clearAutoFit();
};



}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 속성 autoFit을 스크립트로 지정하는 예제입니다.<br/>GridView의 함수 setAutoFit, clearAutoFit으로 제어할 수 있습니다.<br/>- 함수 setAutoFit : autoFit 속성을 지정합니다.<br/>- 함수 clearAutoFit : autoFit 속성을 해제합니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'함수 setAutoFit은 현재 그리드의 상태(여백, 컬럼 폭의 합 등)를 기준으로 계산됩니다.<br/>최초 그려진 GridView를 기준으로 재 설정하고자 하는 경우는 먼저 함수 clearAutoFit으로 설정을 해제해야 합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'속성 autoFit 설정 값을 allColumn으로 지정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 버튼을 클릭하고 GridView의 컬럼 너비를 확인합니다.<br/>이 GridView의 autoFit 설정 값은 \'none\'(사용 안함)입니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'autoFit의 설정 값을 \'allColumn\'으로 지정하기'}]}]}]},{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'data:dlt_books',id:'grd_exam1',style:'height: 90px;',visibleRowNum:'all',defaultCellHeight:'24',autoFit:'none',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'74',inputType:'text',style:'',id:'column1',value:'출간일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column3',value:'도서명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'74',inputType:'text',style:'',id:'published_date',value:'',displayMode:'label',dataType:'date',displayFormat:'yyyy-MM-dd'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'book_name',value:'',displayMode:'label',textAlign:'left'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'속성 autoFit 설정 값을 lastColumn으로 지정하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 버튼을 클릭하고 GridView의 컬럼 너비를 확인합니다.<br/>이 GridView의 autoFit 설정 값은 \'none\'(사용 안함)입니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'autoFit의 설정 값을 \'lastColumn\'으로 지정하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'none',class:'wq_gvw',dataList:'data:dlt_books',defaultCellHeight:'24',id:'grd_exam2',readOnly:'true',style:'height: 90px;',visibleRowNum:'all'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'출간일',width:'74'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'도서명',width:'110'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',style:'',value:'',width:'74'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',style:'',textAlign:'left',value:'',width:'110'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'속성 autoFit 설정 해제하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'아래의 버튼을 클릭하고 GridView의 컬럼 너비를 확인합니다.<br/>이 GridView의 autoFit 설정 값은 \'lastColumn\'입니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'속성 autoFit 설정 해제하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',class:'wq_gvw',dataList:'data:dlt_books',defaultCellHeight:'24',id:'grd_exam3',readOnly:'true',style:'height: 90px;',visibleRowNum:'all'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'출간일',width:'74'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'도서명',width:'110'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',style:'',value:'',width:'74'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',style:'',textAlign:'left',value:'',width:'110'}}]}]}]}]}]}]}]}]}]}]})