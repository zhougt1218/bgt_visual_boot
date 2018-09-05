package com.sdyy.springboot.bgt.bgt_visual_boot.controller;

import java.util.List;

import javax.annotation.Resource;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.OpenData.*;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.OpenDataService;
import com.sdyy.springboot.bgt.bgt_visual_boot.util.JSONUtil;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class DataGroupController {
	
	@Resource
	private OpenDataService openDataService;
	
	
	@RequestMapping("/openData")
	public String sjkfHtml(Model model) {
		List<QueryByOrg> queryByOrg = openDataService.queryByOrg();
		List<QueryByRegion> queryByRegion = openDataService.queryByRegion();
		List<QueryByGroup> queryByGroup = openDataService.queryByGroup();
		List<QueryByCatalog> queryByCatalog = openDataService.queryByCatalog();
		List<QueryByAPI> queryByAPI = openDataService.queryByAPI();
		List<QueryByHotCatalog> queryByHotCatalog = openDataService.queryByHotCatalog();
		List<QueryByDaily> queryByDaily = openDataService.queryByDaily();
		List<QueryByDaily> queryByCity = openDataService.queryByCity();
		List<QueryByCatalog> queryByUse = openDataService.queryByUse();
		List<QueryByCatalog> queryByUseDay = openDataService.queryByUseDay();
		List<QueryByWeekCata> queryByWeekCataView = openDataService.queryByWeekCataView();
		List<QueryByWeekCata> queryByWeekCataDown = openDataService.queryByWeekCataDown();
		List<QueryByWeekCata> queryByWeekCataAPI = openDataService.queryByWeekCataAPI();
		List<QueryByDaily> queryByWebDaily = openDataService.queryByWebDaily();
		List<QueryByCatalog> queryBySumCity = openDataService.queryBySumCity();
		List<QueryByCatalog> queryBySumDept = openDataService.queryBySumDept();
		List<QueryByWeekCata> queryByCataDownWeek = openDataService.queryByCataDownWeek();
		List<QueryByDaily> queryByVisitCount = openDataService.queryByVisitCount();
		
		List<QueryByRegion> queryByRegionDept = openDataService.queryByRegionDept();
		List<QueryByRegion> queryByRegionCity = openDataService.queryByRegionCity();
		
		String json1 = JSONUtil.toJSONString(queryByOrg);
		String json2 = JSONUtil.toJSONString(queryByRegion);
		String json3 = JSONUtil.toJSONString(queryByGroup);
		String json4 = JSONUtil.toJSONString(queryByCatalog);
		String json5 = JSONUtil.toJSONString(queryByAPI);
		String json6 = JSONUtil.toJSONString(queryByHotCatalog);
		String json7 = JSONUtil.toJSONString(queryByDaily);
		String json8 = JSONUtil.toJSONString(queryByCity);
		String json9 = JSONUtil.toJSONString(queryByUse);
		String json10 = JSONUtil.toJSONString(queryByUseDay);
		String json11 = JSONUtil.toJSONString(queryByWeekCataView);
		String json12 = JSONUtil.toJSONString(queryByWeekCataDown);
		String json13 = JSONUtil.toJSONString(queryByWeekCataAPI);
		String json14 = JSONUtil.toJSONString(queryByWebDaily);
		String json15 = JSONUtil.toJSONString(queryBySumCity);
		String json16 = JSONUtil.toJSONString(queryBySumDept);
		String json17 = JSONUtil.toJSONString(queryByCataDownWeek);
		String json18 = JSONUtil.toJSONString(queryByVisitCount);
		
		String json19 = JSONUtil.toJSONString(queryByRegionDept);
		String json20 = JSONUtil.toJSONString(queryByRegionCity);
		
		model.addAttribute("queryByOrg", json1);
		model.addAttribute("queryByRegion", json2);
		model.addAttribute("queryByGroup", json3);
		model.addAttribute("queryByCatalog", json4);
		model.addAttribute("queryByAPI", json5);
		model.addAttribute("queryByHotCatalog", json6);
		model.addAttribute("queryByDaily", json7);
		model.addAttribute("queryByCity", json8);
		model.addAttribute("queryByUse", json9);
		model.addAttribute("queryByUseDay", json10);
		model.addAttribute("queryByWeekCataView", json11);
		model.addAttribute("queryByWeekCataDown", json12);
		model.addAttribute("queryByWeekCataAPI", json13);
		model.addAttribute("queryByWebDaily", json14);
		model.addAttribute("queryBySumCity", json15);
		model.addAttribute("queryBySumDept", json16);
		model.addAttribute("queryByCataDownWeek", json17);
		model.addAttribute("queryByVisitCount", json18);
		
		model.addAttribute("queryByRegionDept", json19);
		model.addAttribute("queryByRegionCity", json20);
		
		return "dataGroup/openData";
	}
	
	@RequestMapping("/openData2")
	public String opendata2(){
		return "dataGroup/openData2";
	}
	
}
