package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach_dahan;


/**
 * 查询trs_basicdata表
 * @author Lozebra
 *
 */
public class QueryByStat {
	private String c_date;
	private Integer i_webs;
	private Integer i_users;
	private Integer i_citywebs;
	private Integer i_xxgkinfos;
	private Integer i_columns;
	private Integer i_sininfos;
	private Integer i_mulinfos;
	private Integer i_cusinfos;
	private Integer i_metainfos;
	public String getC_date() {
		return c_date;
	}
	public void setC_date(String c_date) {
		this.c_date = c_date;
	}
	public Integer getI_webs() {
		return i_webs;
	}
	public void setI_webs(Integer i_webs) {
		this.i_webs = i_webs;
	}
	public Integer getI_users() {
		return i_users;
	}
	public void setI_users(Integer i_users) {
		this.i_users = i_users;
	}
	public Integer getI_citywebs() {
		return i_citywebs;
	}
	public void setI_citywebs(Integer i_citywebs) {
		this.i_citywebs = i_citywebs;
	}
	public Integer getI_xxgkinfos() {
		return i_xxgkinfos;
	}
	public void setI_xxgkinfos(Integer i_xxgkinfos) {
		this.i_xxgkinfos = i_xxgkinfos;
	}
	public Integer getI_columns() {
		return i_columns;
	}
	public void setI_columns(Integer i_columns) {
		this.i_columns = i_columns;
	}
	public Integer getI_sininfos() {
		return i_sininfos;
	}
	public void setI_sininfos(Integer i_sininfos) {
		this.i_sininfos = i_sininfos;
	}
	public Integer getI_mulinfos() {
		return i_mulinfos;
	}
	public void setI_mulinfos(Integer i_mulinfos) {
		this.i_mulinfos = i_mulinfos;
	}
	public Integer getI_cusinfos() {
		return i_cusinfos;
	}
	public void setI_cusinfos(Integer i_cusinfos) {
		this.i_cusinfos = i_cusinfos;
	}
	public Integer getI_metainfos() {
		return i_metainfos;
	}
	public void setI_metainfos(Integer i_metainfos) {
		this.i_metainfos = i_metainfos;
	}
	@Override
	public String toString() {
		return "QueryByStat [c_date=" + c_date + ", i_webs=" + i_webs + ", i_users=" + i_users + ", i_citywebs="
				+ i_citywebs + ", i_xxgkinfos=" + i_xxgkinfos + ", i_columns=" + i_columns + ", i_sininfos="
				+ i_sininfos + ", i_mulinfos=" + i_mulinfos + ", i_cusinfos=" + i_cusinfos + ", i_metainfos="
				+ i_metainfos + "]";
	}
	public QueryByStat(String c_date, Integer i_webs, Integer i_users, Integer i_citywebs, Integer i_xxgkinfos,
			Integer i_columns, Integer i_sininfos, Integer i_mulinfos, Integer i_cusinfos, Integer i_metainfos) {
		super();
		this.c_date = c_date;
		this.i_webs = i_webs;
		this.i_users = i_users;
		this.i_citywebs = i_citywebs;
		this.i_xxgkinfos = i_xxgkinfos;
		this.i_columns = i_columns;
		this.i_sininfos = i_sininfos;
		this.i_mulinfos = i_mulinfos;
		this.i_cusinfos = i_cusinfos;
		this.i_metainfos = i_metainfos;
	}
	public QueryByStat() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
}
