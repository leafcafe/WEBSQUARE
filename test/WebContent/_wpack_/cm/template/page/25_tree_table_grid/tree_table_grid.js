/*amd /cm/template/page/25_tree_table_grid/tree_table_grid.xml 13801 021edd551e698b66d225987e1c7353f5bc8f9af38db019075c3c535dbc9167ce */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'name10'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
			scwin.onpageload = function() {
			    pageList1.setCount(100);
	        		
	        	$(".btn_fav").click(function(){
					$(".btn_fav").toggleClass("on");
				});
			};
		
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'화면타이틀',style:'',tagname:''}},{T:1,N:'xf:group',A:{class:'breadcrumb',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'home',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Home'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:span',A:{id:'',label:'3Depth Menu',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{id:'',class:'ly_column col_3'},E:[{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'서브타이틀',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tvwbox ',id:'',style:''},E:[{T:1,N:'w2:treeview',A:{class:'wq_tvw',dataType:'listed',id:'',style:'height:421px;',tooltipGroupClass:'false'},E:[{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'}]}]}]},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'}]}]}]},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'ly_column col_7'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'req',id:'',placeholder:'',style:'width:100%;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',style:'width:100%;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'서브타이틀',class:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'fr'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm  copy'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm  row_add'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm  row_del'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삭제'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm  upload'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업로드'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm download'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:dataList1',defaultCellHeight:'26',focusMode:'row',id:'',keepDefaultColumnWidth:'true',rowNumHeaderValue:'No',rowNumVisible:'true',rowNumWidth:'50',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'50',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 150px;',visibleRowNum:'10'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column8',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column6',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column4',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col2',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col3',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col4',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col5',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col6',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col7',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col8',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col9',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col10',inputType:'text',removeBorderStyle:'false',width:'70'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'fr'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무버튼'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무버튼'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'',class:'bar_btndiv'}},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm pt'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]}]}]})