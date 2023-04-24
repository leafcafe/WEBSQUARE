/*amd /page/P00090.xml 8245 76ab644399f163d05ff68e4013e9aa93ca005e407dc03d30417cc20309582e3f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220907'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_books',repeatNode:'map',style:'',valueAttribute:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'book_name',name:'도서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'price',name:'정가'}},{T:1,N:'w2:column',A:{id:'published_date',name:'출간일',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {

    //DataList 할당
    dlt_books.setJSON([
        { "book_name": "1. 정글만리", "price": "16500", "published_date": "20130701" },
        { "book_name": "1. 내가 틀릴 수도 있습니다", "price": "16000", "published_date": "20220418" },
        { "book_name": "1. 사람일까 상황일까", "price": "28000", "published_date": "20190826" },
        { "book_name": "2. 정글만리", "price": "16500", "published_date": "20130701" },
        { "book_name": "2. 내가 틀릴 수도 있습니다", "price": "16000", "published_date": "20220418" },
        { "book_name": "2. 사람일까 상황일까", "price": "28000", "published_date": "20190826" },
        { "book_name": "3. 정글만리", "price": "16500", "published_date": "20130701" },
        { "book_name": "3. 내가 틀릴 수도 있습니다", "price": "16000", "published_date": "20220418" },
        { "book_name": "3. 사람일까 상황일까", "price": "28000", "published_date": "20190826" },
        { "book_name": "4. 정글만리", "price": "16500", "published_date": "20130701" },
        { "book_name": "4. 내가 틀릴 수도 있습니다", "price": "16000", "published_date": "20220418" },
        { "book_name": "4. 사람일까 상황일까", "price": "28000", "published_date": "20190826" },
        { "book_name": "5. 정글만리", "price": "16500", "published_date": "20130701" },
        { "book_name": "5. 내가 틀릴 수도 있습니다", "price": "16000", "published_date": "20220418" },
        { "book_name": "5. 사람일까 상황일까", "price": "28000", "published_date": "20190826" },
        { "book_name": "6. 정글만리", "price": "16500", "published_date": "20130701" },
        { "book_name": "6. 내가 틀릴 수도 있습니다", "price": "16000", "published_date": "20220418" },
        { "book_name": "6. 사람일까 상황일까", "price": "28000", "published_date": "20190826" },
        { "book_name": "7. 정글만리", "price": "16500", "published_date": "20130701" },
        { "book_name": "7. 내가 틀릴 수도 있습니다", "price": "16000", "published_date": "20220418" },
        { "book_name": "7. 사람일까 상황일까", "price": "28000", "published_date": "20190826" },
        { "book_name": "8. 정글만리", "price": "16500", "published_date": "20130701" },
        { "book_name": "8. 내가 틀릴 수도 있습니다", "price": "16000", "published_date": "20220418" },
        { "book_name": "8. 사람일까 상황일까", "price": "28000", "published_date": "20190826" },
        { "book_name": "9. 정글만리", "price": "16500", "published_date": "20130701" },
        { "book_name": "9. 내가 틀릴 수도 있습니다", "price": "16000", "published_date": "20220418" },
        { "book_name": "9. 사람일까 상황일까", "price": "28000", "published_date": "20190826" },
        { "book_name": "10. 정글만리", "price": "16500", "published_date": "20130701" },
        { "book_name": "10. 내가 틀릴 수도 있습니다", "price": "16000", "published_date": "20220418" },
        { "book_name": "10. 사람일까 상황일까", "price": "28000", "published_date": "20190826" }
    ]);
};


}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ws_example_grp_desc',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{escape:'false',id:'',label:'GridView를 브라우저에 표현(Rendering)하는 방식의 설정 예제입니다.',style:''}}]},{T:1,N:'xf:group',A:{class:'example_div_tb_style_wrap',id:''},E:[{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'[기본 설정] WebSquare 방식(화면에 노출되는 영역만 table로 출력)',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'wq_gvw',dataList:'data:dlt_books',defaultCellHeight:'24',id:'',style:'height:120px;',visibleRowNum:'4',visibleRowNumFix:'true',rowNumVisible:'true',rowNumWidth:'26'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'178'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출간일',width:'83'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'178'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'63'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',width:'83'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'example_div_tr_style',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'example_div_th_style',escape:'false',id:'',label:'Native 방식 (데이터를 table로 모두 출력)',style:''}},{T:1,N:'xf:group',A:{class:'example_div_td_style',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'240',class:'wq_gvw',dataList:'data:dlt_books',defaultCellHeight:'24',id:'',rowNumVisible:'true',style:'height:120px;',drawType:'native',rowNumWidth:'26'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'도서명',width:'178'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'정가',width:'63'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'출간일',width:'83'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'book_name',inputType:'text',textAlign:'left',width:'178'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'#,###',displayMode:'label',id:'price',inputType:'text',textAlign:'right',width:'63'}},{T:1,N:'w2:column',A:{dataType:'date',displayFormat:'yyyy-MM-dd',displayMode:'label',id:'published_date',inputType:'text',width:'83'}}]}]}]}]}]}]}]}]}]}]})