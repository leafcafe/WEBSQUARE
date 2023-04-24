/*amd /page/P00198.xml 10626 96cdd495980a39b040e115c3468448dc49510b61e7f37d0df432f71871846536 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20230127'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_gridView',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'number',id:'EMP_CD',name:'사번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'EMP_NM',name:'성명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'GENDER_CD',name:'성별'}},{T:1,N:'w2:column',A:{dataType:'text',id:'JOIN_DATE',name:'입사일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'POSITION_CD',name:'직위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ROLE_CD',name:'역할'}},{T:1,N:'w2:column',A:{dataType:'text',id:'group',name:'소속'}},{T:1,N:'w2:column',A:{dataType:'text',id:'EMAIL',name:'이메일'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'EMP_CD',E:[{T:4,cdata:'10001334'}]},{T:1,N:'EMP_NM',E:[{T:4,cdata:'전성은'}]},{T:1,N:'GENDER_CD',E:[{T:4,cdata:'여'}]},{T:1,N:'JOIN_DATE',E:[{T:4,cdata:'20021201'}]},{T:1,N:'POSITION_CD',E:[{T:4,cdata:'사원'}]},{T:1,N:'ROLE_CD',E:[{T:4,cdata:'퍼블리싱'}]},{T:1,N:'group',E:[{T:4,cdata:'본사'}]},{T:1,N:'EMAIL',E:[{T:4,cdata:'piho888@inswave02.com'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'EMP_CD',E:[{T:4,cdata:'10001337'}]},{T:1,N:'EMP_NM',E:[{T:4,cdata:'마정연'}]},{T:1,N:'GENDER_CD',E:[{T:4,cdata:'남'}]},{T:1,N:'JOIN_DATE',E:[{T:4,cdata:'20120430'}]},{T:1,N:'POSITION_CD',E:[{T:4,cdata:'사원'}]},{T:1,N:'ROLE_CD',E:[{T:4,cdata:'개발'}]},{T:1,N:'group',E:[{T:4,cdata:'본사'}]},{T:1,N:'EMAIL',E:[{T:4,cdata:'zibe925@inswave02.com'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'EMP_CD',E:[{T:4,cdata:'10001336'}]},{T:1,N:'EMP_NM',E:[{T:4,cdata:'후혜선'}]},{T:1,N:'GENDER_CD',E:[{T:4,cdata:'남'}]},{T:1,N:'JOIN_DATE',E:[{T:4,cdata:'20060423'}]},{T:1,N:'POSITION_CD',E:[{T:4,cdata:'차장'}]},{T:1,N:'ROLE_CD',E:[{T:4,cdata:'기획'}]},{T:1,N:'group',E:[{T:4,cdata:'본사'}]},{T:1,N:'EMAIL',E:[{T:4,cdata:'mewa036@inswave02.com'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'EMP_CD',E:[{T:4,cdata:'10001335'}]},{T:1,N:'EMP_NM',E:[{T:4,cdata:'동세희'}]},{T:1,N:'GENDER_CD',E:[{T:4,cdata:'여'}]},{T:1,N:'JOIN_DATE',E:[{T:4,cdata:'20050401'}]},{T:1,N:'POSITION_CD',E:[{T:4,cdata:'부장'}]},{T:1,N:'ROLE_CD',E:[{T:4,cdata:'디자인'}]},{T:1,N:'group',E:[{T:4,cdata:'본사'}]},{T:1,N:'EMAIL',E:[{T:4,cdata:'cane427@inswave02.com'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {
    //로그 출력
    var strLog = "GridView Style 초기화 정보 저장 완료";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);
    // localStorage에 저장된 gridView의 초기 style 정보 가져오기
	var grd_style = $p.local.getItem("init_grid");

    // localStorage에 저장된 정보가 없는 경우 저장
    if (grd_style == null){
        grd_style = grd_main.getCurrentGridStyle();
        $p.local.setItem("init_grid", grd_style);
    }
};

/**
 * 영역 [GridView 개인화 샘플]의
 * 입력 [btn_save]의 onclick 이벤트 함수
 */
scwin.btn_save_onclick = function(e) {
    //로그 출력
    var strLog = "GridView Style 정보 저장 완료";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);

    // 현재 gridView 스타일 정보 가져오기
	var grd_style = grd_main.getCurrentGridStyle();

    // localStorage에 gridView의 style 저장
	$p.local.setItem("grd_style", grd_style);
};

/**
 * 영역 [GridView 개인화 샘플]의
 * 입력 [btn_load]의 onclick 이벤트 함수
 */
scwin.btn_load_onclick = function(e) {
    //로그 출력
    var strLog = "GridView Style 정보 불러오기기 완료";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);

    // localStorage에 저장한 gridView 스타일 정보 가져오기
    var grd_style = $p.local.getItem("grd_style");

    // 현재 gridView의 style 정보 적용
    grd_main.setGridStyle(grd_style);
};

/**
 * 영역 [GridView 개인화 샘플]의
 * 입력 [btn_clear]의 onclick 이벤트 함수
 */
scwin.btn_clear_onclick = function(e) {
    //로그 출력
    var strLog = "GridView Style 초기화 정보 불러오기 완료";
    $c.frame.printExampleLog(strLog, txa_log, false);
    console.log(strLog);

    // 초기 gridView의 style 정보를 저장한 정보 가져오기
    var grd_style = $p.local.getItem("init_grid");

    // 가져온 초기 gridView의 style 적용
    grd_main.setGridStyle(grd_style);
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView를 개인화 하는 예제입니다.<br/>GridView의 Style 정보를 읽고, localStorage를 활용해 저장하여 구현합니다.<br/>컬럼의 순서, 행렬 틀 고정, 컬럼 숨김, 컬럼 크기의 저장, 불러오기가 가능합니다.',style:'margin-bottom: 10px;'}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap mb_def',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'GridView 개인화 샘플',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ws5_example_txt_normal',escape:'false',id:'',label:'GridView 개인화는 컬럼의 넓이, 컬럼 숨기기, 컬럼 이동에 관한 정보를 저장, 불러오기가 가능합니다.<br/>localStorage는 브라우저의 메모리를 사용하기 때문에 브라우저에 종속됩니다.',style:''}},{T:1,N:'xf:group',A:{class:'ofh',id:'',style:'max-width: 700px;'},E:[{T:1,N:'xf:group',A:{class:'fr mb_def_box nobottom',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',id:'btn_save',style:'margin-right:6px;',type:'button',tooltip:'GridView 개인화 정보 저장','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',id:'btn_load',style:'',tooltip:'GridView 개인화 정보 불러오기',type:'button','ev:onclick':'scwin.btn_load_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'불러오기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_exam_exec btn_txt_of',id:'btn_clear',style:'',tooltip:'GridView 개인화 정보 삭제 및 초기화',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]}]}]},{T:1,N:'xf:group',A:{class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',autoFitMinWidth:'660',class:'wq_gvw',dataList:'data:dlt_gridView',defaultCellHeight:'24',id:'grd_main',style:'height: 100px;',visibleRowNum:'5',contextMenu:'true',columnMove:'true',useFilterList:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column16',inputType:'text',value:'사번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'성명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',value:'성별',width:'60',useFilter:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'입사일',width:'76'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',value:'직위',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'역할',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',value:'소속',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'이메일',width:'175'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'EMP_CD',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'EMP_NM',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'GENDER_CD',inputType:'text',value:'',width:'60'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'JOIN_DATE',inputType:'text',value:'',width:'76'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'POSITION_CD',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ROLE_CD',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'group',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'EMAIL',inputType:'text',textAlign:'left',width:'175'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'example_div_th_style',id:''},E:[{T:1,N:'w2:span',A:{class:'mr_def txt_blue',id:'',label:'로그 확인',style:''}},{T:1,N:'xf:trigger',A:{class:'com_example_btn_log_clear','ev:onclick':'scwin.btn_clearLog_onclick',id:'btn_clearLog',style:'',title:'로그 삭제',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'검색 취소'}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'xf:textarea',A:{class:'com_example_txa_log',id:'txa_log',spellcheck:'false',style:'width: 100%;height: 140px;'}}]}]}]}]}]}]}]}]})