package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan;


/**
 * 查询trs_basicdata表
 * @author Lozebra
 *
 */
public class QueryByDailyUserStat {
	private String c_date;
	private Integer c_dailydata;
	public String getC_date() {
		return c_date;
	}
	public void setC_date(String c_date) {
		this.c_date = c_date;
	}
	public Integer getC_dailydata() {
		return c_dailydata;
	}
	public void setC_dailydata(Integer c_dailydata) {
		this.c_dailydata = c_dailydata;
	}
	public QueryByDailyUserStat() {
		super();
		// TODO Auto-generated constructor stub
	}
	public QueryByDailyUserStat(String c_date, Integer c_dailydata) {
		super();
		this.c_date = c_date;
		this.c_dailydata = c_dailydata;
	}
	@Override
	public String toString() {
		return "QueryByArticle [c_date=" + c_date + ", c_dailydata=" + c_dailydata + "]";
	}
	
	
	
}
