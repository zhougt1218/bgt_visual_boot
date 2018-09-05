package com.sdyy.springboot.bgt.bgt_visual_boot.mapper;

import java.util.List;

/**
 * 此为增，删，改，查  的通用mapper
 * @author xiaohu
 * @createDate 2018-09-05 16:02
 */
public interface BaseMapper {
    public <T> List<T> queryAll(Object obj);

    public <T> Object queryEntityById(String id);

    public void addEntity(Object obj);

    public void deleteEntity(Integer id);

    public void editEntity(Object obj);

    public <T> Object queryEntity(Object obj);
}
