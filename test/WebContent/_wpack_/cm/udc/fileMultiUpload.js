/*amd /cm/udc/fileMultiUpload.xml 25018 5894b22f4d2ff8c069bccdecc71f034e89213fc6db086c5b81b4ed5c5da2da8b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',A:{palette:'support'},E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:publicInfo',A:{method:'scwin.setDataSeq,scwin.undoFileUpload,scwin.setFileUpload,scwin.getUpdatedFile,scwin.startFileUpload,scwin.setFileSelectingButtonDisabled,scwin.isModified',component:''}},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list','ev:onremoverow':'scwin.dlt_file_onremoverow',id:'dlt_file',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'FILE_SEQ',name:'파일순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'DATA_SEQ',name:'데이터순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'FILE_GRP_SEQ',name:'파일그룹순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'FILE_STORED_PATH',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'STORED_FILE_NM',name:'저장파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'파일전송상태',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'FILE_GRP_SEQ',name:'파일그룹순번'}}]},{T:1,N:'w2:data'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/file/saveFile',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveFile_submitdone','ev:submiterror':'',id:'sbm_saveFile',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,{"action":"modified","id":"dlt_file"}',replace:'',target:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/file/selectFile',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_selectFile_submitdone','ev:submiterror':'',id:'sbm_selectFile',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,dma_fileInfo',replace:'',target:''}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @component
 * @company 
 * @developer ucanon
 * @variableClone true
 * @notSupportBrowser 
 * @version 1.0
 * @htmlRender 
 * @icon 
 * @disableIcon 
 * @width 100%
 * @height 191px
 * @description 멀티 파일 업로드 UDC
 */

/**
 * @property
 * @name style
 * @category 01.Basic & ETC
 * @type string
 * @option 
 * @default width:100%; height:191px
 * @necessary N
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
 * @description 공백("")으로 설정하면 모든 파일(*.*)로 설정됨
 */ 

/**
 * @property
 * @name fileGrpSeq
 * @category 01.Basic & ETC
 * @type number
 * @option 
 * @default 
 * @necessary Y
 * @description 파일 그룹 관리에서 등록한 파일 그룹 순번
 */ 

/**
 * @event
 * @name onFileUploadDone
 * @description 파일 업로드 완료 시 발생하는 이벤트 함수
 * @param {boolean} isSuccess 파일 전송 성공 여부 (1개라도 업로드에 실패한 파일이 있으면 false를 반환함) 
 * @example 
 */

/**
 * 페이지 시작 시 Loading 이벤트
 */
scwin.onpageload = function() {
    var option = $p.getOptions({
        maxFileCount : 10, // 최대 업로드 파일 개수
        maxFileSize : 536870912, // 업로드할 개별 파일 사이즈
        totalFileSize : 2009715200, // 업로드할 전체 파일 사이즈
        subDir : "", // 파일의 저장할 subDir 디렉터리 경로 설정
        filter : "gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf", // 업로드할 파일 확장자 필터 조건
        fileGrpSeq : 0 // 파일 그룹 관리에서 등록한 파일 그룹 순번
    });

    scwin.setFileUpload(option);
    scwin.setFileStatus();
    scwin.setDropEventHandler();
    com.util.setGridViewDelCheckBox(grd_file);
};

/**
 * 파일 업로드 정책 및 기본 세팅이 완료되면 호출되는 콜백 함수
 */
scwin.callbackFileUploadSetting = function() {
    var filter = "";
    if (com.util.isEmpty(scwin.option.filter) === false) {
        var extArr = scwin.option.filter.split(",");

        for (var idx in extArr) {
            filter += "*." + extArr[idx].trim() + ";";
        }
    } else {
        filter = "*.*";
    }

    mpd_multiFileUpload.setFilter("Filter", filter);

    if (com.num.parseInt(scwin.option.fileGrpSeq) > 0) {
        dma_fileInfo.set("FILE_GRP_SEQ", scwin.option.fileGrpSeq);
        mpd_multiFileUpload.removeAllFiles();
    } else {
        mpd_multiFileUpload.removeAllFiles();
        dlt_file.removeAll();
        scwin.setFileStatus();
    }
};

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
        if (scwin.maxFileSize < data[idx].size) {
            var alertMsg = com.data.getMessage("MSG_CM_00007", data[idx].name, com.num.formatByte(scwin.maxFileSize));
            com.win.alert(alertMsg);
            mpd_multiFileUpload.removeFile(data[idx].name);
            delete data[idx];
        } else {
            newFileInfo.fileCount++;
            newFileInfo.fileSize += data[idx].size;
        }
    }

    if (scwin.maxFileCount < (fileInfo.fileCount + newFileInfo.fileCount)) {
        var alertMsg = com.data.getMessage("MSG_CM_00008", scwin.option.maxFileCount);
        com.win.alert(alertMsg);
        isValid = false;
    }

    if ((scwin.totalFileSize < (fileInfo.fileSize + newFileInfo.fileSize)) && (isValid === true)) {
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
                "FILE_SEQ" : scwin.fileId,
                "ORIGIN_FILE_NM" : data[idx].name,
                "FILE_SIZE" : data[idx].size
            };

            fileInfoList.push(fileInfo);
        }

        var lastIdx = dlt_file.getRowCount();
        var totalFileCount = lastIdx + fileInfoList.length;
        
        dlt_file.insertJSON(lastIdx, fileInfoList);

        for (var idx = lastIdx; idx < totalFileCount; idx++) {
            grd_file.setCellClass(idx, "status", "progress");
        }
        
        grd_file.setFocusedCell(totalFileCount - 1, "FILE_SEQ", false);
    }

    scwin.setFileStatus();
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
 * 전체 파일 정보를 지운다.
 */
scwin.clearFiles = function() {
    dlt_file.removeAll();
    mpd_multiFileUpload.setMaxFileCount(scwin.option.maxFileCount);
};

/**
 * 파일 업로드 진행 상황을 업데이트한다.
 */
scwin.mpd_multiFileUpload_onprogress = function(data) {
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

/**
 * 파일 업로드가 완료되면 호출되는 콜백 함수
 */
scwin.mpd_multiFileUpload_ondone = function(data) {
    var newFileCount = data.length;

    for (var fileIdx = 0; fileIdx < newFileCount; fileIdx++) {
        var rowIdx = dlt_file.getMatchedIndex("ORIGIN_FILE_NM", data[fileIdx].localFile);

        dlt_file.setBroadcast(false);
        for (var idx = 0; idx < rowIdx.length; idx++) {
            var fileInfo = dlt_file.getRowJSON(rowIdx[idx]);
            if ((fileInfo.rowStatus === "C") && (fileInfo.status === gcm.MESSAGE_CODE.STATUS_SUCCESS)) {
                dlt_file.setCellData(rowIdx[idx], "DATA_SEQ", scwin.option.dataSeq);
                dlt_file.setCellData(rowIdx[idx], "FILE_GRP_SEQ", scwin.option.fileGrpSeq);
                dlt_file.setCellData(rowIdx[idx], "FILE_STORED_PATH", scwin.option.subDir);
                dlt_file.setCellData(rowIdx[idx], "STORED_FILE_NM", data[fileIdx].file);
                dlt_file.setCellData(rowIdx[idx], "FILE_SIZE", data[fileIdx].size);
                grd_file.refreshCell(rowIdx[idx], "ORIGIN_FILE_NM");
            }
        }
        dlt_file.setBroadcast(true, true);
    }

    scwin.saveFileInfo();
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
 * 업로드하려는 파일을 다시 삭제할 때 발생하는 이벤트
 */
scwin.dlt_file_onremoverow = function(info) {
    for (var idx in info.removedDataObj) {
        var fileName = info.removedDataObj[idx][6];
        mpd_multiFileUpload.removeFile(fileName);
    }

    scwin.setFileStatus();
};

/**
 * 기존에 등록된 파일을 Double Click 클릭하면 파일다운로드가 동작함
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
 * 파일 사이즈를 적절한 포맷으로 변환해서 반환한다.
 */
scwin.displayFileSize = function(value) {
    return com.num.formatByte(value);
};

/**
 * 파일 데이터 저장 후 콜백 함수
 */
scwin.sbm_saveFile_submitdone = function(e) {

    if (e.responseJSON.rsMsg.statusCode === gcm.MESSAGE_CODE.STATUS_SUCCESS) {
        var fileList = e.responseJSON.dlt_file;
        var rowCount = dlt_file.getRowCount();
        
        for (var rowIdx = 0; rowIdx < rowCount; rowIdx++) {
            if (dlt_file.getRowStatus(rowIdx) === "C") {
                for (var fileIdx in fileList) {
                    if (dlt_file.getCellData(rowIdx, "STORED_FILE_NM") === fileList[fileIdx].STORED_FILE_NM) {
                        dlt_file.setCellData(rowIdx, "FILE_SEQ", fileList[fileIdx].FILE_SEQ);
                        dlt_file.modifyRowStatus(rowIdx, "R");
                        grd_file.refreshCell(rowIdx, "ORIGIN_FILE_NM");
                        grd_file.setFocusedCell(rowIdx, "ORIGIN_FILE_NM");
                    }
                }
            }
        }

        scwin.setFileStatus();
        
        dlt_file.removeRows(dlt_file.getDeletedIndex());
        dlt_file.reform();
        
        $p.emit("onFileUploadDone", true);
    } else {
        scwin.setFileStatus();
        
        $p.emit("onFileUploadDone", false);
    }
};

/**
 * 파일 아이디 가져오기 또는 파일 정보 반환 Submit Done 함수
 */
scwin.sbm_selectFile_submitdone = function(e) {
    if (e.responseJSON.dlt_file.length >= 0) {
        dlt_file.setJSON(e.responseJSON.dlt_file);
        scwin.setFileStatus();
    }
    mpd_multiFileUpload.removeAllFiles();
};

/**
 * 파일 업로드 전에 파라미터 정보를 세팅한다.
 */
scwin.setUploadParam = function() {
    mpd_multiFileUpload.setParam(0 , "subDir" , scwin.option.subDir);
    
    var fileCount = mpd_multiFileUpload.getFileCount();
    
    for (var idx = 1; idx <= fileCount; idx++) {
        mpd_multiFileUpload.setParam(idx, "FILE_GRP_SEQ", scwin.option.fileGrpSeq);
    }
};

/**
 * 파일 업로드 과정에서 에러 발생 시 발생하는 이벤트 함수
 */
scwin.mpd_multiFileUpload_onerror = function(data) {
    com.win.alert("파일 업로드에 실패했습니다.");
};
	
/**
 * @method
 * @name setDataSeq
 * @description 데이터 순번을 세팅하고, 기존에 업로드된 파일을 표시하는 함수
 * @param {string} dataSeq 데이터 순번 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.setDataSeq = function(dataSeq) {
    if (com.util.isEmpty(dataSeq) === false) {
        scwin.option.dataSeq = dataSeq;
        var searchParam = {
            dma_search : {
                DATA_SEQ : dataSeq,
                IS_DELETE : "N"
            }
        };
        com.sbm.execute(sbm_selectFile, searchParam);
    } else {
        scwin.option.dataSeq = 0;
        scwin.clearFiles();
    }
};

/**
 * @method
 * @name undoFileUpload
 * @description 파일 추가 & 삭제 상태를 원복하는 함수
 * @param {string} dataSeq 데이터 순번 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.undoFileUpload = function(dataSeq) {
    dlt_file.undoAll();
    dlt_file.removeRows(dlt_file.getInsertedIndex());
    mpd_multiFileUpload.removeAllFiles();
};

/**
 * @method
 * @name setFileUpload
 * @description 파일 업로드 옵션을 설정하는 함수
 * @param {string} option 파일 업로드 옵션 
 * @returns 
 * @hidden N
 * @exception 
 * @example // 첨부 파일 업로드 모듈 초기 설정 옵션
// - option.maxFileCount : 업로드 가능한 첨부 파일 개수
// - option.totalFileSize : 업로드 가능한 전체 첨부 파일 크기 (개별 첨부 파일 크기는 서버 프레임워크에서 세팅함)
// - option.fileGrpSeq : 파일 그룹 아이디 (신규 등록 화면이면 ""로 세팅하고, 수정 화면이면 기존에 등록된 파일 그룹 아이디를 세팅함)
var option = {
    maxFileCount : 3,
    totalFileSize : 209715200,
    policy : "templates",
    fileGrpSeq : "23",
    filter : "*.jpg,*.png,*.gif"
};

// 첨부 파일 업로드 모듈 초기 설정
// - fileUploadFrame File Upload WFrame 객체
// - option File Upload 옵션 정보
com.setFileUpload(option);
 */ 
scwin.setFileUpload = function(option) {
    scwin.option = {};

    try {
        if (com.util.isEmpty(option.fileGrpSeq) === false) {
            scwin.option.fileGrpSeq = option.fileGrpSeq;
        } else {
            scwin.option.fileGrpSeq = 0;
        }

        scwin.option.maxFileCount = option.maxFileCount;
        scwin.option.maxFileSize = option.maxFileSize;
        scwin.option.totalFileSize = option.totalFileSize;
        
        if (com.util.isEmpty(option.filter) == false) {
            scwin.option.filter = option.filter;
        }

        mpd_multiFileUpload.setMaxFileCount(scwin.option.maxFileCount)
        mpd_multiFileUpload.setMaxFileSize(scwin.option.maxFileSize);
        
        if (typeof option.subDir !== "undefined") {
            scwin.option.subDir = option.subDir;
        }

        scwin.setFileSelectingButtonDisabled(true);

        scwin.callbackFileUploadSetting();
    } catch (ex) {
        console.error(ex);
    }
};
	
/**
 * @method
 * @name startFileUpload
 * @description 파일 업로드를 실행하는 함수
 * @param 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */
scwin.startFileUpload = function() {
    try {
        if (mpd_multiFileUpload.getFileInfos().length > 0) {
            scwin.setUploadParam();
            mpd_multiFileUpload.startUpload();
        } else {
            scwin.saveFileInfo();
        }
    } catch (ex) {
        console.error(ex);
    }
}

/**
 * @method
 * @name getUpdatedFile
 * @description 업데이트된 파일 정보를 반환하는 함수
 * @param 
 * @returns {string} option 파일 업로드 옵션 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.getUpdatedFile = function(option) {
    return dlt_file.getModifiedJSON({ saveRemovedData:false });
};

/**
 * @method
 * @name setFileSelectingButtonDisabled
 * @description 파일 선택 버튼을 상태를 제어함
 * @param {boolean} status 버튼 상태 ( true : 활성화, false : 비활성화) 
 * @returns 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.setFileSelectingButtonDisabled = function(status) {
    btn_fileSelecting.setDisabled(status);
    mpd_multiFileUpload.setDisabled(status);
};

/**
 * @method
 * @name isModified
 * @description 추가하거나 삭제하려는 파일이 있는지 여부 검사
 * @param 
 * @returns {boolean} status 파일 변경 상태 ( true : 변경된 파일 있음, false : 변경된 파일 없음) 
 * @hidden N
 * @exception 
 * @example 
 */ 
scwin.isModified = function() {
    return com.data.isModified(dlt_file);
}

/**
 * 파일 정보를 DB에 저장한다.
 */
scwin.saveFileInfo = function() {
    if (com.data.isModified(dlt_file)) {
        com.sbm.execute(sbm_saveFile);
    } else {
        $p.emit("onFileUploadDone", true);
    }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'width:100%;height:240px;'},E:[{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'fl'},E:[{T:1,N:'w2:textbox',A:{class:'btn_cm  row_add',for:'mpd_multiFileUpload',id:'btn_fileSelecting',label:'추가',style:''}},{T:1,N:'w2:multiupload',A:{'ev:onComplete':'',maxcount:'','ev:onprogress':'scwin.mpd_multiFileUpload_onprogress',fireEventOnError:'',filter:'',mode:'html5_transparent','ev:ondone':'scwin.mpd_multiFileUpload_ondone','ev:onerror':'scwin.mpd_multiFileUpload_onerror',displaySizeUnit:'MB',action:'',style:'',wmode:'false',id:'mpd_multiFileUpload',maxsize:'1000000000',uploadButton:'',selectCallback:'scwin.selectCallback'}}]},{T:1,N:'xf:group',A:{class:'fr mt10',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'ett',id:'',label:'파일 수 :',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fileCount',label:'0개/ 10개',style:''}},{T:1,N:'w2:textbox',A:{class:'ett',id:'',label:'총 용량 :',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_fileSize',label:'0MB / 200MB',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw multi_file',dataList:'data:dlt_file',defaultCellHeight:'26',disabledScrollHidden:'','ev:oncellclick':'','ev:onheaderclick':'',focusMode:'row',id:'grd_file',rowNumVisible:'',rowNumWidth:'',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'50',scrollByColumn:'false',scrollByColumnAdaptive:'false',sortable:'true',style:'height:150px;',visibleRowNum:'5',wheelRows:'0',readOnlyTabIgnore:'',summary:'',readOnlyBackgroundImgCSS:'',autoFitMinWidth:'800'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'선택',width:'40',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',style:'',value:'파일명',width:'350'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column14',inputType:'text',removeBorderStyle:'false',style:'',value:'전송결과',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',style:'',value:'파일크기',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',width:'30',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{blockSelect:'false',customFormatter:'scwin.customFormatterFileNm',displayMode:'label',id:'ORIGIN_FILE_NM',inputType:'text',readOnly:'true',removeBorderStyle:'false',textAlign:'left',width:'350'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'progress',dataType:'',displayFormatter:'scwin.setDisplayStatus',displayMode:'label',expression:'',id:'status',inputType:'text',readOnly:'true',removeBorderStyle:'false',width:'100',style:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayFormatter:'scwin.displayFileSize',displayMode:'label',id:'FILE_SIZE',inputType:'text',readOnly:'true',removeBorderStyle:'false',textAlign:'right',width:'100'}}]}]}]}]}]}]}]}]})