package com.inswave.wrm.common.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.math.BigDecimal;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.inswave.wrm.common.dao.FileDao;
import com.inswave.wrm.common.service.FileService;

@Service
public class FileServiceImpl implements FileService {
	@Resource(name = "fileDao")
	private FileDao fileDao;
	
	@Override
	public List<Map> selectFileGrp(Map param) {
		return fileDao.selectFileGrp(param);
	}
	
	@Override
	public Map saveFileGrp(Map param) {
		int cnt = 0;

		String rowStatus = (String) param.get("mapStatus");
		if (rowStatus.equals("C")) {
			cnt += fileDao.insertFileGrp(param);
		} else if (rowStatus.equals("U")) {
			cnt += fileDao.updateFileGrp(param);
		} else if (rowStatus.equals("D")) {
			cnt += fileDao.deleteFileGrp(param);
		}
			
		Map result = new HashMap();
		result.put("STATUS", "S");
		result.put("CNT", String.valueOf(cnt));
		return result;
	}
	
	@Override
	public List<Map> selectFile(Map param) {
		return fileDao.selectFile(param);
	}
	
	@Override
	public List<Map> selectFileByFileGrp(Map param) {
		return fileDao.selectFileByFileGrp(param);
	}
	
	@Override
	public Map selectFileByFileGrpTotalCnt(Map param) {
		return fileDao.selectFileByFileGrpTotalCnt(param);
	}
	
	@Override
	public Map saveFile(List param) {
		int iCnt = 0;
		int dCnt = 0;
		int selectedDataSeq = -999; 
		for (int i = 0; i < param.size(); i++) {
			Map data = (Map) param.get(i);
			String rowStatus = (String) data.get("rowStatus");
			String chk = (String) data.get("chk");
			
			if(i == 0) {
				
				int DATA_SEQ = ((Integer)data.get("DATA_SEQ")).intValue();
				if(DATA_SEQ < 0) {
					selectedDataSeq = ((Long)fileDao.selectDataSeq().get("DATA_SEQ")).intValue();
				} else {
					selectedDataSeq = DATA_SEQ;
				} 
			} 
			
			if (rowStatus.equals("C")) {
				data.put("DATA_SEQ", selectedDataSeq);
				iCnt += fileDao.insertFile(data);
			} else if (rowStatus.equals("D") || chk.equals("Y")) {
				data.put("IS_DELETE", "Y");
				dCnt += fileDao.updateFileIsDelete(data);
			}
		}
		
		Map result = new HashMap();
		result.put("STATUS", "S");
		result.put("ICNT", String.valueOf(iCnt));
		result.put("DCNT", String.valueOf(dCnt));
		result.put("DATA_SEQ", selectedDataSeq);
		return result;
	}
}
