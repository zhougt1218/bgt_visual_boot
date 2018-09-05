package com.sdyy.springboot.bgt.bgt_visual_boot.service.impl;

import com.sdyy.springboot.bgt.bgt_visual_boot.mapper.OpenDataMapper;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.OpenData.*;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.OpenDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author xiaohu
 * @createDate 2018-09-05 20:07
 */
@Service
public class OpenDataServiceImpl implements OpenDataService {

    @Autowired
    public OpenDataMapper mapper;

    @Override
    public List<QueryByOrg> queryByOrg() {
        return mapper.queryByOrg();
    }

    @Override
    public List<QueryByRegion> queryByRegion() {
        return mapper.queryByRegion();
    }

    @Override
    public List<QueryByDaily> queryByCity() {
        return mapper.queryByCity() ;
    }

    @Override
    public List<QueryByGroup> queryByGroup() {
        return mapper.queryByGroup();
    }

    @Override
    public List<QueryByCatalog> queryByCatalog() {
        return mapper.queryByCatalog();
    }

    @Override
    public List<QueryByAPI> queryByAPI() {
        return mapper.queryByAPI();
    }

    @Override
    public List<QueryByHotCatalog> queryByHotCatalog() {
        return mapper.queryByHotCatalog();
    }

    @Override
    public List<QueryByDaily> queryByDaily() {
        return mapper.queryByDaily();
    }

    @Override
    public List<QueryByCatalog> queryByUse() {
        return mapper.queryByUse();
    }

    @Override
    public List<QueryByCatalog> queryByUseDay() {
        return mapper.queryByUseDay();
    }

    @Override
    public List<QueryByWeekCata> queryByWeekCataView() {
        return mapper.queryByWeekCataView();
    }

    @Override
    public List<QueryByWeekCata> queryByWeekCataDown() {
        return mapper.queryByWeekCataDown();
    }

    @Override
    public List<QueryByWeekCata> queryByWeekCataAPI() {
        return mapper.queryByWeekCataAPI();
    }

    @Override
    public List<QueryByWeekCata> queryByCataDownloadDay() {
        return mapper.queryByCataDownloadDay();
    }

    @Override
    public List<QueryByDaily> queryByWebDaily() {
        return mapper.queryByWebDaily();
    }

    @Override
    public List<QueryByCatalog> queryBySumCity() {
        return mapper.queryBySumCity() ;
    }

    @Override
    public List<QueryByCatalog> queryBySumDept() {
        return mapper.queryBySumDept();
    }

    @Override
    public List<QueryByWeekCata> queryByCataDownWeek() {
        return mapper.queryByCataDownWeek();
    }

    @Override
    public List<QueryByDaily> queryByVisitCount() {
        return mapper.queryByVisitCount();
    }

    @Override
    public List<QueryByRegion> queryByRegionDept() {
        return mapper.queryByRegionDept();
    }

    @Override
    public List<QueryByRegion> queryByRegionCity() {
        return mapper.queryByRegionCity();
    }
}
