package com.sdyy.springboot.bgt.bgt_visual_boot.model.GovService;

import java.io.Serializable;

/**
 * 热门事项分析
 * @author PPF
 *
 */
public class QueryByAnalysis implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String org_code;
	private String org_name;
	private String region_code;
	private Integer licensing_handle_amount;
	private Integer service_handle_amount;
	private Integer punish_handle_amount;
	private Integer over_handle_amount;
	private Integer not_handle_amount;
	private Integer on_handle_amount;
	private Integer fee_handle_amount;
	private Integer net_apply_amount;
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
	public Integer getLicensing_handle_amount() {
		return licensing_handle_amount;
	}
	public void setLicensing_handle_amount(Integer licensing_handle_amount) {
		this.licensing_handle_amount = licensing_handle_amount;
	}
	public Integer getService_handle_amount() {
		return service_handle_amount;
	}
	public void setService_handle_amount(Integer service_handle_amount) {
		this.service_handle_amount = service_handle_amount;
	}
	public Integer getPunish_handle_amount() {
		return punish_handle_amount;
	}
	public void setPunish_handle_amount(Integer punish_handle_amount) {
		this.punish_handle_amount = punish_handle_amount;
	}
	public Integer getOver_handle_amount() {
		return over_handle_amount;
	}
	public void setOver_handle_amount(Integer over_handle_amount) {
		this.over_handle_amount = over_handle_amount;
	}
	public Integer getNot_handle_amount() {
		return not_handle_amount;
	}
	public void setNot_handle_amount(Integer not_handle_amount) {
		this.not_handle_amount = not_handle_amount;
	}
	public Integer getOn_handle_amount() {
		return on_handle_amount;
	}
	public void setOn_handle_amount(Integer on_handle_amount) {
		this.on_handle_amount = on_handle_amount;
	}
	public Integer getFee_handle_amount() {
		return fee_handle_amount;
	}
	public void setFee_handle_amount(Integer fee_handle_amount) {
		this.fee_handle_amount = fee_handle_amount;
	}
	public Integer getNet_apply_amount() {
		return net_apply_amount;
	}
	public void setNet_apply_amount(Integer net_apply_amount) {
		this.net_apply_amount = net_apply_amount;
	}
	public String getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(String update_time) {
		this.update_time = update_time;
	}
	@Override
	public String toString() {
		return "QueryByDept [org_code=" + org_code + ", org_name=" + org_name + ", region_code=" + region_code
				+ ", licensing_handle_amount=" + licensing_handle_amount + ", service_handle_amount="
				+ service_handle_amount + ", punish_handle_amount=" + punish_handle_amount + ", over_handle_amount="
				+ over_handle_amount + ", not_handle_amount=" + not_handle_amount + ", on_handle_amount="
				+ on_handle_amount + ", fee_handle_amount=" + fee_handle_amount + ", net_apply_amount="
				+ net_apply_amount + ", update_time=" + update_time + "]";
	}
	
	
}
