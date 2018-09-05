package com.sdyy.springboot.bgt.bgt_visual_boot.service.impl;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.sdyy.springboot.bgt.bgt_visual_boot.mapper.ResourcesMapper;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.Resources.RResources;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.Resources.Resources;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.ResourcesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author xiaohu
 * @createDate 2018-09-05 20:46
 */
@Service
public class ResourcesServiceImpl implements ResourcesService {

    @Autowired
    public ResourcesMapper mapper;

    @Override
    public List<RResources> resourcesListWithRole(Integer rid) {
        return mapper.resourcesListWithRole(rid);
    }

    @Override
    public PageInfo<Resources> selectByPage(Resources resources, int start, int length) {
        int page = start/length+1;
        PageHelper.startPage(page, length);
        List<Resources> resourcelist = mapper.queryAll(resources);
        return new PageInfo<>(resourcelist);
    }

    @Override
    public void addResources(Resources resources) {

    }

    @Override
    public void delResources(Integer id) {

    }

    @Override
    public List<Resources> loadMenu(Resources resources) {
        return null;
    }

    @Override
    public List<Resources> queryAll() {
        return null;
    }
}
