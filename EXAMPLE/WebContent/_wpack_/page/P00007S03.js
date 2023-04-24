/*amd /page/P00007S03.xml 4152 034b71de8b10e35202ff9f7372311a1df9a287c7851c1d613af3aec7782615ed */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_chart',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'series',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'female',name:'여성'}},{T:1,N:'w2:column',A:{dataType:'text',id:'male',name:'남성'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'series',E:[{T:4,cdata:'만 18–24세'}]},{T:1,N:'female',E:[{T:4,cdata:'0'}]},{T:1,N:'male',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'series',E:[{T:4,cdata:'만 25–34세'}]},{T:1,N:'female',E:[{T:4,cdata:'8'}]},{T:1,N:'male',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'series',E:[{T:4,cdata:'만 35–44세'}]},{T:1,N:'female',E:[{T:4,cdata:'14'}]},{T:1,N:'male',E:[{T:4,cdata:'25'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'series',E:[{T:4,cdata:'만 45–54세'}]},{T:1,N:'female',E:[{T:4,cdata:'1'}]},{T:1,N:'male',E:[{T:4,cdata:'13'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'series',E:[{T:4,cdata:'만 55세 이상'}]},{T:1,N:'female',E:[{T:4,cdata:'0'}]},{T:1,N:'male',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    //차트 설정
    scwin.setChartOptions();
};

//차트 설정
scwin.setChartOptions = function () {
    var fc = cht_ex01.fc();
    var fcOpt = {
        "caption": "성별 조회수",
        "captionFontSize": "16",
        "showPercentValues": true,
        "showValues": true,
        "valueFontColor": "#999",
        "showHoverEffect": "1",
        "showLegend": "1",
        "legendBgColor": "#ffffff",
        "legendBorderAlpha": "0",
        "legendShadow": "0",
        "labelFontSize": 12,
        "labelDistance": "0",
        "enableSmartLabels": "0",
        "useDataPlotColorForLabels": "1",
        "showPrintMenuItem": true,
        "exportEnabled": true,
        "exportAction": "download",
        "exportFormats": "PNG=Export as PNG Image|JPG=Export as JPG Image|PDF=Export as PDF File",
        "exportShowMenuItem": true,
        "toolTipColor": "#ffffff",
        "toolTipPadding": "5",
        "toolTipBorderColor": "#000",
        "toolTipBorderThickness": "0",
        "toolTipBgColor": "#000",
        "toolTipBgAlpha": "80",
        "toolTipBorderRadius": "2",
        "plottooltext": "<div style='color:#fff;text-align:center;'><div style='color:#ffff00;'>$label</div><div>$dataValue회</div></div>"
    }
    fc.setChartAttribute(fcOpt);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'ws_example_w2widget_content',id:''},E:[{T:1,N:'w2:fusionchart',A:{accessibility:'false',chartType:'MSBar2D',drawType:'javascript',id:'cht_ex01',labelNode:'series',ref:'data:dlt_chart',runflashAt:'IE6,IE7,IE8',seriesColumns:'[[\'female\',\'male\']]',seriesNode:'',seriesType:'advanced',style:'width: 100%;height: 100%;',valueNode:'count'}}]}]}]}]})