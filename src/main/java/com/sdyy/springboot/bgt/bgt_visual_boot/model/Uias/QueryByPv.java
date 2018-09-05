package com.sdyy.springboot.bgt.bgt_visual_boot.model.Uias;

public class QueryByPv {
	private String statsDate;
	private Integer pv;
	private Integer uv;
	public String getStatsDate() {
		return statsDate;
	}
	public void setStatsDate(String statsDate) {
		this.statsDate = statsDate;
	}
	public Integer getPv() {
		return pv;
	}
	public void setPv(Integer pv) {
		this.pv = pv;
	}
	public Integer getUv() {
		return uv;
	}
	public void setUv(Integer uv) {
		this.uv = uv;
	}
	@Override
	public String toString() {
		return "QueryByPv [statsDate=" + statsDate + ", pv=" + pv + ", uv=" + uv + "]";
	}
	public QueryByPv(String statsDate, Integer pv, Integer uv) {
		super();
		this.statsDate = statsDate;
		this.pv = pv;
		this.uv = uv;
	}
	public QueryByPv() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
