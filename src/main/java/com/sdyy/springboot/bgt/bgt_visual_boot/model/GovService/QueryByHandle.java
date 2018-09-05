package com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService;

import java.io.Serializable;

/**
 * 部门办件情况
 * @author PPF
 *
 */
public class QueryByHandle implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String org_code;
	private String org_name;
	private String region_code;
	private Integer admin_licensing_amount;
	private Integer public_service_amount;
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
	public Integer getAdmin_licensing_amount() {
		return admin_licensing_amount;
	}
	public void setAdmin_licensing_amount(Integer admin_licensing_amount) {
		this.admin_licensing_amount = admin_licensing_amount;
	}
	public Integer getPublic_service_amount() {
		return public_service_amount;
	}
	public void setPublic_service_amount(Integer public_service_amount) {
		this.public_service_amount = public_service_amount;
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
				+ ", admin_licensing_amount=" + admin_licensing_amount + ", public_service_amount="
				+ public_service_amount + ", update_time=" + update_time + "]";
	}
	
	
}
