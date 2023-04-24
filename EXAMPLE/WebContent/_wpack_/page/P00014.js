/*amd /page/P00014.xml 9233 067b3506dfe7a4dd598545b4dcea9b89dabbf3a1d295089a4eae4577feed09a1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_person',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'NAME',name:'이름'}},{T:1,N:'w2:column',A:{dataType:'text',id:'BLOOD_TYPE',name:'혈액형'}},{T:1,N:'w2:column',A:{dataType:'text',id:'GENDER',name:'성별'}},{T:1,N:'w2:column',A:{dataType:'text',id:'MILITARY',name:'병역여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'MILITARYINFO',name:'병역정보'}},{T:1,N:'w2:column',A:{dataType:'text',id:'EDUCATION',name:'학력'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_code_military',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'CODE',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'CODENM',name:'name2'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'01'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'육군'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'02'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'해군'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'03'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'공군'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'CODE',E:[{T:4,cdata:'04'}]},{T:1,N:'CODENM',E:[{T:4,cdata:'해병대'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/data/sampleData/customInputType.json',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',id:'sbm_searchPerson',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'',replace:'',target:'data:json,["dlt_person"]',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    $p.executeSubmission("sbm_searchPerson");
};

/**
 * 동적으로 셀의 타입 지정.
 * GridView의 MILITARYINFO 컬럼
 */
scwin.getCustomType = function (info) {
    //console.log(info);
    var rowIndex = info.rowIndex;
    var colIndex = info.colIndex;
    var returnInfo;
    switch (info.colID) {
        case "MILITARYINFO":
            if (dlt_person.getCellData(rowIndex, 'MILITARY') == 'fulfilled') {
                returnInfo = {
                    id: "dynamic_select_" + rowIndex + "_" + colIndex,
                    inputType: "select",
                    options: {
                        viewType: "icon",
                        chooseOption: "true"
                    },
                    itemSet: {
                        nodeset: "data:dlt_code_military",
                        label: "CODENM",
                        value: "CODE"
                    }
                }

            }
            else if (dlt_person.getCellData(rowIndex, 'MILITARY') == 'exempted') {
                returnInfo = {
                    id: "dynamic_textarea_" + rowIndex + "_" + colIndex,
                    inputType: "textarea",
                    options: {

                    }
                }

            }
            else {
                returnInfo = {
                    id: "dynamic_checkbox_" + rowIndex + "_" + colIndex,
                    inputType: "checkbox",
                    options: {
                        checkboxLabel: "해당없음"
                    }
                }
            }

            break;

    }

    return returnInfo;

};

/**
 * 사용자가 셀 수정 후 이벤트
 */
scwin.grd_ex01_onafteredit = function (row, col, value) {
    var colId = this.getColumnID(col);

    if (colId == "MILITARY") {
        this.refreshCell(row, "MILITARYINFO");
        dlt_person.setCellData(row, "MILITARYINFO", "");

    }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'그리드뷰의 inputType을 동적으로 변경한 예시입니다.<br/>[병역여부] 컬럼의 값에 따라 [병역정보] 컬럼의 inputType이 변경되는 것을 확인할 수 있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:oneditend':'',oddEvenColorDisplay:'false',rowNumVisible:'true',rowNumHeaderValue:'No',scrollByColumn:'false','ev:onrightbuttonclick':'',defaultCellHeight:'26',adaptive:'',focusMode:'row',rowNumWidth:'',senseReader:'',keyMoveEditMode:'true',autoFit:'allColumn',id:'grd_ex01',tooltipDisplayColumn:'INFO',mergeCells:'',class:'wq_gvw',ignoreToggleOnDisabled:'false',adaptiveThreshold:'','ev:oncellclick':'',editModeEvent:'onclick',scrollByColumnAdaptive:'false',rowNumStatusUniqueId:'true','ev:onbeforeedit':'',summaryAuto:'false',useCtrlOnMultisort:'',useShiftKey:'true',readOnly:'','ev:onscrolly':'',rowStatusVisible:'',tooltipDisplay:'true',fixedColumnWithHidden:'true',dataList:'data:dlt_person','ev:onviewchange':'',columnMove:'true',ignoreCellClick:'false',style:'height:150px;','ev:onafteredit':'scwin.grd_ex01_onafteredit',visibleRowNum:'all',autoFitMinWidth:'550'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'이름',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column11',value:'혈액형',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'성별',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'병역여부',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{toolTip:'병역여부에 따른 Custom Input Type',width:'120',inputType:'text',style:'',id:'column5',value:'* 병역정보',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column3',value:'학력',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'NAME',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'BLOOD_TYPE',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{ref:'',chooseOption:'',viewType:'icon',width:'70',inputType:'select',style:'',allOption:'',id:'GENDER',value:'',blockSelect:'false',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'남'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'M'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'여'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]}]}]},{T:1,N:'w2:column',A:{chooseOptionLabel:'',ref:'',chooseOption:'true',viewType:'icon',width:'70',inputType:'select',style:'',allOption:'',id:'MILITARY',value:'',blockSelect:'false',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'군필'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'fulfilled'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미필'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'unfulfilled'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'면제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'exempted'}]}]}]}]},{T:1,N:'w2:column',A:{falseValue:'0',typeGetter:'scwin.getCustomType',trueValue:'$blank',valueType:'other',width:'120',checkboxLabel:'',inputType:'custom',style:'',id:'MILITARYINFO',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'EDUCATION',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}}]}]}]}]}]}]}]}]})