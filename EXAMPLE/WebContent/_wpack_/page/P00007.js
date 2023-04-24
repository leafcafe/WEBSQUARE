/*amd /page/P00007.xml 4735 86d3e96ffa86289a96e2a966438c7332052c42c3615918dfdcb7875ca48f2713 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    //widget 추가
    scwin.addWidget("E01");
};

/**
 * widget 추가 selectbox 변경 시
 */
scwin.sbx_addWidget_onviewchange = function (info) {
    //var curType = info.newValue;
    scwin.addWidget(info.newValue);
    this.setValue("");
};

/**
 * widget 추가
 */
scwin.addWidget = function (type) {
    var wTitle,
        wSrc,
        wWidth = 3,
        wHeight = 4,
        wPath,
        wId;

    wPath = $c.frame.getSrc("/page") + "/";

    switch (type) {
        case "C01":
            wTitle = "기기 유형별 조회수";
            wSrc = wPath + "P00007S02.xml";
            break;
        case "C02":
            wTitle = "성별 조회수";
            wSrc = wPath + "P00007S03.xml";
            break;
        case "C03":
            wTitle = "일별 조회수";
            wSrc = wPath + "P00007S01.xml";
            break;
        case "E01":
            wTitle = "캘린더";
            wSrc = wPath + "P00007S04.xml";
            wHeight = 5;
            wWidth = 3;
            break;
        default: return;
    }

    wId = "W" + type;

    if (wgc_ex01.getWidgetById(wId)) {
        wgc_ex01.moveWidget(wId, 0, 0);
        return;
    }

    var opt = {
        id: wId,
        src: wSrc,
        title: wTitle,
        x: 0,
        y: 0,
        scope: true,
        unitWidth: wWidth,
        unitHeight: wHeight
    };

    wgc_ex01.addWidgets(opt);

};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'WidgetContainer 예시입니다.<br/>WidgetContainer는 대시보드성 UI를 구성할 때 주로 사용합니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'position: relative; min-height: 600px;height: 100%;'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:select1',A:{chooseOptionLabel:'위젯 추가',submenuSize:'auto',chooseOption:'true',allOption:'',displayMode:'label',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',optionOrder:'false',disabled:'false',style:'width: 160px;',id:'sbx_addWidget',visibleRowNum:'10',class:'',direction:'auto','ev:onviewchange':'scwin.sbx_addWidget_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'캘린더'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기기 유형별 조회수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'성별 조회수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일별 조회수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C03'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'position: absolute;left:0px;right: 0px;top:36px;bottom: 0px;',id:''},E:[{T:1,N:'w2:widgetContainer',A:{unitHeightPixel:'100',minUnitWidth:'',verticalMargin:'5',threshold:'700',params:'',widgetResize:'true',maxUnitWidth:'',mode:'pushpull',widgetMove:'true',style:'height: 100%;box-sizing:border-box;background-color: #fefefe;',id:'wgc_ex01',horizontalMargin:'5',cols:'6',class:'ws_example'}}]}]}]}]}]}]})