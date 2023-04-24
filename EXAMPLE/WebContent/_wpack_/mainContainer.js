/*amd /mainContainer.xml 13350 cee364036d74d7141e65542872b0eb4e319bcc18502a95ba0d562e3aec69f9a1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_cssFileList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'path',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'style'}]},{T:1,N:'label',E:[{T:4,cdata:'내부 internalStyle'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'/css/example.css'}]},{T:1,N:'label',E:[{T:4,cdata:'[예제별 예시] /css/example.css'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'/cm/css/base.css'}]},{T:1,N:'label',E:[{T:4,cdata:'[공통]/cm/css/base.css'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'/cm/css/contents.css'}]},{T:1,N:'label',E:[{T:4,cdata:'[공통]/cm/css/contents.css'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'/frame/css/ws5_example.css'}]},{T:1,N:'label',E:[{T:4,cdata:'[공통]/frame/css/ws5_example.css'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',src:'/frame/js/mainScript.js',scopeExternal:'true'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gVar = {
    "EXA_MAIN_TYPE" : "P",  //화면 타입
    "jsnParam" : null,
    "jsnLeftMenuLink" : {},
    "layoutComponentID" : "tac_main"
};

scwin.onpageload = async function() {
    $p.js($c.frame.getSrc("/frame/highlight/highlight.min.js"), () => { });

    await scwin.menu.init();
    
    //querystring param 분석
    scwin.parseParam();

    //좌측 메뉴 구성
    await wfm_leftContainer.setSrc($c.frame.getSrc("frame/page/leftContainer.xml"));

    inquires("externalJS/editor4.19.1/ckeditor.js").then(function(argDone){
        CKEDITOR.disableAutoInline=false;
        // CKEDITOR.config.autoUpdateElement = false;
        // CKEDITOR.scayt_autoStartupSince = false;
        
        scwin.setInitPage();
    }, function(arsError){
        console.log("[ERROR]externalJS/editor4.17.1/ckeditor.js", argError);
        scwin.setInitPage();
    });
    
};

scwin.setInitPage = function () {
    scwin.dispDashboard();
    scwin.dispPageByParam();
};

/**
 * querystring의 param 분석
 */
scwin.parseParam = function () {
    var strAllParam;
    var arrParam;
    var jsnParam;

    strAllParam = (location.search).replace("?","");
    arrParam = strAllParam.split("&");

    jsnParam = {};

    arrParam.forEach((argItem,argIndex)=>{
        let arrItem = (argItem || "").trim().split("=");;
        jsnParam[arrItem[0]] = arrItem[1];
    });

    //전역 변수에 할당.
    scwin.gVar.jsnParam = JSON.parse(JSON.stringify(jsnParam));
};

scwin.dispPageByParam = function() {
    var strPage;
    var jsnMenu;
    strPage = scwin.gVar.jsnParam.p;
    if (!strPage) { return; }

    jsnMenu = scwin.menu.getMenuByPage(strPage);

    if (jsnMenu && jsnMenu.ID) {
        scwin.dispPage(jsnMenu, true);        
    }
};

scwin.dispPage = function(argMenuID, argSelectedTab) {
    var jsnMenuData;
    var strMenuID;
    var strMenuTitle;
    var strTabID;
    var isFirstOpen;
    var isValid = false;
    var numTabIndex;
    var strPageContainer;

    switch (typeof argMenuID) {
    case "string":
        jsnMenuData = scwin.menu.getMenuByID(argMenuID);
        isValid = true;
        break;
    case "object":
        if ($.isPlainObject(argMenuID) && argMenuID.ID) {
            jsnMenuData = argMenuID;
            isValid = true;
        }
        break;
    default:
        break;
    }


    strMenuID = jsnMenuData["ID"];
    strMenuTitle = jsnMenuData["TITLE"];

    strTabID = "tab_"+strMenuID;

    numTabIndex = tac_main.getTabIndex(strTabID);

    isFirstOpen = (numTabIndex < 0 || numTabIndex == null) ? true : false;
    
    if (isFirstOpen === true) {
        strPageContainer = $c.frame.getSrc("/frame/page/pageContainer.xml");

        tac_main.addTab(
            strTabID, 
            {
                "label" : strMenuTitle,
                "closable" : "true",
                "openAction" : "select"
            }, {
                "src": strPageContainer, 
                "scope" : true,
                "wframe" : true,
                "dataObject" : {
                    "type" : "json",
                    "name" : "tabParam",
                    "data" : {
                        "menuData" : jsnMenuData
                    }
                }
            }
        );
    }

    if (!isFirstOpen || (isFirstOpen && argSelectedTab !== false)) {
        $p.setTimeout((argTabID) => {
            var cmpTac = tac_main;
            cmpTac.setSelectedTabIndex(cmpTac.getTabIndex(strTabID));
        }, { 
            delay : 10,
            args : [strTabID]
        });
    }
};

/**
 * tab 전체 닫기 click 시
 */
scwin.btn_tab_allclose_onclick = async function() {
    var lenLen = tac_main.getTabCount();
    for( let i = lenLen ; i > 0 ; i-- ){
        await tac_main.deleteTab(i);	
    }
};

//dashboard 추가
scwin.dispDashboard = function() {
    tac_main.addTab(
        "C_dashboard", 
        {
            "label" : "HOME",
            "closable" : "false",
            "openAction" : "select",
            "class" : "tab_home"
        }, {
            //"src": $c.frame.getSrc("/frame/page/home_dashboard.xml"),
            "src": $c.frame.getSrc("/frame/page/intro_dashboard.xml"),
            "scope" : true,
            "wframe" : true
        }
    );
};

//project history 추가
scwin.dispProjectHistory = async function() {
    var strTabID;

    strTabID = "C_history";
    await tac_main.addTab(
        strTabID, 
        {
            "label" : "프로젝트 릴리즈 노트",
            "openAction" : "select"
        }, {
            "src": $c.frame.getSrc("/frame/page/history.xml"),
            "scope" : true,
            "wframe" : true
        }
    );
    
    tac_main.setSelectedTabIndex(tac_main.getTabIndex(strTabID));
};

scwin.btn_sitemap_onclick = function(e) {
    var objRect;
    var numMaxHeight, numMaxWidth;
    var jsnOptions;

    objRect = document.body.getBoundingClientRect();

    numMaxHeight = objRect.height;
    numMaxWidth = objRect.width;

    jsnOptions = {
        id : "pop_sitemap",
        type : "browserPopup",
        resizable : "true",
        top : 120,
        left : "auto",
        width : (numMaxWidth > 1300 ? 1300 : numMaxWidth) + "px",
        height : (numMaxHeight > 650 ? 650 : numMaxHeight) + "px",
        dataObject : {
            "type" : "json",
            "name" : "popupParam",
            "data" : scwin.menu.getAllMenuDataString()
        }
    };

    jsnOptions = $c.frame.getPopupPosition(jsnOptions);

    $p.openPopup(
        $c.frame.getSrc("/frame/page/sitemap.xml"), 
        jsnOptions
    );
};

scwin.btn_online_doc_onclick = function(e) {
    window.open("https://docs1.inswave.com/ws5_sp5_example", "_blank");
};

//header 메뉴 확장/축소
scwin.btn_toggle_menu_onclick = function() {
    grp_main_wrap.toggleClass("show_menu");
};

/**
 * 상단의 logo 클릭 시
 */
scwin.btn_logo_onclick = function() {
    location.reload();
};

/**
 * 탭 변경 시
 */
scwin.tac_main_onchange = function(tabID,idx,userTabID) {
    var strMenuID;
    var strSelectedMenuID;
    var strkey = "ex_selectedMenuID";
    strMenuID = userTabID.replace("tab_", "");

    //기 선택된 요소 class 제거
    strSelectedMenuID = this.getUserData(strkey);

    if (strSelectedMenuID) {
        scwin.setEmpClass_leftMenu(strSelectedMenuID, false);
    }
    
    //선택된 요소 class 추가 >>> 확장 처리까지.
    scwin.setEmpClass_leftMenu(strMenuID, true);
    this.setUserData(strkey, strMenuID);
};

/**
 * 좌측 메뉴 강조 class 적용
 */
scwin.setEmpClass_leftMenu = function(argCurMenuID, argIsRemove) {
    var strMenuComp;
    var arrMenuComp;
    var numLenArrMenuComp;
    
    strMenuComp = scwin.gVar.jsnLeftMenuLink[argCurMenuID];

    if (!strMenuComp) { $c.frame.log("scwin.setEmpClass_leftMenu", "메뉴 정보가 없습니다 : " + argCurMenuID, "debug"); return; }

    arrMenuComp = strMenuComp.split("|");

    numLenArrMenuComp = arrMenuComp.length;

    arrMenuComp.forEach((item, index) => {
        //menu
        let cmpMenu = $p.getComponentById(item);
        
        if (!cmpMenu) { $c.frame.log("scwin.setEmpClass_leftMenu", "컴포넌트를 찾을 수 없습니다. : " + item, "debug"); return; }

        if (argIsRemove === false) {
            cmpMenu.removeClass("on");
        } else {
            cmpMenu.addClass("on");

            if (numLenArrMenuComp-1 == index) {
                cmpMenu.getParent().removeClass("isCollapsed");
            } else if (index == 1) {
                cmpMenu.removeClass("isCollapsed");
            }
        }
    });

    $p.getComponentById(arrMenuComp[0]).focus();
    
};
// 폰트사이즈
scwin.header_hide_onlabelclick = function(index,checked,value) {
    if(checked){
        $("html").css("font-size","12px");
    }else{
        $("html").css("font-size","10px");
    }
};

/**
 * PC 모드 이동
 */
scwin.btn_pc_onclick = function(e) {
    location.href = EXA_URL_MOBILE; 
};

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.test_subbox{display:flex;flex-direction:column;padding:0;background:#eff1f3}.example_breadcrumb{margin-bottom:0;padding:20px 20px 0 30px}.mb_def{margin-bottom:0!important;padding:0 20px 16px 30px;box-sizing:border-box}.mb_def+.dbbox{padding:0 20px 0 30px}.mb_def+.dbbox+.dfbox{margin-top:0!important}.test_subbox .test_examplebox{flex:1;height:auto;background:#fff}.test_examplebox>.tabbutton{margin-top:0!important;padding:12px 20px 0 30px!important;background-color:#eff1f3;border-bottom:1px solid #ebecf0}.test_examplebox_contents{left:20px;top:44px;right:20px;bottom:20px}.test_examplebox>.tabbutton.desc>.desc,.test_examplebox>.tabbutton.exam>.exam{border-bottom:2px solid #368cb2;border-radius:0;background:0 0;color:#368cb2;line-height:36px}.tabc_layout>.w2tabcontrol_control .w2tabcontrol_tabhost li.w2tabcontrol_active{background-color:#eff1f3}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrap show_menu pc',id:'grp_main_wrap',style:''},E:[{T:1,N:'xf:group',A:{class:'bg_mainbox',id:'',style:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'header'},E:[{T:1,N:'w2:anchor',A:{class:'btn_toggle_menu',id:'btn_toggle_menu',name:'',outerDiv:'false',style:'','ev:onclick':'scwin.btn_toggle_menu_onclick',title:'메뉴 확장/축소'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'tootleMenu'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'h1'},E:[{T:1,N:'w2:anchor',A:{class:'logo',id:'btn_logo',outerDiv:'false','ev:onclick':'scwin.btn_logo_onclick',title:'브라우저 새로고침'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'inswave systems'}]}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'ver.',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{id:'',label:'SP5',style:'',tagname:'strong'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'grp_r_link'},E:[{T:1,N:'xf:group',A:{class:'input_switch',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',cols:'','ev:onlabelclick':'scwin.header_hide_onlabelclick',id:'header_hide',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.header_hide_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btn_exam_tran_grp'},E:[{T:1,N:'w2:span',A:{id:'',label:'|',class:'v_bar'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_sitemap_onclick',style:'',id:'btn_sitemap',type:'button',class:'btn_exam_tran'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사이트맵'}]}]},{T:1,N:'w2:span',A:{id:'',label:'|',class:'v_bar'}},{T:1,N:'xf:trigger',A:{class:'btn_exam_tran','ev:onclick':'scwin.btn_pc_onclick',id:'btn_pc',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Mobile 버전'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_container',class:'container'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'contents'},E:[{T:1,N:'w2:tabControl',A:{confirmTrueAction:'exist',confirmFalseAction:'new',useTabKeyOnly:'true',tabScroll:'true',closeAllBtn:'true',useMoveNextTabFocus:'false',closable:'true',useConfirmMessage:'false',alwaysDraw:'false',style:'',id:'tac_main',class:'tabc_layout','ev:onchange':'scwin.tac_main_onchange',changeActiveTab:'true'}},{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'',id:'btn_tab_allclose',class:'tab_allclose','ev:onclick':'scwin.btn_tab_allclose_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'탭전체닫기'}]}]}]}]},{T:1,N:'w2:wframe',A:{class:'side',id:'wfm_leftContainer',style:''}}]},{T:1,N:'xf:group',A:{style:'display: none;',id:'grp_hidden'},E:[{T:1,N:'a',A:{id:'hidden_download_anchor'}}]},{T:1,N:'input',A:{id:'hidden_clipboard_input',style:'position:absolute;left:-1000px;top:-1000px;border:0px solid #fff;'}}]}]}]})