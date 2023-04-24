/*amd /page/P00057.xml 5825 42bdce5ceecb3f451a6d0a536acdf646869ce7f712bdca0d573255741c73ad91 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220729'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * $p.openPopup() - browserPopup 실행
 * 버튼 [browserPopup - modal] 클릭 시
 */
scwin.btn_ex1_1_onclick = function (e) {
    var jsnOptions = {
        id: "popup_exam1_1",
        type: "browserPopup", //필수 고정
        width: "300px",
        height: "180px",
        popupName: "Modal browserPopup",
        modal: "true" //필수 고정
    };

    $p.openPopup("/page/P00057P01.xml", jsnOptions);
};

/**
 * $p.openPopup() - browserPopup 실행
 * 버튼 [browserPopup - modeless] 클릭 시
 */
scwin.btn_ex1_2_onclick = function (e) {
    var jsnOptions = {
        id: "popup_exam1_2",
        type: "browserPopup", //필수 고정
        width: "300px",
        height: "180px",
        popupName: "Modeless browserPopup"
    };

    $p.openPopup("/page/P00057P01.xml", jsnOptions);
};

/**
 * $p.openPopup() - wframePopup 실행
 * 버튼 [wframePopup - modal] 클릭 시
 */
scwin.btn_ex2_1_onclick = function (e) {
    var jsnOptions = {
        id: "popup_exam2_1",
        type: "wframePopup", //필수 고정
        width: "300px",
        height: "180px",
        popupName: "Modal wframePopup",
        modal: "true" //필수 고정
    };

    $p.openPopup("/page/P00057P01.xml", jsnOptions);
};

/**
 * $p.openPopup() - wframePopup 실행
 * 버튼 [wframePopup - modeless] 클릭 시
 */
scwin.btn_ex2_2_onclick = function (e) {
    var jsnOptions = {
        id: "popup_exam2_2",
        type: "wframePopup", //필수 고정
        width: "300px",
        height: "180px",
        popupName: "Modeless wframePopup"
    };

    $p.openPopup("/page/P00057P01.xml", jsnOptions);
};

/**
 * $p.openPopup() - iframePopup 실행
 * 버튼 [iframePopup - modal] 클릭 시
 */
scwin.btn_ex3_1_onclick = function (e) {
    var jsnOptions = {
        id: "popup_exam3_1",
        type: "iframePopup", //필수 고정
        width: "300px",
        height: "180px",
        popupName: "Modal iframePopup",
        modal: "true" //필수 고정
    };

    $p.openPopup("/page/P00057P01.xml", jsnOptions);
};

/**
 * $p.openPopup() - iframePopup 실행
 * 버튼 [iframePopup - modeless] 클릭 시
 */
scwin.btn_ex3_2_onclick = function (e) {
    var jsnOptions = {
        id: "popup_exam3_2",
        type: "iframePopup", //필수 고정
        width: "300px",
        height: "180px",
        popupName: "Modeless iframePopup"
    };

    $p.openPopup("/page/P00057P01.xml", jsnOptions);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'$p.openPopup() - browserPopup',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'dfbox'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false',id:'btn_ex1_1',style:'',type:'button','ev:onclick':'scwin.btn_ex1_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'browserPopup - modal'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false',id:'btn_ex1_2',style:'',type:'button','ev:onclick':'scwin.btn_ex1_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'browserPopup - modeless'}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'$p.openPopup() - wframePopup',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_1_onclick',id:'btn_ex2_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframePopup - modal'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_2_onclick',id:'btn_ex2_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'wframePopup - modeless'}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'$p.openPopup() - iframePopup',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_1_onclick',id:'btn_ex3_1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'iframePopup - modal'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_2_onclick',id:'btn_ex3_2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'iframePopup - modeless'}]}]}]}]}]}]}]})