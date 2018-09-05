package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan;


/**
 * 查询trs_basicdata表
 * @author Lozebra
 *
 */
public class QueryByWebStat {
	private String c_date;
	private Integer i_webid;
	private String vc_webname;
	private Integer i_infosum;
	private Integer i_colsum;
	public String getC_date() {
		return c_date;
	}
	public void setC_date(String c_date) {
		this.c_date = c_date;
	}
	public Integer getI_webid() {
		return i_webid;
	}
	public void setI_webid(Integer i_webid) {
		this.i_webid = i_webid;
	}
	public String getVc_webname() {
		return vc_webname;
	}
	public void setVc_webname(String vc_webname) {
		this.vc_webname = vc_webname;
	}
	public Integer getI_infosum() {
		return i_infosum;
	}
	public void setI_infosum(Integer i_infosum) {
		this.i_infosum = i_infosum;
	}
	public Integer getI_colsum() {
		return i_colsum;
	}
	public void setI_colsum(Integer i_colsum) {
		this.i_colsum = i_colsum;
	}
	@Override
	public String toString() {
		return "QueryByWebStat [c_date=" + c_date + ", i_webid=" + i_webid + ", vc_webname=" + vc_webname
				+ ", i_infosum=" + i_infosum + ", i_colsum=" + i_colsum + "]";
	}
	public QueryByWebStat(String c_date, Integer i_webid, String vc_webname, Integer i_infosum, Integer i_colsum) {
		super();
		this.c_date = c_date;
		this.i_webid = i_webid;
		this.vc_webname = vc_webname;
		this.i_infosum = i_infosum;
		this.i_colsum = i_colsum;
	}
	public QueryByWebStat() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
