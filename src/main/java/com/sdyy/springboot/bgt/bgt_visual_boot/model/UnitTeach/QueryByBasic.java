package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach;

import java.sql.Timestamp;

/**
 * 查询trs_basicdata表
 * @author Lozebra
 *
 */
public class QueryByBasic {
	private Integer id;
	private String web_num;
	private String manager_num;
	private String chnls_num;
	private String xinxigk_num;
	private String city_name;
	private Timestamp update_time;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getWeb_num() {
		return web_num;
	}
	public void setWeb_num(String web_num) {
		this.web_num = web_num;
	}
	public String getManager_num() {
		return manager_num;
	}
	public void setManager_num(String manager_num) {
		this.manager_num = manager_num;
	}
	public String getChnls_num() {
		return chnls_num;
	}
	public void setChnls_num(String chnls_num) {
		this.chnls_num = chnls_num;
	}
	public String getXinxigk_num() {
		return xinxigk_num;
	}
	public void setXinxigk_num(String xinxigk_num) {
		this.xinxigk_num = xinxigk_num;
	}
	public String getCity_name() {
		return city_name;
	}
	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}
	public Timestamp getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(Timestamp update_time) {
		this.update_time = update_time;
	}
	@Override
	public String toString() {
		return "QueryByBasic [id=" + id + ", web_num=" + web_num + ", manager_num=" + manager_num + ", chnls_num="
				+ chnls_num + ", xinxigk_num=" + xinxigk_num + ", city_name=" + city_name + ", update_time="
				+ update_time + "]";
	}
	public QueryByBasic(Integer id, String web_num, String manager_num, String chnls_num, String xinxigk_num,
			String city_name, Timestamp update_time) {
		super();
		this.id = id;
		this.web_num = web_num;
		this.manager_num = manager_num;
		this.chnls_num = chnls_num;
		this.xinxigk_num = xinxigk_num;
		this.city_name = city_name;
		this.update_time = update_time;
	}
	
	
	
}
