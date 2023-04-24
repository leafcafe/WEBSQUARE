/*amd /page/P00158S01.xml 4102 0a8188725515ae058e9cfec61e5478fd7e23234cb26d57f1ee8e1894f2ea1647 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221104'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    tac_exam1.disableTab(1)
};


/**
 * 버튼 [비활성화 하기] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    //TabControl [tac_exam1] 비활성화 설정
    tac_exam1.setDisabled(true);
};

/**
 * 버튼 [활성화 하기] 클릭 시
 */
scwin.btn_ex1_1_onclick = function (e) {
    //TabControl [tac_exam1] 활성화 설정
    tac_exam1.setDisabled(false);
};

/**
 * 버튼 [화면 초기화] 클릭 시
 */
scwin.btn_ex1_3_onclick = function (e) {
    $p.reinitialize();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:'padding: 6px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'P00158S01.xml',style:'color: dodgerblue;font-size: 1.4em;font-weight: bold;'}},{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal mb10',escape:'false',id:'',label:'TabControl의 속성 keepDisabledTab이 false로 지정되어있습니다.<br/>두 번째 탭이 비활성화된 상태입니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box',id:'',style:'margin-bottom: 0px !important;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비활성화 하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_ex1_1_onclick',id:'btn_ex1_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'활성화 하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',id:'btn_ex1_3',style:'',type:'button','ev:onclick':'scwin.btn_ex1_3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화면 초기화'}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam1',style:'position: relative;height: 80px;',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true',keepDisabledTab:'false'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:60px;height:30px;',id:'tabs1',label:'TAB1'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:110px;height:30px;',id:'tabs2',label:'TAB2 - 비활성화'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content1'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'SUB TAB 1 Content 영역',style:'font-size: 1.2em;padding: 10px;'}}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content2'},E:[{T:1,N:'xf:group',A:{id:'',style:'padding: 10px;'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 100px;height: 24px;margin-right: 10px;',id:''}},{T:1,N:'xf:trigger',A:{useDefaultLabel:'true',localeRef:'',style:'min-width: 30px; height: 26px;',id:'',type:'',class:'btn_com'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임시 버튼'}]}]}]}]}]}]}]}]}]}]})