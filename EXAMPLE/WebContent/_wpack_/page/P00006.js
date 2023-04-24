/*amd /page/P00006.xml 30011 b1a7a03e1f5c372b62b49781327aa05efe223789796e68ea9f30f9585233298d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    //Group 영역의 inputBox 컴포넌트에 value 할당
    ibx_group_ex01.setValue("WebSquare");
    //Group 영역의 selectBox 컴포넌트에 value 할당
    sbx_group_ex01.setSelectedIndex(2);

    //TableLayout 영역의 inputBox 컴포넌트에 value 할당
    ibx_table_ex01.setValue("WebSquare");
    //TableLayout 영역의 selectBox 컴포넌트에 value 할당
    sbx_table_ex01.setSelectedIndex(2);

    //Generator 컴포넌트에 초기 반복 실행
    scwin.generator_addItem(3);

    //IFrame 컴포넌트에 scr 할당
    ifm_ex01.setSrc($c.frame.getSrc("/page/P00006S01.xml"));

    //WFrame 컴포넌트에 scr 할당
    wfm_ex01.setSrc($c.frame.getSrc("/page/P00006S01.xml"));

};

/**
 * Group영역의 [입력값 초기화 - [Group ID].init()] 버튼 클릭 시
 */
scwin.btn_initGroup_onclick = function (e) {
    //Group의 init 함수 호출 - 사용자가 입려 가능한 컴포넌트의 value를 초기값으로 할당한다.
    grp_ex01.init();
};

/**
 * TableLayout영역의 [입력값 초기화 - [Group ID].init()] 버튼 클릭 시
 */
scwin.btn_initTable_onclick = function (e) {
    //Group의 init 함수 호출 - 사용자가 입려 가능한 컴포넌트의 value를 초기값으로 할당한다.
    grp_ex02.init();
};


/**
 * Generator 컴포넌트에 자식 추가.
 * argNumLoop 만큼 자식 컴포넌트를 추가한다.
 * @param {number} argNumLoop 반복수
 * @returns  
*/
scwin.generator_addItem = function (argNumLoop) {
    var numLastIndex;
    var i;
    var cmpTmp;
    var numTotalCount;

    argNumLoop = argNumLoop || 1;

    numLastIndex = gen_ex01.getLength();
    numTotalCount = +(gen_ex01.getUserData("example_num") || 1);

    for (i = 0; i < argNumLoop; i++) {
        gen_ex01.insertChild();

        cmpTmp = gen_ex01.getChild(numLastIndex, "spa_gen_label");
        cmpTmp.setValue("Item " + numTotalCount);

        numLastIndex++;
        numTotalCount++;
    }

    gen_ex01.setUserData("example_num", numTotalCount);
};

/**
 * Generator영역의 [아이템 추가] 버튼 클릭 시
 */
scwin.btn_gen_addItem_onclick = function (e) {
    //Generator 컴포넌트에 자식 추가.
    scwin.generator_addItem(1);
};

/**
 * Generator영역의 [X] 버튼 클릭 시
 */
scwin.btn_gen_del_onclick = function (e) {
    var cmpGenerator;
    var numIndex;

    //Generator 컴포넌트를 반환한다. Generator의 ID를 알고 있는 경우 직접 접근이 가능.
    cmpGenerator = this.getGenerator();

    //현재 index를 반환한다.
    numIndex = this.getGeneratedIndex();

    //index에 해당하는 반복부(자식 컴포넌트 집합)를 삭제한다.
    cmpGenerator.removeChild(numIndex);
};

/**
 * SlideHide 영역의 slide mark 버튼 클릭 시
 */
scwin.btn_slideHide_onclick = function (e) {
    //SlideHide 컴포넌트의 slide,  hide toggle 처리
    scwin.shd_ex01_slide_hide();
};

/**
 * SlideHide 영역의 [Slide/Hide] 버튼 클릭 시
 */
scwin.btn_slide_hide_onclick = function (e) {
    //SlideHide 컴포넌트의 slide,  hide toggle 처리
    scwin.shd_ex01_slide_hide();
};

/**
 * SlideHide 컴포넌트의 slide,  hide toggle 처리
 */
scwin.shd_ex01_slide_hide = function () {
    var compStatus = shd_ex01.getUserData("_compStatus");
    if (compStatus === "H") {
        shd_ex01.startSlide();
        shd_ex01.setUserData("_compStatus", "S");
        grp_slide_bar.addClass("on");
    } else {
        shd_ex01.startHide();
        shd_ex01.setUserData("_compStatus", "H");
        grp_slide_bar.removeClass("on");
    }
};

/**
 * Switch 컴포넌트 - 왼쪽 컨텐츠가 활성화.
 */
scwin.swh_ex01_switchMoveToRight = function (e) {
    swh_ex01.moveToRight();
};

/**
 * Switch 컴포넌트 - 오른쪽 컨텐츠가 활성화.
 */
scwin.swh_ex01_switchMoveToLeft = function (e) {
    swh_ex01.moveToLeft();
};

/**
 * TabControl 영역의 [탭 추가] 버튼 클릭 시
 */
scwin.btn_tabcontrol_addTab_onclick = function (e) {
    var tmpIdx = tac_ex01.getTabCount();
    var tabId = "addTab" + tmpIdx;
    var tabOptions = {};
    var contentOptions = {};

    tabOptions.label = "AddTab" + tmpIdx;
    tabOptions.openAction = "new";
    tabOptions.closable = "true";

    contentOptions.wframe = true;
    contentOptions.scope = true;

    if (tmpIdx % 2 === 0) {
        contentOptions.src = $c.frame.getSrc("/page/P00006S02.xml");
    } else {
        contentOptions.src = $c.frame.getSrc("/page/P00006S01.xml");
    }

    //탭이 비동기로 열리기 때문에 promise then을 사용하여 이후 작업 처리.
    tac_ex01.addTab(tabId, tabOptions, contentOptions).then(function (tabKey) {
        //탭 활성화 시키기
        tac_ex01.setSelectedTabIndex(tac_ex01.getTabIndex(tabKey));
    });
};

/**
 * WindowContainer 영역의 [WindowContainer로 구성된 화면 열기] 버튼 클릭 시 
 */
scwin.btn_windowcontainer_open_onclick = function (e) {
    window.open(document.location.origin + document.location.pathname + "?w2xPath=/page/P00006S03.xml", "_blank");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'컨테이너 컴포넌트는 하위 컴포넌트를 가질 수 있고 레이아웃을 구성하는데 주로 사용됩니다.<br/>이 컴포넌트를 적절히 이용하여 하위 컴포넌트의 위치나 사이즈를 조절 할 수 있습니다.<br/>레이아웃 구성의 대부분이 Style Class에 관련된 부분이므로 디자인 가이드를 참고 바랍니다.<br/>Group, TableLayout, Repeat, Generator, Switch, Accordion, IFrame, WFrame, TabControl, WindowContainer',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Group',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'dfbox nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm event','ev:onclick':'scwin.btn_initGroup_onclick',id:'btn_initGroup',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입력값 초기화 - [Group ID].init()'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_ex01',style:'border: 1px solid #ced4da;padding: 10px 0px;'},E:[{T:1,N:'xf:group',A:{id:'',class:'ofh',style:'margin-bottom:4px;'},E:[{T:1,N:'w2:textbox',A:{style:'font-weight:bold;width:100px;line-height:26px;text-align:right;margin-right:8px;',id:'',label:'Span',class:'fl'}},{T:1,N:'w2:span',A:{style:'width: 140px;line-height: 26px;display: block;',id:'',label:'WebSquare5',class:'fl'}}]},{T:1,N:'xf:group',A:{id:'',class:'ofh',style:'margin-bottom:4px;'},E:[{T:1,N:'w2:textbox',A:{style:'font-weight:bold;width:100px;line-height:26px;text-align:right;margin-right:8px;',id:'',label:'InputBox',class:'fl'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',style:'width: 140px;height: 26px;',id:'ibx_group_ex01',class:'fl'}}]},{T:1,N:'xf:group',A:{id:'',class:'ofh',style:'margin-bottom:4px;'},E:[{T:1,N:'w2:textbox',A:{style:'font-weight:bold;width:100px;line-height:26px;text-align:right;margin-right:8px;',id:'',label:'InputCalendar',class:'fl'}},{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',rightAlign:'false',focusOnDateSelect:'false',style:'width: 140px;',id:'',renderType:'component',class:'fl',renderDiv:'true',calendarValueType:'yearMonthDate',setCurrentDate:'true'}}]},{T:1,N:'xf:group',A:{id:'',class:'ofh',style:'margin-bottom:4px;'},E:[{T:1,N:'w2:textbox',A:{style:'font-weight:bold;width:100px;line-height:26px;text-align:right;margin-right:8px;',id:'',label:'Radio',class:'fl'}},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'height: 26px;',id:'',rows:'',class:'fl',cols:'2',selectedIndex:'1'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'남성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'M'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'ofh',style:'margin-bottom:4px;'},E:[{T:1,N:'w2:textbox',A:{style:'font-weight:bold;width:100px;line-height:26px;text-align:right;margin-right:8px;',id:'',label:'Checkbox',class:'fl'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'height: 26px;',id:'',rows:'',selectedindex:'0',class:'fl',cols:'3'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'독서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'게임'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'ofh',style:'margin-bottom:4px;'},E:[{T:1,N:'w2:textbox',A:{style:'font-weight:bold;width:100px;line-height:26px;text-align:right;margin-right:8px;',id:'',label:'SelectBox',class:'fl'}},{T:1,N:'xf:select1',A:{chooseOptionLabel:'',submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 140px;height: 26px;',allOption:'',id:'sbx_group_ex01',class:'fl',displayMode:'label',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수신'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비수신'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'ofh',style:''},E:[{T:1,N:'w2:textbox',A:{style:'font-weight:bold;width:100px;line-height:26px;text-align:right;margin-right:8px;',id:'',label:'Trigger',class:'fl'}},{T:1,N:'xf:trigger',A:{disabled:'',style:'width: 140px;height: 26px;',id:'',type:'button',class:'fl',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Trigger'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'TableLayout',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'dfbox nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm event','ev:onclick':'scwin.btn_initTable_onclick',id:'btn_initTable',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'입력값 초기화 - [Group ID].init()'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb tb type2',id:'grp_ex02',style:'width:100%; max-width:400px;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:110px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n									Span '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:span',A:{class:'',id:'',label:'WebSquare5',style:'width: 140px;line-height: 26px;'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n									InputBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',class:'',id:'ibx_table_ex01',style:'width: 140px;height: 26px;'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n									InputCalendar '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',focusOnDateSelect:'false',footerDiv:'false',id:'',renderDiv:'true',renderType:'component',rightAlign:'false',setCurrentDate:'true',style:'width: 140px;height: 26px;'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n									Radio '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'2',id:'',ref:'',rows:'',selectedIndex:'1',style:'max-width: 140px;height: 26px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'남성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'M'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여성'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'F'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n									Checkbox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'3',id:'',ref:'',rows:'',selectedindex:'0',style:'max-width: 140px;height: 26px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'여행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'독서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'게임'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n									SelectBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'sbx_table_ex01',style:'width: 140px;height: 26px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수신'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비수신'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n									Trigger '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'',style:'width: 140px;height: 26px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Trigger'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Generator',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'dfbox nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm event','ev:onclick':'scwin.btn_gen_addItem_onclick',id:'btn_gen_addItem',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아이템 추가'}]}]}]},{T:1,N:'w2:generator',A:{id:'gen_ex01',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'margin-bottom: 5px;'},E:[{T:1,N:'w2:span',A:{class:'mr_def',id:'spa_gen_label',label:'',style:'min-width: 50px; line-height: 26px;'}},{T:1,N:'xf:input',A:{class:'mr_def',id:'ibx_gen_input',ref:'',style:'width: 150px;height: 26px'}},{T:1,N:'xf:trigger',A:{class:'btn_cm btn_delete','ev:onclick':'scwin.btn_gen_del_onclick',id:'btn_gen_del',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'X'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'SlideHide',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'dfbox nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm event','ev:onclick':'scwin.btn_slide_hide_onclick',id:'btn_slide_hide',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Slide/Hide'}]}]}]},{T:1,N:'w2:slideHide',A:{firstStatus:'slide',id:'shd_ex01',moveSize:'',showSize:'24',slideDirection:'right',style:'position:relative;height:160px;max-width:260px;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'border: 1px solid #ced4da;position: absolute;top: 1px;left: 1px;right: 24px;bottom: 1px;border-width:1px 0'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 6px;'},E:[{T:1,N:'xf:input',A:{id:'',placeholder:'검색어',style:'height: 26px;width:100%;'}}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'퀵 메뉴 구성',style:'display: block;color:#bbb;font-weight:bold;border-top:1px solid #ccc;border-bottom:4px double #ccc;padding:6px;'}}]},{T:1,N:'xf:group',A:{class:'arrw_bar on','ev:onclick':'scwin.btn_slideHide_onclick',id:'grp_slide_bar',style:'position:absolute;top:1px;bottom: 0px;right: 0px;width: 26px;background-color: #e7eaf6;'}}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Switch',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'dfbox nobottom ofh',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm fl event','ev:onclick':'scwin.swh_ex01_switchMoveToLeft',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이전'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm fr event','ev:onclick':'scwin.swh_ex01_switchMoveToRight',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다음'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'position:relative;padding-bottom: 10px;'},E:[{T:1,N:'xf:switch',A:{caseClass:'',class:'',id:'swh_ex01',motionDisplay:'true',rotation:'true',slide:'true',style:'position:relative;height:160px;',touchMove:'true'},E:[{T:1,N:'xf:case',A:{class:'boxSize',id:'case2',style:'position:absolute;width:100%;height:100%;border:1px solid #ced4da;box-sizing: border-box;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'화면1',style:'text-align:center;background-color: #e7eaf6;font-size: 1.1em;line-height:40px;width:100%;'}}]}]},{T:1,N:'xf:case',A:{class:'boxSize',id:'case3',style:'position:absolute;width:100%;height:100%;border:1px solid #ced4da;box-sizing: border-box;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'화면2',style:'text-align:center;background-color: salmon;color: #fff;font-size: 1.1em;line-height: 40px;width:100%;'}}]}]},{T:1,N:'xf:case',A:{class:'boxSize',id:'case4',style:'position:absolute;width:100%;height:100%;border:1px solid #ced4da;box-sizing: border-box;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'화면3',style:'text-align:center;background-color: lightskyblue;color: #fff;font-size: 1.1em;line-height:40px;width:100%;'}}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm btn_left','ev:onclick':'scwin.swh_ex01_switchMoveToLeft',id:'',style:'position: absolute;left: 20px;top:40%;z-index: 1000;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'<'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm btn_right','ev:onclick':'scwin.swh_ex01_switchMoveToRight',id:'',style:'position: absolute;right: 20px;top: 40%;z-index: 1000;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'>'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Accordion',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'aodbox mb0',id:'',style:'position: relative;max-width: 400px;'},E:[{T:1,N:'w2:accordion',A:{class:'wq_aod ',collapseAll:'',collapsible:'true',id:'',selectedPanel:'panels1',style:''},E:[{T:1,N:'w2:panels',A:{class:'',id:'panels1',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle2',label:'사용자 정보',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent2',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb type2',id:'',style:'width:100%;background-color: #fff;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n														이름 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'WebSquare',style:'width: 144px;height: 21px;'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n														이메일 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:3,text:'\n														edu@inswave.com'}]}]}]}]}]}]},{T:1,N:'w2:panels',A:{class:'',id:'panels3',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle3',label:'계좌 정보',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent3',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb type2',id:'',style:'width:100%;background-color: #fff;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n														은행명 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'InswaveSystems',style:'width: 144px;height: 21px;'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n														계좌번호 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'012486486',style:'width: 144px;height: 21px;'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:' 소유주 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'WebSquare',style:'width: 144px;height: 21px;'}}]}]}]}]}]}]},{T:1,N:'w2:panels',A:{class:'',id:'panels4',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle4',label:'마케팅 수신 정보',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent4',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb type2',id:'',style:'width:100%;background-color: #fff;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n														SMS&nbsp;수신 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'',ref:'',rows:'1',selectedIndex:'1',style:'min-width: 150px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n														이메일&nbsp;수신 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'',ref:'',rows:'1',selectedIndex:'0',style:'min-width: 150px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:3,text:'\n														전화&nbsp;수신 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'',ref:'',rows:'1',selectedIndex:'1',style:'min-width: 150px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'IFrame',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:iframe',A:{id:'ifm_ex01',src:'',style:'max-width: 400px;height: 100px;width: 100%;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'WFrame',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_ex01',style:'max-width: 400px;height: 100px;'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'TabControl',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'dfbox nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm event','ev:onclick':'scwin.btn_tabcontrol_addTab_onclick',id:'btn_tabcontrol_addTab',style:'height: 26px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭 추가'}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:'max-width: 400px;'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',closable:'true',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_ex01',style:'height:230px;position: relative;',tabScroll:'true',useConfirmMessage:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'tabControl',style:'width:100px;height:30px;'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',frameMode:'',id:'content1',src:'',style:'height:200px;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 6px;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'안내',style:'border-left: 10px solid #B0C4DE;background-color: #eee;padding: 6px;margin-bottom: 6px;'}},{T:1,N:'w2:textbox',A:{id:'',label:'Content 영역안에 컴포넌트를 배치',style:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'WindowContainer',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'dfbox nobottom'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'PC 전용 레이아웃입니다.',class:'ws5_example_txt_red txt_bold'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_windowcontainer_open_onclick',style:'height: 26px;',id:'btn_windowcontainer_open',type:'button',class:'btn_exam_exec btn_txt_of'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'WindowContainer으로 레이아웃이 구성된 화면 열기'}]}]}]}]}]}]}]}]}]}]})