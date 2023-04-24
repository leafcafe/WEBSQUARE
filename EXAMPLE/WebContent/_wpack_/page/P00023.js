/*amd /page/P00023.xml 5280 71047217e227c7daf46347c06be32aef7f3a99d40f2c5ee28c202f2b8c5137b5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221223'}]},{T:1,N:'version',E:[{T:4,cdata:'02'}]},{T:1,N:'description',E:[{T:4,cdata:'[페이지 열기] 실행 함수 수정'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
};

/**
 * InputBox
 * [실행1] 버튼 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var strCmpType;

    //InputBox 컴포넌트의 plugin name 반환받기
    strCmpType = ibx_ex1.getPluginName();

    //반환값 alert
    alert(strCmpType);
};

/**
 * InputCalendar
 * [실행2] 버튼 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var strCmpType;

    //InputCalendar 컴포넌트의 plugin name 반환받기
    strCmpType = ica_ex1.getPluginName();

    //반환값 alert
    alert(strCmpType);
};

/**
 * Checkbox
 * [실행3] 버튼 클릭 시
 */
scwin.btn_ex3_onclick = function (e) {
    var strCmpType;

    //Checkbox 컴포넌트의 plugin name 반환받기
    strCmpType = cbx_ex1.getPluginName();

    //반환값 alert
    alert(strCmpType);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'컴포넌트의 타입을 반환받는 예시입니다.<br/>전체 컴포넌트의 타입은 아래의 링크에서 확인할 수 있습니다.',style:''}},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{label:'링크 : ',style:'',id:'',class:'mr_def'}},{T:1,N:'w2:anchor',A:{outerDiv:'false','ev:onclick':'$c.frame.openExamPage',style:'',id:'btn_ref_link',class:'example_ref_link',userData1:'P00087'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'페이지 열기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'InputBox - 컴포넌트 타입 반환받기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',class:'mr_def',id:'ibx_ex1',style:'width: 140px;'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행1'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'InputCalendar - 컴포넌트 타입 반환받기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'mr_def',focusOnDateSelect:'false',footerDiv:'false',id:'ica_ex1',renderDiv:'true',renderType:'component',rightAlign:'false',style:'width: 140px;'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행2'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Checkbox - 컴포넌트 타입 반환받기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'mr_def',cols:'',id:'cbx_ex1',ref:'',rows:'1',selectedindex:'-1',style:'min-width: 140px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'type1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'type2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행3'}]}]}]}]}]}]}]}]}]})