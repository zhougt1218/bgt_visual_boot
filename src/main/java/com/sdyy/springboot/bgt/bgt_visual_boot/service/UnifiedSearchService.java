package com.sdyy.springboot.bgt.bgt_visual_boot.service;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnifiedSearch.QueryByDayLog;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnifiedSearch.QueryByHotword;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * 统一搜索平台
 * @author PPF
 *
 */
@Service
public interface UnifiedSearchService {

	/**
	 * queryByDayLog
	 */
	public List<QueryByDayLog> queryByDayLog();
	
	/**
	 * hotword
	 */
	public List<QueryByHotword> queryByHotword();
}
