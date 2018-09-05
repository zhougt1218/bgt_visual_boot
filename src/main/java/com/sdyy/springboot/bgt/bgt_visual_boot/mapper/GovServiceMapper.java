package com.sdyy.springboot.bgt.bgt_visual_boot.mapper;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByAnalysis;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByDept;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByHandle;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByViolation;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author xiaohu
 * @createDate 2018-09-05 16:49
 */
@Mapper
public interface GovServiceMapper extends BaseMapper{

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
