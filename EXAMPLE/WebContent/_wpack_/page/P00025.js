/*amd /page/P00025.xml 6336 8eaa5246b609d41c949a607ccd614a672300484f974f41962dab2e89bf40d38c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * [실행1] 클릭 시
 * [Group 컴포넌트 ID].invoke("setValue","");
 */
scwin.btn_ex1_onclick = function (e) {

    //grp_form 컴포넌트 하위의 모든 웹스퀘어 컴포넌트의 setValue method를 실행합니다.
    //setValue method가 없는 경우 해당 컴포넌트는 제외하고 진행됩니다.
    grp_form.invoke("setValue", "");
};


/**
 * [실행2] 클릭 시
 * [Group 컴포넌트 ID].invoke("setDisabled",true);
 */
scwin.btn_ex2_onclick = function (e) {

    //grp_form 컴포넌트 하위의 모든 웹스퀘어 컴포넌트의 setDisabled method를 실행합니다.
    //setDisabled method가 없는 경우 해당 컴포넌트는 제외하고 진행됩니다.
    //grp_form 컴포넌트 하위의 컴포넌트가 disabeld됩니다.
    grp_form.invoke("setDisabled", true);
};


/**
 * [실행3] 클릭 시
 * [Group 컴포넌트 ID].invoke("setDisabled", false);
 */
scwin.btn_ex3_onclick = function (e) {

    //grp_form 컴포넌트 하위의 모든 웹스퀘어 컴포넌트의 setDisabled method를 실행합니다.
    //setDisabled method가 없는 경우 해당 컴포넌트는 제외하고 진행됩니다.
    //grp_form 컴포넌트 하위의 컴포넌트가 enabled됩니다.
    grp_form.invoke("setDisabled", false);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'빈 문자열 할당하기',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행1'}]}]}]},{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'비활성화 하기',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행2'}]}]}]},{T:1,N:'xf:group',A:{class:'com_example_heading_btn',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'com_example_heading',id:'',label:'활성화 하기',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행3'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'grp_form',class:'w2tb tb',adaptive:'layout',adaptiveThreshold:'800'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							InputBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'width:140px;',id:'',placeholder:'',class:'',initValue:'WebSquare'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							CheckBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',disabled:'',style:'min-width:140px;',id:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Type1'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Type2'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							InputCalendar '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',rightAlign:'false',focusOnDateSelect:'false',style:'width:140px;',id:'',renderType:'component',renderDiv:'true',calendarValueType:'yearMonthDate',setCurrentDate:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:3,text:' TextBox '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Textbox 컴포넌트입니다.'}}]}]}]}]}]}]}]}]})