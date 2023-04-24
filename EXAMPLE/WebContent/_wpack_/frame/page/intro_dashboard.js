/*amd /frame/page/intro_dashboard.xml 11255 56bbba83f70722f3d85b1287082e1a351d61191ab8eca814d41cd22f5bb39c46 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_site',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'disp',name:'타이틀'}},{T:1,N:'w2:column',A:{dataType:'text',id:'url',name:'이동 경로'}},{T:1,N:'w2:column',A:{dataType:'text',id:'desc',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'li_class',name:'li class'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_site_webDev',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'disp',name:'타이틀'}},{T:1,N:'w2:column',A:{dataType:'text',id:'url',name:'이동 경로'}},{T:1,N:'w2:column',A:{dataType:'text',id:'desc',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'li_class',name:'li class'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_init',ref:'',target:'data:json,["dlt_site","dlt_site_webDev"]',action:'/frame/data/intro_data.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_init_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
    $p.executeSubmission( "sbm_init" );
    scwin.initPage();
};

scwin.initPage = function() {
    //엔진 버전 셋팅
    tbx_engineVersion.setValue(WebSquare.text.BASE64Decode(WebSquare.ver));

    //프로젝트 버전
    tbx_projectVersion.setValue(EXA_PROJECT_VERSION || "-");

    //프로젝트의 웹스퀘어 엔진 권장 버전
    tbx_recVersion.setValue(EXA_RECOMMENDED_ENGINE_VERSION || "5.0_5.4666B.20220705.144534_1.8");

};

scwin.sbm_init_submitdone = function(e) {
    scwin.init_refList("ref_site");
    scwin.init_refList("ref_site_web");
};

scwin.init_refList = function(argStrType){
	var arrList, arrListLen, i, curObj, curRowData;
    var _cmpGen;
    var strID_dt, strID_dd, strID_li;
	
    switch (argStrType) {
    case "ref_site":
        _cmpGen = gen_ref_site;
        strID_dt = "btn_gen_ref_site_dt";
        strID_dd = "tbx_gen_ref_site_dd";
        strID_li = "grp_gen_ref_site_li";

        arrList = dlt_site.getAllJSON();
        break;
    case "ref_site_web":
        _cmpGen = gen_ref_site_web;
        strID_dt = "btn_gen_ref_site_web_dt";
        strID_dd = "tbx_gen_ref_site_web_dd";
        strID_li = "grp_gen_ref_site_web_li";

        arrList = dlt_site_webDev.getAllJSON();
        break;
    default:
        return;
        break;
    }

    arrListLen = arrList.length;
	
	for(i=0;i<arrListLen;i++){
		curRowData = arrList[i];
		_cmpGen.insertChild( i );

        curObj = _cmpGen.getChild(i, strID_li);
        if (curRowData.li_class) {
            curObj.addClass(curRowData.li_class);
        } else {
            curObj.addClass("type05");
        }
        
		curObj = _cmpGen.getChild( i , strID_dt );
		curObj.setValue( curRowData.disp );
		if((curRowData.url).indexOf("http") > -1){
			curObj.setHref( curRowData.url );
		}else{
			curObj.setHref( "?w2xPath="+curRowData.url );
		}
		
		curObj = _cmpGen.getChild( i , strID_dd );
		curObj.setValue( curRowData.desc );
	}
	
};

/**
 * 프로젝트 릴리즈 노트 새창 열기 버튼 클릭
 */
scwin.btn_more_project_history_onclick = function() {
    $p.main().scwin.dispProjectHistory();
};

scwin.openRefSite = function() {
    var strLink;
    
    strLink = this.getUserData("userData1");
    
    if (strLink) {
        window.open(strLink, "_blank");
    } else {
        alert("준비중 입니다.");
    }
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'intro'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'int_top'},E:[{T:1,N:'xf:group',A:{id:'',class:'bg_wrap'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Welcome to Websquare5 ServicePack5 Examples',class:'txt_big',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'네트워크의 사용이 불가능한 환경에서도 지원',class:'txt_small wifi',escape:'false'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'서버의 구성 없이 스튜디오에서 실행 가능',class:'txt_small server',escape:'false'}},{T:1,N:'xf:group',A:{id:'',class:'t_luminous'},E:[{T:1,N:'w2:textbox',A:{tagname:'strong',style:'',id:'',label:'프로젝트 정보',escape:'false'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_projectVersion',label:'_',escape:'false'}}]},{T:1,N:'xf:group',A:{id:'',class:'t_luminous'},E:[{T:1,N:'w2:textbox',A:{tagname:'strong',style:'',id:'',label:'실행된 웹스퀘어 엔진 버전',escape:'false'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_engineVersion',label:'_',escape:'false'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'ban_box'},E:[{T:1,N:'xf:group',A:{tagname:'a',style:'',id:'',class:'anc_banner ico1'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:href',E:[{T:3,text:'http://wtech.inswave.com'}]},{T:1,N:'w2:target',E:[{T:3,text:'_blank'}]}]},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'W-Tech<br/>Center',escape:'false'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'바로가기',escape:'false',userData1:'http://wtech.inswave.com'}}]},{T:1,N:'xf:group',A:{tagname:'a',style:'',id:'',class:'anc_banner ico2'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:href',E:[{T:3,text:'\r\n									https://docs1.inswave.com/sp5_user_guide'}]},{T:1,N:'w2:target',E:[{T:3,text:'_blank'}]}]},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'WebSquare5 SP5<br/>개발가이드',escape:'false'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'바로가기',escape:'false',userData1:'https://docs1.inswave.com/sp5_user_guide'}}]},{T:1,N:'xf:group',A:{tagname:'a',style:'',id:'',class:'anc_banner ico3'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:href',E:[{T:3,text:'\r\n									https://docs.inswave.com/websquare/websquare.html?w2xPath=/support/api/ws5_sp5/api.xml'}]},{T:1,N:'w2:target',E:[{T:3,text:'_blank'}]}]},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'WebSquare5 SP5<br/>API',escape:'false'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'바로가기',escape:'false',userData1:'https://docs.inswave.com/websquare/websquare.html?w2xPath=/support/api/ws5_sp5/api.xml'}}]},{T:1,N:'xf:group',A:{tagname:'a',style:'',id:'',class:'anc_banner ico2'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:href',E:[{T:3,text:'https://docs1.inswave.com/design_guide'}]},{T:1,N:'w2:target',E:[{T:3,text:'_blank'}]}]},{T:1,N:'w2:textbox',A:{tagname:'p',style:'',id:'',label:'WebSquare5<br/>디자인가이드',escape:'false'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'바로가기',escape:'false',userData1:'https://docs1.inswave.com/design_guide'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'int_mid'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'ins_box'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'주의사항',class:'txt_ins_big tac'}}]},{T:1,N:'xf:group',A:{tagname:'ol',style:'',id:'',class:'prj_list'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'',label:'이 프로젝트는 웹스퀘어 서비스팩5(SP5) 엔진 버전부터 지원됩니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'txt_prj_small',id:'tbx_recVersion',label:'-',style:''}}]},{T:1,N:'xf:group',A:{tagname:'li',style:'',id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'프로젝트 리소스는 예제 파일에 한해서만 기술 지원이 가능합니다.',class:'txt_prj_big'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(프로젝트의 예제 파일 경로 : WebContent/page)',class:'txt_prj_small'}}]},{T:1,N:'xf:group',A:{tagname:'li',style:'',id:''},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'예제 사이트를 구성하기 위해 작성된 공통 모듈은 기술 지원이 되지 않습니다.',class:'txt_prj_big'}},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'(제공된 리소스의 사용으로 인해 발생하는 직접적, 간접적, 특수 또는 결과적 손해에 대한 책임을 지지 않습니다.)',class:'txt_prj_small'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'',label:'오탈자 및 예제 오류는 아래의 이메일로 보내주시면 검토 후 빠르게 반영하겠습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'txt_prj_small',id:'',label:'이메일 주소 : g_edu@inswave.com',style:''}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'int_bot'},E:[{T:1,N:'xf:group',A:{class:'lybox site_grp',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'ly_column col_5',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ins_wget  sitebox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'웹스퀘어 개발 참고 사이트',style:'',escape:'false',class:'intro_ref_title'}},{T:1,N:'w2:generator',A:{class:'',id:'gen_ref_site',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'',id:'grp_gen_ref_site_li',style:'',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false',toolTip:'',style:'min-height:12px;',id:'btn_gen_ref_site_dt',title:'',class:'',target:'_blank'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{style:'',id:'tbx_gen_ref_site_dd',label:'',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'ly_column col_5',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ins_wget  sitebox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'웹 개발 참고 사이트 링크',style:'',escape:'false',class:'intro_ref_title'}},{T:1,N:'w2:generator',A:{class:'',id:'gen_ref_site_web',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'',id:'grp_gen_ref_site_web_li',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{class:'',id:'btn_gen_ref_site_web_dt',outerDiv:'false',style:'min-height:12px;',target:'_blank',title:'',toolTip:''},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_gen_ref_site_web_dd',label:'',style:'min-height: 12px;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'releasebox'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:textbox',A:{style:'display: inline-block;',id:'',label:'최근 프로젝트 릴리즈 노트',escape:'false',class:'intro_ref_title'}},{T:1,N:'w2:anchor',A:{outerDiv:'false',id:'btn_more_project_history',style:'',class:'btn_releasebox btn_cm','ev:onclick':'scwin.btn_more_project_history_onclick',title:'릴리즈 노트 더보기'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'더보기'}]}]}]},{T:1,N:'w2:wframe',A:{style:'',id:'',src:'/frame/page/history_w.xml',class:'scrollbar intro_history_wframe',userData1:'HOME'}}]}]}]}]}]}]})