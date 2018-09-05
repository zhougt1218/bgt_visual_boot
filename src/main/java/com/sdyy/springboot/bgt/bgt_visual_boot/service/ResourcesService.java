package com.sdyy.springboot.bgt.bgt_visual_boot.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.Resources.RResources;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.Resources.Resources;
import org.springframework.stereotype.Service;

@Service
public interface ResourcesService {
	
	public List<RResources> resourcesListWithRole(Integer rid);
	
	public PageInfo<Resources> selectByPage(Resources resources, int start, int length);
	
	public void addResources(Resources resources);
	
	public void delResources(Integer id);
	
	public List<Resources> loadMenu(Resources resources);

	public List<Resources>queryAll();
}
