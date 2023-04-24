/*amd /page/P00246.xml 10057 14c7c8bc0bb50944d5a73a8e046fe42b115bcbd5af5d60d18125bc9bf18b15d7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230313'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'City',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'Code',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'Code',E:[{T:4,cdata:'SE'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Paris'}]},{T:1,N:'Code',E:[{T:4,cdata:'PA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'London'}]},{T:1,N:'Code',E:[{T:4,cdata:'LN'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Beijing'}]},{T:1,N:'Code',E:[{T:4,cdata:'BJ'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Tokyo'}]},{T:1,N:'Code',E:[{T:4,cdata:'TK'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [ 체크 여부 판단하기 ] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    // Radio 'rad_exam1'의 체크 여부를 검증합니다.
    let message = rad_exam1.validate();
    alert(message);
};

/**
 * 버튼 [ 지정된 메시지 표시하기 ] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    // Radio 'rad_exam2'의 체크 여부를 검증합니다.
    rad_exam2.validate();
};

/**
 * 버튼 [ 설정한 메시지 표시하기 ] 클릭 시
 */
scwin.btn_ex3_onclick = function (e) {
    // Radio 'rad_exam3'의 체크 여부를 검증합니다.
    rad_exam3.validate();
};

/**
 * 버튼 [ 사용자 지정 함수로 설정한 메시지 표시하기 ] 클릭 시
 */
scwin.btn_ex4_onclick = function (e) {
    // Radio 'rad_exam4'의 체크 여부를 검증합니다.
    rad_exam4.validate();
};

/**
 * 영역 [사용자 지정 함수로 설정한 메시지 표시하기]의
 * Radio컴포넌트 [rad_exam4]의 invalidMessageFunc함수
 */
scwin.fn_msg = function () {
    var invalidType = this.getType();
    if (invalidType == "mandatory") {
        message = "사용자 지정 함수로 설정된 메시지입니다.";
    }

    return message;
}
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'사용자가 Radio컴포넌트에서 선택한 데이터를 검증하는 것에 관한 예제입니다.<br/><br/>이 기능은 아래의 속성과 함수로 사용할 수 있습니다.<br/>- mandatory : (속성)mandatory="true"인 경우, validate(); 함수는 검증을 수행하여 결과를 true/false로 반환<br/>- displaymessage : (속성)검증 실패 시 Engine 내부에 정의된 메시지 표시<br/>- invalidMessage : (속성)검증 결과가 실패일 경우, 속성에 지정한 값을 메시지 표시<br/>- invalidMessageFunc : (속성)검증 결과가 실패일 경우, 사용자 지정 함수 반환<br/>- validate : (함수)컴포넌트의 유효성 관련 속성값을 통해 유효성 검사를 실행',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'체크 여부 판단하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Radio컴포넌트 체크 후 아래의 버튼을 클릭 시 true값을 반환합니다. 반환값은 메시지 창에 표시됩니다.',style:'',displayFormat:''}},{T:1,N:'w2:textbox',A:{class:'txt_info_important',escape:'false',id:'',label:'※ Radio컴포넌트를 체크하지 않고 버튼을 누를 시 false값을 메시지 창에 표시합니다.',style:'margin-bottom: 10px;'}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'체크 여부 판단하기'}]}]}]},{T:1,N:'xf:select1',A:{id:'rad_exam1',selectedIndex:'-1',appearance:'full',style:'width: 200px;height:125px;',cols:'',rows:'',ref:'',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'지정된 메시지 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Radio컴포넌트를 체크하지 않고 아래의 버튼을 클릭 시 지정된 메시지 \'필수 입력 항목입니다\'가 표시됩니다.',style:'',displayFormat:''}},{T:1,N:'w2:textbox',A:{class:'txt_info_important',escape:'false',id:'',label:'※ Radio컴포넌트를 체크 후 버튼을 누를 시 반환 메시지가 없습니다.',style:'margin-bottom: 10px;'}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'지정된 메시지 표시하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'}},{T:1,N:'xf:select1',A:{id:'rad_exam2',selectedIndex:'-1',appearance:'full',style:'width: 200px;height:125px;',cols:'',rows:'',ref:'',mandatory:'true',displaymessage:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'설정한 메시지 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Radio컴포넌트를 체크하지 않고 아래의 버튼을 클릭 시 사용자가 설정한 메시지가 표시됩니다.',style:'',displayFormat:''}},{T:1,N:'w2:textbox',A:{class:'txt_info_important',escape:'false',id:'',label:'※ Radio컴포넌트를 체크 후 버튼을 누를 시 반환 메시지가 없습니다.',style:'margin-bottom: 10px;'}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'설정한 메시지 표시하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'}},{T:1,N:'xf:select1',A:{id:'rad_exam3',selectedIndex:'-1',appearance:'full',style:'width: 200px;height:125px;',cols:'',rows:'',ref:'',mandatory:'true',displaymessage:'true',invalidMessage:'사용자 설정 메시지'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'사용자 지정 함수로 설정한 메시지 표시하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'Radio컴포넌트를 체크하지 않고 아래의 버튼을 클릭 시 사용자 지정 함수로 설정한 메시지가 표시됩니다.',style:'',displayFormat:''}},{T:1,N:'w2:textbox',A:{class:'txt_info_important',escape:'false',id:'',label:'※ Radio컴포넌트를 체크 후 버튼을 누를 시 반환 메시지가 없습니다.',style:'margin-bottom: 10px;'}},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex4_onclick',id:'btn_ex4',localeRef:'',style:'min-width: 30px;height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용자 지정 함수로 설정한 메시지 표시하기'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'margin: 10px 0px 10px 0px;'}},{T:1,N:'xf:select1',A:{id:'rad_exam4',selectedIndex:'-1',appearance:'full',style:'width: 200px;height:125px;',cols:'',rows:'',ref:'',mandatory:'true',displaymessage:'true',invalidMessageFunc:'scwin.fn_msg'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_dataList1'},E:[{T:1,N:'xf:label',A:{ref:'City'}},{T:1,N:'xf:value',A:{ref:'Code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''}}]}]}]}]}]})