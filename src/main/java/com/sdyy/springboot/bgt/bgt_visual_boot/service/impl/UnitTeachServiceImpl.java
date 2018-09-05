package com.sdyy.springboot.bgt.bgt_visual_boot.service.impl;

import com.sdyy.springboot.bgt.bgt_visual_boot.mapper.UnitTeachMapper;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach.*;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByDailyUserStat;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByStat;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByWebStat;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.UnitTeachService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author xiaohu
 * @createDate 2018-09-05 17:02
 */
@Service
public class UnitTeachServiceImpl implements UnitTeachService {

    @Autowired
    public UnitTeachMapper mapper;
    @Override
    public List<QueryByBasic> queryByBasic() {
        return mapper.queryByBasic();
    }

    @Override
    public List<QueryByDisk> queryByDisk() {
        return mapper.queryByDisk();
    }

    @Override
    public List<QueryByZhanban> queryByQueryZhanban() {
        return mapper.queryByQueryZhanban();
    }

    @Override
    public List<QueryByArticle> queryByArticle() {
        return mapper.queryByArticle();
    }

    @Override
    public List<QueryByWebsite> queryByWebsite() {
        return mapper.queryByWebsite();
    }

    @Override
    public List<QueryByClick> queryByClick() {
        return mapper.queryByClick();
    }

    @Override
    public List<QueryByArticle> queryByPoparticle() {
        return mapper.queryByPoparticle();
    }

    @Override
    public List<QueryByWebsite> queryByPopWeb() {
        return mapper.queryByPopWeb();
    }

    @Override
    public List<QueryByStat> queryByStat() {
        return mapper.queryByStat();
    }

    @Override
    public List<QueryByDailyUserStat> queryByDailyUserStat() {
        return mapper.queryByDailyUserStat();
    }

    @Override
    public List<QueryByWebStat> queryByWebStat() {
        return mapper.queryByWebStat();
    }
}
