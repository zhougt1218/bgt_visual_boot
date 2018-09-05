package com.sdyy.springboot.bgt.bgt_visual_boot.model.OpenData;

import java.io.Serializable;

/**
 * 按部门查看目录使用情况
 * @author PPF
 *
 */
public class QueryByCatalog implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String org_code;
	private String org_name;
	private String region_code;
	private Integer cata_visit_num;
	private Integer cata_download_num;
	private Integer total_apply_count;
	private Integer total_visits_count;
	private String update_time;
	private String org_name_short;
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
	public Integer getCata_visit_num() {
		return cata_visit_num;
	}
	public void setCata_visit_num(Integer cata_visit_num) {
		this.cata_visit_num = cata_visit_num;
	}
	public Integer getCata_download_num() {
		return cata_download_num;
	}
	public void setCata_download_num(Integer cata_download_num) {
		this.cata_download_num = cata_download_num;
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
	public String getOrg_name_short() {
		return org_name_short;
	}
	public void setOrg_name_short(String org_name_short) {
		this.org_name_short = org_name_short;
	}
	@Override
	public String toString() {
		return "QueryByCatalog [org_code=" + org_code + ", org_name=" + org_name + ", region_code=" + region_code
				+ ", cata_visit_num=" + cata_visit_num + ", cata_download_num=" + cata_download_num
				+ ", total_apply_count=" + total_apply_count + ", total_visits_count=" + total_visits_count
				+ ", update_time=" + update_time + ", org_name_short=" + org_name_short + "]";
	}
	
	
}
