/*amd /ui/SP/Common/Common_multiLang.xml 12628 3789975e8b6cdd87961f0d165afd52fef92325f29885b45a5daaea98057632c6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'desc',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'test',name:'',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'desc',E:[{T:4,cdata:'\n<pre class="textNor" style="">\n<div class="etcbox">본 화면은 WebSquare5의 다국어 설정을 위한 가이드를 제공한다.\n본 화면은 서버 다국어 설정으로 적용되어 있으며, 설정내용은 아래의 설정을 확인한다.\n본 화면에서는 &lt;pageURLPrefix type="function" value="gcm.win.getI18NUrl" ignoreW2xPath="true"/&gt; \n이 설정의 주석만 풀어주면, 적용이 가능하다.\n</div>\n<div class="etc_tit">1. websqaure.xml</div>\n  - C:\\WEBSQUARE_DEV_PACK_SP5\\workspace\\websquare_home\\config\\websqaure.xml 파일에서 아래의 i18n 설정을 추가한다.\n  - websqaure.xml 파일 변경 후 반드시 was를 리부팅한다.\n  &lt;i18n&gt;\n	&lt;baseDir value="C:\\WEBSQUARE_DEV_PACK_SP5\\workspace\\WRM\\WebContent\\WEB-INF\\lang"/&gt;\n	&lt;defaultLocale value="ko"&gt;\n		&lt;domain name="localhost" locale="en"/&gt;\n		&lt;domain name="ko.inswave.co.kr" locale="ko"/&gt;\n		&lt;domain name="en.inswave.co.kr" locale="en"/&gt;\n		&lt;domain name="jp.inswave.co.kr" locale="jp"/&gt;\n	&lt;/defaultLocale&gt;\n	&lt;localeParam value="locale"/&gt;\n	&lt;xmlInfo baseDir="C:\\WEBSQUARE_DEV_PACK_SP5\\workspace\\WRM\\WebContent" cache="false"/&gt;\n  &lt;/i18n&gt;\n<div class="etc_tit">2. 다국어 처리함수(com.getI18NUrl) </div>\n  - 공통함수 선언부에서 getI18NUrl 함수를 확인한다.\n  com.getI18NUrl = function(xmlUrl){\n	var baseURL = gcm.CONTEXT_PATH + "/websquare/I18N";\n	var rsUrl;\n	var locale = WebSquare.cookie.getCookie( "locale" );\n	var bXml = "/blank.xml";\n	xmlUrl = xmlUrl.replace(/\\?.*/,\'\');\n	xmlUrl = xmlUrl.replace(gcm.CONTEXT_PATH,\'\');\n	if(xmlUrl.search(bXml) > -1 && xmlUrl.search(WebSquare.baseURI) == -1){\n		xmlUrl = WebSquare.baseURI + "/blank.xml";\n	}\n	rsURL =  baseURL+"?w2xPath="+xmlUrl;\n	\n	if( locale != null && locale != \'\' ) {\n		rsURL = rsURL + "&locale=" + unescape(locale);\n	}\n	\n	return rsURL;\n  };\n<div class="etc_tit">3. 다국어 properties 파일 확인 </div>\n  - /WEB-INF/lang 하위의 다국어 properties 파일을 확인한다.\n  - 예시 \n  /WEB-INF/la../../../ko.properties, /WEB-INF/la../../../en.properties\n<div class="etc_tit">4. config.xml 확인 </div>\n  1. 2번의 다국어 처리함수를 포함한 js 파일을 반드시 읽어들인다.\n  - 예시\n	&lt;engine&gt;\n		&lt;module src="/cm/js/commonGlobal.js" /&gt;\n		&lt;module src="/cm/js/commonScope.js" /&gt;\n		... 중략 .....\n	&lt;/engine&gt;\n  2. 아래의 설정을 적용한다.\n	 <font color=red>(다국어 설정이 필요없는 경우 아래의 내용을 삭제하면 다국어가 적용되지 않는다.)</font>\n   - &lt;pageURLPrefix type="function" value="gcm.win.getI18NUrl" ignoreW2xPath="true"/&gt;  \n</pre>\n						'}]},{T:1,N:'test',E:[{T:4,cdata:'\n<pre class="textNor">						\n<div class="etc_tit">1. 과정</div>\n1. 오른쪽에 위치한 [언어 선택]를 선택한다.\n<div class="etc_tit">2. 결과</div>\n1. 변경된 [언어 선택]에 따른 화면의 다국어 설정을 확인한다.\n</pre>\n						'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_memberBasic'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_NM',name:'사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'RESIDENT_NO',name:'주민번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_CN_NM',name:'사원한자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_EN_NM',name:'사원영문명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'POSITION_UPDATED_DATE',name:'호칭변경일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'LAST_APPOINT_DATE',name:'최종발령일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_sample',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'기본코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'기본사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'입력사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'확인사항',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.flag = false;

scwin.onpageload = function () {
	var cookie_val = WebSquare.cookie.getCookie("locale");
	sel_multiLang.setValue(cookie_val);
	if (cookie_val != "en") {
		scwin.flag = true;
	}
};

scwin.sel_multiLang_onchange = function () {
	if (scwin.flag) {
		WebSquare.cookie.setCookie("locale", sel_multiLang.getValue());
		if ($p.main().scwin.getLayoutId() == "M") {
			var move_url = com.win.getFullPath("../../../ui/SP/Common/Common_multiLang.xml");

			Promise.resolve().then(function () {
				$p.getFrame().setSrc(move_url);
			});
		} else {
			location.reload();
		}
	} else {
		scwin.flag = true;
	}
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml',scope:''}},{T:1,N:'w2:wframe',A:{id:'',src:'../../cm/xml/contentDesc.xml',scope:''}},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ett',id:'',label:'언어선택 : ',style:''}},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sel_multiLang',ref:'',style:'width:100px;',submenuSize:'auto','ev:onchange':'scwin.sel_multiLang_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'한국어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'ko'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'영어'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'en'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'group1',style:'width:100%;',tagname:'table',adaptive:'layout',adaptiveThreshold:'800'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'!~TEXT001~!',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{enterBlur:'',id:'ibx_empCd',mandatory:'true',ref:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'!~TEXT002~!',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{allowChar:'가-힣',id:'ibx_empNm',isHangul:'true',mandatory:'true',placeholder:'!~TEXT010~!',ref:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'!~TEXT003~!',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'mr5',dateValidCheck:'true',focusOnDateSelect:'false',footerDiv:'false',id:'cal_joinDate',mandatory:'true',ref:'',renderDiv:'true',renderType:'component',rightAlign:'false',style:'',weekStartsOn:'0'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'!~TEXT004~!',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{allowChar:'0-9',applyFormat:'',displayFormat:'######-#######',displayFormatter:'',id:'ibx_residentNo',mandatory:'true',maxlength:'13',minlength:'13',ref:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'!~TEXT005~!',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ibx_empCnNm',mandatory:'true',ref:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'!~TEXT006~!',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'fl',id:'ibx_assignedTask',mandatory:'true',ref:'',style:''}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'!~TEXT007~!',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{allowChar:'a-z A-Z',id:'ibx_empEnNm',ignoreChar:'',isHangul:'false',mandatory:'true',ref:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'!~TEXT008~!',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'mr5',dateValidCheck:'true',focusOnDateSelect:'false',footerDiv:'false',id:'cal_postionUpdatedDate',mandatory:'true',ref:'',renderDiv:'true',renderType:'component',rightAlign:'false',style:'',weekStartsOn:'0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'!~TEXT009~!',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'mr5',dateValidCheck:'true',displaymessage:'',focusOnDateSelect:'false',footerDiv:'false',id:'cal_lastAppointDate',mandatory:'true',ref:'',renderDiv:'true',renderType:'component',rightAlign:'false',style:'',weekStartsOn:'0'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_sample','ev:onafteredit':'',fixedColumnWithHidden:'true',id:'grd_chkGrid',ignoreCellClick:'false',scrollByColumn:'false',sortEvent:'ondblclick',sortable:'true',style:'height:296px;',useShiftKey:'true',defaultCellHeight:'26',focusMode:'row',autoFitMinWidth:'800'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'',value:'!~GREV001~!',width:'170'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'',value:'!~GREV002~!',width:'170'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'',value:'!~GREV003~!',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column12',inputType:'text',style:'',value:'!~GREV004~!',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',style:'',width:'170'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col2',inputType:'text',style:'',textAlign:'left',width:'170'}},{T:1,N:'w2:column',A:{blockSelect:'false',defaultValue:'',displayMode:'',falseValue:'N',id:'col3',inputType:'text',style:'',textAlign:'left',trueValue:'Y',value:'',valueType:'other',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col4',inputType:'text',style:'',width:'100'}}]}]}]}]}]}]}]}]})