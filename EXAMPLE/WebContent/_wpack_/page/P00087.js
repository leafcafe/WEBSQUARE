/*amd /page/P00087.xml 5463 a30fff1723bdb7dffca3c11af1383f0b28d63694182379767286bc982a6305ce */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220907'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_exam_code',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.dispGenerator();
};

scwin.dispGenerator = function () {
    var arrData = ["Accordion", "accordion", "AliasDataList", "aliasDataList", "AliasDataMap", "aliasDataMap", "AliasLinkedDataList", "aliasLinkedDataList", "Anchor", "anchor", "AutoComplete", "autoComplete", "Calendar", "calendar", "Checkbox", "checkbox", "Checkcombobox", "checkcombobox", "DataList", "dataList", "DataMap", "dataMap", "DatePicker", "datePicker", "Editor", "editor", "Fliptoggle", "fliptoggle", "FloatingLayer", "floatingLayer", "Fusionchart", "fusionchart", "FwBulletChart", "fwBulletChart", "FwFunnelChart", "fwFunnelChart", "FwGanttChart", "fwGanttChart", "FwGaugeChart", "fwGaugeChart", "FwPyramidChart", "fwPyramidChart", "FwRealtimeChart", "fwRealtimeChart", "FwSparkChart", "fwSparkChart", "Generator", "generator", "GridView", "gridView", "Group", "group", "Iframe", "iframe", "Image", "image", "Input", "input", "InputCalendar", "inputCalendar", "LinkedDataList", "linkedDataList", "Mapchart", "mapchart", "Multiselect", "multiselect", "Multiupload", "multiupload", "Output", "output", "PageControl", "pageControl", "PageInherit", "pageInherit", "PageList", "pageList", "Pivot", "pivot", "Progressbar", "progressbar", "Radio", "radio", "Repeat", "repeat", "RoundRectangle", "roundRectangle", "ScheduleCalendar", "scheduleCalendar", "ScrollView", "scrollView", "Searchbox", "searchbox", "Selectbox", "selectbox", "SlideHide", "slideHide", "Slider", "slider", "Span", "span", "Spinner", "spinner", "Switch", "Switch", "TabControl", "tabControl", "Textarea", "textarea", "Textbox", "textbox", "Treeview", "treeview", "Trigger", "trigger", "Upload", "upload", "Wframe", "wframe", "WidgetContainer", "widgetContainer", "WindowContainer", "windowContainer",];
    var _cmpGen = gen_exam1;
    var i, i_max;
    var strTbxValue = "";
    var strLabel, strValue;

    for (i = 0, i_max = arrData.length / 2; i < i_max; i++) {
        strLabel = arrData[i * 2];
        strValue = arrData[i * 2 + 1];

        _cmpGen.insertChild();
        _cmpGen.getChild(i, "tbx_label").setValue(strLabel);
        _cmpGen.getChild(i, "tbx_pluginName").setValue(strValue);

        if (i > 0) { strTbxValue += "\n" }
        strTbxValue += strLabel + ' : "' + strValue;
    }

    txa_pluginNames.setValue(strTbxValue);
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'컴포넌트의 Plugin Name입니다.<br/>컴포넌트의 method "getPluginName"를 호출했을 때의 반환 예시입니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',confirmFalseAction:'new',confirmTrueAction:'exist',id:'',style:'',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'표로 보기',style:'',closable:'false'}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'TextArea로 보기',style:'',closable:'false'}},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content1',style:''},E:[{T:1,N:'w2:generator',A:{class:'example_div_tb_st_tp2 fd_col tr400 th120',id:'gen_exam1',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tar',escape:'false',id:'tbx_label',label:'label',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'tbx_pluginName',label:'text',style:''}}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content2',style:''},E:[{T:1,N:'xf:textarea',A:{class:'',id:'txa_pluginNames',style:'width: 100%;max-width:400px;height: 300px;line-height:1.8em;'}}]}]}]}]}]}]}]})