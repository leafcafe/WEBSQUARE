/*amd /page/P00026.xml 10432 4a97d524ca30dac4fff2c399510741dcee6f7d6943ea2a29642a62b78a341dca */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_ex1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'ROW 1 : COLUMN 1'}]},{T:1,N:'col2',E:[{T:4,cdata:'ROW 1 : COLUMN 2'}]},{T:1,N:'col3',E:[{T:4,cdata:'ROW 1 : COLUMN 3'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'ROW 2 : COLUMN 1'}]},{T:1,N:'col2',E:[{T:4,cdata:'ROW 2 : COLUMN 2'}]},{T:1,N:'col3',E:[{T:4,cdata:'ROW 2 : COLUMN 3'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [실행] 클릭 시
 * [Group 컴포넌트 ID].invoke("assert", 사용자 정의 함수);
 */
scwin.btn_ex1_onclick = function (e) {
    //textarea에 log 출력
    $c.frame.printExampleLog("** scwin.btn_ex1_onclick 실행 **", txa_log, false);

    //실행 함수 로그 출력
    $c.frame.printExampleLog('grp_form.invoke("assert", scwin.example_function1);', txa_log, false);

    //grp_form 컴포넌트의 자식 컴포넌트를 scwin.example_function1 함수의 인수값으로 할당하여 호출한다.
    //자식 컴포넌트가 getValue method가 있는 경우만 대상이 됩니다.
    grp_form.invoke("assert", scwin.example_function1);

    //textarea에 log 출력
    $c.frame.printExampleLog("** grp_form 컴포넌트의 invoke 실행 완료 **", txa_log, false);
};


/**
 * 사용자 정의 함수 예시
 * grp_form.invoke("assert", scwin.example_function1);
 * @param {object} argCmp 웹스퀘어 컴포넌트
 */
scwin.example_function1 = function (argCmp) {
    var strLog = "";

    //컴포넌트에 getOriginalID method가 있는 경우 진행
    if (argCmp.getOriginalID) {
        //컴포넌트 ID 추출. (사용자가 지정한 ID)
        strLog += "ID : " + argCmp.getOriginalID() + "\n";
    }

    //컴포넌트에 getPluginName method가 있는 경우 진행
    if (argCmp.getPluginName) {
        //컴포넌트명(plugin name) 추출
        strLog += "PluginName : " + argCmp.getPluginName() + "\n";
    }

    //컴포넌트에 getValue method가 있는 경우 진행
    if (argCmp.getValue) {
        //컴포넌트에 할당된 값 추출
        strLog += "Value : " + argCmp.getValue();
    }

    //textarea에 log 출력
    if (strLog) {
        strLog += "\n----------------------------------------";
        $c.frame.printExampleLog(strLog, txa_log, false);
    }
};


/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    txa_log.setValue("");
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def com_example_sampbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'mr_def',id:'',label:'[Group 컴포넌트 ID].invoke("assert", 사용자 정의 함수); ex) grp_form.invoke("assert", scwin.example_function1);',style:'',tagname:'samp',escape:'false'}},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb mb_def',id:'grp_form',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:' InputBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ibx_input',placeholder:'',style:'width:140px;',initValue:'WebSquare'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:' CheckBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',cols:'',disabled:'',id:'cbx_checkbox',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:'min-width:140px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Type1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Type2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n						InputCalendar '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',id:'ica_inputCalendar',style:'width:140px;',renderDiv:'true',focusOnDateSelect:'false',calendarValueType:'yearMonthDate',rightAlign:'false',renderType:'component',setCurrentDate:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:' TextBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{id:'tbx_textbox',label:'Textbox 컴포넌트입니다.',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:' GridView '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:span',A:{label:'//invoke의 assert 옵션 대상에서 제외(컴포넌트의 getValue method가 있는 경우만 대상에 포함됩니다.)',style:'',id:'',class:'mb_def'}},{T:1,N:'w2:gridView',A:{id:'',style:'width: 400px;height: 70px;',checkAllType:'false',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',dataList:'data:dlt_ex1',class:'wq_gvw',autoFit:'allColumn',visibleRowNum:'all'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'col1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column2',value:'col2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'col3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'col3',displayMode:'label'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:' TabControl '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:span',A:{class:'mb_def',id:'',label:'//invoke의 assert 옵션 대상에서 제외(컴포넌트의 getValue method가 있는 경우만 대상에 포함됩니다.)',style:''}},{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_tabControl',style:'width: 400px;height: 100px;',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'TAB1',style:'width:70px;height:30px;'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:'padding:10px;'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'ibx_tabcontrol_input',initValue:'WebSquare TabControl',style:'width: 200px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb mb_def',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n						로그&nbsp;출력 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 200px;'}}]}]}]}]}]}]}]})