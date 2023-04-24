/*amd /frame/page/frameCommon.xml 18129 e082b435dc997242763d29c41d2c1b93f09f05147ad1f504a8b5fe93d956bb6c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.getSrc,scwin.log,scwin.alert,scwin.getBasePageURL,scwin.downloadSource,scwin.getText_globalCSS,scwin.getContextPath,scwin.showExamDescBox,scwin.getHtml_keyword,scwin.scrollToBottom,scwin.printExampleLog,scwin.getExampleDocumentPath,scwin.getWidgetParam,scwin.toggleBlock,scwin.getRandomString,scwin.getPopupPosition,scwin.openExamPage'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * @component
 * @company 
 * @developer na
 * @variableClone true
 * @notSupportBrowser 
 * @version 
 * @htmlRender 
 * @icon 
 * @disableIcon 
 * @width 
 * @height 
 * @description 
 */ 

scwin.gVar_const = {
    "EXA_CONTEXT_PATH" : "/",
    "EXA_CLIENT_RECT_WIDTH" : null,
    "EXA_CLIENT_RECT_HEIGHT" : null
};

scwin.onpageload = function() {
    scwin.setInitInfo();
};

/**
 * 초기 정보 할당
 */
scwin.setInitInfo = function() {
    var jsnWinClientRect;
    jsnWinClientRect = document.body.getBoundingClientRect();
    scwin.gVar_const.EXA_CLIENT_RECT_WIDTH = jsnWinClientRect.width;
    scwin.gVar_const.EXA_CLIENT_RECT_HEIGHT = jsnWinClientRect.height;
};

/**
 * @method
 * @name getSrc
 * @description context를 포함한 URL을 반환한다.
 * @param {string} argSrc Src 경로 문자열 
 * @returns {string} returnValue context를 포함한 URL. 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.getSrc = function(argSrc) {
    var regExp;
    argSrc = argSrc || "";

    if (typeof argSrc == "string") {
        regExp = new RegExp("^[/]");
        argSrc = argSrc.replace(regExp,"");
    }

    return scwin.gVar_const.EXA_CONTEXT_PATH + argSrc;
};

/**
 * @method
 * @name getContextPath
 * @description context 경로를 반환한다.
 * @returns {string} returnValue context 경로.
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.getContextPath = function() {
    return (scwin.gVar_const.EXA_CONTEXT_PATH).replace(/[\/]$/ , "")
};


/**
 * @method
 * @name log
 * @description console에 로그를 출력한다. 인자가 3개인 경우 : 함수명, 로그, 레벨.
 * @param {string} argStr 출력할 로그
 * @param {string} argLogLevel [default:log,error,info,debug]로그 레벨. 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.log = function() {
    var strLevel;
    var strLog = "";
    var strPreFix;
    var argFunctionName, argStr, argLogLevel;


    if (arguments.length === 3) {
        argFunctionName = arguments[0];
        argStr = arguments[1];
        argLogLevel = arguments[2];
    } else {
        argStr = arguments[0];
        argLogLevel = arguments[1];
    }

    if (argFunctionName) { strLog += "[" + argFunctionName + "]"; }

    if (argStr) { strLog += argStr; }

    switch (argLogLevel) {
    case "info":
    case "error":
    case "debug":
        strLevel = argLogLevel;
        strPreFix = "["+argLogLevel.toUpperCase()+"] ";
        break;
    default:
        strLevel = "log";
        strPreFix = "";
        break;
    }

    console[strLevel].call(strPreFix, strLog);
};

/**
 * @method
 * @name alert
 * @description 경고 메세지를 팝업한다.
 * @param {object} _$p $p 객체
 * @param {string} argMsg 출력할 메세지 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.alert = function(_$p, argMsg) {
    alert(argMsg);
};

/**
 * @method
 * @name getBasePageURL
 * @description 웹스퀘어 엔진이 실행되는 URL을 반환한다.
 * @param 
 * @returns 
 * @hidden N
 * @exception 
 * @example ${example}
 */ 
scwin.getBasePageURL = function (argWithOrigin) {
    var returlValue;
    if (argWithOrigin == true) {
        returlValue = window.location.origin + window.location.pathname;
    } else {
        returlValue = window.location.pathname;
    }
    return returlValue;
};




/**
 * @method
 * @name downloadSource
 * @description XML화면 파일을 다운로드 한다.
 * @param {string} xmlFilePath xml 파일 경로
 * @param {string} withoutContext context 경로 없이 반환 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.downloadSource = function(xmlFilePath, withoutContext) {
    var eleTmp;
    
    if (withoutContext !== true) {
        xmlFilePath = scwin.getSrc(xmlFilePath);
    }

    eleTmp = $("#hidden_download_anchor:first")[0];

    if (!eleTmp) {
        eleTmp = document.createElement("a");
        eleTmp.setAttribute("id", "hidden_download_anchor");
        eleTmp.setAttribute("style", "display:none;");

        $("body").append(eleTmp);
    }

    eleTmp.setAttribute("href", xmlFilePath);
    eleTmp.setAttribute("download", xmlFilePath.replace(new RegExp(".*\/"),""));

    eleTmp.click();
};

/**
 * @method
 * @name getText_globalCSS
 * @description 정의된 css 파일을 TEXT로 반환한다
 * @param 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.getText_globalCSS = async function(argPath) {
    return $.get(argPath);
};

/**
 * @method
 * @name showExamDescBox
 * @description com_example_descBox_title class를 가진 요소의 형제 요소 중 com_example_descBox class를 가진 요소를 show/hide 한다. 
 * @param {object} argCmpBtn 버튼 컴포넌트
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.showExamDescBox = function(argCmpBtn) {
    var i, i_max;
    var cmpPatentBox;
    
    if (!(argCmpBtn.getPluginName && argCmpBtn.getPluginName() === "trigger")) {
        if (this.getPluginName && this.getPluginName() === "trigger") {
            argCmpBtn = this;
        } else {
            console.error("trigger 버튼이 아닙니다.", this);
            return;
        }
    }

    i=0;
    i_max=5;
    while(i<i_max) {
        cmpPatentBox = argCmpBtn.getParent();
        if (cmpPatentBox.hasClass("com_example_descBox_title")) {
            if (argCmpBtn.getValue() == "확장") {
                argCmpBtn.setValue("축소");
                cmpPatentBox.removeClass("com_example_descBox_hide");
            } else {
                argCmpBtn.setValue("확장");
                cmpPatentBox.addClass("com_example_descBox_hide");
            }
            break;
        }

        console.log(i, ": >>>> next");
        i++
    }
};

/**
 * @method
 * @name getHtml_keyword
 * @description 키워드 문자열을 받아 화면에 출력할 HTML을 반환한다.
 * @param {string} argStr 키워드 문자열
 * @param {string} argTarget [default:sitemap, leftmenu] 출력할 대상
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.getHtml_keyword = function (argStr, argTarget) {
    var returnValue;
    var strTagStart;
    var strTagEnd;

    if (!argStr) { return ""; }
    
    switch (argTarget) {
    case "leftmenu":
        strTagStart = '<div class="left_menu_keyword">';
        strTagEnd = '</div>';
        returnValue = strTagStart + argStr.split("|").join(strTagEnd + strTagStart) + strTagEnd;
        break;
    default:
        strTagStart = '<span>';
        strTagEnd = '</span>';
        returnValue = strTagStart + argStr.split("|").join(strTagEnd + strTagStart) + strTagEnd;
        break;
    }
    
    return returnValue;
};

/**
 * @method
 * @name scrollToBottom
 * @description 웹스퀘어 컴포넌트의 세로 스크롤의 위치를 바닥으로 옮긴다.
 * @param {object} argCmp 웹스퀘어 컴포넌트 객체
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.scrollToBottom = function (argCmp) {
    var eleObj;
    eleObj = argCmp.render;
    if (!eleObj) {
        scwin.log("scwin.scrollToBottom >>>> 웹스퀘어 객체가 아닙니다.", "error");
        return;
    }

    eleObj.scrollTop = eleObj.scrollHeight;
};

/**
 * @method
 * @name printExampleLog
 * @description 예제에 사용되는 로그 출력용 textarea 컴포넌트에 문자열을 출력한다.
 * @param {string} argStrLog 출력할 문자열
 * @param {object} argCmp 웹스퀘어 textarea 컴포넌트
 * @param {boolean} argNoDelimiter [default:true, false]문자열 사이 구분자 추가 여부.
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.printExampleLog = function (argStrLog, argCmpTarget, argNoDelimiter) {
    var strPreData;

    //textarea에 출력된 기존 데이터 추출.
    strPreData = argCmpTarget.getValue();

    if (strPreData) {
        if (argNoDelimiter === false) {
            strPreData += "\n";
        } else {
            strPreData += "\n*******************************************\n";
        }
    }

    //기존 데이터에 추가하여 출력
    argCmpTarget.setValue(strPreData + "["+new Date().toLocaleTimeString("sv-SE")+"] " + argStrLog);

    //textarea 스크롤 바닥으로 옮기기.
    scwin.scrollToBottom(argCmpTarget);
};

/**
 * @method
 * @name getExampleDocumentPath
 * @description 예제 설명부 문서 경로를 반환한다.
 * @param {object} argJsnMenu 메뉴 JSON
 * @returns 문서 경로 문자열
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getExampleDocumentPath = function (argJsnMenu) {
    var retValue;
    var strPagePath;
    var strPageKey;
    var strMenuID;

    strMenuID = argJsnMenu.ID;

    if (argJsnMenu.HAS_DOC !== "Y") {
        scwin.log("getExampleDocumentPath -> 메뉴 ID : " + strMenuID + " | HAS_DOC : " + argJsnMenu.HAS_DOC);
        return retValue;
    }

    strPagePath = argJsnMenu.PATH;

    if (!strPagePath) {
        scwin.log("getExampleDocumentPath -> 메뉴 ID : " + strMenuID + " | PATH : " + strPagePath, "error");
        return retValue;
    }

    strPageKey = "sp5_ex_" + strPagePath.split("/").pop().replace(".xml","");

    //doc/sp5_ex_P00022.xhtml
    retValue = EXA_CONTEXT_PATH + "/doc/" + strPageKey + ".xhtml";

    return retValue;
};

scwin.getExampleDocumentPath__ = function (argJsnMenu, argStrDocType) {
    var retValue;
    var strPagePath;
    var strPageKey;
    var strMenuID;
    var isOnline;

    strMenuID = argJsnMenu.ID;

    if (argJsnMenu.HAS_DOC !== "Y") {
        scwin.log("getExampleDocumentPath -> 메뉴 ID : " + strMenuID + " | HAS_DOC : " + argJsnMenu.HAS_DOC);
        return retValue;
    }

    strPagePath = argJsnMenu.PATH;

    if (!strPagePath) {
        scwin.log("getExampleDocumentPath -> 메뉴 ID : " + strMenuID + " | PATH : " + strPagePath, "error");
        return retValue;
    }

    //strPageKey = "DOC_" + strPagePath.split("/").pop().replace(".xml","");
    strPageKey = "sp5_ex_" + strPagePath.split("/").pop().replace(".xml","");

    switch (argStrDocType) {
    case "online":
        isOnline = true;
        break;
    case "offline":
        isOnline = false;
        break;
    default:
        if (EXA_DOMAIN_CURRENT === EXA_DOMAIN_ONLINE) {
            isOnline = true;
        } else {
            isOnline = false;
        }
        break;
    }

    if (isOnline) {
        retValue = "https://docs1.inswave.com/r/a/ws5_sp5_example/" + strPageKey;
    } else {
        //doc/sp5_ex_M550000.xhtml
        //retValue = EXA_CONTEXT_PATH + "/doc/sp5_ex_" + (strMenuID.slice(0,3) + "0000") + ".xhtml#r_" + strPageKey

        //doc/sp5_ex_P00022.xhtml
        retValue = EXA_CONTEXT_PATH + "/doc/" + strPageKey + ".xhtml";

    }

    return retValue;
};

/**
 * @method
 * @name getWidgetParam
 * @description addWidgets API 호출시 params에 할당한 값을 반환합니다. widget의 컨텐츠에서 호출할 때 사용합니다. 값이 없는 경우 undefined가 반환됩니다.
 * @param {object} _$p $p
 * @returns addWidgets API 호출시 params에 할당한 값
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getWidgetParam = function (_$p) {
    var _frame;
    var _parent;
    var returnValue;

    //2022.06.15 widget의 컨텐츠 화면에서 $p.getParameter API로 param값이 반환되지 않아 스크립트 작성. wframe까지 param이 할당되지 않아 반환이 안되는 것으로 추측.

    _frame = _$p.getFrame();

    if (_frame.getPluginName() == "wframe" && _frame.getParent() ) {
        _parent = _frame.getParent();

        if (_parent && _parent.getPluginName() == "widget") {
            returnValue = _parent.getParams();
        }
    }
    return returnValue;
}

/**
 * @method
 * @name getWidgetParam
 * @description 부모 컴포넌트에 class를 toggle한다. 컴포넌트의 userData1에 class명을, userData2에는 value값을 할당한다.
 * @hidden N
 * @exception 
 * @example 
 */
scwin.toggleBlock = function () {
    var _parent;
    var arrLabel;
    var strClass;
    _parent = this.getParent();

    strClass = this.getUserData("userData1");

    if (!strClass) {
        return;
    }

    switch (strClass) {
    case "hide_dd":
        arrLabel = this.getUserData("userData2").split("|") || ["",""];

        if (_parent.hasClass("hide_dd")) {
            this.setValue(arrLabel[0] || "코드 예시 접기");
            
        } else {
            this.setValue(arrLabel[1] || "코드 예시 펼치기");
        }

        _parent.toggleClass("hide_dd");    
        break;
    default:
        break;
    }    
};

/**
 * @method
 * @name getRandomString
 * @description 무작위 문자열을 반환합니다. 서버에 URL에 활용합니다.
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getRandomString = function() {
    var returnValue;
    var objDate;

    objDate = new Date();
    returnValue = objDate.toJSON().replace(new RegExp("[^0-9]", "g"), "") + "_"+ objDate.getTime();

    return returnValue;
};

/**
 * @method
 * @name getPopupPosition
 * @description 팝업 시 진입 경로에 따라 너비와 위치가 조절된 JSON을 반환합니다.
 * @hidden N
 * @exception 
 * @example 
 */
scwin.getPopupPosition = function(argOptions) {
    var _main;
    var numWinWidth;
    var numWinHeight;
    
    var numWidth;
    var numHeight;
    var numTop;

    var argWidth;
    var argHeight;
    var argTop;
    var argLeft;

    var returnValue = {};
    var regExp_D;

    var _EXA_MAIN_TYPE;

    regExp_D = new RegExp("[^0-9.]", "g");

    _main = $p.main();

    numWinWidth = scwin.gVar_const.EXA_CLIENT_RECT_WIDTH;
    numWinHeight = scwin.gVar_const.EXA_CLIENT_RECT_HEIGHT;

    argWidth = (typeof argOptions.width == "string") ? Number((argOptions.width || "").replace(regExp_D, "")) : argOptions.width;
    argHeight = (typeof argOptions.height == "string") ? Number((argOptions.height || "").replace(regExp_D, "")) : argOptions.height;

    argTop = (typeof argOptions.top == "string") ? Number((argOptions.top || "").replace(regExp_D, "")) : argOptions.top;
    argLeft = (typeof argOptions.left == "string") ? Number((argOptions.left || "").replace(regExp_D, "")) : argOptions.left;

    _EXA_MAIN_TYPE = _main.scwin && _main.scwin.gVar && _main.scwin.gVar.EXA_MAIN_TYPE;

    switch (_EXA_MAIN_TYPE) {
    case "M":   //Mobile

        //너비 결정
        if (argWidth > numWinWidth) {
            numWidth = parseInt(numWinWidth - 4);
        } else {
            numWidth = argWidth;
        }

        returnValue.width = numWidth + "px";

        //높이 결정
        if (argHeight > numWinHeight) {
            numHeight = parseInt(numWinHeight - 4);
        } else {
            numHeight = argHeight;
        }

        returnValue.height = numHeight + "px";

        returnValue.left = (numWinWidth / 2) - (numWidth / 2 );
        returnValue.top = 2;

        break;
    case "P":   //PC
    default:
        //위치만 할당
        if (argOptions.left == "auto" || argOptions.left == undefined) {
            returnValue.left = parseInt((numWinWidth / 2) - (argWidth / 2 ));
        } else {
            returnValue.left = argLeft;
        }

        if (argOptions.top == "auto" || argOptions.top == undefined) {
            numTop = parseInt((numWinHeight / 2) - (argHeight / 2 )) - 10;
            returnValue.top = ((numTop < 0) ? 0 : numTop);
        } else {
            returnValue.top = argTop;
        }

        if (argOptions.type == "browserPopup") {
            returnValue.top += window.screenTop;;
            returnValue.left += window.screenLeft
        }
        
        break;
    }

    return $.extend(argOptions, returnValue);
};

/**
 * @method
 * @name openExamPage
 * @param {string} argPageName 예제 파일명 ex)P00123
 * @description 파일명에 해당하는 예제 파일을 엽니다.
 * @hidden N
 * @exception 
 * @example 
 * ex1) $c.frame.openExamPage("P00123");
 * ex2) 컴포넌트의 userData1 속성에 파일명을 지정하고, 이벤트 핸들러에 $c.frame.openExamPage를 등록합니다.
 */
scwin.openExamPage = function(argPageName) {
    var _obj;
    var strPageName;
    var _argType;
    var isError = false;

    _argType = typeof argPageName;

    if (_argType == "string") {
        strPageName = argPageName;
    } else if (_argType == "undefined" && typeof this.getUserData == "function") {
        strPageName = this.getUserData("userData1");
        if (!strPageName) { isError = true; }
    } else {
        isError = true;
    }

    if (isError) {console.error("유효하지 않은 argPageName입니다. argPageName >> ", argPageName); return false;}

    _obj = $p.main().scwin;

    if (!_obj) { console.error("잘못된 접근입니다. scwin 객체를 찾을 수 없습니다."); return false; }

    _obj = _obj.openPage;

    if (_obj) {
        _obj(strPageName);
    } else {
        let strPagePath;

        if (strPageName.indexOf(".xml") > -1) {
            strPagePath = strPageName;
        } else {
            strPagePath = "/page/"+strPageName+".xml";
        }
        
        window.open(scwin.getBasePageURL()+"#w2xPath="+strPagePath, "_blank");
    }
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})