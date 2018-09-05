package com.sdyy.springboot.bgt.bgt_visual_boot.model.OpenData;

import java.io.Serializable;
/**
 * 按组织机构获取资源统计信息表
 * from open_data_org_statistics
 * @author PPF
 */
public class QueryByOrg implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String org_code;
	private String org_name;
	private String region_code;
	private Integer provide_cata_amount;
	private Integer provide_data_amount;
	private Integer provide_file_amount;
	private Integer provide_api_amount;
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
	public String getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(String update_time) {
		this.update_time = update_time;
	}
	@Override
	public String toString() {
		return "OpenData [org_code=" + org_code + ", org_name=" + org_name + ", region_code=" + region_code
				+ ", provide_cata_amount=" + provide_cata_amount + ", provide_data_amount=" + provide_data_amount
				+ ", provide_file_amount=" + provide_file_amount + ", provide_api_amount=" + provide_api_amount
				+ ", update_time=" + update_time + "]";
	}
	
	
}
