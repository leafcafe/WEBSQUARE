/*amd /cm/template/page/00_user_defined/00_user_defined.xml 5451 f5ab7c7523b621ca4733b93cbb70868fca5e408e44f193b5afc6107456860856 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
	
};

/**
 * [실행1] 클릭 시
 */
scwin.btn_ex1_onclick = function(e) {
    //로그 출력
    $c.frame.printExampleLog("** [실행1] scwin.btn_ex1_onclick 실행 **", txa_log, false);

};

/**
 * [실행2] 클릭 시
 */
scwin.btn_ex2_onclick = function(e) {
    //로그 출력
    $c.frame.printExampleLog("** [실행2] scwin.btn_ex2_onclick 실행 **", txa_log, false);

};

/**
 * [실행3] 클릭 시
 */
scwin.btn_ex3_onclick = function(e) {
    //로그 출력
    $c.frame.printExampleLog("** [실행3] scwin.btn_ex3_onclick 실행 **", txa_log, false);
};

/**
 * [실행4] 클릭 시
 */
scwin.btn_ex4_onclick = function(e) {
    //로그 출력
    $c.frame.printExampleLog("** [실행4] scwin.btn_ex4_onclick 실행 **", txa_log, false);
};

/**
 * textarea의 로그 삭제
 */
scwin.btn_clearLog_onclick = function(e) {
    txa_log.setValue("");
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:udc_example_refresh',A:{id:'udc_example_refresh',style:'margin-bottom:10px;'}},{T:1,N:'xf:group',A:{style:'',id:'',tagname:'dl',class:'com_example_dl'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'타이틀',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행1'}]}]},{T:1,N:'w2:textbox',A:{class:'mr_def',escape:'false',id:'',label:'코멘트',style:'',tagname:'samp'}}]},{T:1,N:'w2:textbox',A:{id:'',label:'타이틀',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'',tagname:'dd'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행2'}]}]},{T:1,N:'w2:textbox',A:{class:'mr_def',escape:'false',id:'',label:'코멘트',style:'',tagname:'samp'}}]},{T:1,N:'w2:textbox',A:{id:'',label:'타이틀',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{style:'',id:'',tagname:'dd'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행3'}]}]},{T:1,N:'w2:textbox',A:{class:'mr_def',escape:'false',id:'',label:'코멘트',style:'',tagname:'samp'}}]},{T:1,N:'w2:textbox',A:{id:'',label:'타이틀',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex4_onclick',id:'btn_ex4',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'실행4'}]}]},{T:1,N:'w2:textbox',A:{class:'mr_def',escape:'false',id:'',label:'코멘트',style:'',tagname:'samp'}}]}]},{T:1,N:'xf:group',A:{class:'com_example_dl',id:'',style:'',tagname:'dl'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'타이틀',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'}},{T:1,N:'w2:textbox',A:{id:'',label:'타이틀',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'dd'}},{T:1,N:'w2:textbox',A:{id:'',label:'타이틀',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'}},{T:1,N:'w2:textbox',A:{id:'',label:'타이틀',style:'',tagname:'dt'}},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'dd'}}]},{T:1,N:'xf:group',A:{class:'w2tb mb_def',id:'grp_form',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb mb_def',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'},{T:1,N:'w2:spellcheck',E:[{T:3,text:'false'}]}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\n						로그&nbsp;출력 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',disabled:'',escape:'false',id:'btn_clearLog',style:'',type:'button','ev:onclick':'scwin.btn_clearLog_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'로그 삭제'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 200px;'}}]}]}]}]}]}]}]})