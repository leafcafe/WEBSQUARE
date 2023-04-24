/*amd /page/P00035.xml 5267 5cfe463b2f9a61ef8d311f3d4f74436a0cb12cf62b842b339e340c1b5648c3f0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_page_history',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'updated_date',name:'업데이트 날짜'}},{T:1,N:'w2:column',A:{dataType:'text',id:'version',name:'버전'}},{T:1,N:'w2:column',A:{dataType:'text',id:'description',name:'설명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'author',name:'작성인'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'updated_date',E:[{T:4,cdata:'20220522'}]},{T:1,N:'version',E:[{T:4,cdata:'01'}]},{T:1,N:'description',E:[{T:4,cdata:'최초작성'}]},{T:1,N:'author',E:[{T:4,cdata:'InswaveSystems'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function () {
    //5회 자식 컴포넌트 추가.
    scwin.generator_addItem(5);
};

/**
 * [addItem] 버튼 click 시 발생.
 * 자식 컴포넌트를 추가한다.
*/
scwin.btn_addItem_onclick = function (e) {
    //자식 컴포넌트 추가
    scwin.generator_addItem(1);
};

/**
 * Generator 컴포넌트에 자식 추가.
 * argNumLoop 만큼 자식 컴포넌트를 추가한다.
 * 
 * @date 2022. 04. 27
 * @param {number} 반복수
 * @returns  
*/
scwin.generator_addItem = function (argNumLoop) {
    var numLastIndex;
    var i;
    var cmpTmp;

    argNumLoop = argNumLoop || 1;

    numLastIndex = gen_box.getLength();

    for (i = 0; i < argNumLoop; i++) {
        gen_box.insertChild();

        cmpTmp = gen_box.getChild(numLastIndex, "tbx_gen_label");
        cmpTmp.addClass("ws5_example_bg" + (numLastIndex % 2));

        cmpTmp = gen_box.getChild(numLastIndex, "ibx_gen_input");
        cmpTmp.setValue("index : " + numLastIndex);
        cmpTmp.setUserData("eduKey", "edu" + numLastIndex);

        numLastIndex++;
    }
};

/**
 * [getValue] 버튼 click 시 발생.
 * inputbox의 value를 alert한다.
 * 
*/
scwin.btn_gen_trigger_onclick = function (e) {
    var numIndex;
    var cmpInput;

    numIndex = this.getGeneratedIndex();

    cmpInput = gen_box.getChild(numIndex, "ibx_gen_input");

    alert(cmpInput.getValue());
};

/**
 * [removeAll] 버튼 click 시 발생.
 * 반복된 자식 컴포넌트 전체를 삭제.
 */
scwin.btn_removeAll_onclick = function (e) {
    //반복된 자식 컴포넌트 전체를 삭제한다.
    gen_box.removeAll();
};

/**
 * [remove] 버튼 click 시 발생
*/
scwin.btn_gen_remove_onclick = function (e) {
    var cmpGenerator;
    var numIndex;

    //Generator 컴포넌트를 반환한다. Generator의 ID를 알고 있는 경우 직접 접근이 가능.
    cmpGenerator = this.getGenerator();

    //현재 index를 반환한다.
    numIndex = this.getGeneratedIndex();

    //index에 해당하는 반복부(자식 컴포넌트 집합)를 삭제한다.
    cmpGenerator.removeChild(numIndex);
};

/**
 * [getIndex] 버튼 click 시 발생.
 * 현재 index를 반환한다.
 */
scwin.btn_gen_getIndex_onclick = function (e) {
    var numIndex;

    //현재 index를 반환한다.
    numIndex = this.getGeneratedIndex();

    alert(numIndex);
};



}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'margin-bottom: 10px;',id:''},E:[{T:1,N:'xf:trigger',A:{type:'button',style:'width:120px;height: 30px;margin-right: 5px;',id:'btn_addItem','ev:onclick':'scwin.btn_addItem_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'addItem'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_removeAll',style:'width:120px;height: 30px;',type:'button','ev:onclick':'scwin.btn_removeAll_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'removeAll'}]}]}]},{T:1,N:'w2:generator',A:{style:'',id:'gen_box'},E:[{T:1,N:'xf:group',A:{style:'width: 510px; border: 1px solid #eee; margin-bottom: 5px;',id:'grp_gen_group'},E:[{T:1,N:'w2:textbox',A:{id:'tbx_gen_label',label:'Lable',style:'padding: 10px 20px; margin-right: 5px; display: inline-block; font-size: 13px;',tagname:'label'}},{T:1,N:'xf:input',A:{adjustMaxLength:'false',id:'ibx_gen_input',style:'margin-right: 5px;'}},{T:1,N:'xf:trigger',A:{type:'button',style:'width: 80px; height: 28px; margin-right:5px;',id:'btn_gen_trigger','ev:onclick':'scwin.btn_gen_trigger_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getValue'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_gen_remove',style:'width: 80px; height: 28px; margin-right:5px;',type:'button','ev:onclick':'scwin.btn_gen_remove_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'remove'}]}]},{T:1,N:'xf:trigger',A:{id:'btn_gen_getIndex',style:'width: 80px; height: 28px;',type:'button','ev:onclick':'scwin.btn_gen_getIndex_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'getIndex'}]}]}]}]}]}]}]}]})