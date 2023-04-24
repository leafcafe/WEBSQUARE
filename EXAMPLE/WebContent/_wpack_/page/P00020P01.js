/*amd /page/P00020P01.xml 3274 7019f4c4e40a2969bd82efb637ddc7b9a7433d25b7251b54451ba60e263c5d6f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220428'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.gVar = {
    "param": null
};

scwin.onpageload = function () {
    var tmpJSON;
    var frameID = $p.getFrameId();
    // if(frameID == "mf"){
    //     // window Popup으로 띄운 경우 
    //     tmpJSON = $w.getParameter( "rowObj" ); 
    // }else{
    //     // layer Popup으로 띄운 경우
    //     tmpJSON = $p.getParameter( "rowObj" ); 
    // }

    tmpJSON = $p.getParameter("rowObj");

    txtTitle.setValue(tmpJSON.title);
    spnPrice.setValue(tmpJSON.price);

    scwin.gVar.param = tmpJSON;

    Promise.resolve().then(function () {
        img_ex1.setSrc(scwin.gVar.param.img);
    });
};

scwin.btn_close_onclick = function (e) {
    var frameID = $p.getFrameId();
    if (frameID == "mf") {
        // window Popup으로 띄운 경우 
        parent.$p.closePopup();
    } else {
        // layer Popup으로 띄운 경우
        $p.parent().scwin.closePopup();
    }
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'txtTitle',label:'',ref:'',style:'margin-bottom: 6px;min-height: 12px;text-align:center;',tagname:'h2'}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 6px;text-align: center;'},E:[{T:1,N:'xf:image',A:{id:'img_ex1',ref:'',src:'',style:'width: 90px;height: 120px;margin-bottom: 6px;'}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 6px;'},E:[{T:1,N:'w2:span',A:{label:'PRICE : ',style:'font: bold 11px tahoma;margin-right: 4px;'}},{T:1,N:'w2:span',A:{dataType:'number',displayFormat:'$#,###.#0',id:'spnPrice',label:'',ref:'',style:'font: bold 11px tahoma;'}}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'text-align: center;left: 0px;right: 0px;bottom: 6px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_close_onclick',id:'btn_close',style:'width: 60px;height: 25px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'close'}]}]}]}]}]}]}]})