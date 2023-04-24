/*amd /page/P00120.xml 9268 e33eb005de7f5174ad65ddf683317c1814457c76cd845d189595f2ca8f7083d3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220930'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_exam_code',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_exam_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'select',name:'select'}},{T:1,N:'w2:column',A:{dataType:'text',id:'checkcombobox',name:'checkcombobox'}},{T:1,N:'w2:column',A:{id:'autoComplete',name:'autoComplete',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_exam_2',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'select',name:'select'}},{T:1,N:'w2:column',A:{dataType:'text',id:'checkcombobox',name:'checkcombobox'}},{T:1,N:'w2:column',A:{id:'autoComplete',name:'autoComplete',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.setInitData();
};

scwin.setInitData = function () {
    var arrCodeData = [
        { "label": "Peach", "code": "01" },
        { "label": "Lime", "code": "02" },
        { "label": "Apple", "code": "03" },
        { "label": "Grapes", "code": "04" }
    ];

    var arrData = [
        { "select": "03", "checkcombobox": "03", "autoComplete": "03" },
        { "select": "02", "checkcombobox": "02", "autoComplete": "02" },
        { "select": "01", "checkcombobox": "01", "autoComplete": "01" },
        { "select": "04", "checkcombobox": "04", "autoComplete": "04" }
    ];

    //DataList dlt_exam_code에 데이터 할당
    dlt_exam_code.setJSON(arrCodeData);

    dlt_exam_1.setJSON(arrData);
    dlt_exam_2.setJSON(arrData);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 바디 컬럼의 inputType이 목록(콤보)형인 경우 정렬할 데이터의 출처를 설정하는 예제입니다.<br/>정렬할 데이터의 출처의 기본 설정값은 value입니다. 설정을 통해 label로 지정할 수 있습니다.<br/>적용 가능한 inputType은 select, checkcombobox, autoComplete입니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'기본 설정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'목록에 연결된 value 데이터를 기반으로 정렬됩니다.',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'wq_gvw',dataList:'data:dlt_exam_1',defaultCellHeight:'24',id:'',style:'height:80px;',visibleRowNum:'4',visibleRowNumFix:'true',sortEvent:'onclick',sortable:'true',showSortableImage:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'select',width:'68'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'checkcombobox',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'autoComplete',width:'90'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'select',inputType:'select',viewType:'icon',width:'68'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'checkcombobox',inputType:'checkcombobox',viewType:'icon',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'autoComplete',inputType:'autoComplete',viewType:'icon',width:'90'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'정렬 데이터의 출처를 목록의 label로 지정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'목록에 연결된 label 데이터를 기반으로 정렬됩니다.',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'wq_gvw',dataList:'data:dlt_exam_2',defaultCellHeight:'24',id:'',style:'height:80px;',visibleRowNum:'4',visibleRowNumFix:'true',showSortableImage:'true',sortEvent:'onclick',sortable:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'select',width:'68'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'checkcombobox',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'autoComplete',width:'90'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'select',inputType:'select',viewType:'icon',width:'68',sortLabel:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'checkcombobox',inputType:'checkcombobox',viewType:'icon',width:'100',sortLabel:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'autoComplete',inputType:'autoComplete',viewType:'icon',width:'90',sortLabel:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'w2:label',A:{ref:'label'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'[참고 정보] 목록 데이터',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'GridView에 연결된 목록형 inputType에 연결된 DataList "dlt_exam_code"의 데이터입니다.',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'wq_gvw',dataList:'data:dlt_exam_code',defaultCellHeight:'24',id:'',style:'height:80px;',visibleRowNum:'all',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column2',value:'label',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'code',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'label',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'code',displayMode:'label'}}]}]}]}]}]}]}]}]}]}]})