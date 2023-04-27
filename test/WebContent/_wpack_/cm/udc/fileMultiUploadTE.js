/*amd /cm/udc/fileMultiUploadTE.xml 19724 ab2ff28143c7ffee5033b429c5612e4a81cade4d37edbb450f2dd4c0a63500ab */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_file',repeatNode:'map',saveRemovedData:'true','ev:ondataload':'scwin.dlt_file_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'FILE_SEQ',name:'파일번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'DATA_SEQ',name:'데이터번호',dataType:'number',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'FILE_GRP_SEQ',name:'파일그룹코드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'FILE_STORED_PATH',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STORED_FILE_NM',name:'저장파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'number',length:''}},{T:1,N:'w2:column',A:{id:'FILE_UPLOAD_DATE',name:'파일업로드일자',dataType:'date'}},{T:1,N:'w2:column',A:{id:'IS_DELETE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'파일전송결과',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'DATA_SEQ',name:'DATA_SEQ',dataType:'number'}},{T:1,N:'w2:key',A:{id:'IS_DELETE',name:'IS_DELETE',dataType:'text',defaultValue:'N'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchUploadList',ref:'data:json,{"id":"dma_searchCond","key":"dma_search"}',target:'data:json,{"id":"dlt_file","key":"dlt_file"}',action:'/file/selectFile',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveUploadList',ref:'data:json,{"action":"all","id":"dlt_file","key":"dlt_file"}',target:'data:json,{"id":"dlt_file","key":"dlt_file"}',action:'/file/saveFile',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.searchUploadList'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
/**
 * @component
 * @company 
 * @developer choi.jh
 * @variableClone true
 * @notSupportBrowser 
 * @version 1.0
 * @htmlRender 
 * @icon 
 * @disableIcon 
 * @width 100%
 * @height 200px
 * @description 멀티 파일 업로드 UDC
 */ 

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @bindparent 
 * @description desc
 */ 

/**
 * @property
 * @name class
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @bindparent 
 * @description desc
 */ 

/**
 * @property
 * @name id
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @bindparent 
 * @description desc
 */ 

/**
 * @property
 * @name maxFileCount
 * @category 01.Basic & ETC
 * @type number
 * @option 
 * @default 10
 * @necessary N
 * @bindparent 
 * @description 최대 업로드 파일 개수
 */ 

/**
 * @property
 * @name maxFileSize
 * @category 01.Basic & ETC
 * @type number
 * @option 
 * @default 536870912
 * @necessary N
 * @bindparent 
 * @description 업로드할 개별 파일 사이즈 (websquare.xml 환경설정 파일의 maxUploadSize 값보다 커서는 안됨)
 */ 

/**
 * @property
 * @name totalFileSize
 * @category 01.Basic & ETC
 * @type number
 * @option 
 * @default 2009715200
 * @necessary N
 * @bindparent 
 * @description 업로드할 전체 파일 사이즈
 */ 

/**
 * @property
 * @name subDir
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default 
 * @necessary N
 * @bindparent 
 * @description 파일의 저장할 subDir 디렉터리 경로 설정(설정하지 않은 경우 websquare.xml 환경설정 파일의 baseDir 경로에 파일이 저장됨)
 */ 

/**
 * @property
 * @name filter
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf
 * @necessary N
 * @bindparent 
 * @description 공백("")으로 설정하면 모든 파일(*.*)로 설정됨
 */ 

scwin.onpageload = function() {
    scwin.initFileUploadList();

    scwin.setDropEventHandler();
    scwin.setFileStatus();
};

scwin.initFileUploadList = function() {
    scwin.option = {};

    scwin.DATA_SEQ = null;
    scwin.DEFAULT_DATA_SEQ = -999;

    var option = $p.getOptions({
        maxFileCount : 10, // 최대 업로드 파일 개수
        maxFileSize : 536870912, // 업로드할 개별 파일 사이즈
        totalFileSize : 2009715200, // 업로드할 전체 파일 사이즈
        subDir : "", // 파일의 저장할 subDir 디렉터리 경로 설정
        filter : "gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf", // 업로드할 파일 확장자 필터 조건
        style: ""
    });

    scwin.option.filter         = option.filter;
    scwin.option.maxFileCount   = option.maxFileCount;
    scwin.option.maxFileSize    = option.maxFileSize;
    scwin.option.totalFileSize  = option.totalFileSize;
    scwin.option.subDir         = option.subDir;

    console.table(scwin.option);

    mpd_multiFileUpload.setFilter("Filter", scwin.option.filter);
    mpd_multiFileUpload.setMaxFileCount(scwin.option.maxFileCount);
    mpd_multiFileUpload.setMaxFileSize(scwin.option.maxFileSize);
    mpd_multiFileUpload.setSubDir(scwin.option.subDir);

    mpd_multiFileUpload.removeAllFiles();
    dlt_file.removeAll();
}

/**
 * File Drop Event Handler를 세팅한다.
 */
scwin.setDropEventHandler = function() {
    var fileDragDom = grd_file.render;
    fileDragDom.addEventListener("dragover", scwin.doHandleDrop, false);
    fileDragDom.addEventListener("dragenter", scwin.doHandleDrop, false);
    fileDragDom.addEventListener("dragleave", scwin.doHandleDrop, false);
    fileDragDom.addEventListener("drop", scwin.doHandleDrop, false);
};

/**
 * 업로드할 파일 Drop를 업로드할 파일로 등록한다.
 */
scwin.doHandleDrop = function(e) {
    try {
        WebSquare.event.stopEvent(e);
        var fileData = e.dataTransfer.files;
        var uploadFileData = [];
        console.table(fileData);
        for(var idx = 0; idx < fileData.length; idx++) {
            var isExisted = false;
            for (var fileIdx in mpd_multiFileUpload.fileArray) {
                if (fileData[idx].name === mpd_multiFileUpload.fileArray[fileIdx].name) {
                    isExisted = true;
                }
            }

            if (isExisted === false) {
                uploadFileData.push(fileData[idx]);
                mpd_multiFileUpload.fileArray.push(fileData[idx]);
                mpd_multiFileUpload.fileNameArr.push(fileData[idx].name);
                mpd_multiFileUpload._inx++;
            }
        }

        scwin.selectCallback(uploadFileData);
        console.table(mpd_multiFileUpload.fileArray);
    } catch (ex) {
        console.error(ex);
    }
};

/**
 * 파일 업로드 상태 정보를 업데이트 한다.
 */
scwin.setFileStatus = function() {
    var fileInfo = scwin.getCurrentFileInfo();
    tbx_fileCount.setValue(fileInfo.fileCount + " / " + scwin.option.maxFileCount);
    tbx_fileSize.setValue(com.num.formatByte(fileInfo.fileSize) + " / " + com.num.formatByte(scwin.option.totalFileSize));
};

/**
 * 파일 사이즈를 적절한 포맷으로 변환해서 반환한다.
 */
scwin.displayFileSize = function(value) {
    return com.num.formatByte(value);
};

/**
 * 업로드 상태 표시 Display Formatter
 */
scwin.setDisplayStatus = function(value) {
    if (value === "S") {
        return "Completed";
    } else if (value === "E") {
        return "Error";
    } else if ((com.num.parseInt(value) > 0) && (com.num.parseInt(value) < 100)) { 
        return "<div style='width:"+value+"%; height:100%;' class='div_progress'>"+ value +"%</div>";
    } else {
        return "<div style='width:0%; height:100%;' class='div_progress'></div>";
    }
};

/**
 * 기존에 등록된 파일을 클릭하면 파일다운로드가 동작함
 */
scwin.customFormatterFileNm = function(data, formattedData, rowIndex, colIndex) {
    var fileSeq = dlt_file.getCellData(rowIndex, "FILE_SEQ");
    var fileGrpSeq = dlt_file.getCellData(rowIndex, "FILE_GRP_SEQ");
    
    if (com.util.isEmpty(fileSeq) === false) {
        return "<a href='" + gcm.CONTEXT_PATH + gcm.FILE_DOWNLOAD_URL +  fileSeq + "' target='_blank'>" + formattedData + "</a>";
    } else {
        return formattedData;
    }
};

scwin.fileDownload = function(fileSeq) {
    if(com.util.isEmpty(fileSeq)) return;
    var url = gcm.CONTEXT_PATH + gcm.FILE_DOWNLOAD_URL +  fileSeq;
    $p.download(url,null,"GET");
}

/**
 * 현재 업로드된 파일 정보를 반환한다.
 */
scwin.getCurrentFileInfo = function() {
    var fileInfo = {
        fileCount : 0,
        fileSize : 0
    };
    var fileList = dlt_file.getAllJSON();

    for (var idx in fileList) {
        var rowStatus = fileList[idx].rowStatus;
        if ((rowStatus === "C") || (rowStatus === "U") || (rowStatus === "R")) {
            fileInfo.fileCount++;
            fileInfo.fileSize += com.num.parseInt(fileList[idx].FILE_SIZE);
        }
    };

    return fileInfo;
};

/**
 * 업로드할 파일 선택이 완료되면 호출되는 콜백 함수
 */
scwin.selectCallback = async function(data) {

    var isValid = true;
    var fileInfo = scwin.getCurrentFileInfo();

    var newFileInfo = {
        fileCount : 0,
        fileSize : 0
    };

    for (var idx in data) {
        if (scwin.option.maxFileSize < data[idx].size) {
            var alertMsg = com.data.getMessage("MSG_CM_00007", data[idx].name, com.num.formatByte(scwin.option.maxFileSize));
            await com.win.alert(alertMsg);
            mpd_multiFileUpload.removeFile(data[idx].name);
            delete data[idx];
        } else {
            newFileInfo.fileCount++;
            newFileInfo.fileSize += data[idx].size;
        }
    }

    if (scwin.option.maxFileCount < (fileInfo.fileCount + newFileInfo.fileCount)) {
        var alertMsg = com.data.getMessage("MSG_CM_00008", scwin.option.maxFileCount);
        await com.win.alert(alertMsg);
        isValid = false;
    }

    if ((scwin.option.totalFileSize < (fileInfo.fileSize + newFileInfo.fileSize)) && (isValid === true)) {
        var alertMsg = com.data.getMessage("MSG_CM_00009", com.num.formatByte(scwin.option.totalFileSize));
        await com.win.alert(alertMsg);
        isValid = false;
    }

    if (isValid === false) {
        for (var idx in data) {
            mpd_multiFileUpload.removeFile(data[idx].name);
        }
        return;
    }      

    if (data.length > 0) {
        var newFileCount = data.length;
        var fileInfoList = [];

        for (var idx in data) {
            var fileInfo = {
                "FILE_SEQ" : null,
                "DATA_SEQ" : (com.util.isEmpty(scwin.DATA_SEQ) ? scwin.DEFAULT_DATA_SEQ : scwin.DATA_SEQ),
                "FILE_GRP_SEQ" : 5,
                "FILE_STORED_PATH" : scwin.option.subDir,
                "ORIGIN_FILE_NM" : data[idx].name,
                "FILE_SIZE" : data[idx].size
            };

            fileInfoList.push(fileInfo);
        }

        var lastIdx = dlt_file.getRowCount();
        var totalFileCount = lastIdx + fileInfoList.length;
        
        dlt_file.insertJSON(lastIdx, fileInfoList);
//        grd_file.setFocusedCell(totalFileCount - 1, "FILE_SEQ", false);

    }      

    try {
        if (mpd_multiFileUpload.getFileInfos().length > 0) {
            mpd_multiFileUpload.startUpload();
        }
    } catch (ex) {
        console.error(ex);
    }

};

scwin.btn_uploadListSearch_onclick = function(e) {
    var dataSeq = dma_searchCond.get("DATA_SEQ");
    scwin.searchUploadList(dataSeq);
};

/**
 * @method
 * @name searchUploadList
 * @description desc
 * @param {number} dataSeq 조회할 DATA_SEQ 
 * @returns 
 * @hidden N
 * @exception 
 * @example ${example}
 */ 
scwin.searchUploadList = function(dataSeq) {

    if(com.util.isEmpty(dataSeq)) dataSeq = scwin.DEFAULT_DATA_SEQ;
    dataSeq             = Number(dataSeq);
    scwin.DATA_SEQ      = dataSeq;
    dma_searchCond.set("DATA_SEQ", dataSeq);
    console.log(dma_searchCond.getJSON())
    com.sbm.execute(sbm_searchUploadList).then((rtn) => {
        console.log(rtn);
    });
};

scwin.dlt_file_ondataload = function() {
    var dataSeq = (com.util.isEmpty(dlt_file.getCellData(0, "DATA_SEQ")) ? scwin.DEFAULT_DATA_SEQ 
                                                                         : dlt_file.getCellData(0, "DATA_SEQ"));
    grd_file.setColumnVisible("status", false);
    scwin.setFileStatus();

    console.log("scwin.DATA_SEQ : dataSeq ===> " + scwin.DATA_SEQ + ":" + dataSeq);
    if(scwin.DATA_SEQ != dataSeq) {
        scwin.DATA_SEQ = dataSeq;
        $p.emit("onFileUploadDone", (scwin.DATA_SEQ == scwin.DEFAULT_DATA_SEQ ? "" : scwin.DATA_SEQ));
    }
};

scwin.mpd_multiFileUpload_ondone = async function(data) {

    var newFileCount = data.length;

    dlt_file.setBroadcast(false);
    for (var fileIdx = 0; fileIdx < newFileCount; fileIdx++) {
        
        var deniedCode = data[fileIdx].deniedCode;
        var uploadFileNm = com.util.isEmpty(deniedCode) ? data[fileIdx].localFile : data[fileIdx].deniedFile;
        var rowIdx = dlt_file.getMatchedIndex("ORIGIN_FILE_NM", uploadFileNm);

        rowIdx.sort((a,b) => {return b-a;});
        for (var idx = 0; idx < rowIdx.length; idx++) {
            var fileInfo = dlt_file.getRowJSON(rowIdx[idx]);
            if(fileInfo.rowStatus !== "C") continue;

            if(!com.util.isEmpty(deniedCode)) {
                await com.win.alert("\"" +uploadFileNm + "\"은 업로드 할수없는 파일입니다.",null,{modal:true});
                dlt_file.deleteRow(rowIdx);
            } else {
               dlt_file.setCellData(rowIdx[idx], "STORED_FILE_NM", data[fileIdx].file);
            }
        }
        
    }
    dlt_file.setBroadcast(true, true);

    com.sbm.execute(sbm_saveUploadList);
};

/**
 * 파일 업로드 진행 상황을 업데이트한다.
 */
scwin.mpd_multiFileUpload_onprogress = function(data) {

    grd_file.setColumnVisible("status", true);
    var rowIdx = dlt_file.getMatchedIndex("ORIGIN_FILE_NM", data.fileName);

    for (var idx = 0; idx < rowIdx.length; idx++) {
        var fileInfo = dlt_file.getRowJSON(rowIdx[idx]);
        if ((fileInfo.rowStatus === "C") && (com.util.isEmpty(fileInfo.fileId) === true)) {
            if (data.percentData < 100) {
                dlt_file.setCellData(rowIdx[idx], "status", data.percentData);
            } else {
                dlt_file.setCellData(rowIdx[idx], "status", "S");
            }
        }
    }
};

scwin.btn_fileDelete_onclick = function(e) {
    var lens = dlt_file.getMatchedIndex("chk", "Y", true);
    if(lens.length <= 0) return;
    com.sbm.execute(sbm_saveUploadList);
};
/**
 * @event
 * @name onFileUploadDone
 * @description 업로드완료 후 발생
 * @param {number} dataSeq 저장된 DATA_SEQ 
 * @example 
 */ 

scwin.grd_file_oncelldblclick = function(row,col,colId) {

    if(colId == "FILE_UPLOAD_DATE") {
        var fileSeq = dlt_file.getCellData(row, "FILE_SEQ");
        scwin.fileDownload(fileSeq);
    }

};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'fl',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'btn_cm row_add',for:'mpd_multiFileUpload',id:'btn_fileSelecting',label:'추가',style:''}},{T:1,N:'w2:multiupload',A:{class:'',displaySizeUnit:'MB','ev:ondone':'scwin.mpd_multiFileUpload_ondone','ev:onprogress':'scwin.mpd_multiFileUpload_onprogress',id:'mpd_multiFileUpload',maxsize:'1000000000',mode:'html5_transparent',selectCallback:'scwin.selectCallback',style:'',uploadButton:'',wmode:'false'},E:[{T:1,N:'param',A:{name:'업로드',value:''}}]},{T:1,N:'w2:textbox',A:{class:'btn_cm row_del','ev:onclick':'scwin.btn_fileDelete_onclick',id:'btn_fileDelete',label:'삭제',style:''}}]},{T:1,N:'xf:group',A:{class:'fr mt10',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ett',id:'',label:'파일 수 :',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fileCount',label:'0개/ 10개',style:''}},{T:1,N:'w2:textbox',A:{class:'ett',id:'',label:'총 용량 :',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fileSize',label:'0MB / 200MB',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'200',checkReadOnlyOnPasteEnable:'',class:'wq_gvw multi_file',dataList:'data:dlt_file',defaultCellHeight:'26',focusMode:'row',id:'grd_file',rowStatusHeaderValue:'상태',rowStatusVisible:'false',rowStatusWidth:'50',scrollByColumn:'false',scrollByColumnAdaptive:'false',sortable:'true',style:'height:150px;',visibleRowNum:'10',wheelRows:'0','ev:oncelldblclick':'scwin.grd_file_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'checkbox',style:'',value:'',width:'40'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',value:'원본파일명',width:'300'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column6',inputType:'text',removeBorderStyle:'false',value:'파일크기',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',style:'',value:'파일전송결과',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',removeBorderStyle:'false',value:'파일업로드일자',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{defaultValue:'N',displayMode:'label',falseValue:'N',id:'chk',inputType:'checkbox',style:'',trueValue:'Y',value:'',valueType:'other',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',customFormatter:'scwin.customFormatterFileNm',displayMode:'label',id:'ORIGIN_FILE_NM',inputType:'text',readOnly:'true',removeBorderStyle:'false',textAlign:'left',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayFormatter:'scwin.displayFileSize',displayMode:'label',id:'FILE_SIZE',inputType:'text',readOnly:'true',removeBorderStyle:'false',textAlign:'right',width:'70'}},{T:1,N:'w2:column',A:{displayFormatter:'scwin.setDisplayStatus',displayMode:'label',hidden:'true',id:'status',inputType:'text',readOnly:'true',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'FILE_UPLOAD_DATE',inputType:'text',readOnly:'true',removeBorderStyle:'false',width:'70'}}]}]}]}]},{T:1,N:'w2:iframe',A:{src:'',style:';display:none;',id:'iframe_fileDownload'}}]}]}]}]})