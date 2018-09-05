package com.sdyy.springboot.bgt.bgt_visual_boot.model.Uias;

import java.io.Serializable;

/**
 * 大汉——统一身份认证
 * stats_users
 * 统计法人
 * @author PPF
 *
 */
public class QueryByUser implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String stats_date;
	private Integer regSourcePC;
	private Integer regSourceMob;
	private Integer regWayNormal;
	private Integer regWayAlipay;
	private Integer regWayWeChat;
	private Integer isAuthUser;
	private Integer unAuthUser;
	public String getStats_date() {
		return stats_date;
	}
	public void setStats_date(String stats_date) {
		this.stats_date = stats_date;
	}
	public Integer getRegSourcePC() {
		return regSourcePC;
	}
	public void setRegSourcePC(Integer regSourcePC) {
		this.regSourcePC = regSourcePC;
	}
	public Integer getRegSourceMob() {
		return regSourceMob;
	}
	public void setRegSourceMob(Integer regSourceMob) {
		this.regSourceMob = regSourceMob;
	}
	public Integer getRegWayNormal() {
		return regWayNormal;
	}
	public void setRegWayNormal(Integer regWayNormal) {
		this.regWayNormal = regWayNormal;
	}
	public Integer getRegWayAlipay() {
		return regWayAlipay;
	}
	public void setRegWayAlipay(Integer regWayAlipay) {
		this.regWayAlipay = regWayAlipay;
	}
	public Integer getRegWayWeChat() {
		return regWayWeChat;
	}
	public void setRegWayWeChat(Integer regWayWeChat) {
		this.regWayWeChat = regWayWeChat;
	}
	public Integer getIsAuthUser() {
		return isAuthUser;
	}
	public void setIsAuthUser(Integer isAuthUser) {
		this.isAuthUser = isAuthUser;
	}
	public Integer getUnAuthUser() {
		return unAuthUser;
	}
	public void setUnAuthUser(Integer unAuthUser) {
		this.unAuthUser = unAuthUser;
	}
	@Override
	public String toString() {
		return "QueryByUser [stats_date=" + stats_date + ", regSourcePC=" + regSourcePC + ", regSourceMob="
				+ regSourceMob + ", regWayNormal=" + regWayNormal + ", regWayAlipay=" + regWayAlipay + ", regWayWeChat="
				+ regWayWeChat + ", isAuthUser=" + isAuthUser + ", unAuthUser=" + unAuthUser + "]";
	}
	public QueryByUser(String stats_date, Integer regSourcePC, Integer regSourceMob, Integer regWayNormal,
			Integer regWayAlipay, Integer regWayWeChat, Integer isAuthUser, Integer unAuthUser) {
		super();
		this.stats_date = stats_date;
		this.regSourcePC = regSourcePC;
		this.regSourceMob = regSourceMob;
		this.regWayNormal = regWayNormal;
		this.regWayAlipay = regWayAlipay;
		this.regWayWeChat = regWayWeChat;
		this.isAuthUser = isAuthUser;
		this.unAuthUser = unAuthUser;
	}

	
	
}
