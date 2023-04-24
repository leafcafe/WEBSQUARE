/*amd /page/P00055.xml 5553 6c687150c5068d355f2352fa679b19b6bdcaedc666ce52187c94cf9df38a00f4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220729'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [$p.openPopup() - browserPopup 실행] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var opts = {
        "id": "p_P00055P01_browserPopup",
        "type": "browserPopup",
        "width": "450px",
        "height": "400px",
        "modal": false
    };

    //모바일에서의 크기,위치 조절을 위해 공통 함수 사용하였습니다. 기본 옵션은 최초 선언된 opts를 참고하시기 바랍니다.
    opts = $c.frame.getPopupPosition(opts);

    $p.openPopup("/page/P00055P01.xml", opts);
};

/**
 * 버튼 [$p.isPopup() 실행] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var ispopup;
    var strResult;

    ispopup = $p.isPopup(); //예상 결과 : false

    strResult = "$p.isPopup();\n";
    strResult += "예상 결과 : false\n";
    strResult += "실행 결과 : " + ispopup;

    alert(strResult);
};

/**
 * 버튼 [$p.isPopup(true) 실행] 클릭 시
 */
scwin.btn_ex3_onclick = function (e) {
    var ispopup;
    var strResult;

    ispopup = $p.isPopup(true); //예상 결과 : false

    strResult = "$p.isPopup(true);\n";
    strResult += "예상 결과 : false\n";
    strResult += "실행 결과 : " + ispopup;

    alert(strResult);
};

/**
 * 버튼 [$p.openPopup() - wframePopup 실행] 클릭 시
 */
scwin.btn_ex4_onclick = function (e) {
    var opts = {
        "id": "p_P00055P01_wframePopup",
        "type": "wframePopup",
        "width": "450px",
        "height": "400px",
        "popupName": "WFrame PopUp",
        "modal": true
    };

    //모바일에서의 크기,위치 조절을 위해 공통 함수 사용하였습니다. 기본 옵션은 최초 선언된 opts를 참고하시기 바랍니다.
    opts = $c.frame.getPopupPosition(opts);

    $p.openPopup("/page/P00055P02.xml", opts);
};


/**
 * 버튼 [$p.isWFramePopup() 실행] 클릭 시
 */
scwin.btn_ex5_onclick = function (e) {
    var isWFramePopup;
    var strResult;

    isWFramePopup = $p.isWFramePopup(); //예상 결과 : false

    strResult = "$p.isWFramePopup();\n";
    strResult += "예상 결과 : false\n";
    strResult += "실행 결과 : " + isWFramePopup;

    alert(strResult);
};

/**
 * 버튼 [$p.isWFramePopup(true) 실행] 클릭 시
 */
scwin.btn_ex6_onclick = function (e) {
    var isWFramePopup;
    var strResult;

    isWFramePopup = $p.isWFramePopup(true); //예상 결과 : false

    strResult = "$p.isWFramePopup(true);\n";
    strResult += "예상 결과 : false\n";
    strResult += "실행 결과 : " + isWFramePopup;

    alert(strResult);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'dfbox'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.openPopup() - browserPopup 실행'}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex4_onclick',id:'btn_ex4',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.openPopup() - wframePopup 실행'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'dfbox'},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.isPopup() 실행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.isPopup(true) 실행'}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex5_onclick',id:'btn_ex5',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.isWFramePopup() 실행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',disabled:'',escape:'false','ev:onclick':'scwin.btn_ex6_onclick',id:'btn_ex6',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'$p.isWFramePopup(true) 실행'}]}]}]}]}]}]}]})