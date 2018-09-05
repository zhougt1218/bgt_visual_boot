package com.sdyy.springboot.bgt.bgt_visual_boot.mapper;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.Resources.RResources;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.Resources.Resources;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author xiaohu
 * @createDate 2018-09-05 20:40
 */
@Mapper
public interface ResourcesMapper extends  BaseMapper{
    public List<RResources> resourcesListWithRole(Integer rid);

    public List<Resources> findAllResourcesWithRoles();

    public List<Resources> loadMenu(Resources resources);
}
