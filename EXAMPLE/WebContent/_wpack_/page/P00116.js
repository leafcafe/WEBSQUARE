/*amd /page/P00116.xml 6493 b166a5716d380caddc4591cde125fb11c9629a3cee6b49e2292d2d742488ec60 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220930'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_exam1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'type_name',name:'type_name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type_value',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'type_name',E:[{T:4,cdata:'checkbox'}]},{T:1,N:'type',E:[{T:4,cdata:'checkbox'}]},{T:1,N:'type_value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type_name',E:[{T:4,cdata:'input'}]},{T:1,N:'type',E:[{T:4,cdata:'input'}]},{T:1,N:'type_value',E:[{T:4,cdata:'사람일까 상황일까'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type_name',E:[{T:4,cdata:'calendar'}]},{T:1,N:'type',E:[{T:4,cdata:'calendar'}]},{T:1,N:'type_value',E:[{T:4,cdata:'20020415'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type_name',E:[{T:4,cdata:'checkbox'}]},{T:1,N:'type',E:[{T:4,cdata:'checkbox'}]},{T:1,N:'type_value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type_name',E:[{T:4,cdata:'select'}]},{T:1,N:'type',E:[{T:4,cdata:'select'}]},{T:1,N:'type_value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'type_name',E:[{T:4,cdata:'input'}]},{T:1,N:'type',E:[{T:4,cdata:'input'}]},{T:1,N:'type_value',E:[{T:4,cdata:'공정하다는 착각'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_code',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'01'}]},{T:1,N:'label',E:[{T:4,cdata:'선택'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'02'}]},{T:1,N:'label',E:[{T:4,cdata:'미선택'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

};

/**
 * grd_exam1의 컬럼 [inputType="custom"]의 inputType 반환
 * 속성 [typeGetter]에 함수명이 정의되어있습니다.
 */
scwin.grd_exam1_type_value_typeGetter = function (argInfo) {
    var rowIndex = argInfo.rowIndex;
    var colIndex = argInfo.colIndex;
    var jsnRow;
    var returnInfo; //inputType 정보가 담긴 JSON객체
    var inputType;
    var strID;

    jsnRow = dlt_exam1.getRowJSON(rowIndex); //현 행의 JSON 데이터 반환받기
    inputType = jsnRow.type || "notype";

    //중복되지 않는 ID 생성
    strID = "dynamic_" + inputType + "_" + rowIndex + "_" + colIndex;

    switch (inputType) {
        case "checkbox":
            returnInfo = {
                id: strID,
                inputType: "checkbox",
                options: { valueType: "other", trueValue: "Y", falseValue: "N", checkboxLabel: "선택" }
            };
            break;
        case "calendar":
            returnInfo = {
                id: strID,
                inputType: "calendar",
                options: { viewType: "icon", dataType: "date", displayFormat: "yyyy-MM-dd" }
            };
            break;
        case "select":
            //itemSet 속성은 select에 출력할 콤보 리스트에 연결할 DataList의 정보입니다.
            returnInfo = {
                id: strID,
                inputType: "select",
                options: { viewType: "icon" },
                itemSet: {
                    nodeset: "data:dlt_code",
                    label: "label",
                    value: "code"
                }
            };
            break;
        case "input":
        default:
            returnInfo = {
                id: strID,
                inputType: "text",
                options: {}
            };
            break;
    }

    return returnInfo;

};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 컬럼의 inputType을 조건에 따라 설정하는 예제입니다.<br/>컬럼 [유형]의 값을 조건으로 컬럼 [inputType="custom"]의 inputType이 설정되었습니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:dlt_exam1',defaultCellHeight:'24',id:'grd_exam1',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;width: 250px;',visibleRowNum:'all'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'유형',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column1',value:'inputType="custom"',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'type_name',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'custom',id:'type_value',displayMode:'label',value:'',typeGetter:'scwin.grd_exam1_type_value_typeGetter',textAlign:'left'}}]}]}]}]}]}]}]}]})