package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan;


/**
 * 查询trs_basicdata表
 * @author Lozebra
 *
 */
public class QueryByPopArticle {
	private String c_date;
	private String vc_title;
	private String vc_url;
	private Integer vc_hits;
	public String getC_date() {
		return c_date;
	}
	public void setC_date(String c_date) {
		this.c_date = c_date;
	}
	public String getVc_title() {
		return vc_title;
	}
	public void setVc_title(String vc_title) {
		this.vc_title = vc_title;
	}
	public String getVc_url() {
		return vc_url;
	}
	public void setVc_url(String vc_url) {
		this.vc_url = vc_url;
	}
	public Integer getVc_hits() {
		return vc_hits;
	}
	public void setVc_hits(Integer vc_hits) {
		this.vc_hits = vc_hits;
	}
	@Override
	public String toString() {
		return "QueryByPopArticle [c_date=" + c_date + ", vc_title=" + vc_title + ", vc_url=" + vc_url + ", vc_hits="
				+ vc_hits + "]";
	}
	public QueryByPopArticle() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
