/*amd /page/P00006S03.xml 6179 a56b99d429560917db9e1e8e8bb26cbb4889ee7653593b88da8176846d8a5d5e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_cssFileList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'path',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'_internalStyle_'}]},{T:1,N:'path',E:[{T:4,cdata:'style'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'/cm/css/base.css'}]},{T:1,N:'label',E:[{T:4,cdata:'/cm/css/base.css'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'/frame/css/ws5_example.css'}]},{T:1,N:'label',E:[{T:4,cdata:'/frame/css/ws5_example.css'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',src:'/frame/js/mainScript.js'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gVar = {
    arrMenu: [
        { "title": "항목, 값 선택", "page_key": "P00003" },
        { "title": "컬럼 타입", "page_key": "P00008" },
        { "title": "필터, 정렬, 컬럼간 이동", "page_key": "P00009" },
        { "title": "드래그 & 드롭", "page_key": "P00010" },
        { "title": "소계, 합계", "page_key": "P00011" },
        { "title": "드릴다운", "page_key": "P00012" },
        { "title": "ExcelDown Chart", "page_key": "P00013" },
        { "title": "컬럼 동적 변경", "page_key": "P00014" },
        { "title": "Fusion 차트", "page_key": "P00017" }
    ]
};

scwin.onpageload = function () {
    scwin.dispMenu();
    scwin.dispPage("P00017", "Fusion 차트");
    scwin.dispPage("P00014", "컬럼 동적 변경");
};

scwin.dispMenu = function () {
    var _arrMenu;
    var item, i, i_max;
    var cmpGen, cmpTmp;

    _arrMenu = scwin.gVar.arrMenu;
    cmpGen = gen_top_menu;
    for (i = 0, i_max = _arrMenu.length; i < i_max; i++) {
        item = _arrMenu[i];
        cmpGen.insertChild();
        cmpTmp = gen_top_menu.getChild(i, "btn_gen_menu");
        cmpTmp.setValue(item.title);
        cmpTmp.setUserData("exam_key", item.page_key)
    };

    gen_top_menu.getChild(i_max - 1, "spa_gen_bar").hide();
}

/**
 * 페이지 추가
 */
scwin.dispPage = function (argPageInfo, argPageTitle) {
    var strPagePath;

    if (!argPageInfo) { return; }

    strPagePath = "/page/" + argPageInfo + ".xml";

    wdc_main.createWindow(
        argPageTitle,
        null,
        strPagePath,
        argPageTitle,
        "win_" + argPageInfo,
        "selectWindow",
        null,
        null,
        null,
        {},
        "wframe"
    );
};

scwin.gen_btn_menu_onclick = function (e) {
    scwin.dispPage(this.getUserData("exam_key"), this.getValue());
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrap',id:'grp_main_wrap',style:''},E:[{T:1,N:'xf:group',A:{class:'bg_mainbox',id:'',style:''}},{T:1,N:'xf:group',A:{style:'box-sizing:border-box;padding: 12px 10px 0px 10px;',id:'',class:'header'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'WindowContainer 예시',style:'color: #fff',tagname:'strong',class:'fr'}},{T:1,N:'w2:generator',A:{style:'',id:'gen_top_menu',class:'fl'},E:[{T:1,N:'xf:trigger',A:{useDefaultLabel:'true',localeRef:'',style:'min-width: 30px; min-height: 26px; margin: 0px; font-size: 14px;',id:'btn_gen_menu',type:'',class:'btn_exam_tran','ev:onclick':'scwin.gen_btn_menu_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴1'}]}]},{T:1,N:'w2:span',A:{label:'|',style:'line-height: 26px;font-size: 10px;margin: 0px 4px;color: #fff;opacity: 0.5;',id:'spa_gen_bar'}}]}]},{T:1,N:'xf:group',A:{id:'grp_container',class:'container'},E:[{T:1,N:'xf:group',A:{style:'position: absolute;left: 0px;right: 0px;bottom: 0px;top: 0px;',id:'',class:''},E:[{T:1,N:'w2:windowContainer',A:{sequentialArrangeColNum:'2',verticalArrangeNum:'2',controlIconPosition:'left',windowMaximizeAll:'false',id:'wdc_main',useStatusMsg:'true',hideTitleOnMaximize:'false',spaInitCount:'0',nameLayerRearrange:'false',useNameContainer:'false',useControlIconTitle:'false',tooltipDisplay:'true',style:'position: relative;box-sizing: border-box;width: 100%;height: 100%;background: #fff;',sequentialArrangeRowNum:'2',fixArrangeFullScreen:'false',useFixButton:'false',windowAutoResize:'false',windowMaxNum:'5',useCloseButton:'false',stopMinimizeOnNameLayer:'false',toolbarPosition:'bottom',stopToggleOnLast:'false',horizontalArrangeNum:'2',useCustomMsg:'false',tooltipGroupClass:'false',windowTooltipDisplay:'true',class:'example_wdc'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'display: none;',id:'grp_hidden'},E:[{T:1,N:'a',A:{id:'hidden_download_anchor'}}]},{T:1,N:'input',A:{id:'hidden_clipboard_input',style:'position:absolute;left:-1000px;top:-1000px;border:0px solid #fff;'}}]}]}]})