/*amd /page/P00075.xml 5116 f43a84e72e4aa0d87bc1ccd7663209012b34bb0487f50c3a26fe6bdd40b7a1a3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220817'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_holiday',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'holiday',name:'휴일',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'holiday',E:[{T:4,cdata:'*0101'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'holiday',E:[{T:4,cdata:'*0301'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'holiday',E:[{T:4,cdata:'*0505'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'holiday',E:[{T:4,cdata:'*0606'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'holiday',E:[{T:4,cdata:'*0815'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'holiday',E:[{T:4,cdata:'*1003'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'holiday',E:[{T:4,cdata:'*1009'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'holiday',E:[{T:4,cdata:'*1225'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    //매년 1월 1일, 3월 1일, 5월 5일, 6월 6일, 8월 15일, 10월 3일, 10월 9일, 12월 25일을 휴일로 지정
    cal_exam1.setHoliday("*0101,*0301,*0505,*0606,*0815,*1003,*1009,*1225");

    //DataList dlt_holiday의 컬럼 holiday를 휴일로 지정 (매년 1월 1일, 3월 1일, 5월 5일, 6월 6일, 8월 15일, 10월 3일, 10월 9일, 12월 25일)
    cal_exam2.setHolidayRef("data:dlt_holiday.holiday");

    //휴일 확인을 위해 10월로 이동.
    cal_exam1.gotoMonth("10");
    cal_exam2.gotoMonth("10");

};

/**
 * Calendar - 지정된 휴일 제거하기 (함수 setHoliday를 이용하여 설정)
 * 버튼 [휴일 설정 제거하기]의 onclick 핸들러
 */
scwin.btn_exam1_onclick = function (e) {
    ㄲvisibleWeekNum_Calendar.xml
    //컴포넌트 cal_exam1의 지정된 휴일을 제거합니다.
    cal_exam1.removeHoliday();
};

/**
 * Calendar - 지정된 휴일 제거하기 (함수 setHolidayRef를 이용하여 설정)
 * 버튼 [휴일 설정 제거하기]의 onclick 핸들러
 */
scwin.btn_exam2_onclick = function (e) {
    //컴포넌트 cal_exam2의 지정된 휴일을 제거합니다.
    cal_exam2.removeHoliday();
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'설정된 휴일을 확인하기 위해 초기 월이 10월로 지정되었습니다. 10월 3일, 10월 9일이 휴일로 지정되어있습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Calendar - 지정된 휴일 제거하기<br/>(함수 setHoliday를 이용하여 설정)',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'mb10'},E:[{T:1,N:'xf:trigger',A:{useDefaultLabel:'true','ev:onclick':'scwin.btn_exam1_onclick',localeRef:'',style:'',id:'btn_exam1',type:'',class:'btn_exam_exec btn_txt_of'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'휴일 설정 제거하기'}]}]}]},{T:1,N:'w2:calendar',A:{id:'cal_exam1',style:'min-width: 200px;min-height: 200px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Calendar - 지정된 휴일 제거하기<br/>(함수 setHolidayRef를 이용하여 설정)',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'mb10'},E:[{T:1,N:'xf:trigger',A:{useDefaultLabel:'true','ev:onclick':'scwin.btn_exam2_onclick',localeRef:'',style:'',id:'btn_exam2',type:'',class:'btn_exam_exec btn_txt_of'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'휴일 설정 제거하기'}]}]}]},{T:1,N:'w2:calendar',A:{id:'cal_exam2',style:'min-width: 200px;min-height: 200px;'}}]}]}]}]}]}]}]})