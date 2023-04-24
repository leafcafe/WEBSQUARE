/*amd /edu/training0_desc.xml 10127 e567c6a01ef3d25cf036b956b581a4fd43424e084f5a7e44d2b1b35178515200 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() { 
};
		

scwin.anc_icon1_onclick = function(e) {  
	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5개발자교육커리큘럼.pdf#page=2",
		"title": "WebSquare5개발자교육커리큘럼",
		"label": "교육 상세 시간표" 
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

scwin.anc_icon2_onclick = function(e) {

	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page=1",
		"title": "WebSquare5개발자교육이론_SP5" ,
		"label": "웹스퀘어5 기본이론" 
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

scwin.anc_icon3_onclick = function(e) {

	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5심화교육이론.pdf#page=1",
		"title": "WebSquare5심화교육이론" ,
		"label": "웹스퀘어5 심화이론" 
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

scwin.openPopup = function(rowJSON, useIFrameMode, openType) {
    //dataObject{ dataType: ["xml","string","json","array"], data: "전달 데이터" , name :"변수명"}
    var _width = "850px";
    var _height = "850px";
    
    if(useIFrameMode == false){
        _width = "850px";
        _height = "850px";
    }
    
    var dataObj = {
        type : "json",
        data : rowJSON,
        name : "rowObj"
    };

    var options = {
        id : "popup1",
        //popupUrl : "popup.html",
        type : openType,

        width : _width,
        height : _height,

        top : 130,
        left : 250,

        popupName : rowJSON.title,
        modal : true,
        useIFrame : useIFrameMode,

        resizable : true,
        status : true,
        menubar : false,
        scrollbars : false,
        title : false,

        dataObject : dataObj
    };

    //모바일에서의 크기,위치 조절을 위해 공통 함수 사용하였습니다. 기본 옵션은 최초 선언된 options를 참고하시기 바랍니다.
    options.left = "auto";
    options = $c.frame.getPopupPosition(options); 

    $p.openPopup("/edu/training0_pdf.xml", options);
};
scwin.txt_desc1_onclick = function(e) {
	
	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page=5",
		"title": "WebSquare5개발자교육이론" ,
		"label": "WebSquare5 소개"  
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

scwin.txt_desc2_onclick = function(e) {

	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page=38",
		"title": "WebSquare5개발자교육이론" ,
		"label": "WebSquare5 Studio 설명"  
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

scwin.txt_desc3_onclick = function(e) {
	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page=42",
		"title": "WebSquare5개발자교육이론" ,
		"label": "컴포넌트 기본 사용방법"  
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");

};

scwin.txt_desc4_onclick = function(e) {

	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page=46",
		"title": "WebSquare5개발자교육이론" ,
		"label": "CSS 적용 방법"   
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");

};

scwin.txt_desc5_onclick = function(e) {
 
	var _url = "";
	var _path= "/edu/training1_dataMap.xml"; 
    _url =  $c.frame.getBasePageURL(true)+"#w2xPath="+_path; 
	window.open(_url, "_blank");
};

scwin.txt_desc6_onclick = function(e) {

	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page=54",
		"title": "WebSquare5개발자교육이론" ,
		"label": "목록성 컴포넌트 사용 방법"   
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

scwin.txt_desc7_onclick = function(e) {

	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page=100",
		"title": "WebSquare5개발자교육이론" ,
		"label": "DataCollection 과 Submission 처리 방법"   
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

scwin.txt_desc8_onclick = function(e) {

	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page=107",
		"title": "WebSquare5개발자교육이론" ,
		"label": "디버깅 방법"   
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

scwin.txt_desc9_onclick = function(e) { 
	
	var _url = "";
	var _path= "/edu/training1_gridView.xml"; 
    _url =  $c.frame.getBasePageURL(true)+"#w2xPath="+_path; 
	window.open(_url, "_blank");
	 
};

scwin.txt_desc11_onclick = function(e) {
	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page=94",
		"title": "WebSquare5개발자교육이론" ,
		"label": "DataCollection 과 gridView 연동2"   
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");

};

scwin.txt_desc10_onclick = function(e) {

	 var rowJSON = {
		"pdfNm": "/edu/docs/WebSquare5개발자교육이론_SP5.pdf#page=93",
		"title": "WebSquare5개발자교육이론" ,
		"label": "DataCollection 과 gridView 연동2"   
	};

	 scwin.openPopup(rowJSON, false, "wframePopup");
};

}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.w2checkbox_label:before{position:absolute;left:0;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;background:#fff}.w2radio_label:before{position:absolute;left:1px;top:5px;content:none;display:inline-block;width:20px;height:20px;border:1px solid #cfd5d8;box-sizing:border-box;border-radius:50%;background:#fff}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'padding: 10px;',id:'',class:''}},{T:1,N:'xf:group',A:{class:'intro',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'int_top',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'bg_wrap',id:''},E:[{T:1,N:'w2:textbox',A:{class:'txt_big',escape:'false',id:'',label:'WebSquare5 개발자 교육',style:''}},{T:1,N:'w2:textbox',A:{class:'txt_small server',escape:'false',id:'',label:'HTML, CSS, JavaScript 등 기본적인 웹 지식을 가지고 있으며 <br/>다만 WebSquare5 제품을 처음 접하는 개발자 대상의 커리큘럼',style:''}},{T:1,N:'xf:group',A:{class:'ban_box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'anc_banner ico3',id:'anc_icon1',style:'',tagname:'a','ev:onclick':'scwin.anc_icon1_onclick'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'개발자 교육 <br/> &nbsp; 커리큘럼',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'바로열기',style:'',tagname:'span',userData1:''}}]},{T:1,N:'xf:group',A:{class:'anc_banner ico2',id:'anc_icon2',style:'',tagname:'a','ev:onclick':'scwin.anc_icon2_onclick'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'개발자 교육<br/> &nbsp;이론문서',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'바로열기',style:'',tagname:'span',userData1:''}}]},{T:1,N:'xf:group',A:{class:'anc_banner ico2',id:'anc_icon3',style:'',tagname:'a','ev:onclick':'scwin.anc_icon3_onclick'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'개발자 교육<br/>심화문서',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'바로열기',style:'',tagname:'span',userData1:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'int_mid',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ins_box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt_ins_big tac',id:'',label:'커리큘럼',style:''}}]},{T:1,N:'xf:group',A:{class:'prj_list',id:'',style:'',tagname:'ol'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc1',label:'교육자료 소개, WebSquare5 소개',style:'','ev:onclick':'scwin.txt_desc1_onclick'}},{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc2',label:'WebSquare5 Studio 설명',style:'','ev:onclick':'scwin.txt_desc2_onclick'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc3',label:'컴포넌트 기본 사용방법 ( 속성, 이벤트, API )',style:'','ev:onclick':'scwin.txt_desc3_onclick'}},{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc4',label:'CSS 적용 방법',style:'','ev:onclick':'scwin.txt_desc4_onclick'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc5',label:'[실습] 목록성 컴포넌트 사용 방법 ',style:'','ev:onclick':'scwin.txt_desc5_onclick'}},{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc6',label:'(하드코딩, script 처리, DataCollection 처리)',style:'','ev:onclick':'scwin.txt_desc6_onclick'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc7',label:'[실습] DataCollection 과 Submission 처리 방법',style:'','ev:onclick':'scwin.txt_desc7_onclick'}},{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc8',label:'디버깅 방법',style:'','ev:onclick':'scwin.txt_desc8_onclick'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc9',label:'[시연] DataCollection 과 gridView 연동1',style:'','ev:onclick':'scwin.txt_desc9_onclick'}},{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc10',label:'(gridView편집,속성,이벤트,API)',style:'','ev:onclick':'scwin.txt_desc10_onclick'}}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc11',label:'[시연] DataCollection 과 gridView 연동2 (Master & Detail 처리)',style:'','ev:onclick':'scwin.txt_desc11_onclick'}},{T:1,N:'w2:textbox',A:{class:'txt_prj_big',id:'txt_desc12',label:'Q&A',style:''}}]}]}]}]}]}]}]})