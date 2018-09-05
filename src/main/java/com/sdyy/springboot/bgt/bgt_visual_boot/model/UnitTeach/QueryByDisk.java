package com.sdyy.springboot.bgt.bgt_visual_boot.model.UnitTeach;

import java.sql.Timestamp;
import java.util.Date;

/**
 * 查询trs_diskdata表
 * @author Lozebra
 *
 */
public class QueryByDisk {
	private Integer id;
	private String database_num;
	private String video_num;
	private String file_num;
	private String city_name;
	private Timestamp update_time;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getDatabase_num() {
		return database_num;
	}
	public void setDatabase_num(String database_num) {
		this.database_num = database_num;
	}
	public String getVideo_num() {
		return video_num;
	}
	public void setVideo_num(String video_num) {
		this.video_num = video_num;
	}
	public String getFile_num() {
		return file_num;
	}
	public void setFile_num(String file_num) {
		this.file_num = file_num;
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
		return "QueryByDisk [id=" + id + ", database_num=" + database_num + ", video_num=" + video_num + ", file_num="
				+ file_num + ", city_name=" + city_name + ", update_time=" + update_time + "]";
	}
	public QueryByDisk(Integer id, String database_num, String video_num, String file_num, String city_name,
			Timestamp update_time) {
		super();
		this.id = id;
		this.database_num = database_num;
		this.video_num = video_num;
		this.file_num = file_num;
		this.city_name = city_name;
		this.update_time = update_time;
	}
	
}
