/*amd /frame/page/history_w.xml 6385 15e94db2bdbfc2483139c74b606549df35a5daf2d1a21a00097a62398a72250d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_project_history',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'프로젝트버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'desc',name:'이력 상세'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pageInfo',name:'[선택]파일명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'type',name:'[선택]릴리즈 타입'}},{T:1,N:'w2:column',A:{id:'title',name:'이력',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_init',ref:'',target:'data:json,["dlt_project_history"]',action:'/frame/data/project_history.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_init_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gVar = {
    parentType : null
};

scwin.onpageload = function() {
    var _obj;

    $p.executeSubmission( "sbm_init" );

    if (_obj=$p.getFrame(), _obj.getUserData, _obj.getUserData("userData1") == "PAGE") {
        scwin.gVar.parentType = "PAGE";
    } else {
        scwin.gVar.parentType = "MAIN";
    }
};

scwin.sbm_init_submitdone = function(e) {
    scwin.init_project_history();

    if (scwin.gVar.parentType == "PAGE") {
        scwin.toggleExpandAll(true);
    }
};

scwin.init_project_history = function() {
	var arrList, arrListLen, i, curObj, curRowData;
    var _cmpGenDepth1, _cmpGenDepth2;
    var strPreVersion, strTmp;
    var numIdxDepth1, numIdxDepth2;
    var numMaxIdxDepth1 = -1;
    var isPage = true;
    var regExp_txb_title = new RegExp("tbx_title$");
    

    arrList = dlt_project_history.getAllJSON();
    arrListLen = arrList.length;

    if (scwin.gVar.parentType == "MAIN") {
        numMaxIdxDepth1 = 3;    //최대 업데이트 목록 수
        isPage = false;
    }
    
    _cmpGenDepth1 = gen_depth1;
    _cmpGenDepth2;

    numIdxDepth1 = 0;
    numIdxDepth2 = 0;

	for(i=0;i<arrListLen;i++){
		curRowData = arrList[i];

        if (strPreVersion != curRowData["version"]) {
            if (i>0) {
                curObj = _cmpGenDepth1.getChild(numIdxDepth1-1, "tbx_version_count");
                curObj.setValue(" (총 "+(numIdxDepth2)+"건)");
            }

            //main에서 최대 건수 제한
            if (numMaxIdxDepth1 == numIdxDepth1) { break; }

            _cmpGenDepth1.insertChild(numIdxDepth1);

            curObj = _cmpGenDepth1.getChild(numIdxDepth1, "tbx_version");
		    curObj.setValue(curRowData["version"]);

            _cmpGenDepth2 = _cmpGenDepth1.getChild(numIdxDepth1, "gen_depth2");
            
            strPreVersion = curRowData["version"];
            numIdxDepth1 ++;
            numIdxDepth2 = 0;
        }

        _cmpGenDepth2.insertChild(numIdxDepth2);
        curObj = _cmpGenDepth2.getChild(numIdxDepth2, "tbx_title");
        curObj.setValue(curRowData["title"]);
        let str_tbx_desc_id = curObj.getID().replace(regExp_txb_title,"tbx_desc");

        //N:신규 U:수정
        if (curRowData["type"]) {
            curObj.addClass("release_"+curRowData["type"]);
        }
        curObj = _cmpGenDepth2.getChild(numIdxDepth2, "btn_page_link");
        strTmp = curRowData["pageInfo"];

        if (strTmp) {
            curObj.setUserData("ex_link", strTmp);
            curObj.setToolTip("예제 열기");
        } else {
            curObj.hide();
        }

        let strDesc = curRowData["desc"];
        if (isPage && strDesc) {
            $p.dynamicCreate(
                str_tbx_desc_id, 
                "textbox", 
                {}, 
                _cmpGenDepth2.getChild(numIdxDepth2, "grp_depth2_li")
            );

            let cmpTbxDesc = $p.getComponentById(str_tbx_desc_id);

            cmpTbxDesc.addClass("desc");
            cmpTbxDesc.setValue(strDesc);
        }

        numIdxDepth2 ++;
    }//for

    if (numIdxDepth1 > 0) {
        curObj = _cmpGenDepth1.getChild(numIdxDepth1-1, "tbx_version_count");
        curObj.setValue(" (총 "+(numIdxDepth2)+"건)");

        _cmpGenDepth1.getChild(0, "grp_depth1_details").setAttributeNode("open","");
    }    
};

scwin.btn_page_link_onclick = function() {
    var strPage;
    var jsnMenu;
    var _main;
    strPage = this.getUserData("ex_link");

    _main = $p.main();

    jsnMenu = _main.scwin.menu.getMenuByPage(strPage);

    if (jsnMenu && jsnMenu.ID) {
        _main.scwin.dispPage(jsnMenu, true);
    }
};

scwin.toggleExpandAll = function (argIsOpen) {
    var i, i_max, strFn;

    if (argIsOpen === false) {
        strFn = "removeAttributeNode";
    } else {
        argIsOpen = true;
        strFn = "setAttributeNode";
    }

    for (i=0,i_max=gen_depth1.getLength(); i<i_max; i++ ) {
        gen_depth1.getChild(i, "grp_depth1_details")[strFn]("open","");    
    }    
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'w2:generator',A:{style:'',id:'gen_depth1',class:'wrap_project_history'},E:[{T:1,N:'xf:group',A:{id:'grp_depth1_details',tagname:'details'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'summary'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'tbx_version',label:'version',class:'history_version'}},{T:1,N:'w2:textbox',A:{class:'history_version_count',id:'tbx_version_count',label:'',style:''}}]},{T:1,N:'w2:generator',A:{tagname:'ul',style:'',id:'gen_depth2'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_depth2_li',tagname:'li',class:'history_li'},E:[{T:1,N:'w2:span',A:{label:'Insert Text',style:'display: inline',id:'tbx_title',class:'history_desc'}},{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_page_link',style:'',class:'history_link','ev:onclick':'scwin.btn_page_link_onclick',title:'예제 열기'},E:[{T:1,N:'xf:label'}]}]}]}]}]}]}]}]})