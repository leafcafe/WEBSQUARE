/*amd /mainContainer_mobile.xml 10150 a2e807efd1eb23fdfda3b3e22ea70676de0dc9a6d9741189d2498e0c8844a71a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_cssFileList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'path',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'style'}]},{T:1,N:'label',E:[{T:4,cdata:'내부 internalStyle'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'/css/example.css'}]},{T:1,N:'label',E:[{T:4,cdata:'[예제별 예시] /css/example.css'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'/cm/css/base.css'}]},{T:1,N:'label',E:[{T:4,cdata:'[공통]/cm/css/base.css'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'/cm/css/contents.css'}]},{T:1,N:'label',E:[{T:4,cdata:'[공통]/cm/css/contents.css'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'path',E:[{T:4,cdata:'/frame/css/ws5_example.css'}]},{T:1,N:'label',E:[{T:4,cdata:'[공통]/frame/css/ws5_example.css'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',src:'/frame/js/mainScript.js',scopeExternal:'true'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gVar = {
    "EXA_MAIN_TYPE" : "M",  //화면 타입
    "jsnParam" : null,
    "jsnLeftMenuLink" : {},
    "jsnContParam" : null,
    "layoutComponentID" : "wfm_mainContent"
};

scwin.onpageload = async function() {
    $p.js($c.frame.getSrc("/frame/highlight/highlight.min.js"), () => { });

    await scwin.menu.init();

    //querystring param 분석
    scwin.parseParam();

    //좌측 메뉴 구성
    await wfm_leftContainer.setSrc($c.frame.getSrc("frame/page/leftContainer.xml"));

    inquires("externalJS/editor4.17.1/ckeditor.js").then(function(argDone){
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
    if (scwin.dispPageByParam() === false) {
        scwin.dispDashboard();
    }
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
    if (!strPage) { return false; }

    jsnMenu = scwin.menu.getMenuByPage(strPage);

    if (jsnMenu && jsnMenu.ID) {
        scwin.dispPage(jsnMenu);
        return true;
    }
    return false;
};

scwin.dispPage = function(argMenuID) {
    var jsnMenuData;
    var strMenuID;
    var strMenuTitle;
    var isValid = false;

    grp_main_wrap.removeClass("show_menu");

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

    if (!isValid) {
        console.error("메뉴를 찾을 수 없습니다. >> " + argMenuID);
        return false;
    }

    strMenuID = jsnMenuData["ID"];
    strMenuTitle = jsnMenuData["TITLE"];

    wfm_mainContent.setUserData("exam_menuID", strMenuID);
    wfm_mainContent.setSrc($c.frame.getSrc("/frame/page/pageContainer_mobile.xml"));

    scwin.gVar.jsnContParam = { "menuData" : jsnMenuData };

    //강조 class 적용
    let strSelectedMenuID;
    let strkey = "ex_selectedMenuID";

    //기 선택된 요소 class 제거
    strSelectedMenuID = wfm_mainContent.getUserData(strkey);

    if (strSelectedMenuID) {
        scwin.setEmpClass_leftMenu(strSelectedMenuID, false);
    }
    
    //선택된 요소 class 추가 >>> 확장 처리까지.
    scwin.setEmpClass_leftMenu(strMenuID, true);
    wfm_mainContent.setUserData(strkey, strMenuID);

};

/**
 * tab 전체 닫기 click 시
 */
scwin.btn_tab_allclose_onclick = function() {
    var lenLen = tac_main.getTabCount();
    for( let i = lenLen ; i > 0 ; i-- ){
        tac_main.deleteTab(i);	
    }
};

//dashboard 추가
scwin.dispDashboard = function() {
    //wfm_mainContent.setSrc($c.frame.getSrc("/frame/page/home_dashboard.xml"));
    wfm_mainContent.setSrc($c.frame.getSrc("/frame/page/intro_dashboard.xml"));

    scwin.removeEmpClass_leftMenu();
};

//project history 추가
scwin.dispProjectHistory = function() {
    wfm_mainContent.setSrc($c.frame.getSrc("/frame/page/history.xml"));
    scwin.removeEmpClass_leftMenu();
};

scwin.btn_sitemap_onclick = function(e) {
    var objRect;
    var numMaxHeight, numMaxWidth;

    objRect = document.body.getBoundingClientRect();

    numMaxHeight = objRect.height;
    numMaxWidth = objRect.width;
    
    $p.openPopup(
        $c.frame.getSrc("/frame/page/sitemap.xml"), 
        {
            id : "pop_sitemap",
            type : "browserPopup",
            resizable : "true",
            width : (numMaxWidth > 1300 ? 1300 : numMaxWidth) + "px",
            height : (numMaxHeight > 600 ? 600 : numMaxHeight) + "px",
            dataObject : {
                "type" : "json",
                "name" : "popupParam",
                "data" : scwin.menu.getAllMenuDataString()
            }
        });
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

/**
 * 좌측 메뉴 강조 class 제거
 */
scwin.removeEmpClass_leftMenu = function() {
    //강조 class 적용
    var strSelectedMenuID;
    var strkey = "ex_selectedMenuID";
    
    //기 선택된 요소 class 제거
    strSelectedMenuID = wfm_mainContent.getUserData(strkey);

    if (strSelectedMenuID) {
        scwin.setEmpClass_leftMenu(strSelectedMenuID, false);

        wfm_mainContent.setUserData(strkey, "");
    }
};
/**
 * PC 모드 이동
 */
scwin.btn_pc_onclick = function(e) {
    location.href = EXA_URL_PC; 
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrap mobile',id:'grp_main_wrap',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'header'},E:[{T:1,N:'w2:anchor',A:{class:'btn_toggle_menu',id:'btn_toggle_menu',name:'',outerDiv:'false',style:'','ev:onclick':'scwin.btn_toggle_menu_onclick',title:'메뉴 확장/축소'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'tootleMenu'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'h1'},E:[{T:1,N:'w2:anchor',A:{class:'logo',id:'btn_logo',outerDiv:'false','ev:onclick':'scwin.btn_logo_onclick',title:'브라우저 새로고침'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'inswave systems'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'ver.',class:'ws_ver',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{id:'',label:'SP5',class:'ws_ver',style:'',tagname:'strong'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grp_r_link'},E:[{T:1,N:'xf:group',A:{id:'',class:''},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_sitemap_onclick',style:'display: none;',id:'btn_sitemap',type:'button',class:'btn_exam_tran'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사이트맵'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_pc_mode',id:'btn_pc',style:'',type:'button','ev:onclick':'scwin.btn_pc_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PC 버전'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_container',class:'container'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'contents'},E:[{T:1,N:'w2:wframe',A:{style:'min- height: 300px;',id:'wfm_mainContent'}}]}]},{T:1,N:'w2:wframe',A:{class:'side',id:'wfm_leftContainer',style:''}}]},{T:1,N:'xf:group',A:{style:'display: none;',id:'grp_hidden'},E:[{T:1,N:'a',A:{id:'hidden_download_anchor'}}]},{T:1,N:'input',A:{id:'hidden_clipboard_input',style:'position:absolute;left:-1000px;top:-1000px;border:0px solid #fff;'}}]}]}]})