package com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService;

import java.io.Serializable;

/**
 * 部门入驻情况
 * @author PPF
 *
 */
public class QueryByDept implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String org_code;
	private String org_name;
	private String region_code;
	private Integer item_name;
	private Integer item_handle_num;
	private Integer update_time;
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
	public Integer getItem_name() {
		return item_name;
	}
	public void setItem_name(Integer item_name) {
		this.item_name = item_name;
	}
	public Integer getItem_handle_num() {
		return item_handle_num;
	}
	public void setItem_handle_num(Integer item_handle_num) {
		this.item_handle_num = item_handle_num;
	}
	public Integer getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(Integer update_time) {
		this.update_time = update_time;
	}
	@Override
	public String toString() {
		return "QueryByDept [org_code=" + org_code + ", org_name=" + org_name + ", region_code=" + region_code
				+ ", item_name=" + item_name + ", item_handle_num=" + item_handle_num + ", update_time=" + update_time
				+ "]";
	}

	
	
}
