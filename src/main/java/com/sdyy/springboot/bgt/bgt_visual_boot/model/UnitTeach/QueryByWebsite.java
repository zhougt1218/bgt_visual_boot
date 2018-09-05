package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach;

import java.sql.Timestamp;

/**
 * 查询trs_articletop表
 * @author Lozebra
 *
 */
public class QueryByWebsite {
	private Integer id;
	private String web_name;
	private String view_num;
	private String dept_name;
	private String city_name;
	private Timestamp update_time;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getWeb_name() {
		return web_name;
	}
	public void setWeb_name(String web_name) {
		this.web_name = web_name;
	}
	public String getView_num() {
		return view_num;
	}
	public void setView_num(String view_num) {
		this.view_num = view_num;
	}
	public String getDept_name() {
		return dept_name;
	}
	public void setDept_name(String dept_name) {
		this.dept_name = dept_name;
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
		return "QueryByWebsite [id=" + id + ", web_name=" + web_name + ", view_num=" + view_num + ", dept_name="
				+ dept_name + ", city_name=" + city_name + ", update_time=" + update_time + "]";
	}
	public QueryByWebsite(Integer id, String web_name, String view_num, String dept_name, String city_name,
			Timestamp update_time) {
		super();
		this.id = id;
		this.web_name = web_name;
		this.view_num = view_num;
		this.dept_name = dept_name;
		this.city_name = city_name;
		this.update_time = update_time;
	}
	public QueryByWebsite() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
