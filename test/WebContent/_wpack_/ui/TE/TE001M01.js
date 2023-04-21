/*amd /ui/TE/TE001M01.xml 17258 276798f73460bccb35e95a7a67470d6d4a552817de28511042737c60ffd416d1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_file',repeatNode:'map',saveRemovedData:'true','ev:ondataload':'scwin.dlt_file_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'FILE_SEQ',name:'파일번호',dataType:'number'}},{T:1,N:'w2:column',A:{id:'DATA_SEQ',name:'데이터번호',dataType:'number',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'FILE_GRP_SEQ',name:'파일그룹코드',dataType:'number'}},{T:1,N:'w2:column',A:{id:'FILE_STORED_PATH',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STORED_FILE_NM',name:'저장파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'number',length:''}},{T:1,N:'w2:column',A:{id:'FILE_UPLOAD_DATE',name:'파일업로드일자',dataType:'date'}},{T:1,N:'w2:column',A:{id:'IS_DELETE',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'파일전송결과',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'DATA_SEQ',name:'DATA_SEQ',dataType:'number'}},{T:1,N:'w2:key',A:{id:'IS_DELETE',name:'IS_DELETE',dataType:'text',defaultValue:'N'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchUploadList',ref:'data:json,{"id":"dma_searchCond","key":"dma_search"}',target:'data:json,{"id":"dlt_file","key":"dlt_file"}',action:'/file/selectFile',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchUploadList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveUploadList',ref:'data:json,{"action":"all","id":"dlt_file","key":"dlt_file"}',target:'data:json,{"id":"dlt_file","key":"dlt_file"}',action:'/file/saveFile',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function() {
    scwin.initFileUploadList();

    scwin.setDropEventHandler();
    scwin.setFileStatus();
};

scwin.initFileUploadList = function() {
    scwin.option = {};

    scwin.DATA_SEQ = null;
    scwin.DEFAULT_DATA_SEQ = -999;

    scwin.option.filter         = "";
    scwin.option.maxFileCount   = 10;
    scwin.option.maxFileSize    = 536870912;
    scwin.option.totalFileSize  = 2009715200;
    scwin.option.subDir         = "";

    mpd_multiFileUpload.setFilter("Filter", scwin.option.filter);
    mpd_multiFileUpload.setMaxFileCount(scwin.option.maxFileCount);
    mpd_multiFileUpload.setMaxFileSize(scwin.option.maxFileSize);

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
scwin.selectCallback = function(data) {

    var isValid = true;
    var fileInfo = scwin.getCurrentFileInfo();

    var newFileInfo = {
        fileCount : 0,
        fileSize : 0
    };

    for (var idx in data) {
        if (scwin.option.maxFileSize < data[idx].size) {
            var alertMsg = com.data.getMessage("MSG_CM_00007", data[idx].name, com.num.formatByte(scwin.option.maxFileSize));
            com.win.alert(alertMsg);
            mpd_multiFileUpload.removeFile(data[idx].name);
            delete data[idx];
        } else {
            newFileInfo.fileCount++;
            newFileInfo.fileSize += data[idx].size;
        }
    }

    if (scwin.option.maxFileCount < (fileInfo.fileCount + newFileInfo.fileCount)) {
        var alertMsg = com.data.getMessage("MSG_CM_00008", scwin.option.maxFileCount);
        com.win.alert(alertMsg);
        isValid = false;
    }

    if ((scwin.option.totalFileSize < (fileInfo.fileSize + newFileInfo.fileSize)) && (isValid === true)) {
        var alertMsg = com.data.getMessage("MSG_CM_00009", com.num.formatByte(scwin.option.totalFileSize));
        com.win.alert(alertMsg);
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

scwin.searchUploadList = function(dataSeq) {
    if(com.util.isEmpty(dataSeq)) dataSeq = scwin.DEFAULT_DATA_SEQ;
    dma_searchCond.set("DATA_SEQ", dataSeq);
    com.sbm.execute(sbm_searchUploadList);
};

scwin.dlt_file_ondataload = function() {

    var dataSeq = (com.util.isEmpty(dlt_file.getCellData(0, "DATA_SEQ")) ? scwin.DEFAULT_DATA_SEQ 
                                                                         : dlt_file.getCellData(0, "DATA_SEQ"));
    grd_file.setColumnVisible("status", false);
    scwin.setFileStatus();
/*
    if(scwin.DATA_SEQ !== dataSeq) {
        scwin.DATA_SEQ = dataSeq;
        $p.emit("onFileUploadDone", scwin.DATA_SEQ);
    }
*/    
};

scwin.mpd_multiFileUpload_ondone = function(data) {

    var newFileCount = data.length;

    dlt_file.setBroadcast(false);
    var deniedFileNms = [];
    for (var fileIdx = 0; fileIdx < newFileCount; fileIdx++) {
        
        var deniedCode = data[fileIdx].deniedCode;
        var uploadFileNm = com.util.isEmpty(deniedCode) ? data[fileIdx].localFile : data[fileIdx].deniedFile;
        var rowIdx = dlt_file.getMatchedIndex("ORIGIN_FILE_NM", uploadFileNm);

        rowIdx.sort((a,b) => {return b-a;});
        for (var idx = 0; idx < rowIdx.length; idx++) {
            var fileInfo = dlt_file.getRowJSON(rowIdx[idx]);
            if(fileInfo.rowStatus !== "C") continue;

            if(!com.util.isEmpty(deniedCode)) {
                deniedFileNms.push(uploadFileNm);
                dlt_file.deleteRow(rowIdx);
            } else {
               dlt_file.setCellData(rowIdx[idx], "STORED_FILE_NM", data[fileIdx].file);
            }
        }
        
    }
    dlt_file.setBroadcast(true, true);

    if(deniedFileNms.length > 0) {
        com.win.alert("\"" + deniedFileNms.toString() + "\"은 업로드 할수없는 파일입니다.",null,{modal:true});
    }

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

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'DATA_SEQ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ibx_dataSeqS',placeholder:'',style:'width:148px;',dataType:'number',ref:'data:dma_searchCond.DATA_SEQ'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_uploadListSearch',style:'',type:'button','ev:onclick':'scwin.btn_uploadListSearch_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'fl',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'btn_fileSelecting',label:'추가',style:'',class:'btn_cm row_add',for:'mpd_multiFileUpload'}},{T:1,N:'w2:multiupload',A:{mode:'html5_transparent',wmode:'false',style:'',id:'mpd_multiFileUpload',uploadButton:'',class:'',displaySizeUnit:'MB',maxsize:'1000000000',selectCallback:'scwin.selectCallback','ev:ondone':'scwin.mpd_multiFileUpload_ondone','ev:onprogress':'scwin.mpd_multiFileUpload_onprogress'},E:[{T:1,N:'param',A:{name:'업로드',value:''}}]},{T:1,N:'w2:textbox',A:{class:'btn_cm row_del',id:'btn_fileDelete',label:'삭제',style:'','ev:onclick':'scwin.btn_fileDelete_onclick'}}]},{T:1,N:'xf:group',A:{class:'fr mt10',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ett',id:'',label:'파일 수 :',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fileCount',label:'0개/ 10개',style:''}},{T:1,N:'w2:textbox',A:{class:'ett',id:'',label:'총 용량 :',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fileSize',label:'0MB / 200MB',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw multi_file',dataList:'data:dlt_file',defaultCellHeight:'26',focusMode:'row',id:'grd_file',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:150px;',visibleRowNum:'10',rowStatusHeaderValue:'상태',rowStatusWidth:'50',rowStatusVisible:'true',sortable:'true',autoFitMinWidth:'800',wheelRows:'0'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'40',inputType:'checkbox',style:'',id:'column10',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',value:'원본파일명',width:'300'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column6',inputType:'text',removeBorderStyle:'false',value:'파일크기',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column12',value:'파일전송결과',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column5',inputType:'text',removeBorderStyle:'false',value:'파일업로드일자',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',valueType:'other',defaultValue:'N',falseValue:'N',trueValue:'Y'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'ORIGIN_FILE_NM',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'left',customFormatter:'scwin.customFormatterFileNm',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'FILE_SIZE',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'right',displayFormatter:'scwin.displayFileSize',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'status',value:'',displayMode:'label',displayFormatter:'scwin.setDisplayStatus',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'FILE_UPLOAD_DATE',inputType:'text',removeBorderStyle:'false',width:'70',readOnly:'true'}}]}]}]}]}]}]}]}]})