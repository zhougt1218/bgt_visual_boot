package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan;


/**
 * 查询trs_basicdata表
 * @author Lozebra
 *
 */
public class QueryByPopWeb {
	private String c_date;
	private Integer i_rank;
	private Integer i_webid;
	private String vc_webname;
	private String vc_hitsum;
	public String getC_date() {
		return c_date;
	}
	public void setC_date(String c_date) {
		this.c_date = c_date;
	}
	public Integer getI_rank() {
		return i_rank;
	}
	public void setI_rank(Integer i_rank) {
		this.i_rank = i_rank;
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
	public String getVc_hitsum() {
		return vc_hitsum;
	}
	public void setVc_hitsum(String vc_hitsum) {
		this.vc_hitsum = vc_hitsum;
	}
	@Override
	public String toString() {
		return "QueryByPopWeb [c_date=" + c_date + ", i_rank=" + i_rank + ", i_webid=" + i_webid + ", vc_webname="
				+ vc_webname + ", vc_hitsum=" + vc_hitsum + "]";
	}
	public QueryByPopWeb(String c_date, Integer i_rank, Integer i_webid, String vc_webname, String vc_hitsum) {
		super();
		this.c_date = c_date;
		this.i_rank = i_rank;
		this.i_webid = i_webid;
		this.vc_webname = vc_webname;
		this.vc_hitsum = vc_hitsum;
	}
	public QueryByPopWeb() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
}
