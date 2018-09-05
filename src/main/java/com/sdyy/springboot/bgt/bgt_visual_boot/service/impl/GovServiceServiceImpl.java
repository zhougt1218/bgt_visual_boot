package com.sdyy.springboot.bgt.bgt_visual_boot.service.impl;

import com.sdyy.springboot.bgt.bgt_visual_boot.mapper.GovServiceMapper;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByAnalysis;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByDept;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByHandle;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService.QueryByViolation;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.GovServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author xiaohu
 * @createDate 2018-09-05 16:52
 */
@Service
public class GovServiceServiceImpl implements GovServiceService {

    @Autowired
    public GovServiceMapper mapper;
    @Override
    public List<QueryByDept> queryByDept() {
        return mapper.queryByDept();
    }

    @Override
    public List<QueryByHandle> queryByHandle() {
        return mapper.queryByHandle();
    }

    @Override
    public List<QueryByViolation> queryByViolation() {
        return mapper.queryByViolation();
    }

    @Override
    public List<QueryByAnalysis> queryByAnalysis() {
        return mapper.queryByAnalysis();
    }
}
