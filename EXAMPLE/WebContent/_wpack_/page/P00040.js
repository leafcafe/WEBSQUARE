/*amd /page/P00040.xml 21266 b38f5237219b0ab9dba515d847e12ee28eebbf8ab8c780b04627d3e76711c830 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220522'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    var i;
    var genArr = ["package_WebSquare5.png", "package_Proworks.png", "package_W-gear.png"];
    var genArrLen = genArr.length, genObj, imgNm;

    for (i = 0; i < genArrLen; i++) {
        ui_genProduct.insertChild();
        imgNm = genArr[i];
        ui_genProduct.getChild(i, "ui_prdImg").setSrc("/img/example/" + imgNm);
        ui_genProduct.getChild(i, "ui_prdNm").setValue(imgNm.replace("package_", "").replace(".png", ""));
    }

};

/**
 * 화면의 버튼 클릭 시 - 공통
 */
scwin.ui_btnSend_onclick = function () {
    alert("기능이 구현되지 않았습니다.");
};

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.example_P00040 .acd01Box{border-left:1px solid silver;border-right:1px solid silver;border-bottom:1px solid silver}.example_P00040 .w2accordion{border-style:none}.example_P00040 .w2accordion,.example_P00040 .w2panels_content_open{overflow:inherit}.example_P00040 .w2accordion.acd01 .w2panels_title{background:0 0;background-color:#497ba4;padding:6px;color:#fff;border-style:none;border-bottom:1px solid #ddd}.example_P00040 .w2accordion.acd02 .w2panels_title{background-color:#eee;color:#497ba4;padding:4px 6px;border-style:none;border-bottom:1px solid #dbdbdb}.example_P00040 .w2accordion.acd01 .w2panel_title_text{font-size:14px}.example_P00040 .w2accordion.acd02 .w2panel_title_text{font-size:12px}.example_P00040 .w2accordion .w2panels_title{overflow:hidden}.example_P00040 .w2accordion .w2panels_title span{float:left}.example_P00040 .w2accordion .w2panels_title div{float:right}.example_P00040 .w2accordion .w2panels_title_image{background:url(/img/example/accordion_close01.png) no-repeat center center;background-size:16px}.example_P00040 .w2accordion .w2panels_title_image_open{background:url(/img/example/accordion_open01.png) no-repeat center center;background-size:16px}.example_P00040 .w2accordion .w2panels{border-style:none}.example_P00040 .w2accordion .w2panel_title_text{line-height:25px;padding-top:0;vertical-align:none}.example_P00040 .w2panels_content_open>.w2group,.genProduct>.w2group{border-top:1px solid #eee}.example_P00040 .w2panels_content_open>.w2group:first-child,.genProduct>.w2group:first-child{border-top-style:none}.example_P00040 .txtOpt{padding:6px 20px;background-color:#64c0be;color:#fff}.example_P00040 .txtAmount{font-weight:700;font-size:24px;margin-right:10px}.example_P00040 .txtAmount::after,.example_P00040 .txtAmount:after{content:" 원";font-size:12px;color:#999}.example_P00040 .txtTot{color:tomato;font-weight:700;font-size:24px}.example_P00040 .txtTot::after,.example_P00040 .txtTot:after{content:"원";font-size:12px}.example_P00040 .btnTotAch{display:block;text-align:center;background-color:tomato}.example_P00040 .btnTotAch a{display:block;line-height:50px;color:#fff;font-weight:700;font-size:24px}.btnTotAch a::after,.example_P00040 .btnTotAch a:after{content:"원 결제하기";font-size:14px;font-weight:400}.example_P00040 .w2checkbox_label:before{position:absolute;left:0;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;background:#fff}.example_P00040 .w2radio_label:before{position:absolute;left:1px;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;border-radius:50%;background:#fff}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'Accordion, Generator 컴포넌트를 활용하여 구성한 화면 입니다.<br/>UI에 적용한 CSS는 이 파일에 작성되어있습니다.',style:''}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'이 예제는 시연용 예제로 예제 가이드 문서가 포함되어 있지 않습니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',style:'max-width: 450px;',class:'example_P00040'},E:[{T:1,N:'xf:group',A:{class:'acd01Box',id:'',style:''},E:[{T:1,N:'w2:accordion',A:{class:'acd01',collapseAll:'',collapsible:'true',id:'ui_accordion',selectedPanel:'panels4',style:'overflow: inherit;'},E:[{T:1,N:'w2:panels',A:{class:'',id:'panels1',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle1',label:'주문정보',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent1',style:''},E:[{T:1,N:'w2:accordion',A:{class:'acd02',collapseAll:'',collapsible:'true',id:'',selectedPanel:'',style:'overflow: inherit;'},E:[{T:1,N:'w2:panels',A:{class:'',id:'panels5',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle5',label:'주문자정보',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent5',style:'padding: 0px 10px;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;overflow:hidden;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'주문자명',style:'width:25%;float:left;line-height: 3em;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'float: right;width:75%;'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'이유은',style:'width: 100%;height: 3em;box-sizing:border-box;'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;overflow:hidden;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'연락처',style:'width:25%;float:left;line-height: 3em;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'float: right;width:75%;'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'',optionOrder:'false',ref:'',style:'width: 32%;height: 3em;box-sizing:border-box;margin-right: 2%;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'010'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'011'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'011'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'016'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'016'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'017'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'017'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'018'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'018'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'019'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'019'}]}]}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'8240',style:'width: 32%;height: 3em;box-sizing:border-box;margin-right: 2%;'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'8282',style:'width: 32%;height: 3em;box-sizing:border-box;'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;overflow:hidden;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'이메일',style:'width:25%;float:left;line-height: 3em;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'float: right;width:75%;'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',style:'width: 100%;height: 3em;box-sizing:border-box;'}}]}]}]}]},{T:1,N:'w2:panels',A:{class:'',id:'panels6',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle6',label:'품절시 환불방법',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent6',style:'padding: 0px 10px;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'',ref:'',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주문 시 결제수단으로 환불받기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예치금으로 자동 환불받기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;'},E:[{T:1,N:'xf:select',A:{appearance:'full',cols:'',id:'',ref:'',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'환불방법 저장하기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;',tagname:''},E:[{T:1,N:'xf:group',A:{id:'',style:'padding-left: 20px;',tagname:'ul'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'예치금은 현금성포인트로, 상품 구매 시 언제든 사용이 가능하며 원하시는 경우 현금으로전환이 가능한 편리한 결제수단입니다.',style:'margin-bottom: 6px;',tagname:'li'}},{T:1,N:'w2:textbox',A:{id:'',label:'품절로 인한 한불금액의 합이 5마원 미만일 경우, 예치금으로 자동환불되며, 5만원 이상이거나 비회원 주문일 경우 원결제수단으로 환불처리 됩니다.(품절 발생 익일 오후 5시부터 환불처리)',style:'margin-bottom: 6px;',tagname:'li'}},{T:1,N:'w2:textbox',A:{id:'',label:'예치금환불이 아닌 주문하신 결제수단으로 환불받기를 원하실 경우, \'주문 시 결제수단으로 환불받기\'를 선택해 주세요.',style:'',tagname:'li'}}]}]}]}]},{T:1,N:'w2:panels',A:{class:'',id:'panels7',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle7',label:'주문확인서 받는 방법',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent7',style:'padding: 0px 10px;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'',ref:'',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'\'모바일\' 주문확인서만 받기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'\'모바일+종이\' 주문확인서 모두 받기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;'},E:[{T:1,N:'w2:textbox',A:{id:'',escape:'false',label:'<span class=\'txtGreen\'>종이절약</span>은 <span class=\'txtGreen\'>환경보호와 자원절약</span> 실천의 한 방법입니다.',style:'margin-bottom: 10px;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.ui_btnSend_onclick',id:'',style:'width: 60px;text-align: center;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'안내'}]}]}]}]}]}]}]}]},{T:1,N:'w2:panels',A:{class:'',id:'panels2',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle2',label:'배송정보',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent2',style:''},E:[{T:1,N:'w2:accordion',A:{class:'acd02',collapseAll:'',collapsible:'true',id:'',selectedPanel:'',style:''},E:[{T:1,N:'w2:panels',A:{class:'',id:'panels8',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle8',label:'배송지정보',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent8',style:'padding: 0px 10px;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;overflow:hidden;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'배송지',style:'width:25%;float:left;line-height: 3em;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'float: right;width:75%;'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'',optionOrder:'false',ref:'',style:'width: 100%;height: 3em;box-sizing:border-box;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'[기본배송지]우리집'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'서울시 구로구 대륭포스트타워'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;overflow:hidden;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'받는분',style:'width:25%;float:left;line-height: 3em;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'float: right;width:75%;'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'이유은',style:'width: 100%;height: 3em;box-sizing:border-box;'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;overflow:hidden;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'연락처',style:'width:25%;float:left;line-height: 3em;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'float: right;width:75%;'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'',optionOrder:'false',ref:'',style:'width: 32%;height: 3em;box-sizing:border-box;margin-right: 2%;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'010'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'010'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'011'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'011'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'016'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'016'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'017'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'017'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'018'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'018'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'019'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'019'}]}]}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'8240',style:'width: 32%;height: 3em;box-sizing:border-box;margin-right: 2%;'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'8282',style:'width: 32%;height: 3em;box-sizing:border-box;'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;overflow:hidden;'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'',ref:'',rows:'1',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'안심번호 사용한함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'안심번호 사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.ui_btnSend_onclick',id:'',style:'width: 60px;float : right;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'안내'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;overflow:hidden;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'주소',style:'width:25%;float:left;line-height: 3em;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'float: right;width:75%;'},E:[{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'08378',style:'width: 64%;height: 3em;box-sizing:border-box;margin-right: 2%;margin-bottom: 10px;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.ui_btnSend_onclick',id:'',style:'width: 32%;height: 3em;margin-bottom: 10px;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'우편번호'}]}]},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'서울특별시 구로구 디지털로 306',style:'width: 100%;height: 3em;box-sizing:border-box;margin-bottom: 10px;'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'',initValue:'대륭포스트타워 2차',style:'width: 100%;height: 3em;box-sizing:border-box;margin-bottom: 10px;'}}]},{T:1,N:'w2:textbox',A:{id:'',label:'기본 배송지는 MY PAGE > 배송지관리 메뉴에서 변경 가능합니다.',style:'clear: both;'}}]}]}]},{T:1,N:'w2:panels',A:{class:'',id:'panels9',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle9',label:'택배배송 메시지',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent9',style:'padding: 0px 10px;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;overflow:hidden;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'배송 메시지',style:'width:25%;float:left;line-height: 3em;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'float: right;width:75%;'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',emptyValue:'',id:'',optionOrder:'false',ref:'',style:'width: 100%;height: 3em;box-sizing:border-box;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'빠른 배송 바랍니다'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'도착 전 연락 주세요'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;overflow:hidden;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'선물 메시지',style:'width:25%;float:left;line-height: 3em;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'float: right;width:75%;'},E:[{T:1,N:'xf:textarea',A:{id:'',placeholder:'받으실 분에게 전달할 메세지를 입력해주세요.',style:'width: 100%;height: 100px;box-sizing:border-box;'}}]}]}]}]}]}]}]},{T:1,N:'w2:panels',A:{class:'',id:'panels3',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle3',label:'상품정보',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent3',style:'padding: 0px 10px;'},E:[{T:1,N:'w2:generator',A:{class:'genProduct',id:'ui_genProduct',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;overflow:hidden;'},E:[{T:1,N:'xf:image',A:{id:'ui_prdImg',src:'',style:'width:20%;float:left;'}},{T:1,N:'xf:group',A:{class:'',id:'',style:'float: right;width:75%;'},E:[{T:1,N:'xf:group',A:{id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'ui_prdNm',label:'',style:'margin-bottom: 6px;color:#999;font-size:14px;font-weight: bold;'}},{T:1,N:'xf:group',A:{id:'',style:'margin-bottom: 6px;'},E:[{T:1,N:'w2:span',A:{class:'txtAmount',dataType:'number',displayFormat:'#,###',id:'',label:'48600000',style:''}},{T:1,N:'w2:span',A:{id:'',label:'1개',style:'padding: 0px 10px;border-left: 1px solid #ddd;color:#999;'}}]},{T:1,N:'xf:group',A:{id:'',style:'overflow: hidden;'},E:[{T:1,N:'w2:textbox',A:{class:'txtOpt',id:'',label:'옵션',style:'float : left;margin-right: 10px;'}},{T:1,N:'w2:textbox',A:{id:'',label:'없음',style:'padding:6px 0px;float: left;'}}]}]}]}]}]}]}]},{T:1,N:'w2:panels',A:{class:'',id:'panels4',style:''},E:[{T:1,N:'w2:panelTitle',A:{class:'',id:'panelTitle4',label:'최종결제금액',style:''}},{T:1,N:'w2:panelContent',A:{class:'',id:'panelContent4',style:'padding: 10px;'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'overflow: hidden;padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'총 주문 금액',style:'font-size:14px;float: left;margin-right: 10px;'}},{T:1,N:'w2:textbox',A:{dataType:'number',displayFormat:'#,##0원',id:'',label:'145800000',style:'font-size:14px;float: left;'}},{T:1,N:'w2:textbox',A:{id:'',label:'(배송비 2,500원 포함)',style:'font-size:14px;float: right;'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'overflow: hidden;padding: 10px;position: relative;text-align: center;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'총 할인금액<br/>0원',style:'float : left;width: 50%;box-sizing:border-box;text-align: center;border:2px dashed #00bba9;border-right-width: 1px;padding: 6px 0px;',escape:'false'}},{T:1,N:'w2:textbox',A:{id:'',label:'포인트 사용금액<br/>0원',style:'float : left;width: 50%;box-sizing:border-box;text-align: center;border:2px dashed #00bba9;padding: 6px 0px;border-left-width: 1px;',escape:'false'}},{T:1,N:'xf:image',A:{id:'',src:'/img/example/bg_minus.png',style:'width: 2em;height: 2em;position: absolute;left: calc(50% - 1em);    top: calc(50% - 1em);}'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'overflow: hidden;padding: 10px;'},E:[{T:1,N:'w2:textbox',A:{id:'',label:'최종 결제금액',style:'float : left;padding-top:10px;font-size: 16px;'}},{T:1,N:'w2:textbox',A:{class:'txtTot',dataType:'number',displayFormat:'#,##0',id:'',label:'145800000',style:'float : right;'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'padding: 10px 0px;'},E:[{T:1,N:'w2:anchor',A:{class:'btnTotAch',clickEventElement:'outerDiv','ev:onclick':'scwin.ui_btnSend_onclick',id:'ui_btnSend',outerDiv:'true',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'145,800,000'}]}]}]}]}]}]}]}]})