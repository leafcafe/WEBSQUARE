/*amd /frame/udc/example_viewer.xml 29507 06592568fd507d34f77212db5914d75d21b212399b87a1812df9fc729f6e78a0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'udc_dlt_viewSource_data',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:aliasDataList',A:{scope:'/dlt_cssFileList',id:'udc_adl_cssFileList'}},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:'',initRowPosition:'0'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.init'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * @component
 * @company 
 * @developer 
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

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description desc
 */ 

/**
 * @property
 * @name class
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @description desc
 */ 

/**
 * @property
 * @name id
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default udc_exampleViewer
 * @necessary N
 * @description 컴포넌트의 ID
 */ 

/**
 * @property
 * @name openExampleView
 * @category 01.Basic & ETC
 * @type combobox
 * @option [true,false]
 * @default 
 * @necessary N
 * @description [default:true,false] 실행된 예제를 확장 또는 축소한다. true: 확장 상태, false:축소 상태.
 */ 

/**
 * @property
 * @name openSourceView
 * @category 01.Basic & ETC
 * @type combobox
 * @option [true,false]
 * @default 
 * @necessary N
 * @description [default:true,false] 소스보기를 확장 또는 축소한다. true: 확장 상태, false:축소 상태.
 */ 

scwin.gVar = {
    "menuData" : null,
    "path_example" : null,
    "viewSource_xmlStr" : null,
    "wfmDataCollection" : []
};

scwin.onpageload = function() {
	//$p.getOptions();
    scwin._setDefaultOptions(); //속성에 따른 기본 셋팅
};

scwin._setDefaultOptions = function() {
    var jsnOptions = $p.getOptions();

    if (jsnOptions.openExampleView === "false") {
        btn_udc_exampleView_showHide.trigger("click");
    }

    if (jsnOptions.openSourceView === "false") {
        btn_udc_sourceView_showHide.trigger("click");
    }
};

/**
 * @method
 * @name init
 * @description 메뉴 데이터를 기반으로 예제 미리보기, 소스보기를 초기화한다.
 * @param {string|json} argMenuData 메뉴 데이터 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.init = function(argMenuData) {
    if (!scwin._isValidMenu(argMenuData)) {
        scwin._hide();
        console.error("예제 메뉴 데이터가 유효하지 않습니다. arguments : ", argMenuData);
        return;
    }
    scwin._setMenuData(argMenuData);

    scwin._setSeeAlso(argMenuData);
};

/**
 * 메뉴 데이터 유효성 체크
 */
scwin._isValidMenu = function(argMenuData) {
    var returnValue = true;

    if ($.isPlainObject(argMenuData) || !argMenuData["PATH"]) {
        argMenuData = false;
    }

    return returnValue;
};

/**
 * 메뉴 데이터 할당.
 */
scwin._setMenuData = function (argMenuData) {
    var strPath;
    var strExamplePath;

     //예제 화면 경로 설정
    strPath = $c.frame.getSrc(argMenuData["PATH"]);

    if (strPath.indexOf(".xml") > -1) {
        strExamplePath = strPath;
    } else {
        strExamplePath = strPath + ".xml";
    }
    
    scwin.gVar.path_example = strExamplePath;

    udc_txb_example_filePath.setValue("( 파일 경로 : " + strExamplePath.replace(new RegExp("^"+$c.frame.getContextPath()+"/"), "/") + " )");

    udc_wfm_example.setSrc(strExamplePath);

};

//SeeAlso 생성
scwin._setSeeAlso = function(argJsnMenu) {
    var strSeeAlso;
    var arrSeeAlso;
    var arrRefMenu;
    var _main;
    var hasRef = false;;

    strSeeAlso = argJsnMenu["SEE_ALSO"];

    if (!strSeeAlso) return false;

    strSeeAlso = strSeeAlso.replace(new RegExp(" ","g"),"");

    if (!strSeeAlso) return false;
    
    arrSeeAlso = strSeeAlso.split(",");

    _main = $p.main();
    arrRefMenu = [];

    let _genComp = udc_gen_seealso;

    arrSeeAlso.forEach(argItem => {
        let jsnMenu = _main.scwin.menu.getMenuByPage(argItem);
        if (!jsnMenu || !jsnMenu.ID) return;

        _genComp.insertChild();
        let comp = _genComp.getChild(_genComp.getLength()-1, "udc_gen_seealso_title");
        comp.setValue(jsnMenu["TITLE"]);
        comp.setUserData("menu_id", jsnMenu["ID"]);

        hasRef = true;
    });

    if (hasRef) {
        udc_grp_seealso_title.removeClass("hide");
        udc_grp_seealso_cont.removeClass("hide");
    }
};

scwin._hide = function() {
    this.hide();
};

//예제 실행 파일 경로 반환
scwin._getExamplePath = function () {
    return scwin.gVar.path_example;
};

//예제 실행 경로 반환
scwin._getExampleLink = function(argWithHost) {
    return $c.frame.getBasePageURL(argWithHost)+"#w2xPath="+scwin._getExamplePath();
};

//실행된 예제 [단독 실행] 버튼 클릭
scwin.udc_btn_openPop_example_onclick = function(e) {
    window.open(scwin._getExampleLink(), "_blank");
};

//예제 화면 로드 후
scwin.udc_wfm_example_onwframeload = function() {
    //scwin._removeCkEditorAutoInline();
    scwin._initViewSource_source();
    scwin._initPageHistory();
};

//CKEditor의 auto inline 기능 제거
scwin._removeCkEditorAutoInline = function (){
    if (typeof CKEDITOR != "undefined") {
        // CKEDITOR.disableAutoInline = true;
        // CKEDITOR.config.autoUpdateElement = false;
        // CKEDITOR.scayt_autoStartupSince = false;

        let strID_group = "udc_grp_viewSource_script";
        let strID_textbox = "udc_tbx_viewSource_script";
        let cmpGroup = $p.getComponentById(strID_group);
        let str_grp_viewSource_data_ID = cmpGroup.getID();
        
        if (CKEDITOR.instances[str_grp_viewSource_data_ID]) {
            CKEDITOR.instances[str_grp_viewSource_data_ID].destroy();
            $p.getComponentById(strID_textbox).remove();
            $p.dynamicCreate(
                strID_textbox,
                "textbox", 
                {
                    "escape" : "false",
                    "tagname" : "code"
                },
                cmpGroup
            );
        }    
    }
};
//소스 가져오기
scwin._initViewSource_source = async function() {
    //scwin.gVar.viewSource_xmlStr = await WebSquare.util.getSource('text', wfm_example.uuid);
    $.ajax({
        "url" : scwin._getExamplePath(),
        "dataType" : "text"
    }).done(function(res){
        scwin.gVar.viewSource_xmlStr = res;
        scwin._dispSourceView(udc_tac_sourceView_script.getSelectedTabID());
    }).fail(function(resFail){
        console.error(resFail);
    });
};

scwin._dispSourceView = function (argType) {
    var xmlSrc;
    var strCode;
    switch (argType) {
    case "tabs_script" :
        xmlSrc = scwin.gVar.viewSource_xmlStr;
        if (!xmlSrc) { 
            udc_tbx_viewSource_script.setValue("");
            return;
        }
        xmlSrc = WebSquare.xml.parse(xmlSrc);
        strCode = xmlSrc.getElementsByTagName("script")[0].textContent || "";
        udc_tbx_viewSource_script.setValue(hljs.highlight(strCode, {language: 'javascript'}).value);
    break;
    case "tabs_body" :
        xmlSrc = scwin.gVar.viewSource_xmlStr;
        if (!xmlSrc) { 
            udc_tbx_viewSource_body.setValue("");
            return;
        }
        xmlSrc = WebSquare.xml.parse(xmlSrc);
        strCode = WebSquare.xml.indent(xmlSrc.getElementsByTagName("body")[0]) || "";
        udc_tbx_viewSource_body.setValue(hljs.highlight(strCode, {language: 'html'}).value);
    break;
    case "tabs_datacollection" :
        scwin._initViewSource_dataCollection();
    break;
    case "tabs_css" :
    break;
    case "tabs_orgSource" :
        strCode = scwin.gVar.viewSource_xmlStr;
        if (!strCode) { 
            udc_tbx_viewSource_orgSource.setValue("");
            return;
        }
        udc_tbx_viewSource_orgSource.setValue(hljs.highlight(strCode, {language: 'html'}).value);
        break;
    case "tabs_history" :
        //strCode = scwin.gVar.viewSource_xmlStr;
        console.log($p.parent());
        if (!strCode) { 
            
            return;
        }
        
        break;
    default:
        break;
    }
};

scwin._initViewSource_dataCollection = function() {
    var strWfmID;
    var objWfm;
    var arrAllDataObj;
    var arrWfmDataID = [];
    var regDataType;

    scwin.gVar.wfmDataCollection = [];
    
    strWfmID = udc_wfm_example.getID();

    objWfm = udc_wfm_example.getWindow();

    //UI 초기화
    udc_sbx_viewSource_data.removeAll(true);
    udc_sbx_viewSource_dataFormat.setSelectedIndex(0);
    udc_grp_viewSource_data_gridData.hide();
    udc_tbx_viewSource_data.setValue("");
    udc_grp_viewSource_data.show("block");

    regDataType = new RegExp("dataMap|dataList|linkedDataList");

    arrAllDataObj = $p.data.getAllDataCollection("object");
    arrAllDataObj.forEach((item, idx)=>{
        if (item.scope_id == strWfmID && regDataType.test(item.getObjectType())) {
            let tmpID = item.org_id;
            arrWfmDataID.push(tmpID);
            udc_sbx_viewSource_data.addItem(tmpID, tmpID)
        }
    });

    scwin.gVar.wfmDataCollection = [].concat(arrWfmDataID);
};

//예제 소스 보기 탭 ondrawcomplete
scwin.udc_tac_sourceView_script_ondrawcomplete = function(tabID,idx,userID) {
    scwin._dispSourceView(userID);
};

scwin.udc_btn_viewSource_data_searchData_onclick = function(e) {
    var strID;
    var strFormat;
    var objData;

    strID = udc_sbx_viewSource_data.getValue();
    strFormat = udc_sbx_viewSource_dataFormat.getValue();

    udc_tbx_viewSource_data.setValue("");

    if (!strID) {
        $c.frame.alert($p, "DataCollection의 ID를 선택하세요.")
        return false;
    }

    if (!strFormat) {
        $c.frame.alert($p, "데이터 형태를 선택하세요.")
        return false;
    }

    let strData;
    let arrGlobalID = [];
    let arrOriginalID = [];
    let objFrame;
    let i,i_max;
    let isError;
    let isSingle;

    objFrame = udc_wfm_example.getWindow();

    if (strID == "all") {
        arrGlobalID = [].concat(scwin.gVar.wfmDataCollection);
        isSingle = false;
    } else {
        arrGlobalID = [strID];
        isSingle = true;
    }

    isError = false;
    for (i=0,i_max=arrGlobalID.length; i<i_max; i++){
        let objItem, item;
        item = arrGlobalID[i];
        objItem = objFrame[item];

        if (!objItem) {
            isError = true;
            break;
        }

        arrGlobalID[i] = objItem.getID();
    }

    if (isError) {
        $c.frame.alert($p, "["+item+"]로 정의된 DataCollection이 존재하지 않습니다.[새로고침]버튼을 눌러주세요.")
        return false;
    }

    switch(strFormat) {
        case "XML" :
            strData = $p.data.get("XML", arrGlobalID, {"singleMode":isSingle});
            strData = hljs.highlight(WebSquare.xml.indent(strData), {language: 'xml'}).value;
            break;
        case "XML_all" :
            strData = $p.data.get("XML", arrGlobalID);
            strData = WebSquare.xml.indent(strData);
            break;
        case "JSON" :
            strData = $p.data.get("JSON", arrGlobalID, {"singleMode":isSingle});
            strData = hljs.highlight(JSON.stringify(strData, null, "\t"), {language: 'json'}).value;
            break;
        case "ARRAY" :
            //@todo 22.04.08 dataMap 타입인 경우 JSON 타입으로 반환됨.
            //strData = $p.data.get("Array", arrGlobalID, {"singleMode":isSingle});

            if (isSingle && (objData = objFrame[strID], objData.getObjectType() == "dataMap")) {
                strData = objData.getArray();
            } else {
                strData = $p.data.get("Array", arrGlobalID, {"singleMode":isSingle});
            }
            strData = hljs.highlight(JSON.stringify(strData, null, "\t"), {language: 'json'}).value;
            break;
        case "GRID" : 
            if (!isSingle) {
                $c.frame.alert($p, "GRID는 DataCollection을 [전체]로 출력할 수 없습니다. DataCollection을 다시 선택해주세요.");
                return false;
            }

            scwin._setData_grd_viewSource_data_gridData(objFrame[strID]);
            
            break;
        default: 
            break;
    }

    if (strFormat == "GRID") {
        udc_grp_viewSource_data.hide();
        udc_grp_viewSource_data_gridData.show("block");
    } else {
        udc_grp_viewSource_data_gridData.hide();
        udc_grp_viewSource_data.show("block");

        if (strData) {
            udc_tbx_viewSource_data.setValue(strData);
        }
    }

};


//예제 샘플 데이터를 grid로 표현
scwin._setData_grd_viewSource_data_gridData = function(argObjData) {
    var strForm = "";
    var strDataListID = "udc_dlt_viewSource_data";
    var strGridViewID = "udc_grd_viewSource_data_gridData";
    var arrDCInfo = [];
    var arrStrFormHead = [];
    var arrStrFormBody = [];
    var jsnObjectInfo;
    var arrColID;

    //타입 확인.
    jsnObjectInfo = (argObjData.getObjectType() == "dataMap") ? argObjData.getInfo()["keyInfo"] : argObjData.getInfo()["columnInfo"];
    
    arrColID = Object.keys(jsnObjectInfo);

    arrColID.forEach(item=>{
        let tmpItem = jsnObjectInfo[item];
        let tmpColID = tmpItem.id;

        arrDCInfo.push(tmpItem); 
        arrStrFormHead.push('<w2:column blockSelect="false" id="h_'+ tmpColID +'" width="100" value="'+tmpColID+'"></w2:column>');
        arrStrFormBody.push('<w2:column blockSelect="false" id="' + tmpColID + '" width="100"></w2:column>');
    });
    
    //data 객체 생성
    if ($p.getComponentById(strDataListID)) {
        $p.data.remove(strDataListID);
    }

    $p.data.create({
        "id" : strDataListID,
        "type" : "dataList",
        "option" : { 
            "baseNode": "list",
            "repeatNode": "map"
        },
        "columnInfo" : arrDCInfo
    });

    let dataObj = {};

    dataObj[strDataListID] = [].concat($p.data.get("JSON", [argObjData.getID()], {"singleMode":true}));

    $p.data.set("JSON", dataObj, [strDataListID]);

    strForm +='<w2:gridView xmlns="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:w2="http://www.inswave.com/websquare" xmlns:xf="http://www.w3.org/2002/xforms" ';
    strForm +='dataList="' + strDataListID + '" id="' + strGridViewID + '" ';
    strForm +='class="wq_gvw" style="height: 300px;" scrollByColumn="true" useShiftKey="true" tooltipDisplay="true">';
    strForm +='<w2:header id="header1" style="">';
    strForm +='<w2:row id="row1" style="">';
    strForm += arrStrFormHead.join("");
    strForm +='</w2:row>';
    strForm +='</w2:header>';
    strForm +='<w2:gBody id="gBody1" style="">';
    strForm +='<w2:row id="row2" style="">';
    strForm += arrStrFormBody.join("");
    strForm +='</w2:row>';
    strForm +='</w2:gBody>';
    strForm +='</w2:gridView>';

    udc_grd_viewSource_data_gridData.setGridStyle(strForm);
};

//[새로고침] 버튼 클릭
scwin.udc_btn_viewSource_data_init_onclick = function(e) {
    scwin._initViewSource_dataCollection();
};

//CSS View [조회] 버튼 클릭
scwin.udc_btn_viewSource_cssfile_search_onclick = function(e) {
    var strPath;
    var strCode;
    udc_tbx_viewSource_css.setValue("");
    strPath = udc_sbx_viewSource_cssfile.getValue();

    if (!strPath) { $c.frame.alert($p, "CSS 파일을 선택하세요."); return false;}

    if (strPath == "style") {
        strCode = WebSquare.xml.parse(scwin.gVar.viewSource_xmlStr).getElementsByTagName("style") || "";
        if (strCode[0] && strCode[0].textContent) {
            strCode = strCode[0].textContent;
            udc_tbx_viewSource_css.setValue(hljs.highlight(strCode, {language: 'css'}).value);
        }
    } else {
        $c.frame.getText_globalCSS($c.frame.getSrc(strPath)).then(function(res){
            udc_tbx_viewSource_css.setValue(hljs.highlight(res, {language: 'css'}).value);
        });
    }    
};

//실행된 예제 [축소/확장] 기능
scwin.btn_udc_exampleView_showHide_onclick = function(e) {
    $c.frame.showExamDescBox(this);
};

//소스보기 [축소/확장] 기능
scwin.btn_udc_sourceView_showHide_onclick = function(e) {
    $c.frame.showExamDescBox(this);
};

//예제 새로 고침 기능
scwin.udc_btn_refresh_onclick = function(e) {
    udc_wfm_example.getWindow().$p.reinitialize();
};

//페이지 이력
scwin._initPageHistory = function() {
    var _wfmObject;
    var _dlt_page_history;
    _wfmObject = udc_wfm_example.getWindow();

    _dlt_page_history = _wfmObject.dlt_page_history;

    if (_dlt_page_history) {
        dlt_page_history.setJSON(_dlt_page_history.getAllJSON());
    } else {
        dlt_page_history.setJSON([]);
    }
  

};

/**
 * see also 링크 클릭 시
 */
scwin.udc_gen_seealso_title_onclick = function() {
    $p.main().scwin.dispPage(this.getUserData("menu_id"));
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'dfbox com_example_descBox_title mb_def',id:'',style:'display: none;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실행된 예제',style:'vertical-align: bottom;',tagname:'h2'}},{T:1,N:'xf:trigger',A:{class:'btn_cm white ml_def',id:'btn_udc_exampleView_showHide',style:'',type:'button','ev:onclick':'scwin.btn_udc_exampleView_showHide_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'축소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.udc_btn_openPop_example_onclick',id:'udc_btn_openPop_example',style:'display: none;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예제 단독 실행'}]}]},{T:1,N:'w2:span',A:{id:'udc_txb_example_filePath',label:'파일 경로',style:''}}]},{T:1,N:'w2:wframe',A:{'ev:onwframeload':'scwin.udc_wfm_example_onwframeload',id:'udc_wfm_example',style:'min-height: 20px; border:1px solid #ddd; margin-bottom: 16px;',class:'com_example_descBox example_viewer'}},{T:1,N:'xf:group',A:{class:'com_example_descBox_title hide',id:'udc_grp_seealso_title',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'See Also',style:'vertical-align: bottom;',tagname:'h2'}}]},{T:1,N:'xf:group',A:{style:'',id:'udc_grp_seealso_cont',class:'hide com_example_descBox example_viewer_seealso'},E:[{T:1,N:'w2:generator',A:{style:'',id:'udc_gen_seealso',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false','ev:onclick':'scwin.udc_gen_seealso_title_onclick',style:'',id:'udc_gen_seealso_title',title:'예제 열기'},E:[{T:1,N:'xf:label'}]}]}]}]},{T:1,N:'xf:group',A:{class:'com_example_descBox_title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예제 소스',style:'vertical-align: bottom;',tagname:'h2'}},{T:1,N:'xf:trigger',A:{class:'btn_cm white ml_def',id:'btn_udc_sourceView_showHide',style:'display: none;',type:'button','ev:onclick':'scwin.btn_udc_sourceView_showHide_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'축소'}]}]}]},{T:1,N:'xf:group',A:{class:'tabbox com_example_descBox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{class:'wq_tab',confirmFalseAction:'new',confirmTrueAction:'exist','ev:ondrawcomplete':'scwin.udc_tac_sourceView_script_ondrawcomplete',id:'udc_tac_sourceView_script',style:'',tabScroll:'true',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true',changeActiveTab:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs_script',label:'Script',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs_body',label:'Body',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs_datacollection',label:'DataCollection',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs_css',label:'CSS',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs_orgSource',label:'Original Source',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs_history',label:'History'}},{T:1,N:'w2:content',A:{id:'content2',style:''},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:group',A:{class:'cke_show_blocks_off com_example_viewSource_pre scrollbar',id:'udc_grp_viewSource_script',tagname:'pre'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:contenteditable',E:[{T:3,text:'true'}]},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'w2:textbox',A:{class:'hljs',escape:'false',id:'udc_tbx_viewSource_script',label:'',tagname:'code'}}]}]}]},{T:1,N:'w2:content',A:{id:'content4',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'cke_show_blocks_off com_example_viewSource_pre',tagname:'pre'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:contenteditable',E:[{T:3,text:'true'}]},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'w2:textbox',A:{class:'hljs',escape:'false',id:'udc_tbx_viewSource_body',label:'',tagname:'code'}}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'com_example_content',id:''},E:[{T:1,N:'xf:group',A:{class:'com_example_box_margin_left ofh datacollection',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'fl'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'DataCollection :',class:'mr_def'}},{T:1,N:'xf:select1',A:{sortOption:'label',chooseOptionLabel:'',submenuSize:'auto',chooseOption:'',allOption:'true',ref:'',sortMethod:'ascending',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width: 148px;',id:'udc_sbx_viewSource_data',renderType:'',class:'',direction:'auto'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{id:'',class:'fl'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'데이터 형태 :',class:'mr_def'}},{T:1,N:'xf:select1',A:{chooseOptionLabel:'',submenuSize:'auto',chooseOption:'',allOption:'',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width: 148px;',id:'udc_sbx_viewSource_dataFormat',renderType:'',class:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'JSON'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'JSON'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'XML'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'XML'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ARRAY'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ARRAY'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'GRID'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'GRID'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'fl'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.udc_btn_viewSource_data_searchData_onclick',style:'',id:'udc_btn_viewSource_data_searchData',type:'button',class:'btn_cm white'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.udc_btn_viewSource_data_init_onclick',style:'',id:'udc_btn_viewSource_data_init',title:'예제 소스보기 DataCollection 새로고침',type:'button',class:'btn_refresh'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'cke_show_blocks_off com_example_viewSource_pre',id:'udc_grp_viewSource_data',tagname:'pre'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:contenteditable',E:[{T:3,text:'true'}]},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'w2:textbox',A:{class:'hljs',escape:'false',id:'udc_tbx_viewSource_data',label:'',tagname:'code'}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'udc_grp_viewSource_data_gridData',style:'display: none;'},E:[{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'data:udc_dlt_viewSource_data',defaultCellHeight:'20',id:'udc_grd_viewSource_data_gridData',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 300px;',tooltipDisplay:'true',useShiftKey:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',style:'height:34px;',value:'ID',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',removeBorderStyle:'false',style:'height:34px;',width:'100'}}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{id:'content5',style:''},E:[{T:1,N:'xf:group',A:{class:'com_example_content',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'com_example_box_margin_left ofh',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'fl',style:'position: relative;'},E:[{T:1,N:'w2:span',A:{style:'',id:'',label:'CSS File List :',class:'mr_def'}},{T:1,N:'xf:select1',A:{chooseOptionLabel:'',submenuSize:'auto',textAlign:'left',chooseOption:'true',allOption:'',ref:'',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width: 150px;',id:'udc_sbx_viewSource_cssfile',renderType:'',class:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:udc_adl_cssFileList'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'path'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'fl'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.udc_btn_viewSource_cssfile_search_onclick',style:'',id:'udc_btn_viewSource_cssfile_search',type:'button',class:'btn_cm white'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:group',A:{class:'cke_show_blocks_off com_example_viewSource_pre',tagname:'pre'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:contenteditable',E:[{T:3,text:'true'}]},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'w2:textbox',A:{class:'hljs',escape:'false',id:'udc_tbx_viewSource_css',label:'',tagname:'code'}}]}]}]}]},{T:1,N:'w2:content',A:{id:'content6',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'cke_show_blocks_off com_example_viewSource_pre',tagname:'pre'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:contenteditable',E:[{T:3,text:'true'}]},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'w2:textbox',A:{class:'hljs',escape:'false',id:'udc_tbx_viewSource_orgSource',label:'',tagname:'code'}}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content7'},E:[{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:'margin-bottom: 10px;'},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:dlt_page_history',defaultCellHeight:'26',focusMode:'row',id:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 50px;',visibleRowNum:'5',rowNumVisible:'true',rowNumWidth:'40',readOnly:'true',sortable:'true',sortEvent:'onclick',sortHeaderDiv:'true',showSortableImage:'true',tooltipDisplay:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'업데이트 날짜',width:'94',class:'grd_header_align_left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'버전',width:'54'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'120',value:'작성자'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'설명',width:'70',class:'grd_header_align_left'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'updated_date',inputType:'text',removeBorderStyle:'false',style:'height:26px;',width:'94',dataType:'date'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'version',inputType:'text',removeBorderStyle:'false',style:'height:26px;',width:'54'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'author',inputType:'text',removeBorderStyle:'false',style:'height:26px;',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'description',inputType:'text',removeBorderStyle:'false',style:'height:26px;',width:'70',textAlign:'left'}}]}]}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'설명',style:'',class:'example_viewer_tab_title'}},{T:1,N:'xf:textarea',A:{id:'',style:'width: 100%;height: 60px;',ref:'data:dlt_page_history.description',readOnly:'true'}}]}]}]}]}]}]}]})