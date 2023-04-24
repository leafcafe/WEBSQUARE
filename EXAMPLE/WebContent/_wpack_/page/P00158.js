/*amd /page/P00158.xml 5881 c3f275a16b26e62c08cd093e719e2a975a6ac7fda29c9b3498200e664b0dcc1d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221104'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.initPage();
};

/**
 * 화면 초기화
 */
scwin.initPage = function () {
    tac_exam1.addTab(
        "P00158S01",
        {
            "label": "P00158S01",
            "openAction": "select"
        },
        {
            "src": "/page/P00158S01.xml",
            "wframe": true
        }
    );

    tac_exam2.addTab(
        "P00158S02",
        {
            "label": "P00158S02",
            "openAction": "select"
        },
        {
            "src": "/page/P00158S02.xml",
            "wframe": true
        }
    );

};

/**
 * 영역 [(기본 동작) keepDisabledTab 미사용]의
 * 버튼 [비활성화 하기] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    //TabControl [tac_exam1] 비활성화 설정
    tac_exam1.setDisabled(true);
};

/**
 * 영역 [(기본 동작) keepDisabledTab 미사용]의
 * 버튼 [활성화 하기] 클릭 시
 */
scwin.btn_ex1_1_onclick = function (e) {
    //TabControl [tac_exam1] 활성화 설정
    tac_exam1.setDisabled(false);
};

/**
 * 영역 [keepDisabledTab 사용]의
 * 버튼 [비활성화 하기] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    //TabControl [tac_exam2] 비활성화 설정
    tac_exam2.setDisabled(true);
};

/**
 * 영역 [keepDisabledTab 사용]의
 * 버튼 [활성화 하기] 클릭 시
 */
scwin.btn_ex2_1_onclick = function (e) {
    //TabControl [tac_exam2] 활성화 설정
    tac_exam2.setDisabled(false);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'TabControl의 비활성화 유지 속성인 keepDisabledTab 설정 예제입니다.<br/>속성 keepDisabledTab은 <br/>API setDisabeld로 TabControl을 활성화할 때,<br/>API disableTab으로 비활성화된 탭은 비활성화 상태를 유지하는 속성입니다.<br/>이 기능은 상위 TabControl에 API setDisabeld를 호출할 때도 동작됩니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:''}},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mw600',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 동작) keepDisabledTab 미사용',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'상위 TabControl이 비활성화 되었다가 활성화되면 하위 TabControl의 비활성화된 Tab도 활성화됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb10',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비활성화 하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',id:'btn_ex1_1',style:'',type:'button','ev:onclick':'scwin.btn_ex1_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'활성화 하기'}]}]}]},{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam1',style:'position: relative;height: 300px;',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'keepDisabledTab 사용',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'상위 TabControl이 비활성화 되었다가 활성화되면 하위 TabControl의 비활성화된 Tab은 비활성화 상태가 유지됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'mb10',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',id:'btn_ex2',style:'',type:'button','ev:onclick':'scwin.btn_ex2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비활성화 하기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec',id:'btn_ex2_1',style:'',type:'button','ev:onclick':'scwin.btn_ex2_1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'활성화 하기'}]}]}]},{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'',confirmFalseAction:'new',confirmTrueAction:'exist',id:'tac_exam2',style:'position: relative;height: 290px;',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true',frameModal:'true'}}]}]}]}]}]}]}]})