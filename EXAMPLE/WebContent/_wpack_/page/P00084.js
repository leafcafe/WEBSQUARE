/*amd /page/P00084.xml 4267 30063aa53fb3f87d58695231137d842d6450a6b41fbf26820931d66690048a2e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220824'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_exam_code',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'label',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code',name:'code',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    //DataList dlt_exam_code에 데이터 할당
    dlt_exam_code.setJSON([
        { "label": "A01", "code": "01" },
        { "label": "A02", "code": "02" },
        { "label": "A03", "code": "03" },
        { "label": "A04", "code": "04" },
        { "label": "A05", "code": "05" },
        { "label": "A06", "code": "06" },
        { "label": "A07", "code": "07" },
        { "label": "A08", "code": "08" },
        { "label": "A09", "code": "09" },
        { "label": "A10", "code": "10" },
        { "label": "A11", "code": "11" },
        { "label": "A12", "code": "12" },
        { "label": "A13", "code": "13" },
        { "label": "A14", "code": "14" },
        { "label": "A15", "code": "15" },
        { "label": "A16", "code": "16" },
        { "label": "A17", "code": "17" },
        { "label": "A18", "code": "18" },
        { "label": "A19", "code": "19" },
        { "label": "A20", "code": "20" }
    ]);
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'컴포넌트 목록의 행의 개수와 최대 열의 개수에 따는 출력 비교 예제입니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'CheckCombobox<br/>visibleColMax="10" visibleRowNum="5"',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:checkcombobox',A:{appearance:'minimal',direction:'auto',disabled:'false',displayMode:'label',id:'',style:'width: 150px;min-height:24px;',submenuSize:'auto',visibleColMax:'10',visibleRowNum:'5'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'CheckCombobox<br/>visibleColMax="10" visibleRowNum="8"',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:checkcombobox',A:{appearance:'minimal',direction:'auto',disabled:'false',displayMode:'label',id:'',style:'width: 150px;min-height:24px;',submenuSize:'auto',visibleColMax:'10',visibleRowNum:'8'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_exam_code'},E:[{T:1,N:'xf:label',A:{ref:'label'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]}]}]}]})