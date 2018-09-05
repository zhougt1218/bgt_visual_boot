package com.sdyy.springboot.bgt.bgt_visual_boot.model.Uias;

import java.io.Serializable;

/**
 * 大汉——统一身份认证
 * stat_auth_province
 * @author PPF
 *
 */
public class QueryByProvince implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String province;
	private Integer auth_num;
	private String update_time;
	public String getProvince() {
		return province;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public Integer getAuth_num() {
		return auth_num;
	}
	public void setAuth_num(Integer auth_num) {
		this.auth_num = auth_num;
	}
	public String getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(String update_time) {
		this.update_time = update_time;
	}
	@Override
	public String toString() {
		return "QueryByProvince [province=" + province + ", auth_num=" + auth_num + ", update_time=" + update_time
				+ "]";
	}
	public QueryByProvince(String province, Integer auth_num, String update_time) {
		super();
		this.province = province;
		this.auth_num = auth_num;
		this.update_time = update_time;
	}
	public QueryByProvince() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
