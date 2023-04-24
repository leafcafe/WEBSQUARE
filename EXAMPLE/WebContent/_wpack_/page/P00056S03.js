/*amd /page/P00056S03.xml 5396 5f2748705fa7426657b4195bb11973ca070b79ced1d8ce86a7f1d3f215b4545d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220729'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * wFramePopup 실행 - $p.openPopup
 * 버튼 [frameModal : "frame"] 클릭 시
 */
scwin.btn_ex1_1_onclick = function (e) {
    var jsnOptions = {
        id: "popup_exam1",
        type: "wframePopup",
        width: "200px",
        height: "150px",
        top: "0px",
        left: "0px",
        popupName: "frameModal - frame",
        modal: "true",
        frameModal: "frame" //[default: ""] modal을 표시해줄 frame(wframe, tabControl, windowContainer)을 지정. "top", "parent", "frame", frame id
    };

    $p.openPopup("/page/P00056P01.xml", jsnOptions);
};

/**
 * wFramePopup 실행 - $p.openPopup
 * 버튼 [frameModal : "parent"] 클릭 시
 */
scwin.btn_ex1_2_onclick = function (e) {
    var jsnOptions = {
        id: "popup_exam2",
        type: "wframePopup",
        width: "200px",
        height: "150px",
        top: "0px",
        left: "0px",
        popupName: "frameModal - parent",
        modal: "true",
        frameModal: "parent" //[default: ""] modal을 표시해줄 frame(wframe, tabControl, windowContainer)을 지정. "top", "parent", "frame", frame id
    };

    $p.openPopup("/page/P00056P01.xml", jsnOptions);
};

/**
 * wFramePopup 실행 - $p.openPopup
 * 버튼 [frameModal : "top"] 클릭 시
 */
scwin.btn_ex1_3_onclick = function (e) {
    var jsnOptions = {
        id: "popup_exam3",
        type: "wframePopup",
        width: "200px",
        height: "150px",
        top: "0px",
        left: "0px",
        popupName: "frameModal - top",
        modal: "true",
        frameModal: "top" //[default: ""] modal을 표시해줄 frame(wframe, tabControl, windowContainer)을 지정. "top", "parent", "frame", frame id
    };

    $p.openPopup("/page/P00056P01.xml", jsnOptions);
};

/**
 * wFramePopup 실행 - $p.openPopup
 * 버튼 [frameModal : [Frame ID]] 클릭 시
 */
scwin.btn_ex1_4_onclick = function (e) {
    var strFrameID;
    var jsnOptions;

    //컨텐츠 영역(P00056.xml)의 ID - 자식의 화면에서 부모의 Frame ID를 획득하기 위해서는 아래와 같이 상대적인 방법으로 접근해야 합니다.
    strFrameID = $p.getFrame().getParentFrame().getParentFrame().getParentFrame().id

    jsnOptions = {
        id: "popup_exam4",
        type: "wframePopup",
        width: "200px",
        height: "150px",
        top: "0px",
        left: "0px",
        popupName: "frameModal - frameID",
        modal: "true",
        frameModal: strFrameID //[default: ""] modal을 표시해줄 frame(wframe, tabControl, windowContainer)을 지정. "top", "parent", "frame", frame id
    };

    $p.openPopup("/page/P00056P01.xml", jsnOptions);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 3px; border: 3px solid Gold; min-height: 250px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'이곳은 WFrame 영역입니다. - P00056S03.xml',style:'line-height: 2.6em;'}},{T:1,N:'xf:group',A:{id:'',class:'p10'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'wFramePopup 실행 - $p.openPopup',class:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_ex1_1',type:'button',class:'btn_exam_exec',escape:'false','ev:onclick':'scwin.btn_ex1_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'frameModal : "frame"'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_ex1_2',type:'button',class:'btn_exam_exec',escape:'false','ev:onclick':'scwin.btn_ex1_2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'frameModal : "parent"'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_ex1_3',type:'button',class:'btn_exam_exec',escape:'false','ev:onclick':'scwin.btn_ex1_3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'frameModal : "top"'}]}]},{T:1,N:'xf:trigger',A:{disabled:'',style:'',id:'btn_ex1_4',type:'button',class:'btn_exam_exec',escape:'false','ev:onclick':'scwin.btn_ex1_4_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'frameModal : [Frame ID]'}]}]}]}]}]}]}]}]})