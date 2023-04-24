/*amd /cm/template/page/10_popup/popup.xml 11192 e5207621a3e82a616238537cd40710535bd014e9fa3f359cbb8cf3ea8be13ebd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'name10'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
			scwin.onpageload = function() {
				pageList1.setCount(100);
				$(".btn_fav").click(function(){
					$(".btn_fav").toggleClass("on");
				});
		  	};
		
			scwin.openPopup_onclick = function(e) {
				requires("uiplugin.popup"); 
				var winWid = $(window).width();
				var winHei = $(window).height();
				var popWid = 800;
				var popHei = 500;
				var sumLeft = (winWid - popWid) / 2;
				var sumTop = (winHei - popHei) / 2;
				
				var opts = {
				"id" : "popup_window_wframe",
				"type" : "litewindow",
				"width" : popWid + "px",
				"height" : popHei + "px",
				"top" : sumTop, 
				"left" : sumLeft,
				"popupName" : "팝업타이틀",
				"modal" : true, 
				"useIFrame" : false,
				"title" : "focusTest",
				"useATagBtn" : true,
				"frameMode" : "wframe"
				};
				$p.openPopup("/cm/template/page/10_popup/popup_contents.xml", opts);
			};
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'sub_contents'},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav',id:'trigger23',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'팝업',style:'',tagname:''}},{T:1,N:'xf:group',A:{class:'breadcrumb',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'home',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Home'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:span',A:{id:'',label:'3Depth Menu',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'조회조건',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',ref:'',renderType:'',style:'width:100px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',class:'req',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',ref:'',renderType:'',style:'width:100px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ','ev:onclick':'scwin.openPopup_onclick',id:'trigger24',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'팝업'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회조건',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'항목1'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'항목2'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'항목3'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'서브타이틀',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm  copy',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  row_add',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  row_del',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm  upload',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다운로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무버튼'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:dataList1',defaultCellHeight:'20',focusMode:'row',id:'',keepDefaultColumnWidth:'true',rowNumHeaderValue:'No',rowNumVisible:'true',rowNumWidth:'50',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'50',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 150px;',visibleRowNum:'all'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',style:'height: 26px',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',style:'',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',style:'',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column8',inputType:'text',removeBorderStyle:'false',style:'',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',style:'',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column6',inputType:'text',removeBorderStyle:'false',style:'',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',removeBorderStyle:'false',style:'',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column4',inputType:'text',removeBorderStyle:'false',style:'',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',removeBorderStyle:'false',style:'',value:'타이틀',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',removeBorderStyle:'false',style:'height: 26px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col2',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col3',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col4',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col5',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col6',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col7',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col8',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col9',inputType:'text',removeBorderStyle:'false',style:'height:20px',width:'70'}}]}]}]},{T:1,N:'w2:pageList',A:{class:'wq_pglist',displayButtonType:'display',displayFormat:'#',id:'pageList1',pageSize:'10',pagingType:'0',style:''}}]}]}]}]}]})