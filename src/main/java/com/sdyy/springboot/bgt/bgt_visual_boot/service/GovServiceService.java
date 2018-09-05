package com.sdyy.springboot.bgt.bgt_visual_boot.service;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByAnalysis;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByDept;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByHandle;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByViolation;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * 政务服务平台
 * @author PPF
 *
 */
@Service
public interface GovServiceService {

	/**
	 * 部门入驻情况  from gov_service_dept_located
	 * @return 部门入驻情况
	 */
	public List<QueryByDept> queryByDept();
	
	/**
	 * 部门办件情况  from gov_service_dept_handle
	 * @return 部门办件情况
	 */
	public List<QueryByHandle> queryByHandle();
	
	/**
	 * 违规情况统计  from gov_service_violation_statistics
	 * @return 违规情况统计
	 */
	public List<QueryByViolation> queryByViolation();
	
	/**
	 * 热门事项分析  from gov_service_hot_analysis
	 * @return 热门事项分析
	 */
	public List<QueryByAnalysis> queryByAnalysis();
}
