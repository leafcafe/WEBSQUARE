/*amd /page/P00132.xml 4966 bc142a0b1d74497a4ef02815d1f0757655ec9f9f90b43b9798d8c1ff92ffd5c2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221014'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.setInitPage();
};

/**
 * 화면 초기화
 */
scwin.setInitPage = function () {
    var strDate;

    //서버에서 오늘 날짜 반환 받기.
    strDate = $p.getCurrentServerDate("yyyyMMdd");

    //inputCalendar에 오늘 날짜 할당.
    ica_exam_1.setValue(strDate);
    ica_exam_2.setValue(strDate);
    ica_exam_3.setValue(strDate);
};

/**
 * 버튼 [오늘 이전 날짜 비활성화] 클릭 시 호출
 */
scwin.btn_ex1_onclick = function (e) {
    var strDate;

    //서버에서 오늘 날짜 반환 받기.
    strDate = $p.getCurrentServerDate("yyyyMMdd");

    //inputCalendar "ica_exam_2"에 지정일 이전 날짜 비활성화하기
    ica_exam_2.disableBeforeDate(strDate);
};

/**
 * 버튼 [오늘 이후 날짜 비활성화] 클릭 시 호출
 */
scwin.btn_ex2_onclick = function (e) {
    var strDate;

    //서버에서 오늘 날짜 반환 받기.
    strDate = $p.getCurrentServerDate("yyyyMMdd");

    //inputCalendar "ica_exam_3"에 지정일 이후 날짜 비활성화하기
    ica_exam_3.disableAfterDate(strDate);

};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'InputCalendar의 캘린더에 출력된 날짜를 비활성화하는 예제입니다.<br/>지정한 날짜의 이후 또는 이전 날짜를 비활성화 할 수 있습니다.<br/>비활성화 된 날짜는 사용자가 선택할 수 없습니다.<br/>이 기능은 사용자가 입력하는 날짜, 기 입력(할당)된 날짜에 대해서는 제어하지 않습니다.',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'캘린더의 날짜 비활성화화기 - &nbsp;지정일 이전',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_2',renderDiv:'true',rightAlign:'false',style:'width:110px;min-height: 24px;'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오늘 이전 날짜 비활성화'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'캘린더의 날짜 비활성화화기 - &nbsp;지정일 이후',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_3',renderDiv:'true',rightAlign:'false',style:'width:110px;min-height: 24px;'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오늘 이후 날짜 비활성화'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'기본 설정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_1',renderDiv:'true',rightAlign:'false',style:'width:110px;min-height: 24px;',validateOnInput:'true',validateOnInputMobile:'true'}}]}]}]}]}]}]}]})