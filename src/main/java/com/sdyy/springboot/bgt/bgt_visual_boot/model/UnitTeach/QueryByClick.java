package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach;

import java.sql.Timestamp;

/**
 * 查询trs_basicdata表
 * @author Lozebra
 *
 */
public class QueryByClick {
	private Integer id;
	private String click_num;
	private String city_name;
	private Timestamp update_time;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getClick_num() {
		return click_num;
	}
	public void setClick_num(String click_num) {
		this.click_num = click_num;
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
		return "QueryByClick [id=" + id + ", click_num=" + click_num + ", city_name=" + city_name + ", update_time="
				+ update_time + "]";
	}
	public QueryByClick(Integer id, String click_num, String city_name, Timestamp update_time) {
		super();
		this.id = id;
		this.click_num = click_num;
		this.city_name = city_name;
		this.update_time = update_time;
	}
	public QueryByClick() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
