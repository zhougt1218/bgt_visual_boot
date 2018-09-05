package com.sdyy.springboot.bgt.bgt_visual_boot.service.impl;

import com.sdyy.springboot.bgt.bgt_visual_boot.mapper.UiasMapper;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.Uias.*;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.UiasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author xiaohu
 * @createDate 2018-09-05 17:42
 */
@Service
public class UiasServiceImpl implements UiasService {

    @Autowired
    public UiasMapper mapper;

    @Override
    public List<QueryByCor> queryByCor() {
        return mapper.queryByCor();
    }

    @Override
    public List<QueryByTotal> queryByTotal() {
        return mapper.queryByTotal();
    }

    @Override
    public List<QueryByUser> queryByUser() {
        return mapper.queryByUser();
    }

    @Override
    public List<QueryByPv> queryByPv() {
        return mapper.queryByPv();
    }

    @Override
    public List<QueryByProvince> queryByProvince() {
        return mapper.queryByProvince();
    }

    @Override
    public List<QueryByProvince> queryByRegion() {
        return mapper.queryByRegion();
    }
}
