package com.sdyy.springboot.bgt.bgt_visual_boot.mapper;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnifiedSearch.QueryByDayLog;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnifiedSearch.QueryByHotword;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface UnifiedSearchMapper extends BaseMapper{
	/**
	 * queryByDayLog
	 */
	public List<QueryByDayLog> queryByDayLog();
	
	/**
	 * hotword
	 */
	public List<QueryByHotword> queryByHotword();
}
