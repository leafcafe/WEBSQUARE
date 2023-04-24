/*amd /page/P00029.xml 8096 1fc2ad2ab37c72e57d9a57a1c8657387b281f73da07712df60866c54db0c32dc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221108'}]},{T:1,N:'version',E:[{T:4,cdata:'02'}]},{T:1,N:'description',E:[{T:4,cdata:'화면 구성 변경 및 문서 변경'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [InputBox에 class 추가하기] 클릭 시
 * [컴포넌트 ID].addClass(className);
 * ex) ibx_exam1.addClass("P00029_exam1");
 */
scwin.btn_ex1_onclick = function (e) {
    //컴포넌트의 class 속성에 "P00029_exam1" 추가하기
    ibx_exam1.addClass("P00029_exam1");
};

/**
 * [InputBox의 class 변경하기] 클릭 시
 * [컴포넌트 ID].changeClass(oldClassName, newClassName);
 * ex) ibx_exam2.changeClass("P00029_exam1", "P00029_exam2");
 */
scwin.btn_ex2_onclick = function (e) {
    //컴포넌트의 class 속성에 정의된 "P00029_exam1" class 제거하고 "P00029_exam2"를 추가한다.
    //oldClassName이 정의되어 있지 않은 경우에도 newClassName가 추가된다.
    ibx_exam2.changeClass("P00029_exam1", "P00029_exam2");
};

/**
 * [InputBox의 class 제거하기] 클릭 시 - P00029_exam1 class를 삭제합니다.
 * [컴포넌트 ID].removeClass(className);
 * ex) ibx_exam3.removeClass("P00029_exam1");
 */
scwin.btn_ex3_onclick = function (e) {
    //컴포넌트의 class 속성에 정의된 "P00029_exam1" class를 제거한다.
    ibx_exam3.removeClass("P00029_exam1");
};

/**
 * [InputBox의 class 토글하기] 클릭 시
 * [컴포넌트 ID].toggleClass(className);
 * ex) ibx_exam4.toggleClass("P00029_exam2");
 */
scwin.btn_ex4_onclick = function (e) {
    //컴포넌트의 class 속성에 정의된 "P00029_exam2" class를 토글한다.
    ibx_exam4.toggleClass("P00029_exam2");
};

/**
 * [InputBox의 class 유무 판단하기] 클릭 시
 * [컴포넌트 ID].hasClass(className);
 * ex) ibx_exam5.hasClass("P00029_exam1");
 */
scwin.btn_ex5_onclick = function (e) {
    var tmpRet;
    var strLog;

    //컴포넌트의 class 속성에 정의된 "P00029_exam1" 존재 유무를 boolean으로 반환한다.
    tmpRet = ibx_exam5.hasClass("P00029_exam1");

    strLog = "반환값 : " + tmpRet + " (data type : " + typeof tmpRet + ")";

    //반환값 alert
    alert(strLog);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'mb10',escape:'false',id:'',label:'컴포넌트의 class를 제어하는 API 사용 예제입니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'아래의 API로 class를 제어 할 수 있습니다.<br/>- class 추가 : addClass<br/>- class 변경 : changeClass<br/>- class 제거 : removeClass<br/>- class 토글 : toggleClass<br/>- class 유무 확인 : hasClass<br/>',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'class 추가하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Input 컴포넌트에 class "P00029_exam1"를 추가합니다.',style:''}},{T:1,N:'xf:input',A:{class:'mr_def',id:'ibx_exam1',initStyle:'true',initValue:'WebSquare',style:'width:100px;'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'class 추가하기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'class 변경하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Input 컴포넌트에 정의된 class "P00029_exam1"를 "P00029_exam2"로 변경합니다.',style:''}},{T:1,N:'xf:input',A:{class:'mr_def P00029_exam1',id:'ibx_exam2',initStyle:'true',initValue:'WebSquare',style:'width:100px;'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'class 변경하기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'class 제거하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Input 컴포넌트에 정의된 class "P00029_exam1"를 제거합니다.',style:''}},{T:1,N:'xf:input',A:{class:'mr_def P00029_exam1',id:'ibx_exam3',initStyle:'true',initValue:'WebSquare',style:'width:100px;'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'class 제거하기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'class 토글하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Input 컴포넌트에 정의된 class "P00029_exam2"를 토글합니다.',style:''}},{T:1,N:'xf:input',A:{class:'mr_def P00029_exam2',id:'ibx_exam4',initStyle:'true',initValue:'WebSquare',style:'width:100px;'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex4_onclick',id:'btn_ex4',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'class 토글하기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'class 유무 반환받기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Input 컴포넌트에 class "P00029_exam1"의 유무를 반환합니다.',style:''}},{T:1,N:'xf:input',A:{class:'mr_def P00029_exam1',id:'ibx_exam5',initStyle:'true',initValue:'WebSquare',style:'width:100px;'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex5_onclick',id:'btn_ex5',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'class 유무 반환받기'}]}]}]}]}]}]}]}]}]})