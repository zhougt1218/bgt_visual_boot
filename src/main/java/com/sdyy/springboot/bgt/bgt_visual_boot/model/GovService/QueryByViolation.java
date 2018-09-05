package com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService;

import java.io.Serializable;

/**
 * 违规情况统计
 * @author PPF
 *
 */
public class QueryByViolation implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String org_code;
	private String org_name;
	private String region_code;
	private Integer yellow_amount;
	private Integer red_amount;
	private Integer serious_amount;
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
	public Integer getYellow_amount() {
		return yellow_amount;
	}
	public void setYellow_amount(Integer yellow_amount) {
		this.yellow_amount = yellow_amount;
	}
	public Integer getRed_amount() {
		return red_amount;
	}
	public void setRed_amount(Integer red_amount) {
		this.red_amount = red_amount;
	}
	public Integer getSerious_amount() {
		return serious_amount;
	}
	public void setSerious_amount(Integer serious_amount) {
		this.serious_amount = serious_amount;
	}
	public String getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(String update_time) {
		this.update_time = update_time;
	}
	@Override
	public String toString() {
		return "QueryByViolation [org_code=" + org_code + ", org_name=" + org_name + ", region_code=" + region_code
				+ ", yellow_amount=" + yellow_amount + ", red_amount=" + red_amount + ", serious_amount="
				+ serious_amount + ", update_time=" + update_time + "]";
	}
	
	
	
}
