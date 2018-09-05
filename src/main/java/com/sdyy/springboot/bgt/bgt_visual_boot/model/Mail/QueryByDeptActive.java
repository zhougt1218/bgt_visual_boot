package com.sdyy.springboot.bgt.bgt_visual_boot.model.Mail;

public class QueryByDeptActive {
	private String org_name;
	private Integer sum_count;
	private Integer active_count;
	private Double usage_rate;
	public String getOrg_name() {
		return org_name;
	}
	public void setOrg_name(String org_name) {
		this.org_name = org_name;
	}
	public Integer getSum_count() {
		return sum_count;
	}
	public void setSum_count(Integer sum_count) {
		this.sum_count = sum_count;
	}
	public Integer getActive_count() {
		return active_count;
	}
	public void setActive_count(Integer active_count) {
		this.active_count = active_count;
	}
	public Double getUsage_rate() {
		return usage_rate;
	}
	public void setUsage_rate(Double usage_rate) {
		this.usage_rate = usage_rate;
	}
	@Override
	public String toString() {
		return "QueryByDeptActive [org_name=" + org_name + ", sum_count=" + sum_count + ", active_count=" + active_count
				+ ", usage_rate=" + usage_rate + "]";
	}
	public QueryByDeptActive() {
		super();
		// TODO Auto-generated constructor stub
	}
	public QueryByDeptActive(String org_name, Integer sum_count, Integer active_count, Double usage_rate) {
		super();
		this.org_name = org_name;
		this.sum_count = sum_count;
		this.active_count = active_count;
		this.usage_rate = usage_rate;
	}
	
	
}
