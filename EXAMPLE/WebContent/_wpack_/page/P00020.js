/*amd /page/P00020.xml 10896 2e803f67a4b02314604556b5bd3d52d6e6ba2ba745e3addeef3f04bfe25fbd5b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_bookList',repeatNode:'data',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'title',name:'title'}},{T:1,N:'w2:column',A:{dataType:'text',id:'price',name:'price'}},{T:1,N:'w2:column',A:{dataType:'text',id:'img',name:'img'}},{T:1,N:'w2:column',A:{dataType:'text',id:'info',name:'info'}}]},{T:1,N:'w2:data',A:{use:'true',xmlns:''},E:[{T:1,N:'w2:row',E:[{T:1,N:'title',E:[{T:4,cdata:'Harry Potter'}]},{T:1,N:'price',E:[{T:4,cdata:'29.99'}]},{T:1,N:'img',E:[{T:4,cdata:'/img/example/book1.jpg'}]},{T:1,N:'info'}]},{T:1,N:'w2:row',E:[{T:1,N:'title',E:[{T:4,cdata:'Learning XML'}]},{T:1,N:'price',E:[{T:4,cdata:'39.95'}]},{T:1,N:'img',E:[{T:4,cdata:'/img/example/book2.gif'}]},{T:1,N:'info'}]},{T:1,N:'w2:row',E:[{T:1,N:'title',E:[{T:4,cdata:'XQuery Kick Start'}]},{T:1,N:'price',E:[{T:4,cdata:'49.99'}]},{T:1,N:'img',E:[{T:4,cdata:'/img/example/book3.jpg'}]},{T:1,N:'info'}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * WebSquare popup window type
 * gridView cell click
 */
scwin.grd_ex1_oncellclick = function (row, col) {
    var rowJSON = dlt_bookList.getRowJSON(row);
    scwin.openPopup(rowJSON, false, "wframePopup");
};

/**
 * WebSquare popup browser type
 * gridView cell click
 */
scwin.grd_ex2_oncellclick = function (row, col) {
    var rowJSON = dlt_bookList.getRowJSON(row);
    scwin.openPopup(rowJSON, true, "browserPopup");
};

/**
 * FloatingLayer Component
 * gridView cell click
 */
scwin.grd_ex3_oncellclick = function (row, col) {
    var opts;

    //모바일에서의 크기,위치 조절을 위해 공통 함수 사용하였습니다.
    //시작
    opts = $c.frame.getPopupPosition({
        width: flt_ex1.getStyle("width"),
        height: flt_ex1.getStyle("height")
    });
    //flt_ex1.setPosition(opts.left, opts.top);
    //종료 

    console.log(flt_ex1.getPosition("top"));
    console.log(flt_ex1.getPosition("left"));
    console.log(flt_ex1.getStyle("width"));
    console.log(flt_ex1.getStyle("height"));

    //레이어 노출
    flt_ex1.show();
};

/**
 * floatinglayer의 close 버튼 클릭 시 호출
 */
scwin.flt_ex1_onclose = function () {
    flt_ex1.hide();
    $p.hideModal();
};

/**
 * 팝업에서 호출.
 */
scwin.closePopup = function () {
    $p.closePopup("popup1");
}

scwin.openPopup = function (rowJSON, useIFrameMode, openType) {
    //dataObject{ dataType: ["xml","string","json","array"], data: "전달 데이터" , name :"변수명"}
    var _width = "230px";
    var _height = "250px";

    if (useIFrameMode == false) {
        _width = "270px";
        _height = "300px";
    }

    var dataObj = {
        type: "json",
        data: rowJSON,
        name: "rowObj"
    };

    var options = {
        id: "popup1",
        //popupUrl : "popup.html",
        type: openType,

        width: _width,
        height: _height,

        top: 130,
        left: 250,

        popupName: "openPopup",
        modal: true,
        useIFrame: useIFrameMode,

        resizable: true,
        status: true,
        menubar: false,
        scrollbars: false,
        title: false,

        dataObject: dataObj
    };

    //모바일에서의 크기,위치 조절을 위해 공통 함수 사용하였습니다. 기본 옵션은 최초 선언된 options를 참고하시기 바랍니다.
    options.left = "auto";
    options = $c.frame.getPopupPosition(options);

    $p.openPopup("/page/P00020P01.xml", options);
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'[SPA 변수명].$w.openPopup($p.openPopup) API를 사용한 팝업 예시와 FloatingLayer 컴포넌트를 이용하여 팝업을 표현한 예시입니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'WebSquare popup window type',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',baseNode:'',class:'wq_gvw',dataList:'dlt_bookList',defaultCellHeight:'26','ev:oncellclick':'scwin.grd_ex1_oncellclick',id:'grd_ex1',keepDefaultColumnWidth:'true',repeatNode:'',rowNumHeaderValue:'No.',rowNumVisible:'true',rowNumWidth:'50',scrollByColumn:'false',style:'height: 100px;',visibleRowNum:'all',autoFitMinWidth:'250'},E:[{T:1,N:'w2:header',A:{id:'header3',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{id:'column10',inputType:'text',style:'',value:'Book Title',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'',value:'price',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody3',style:''},E:[{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{id:'title',inputType:'text',style:'',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'$#,###.#0',displayMode:'label',id:'price',inputType:'text',style:'',width:'70'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'CheckCombobox',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',baseNode:'',class:'wq_gvw',dataList:'dlt_bookList',defaultCellHeight:'26','ev:oncellclick':'scwin.grd_ex2_oncellclick',id:'grd_ex2',keepDefaultColumnWidth:'true',repeatNode:'',rowNumHeaderValue:'No.',rowNumVisible:'true',rowNumWidth:'50',scrollByColumn:'false',style:'height: 100px;',visibleRowNum:'all',autoFitMinWidth:'250'},E:[{T:1,N:'w2:header',A:{id:'header3',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{id:'column10',inputType:'text',style:'',value:'Book Title',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'',value:'price',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody3',style:''},E:[{T:1,N:'w2:row',A:{id:'row6',style:''},E:[{T:1,N:'w2:column',A:{id:'title',inputType:'text',style:'',width:'140'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'$#,###.#0',displayMode:'label',id:'price',inputType:'text',style:'',width:'70'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'CheckCombobox',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',baseNode:'',class:'wq_gvw',dataList:'dlt_bookList',defaultCellHeight:'26','ev:oncellclick':'scwin.grd_ex3_oncellclick',id:'grd_ex3',keepDefaultColumnWidth:'true',repeatNode:'',rowNumHeaderValue:'No.',rowNumVisible:'true',rowNumWidth:'50',scrollByColumn:'false',style:'height: 100px;',visibleRowNum:'all',autoFitMinWidth:'250'},E:[{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{id:'column3',inputType:'text',style:'',value:'Book Title',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column4',inputType:'text',style:'',value:'price',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{id:'title',imageClickFunction:'',imageHeight:'20',imageSrc:'',imageWidth:'20',imeMode:'disabled',inputType:'text',style:'',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',dataType:'number',displayFormat:'$#,###.#0',displayMode:'label',id:'price',inputType:'text',style:'',width:'70'}}]}]}]}]}]}]}]},{T:1,N:'w2:floatingLayer',A:{bodyComplex:'true',dragAlwaysView:'false','ev:onclose':'scwin.flt_ex1_onclose',id:'flt_ex1',style:'position:absolute;left:33px;top:524px;width:250px;height:250px;background:white;display:none;z-index:99999;',title:'Book Info.',useResizeDrag:'false'},E:[{T:1,N:'xf:group',A:{id:'floatingLayer_group',style:'position: absolute;width: 100%;height: 100%;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'PRICE',style:'position: absolute ;left:112px;top:40px;width:101px;height:25px;font: bold 11px tahoma;'}},{T:1,N:'xf:image',A:{id:'',ref:'data:dlt_bookList.img',src:'',style:'position: absolute ;left:12px;top:40px;width: 90px;height: 120px;'}},{T:1,N:'w2:textbox',A:{id:'',label:'',ref:'data:dlt_bookList.title',style:'position: absolute ;left:12px;top:10px;width: 200px;height: 30px;font: bold 15px tahoma;'}},{T:1,N:'w2:textbox',A:{id:'',label:'REVIEW',style:'position: absolute ;left:112px;top:95px;width:101px;height:25px;font: bold 11px tahoma;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.flt_ex1_onclose',id:'',style:'position: absolute ;left:164px;top:180px;width: 50px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'close'}]}]},{T:1,N:'w2:textbox',A:{dataType:'number',displayFormat:'$#,###.#0',id:'',label:'',ref:'data:dlt_bookList.price',style:'position: absolute ;left:112px;top:65px;width:101px;height:25px;font: bold 11px tahoma;'}},{T:1,N:'w2:textbox',A:{id:'',label:'',ref:'data:dlt_bookList.info',style:'position: absolute ;left:112px;top:120px;width: 100px;height: 50px;'}}]}]}]}]}]})