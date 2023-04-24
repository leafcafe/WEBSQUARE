/*amd /frame/page/sitemap.xml 20023 74fd821b7c6d7f25ed78bd56867b59a75a29dbf501e78023ee3712dc9d7e3b28 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gVar = {
    strArrOrgMenu : null,
    arrOrgMenu : [],
    _gen_top_category_render : null
};

scwin.onpageload = function() {
    scwin.displayMenu(scwin.getMenuData());

    scwin.displayKeyword();

    scwin.gVar._gen_top_category_render = gen_top_category.render;

    ibx_search_input.focus();
};


scwin.getMenuData = function () {
    var winObjMain;
    var arrAllMenuData;
    
    /*
    winObjMain = opener ? opener.$p.main() : $p.main();
    console.log(winObjMain);
    console.log( $p.getParameter("popupParam"));
    */

    arrAllMenuData = $p.getParameter("popupParam");

    if (!$.isArray(arrAllMenuData)) {
        console.log("메뉴 데이터가 없습니다. popupParam : ", arrAllMenuData);
        return false;
    }

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

    var cmpGenTopCategory,
        numGenTopCategory,
        cmpTopCategory;

    var refFnc_setMenuTitle = scwin.setMenuTitle;
    var refFnc_getHTML_keyword = $c.frame.getHtml_keyword;
    

    var innFnc_setMenuCategory = function (argComp, argLabel) {
        argComp.addClass("com_example_sitemap_category");  //카테고리 class 추가
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
        compTmp.addClass("com_example_sitemap_grd_keyword");
        compTmp.setValue(refFnc_getHTML_keyword(argStrKeyword));

    };

    cmpGenTopCategory = gen_top_category; 
    numGenTopCategory = 0;
    
    numGen1 = 0;    //depth1 반복수
    numGen2 = 0;
    numGen3 = 0;

    for (i=0, i_max=argArrMenu.length; i<i_max; i++) {
        let jsnMenu = argArrMenu[i];

        let strMenuDepth = jsnMenu.DEPTH;
        let strMenuType = jsnMenu.TYPE;
        let strMenuTitle = jsnMenu.TITLE;
        let strMenuPath = jsnMenu.PATH;
        let strMenuKeyword = jsnMenu.ALL_KEYWORD;
        let strMenuID = jsnMenu.ID;

        let isUnsorted = false; //미분류

        switch (strMenuDepth) {
        case "1":   //대분류
            if (strMenuType == "C") {
                compGen1 = $p.getComponentById("gen_depth1");

                compGen1.insertChild(numGen1);

                let tmpCmpDepth1CategoryBox = compGen1.getChild(numGen1, "gen_depth1_li");

                //컴포넌트 소개의 경우 class 추가.
                if (strMenuTitle == "컴포넌트 소개") {
                    tmpCmpDepth1CategoryBox.addClass("row");    
                }

                //title
                compGen1.getChild(numGen1, "tbx_title_depth1").setValue(strMenuTitle);

                strKeyGen1 = jsnMenu.ID;

                //시작 상단 카테고리
                cmpGenTopCategory.insertChild(numGenTopCategory);
                cmpTopCategory = cmpGenTopCategory.getChild(numGenTopCategory, "btn_top_category");
                cmpTopCategory.setValue(strMenuTitle);
                cmpTopCategory.setHref("#"+tmpCmpDepth1CategoryBox.getID())
                numGenTopCategory ++;
                //종료 상단 카테고리

                compGen2 = compGen1.getChild(numGen1, "gen_depth2");

                numGen1++;

                numGen2 = 0;
                numGen3 = 0;
                strKeyGen2 = null;
                compGen3 = null;

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
                    compTitle_depth2.setDisabled(true);

                    innFnc_setMenuCategory(compTitle_depth2, strMenuTitle);
                    strDynamicGenID2 =  compGen1.getOriginalID()+"_" + numGen1 + "_" + "gen_depth2" + "_" + numGen2;

                    compGen3 = $p.dynamicCreate(
                        strDynamicGenID2,
                        "group", 
                        {
                            "tagname" : "ul"
                        }, 
                        compGen2.getChild(numGen2, "grp_list_depth2")
                    );

                    strKeyGen2 = jsnMenu.ID;

                    numGen3 = 0;
                } else {
                    refFnc_setMenuTitle(compTitle_depth2, strMenuTitle, strMenuPath, strMenuID);

                    if (strMenuKeyword) {
                        //태그 동적 생성.
                        innFnc_setMenuKeyword(compGen1.getOriginalID()+"_" + numGen1 + "_" + "tbx_keyword_depth2" + "_" + numGen2, compGen2.getChild(numGen2, "grp_list_depth2"), strMenuKeyword);
                    }
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
                    {
                        "tagname" : "li"
                        
                    }, 
                    compGen3
                );

                let tmpComp_lbl = $p.dynamicCreate(
                    strTmpID_anchor,
                    "anchor", 
                    {
                        "outerDiv" : "false"
                        
                    },
                    tmpComp_li
                );

                tmpComp_lbl.addClass("com_example_sitemap_menu_lbl");
                refFnc_setMenuTitle(tmpComp_lbl, strMenuTitle, strMenuPath, strMenuID);

                if (strMenuKeyword) {
                    //태그 동적 생성.
                    innFnc_setMenuKeyword(strTmpID_keyword, tmpComp_li, strMenuKeyword);
                }
                
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

    //컴포넌트 소개 class 추가.
    //gen_depth1.getChild(0, "gen_depth1_li").addClass("row");

};

//메뉴 click
scwin.lblMenu_onclick = function () {
    var menuID = this.getUserData("menu_id");
    var objMain;

    if(!menuID) {
        alert("메뉴 ID가 존재하지 않습니다.");
        return;
    }

    objMain = (opener || parent).$p.main();
    objMain.scwin.dispPage(menuID, true);
    //$p.closePopup($p.getPopupId());
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

//키워드 보기 checkbox 
scwin.cbx_show_keyword_onchange = function(info) {
    scwin.displayKeyword();
};

//키워드 출력
scwin.displayKeyword = function() {
    var strValue;
    strValue = cbx_show_keyword.getValue();
    if (strValue === "Y") {
        grp_sitemap_list.removeClass("hide_keyword");
        grp_sitemap_result.removeClass("hide_keyword");
    } else {
        grp_sitemap_list.addClass("hide_keyword");
        grp_sitemap_result.addClass("hide_keyword");
    }
};

scwin.ibx_search_input_oneditkeyup = function(e) {
    if (e.keyCode == 13) {
        scwin.searchMenu();
    } else {
        if (this.getValue() == "" && grp_pop_main.hasClass("status_result")) {
            scwin.switchView("default");
        };
    }
};

scwin.btn_search_input_onclick = function(e) {
    scwin.searchMenu();
};

scwin.switchView = function(argType) {
    switch (argType) {
    case "result":
        if (grp_sitemap_result.hasClass("hide")) {
            grp_sitemap_list.addClass("hide");
            grp_sitemap_result.removeClass("hide");

            grp_pop_main.addClass("status_result");
        }
        break;
    case "default":
    default:
        if (grp_sitemap_list.hasClass("hide")) {
            grp_sitemap_result.addClass("hide");
            grp_sitemap_list.removeClass("hide");

            grp_pop_main.removeClass("status_result");
        }
        break;
    }
};

scwin.searchMenu = function() {
    var strKeyword;
    var arrOrgMenu;
    var arrResult;
    var _EXA_CONTEXT_PATH = EXA_CONTEXT_PATH;

    strKeyword = ibx_search_input.getValue().trim().toLowerCase();

    if (!strKeyword) {
        scwin.switchView("default");
        ibx_search_input.focus();
        return;
    }

    arrOrgMenu = JSON.parse(scwin.gVar.strArrOrgMenu);
    
    arrResult = arrOrgMenu.filter((item) => {
        let retValue = false;
        let strTitle;
        //파일이 아닌 경우 
        if (item.TYPE != "F") return false; 

        //메뉴명
        strTitle = item["TITLE"];
        let strFilter_TITLE = strTitle.toLowerCase();
        if (strFilter_TITLE.indexOf(strKeyword) > -1) {
            //강조
            strTitle = strTitle.replace(new RegExp("("+strKeyword+")","i"), '<span class="highlight">$1</span>');
            retValue = true;
        }
        item["DISP_TITLE"] = strTitle;

        //키워드
        let strFilter_ALL_KEYWORD = ("|" + item["ALL_KEYWORD"] + "|");
        //let strFilter_KEYWORD = "|" + strKeyword + "|";   //keyword와 동일한 경우만 출력
        let strFilter_KEYWORD = strKeyword;

        if (strFilter_ALL_KEYWORD.toLowerCase().indexOf(strFilter_KEYWORD) > -1) {
            //item["ALL_KEYWORD"] = strFilter_ALL_KEYWORD.replace(new RegExp(strFilter_KEYWORD,"ig"), '|<span class="highlight">'+strKeyword+'</span>|').replace(/^[|]/,"").replace(/[|]$/,""); //keyword와 동일한 경우만 출력
            item["ALL_KEYWORD"] = strFilter_ALL_KEYWORD.replace(new RegExp(strFilter_KEYWORD,"ig"), '<span class="highlight">'+strKeyword+'</span>').replace(/^[|]/,"").replace(/[|]$/,"");
            
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

        console.log(i_item["TITLE"]);
        if (i_item["TITLE"].indexOf(tmpStr) == 0) {
            tmpStr = "";
        }

        refFnc_setMenuTitle(compTmp, (i+1) + ". " + tmpStr + i_item["DISP_TITLE"], i_item["PATH"], i_item["ID"]);

        //키워드 출력
        strKeyword = i_item["ALL_KEYWORD"];
        compTmp = compGen1.getChild(i, "tbx_result_keyword");
        if (strKeyword) {
            compTmp.setValue(refFnc_getHTML_keyword(strKeyword));
        } else {
            compTmp.remove(true);
        }

        //파일 경로 출력
        compTmp = compGen1.getChild(i, "tbx_result_path");
        compTmp.setValue("파일 경로 : " + i_item["DISP_PATH"]);
    }

};

scwin.displayResult__ = function (argArrMenu, argKeyword) {
    var numArrLength;
    var i, i_max, i_item;
    var compGen1;

    var refFnc_setMenuTitle = scwin.setMenuTitle;
    var refFnc_getHTML_keyword = $c.frame.getHtml_keyword;

    compGen1 = gen_result_ul;

    i_max = argArrMenu.length;

    compGen1.removeAll();

    tbx_result_title.setValue("검색 결과 (" + i_max + "건)");

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

        refFnc_setMenuTitle(compTmp, tmpStr + i_item["TITLE"], i_item["PATH"], i_item["ID"]);

        //키워드 출력
        strKeyword = i_item["ALL_KEYWORD"];
        compTmp = compGen1.getChild(i, "tbx_result_keyword");
        if (strKeyword) {
            compTmp.setValue(refFnc_getHTML_keyword(strKeyword));
        } else {
            compTmp.remove(true);
        }
    }

};

scwin.btn_top_category_onclick = function() {
    var strTargetID;

    strTargetID = this.getUserData("exam_target");
    if (!strTargetID) {
        strTargetID = gen_depth1.getChild(this.getGeneratedIndex(),"gen_depth2").getChild(0, "lbl_menu_depth2").getID();
        this.setUserData("exam_target", strTargetID);
    }

    $p.getComponentById(strTargetID).focus();
    
};

scwin.ibx_search_input_onchange = function() {
    var strValue;

    strValue = this.getValue();

    if (strValue == "" && grp_pop_main.hasClass("status_result")) {
        scwin.switchView("default");
    };
};

btn_move_category_onclick = function() {
    var _gen_top_category_render = scwin.gVar._gen_top_category_render;

    if (!_gen_top_category_render) {return;}

    switch (this.getUserData("userData1")) {
    case "left":
        _gen_top_category_render.scrollBy({left:-100, behavior: 'smooth'});
        break;
    case "right":
        _gen_top_category_render.scrollBy({left:100, behavior: 'smooth'});
        break;
    default:
        break;
    }

};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents com_example_sitemap',id:'grp_pop_main',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'box_search'},E:[{T:1,N:'xf:group',A:{id:'',class:'box_search_input'},E:[{T:1,N:'xf:group',A:{id:'',class:'box_input'},E:[{T:1,N:'w2:searchbox',A:{id:'ibx_search_input',placeholder:'메뉴명, 파일명, 키워드로 검색 가능합니다.',enterBlur:'false',style:'height: 30px;','ev:onkeyup':'scwin.ibx_search_input_oneditkeyup','ev:onchange':'scwin.ibx_search_input_onchange'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_search_input_onclick',style:'',id:'btn_search_input',type:'button',class:'btn_exam_search_white type02',title:'검색'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',disabled:'','ev:onchange':'scwin.cbx_show_keyword_onchange',id:'cbx_show_keyword',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'키워드 보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'background-color: #efefef;',class:'box_sitemap_top_category'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'',class:'btn_move_left',userData1:'left','ev:onclick':'btn_move_category_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'<'}]}]},{T:1,N:'w2:generator',A:{style:'',id:'gen_top_category',class:'gen_top_category'},E:[{T:1,N:'w2:span',A:{id:'',label:'|',style:'',class:''}},{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_top_category',style:'',class:'btn_top_category'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'-'}]}]}]},{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'',class:'btn_move_right',userData1:'right','ev:onclick':'btn_move_category_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'>'}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_sitemap_list',class:'box_list'},E:[{T:1,N:'w2:generator',A:{style:'',id:'gen_depth1',class:'minH com_example_grp_margin_1depth com_example_sitemap_depth1',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'gen_depth1_li',tagname:'li',class:'gen_depth1_list'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'gen_depth1_tit'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'tbx_title_depth1',label:'서브타이틀',class:'lbl_title_depth1',tagname:'h3'}}]},{T:1,N:'w2:generator',A:{tagname:'ul',style:'',id:'gen_depth2',class:'gen_depth2'},E:[{T:1,N:'xf:group',A:{id:'grp_list_depth2',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'',id:'lbl_menu_depth2',class:'com_example_sitemap_menu_lbl'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'depth2 label'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'grp_sitemap_result',class:'box_result hide'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'minH com_example_grp_margin_1depth com_example_sitemap_depth1',tagname:'ul'},E:[{T:1,N:'xf:group',A:{style:'',id:'',tagname:'li',class:'gen_depth1_list'},E:[{T:1,N:'xf:group',A:{class:'gen_depth1_tit',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'lbl_title_depth1',id:'tbx_result_title',label:'서브타이틀',style:'',tagname:'h3',escape:'false'}}]},{T:1,N:'w2:generator',A:{style:'',id:'gen_result_ul',class:'gen_depth2',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'grp_result_li',tagname:'li',style:''},E:[{T:1,N:'w2:anchor',A:{class:'com_example_sitemap_menu_lbl',escape:'false',id:'lbl_result_menu',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'depth2 label'}]}]},{T:1,N:'w2:textbox',A:{class:'com_example_sitemap_result_path',escape:'false',id:'tbx_result_path'}},{T:1,N:'w2:textbox',A:{class:'com_example_sitemap_grd_keyword',escape:'false',id:'tbx_result_keyword'}}]}]}]}]}]}]}]}]}]})