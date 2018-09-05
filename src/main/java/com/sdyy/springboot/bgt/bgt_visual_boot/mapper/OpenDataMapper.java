package com.sdyy.springboot.bgt.bgt_visual_boot.mapper;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.OpenData.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OpenDataMapper extends BaseMapper{
	
	/**
	 * 按省直部门资源统计信息表  from open_data_org_statistics
	 * @return 各省直部门所拥有的资源情况
	 */
	public List<QueryByOrg> queryByOrg();
	
	/**
	 * 查询地区和省直部门资源总体情况
	 * @return 山东省 总共拥有的资源情况 其中 app_count是 应用数
	 */
	public List<QueryByRegion> queryByRegion();
	
	/**
	 * 按地市获取资源统计信息  from open_data_region_statistics
	 * @return 地市拥有的资源情况，其中山东省代表省直部门
	 */
	public List<QueryByDaily> queryByCity();
	
	/**
	 * 按主题获取统计信息  from open_data_group_statistic
	 * @return 分主题统计资源情况
	 */
	public List<QueryByGroup> queryByGroup();
	
	
	/**
	 * 查询省直部门目录访问、数据文件下载情况，分部门
	 * from open_data_catalog_use_statistic
	 * @return 各省直部门目录使用累计情况
	 */
	public List<QueryByCatalog> queryByCatalog();
	
	
	/**
	 * 按部门查看接口使用情况  from open_data_api_use_statistic
	 * @return 各省直部门接口使用累计情况
	 */
	public List<QueryByAPI> queryByAPI();
	
	
	/**
	 * 查询数据文件累计下载情况  from open_data_hot_catalog_statistic
	 * @return 数据文件累计下载情况
	 */
	public List<QueryByHotCatalog> queryByHotCatalog();
	
	
	/**
	 * 查询每日访问情况  from open_data_daily_statistic
	 * @return 累计访问量
	 */
	public List<QueryByDaily> queryByDaily();
	
	
	/**
	 * 按部门查看所有目录使用情况 
	 * @return 所有部门累计目录 访问量、下载量、 接口申请量、调用量
	 */
	public List<QueryByCatalog> queryByUse();
	
	/**
	 * 按部门查看所有目录使用情况 
	 * @return 每个部门累计目录 访问量、下载量、 接口申请量、调用量
	 */
	public List<QueryByCatalog> queryByUseDay();
	
	/**
	 * 查询周目录访问、数据文件下载、接口调用topN
	 * @return 周目录访问
	 */
	public List<QueryByWeekCata> queryByWeekCataView();
	
	/**
	 * 查询周目录访问、数据文件下载、接口调用topN
	 * @return 数据文件下载
	 */
	public List<QueryByWeekCata> queryByWeekCataDown();
	
	/**
	 * 查询周目录访问、数据文件下载、接口调用topN
	 * @return 接口调用topN
	 */
	public List<QueryByWeekCata> queryByWeekCataAPI();
	
	/**
	 * 实时查找当天下载的目录
	 */
	public List<QueryByWeekCata> queryByCataDownloadDay();
	
	/**
	 * 查询每天活跃用户
	 * @return 每天登录的用户量
	 */
	public List<QueryByDaily> queryByWebDaily();
	
	/**
	 * 查询中间图数据 累计情况 地市数据 
	 */
	public List<QueryByCatalog> queryBySumCity();
	
	/**
	 * 查询中间图数据 累计情况 省直部门数据 
	 */
	public List<QueryByCatalog> queryBySumDept();
	
	/**
	 * 查询七日内下载的目录
	 */
	public List<QueryByWeekCata> queryByCataDownWeek();
	
	/**
	 * 查询近期访问日增量
	 */
	public List<QueryByDaily> queryByVisitCount();
	
	/**
	 * 查询省直部门历史数据
	 */
	public List<QueryByRegion> queryByRegionDept();
	
	/**
	 * 查询地市历史数据
	 */
	public List<QueryByRegion> queryByRegionCity();
	
}
