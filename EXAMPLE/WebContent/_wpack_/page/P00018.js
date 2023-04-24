/*amd /page/P00018.xml 3959 98245dffd38a93214723709ccd21857d85647b5d8eeec7db647646cefa3cd86e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_mapchart',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'code',name:'code'}},{T:1,N:'w2:column',A:{dataType:'text',id:'value',name:'value'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getChartData',ref:'',target:'data:json',action:'/data/sampleData/mapChartData.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gVar = {
    "colorScale1": ""
};

scwin.onpageload = function () {
    $p.executeSubmission("sbm_getChartData");
    scwin.gVar.colorScale1 = d3.scale.linear().range(["red", "yellow", "green", "turquoise", "blue"]).domain([0, 0.25, 0.5, 0.75, 1]);
};


scwin.cht_ex1_onbeforemapchange = function (info) {
    if (info.newMapCode.length >= 2) {
        return false; // 지도 확장기능 사용하지 않음 
    }
};

scwin.cht_ex1_onmapdatachange = function (dataListId) {
    var dataList = WebSquare.util.getComponentById(dataListId);
    switch (dataListId) {
        case "dataList1":
            var data = dataList.getAllJSON();
            for (var i = 0; i < data.length; i++) {
                var municipality = d3.select("#" + this.id + "_map").select(".municipality.c" + data[i].code);
                municipality.style("fill", scwin.gVar.colorScale1(data[i].value));
            }
            break;
    }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'MapChart 사용 예시입니다. MapChart는 d3을 이용해 우리나라 전국지도에 입력받은 데이터를 다양한 형태로 시각화하여 표현하는 컴포넌트입니다.<br/>MapChart는 d3를 사용하여 구현한 지도 형태의 컴포넌트로서 인스웨이브는 d3에서 제공한 바이너리, 샘플, 문서를 그대로 제공해드려야 하며 소스, 샘플, 문서에 대한 버그수정, 기능추가 및 번역 작업을 제공해 드리지 않습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}}]},{T:1,N:'w2:mapchart',A:{dataMapPath:'/websquare/_websquare_/externalJS/mapchart',id:'cht_ex1',style:'position: relative;height:500px;max-width: 700px;border: 1px solid #CED4DA;'}}]}]}]}]})