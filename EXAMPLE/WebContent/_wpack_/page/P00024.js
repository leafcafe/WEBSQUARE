/*amd /page/P00024.xml 12671 1def1dbf12087cdc201b84a28118495db70fc2ea73629b51a67417287f5f18b6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_ex1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'ROW1 : COL1'}]},{T:1,N:'col2',E:[{T:4,cdata:'ROW1 : COL2'}]},{T:1,N:'col3',E:[{T:4,cdata:'ROW1 : COL3'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'ROW2 : COL1'}]},{T:1,N:'col2',E:[{T:4,cdata:'ROW2 : COL2'}]},{T:1,N:'col3',E:[{T:4,cdata:'ROW2 : COL3'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [실행1] 클릭 시
 * WebSquare.util.getChildren(대상 컴포넌트 객체)
 * ex) WebSquare.util.getChildren(grp_form);
 */
scwin.btn_ex1_onclick = function (e) {
    $c.frame.printExampleLog("** scwin.btn_ex1_onclick 실행 **", txa_log, false);

    //grp_form 컴포넌트의 자식 컴포넌트 반환를 받아 정보 출력
    scwin.grp_form_getChildren();
};

/**
 * grp_form 컴포넌트의 자식 컴포넌트 반환를 받아 정보 출력
 */
scwin.grp_form_getChildren = function () {
    var arrComponents;

    //자식 컴포넌트가 담긴 배열이 반환됩니다.
    arrComponents = WebSquare.util.getChildren(grp_form);

    //개발자 console에 반환값 출력
    console.log(arrComponents);

    //실행 함수 로그 출력
    $c.frame.printExampleLog('WebSquare.util.getChildren(grp_form);', txa_log, false);

    //컴포넌트 정보 출력
    scwin.printInfo(arrComponents);
};

/**
 * [실행2] 클릭 시
 * WebSquare.util.getChildren(대상 컴포넌트 객체, 옵션)
 * ex) WebSquare.util.getChildren(grp_form, {recursive:true});
 */
scwin.btn_ex2_onclick = function (e) {
    //textarea에 log 출력
    $c.frame.printExampleLog("** scwin.btn_ex2_onclick 실행 **", txa_log, false);

    //grp_form 컴포넌트의 자손 컴포넌트 반환를 받아 정보 출력
    scwin.grp_form_getChildren_recursive();
};

/**
 * grp_form 컴포넌트의 자손 컴포넌트 반환를 받아 정보 출력
 */
scwin.grp_form_getChildren_recursive = function () {
    var arrComponents;

    //자손 컴포넌트 전체가 담긴 배열이 반환됩니다.
    arrComponents = WebSquare.util.getChildren(grp_form, { recursive: true });

    //개발자 console에 반환값 출력
    console.log(arrComponents);

    //실행 함수 로그 출력
    $c.frame.printExampleLog('WebSquare.util.getChildren(grp_form, {recursive:true});', txa_log, false);

    //컴포넌트 정보 출력
    scwin.printInfo(arrComponents);
};

/**
 * [실행3] 클릭 시
 * WebSquare.util.getChildren(대상 컴포넌트 객체, {recursive:true, excludePlugin:"group span"})
 * ex) WebSquare.util.getChildren(grp_form, {recursive:true, excludePlugin:"group span"});
 */
scwin.btn_ex3_onclick = function (e) {
    //textarea에 log 출력
    $c.frame.printExampleLog("** scwin.btn_ex3_onclick 실행 **", txa_log, false);

    //grp_form 컴포넌트의 자식 컴포넌트 반환를 받아 정보 출력
    scwin.grp_form_getChildren_recursive_exclude();
};

/**
 * grp_form 컴포넌트의 자식 컴포넌트 반환를 받아 정보 출력
 */
scwin.grp_form_getChildren_recursive_exclude = function () {
    var arrComponents;

    //group, span 컴포넌트를 제외한 자손 컴포넌트가 담긴 배열이 반환됩니다.
    arrComponents = WebSquare.util.getChildren(grp_form, { recursive: true, excludePlugin: "group span" });

    //개발자 console에 반환값 출력
    console.log(arrComponents);

    //실행 함수 로그 출력
    $c.frame.printExampleLog('WebSquare.util.getChildren(grp_form, {recursive:true, excludePlugin:"group span"});', txa_log, false);

    //컴포넌트 정보 출력
    scwin.printInfo(arrComponents);
};


/**
 * 컴포넌트 정보 출력 함수
 * @param {object} argCmp 웹스퀘어 컴포넌트
 */
scwin.printInfo = function (argArrCmp) {
    var strLog = "";
    var i;
    var numLength;
    var strDelimiter = "----------------------------------------\n";
    numLength = argArrCmp.length;

    strLog = strDelimiter + "전체 컴포넌트 수 : " + numLength + "\n" + strDelimiter;

    for (i = 0; i < numLength; i++) {
        let argCmp = argArrCmp[i];

        strLog += (i + "번째 컴포넌트 정보\n");

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

        //구분자 추가
        if (strLog) {
            strLog += strDelimiter;
        }
    }

    //textarea에 문자열 출력
    $c.frame.printExampleLog(strLog, txa_log, false);

};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function (e) {
    //textarea value를 빈문자열로 할당.
    txa_log.setValue("");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Group 컴포넌트의 자식/자손 컴포넌트에 접근하는 예제입니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'dfbox'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자식 컴포넌트만 반환 받기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체 자손 컴포넌트 반환 받기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Group, Span 컴포넌트를 제외한 자손 컴포넌트 반환 받기'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{adaptive:'layout',tagname:'table',style:'width:100%;',id:'grp_form',class:'w2tb tb',adaptiveThreshold:'800'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							InputBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'max-width:140px; width: 100%;',id:'ibx_input',placeholder:'',class:'',initValue:'WebSquare'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							CheckBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',disabled:'',style:'min-width:140px;',id:'cbx_checkbox',renderType:'checkboxgroup',rows:'',selectedindex:'1',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Type1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Type2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:' TextBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'tbx_textbox',label:'Textbox 컴포넌트입니다.'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:' GridView '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'gvwbox',style:'width: 100%;'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',checkAllType:'false',dataList:'data:dlt_ex1',style:'max-width: 400px;height: 70px;',scrollByColumn:'false',id:'',autoFit:'allColumn',visibleRowNum:'all',defaultCellHeight:'26',class:'wq_gvw',autoFitMinWidth:'260'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'col1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column2',value:'col2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',value:'col3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'col3',displayMode:'label'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:' TabControl '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'tabbox',style:'overflow: auto;'},E:[{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',confirmFalseAction:'new',useTabKeyOnly:'true',useMoveNextTabFocus:'false',useConfirmMessage:'false',alwaysDraw:'false',style:'max-width: 400px;min-width: 180px;',id:'tac_tabControl',class:'wq_tab'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'width:70px;height:30px;',id:'tabs1',label:'TAB1'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'padding:10px;',id:'content1'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 140px;',id:'ibx_tabcontrol_input',initValue:'WebSquare TabControl'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]})