/*amd /page/P00146.xml 6157 83befbfd44c55bbf5c030ba243d04f2ba79c5f26d252f31e4883245d7e97e364 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20221021'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.initPage();
};

/**
 * 화면 초기화
 */
scwin.initPage = function () {
    var strDefaultWidth;

    //예제 테스트를 위해 default width 변경
    if (window.innerWidth < 450) {
        strDefaultWidth = "230px";
    } else {
        strDefaultWidth = "300px";
    }

    //윈도우 추가
    wdc_exam1.createWindow("P00146S01", null, "/page/P00146S01.xml", null, "w_P00146S01", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam1.createWindow("P00146S02", null, "/page/P00146S02.xml", null, "w_P00146S02", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam1.createWindow("P00146S03", null, "/page/P00146S03.xml", null, "w_P00146S03", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");

    wdc_exam2.createWindow("P00146S01", null, "/page/P00146S01.xml", null, "w_P00146S01", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam2.createWindow("P00146S02", null, "/page/P00146S02.xml", null, "w_P00146S02", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");
    wdc_exam2.createWindow("P00146S03", null, "/page/P00146S03.xml", null, "w_P00146S03", "selectWindow", null, null, null, { "defaultWidth": strDefaultWidth }, "wframe");

    //시작 - 예제 테스트를 위한 설정
    wdc_exam1.setArrangeWindows("sequential", ["w_P00146S01", "w_P00146S02", "w_P00146S03"]); //윈도우 분할
    wdc_exam2.setArrangeWindows("sequential", ["w_P00146S01", "w_P00146S02", "w_P00146S03"]); //윈도우 분할
    //종료 - 예제 테스트를 위한 설정
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'윈도우를 닫으면 남은 윈도우가 자동 정렬되는 기능 예제입니다.<br/>속성 autoArrange 지정을 통해 사용할 수 있습니다.<br/>이 기능은 정렬 기능이 설정된 경우 동작합니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mw600',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'윈도우 자동 정렬 기능 설정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'윈도우를 닫으면 남은 윈도우가 자동 정렬됩니다.',style:''}},{T:1,N:'w2:windowContainer',A:{controlIconPosition:'left',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'2',id:'wdc_exam2',nameLayerRearrange:'false',sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaInitCount:'0',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',style:'position: relative;height: 340px;',toolbarPosition:'bottom',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'false',useCustomMsg:'false',useFixButton:'true',useNameContainer:'false',useStatusMsg:'false',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'5',windowMaximizeAll:'false',windowTooltipDisplay:'true',autoArrange:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'기본 설정',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:windowContainer',A:{controlIconPosition:'left',fixArrangeFullScreen:'false',hideTitleOnMaximize:'false',horizontalArrangeNum:'2',id:'wdc_exam1',nameLayerRearrange:'false',sequentialArrangeColNum:'2',sequentialArrangeRowNum:'2',spaInitCount:'0',stopMinimizeOnNameLayer:'false',stopToggleOnLast:'false',style:'position: relative;height: 340px;',toolbarPosition:'bottom',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'false',useControlIconTitle:'false',useCustomMsg:'false',useFixButton:'true',useNameContainer:'false',useStatusMsg:'false',verticalArrangeNum:'2',windowAutoResize:'false',windowMaxNum:'5',windowMaximizeAll:'false',windowTooltipDisplay:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]}]}]}]}]}]}]}]})