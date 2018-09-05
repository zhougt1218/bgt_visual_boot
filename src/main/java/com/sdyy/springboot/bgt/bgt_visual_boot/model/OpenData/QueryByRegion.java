package com.sdyy.springboot.bgt.bgt_visual_boot.model.OpenData;

import java.io.Serializable;

/**
 * 按地市获取资源统计信息 
 * from open_data_region_statistics
 * @author PPF
 *
 */
public class QueryByRegion implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String region_code;
	private String region_name;
	private Integer provide_cata_amount;
	private Integer provide_data_amount;
	private Integer provide_file_amount;
	private Integer provide_api_amount;
	private Integer app_count;
	private String update_time;
	public String getRegion_code() {
		return region_code;
	}
	public void setRegion_code(String region_code) {
		this.region_code = region_code;
	}
	public String getRegion_name() {
		return region_name;
	}
	public void setRegion_name(String region_name) {
		this.region_name = region_name;
	}
	public Integer getProvide_cata_amount() {
		return provide_cata_amount;
	}
	public void setProvide_cata_amount(Integer provide_cata_amount) {
		this.provide_cata_amount = provide_cata_amount;
	}
	public Integer getProvide_data_amount() {
		return provide_data_amount;
	}
	public void setProvide_data_amount(Integer provide_data_amount) {
		this.provide_data_amount = provide_data_amount;
	}
	public Integer getProvide_file_amount() {
		return provide_file_amount;
	}
	public void setProvide_file_amount(Integer provide_file_amount) {
		this.provide_file_amount = provide_file_amount;
	}
	public Integer getProvide_api_amount() {
		return provide_api_amount;
	}
	public void setProvide_api_amount(Integer provide_api_amount) {
		this.provide_api_amount = provide_api_amount;
	}
	public Integer getApp_count() {
		return app_count;
	}
	public void setApp_count(Integer app_count) {
		this.app_count = app_count;
	}
	public String getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(String update_time) {
		this.update_time = update_time;
	}
	@Override
	public String toString() {
		return "QueryByRegion [region_code=" + region_code + ", region_name=" + region_name + ", provide_cata_amount="
				+ provide_cata_amount + ", provide_data_amount=" + provide_data_amount + ", provide_file_amount="
				+ provide_file_amount + ", provide_api_amount=" + provide_api_amount + ", app_count=" + app_count
				+ ", update_time=" + update_time + "]";
	}
	public QueryByRegion(String region_code, String region_name, Integer provide_cata_amount,
			Integer provide_data_amount, Integer provide_file_amount, Integer provide_api_amount, Integer app_count,
			String update_time) {
		super();
		this.region_code = region_code;
		this.region_name = region_name;
		this.provide_cata_amount = provide_cata_amount;
		this.provide_data_amount = provide_data_amount;
		this.provide_file_amount = provide_file_amount;
		this.provide_api_amount = provide_api_amount;
		this.app_count = app_count;
		this.update_time = update_time;
	}
	public QueryByRegion() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
