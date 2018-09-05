package com.sdyy.springboot.bgt.bgt_visual_boot.model.Uias;

import java.io.Serializable;

/**
 * 大汉——统一身份认证
 * stats_total
 * 统计法人
 * @author PPF
 *
 */
public class QueryByTotal implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Integer authWay;
	private Integer sysAccess;
	private Integer userLogin;
	private Integer userTotal;
	private Integer corpTotal;
	public Integer getAuthWay() {
		return authWay;
	}
	public void setAuthWay(Integer authWay) {
		this.authWay = authWay;
	}
	public Integer getSysAccess() {
		return sysAccess;
	}
	public void setSysAccess(Integer sysAccess) {
		this.sysAccess = sysAccess;
	}
	public Integer getUserLogin() {
		return userLogin;
	}
	public void setUserLogin(Integer userLogin) {
		this.userLogin = userLogin;
	}
	public Integer getUserTotal() {
		return userTotal;
	}
	public void setUserTotal(Integer userTotal) {
		this.userTotal = userTotal;
	}
	public Integer getCorpTotal() {
		return corpTotal;
	}
	public void setCorpTotal(Integer corpTotal) {
		this.corpTotal = corpTotal;
	}
	public QueryByTotal(Integer authWay, Integer sysAccess, Integer userLogin, Integer userTotal, Integer corpTotal) {
		super();
		this.authWay = authWay;
		this.sysAccess = sysAccess;
		this.userLogin = userLogin;
		this.userTotal = userTotal;
		this.corpTotal = corpTotal;
	}
	
	
}
