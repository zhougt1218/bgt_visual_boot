package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach;

import java.sql.Timestamp;

/**
 * 查询trs_basicdata表
 * @author Lozebra
 *
 */
public class QueryByArticle {
	private Integer id;
	private String article_title;
	private String view_num;
	private String dispatch_site;
	private String article_url;
	private String city_name;
	private Timestamp update_time;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getArticle_title() {
		return article_title;
	}
	public void setArticle_title(String article_title) {
		this.article_title = article_title;
	}
	public String getView_num() {
		return view_num;
	}
	public void setView_num(String view_num) {
		this.view_num = view_num;
	}
	public String getDispatch_site() {
		return dispatch_site;
	}
	public void setDispatch_site(String dispatch_site) {
		this.dispatch_site = dispatch_site;
	}
	public String getArticle_url() {
		return article_url;
	}
	public void setArticle_url(String article_url) {
		this.article_url = article_url;
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
		return "QueryByArticle [id=" + id + ", article_title=" + article_title + ", view_num=" + view_num
				+ ", dispatch_site=" + dispatch_site + ", article_url=" + article_url + ", city_name=" + city_name
				+ ", update_time=" + update_time + "]";
	}
	public QueryByArticle(Integer id, String article_title, String view_num, String dispatch_site, String article_url,
			String city_name, Timestamp update_time) {
		super();
		this.id = id;
		this.article_title = article_title;
		this.view_num = view_num;
		this.dispatch_site = dispatch_site;
		this.article_url = article_url;
		this.city_name = city_name;
		this.update_time = update_time;
	}
	public QueryByArticle() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}
