/*amd /page/P00117.xml 7559 49e59929bb3e7be310300ea4b06b711c1412ad49279d771b572be63d0de4a50b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220930'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_exam1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'type',name:'type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type_value',name:'type_value',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'checkbox'}]},{T:1,N:'type_value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'select'}]},{T:1,N:'type_value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'calendar'}]},{T:1,N:'type_value',E:[{T:4,cdata:'20020415'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type',E:[{T:4,cdata:'input'}]},{T:1,N:'type_value',E:[{T:4,cdata:'공정하다는 착각'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_code',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'01'}]},{T:1,N:'label',E:[{T:4,cdata:'선택'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'02'}]},{T:1,N:'label',E:[{T:4,cdata:'미선택'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * 버튼 [1번째 행의 inputType을 "checkbox"로 변경하기] 클릭 시
 */
scwin.btn_ex1_onclick = function (e) {
    var jsnCellInfo;
    var numRowIndex;
    var strColID;

    strRowIndex = 0; //변경할 행의 index    
    strColID = "type_value" //변경할 열의 ID

    strID = "dynamic_select_" + strRowIndex + "_" + strColID;   //중복되지 않는 GridVIew의 셀 ID 생성

    //inputType 정보
    jsnCellInfo = {
        id: strID,
        inputType: "checkbox",
        options: { valueType: "other", trueValue: "Y", falseValue: "N", checkboxLabel: "선택" }
    };

    //GridView "grd_exam1"의 셀 inputType을 변경합니다.
    grd_exam1.setCellInputType(strRowIndex, strColID, jsnCellInfo);
};

/**
 * 버튼 [2번째 행의 inputType을 "select"로 변경하기] 클릭 시
 */
scwin.btn_ex2_onclick = function (e) {
    var jsnCellInfo;
    var numRowIndex;
    var strColID;

    strRowIndex = 1; //변경할 행의 index
    strColID = "type_value" //변경할 열의 ID

    strID = "dynamic_select_" + strRowIndex + "_" + strColID;   //중복되지 않는 GridVIew의 셀 ID 생성

    //inputType 정보
    jsnCellInfo = {
        id: strID,
        inputType: "select",
        options: { viewType: "icon" },
        itemSet: {
            nodeset: "data:dlt_code",
            label: "label",
            value: "code"
        }
    };

    //GridView "grd_exam1"의 셀 inputType을 변경합니다.
    grd_exam1.setCellInputType(strRowIndex, strColID, jsnCellInfo);
};

/**
 * 버튼 [3번째 행의 inputType을 "calenar"로 변경하기] 클릭 시
 */
scwin.btn_ex3_onclick = function (e) {
    var jsnCellInfo;
    var numRowIndex;
    var strColID;

    strRowIndex = 2; //변경할 행의 index
    strColID = "type_value" //변경할 열의 ID

    strID = "dynamic_select_" + strRowIndex + "_" + strColID;   //중복되지 않는 GridVIew의 셀 ID 생성

    //inputType 정보
    jsnCellInfo = {
        id: strID,
        inputType: "calendar",
        options: { viewType: "icon", dataType: "date", displayFormat: "yyyy-MM-dd" }
    };

    //GridView "grd_exam1"의 셀 inputType을 변경합니다.
    grd_exam1.setCellInputType(strRowIndex, strColID, jsnCellInfo);
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'원하는 시점에 GridView 셀의 inputType을 변경하는 예제입니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'컬럼 [동적 inputType]의 inputType 변경하기',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex1_onclick',id:'btn_ex1',localeRef:'',style:'min-width: 30px; height: 26px; display: block;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1번째 행의 inputType을 "checkbox"로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex2_onclick',id:'btn_ex2',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2번째 행의 inputType을 "select"로 변경하기'}]}]}]},{T:1,N:'xf:group',A:{class:'mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of','ev:onclick':'scwin.btn_ex3_onclick',id:'btn_ex3',localeRef:'',style:'min-width: 30px; height: 26px;',type:'',useDefaultLabel:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3번째 행의 inputType을 "calenar"로 변경하기'}]}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_exam1',defaultCellHeight:'24',id:'grd_exam1',rowNumVisible:'true',rowNumWidth:'26',setCellInputTypeCustom:'true',style:'height:100px;width: 210px;',visibleRowNum:'all'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column2',value:'유형',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'동적 inputType',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'type',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'type_value',inputType:'custom',textAlign:'left',value:'',width:'100'}}]}]}]}]}]}]}]}]}]}]})