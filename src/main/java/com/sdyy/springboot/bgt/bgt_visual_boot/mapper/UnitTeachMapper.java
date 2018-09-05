package com.sdyy.springboot.bgt.bgt_visual_boot.mapper;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach.*;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByDailyUserStat;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByStat;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan.QueryByWebStat;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author xiaohu
 * @createDate 2018-09-05 17:03
 */
@Mapper
public interface UnitTeachMapper {
    /**
     * queryByBasic
     */
    public List<QueryByBasic> queryByBasic();

    /**
     * queryByDisk
     */
    public List<QueryByDisk> queryByDisk();

    /**
     * queryByQueryZhanban
     */
    public List<QueryByZhanban> queryByQueryZhanban();

    /**
     * queryByQueryArticle
     */
    public List<QueryByArticle> queryByArticle();

    /**
     * queryByQueryWebsite
     */
    public List<QueryByWebsite> queryByWebsite();

    /**
     * queryByQueryClick
     */
    public List<QueryByClick> queryByClick();


    /**
     * 大汉 queryByPoparticle
     */
    public List<QueryByArticle> queryByPoparticle();

    /**
     * 大汉 queryByPopWeb
     */
    public List<QueryByWebsite> queryByPopWeb();

    /**
     * 大汉 queryByStat
     */
    public List<QueryByStat> queryByStat();

    /**
     * 大汉 queryByDailyUserStat
     */
    public List<QueryByDailyUserStat> queryByDailyUserStat();

    /**
     * 大汉 queryByWebStat
     */
    public List<QueryByWebStat> queryByWebStat();
}
