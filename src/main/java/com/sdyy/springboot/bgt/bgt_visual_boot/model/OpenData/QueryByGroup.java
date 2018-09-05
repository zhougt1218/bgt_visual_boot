package com.sdyy.springboot.bgt.bgt_visual_boot.model.OpenData;

import java.io.Serializable;
/**
 * 按主题获取统计信息
 * From open_data_group_statistics
 * @author PPF
 */
public class QueryByGroup implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String group_code;
	private String group_name;
	private Integer provide_cata_amount;
	private Integer provide_data_amount;
	private Integer provide_file_amount;
	private Integer provide_api_amount;
	private String update_time;
	public String getGroup_code() {
		return group_code;
	}
	public void setGroup_code(String group_code) {
		this.group_code = group_code;
	}
	public String getGroup_name() {
		return group_name;
	}
	public void setGroup_name(String group_name) {
		this.group_name = group_name;
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
		return "QueryByGroup [group_code=" + group_code + ", group_name=" + group_name + ", provide_cata_amount="
				+ provide_cata_amount + ", provide_data_amount=" + provide_data_amount + ", provide_file_amount="
				+ provide_file_amount + ", provide_api_amount=" + provide_api_amount + ", update_time=" + update_time
				+ "]";
	}
	
	
}
