package com.sdyy.springboot.bgt.bgt_visual_boot.controller;


import java.util.List;

import javax.annotation.Resource;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByAnalysis;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByDept;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByHandle;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByViolation;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.Uias.*;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnifiedSearch.QueryByDayLog;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnifiedSearch.QueryByHotword;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach.*;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByDailyUserStat;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByStat;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByWebStat;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.GovServiceService;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.UiasService;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.UnifiedSearchService;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.UnitTeachService;
import com.sdyy.springboot.bgt.bgt_visual_boot.util.JSONUtil;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;



@Controller
public class AppGroupController {
	
	@Resource
	private GovServiceService govService;
	
	@Resource
	private UiasService uiasService;
	
	@Resource
	private UnitTeachService unitTeachService;
	
	@Resource
	private UnifiedSearchService unifiedSearchService;
	
	/**
	 * 政务服务平台
	 * @return
	 */
	@RequestMapping("/govService")
	public String govServiceHtml(Model model){
		List<QueryByDept> queryByDept = govService.queryByDept();
		List<QueryByHandle> queryByHandle = govService.queryByHandle();
		List<QueryByViolation> queryByViolation = govService.queryByViolation();
		List<QueryByAnalysis> queryByAnalysis = govService.queryByAnalysis();
		
		String json1 = JSONUtil.toJSONString(queryByDept);
		String json2 = JSONUtil.toJSONString(queryByHandle);
		String json3 = JSONUtil.toJSONString(queryByViolation);
		String json4 = JSONUtil.toJSONString(queryByAnalysis);
		
		model.addAttribute("queryByDept",json1);
		model.addAttribute("queryByHandle",json2);
		model.addAttribute("queryByViolation",json3);
		model.addAttribute("queryByAnalysis",json4);
		
		return "appGroup/govService";
	}
	
	
	@RequestMapping("/unitSearch")
	public String unitSearchHtml(Model model){
		List<QueryByDayLog> queryByDayLog = unifiedSearchService.queryByDayLog();
		List<QueryByHotword> queryByHotword = unifiedSearchService.queryByHotword();
		String json1 = JSONUtil.toJSONString(queryByDayLog);
		String json2 = JSONUtil.toJSONString(queryByHotword);
		model.addAttribute("queryByDayLog", json1);
		model.addAttribute("queryByHotword", json2);
		return "appGroup/unitSearch";
	}
	
	@RequestMapping("/unitTeach")
	public String unitteachHtml(Model model){
		List<QueryByBasic> queryByBasic = unitTeachService.queryByBasic();
		List<QueryByDisk> queryByDisk = unitTeachService.queryByDisk();
		List<QueryByZhanban> queryByQueryZhanban = unitTeachService.queryByQueryZhanban();
		List<QueryByArticle> queryByArticle = unitTeachService.queryByArticle();
		List<QueryByWebsite> queryByWebsite = unitTeachService.queryByWebsite();
		List<QueryByClick> queryByClick = unitTeachService.queryByClick();
		
		List<QueryByArticle> queryByPoparticle = unitTeachService.queryByPoparticle();
		List<QueryByWebsite> queryByPopWeb = unitTeachService.queryByPopWeb();
		List<QueryByStat> queryByStat = unitTeachService.queryByStat();
		
		List<QueryByDailyUserStat> queryByDailyUserStat = unitTeachService.queryByDailyUserStat();
		List<QueryByWebStat> queryByWebStat = unitTeachService.queryByWebStat();
		
		String json1 = JSONUtil.toJSONString(queryByBasic);
		String json2 = JSONUtil.toJSONString(queryByDisk);
		String json3 = JSONUtil.toJSONString(queryByQueryZhanban);
		String json4 = JSONUtil.toJSONString(queryByArticle);
		String json5 = JSONUtil.toJSONString(queryByWebsite);
		String json6 = JSONUtil.toJSONString(queryByClick);
		
		String json7 = JSONUtil.toJSONString(queryByPoparticle);
		String json8 = JSONUtil.toJSONString(queryByPopWeb);
		String json9 = JSONUtil.toJSONString(queryByStat);
		
		String json10 = JSONUtil.toJSONString(queryByDailyUserStat);
		String json11 = JSONUtil.toJSONString(queryByWebStat);
		
		model.addAttribute("queryByBasic",json1);
		model.addAttribute("queryByDisk",json2);
		model.addAttribute("queryByQueryZhanban",json3);
		model.addAttribute("queryByArticle",json4);
		model.addAttribute("queryByWebsite",json5);
		model.addAttribute("queryByClick",json6);
		
		model.addAttribute("queryByPoparticle",json7);
		model.addAttribute("queryByPopWeb",json8);
		model.addAttribute("queryByStat",json9);
		
		model.addAttribute("queryByDailyUserStat",json10);
		model.addAttribute("queryByWebStat",json11);
		
		return "appGroup/unitTeach";
	}
	
	@RequestMapping("/unitIdentify")
	public String unitIdentifyHtml(Model model){
		List<QueryByCor> queryByCor = uiasService.queryByCor();
		List<QueryByTotal> queryByTotal = uiasService.queryByTotal();
		List<QueryByUser> queryByUser = uiasService.queryByUser();
		List<QueryByPv> queryByPv = uiasService.queryByPv();
		List<QueryByProvince> queryByProvince = uiasService.queryByProvince();
		List<QueryByProvince> queryByRegion = uiasService.queryByRegion();
		String json1 = JSONUtil.toJSONString(queryByCor);
		String json2 = JSONUtil.toJSONString(queryByTotal);
		String json3 = JSONUtil.toJSONString(queryByUser);
		String json4 = JSONUtil.toJSONString(queryByPv);
		String json5 = JSONUtil.toJSONString(queryByProvince);
		String json6 = JSONUtil.toJSONString(queryByRegion);
		model.addAttribute("queryByCor",json1);
		model.addAttribute("queryByTotal",json2);
		model.addAttribute("queryByUser",json3);
		model.addAttribute("queryByPv",json4);
		model.addAttribute("queryByProvince",json5);
		model.addAttribute("queryByRegion",json6);
		return "appGroup/unitIdentify";
	}
}
