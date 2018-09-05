package com.sdyy.springboot.bgt.bgt_visual_boot.model.OpenData;

import java.io.Serializable;

/**
 * 周热门目录情况
 * from open_data_week_hot_catalog_api
 * from open_data_week_hot_catalog_download
 * from open_data_week_hot_catalog_view
 * @author PPF
 *
 */
public class QueryByWeekCata implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String org_code;
	private String org_name;
	private String cata_title;
	private Integer download_count;
	private Integer api_apply_count;
	private Integer cata_view_count;
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
	public String getCata_title() {
		return cata_title;
	}
	public void setCata_title(String cata_title) {
		this.cata_title = cata_title;
	}
	public Integer getDownload_count() {
		return download_count;
	}
	public void setDownload_count(Integer download_count) {
		this.download_count = download_count;
	}
	public Integer getApi_apply_count() {
		return api_apply_count;
	}
	public void setApi_apply_count(Integer api_apply_count) {
		this.api_apply_count = api_apply_count;
	}
	public Integer getCata_view_count() {
		return cata_view_count;
	}
	public void setCata_view_count(Integer cata_view_count) {
		this.cata_view_count = cata_view_count;
	}
	public String getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(String update_time) {
		this.update_time = update_time;
	}
	@Override
	public String toString() {
		return "QueryByWeekCataDownload [org_code=" + org_code + ", org_name=" + org_name + ", cata_title=" + cata_title
				+ ", download_count=" + download_count + ", api_apply_count=" + api_apply_count + ", cata_view_count="
				+ cata_view_count + ", update_time=" + update_time + "]";
	}
	
	
	
}
