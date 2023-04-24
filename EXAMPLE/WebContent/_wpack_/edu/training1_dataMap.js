/*amd /edu/training1_dataMap.xml 7969 96f2b107823a45fd17a9fbbef3e4b65fd109d9a4cd1dbeec7522b7ce17ef1f58 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() { 
 

};
 
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'',label:'[실습] 목록성 컴포넌트 적용 & DataCollection 과 Submission 처리',style:'margin-bottom: 10px;',tagname:'h2'}},{T:1,N:'w2:textbox',A:{class:'ws_example_txt_desc_info',escape:'false',id:'',label:'해당화면은 코딩이 없는 실습용 화면 ',style:''}},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'디버깅하기',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'1. 브라우저에서 [Ctrl+마우스 오른쪽 버튼을 클릭]하면 컨텍스트 메뉴 팝업 제공 <br/>2. 주요 디버깅 메뉴<br/>2-1.로그보기 : Script 오류 확인 및 Script에서 출력 로그 확인<br/>2-2.dataCollection보기 : 데이터 객체의 현재 값 확인 <br/>2-3.소스보기 WebSquare화면 소스 &nbsp;확인 <br/>2-4. 현재 화면 디버그 실행 : &nbsp;Submission을 이용한 통신의 Input, Output, Header정보 확인 <br/>3. 브라우저 실행 후 [F12] &nbsp;개발자 도구 실행 기존 디버깅 수행 가능 <br/><br/>',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'목록성 컴포넌트 적용 하기',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'1. Hard Coding : 직급항목 적용 <br/> &nbsp;1-1. 직급 selectbox 컴포넌트를 더블클릭<br/> &nbsp;1-2. 제공되는 팝업에 itemSet 항목을 선택<br/> &nbsp;1-3. 그리드의 행추가<br/> &nbsp;1-4. Label : 이사, 부장, 차장, 과장 기재<br/> &nbsp; &nbsp; &nbsp; &nbsp;Value : 01, 02, 03, 04, 05 기재<br/> &nbsp;1-5. 전체 : All Option &nbsp;체크<br/> &nbsp; &nbsp; &nbsp; &nbsp; 선택 : Choose Option 체크<br/>2. script 처리 : 성별항목 적용 <br/> &nbsp;2-1. Script Tab에 항목을 API로 추가하기<br/> &nbsp; &nbsp;ui_gender.addItem( "M", "남성" );<br/> &nbsp; &nbsp;ui_gender.addItem( "F", "여성" );<br/>3.DataCollection 처리 : 역할항목 적용<br/>3-1. Outline View에서 dataList Type으로 DataCollection을 만든다<br/>3-2. keyID, name을 작성 <br/> &nbsp; &nbsp; &nbsp;(CODE_CD : 코드값, CODE_NM : 코드명)<br/>3-3.컴포넌트와 연결<br/>',style:''}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'details'},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'DataCollection 과 Submission 처리 방법',style:'',tagname:'summary'}},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'참조 문서(edu/training1_info.txt)를 활용하여 DataCollection 을 만든다 <br/>1. Request용 & Response 용 &nbsp;DataCollection 생성<br/> &nbsp; &nbsp;1-1. Outline View에서 dc_reqUserInfo ID로 DataMap type으로 생성<br/> &nbsp; &nbsp;1-1. Outline View에서 dc_userInfo ID로 DataMap type으로 생성<br/>2. Submission 을 만든다.<br/> &nbsp; &nbsp;2-1. Submission 의 ID를 생성 <br/> &nbsp; &nbsp;2-2. 생성한 Request용 & Response 용 &nbsp;DataCollection을 각각 연결 <br/> &nbsp; &nbsp;2-3. URL Action : /edu/data/userInfoList.json<br/>3. 생성한 Submission을 조회 버튼에 onclick 이벤트 추가<br/> &nbsp; &nbsp;3-1. &nbsp;$p.executeSubmission("sub_select");//생성한 Submission ID 기재<br/>4. 통신완료 후 dc_userInfo 의 데이터를 컴포넌트에 표현<br/> &nbsp; 4-1. Outline View 의 Head Tab에서 각 KeyID를 드래그 하여 해당 컴포넌트에 드랍해서 표현<br/> &nbsp; &nbsp;',style:''}}]}]},{T:1,N:'xf:group',A:{class:'ofh',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'com_example_btn_blue',id:'btn_select',style:'',tooltip:'데이터를 조회합니다.',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]},{T:1,N:'xf:group',A:{class:'fl mb_def_box nobottom',id:'',style:''}}]},{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'700',class:'w2tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:' 이름 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'',initValue:'',ref:'',style:'width: 144px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:' 직급 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'',optionOrder:'false',ref:'',selectedData:'true',style:'width: 148px;height: 21px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:' 가입일 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'false',id:'',ref:'',renderDiv:'true',renderType:'component',rightAlign:'false',style:'width: 150px;height: 24px;',weekStartsOn:'0'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:' 성별 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',id:'ui_gender',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'min-width: 150px;min-height: 12px;'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:' 이메일 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'',ref:'',style:'width: 100%;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:' 역할 '},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',cols:'',id:'',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'min-width: 150px;min-height: 12px;'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:''},E:[{T:1,N:'xf:label',A:{ref:''}},{T:1,N:'xf:value',A:{ref:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''}}]}]}]}]}]})