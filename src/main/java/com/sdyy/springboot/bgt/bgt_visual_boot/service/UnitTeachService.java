package com.sdyy.springboot.bgt.bgt_visual_boot.service;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach.*;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByDailyUserStat;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByStat;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByWebStat;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * 政务服务平台
 * @author PPF
 *
 */
@Service
public interface UnitTeachService {

	/**
	 * queryByBasic
	 */
	public List<QueryByBasic> queryByBasic();
	
	/**
	 * queryByDisk
	 */
	public List<QueryByDisk> queryByDisk();
	
	/**
	 * queryByQueryZhanban
	 */
	public List<QueryByZhanban> queryByQueryZhanban();
	
	/**
	 * queryByQueryArticle
	 */
	public List<QueryByArticle> queryByArticle();
	
	/**
	 * queryByQueryWebsite
	 */
	public List<QueryByWebsite> queryByWebsite();
	
	/**
	 * queryByQueryClick
	 */
	public List<QueryByClick> queryByClick();
	
	/**
	 * 大汉 queryByPoparticle
	 */
	public List<QueryByArticle> queryByPoparticle();
	
	/**
	 * 大汉 queryByPopWeb
	 */
	public List<QueryByWebsite> queryByPopWeb();
	
	/**
	 * 大汉 queryByStat
	 */
	public List<QueryByStat> queryByStat();
	
	/**
	 * 大汉 queryByDailyUserStat
	 */
	public List<QueryByDailyUserStat> queryByDailyUserStat();
	
	/**
	 * 大汉 queryByWebStat
	 */
	public List<QueryByWebStat> queryByWebStat();
}
