/*amd /page/P00210.xml 8373 5558e1c4f3b03708b371af2e3668b9b0eecfb53ec315dfb202ddb50cacf4cc99 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230210'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_1',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books_2',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'label',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'categoryLabel',name:'분류'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    scwin.setDataList();
};

/**
 * DataList에 데이터 할당
 */
scwin.setDataList = function () {
    var arrData = [
        { "label": "거의 모든 전쟁의 역사", "categoryLabel": "역사/문화" },
        { "label": "공정하다는 착각", "categoryLabel": "인문" },
        { "label": "기분을 관리하면 인생이 관리된다", "categoryLabel": "시/에세이" },
        { "label": "나는 둔감하게 살기로 했다", "categoryLabel": "인문" },
        { "label": "나로서 충분히 괜찮은 사람", "categoryLabel": "시/에세이" },
        { "label": "나의 문화유산답사기", "categoryLabel": "역사/문화" },
        { "label": "내가 틀릴 수도 있습니다", "categoryLabel": "인문" },
        { "label": "너무 잘하려고 애쓰지 마라", "categoryLabel": "시/에세이" },
        { "label": "당신은 결국 무엇이든 해내는 사람", "categoryLabel": "시/에세이" },
        { "label": "마음의 법칙", "categoryLabel": "인문" },
        { "label": "마지막 몰입: 나를 넘어서는 힘", "categoryLabel": "자기계발" },
        { "label": "멘탈을 바꿔야 인생이 바뀐다", "categoryLabel": "자기계발" },
        { "label": "모든 사람에게 좋은 사람일 필요는 없어", "categoryLabel": "시/에세이" },
        { "label": "무엇이 옳은가", "categoryLabel": "인문" },
        { "label": "문명의 붕괴(Collapse)", "categoryLabel": "역사/문화" },
        { "label": "미움받을 용기", "categoryLabel": "인문" },
        { "label": "불편한 편의점", "categoryLabel": "소설" },
        { "label": "선을 넘지 않는 사람이 성공한다", "categoryLabel": "자기계발" },
        { "label": "우리는 여전히 삶을 사랑하는가", "categoryLabel": "인문" },
        { "label": "원씽(The One Thing)", "categoryLabel": "자기계발" },
        { "label": "작별인사", "categoryLabel": "소설" },
        { "label": "잘했고 잘하고 있고 잘 될 것이다", "categoryLabel": "시/에세이" },
        { "label": "저만치 혼자서", "categoryLabel": "소설" },
        { "label": "책들의 부엌", "categoryLabel": "소설" },
        { "label": "총 균 쇠", "categoryLabel": "역사/문화" }
    ];

    dlt_books_1.setJSON(arrData);
    dlt_books_2.setJSON(arrData);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView의 헤더 컬럼의 속성 autoFitFilterList의 기능 예제입니다.<br/>속성 autoFitFilterList은 헤더 컬럼에 데이터 필터를 리스트 형태로 지정하였을 때 동작하는 기능입니다.',style:''}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'아래는 설정 값 별 설명입니다.<br/>- false : (기본 설정 값) 목록 박스의 너비는 컬럼의 너비로 지정됩니다.<br/>- true : &nbsp;필터 목록 박스의 최소 너비가가 데이터의 최대 길이로 지정됩니다. (목록 박스의 너비가 데이터의 최대 길이보자 작은 경우 적용)',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'헤더 컬럼의 속성 autoFitFilterList 사용',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'헤더 컬럼 \'분류\'의 필터 아이콘을 클릭하면 데이터의 목록 박스가 표시됩니다.<br/>목록 박스의 너비가 데이터의 최대 길이보다 작을 경우 박스의 너비는 데이터의 최대 길이로 조절됩니다.',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'240',class:'wq_gvw',dataList:'data:dlt_books_1',defaultCellHeight:'24',id:'',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;',visibleRowNum:'4',visibleRowNumFix:'true',useFilterList:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'분류',width:'68',useFilter:'true',autoFitFilterList:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'170'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',value:'',width:'68'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'170',value:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'(기본 설정) 헤더 컬럼의 속성 autoFitFilterList 미사용',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'헤더 컬러 \'분류\'의 필터 아이콘을 클릭하면 데이터의 목록 박스가 표시됩니다.<br/>목록 박스의 너비가 컬럼의 너비로 지정됩니다.',style:''}},{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',autoFitMinWidth:'240',class:'wq_gvw',dataList:'data:dlt_books_2',defaultCellHeight:'24',id:'',rowNumVisible:'true',rowNumWidth:'26',style:'height:100px;',useFilterList:'true',visibleRowNum:'4',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{autoFitFilterList:'false',displayMode:'label',id:'column2',inputType:'text',useFilter:'true',value:'분류',width:'68'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'170'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'categoryLabel',inputType:'text',value:'',width:'68'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'label',inputType:'text',textAlign:'left',width:'170',value:''}}]}]}]}]}]}]}]}]}]}]})