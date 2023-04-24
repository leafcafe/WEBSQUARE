/*amd /cm/xml/side.xml 18557 8805544faef919a3771a1f779636e8d049765cb8cce03d9caf070913cea51b68 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_menu',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:ondataload':'scwin.dlt_menu_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'MENU_CD',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_NM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'메뉴경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PARENT_MENU_CD',name:'부모메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LEVEL',name:'메뉴레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SORT_ORDER',name:'정렬순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_fav',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'MENU_NM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'메뉴경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_CD',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_LEVEL',name:'메뉴레벨',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_favInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'STATUS',name:'상태',dataType:'text',defaultValue:'R'}},{T:1,N:'w2:key',A:{id:'MENU_CD',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'MENU_NM',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SRC_PATH',name:'메뉴경로',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_result'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'STATUS',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ICNT',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'UCNT',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'DCNT',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'TYPE',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_defInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMP_CD',name:'사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_NM',name:'사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_ADMIN',name:'관리자여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fav'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'STATUS',name:'상태',dataType:'text',defaultValue:'R'}},{T:1,N:'w2:key',A:{id:'MENU_CD',name:'메뉴코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_programAuthority',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_AUTH_SELECT',name:'조회권한여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_AUTH_SAVE',name:'저장권한여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_AUTH_EXCEL',name:'엑셀권한여부',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_selectFavList',ref:'',target:'data:json,dlt_fav',action:'/main/selectFavList',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_initSide',ref:'',target:'',action:'',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}},{T:1,N:'xf:submission',A:{id:'sbm_updateFav',ref:'data:json,dma_fav',target:'',action:'/main/updateFav',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.setupdateFavCallback','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
// 최대 HISTORY 저장 개수	
scwin.HISTORY_MAX_SIZE = 10;

scwin.onpageload = function () {

};

scwin.getInitData = function () {
	var searchCodeGrpOption = {
		id: "sbm_InitCont", action: "/main/init",
		target: 'data:json, ["dlt_menu", "dlt_fav", "dma_defInfo", "dlt_programAuthority"]', method: "post",
		mediatype: "application/json", mode: "asynchronous", isProcessMsg: false,
		submitDoneHandler: scwin.initDataCallback
	};

	com.sbm.executeDynamic(searchCodeGrpOption);
};

scwin.initDataCallback = function () {
	$p.parent().wfm_header.getWindow().txt_empNm.setValue(dma_defInfo.get("EMP_NM"));
	trv_menu.expandNode(0, true);
	gcm.menuComp = dlt_menu; //전체 공통 영역에 메뉴리스트 데이터 변수 설정
	var option = {
		isHistory: true,
		closable: false
	};

	var layout = $p.main().scwin.getLayoutId();

	if (layout == "S") {
		var menuCd = $w.getParameter("menuCd");

		if (com.util.isEmpty(menuCd)) {
			com.win.openMenu("메인", "/cm/xml/main.xml", "MAIN", null, option);
		} else {
			trv_menu.findNodeByValue(menuCd, true);
			var menuInfo = dlt_menu.getMatchedJSON("MENU_CD", menuCd);

			if ((menuInfo.length > 0) && (!com.util.isEmpty(menuInfo[0].SRC_PATH))) {
				var option = {
					isHistory: true
				};
				return com.win.openMenu(menuInfo[0].MENU_NM, menuInfo[0].SRC_PATH, menuInfo[0].MENU_CD, null, option);
			}
		}
	} else {

		var promise = com.win.openMenu("메인", "/cm/xml/main.xml", "MAIN", null, option);
		promise = promise.then(function (tabIndex) {
			var menuCd = $w.getParameter("menuCd");

			if (com.util.isEmpty(menuCd) === false) {
				trv_menu.findNodeByValue(menuCd, true);
				var menuInfo = dlt_menu.getMatchedJSON("MENU_CD", menuCd);

				if ((menuInfo.length > 0) && (!com.util.isEmpty(menuInfo[0].SRC_PATH))) {
					var option = {
						isHistory: true
					};
					return com.win.openMenu(menuInfo[0].MENU_NM, menuInfo[0].SRC_PATH, menuInfo[0].MENU_CD, null, option);
				}
			}
		});
	}
};

// case 컴포넌트 사용시 case 전환할 경우 autoComplete 의 label이 사라지지 않음.
scwin.btn_menu_onclick = function () {
	swh_lnbbox.setSelectedID("case1");
	as_tab.removeClass("mymn");
	// autoComplete 의 label이 사라지지 않아 show & hide 처리함.
	acb_search.show("");
};

// case 컴포넌트 사용시 case 전환할 경우 autoComplete 의 label이 사라지지 않음.
scwin.btn_myMenu_onclick = function () {
	swh_lnbbox.setSelectedID("case2");
	// autoComplete 의 label이 사라지지 않아 show & hide 처리함.
	as_tab.addClass("mymn");
	acb_search.hide();
};

// 메뉴 클릭 이벤트 발생 시
scwin.trv_menu_onclick = function () {
	// treeview 클릭 시 신규 탭 추가
	if (trv_menu.isLeaf()) { // 트리뷰에 자식노드가 없으면 실행
		var tLabel = trv_menu.getSelectedLabel(); // 선택된 노드 label값을 가져와서 변수에 담는다.
		var tCode = trv_menu.getSelectedValue(); // 선택된 노드 value값을 가져와서 변수에 담는다.
		var selectedMenu = dlt_menu.getMatchedJSON("MENU_CD", trv_menu.getSelectedValue());
		if (selectedMenu.length > 0) {
			var tURL = selectedMenu[0].SRC_PATH;
			scwin.setMenuRelation(tLabel, tURL, tCode, "Tree");
		}
	}
};

scwin.anc_menu_onclick = function () {
	gr_tab_menu.setStyle("display", "block");
	gr_tab_menu02.setStyle("display", "none");
	gr_shortcut_box.setStyle("display", "block");
};

scwin.anc_menu02_onclick = function () {
	gr_tab_menu.setStyle("display", "none");
	gr_tab_menu02.setStyle("display", "block");
	gr_shortcut_box.setStyle("display", "none");
	gr_search_field.removeClass("active");
};

// click 최근 항목  
scwin.btn_History_onclick = function () {
	var menuInfoStr = this.getUserData("tmpMenuInfo");
	var menuInfoArr = menuInfoStr.split("|");
	scwin.setMenuRelation(this.getValue(), menuInfoArr[1], menuInfoArr[0]);
};

/**
 * 메뉴를 open할 때 관련된 기능들을 경우에 따라 처리해준다.
 * @lastUpdate 2016.08.28
 * @param <String> menuNm 메뉴 명
 * @param <String> menuUrl 메뉴 URL
 * @param <String> menuCode 메뉴 코드
 * @param <String> skipType Tree Node 선택 여부 ("Tree" || null) 
 * @author InswaveSystems
 * @since 2016.08.28
 * @example
 * scwin.setMenuRelation("인사조회", "/tmp/tmp01.xml", "010001");
 * scwin.setMenuRelation("인사조회", "/tmp/tmp01.xml", "010001", "Tree");
 */
scwin.setMenuRelation = function (menuNm, menuUrl, menuCode, skipType) {
	var menuList = dlt_menu.getMatchedJSON("MENU_CD", menuCode, true);

	if (menuList && menuList.length > 0) {
		var option = {
			isHistory: true,
			closable: true
		};

		if (com.win.openMenu(menuNm, menuUrl, menuCode, null, option)) {
			scwin.addHistory(menuNm, menuUrl, menuCode);
		}

		gen_history.removeClass("hide");
		scwin.historyResize();

		if ($p.main().scwin.isMobileSize() == true) {
			$p.main().wfm_header.getWindow().scwin.toggleMenu();
		}

		//treeview에서 클릭한 경우는 find를 하지 않는다.
		if (!skipType || skipType !== "Tree") {
			trv_menu.findNodeByValue(menuCode, true);
		}

		var deviceWidth = com.num.parseFloat($("body").css("width"));
		if (deviceWidth < 1280) {
			$(".wrap").removeClass("show_menu");
			$(".btn_toggle_menu").removeClass("on");
		}
	}
};

/**
 * 최근 작업내용을 추가한다.
 * 
 * @date 2016.07.19
 * @param 메뉴 명 
 * @example
 * scwin.addHistory(label);
 */
scwin.addHistory = function (menuNm, url, menuCode) {
	// 맨 마지막에 열린 화면과 동일한 화면을 다시 오픈하는 경우에는 최근작업목록에 저장하지 않도록 반환한다.
	if (gen_history.getLength() >= 1) {
		var lastMenuCode = gen_history.getChild(0, "btn_History").getUserData("tmpMenuInfo").split("|")[0];
		if (menuCode === lastMenuCode) {
			return;
		}
	}

	if (gen_history.getLength() >= scwin.HISTORY_MAX_SIZE) {
		gen_history.removeChild(gen_history.getLength() - 1);
	}

	gen_history.insertChild(0);
	var curObj = gen_history.getChild(0, "btn_History");

	var tmpHH = $p.getFormattedDate(new Date(), "yyyy-MM-dd HH:mm");
	curObj.setValue(menuNm);
	curObj.setTitle("[" + tmpHH + "] " + menuNm);
	curObj.setUserData("tmpMenuInfo", menuCode + "|" + url);
};

scwin.historyResize = function () {
	var listHeight = gen_history.getSize("height");
	var swhInBoxId = swh_lnbbox.getID();
	$("#" + swhInBoxId + " .w2switch_case").animate({ "bottom": listHeight + 44 }, 700);
	$(".box_history").animate({ "height": listHeight + 24 }, 700);
}

/**
 * 즐겨찾기 등록 업데이트 (추가/삭제)
 * com.updateFav 함수는 Scope=true가 적용된 WFrame에서는 사용해서는 안됨
 * 
 * @date 2017.11.30
 * @param {Array} menuCode [[메뉴코드]:[F|T]]업데이트하기 위한 페이지 정보로 메뉴코드와 추가/삭제 여부에 대한 key값. (e.g., "030001:F", "030001:T")
 * @param {String} favStatus 적용시킬 상태 값(T, F)
 * @memberOf scwin
 * @author InswaveSystems
 */
scwin.updateFav = function (menuCode, favStatus) {
	if (favStatus == "F") {
		favStatus = "I";
	} else if (favStatus == "T") {
		favStatus = "D"
	}

	dma_fav.set("MENU_CD", menuCode);
	dma_fav.set("STATUS", favStatus);
	com.sbm.execute(sbm_updateFav);
}

scwin.getMenuNavigation = function (menuCode, rsStr) {
	var naviStr;
	if (rsStr) {
		naviStr = rsStr;
	} else {
		naviStr = "";
	}
	var menuJSON = dlt_menu.getMatchedJSON("MENU_CD", menuCode, true)[0];

	naviStr += menuJSON.MENU_NM + "%|%" + menuCode + "%|%";

	if (menuJSON) {
		if (menuJSON.PARENT_MENU_CD != "000000000") {
			return this.getMenuNavigation(menuJSON.PARENT_MENU_CD, naviStr);
		}
	}
	return naviStr;
};

/**
 * 즐겨찾기 등록 업데이트 후 callback 함
 *
 * @date 2017.11.30
 * @param {Array} menuCode [[메뉴코드]:[F|T]]업데이트하기 위한 페이지 정보로 메뉴코드와 추가/삭제 여부에 대한 key값. (e.g., "030001:F", "030001:T")
 * @param {String} favStatus 적용시킬 상태 값(T, F)
 * @memberOf scwin
 * @author InswaveSystems
 */
scwin.setupdateFavCallback = function (e) {
	var updateResult = e.responseJSON.updateResult || "";
	var updateInfoArr = updateResult.split(":");
	var updateStatus = updateInfoArr[0];
	var updateNum = updateInfoArr[1];

	// 업데이트가 0건 이상일 경우 즐겨찾기 리스트 갱신
	if (com.num.parseInt(updateNum) > 0) {
		com.sbm.resultMsg(e.responseJSON.rsMsg);
		com.sbm.execute(sbm_selectFavList);
	}
};

scwin.btn_history_clear_onclick = function () {
	gen_history.removeAll();
	scwin.historyResize();
};

scwin.historyTitle_onclick = function () {
	gen_history.toggleClass("hide");
	scwin.historyResize();
};

scwin.dispFm_UserName = function (val) {
	if (val) {
		val += "님";
	}
	return val;
};

scwin.dlt_menu_ondataload = function () {
	$p.main().scwin.setHeaderMenu();
};

//즐겨찾기 메뉴 node 클릭 시 
scwin.btn_FavMenuNode_onclick = function () {
	var tLabel = this.getSelectedLabel(); // 선택된 노드 label값을 가져와서 변수에 담는다.
	var tCode = this.getSelectedValue(); // 선택된 노드 value값을 가져와서 변수에 담는다.
	var menuInfo = dlt_menu.getMatchedJSON("MENU_CD", tCode);
	var tURL = "";

	if (!com.util.isEmpty(menuInfo) && menuInfo.length > 0) {
		tURL = dlt_menu.getMatchedJSON("MENU_CD", tCode)[0].SRC_PATH;
	}

	scwin.setMenuRelation(tLabel, tURL, tCode, "Tree");
};

/**
 * 메뉴 전체 확장 버튼 클릭 이벤트
 */
scwin.btn_menuExpandAll_onclick = function (e) {
	trv_menu.expandNode(0, true);
};

/**
 * 메뉴 전체 축소 버튼 클릭 이벤트
 */
scwin.btn_menuCollapseAll_onclick = function (e) {
	trv_menu.collapseNode(0, true);
};

scwin.acb_search_onviewchange = function (info) {
	var tmpNode = trv_menu.findNodeByValue(info.newValue, true);
	if ((typeof tmpNode !== "undefined") && (tmpNode !== null)) {
		trv_menu.spanNode(tmpNode.index, true, false);
		scwin.trv_menu_onclick();
	}
};

/**
 * 즐겨찾기 리스트에서 menuCode가 추가되어있는지 확인후 개수 반환.
 * 없으면 == 0, 있으면 > 0 
 * @lastUpdate 2016.08.24
 * @param {String} menuCode
 * @returns {int} 존재 개수
 * @author InswaveSystems
 * @since 2016.08.24
 * @example
 * case 1. scwin.hasFavCode("030001"); return : 0 <br/>
 * case 2. scwin.hasFavCode("030001"); return : 1
 */
scwin.hasFavCode = function (menuCode) {
	return (dlt_fav.getMatchedIndex("MENU_CD", menuCode, true)).length;
}

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'grp_tab',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shortcut_box',id:'gr_shortcut_box'},E:[{T:1,N:'w2:anchor',A:{class:'btn_all_search',id:'btn_allSearch',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴검색'}]}]},{T:1,N:'w2:anchor',A:{class:'btn_fold',id:'btn_menuCollapseAll',outerDiv:'false',style:'',disabled:'','ev:onclick':'scwin.btn_menuCollapseAll_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴접기'}]}]},{T:1,N:'w2:anchor',A:{class:'btn_fold_list on',id:'btn_menuExpandAll',outerDiv:'false',style:'','ev:onclick':'scwin.btn_menuExpandAll_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴펼치기'}]}]}]},{T:1,N:'xf:group',A:{class:'tab_tit',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'on',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{class:'','ev:onclick':'scwin.anc_menu_onclick',id:'anc_menu',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메뉴'}]}]}]},{T:1,N:'xf:group',A:{id:'grp_favMenu',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{'ev:onclick':'scwin.anc_menu02_onclick',id:'anc_menu02',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'즐겨찾기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'search_field',id:'gr_search_field','ev:onblur':''},E:[{T:1,N:'w2:autoComplete',A:{interactionMode:'',chooseOptionValue:'none',chooseOptionLabel:'메뉴를 검색하세요',chooseOption:'true',displayMode:'label','ev:onviewchange':'scwin.acb_search_onviewchange',id:'acb_search',useKeywordHighlight:'false',style:'height:32px;font-size:13px;',search:'contain',allOption:'',textAlign:'left',submenuSize:'auto',editType:'select',class:'w2gridViewItemTable_main',caseSensitive:'false',noResult:'first',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_menu'},E:[{T:1,N:'w2:label',A:{ref:'MENU_NM'}},{T:1,N:'w2:value',A:{ref:'MENU_CD'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'swh_lnbbox',class:'tab_conbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'gr_tab_menu',class:'tab_con scrollbar'},E:[{T:1,N:'w2:treeview',A:{showTreeDepth:'0',tooltipGroupClass:'false',dataType:'listed',labelclass:'',toggleEvent:'onclick','ev:onclick':'scwin.trv_menu_onclick',lineShow:'false',style:'',id:'trv_menu',class:'tw_menu'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_menu'},E:[{T:1,N:'w2:label',A:{ref:'MENU_NM'}},{T:1,N:'w2:value',A:{ref:'MENU_CD'}},{T:1,N:'w2:depth',A:{ref:'MENU_LEVEL'}}]}]}]},{T:1,N:'xf:group',A:{style:'display: none;',id:'gr_tab_menu02',class:'tab_con scrollbar'},E:[{T:1,N:'w2:treeview',A:{showTreeDepth:'0',tooltipGroupClass:'false',dataType:'listed',lineShow:'',style:'',id:'trv_favMenu',class:'tw_menu','ev:onclick':'scwin.btn_FavMenuNode_onclick',toggleEvent:'onclick'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_fav'},E:[{T:1,N:'w2:label',A:{ref:'MENU_NM'}},{T:1,N:'w2:value',A:{ref:'MENU_CD'}},{T:1,N:'w2:depth',A:{ref:'MENU_LEVEL'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'box_history',class:'recent_work'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:span',A:{id:'',label:'최근검색',style:'',class:'tit'}},{T:1,N:'w2:anchor',A:{outerDiv:'false','ev:onclick':'scwin.btn_history_clear_onclick',style:'',id:'btn_history_clear',class:'btn_work_clear fr'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All Clear'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'scrollbar',style:'',tagname:'ul'},E:[{T:1,N:'w2:generator',A:{style:'',id:'gen_history',class:'grbox'},E:[{T:1,N:'xf:group',A:{style:'width: 100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;',id:'',class:'work_item'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false','ev:onclick':'scwin.btn_History_onclick',style:'',id:'btn_History',class:'on'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'권한관리'}]}]}]}]}]}]}]}]}]})