/*amd /page/P00130.xml 5124 88ef36ba4b60bec328d507630565100ab4e3dea68c827b3bcace0a15a814b41e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221004'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
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
};

/**
 * inputCalendar [ica_exam_1]의 속성 invalidMessageFunc에 정의
 * 유효하지 않은 날짜가 입력된 경우 엔진에서 호출합니다.
 */
scwin.inputCalendar_invalidMessageFunc = function () {
    var strTarget;
    var jsnPopParam;
    var jsnPopDataObjectsnPopParam;
    var jsnPopOptions;

    //컴포넌트 ID
    //this.callerId

    //대상 InputCalendar의 ID로 컴포넌트 객체 반환 받기
    strTarget = $p.getComponentById(this.callerId);

    //팝업에 전달할 데이터
    jsnPopParam = {
        "inputData": strTarget.getValue()  //입력값 전달
    };

    //팝업에 전달한 데이터 객체 정보
    jsnPopDataObjectsnPopParam = {
        "type": "json", // 데이터 타입. "json" 권장 
        "name": "p_param",  // 데이터를 가져오기 위한 key 값. popup에서 $p.getParameter("p_param")로 반환 받을 수 있습니다.
        "data": jsnPopParam // 실제 전달할 데이터
    };

    //팝업 객체 정보
    jsnPopOptions = {
        "id": "popup_P00130P01",
        "type": "wframePopup",
        "modal": true,
        "frameModal": true,
        "width": "270px",
        "height": "160px",
        "popupName": "유효성 체크 메시지",
        "left": strTarget.getPosition("left"), //inputCalendar의 left 값
        "top": strTarget.getPosition("top"), //inputCalendar의 top 값
        "dataObject": jsnPopDataObjectsnPopParam //팝업에 전달할 데이터 객체 정보
    };

    //팝업 열기
    $p.openPopup("/page/P00130P01.xml", jsnPopOptions);

    //직전 값으로 복원.
    strTarget.setValueCancel();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'입력값이 유효한 날짜가 아닌 경우 개발자가 정의 한 팝업에 메시지를 출력하고 직전 값으로 되돌리는 예제입니다.',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'유효성 체크',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'입력값이 유효한 날짜가 아니면 개발자가 정의 한 팝업에 메시지를 출력하고 직전 값으로 되돌립니다.',style:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',dateValidSet:'true',dateValidSetCustom:'true',focusOnDateSelect:'false',id:'ica_exam_1',invalidMessageFunc:'scwin.inputCalendar_invalidMessageFunc',renderDiv:'true',rightAlign:'false',style:'min-width: 110px;min-height: 24px;',validateOnInput:'true',validateOnInputMobile:'true'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'기본 설정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',id:'ica_exam_2',renderDiv:'true',rightAlign:'false',style:'min-width: 110px;min-height: 24px;'}}]}]}]}]}]}]}]})