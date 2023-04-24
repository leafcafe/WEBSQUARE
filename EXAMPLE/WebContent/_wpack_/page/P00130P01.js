/*amd /page/P00130P01.xml 2383 01b445eadd5ccf2a7857b4ee5e0ef846eb87553ed2bdc5580585323b32d3a394 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220930'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * 페이지 로드 완료 시 호출
 */
scwin.onpageload = function () {
    scwin.initPage();
};

/**
 * 페이지 초기화
 */
scwin.initPage = function () {
    var jsnPopParam;
    var strInputValue;

    //부모창에서 전달한 데이터 객체명 "p_param"으로 파라미터 반환
    jsnPopParam = $p.getParameter("p_param");

    //InputCalendar의 사용자 입력값 추출
    strInputValue = jsnPopParam.inputData;

    //span "tbx_msg"에 입력값 출력
    tbx_msg.setValue(strInputValue);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:'padding: 10px;'},E:[{T:1,N:'xf:group',A:{id:'',style:'font-size: 1.2em;min-height: 1em;font-weight: bold;margin-bottom: 10px;'},E:[{T:1,N:'w2:span',A:{id:'tbx_msg',label:' ',style:'color:tomato;font-weight:bold;'}},{T:1,N:'w2:span',A:{id:'',label:'은 유효한 날짜가 아닙니다.',style:''}}]},{T:1,N:'w2:textbox',A:{id:'',label:'(팝업 - P00123P01.xml)',style:'color: DarkCyan;font-weight: bold;font-size: 1.1em;'}}]}]}]}]})