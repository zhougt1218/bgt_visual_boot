package com.sdyy.springboot.bgt.bgt_visual_boot.model.OpenData;

import java.io.Serializable;

/**
 * 获取热门目录信息
 * @author PPF
 *
 */
public class QueryByHotCatalog implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String org_code;
	private String org_name;
	private String cata_title;
	private Integer num;
	public String getOrg_code() {
		return org_code;
	}
	public void setOrg_code(String org_code) {
		this.org_code = org_code;
	}
	public String getOrg_name() {
		return org_name;
	}
	public void setOrg_name(String org_name) {
		this.org_name = org_name;
	}
	public String getCata_title() {
		return cata_title;
	}
	public void setCata_title(String cata_title) {
		this.cata_title = cata_title;
	}
	public Integer getNum() {
		return num;
	}
	public void setNum(Integer num) {
		this.num = num;
	}
	@Override
	public String toString() {
		return "QueryByHotCatalog [org_code=" + org_code + ", org_name=" + org_name + ", cata_title=" + cata_title
				+ ", num=" + num + "]";
	}
	
}
