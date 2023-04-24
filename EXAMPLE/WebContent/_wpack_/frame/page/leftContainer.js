/*amd /frame/page/leftContainer.xml 19072 ecd6b396e72673cef641358b24baafb98221d2ecea3b2e607140b38bcc1029fe */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gVar = {
    strArrOrgMenu : null,
    arrOrgMenu : [],
    arrCmpCagetory : []
};

scwin.onpageload = function() {
    scwin.initPage();
};

/**
 * 화면 초기화. maincontainer에서 
 */
scwin.initPage = function() {
    scwin.displayMenu(scwin.getMenuData()); 
};

scwin.getMenuData = function () {
    var winObjMain;
    var arrAllMenuData;
    
    arrAllMenuData = $p.main().scwin.menu.getAllMenuDataString();

    if (!arrAllMenuData) {
        console.log("메뉴 데이터가 없습니다. ", arrAllMenuData);
        return false;
    }

    arrAllMenuData = JSON.parse(arrAllMenuData);

    scwin.gVar.arrOrgMenu = arrAllMenuData;
    scwin.gVar.strArrOrgMenu = JSON.stringify(arrAllMenuData);

    return arrAllMenuData;
};

scwin.setMenuTitle = function (argComp, argLabel, argPath, argMenuID) {
    argComp.setValue(argLabel);
    argComp.setUserData("menu_path", argPath);
    argComp.setUserData("menu_id", argMenuID);
    argComp.bind("onclick", scwin.lblMenu_onclick);
};

//메뉴 출력
scwin.displayMenu = function (argArrMenu) {
    var i, i_max, i_item;
    var compGen1, 
        numGen1, 
        compGen2, 
        numGen2,
        strDynamicGenID2,
        compGen3,
        numGen3,
        strKeyGen1,
        strKeyGen2;
    var jsnMenuCompLink = {};

    var refFnc_setMenuTitle = scwin.setMenuTitle;
    var refFnc_getHTML_keyword = $c.frame.getHtml_keyword;
    
    var innFnc_setMenuCategory = function (argComp, argLabel) {
        argComp.addClass("com_example_left_menu_category");  //카테고리 class 추가
        argComp.addClass("isCollapsed");  //접힘 class 추가
        argComp.removeClass("com_example_left_menu_lbl");  //label calss 삭제
        argComp.setValue(argLabel);
        argComp.bind("onclick", scwin.lblMenuCategory_onclick);
    };

    var innFnc_setMenuKeyword = function (argStrCompID, argCompParent, argStrKeyword) {
        if (!argStrKeyword) return;
        //태그 동적 생성.
        let compTmp = $p.dynamicCreate(
            argStrCompID,
            "textbox", 
            {
                "escape" : "false"
            },
            argCompParent
        );
        compTmp.addClass("com_example_lef_menu_keyword");
        compTmp.setValue(refFnc_getHTML_keyword(argStrKeyword));

    };


    scwin.gVar.arrCmpCagetory = []; //카테고리 객체 배열
    let arrCmpCagetory = [];

    numGen1 = 0;    //depth1 반복수
    numGen2 = 0;
    numGen3 = 0;

    let strID_depth1 = "";
    let strID_depth2 = "";

    for (i=0, i_max=argArrMenu.length; i<i_max; i++) {
        let jsnMenu = argArrMenu[i];
        let strMenuDepth = jsnMenu.DEPTH;
        let strMenuType = jsnMenu.TYPE;
        let strMenuTitle = jsnMenu.DISP_MENU_TITLE || jsnMenu.TITLE;
        let strMenuPath = jsnMenu.PATH;
        let strMenuKeyword = jsnMenu.ALL_KEYWORD;
        let strMenuID = jsnMenu.ID;

        let cmpTmp;
        
        let isUnsorted = false; //미분류

        switch (strMenuDepth) {
        case "1":   //대분류
            if (strMenuType == "C") {
                compGen1 = $p.getComponentById("gen_depth1");

                compGen1.insertChild(numGen1);

                //title
                cmpTmp = compGen1.getChild(numGen1, "tbx_title_depth1");
                strID_depth1 = cmpTmp.getID();
                cmpTmp.setValue(strMenuTitle);

                //확장축소 객체
                let cmpTmpCate = compGen1.getChild(numGen1, "grp_depth1_title");
                cmpTmpCate.setUserData("cate_depth", "1");
                arrCmpCagetory.push(cmpTmpCate);

                strKeyGen1 = jsnMenu.ID;

                compGen2 = compGen1.getChild(numGen1, "gen_depth2");

                numGen1++;

                numGen2 = 0;
                numGen3 = 0;
                strKeyGen2 = null;
                compGen3 = null;

                strID_depth2 = "";

            } else { 
                isUnsorted = true;
            }
            break;
        case "2":
            if (jsnMenu.PARENT_ID === strKeyGen1) {
                compGen1 = gen_depth1;

                //메뉴 출력.
                compGen2.insertChild(numGen2);

                let compTitle_depth2 = compGen2.getChild(numGen2, "lbl_menu_depth2");

                //메뉴 타입이 분류인 경우
                if (strMenuType == "C") {
                    compGen2.getChild(numGen2, "grp_list_depth2").removeClass("com_example_left_menu_lbl_wrap");
                    innFnc_setMenuCategory(compTitle_depth2, strMenuTitle);
                    strDynamicGenID2 =  compGen1.getOriginalID()+"_" + numGen1 + "_" + "gen_depth2" + "_" + numGen2;
                    
                    //확장축소 객체
                    compTitle_depth2.setUserData("cate_depth", "2");
                    arrCmpCagetory.push(compTitle_depth2);

                    compGen3 = $p.dynamicCreate(
                        strDynamicGenID2,
                        "group", 
                        {
                            "tagname" : "ul"
                        }, 
                        compGen2.getChild(numGen2, "grp_list_depth2")
                    );

                    strID_depth2 = compTitle_depth2.getID();

                    strKeyGen2 = jsnMenu.ID;

                    numGen3 = 0;
                } else {
                    refFnc_setMenuTitle(compTitle_depth2, strMenuTitle, strMenuPath, strMenuID);

                    // if (strMenuKeyword) {
                    //     //태그 동적 생성.
                    //     innFnc_setMenuKeyword(compGen1.getOriginalID()+"_" + numGen1 + "_" + "tbx_keyword_depth2" + "_" + numGen2, compGen2.getChild(numGen2, "grp_list_depth2"), strMenuKeyword);
                    // }

                    //메뉴별 컴포넌트 아이디 할당
                    jsnMenuCompLink[strMenuID] = compTitle_depth2.getID()+"|"+strID_depth1;
                }

                numGen2 ++;
            } else { 
                isUnsorted = true;
            }
            
            break;
        case "3":
            if (jsnMenu.PARENT_ID === strKeyGen2) {
                let strTmpID_li = compGen3.getOriginalID() + "_" + "grp_menu_li_depth3" + "_" + numGen3;
                let strTmpID_anchor = compGen3.getOriginalID() + "_" + "lbl_menu_depth3" + "_" + numGen3;
                let strTmpID_keyword = compGen3.getOriginalID() + "_" + "tbx_keyword_depth3" + "_" + numGen3;

                let tmpComp_li = $p.dynamicCreate(
                    strTmpID_li,
                    "group", 
                    { "tagname" : "li"}, 
                    compGen3
                );

                tmpComp_li.addClass("com_example_left_menu_lbl_wrap");

                let tmpComp_lbl = $p.dynamicCreate(
                    strTmpID_anchor,
                    "anchor", 
                    { "outerDiv" : "false" },
                    tmpComp_li
                );

                tmpComp_lbl.addClass("com_example_left_menu_lbl");
                refFnc_setMenuTitle(tmpComp_lbl, strMenuTitle, strMenuPath, strMenuID);

                // if (strMenuKeyword) {
                //     //태그 동적 생성.
                //     innFnc_setMenuKeyword(strTmpID_keyword, tmpComp_li, strMenuKeyword);
                // }

                //메뉴별 컴포넌트 아이디 할당
                jsnMenuCompLink[strMenuID] = tmpComp_lbl.getID()+"|"+strID_depth2+"|"+strID_depth1;
                
                numGen3 ++;
            }
            break;
        default:
            isUnsorted = true;
            break;
        }

        if (isUnsorted === true) {
            console.log("분류 없음!!! >> ", JSON.stringify(jsnMenu));
        }

    }//for

    scwin.gVar.arrCmpCagetory = arrCmpCagetory;

    let _main = $p.main().scwin;
    if (!_main.gVar) _main.gVar = {};

    _main.gVar.jsnLeftMenuLink = jsnMenuCompLink;

    //첫번째 메뉴의 카테고리 열기.   
    arrCmpCagetory[0].removeClass("isCollapsed");
    let cmpTmpSecDepth = arrCmpCagetory[1];
    if (cmpTmpSecDepth.getUserData("cate_depth") == "2") {
        cmpTmpSecDepth.removeClass("isCollapsed");
    }

};

//메뉴 click
scwin.lblMenu_onclick = function () {
    var menuID = this.getUserData("menu_id");
    var objMain;

    if(!menuID) {
        alert("메뉴 ID가 존재하지 않습니다.");
        return;
    }

    objMain = $p.main();
    objMain.scwin.dispPage(menuID, true);
};

//분류 label click
scwin.lblMenuCategory_onclick = function () {
    var strClass = "isCollapsed";

    if (this.hasClass(strClass)) {
        this.removeClass(strClass)
    } else {
        this.addClass(strClass)
    }
    
};

//대분류 label click
scwin.lbl_menu_depth2_onclick = function() {
    var strClass = "isCollapsed";

    if (this.hasClass(strClass)) {
        this.removeClass(strClass)
    } else {
        this.addClass(strClass)
    }
};

scwin.tbx_title_depth1_onclick = function(e) {
    var strClass = "isCollapsed";
    var cmpGroup;

    cmpGroup = this.getParent();

    if (cmpGroup.hasClass(strClass)) {
        cmpGroup.removeClass(strClass)
    } else {
        cmpGroup.addClass(strClass)
    }
};

// 메뉴 검색 버튼 click 시
scwin.btn_searchMenu_onclick = function(e) {
    scwin.searchMenu();
};

// 메뉴 검색
scwin.searchMenu = function() {
    var strKeyword;
    var arrOrgMenu;
    var arrResult;
    var _EXA_CONTEXT_PATH = EXA_CONTEXT_PATH;

    strKeyword = ibx_search_input.getValue().trim().toLowerCase();

    if (!strKeyword) {
        scwin.switchView("default");
        return;
    }

    arrOrgMenu = JSON.parse(scwin.gVar.strArrOrgMenu);
    
    arrResult = arrOrgMenu.filter((item) => {
        let retValue = false;
        //파일이 아닌 경우 
        if (item.TYPE != "F") return false; 

        //메뉴명
        let strFilter_TITLE = item["TITLE"].toLowerCase();
        if (strFilter_TITLE.indexOf(strKeyword) > -1) {
            //강조
            item["DISP_TITLE"] = item["TITLE"].replace(new RegExp("("+strKeyword+")","i"), '<span class="highlight">$1</span>');
            retValue = true;
        } else {
            item["DISP_TITLE"] = item["TITLE"];
        }

        //키워드
        let strFilter_ALL_KEYWORD = ("|" + item["ALL_KEYWORD"] + "|");
        //let strFilter_KEYWORD = "|" + strKeyword + "|";   //keyword와 동일한 경우만 출력
        let strFilter_KEYWORD = strKeyword;

        if (strFilter_ALL_KEYWORD.toLowerCase().indexOf(strFilter_KEYWORD) > -1) {
            //item["ALL_KEYWORD"] = strFilter_ALL_KEYWORD.replace(new RegExp(strFilter_KEYWORD,"ig"), '|<span class="highlight">'+strKeyword+'</span>|').replace(/^[|]/,"").replace(/[|]$/,""); //keyword와 동일한 경우만 출력
            item["ALL_KEYWORD"] = strFilter_ALL_KEYWORD.replace(new RegExp(strFilter_KEYWORD,"ig"), '<span class="highlight">'+strKeyword+'</span>').replace(/^[|]/,"").replace(/[|]$/,"");
            
            let arrSearchedKeyword = item["ALL_KEYWORD"].split("|").filter(function(argItem){
                if (argItem.indexOf('<span class="highlight">') > -1) return true ;
                return false;
            });
            item["SEARCHED_KEYWORD"] = arrSearchedKeyword.join("|");
            retValue = true;
        }

        //파일명
        item["DISP_PATH"] = (_EXA_CONTEXT_PATH + item["PATH"]);
        let strFilter_PATH = item["DISP_PATH"].toLowerCase();
        if (strFilter_PATH.indexOf(strKeyword) > -1) {
            item["DISP_PATH"] = item["DISP_PATH"].replace(new RegExp("("+strKeyword+")","i"), '<span class="highlight">$1</span>');
            //강조
            retValue = true;
        }

        return retValue;
    });

    scwin.displayResult(arrResult, strKeyword);

    scwin.switchView("result");
};

//검색 결과 출력
scwin.displayResult = function (argArrMenu, argKeyword) {
    var numArrLength;
    var i, i_max, i_item;
    var compGen1;

    var refFnc_setMenuTitle = scwin.setMenuTitle;
    var refFnc_getHTML_keyword = $c.frame.getHtml_keyword;

    compGen1 = gen_result_ul;

    i_max = argArrMenu.length;

    compGen1.removeAll();

    //tbx_result_title.setValue("검색 결과 (" + i_max + "건)");
    tbx_result_title.setValue('<span class="highlight">'+argKeyword+'</span>으(로) <span class="highlight">'+i_max+'</span>건이 검색되었습니다.');
    
    for (i=0; i<i_max; i++) {
        let compTmp;
        let strKeyword;
        let tmpStr;

        i_item = argArrMenu[i];

        compGen1.insertChild(i);

        compTmp = compGen1.getChild(i, "lbl_result_menu");

        //브래드크럼 출력
        tmpStr = i_item["MENU_BREADCRUMBS"];

        tmpStr = (tmpStr ? "[" + tmpStr.split("%||%").join(" > ") + "] " :"");
        
        //메뉴명에 브래드크럼이 포함된 경우 제외
        if (i_item["TITLE"].indexOf(tmpStr) == 0 ) { tmpStr = ""; }

        refFnc_setMenuTitle(compTmp, (i+1) + ". "+ tmpStr + i_item["DISP_TITLE"], i_item["PATH"], i_item["ID"]);

        //키워드 출력
        //strKeyword = i_item["ALL_KEYWORD"];
        strKeyword = i_item["SEARCHED_KEYWORD"] || "";  //검색된 키워드만 출력
        
        compTmp = compGen1.getChild(i, "tbx_result_keyword");
        if (strKeyword) {
            compTmp.setValue(refFnc_getHTML_keyword(strKeyword, "leftmenu"));
        } else {
            //compTmp.setStyle("display","none");
            compTmp.remove(false);
        }

        compTmp = compGen1.getChild(i, "tbx_result_path");
        //파일 경로 출력
        compTmp.setValue("파일 경로 : " + i_item["DISP_PATH"]);
    }

};

//메뉴 영역 노출 컨텐츠 결정
scwin.switchView = function(argType) {
    if (grp_left_menu_tabbutton.hasClass(argType)) { return; }

    switch (argType) {
    case "result":
        grp_left_menu_tabbutton.changeClass("default", "result");
        break;
    case "default":
    default:
        grp_left_menu_tabbutton.changeClass("result", "default");
        
        break;
    }
};

scwin.change_menuTab = function() {
    var strTarget;
    var cmpParent;
    
    strTarget = this.getUserData("userData1");

    cmpParent = this.getParent();

    cmpParent.removeClass("default");
    cmpParent.removeClass("result");
    cmpParent.addClass(strTarget);

};
scwin.ibx_search_input_oneditkeyup = function(info,e) {
    if (info.keyCode == 13) {
        scwin.searchMenu();
    }
};

scwin.btn_menu_expand_onclick = function(e) {
    let _arrCmpCagetory;

    _arrCmpCagetory = scwin.gVar.arrCmpCagetory;

    _arrCmpCagetory.forEach(function(argItem){
        if (argItem.hasClass("isCollapsed")){
            argItem.removeClass("isCollapsed");
        }
    });
};

scwin.btn_menu_collapse_onclick = function(e) {
    let _arrCmpCagetory;

    _arrCmpCagetory = scwin.gVar.arrCmpCagetory;

    _arrCmpCagetory.forEach(function(argItem){
        if (!argItem.hasClass("isCollapsed")){
            argItem.addClass("isCollapsed");
        }
    });
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'com_example_left_menu grp_tab'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grp_left_menu_search'},E:[{T:1,N:'xf:input',A:{class:'',id:'ibx_search_input',placeholder:'메뉴명, 파일명, 키워드로 검색',style:'min- width:148px;','ev:oneditkeyup':'scwin.ibx_search_input_oneditkeyup',enterBlur:'false'}},{T:1,N:'xf:trigger',A:{class:'btn_all_search',id:'btn_searchMenu',style:'',type:'button','ev:onclick':'scwin.btn_searchMenu_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'grp_left_menu_tabbutton',class:'grp_left_menu_tabbutton default'},E:[{T:1,N:'w2:anchor',A:{class:'left_menu_tabbutton default','ev:onclick':'scwin.change_menuTab',id:'btn_showMenu',outerDiv:'false',userData1:'default'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예제 목록'}]}]},{T:1,N:'w2:anchor',A:{class:'left_menu_tabbutton result','ev:onclick':'scwin.change_menuTab',id:'btn_showResult',outerDiv:'false',userData1:'result'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 결과'}]}]},{T:1,N:'xf:group',A:{id:'grp_left_menu_shortcut_box',style:'',class:'shortcut_box'},E:[{T:1,N:'w2:anchor',A:{class:'btn_fold_list on',id:'btn_menu_expand',outerDiv:'false',style:'','ev:onclick':'scwin.btn_menu_expand_onclick',title:'메뉴 전체 펼치기'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴펼치기'}]}]},{T:1,N:'w2:anchor',A:{class:'btn_fold',id:'btn_menu_collapse',outerDiv:'false',style:'',disabled:'','ev:onclick':'scwin.btn_menu_collapse_onclick',title:'메뉴 전체 접기'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴접기'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'grp_left_menu_content'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_left_menu',class:'grp_left_menu_default'},E:[{T:1,N:'w2:generator',A:{tagname:'ul',style:'',id:'gen_depth1',class:'minH com_example_grp_margin_1depth depth1 scrollbar'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_depth1_title',class:'pos_relative ofh isCollapsed'},E:[{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.tbx_title_depth1_onclick',style:'',id:'tbx_title_depth1',label:'서브타이틀',class:'fl com_example_left_menu_category_depth1'}}]},{T:1,N:'w2:generator',A:{tagname:'ul',style:'',id:'gen_depth2'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:'grp_list_depth2',class:'com_example_left_menu_lbl_wrap'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'',id:'lbl_menu_depth2',class:'com_example_left_menu_lbl'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'depth2 label'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'grp_left_menu_result',class:'grp_left_menu_result'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grp_left_menu_result_text'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'tbx_result_title',label:'',class:'',escape:'false'}}]},{T:1,N:'w2:generator',A:{tagname:'ul',style:'',id:'gen_result_ul',class:'grp_result_ul scrollbar'},E:[{T:1,N:'xf:group',A:{tagname:'li',id:'grp_result_li'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'',id:'lbl_result_menu',class:'com_example_left_menu_lbl',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'depth2 label'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'tbx_result_keyword',label:'',class:'com_example_lef_menu_keyword',escape:'false'}},{T:1,N:'w2:textbox',A:{class:'com_example_lef_menu_result_path',escape:'false',id:'tbx_result_path',label:'',style:''}}]}]}]}]}]}]}]}]})