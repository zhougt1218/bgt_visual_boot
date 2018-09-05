package com.sdyy.springboot.bgt.bgt_visual_boot.model.Mail;

/**
 * statistics_user_log
 * @author Lozebra
 *
 */
public class QueryByUserLog {
	private String date;
	private Integer user_num;
	private Integer group_num;
	private Integer manager_num;
	private Integer logins_num;
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Integer getUser_num() {
		return user_num;
	}
	public void setUser_num(Integer user_num) {
		this.user_num = user_num;
	}
	public Integer getGroup_num() {
		return group_num;
	}
	public void setGroup_num(Integer group_num) {
		this.group_num = group_num;
	}
	public Integer getManager_num() {
		return manager_num;
	}
	public void setManager_num(Integer manager_num) {
		this.manager_num = manager_num;
	}
	public Integer getLogins_num() {
		return logins_num;
	}
	public void setLogins_num(Integer logins_num) {
		this.logins_num = logins_num;
	}
	@Override
	public String toString() {
		return "QueryByUserLog [date=" + date + ", user_num=" + user_num + ", group_num=" + group_num + ", manager_num="
				+ manager_num + ", logins_num=" + logins_num + "]";
	}
	public QueryByUserLog(String date, Integer user_num, Integer group_num, Integer manager_num, Integer logins_num) {
		super();
		this.date = date;
		this.user_num = user_num;
		this.group_num = group_num;
		this.manager_num = manager_num;
		this.logins_num = logins_num;
	}
	public QueryByUserLog() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
}
