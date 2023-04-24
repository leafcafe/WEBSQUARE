/*amd /page/P00254.xml 6196 c043a4d2ddc3c224c415fbaca2c8035e296eeb031cc08d07035316912e9f29b9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230320'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_list',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'City',name:'Label'}},{T:1,N:'w2:column',A:{dataType:'text',id:'Code',name:'Code'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Seoul'}]},{T:1,N:'Code',E:[{T:4,cdata:'SE'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Paris'}]},{T:1,N:'Code',E:[{T:4,cdata:'PA'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'London'}]},{T:1,N:'Code',E:[{T:4,cdata:'LN'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'City',E:[{T:4,cdata:'Beijing'}]},{T:1,N:'Code',E:[{T:4,cdata:'BJ'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};

scwin.btn_set_chooseoption_onclick = function(e) {
    let chooseOptionLabel = ibx_chooseOptionLabel.getValue();
    let chooseOptionValue = ibx_chooseOptionValue.getValue();
    //로그 출력
    var strLog = "[onclick]";
    if (chooseOptionValue == "" || chooseOptionLabel == ""){
        strLog += "Label과 Value를 입력해주세요.";
        $c.frame.printExampleLog(strLog, txa_log, false);
        console.log(strLog);
        return;
    }
    strLog += "Label: "+chooseOptionLabel +", Value: "+chooseOptionValue;
    acb1.changeChooseOption(chooseOptionValue, chooseOptionLabel);
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
};

scwin.btn_hide_chooseoption_onclick = function(e) {
    acb1.showChooseOption(false);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'AutoComplete의 chooseOptionLabel 속성으로 정의한 값을 선택 목록에 표시하기, 숨기기, 변경하는 예제입니다.',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'AutoComplete',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'AutoComplete에서 값을 선택하면 우측에 Code 값이 표시됩니다.<br/>DataList 영역에서 Label이나 코드를 수정하게 되면 연동된 DataCollection의 값이 변경되어 AutoComplete의 선택 목록이 갱신되는 것을 확인할 수 있습니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'ibx_chooseOptionLabel',style:'width: 150px;margin-right: 5px;',class:'w2input',placeholder:'Label'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',class:'w2input',id:'ibx_chooseOptionValue',style:'width: 150px;margin-right: 10px;',placeholder:'Value'}}]},{T:1,N:'xf:group',A:{id:'',class:'mb_def_box nobottom'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_set_chooseoption_onclick',disabled:'',style:'width: 150px;',id:'btn_set_chooseoption',type:'button',class:'btn_exam_exec btn_txt_of',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'chooseOption 설정하기'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'width: 150px;',id:'btn_hide_chooseoption',type:'button',class:'btn_exam_exec btn_txt_of',escape:'false','ev:onclick':'scwin.btn_hide_chooseoption_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'chooseOptions 숨기기'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'mb_def_box nobottom'},E:[{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',search:'start',editType:'select',useKeywordHighlight:'false',style:'width: 150px;',id:'acb1',useLocale:'false',class:'',allOption:'',chooseOption:'true',ref:'',autoFocus:'true',chooseOptionLabel:'- 선택 -'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_list'},E:[{T:1,N:'w2:label',A:{ref:'City'}},{T:1,N:'w2:value',A:{ref:'Code'}}]}]}]},{T:1,N:'w2:span',A:{label:'',style:'color: red;font-weight: bold;margin-left: 15px',id:'spn_value'}}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})