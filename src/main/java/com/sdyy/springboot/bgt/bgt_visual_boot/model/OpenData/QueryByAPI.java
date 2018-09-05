package com.sdyy.springboot.bgt.bgt_visual_boot.model.OpenData;

import java.io.Serializable;

/**
 * 按部门查看接口使用情况
 * @author PPF
 *
 */
public class QueryByAPI implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String org_code;
	private String org_name;
	private String region_code;
	private Integer api_count;
	private Integer total_apply_count;
	private Integer total_visits_count;
	private String update_time;
	public String getOrg_code() {
		return org_code;
	}
	public void setOrg_code(String org_code) {
		this.org_code = org_code;
	}
	public String getOrg_name() {
		return org_name;
	}
	public void setOrg_name(String org_name) {
		this.org_name = org_name;
	}
	public String getRegion_code() {
		return region_code;
	}
	public void setRegion_code(String region_code) {
		this.region_code = region_code;
	}
	public Integer getApi_count() {
		return api_count;
	}
	public void setApi_count(Integer api_count) {
		this.api_count = api_count;
	}
	public Integer getTotal_apply_count() {
		return total_apply_count;
	}
	public void setTotal_apply_count(Integer total_apply_count) {
		this.total_apply_count = total_apply_count;
	}
	public Integer getTotal_visits_count() {
		return total_visits_count;
	}
	public void setTotal_visits_count(Integer total_visits_count) {
		this.total_visits_count = total_visits_count;
	}
	public String getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(String update_time) {
		this.update_time = update_time;
	}
	@Override
	public String toString() {
		return "QueryByAPI [org_code=" + org_code + ", org_name=" + org_name + ", region_code=" + region_code
				+ ", api_count=" + api_count + ", total_apply_count=" + total_apply_count + ", total_visits_count="
				+ total_visits_count + ", update_time=" + update_time + "]";
	}
	
}
