package com.sdyy.springboot.bgt.bgt_visual_boot.service.impl;

import com.sdyy.springboot.bgt.bgt_visual_boot.mapper.UnifiedSearchMapper;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnifiedSearch.QueryByDayLog;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnifiedSearch.QueryByHotword;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.UnifiedSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author xiaohu
 * @createDate 2018-09-05 17:12
 */
@Service
public class UnifiedSearchServiceImpl implements UnifiedSearchService {

    @Autowired
    public UnifiedSearchMapper  mapper;
    @Override
    public List<QueryByDayLog> queryByDayLog() {
        return mapper.queryByDayLog();
    }

    @Override
    public List<QueryByHotword> queryByHotword() {
        return mapper.queryByHotword();
    }
}
