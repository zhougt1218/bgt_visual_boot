package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach;

import java.sql.Timestamp;

/**
 * 查询trs_zhanbandata表
 * @author Lozebra
 *
 */
public class QueryByZhanban {
	private Integer id;
	private String loginnum;
	private String managernum;
	private String usernum;
	private String sitenum;
	private String datanum;
	private String chnlsnum;
	private String xinxigknum;
	private String hudongnum;
	private String hotsitenum;
	private String hotchnlnum;
	private String clicksnum;
	private Timestamp crtime;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getLoginnum() {
		return loginnum;
	}
	public void setLoginnum(String loginnum) {
		this.loginnum = loginnum;
	}
	public String getManagernum() {
		return managernum;
	}
	public void setManagernum(String managernum) {
		this.managernum = managernum;
	}
	public String getUsernum() {
		return usernum;
	}
	public void setUsernum(String usernum) {
		this.usernum = usernum;
	}
	public String getSitenum() {
		return sitenum;
	}
	public void setSitenum(String sitenum) {
		this.sitenum = sitenum;
	}
	public String getDatanum() {
		return datanum;
	}
	public void setDatanum(String datanum) {
		this.datanum = datanum;
	}
	public String getChnlsnum() {
		return chnlsnum;
	}
	public void setChnlsnum(String chnlsnum) {
		this.chnlsnum = chnlsnum;
	}
	public String getXinxigknum() {
		return xinxigknum;
	}
	public void setXinxigknum(String xinxigknum) {
		this.xinxigknum = xinxigknum;
	}
	public String getHudongnum() {
		return hudongnum;
	}
	public void setHudongnum(String hudongnum) {
		this.hudongnum = hudongnum;
	}
	public String getHotsitenum() {
		return hotsitenum;
	}
	public void setHotsitenum(String hotsitenum) {
		this.hotsitenum = hotsitenum;
	}
	public String getHotchnlnum() {
		return hotchnlnum;
	}
	public void setHotchnlnum(String hotchnlnum) {
		this.hotchnlnum = hotchnlnum;
	}
	public String getClicksnum() {
		return clicksnum;
	}
	public void setClicksnum(String clicksnum) {
		this.clicksnum = clicksnum;
	}
	public Timestamp getCrtime() {
		return crtime;
	}
	public void setCrtime(Timestamp crtime) {
		this.crtime = crtime;
	}
	@Override
	public String toString() {
		return "QueryByZhanban [id=" + id + ", loginnum=" + loginnum + ", managernum=" + managernum + ", usernum="
				+ usernum + ", sitenum=" + sitenum + ", datanum=" + datanum + ", chnlsnum=" + chnlsnum + ", xinxigknum="
				+ xinxigknum + ", hudongnum=" + hudongnum + ", hotsitenum=" + hotsitenum + ", hotchnlnum=" + hotchnlnum
				+ ", clicksnum=" + clicksnum + ", crtime=" + crtime + "]";
	}
	public QueryByZhanban(Integer id, String loginnum, String managernum, String usernum, String sitenum,
			String datanum, String chnlsnum, String xinxigknum, String hudongnum, String hotsitenum, String hotchnlnum,
			String clicksnum, Timestamp crtime) {
		super();
		this.id = id;
		this.loginnum = loginnum;
		this.managernum = managernum;
		this.usernum = usernum;
		this.sitenum = sitenum;
		this.datanum = datanum;
		this.chnlsnum = chnlsnum;
		this.xinxigknum = xinxigknum;
		this.hudongnum = hudongnum;
		this.hotsitenum = hotsitenum;
		this.hotchnlnum = hotchnlnum;
		this.clicksnum = clicksnum;
		this.crtime = crtime;
	}
	public QueryByZhanban() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
