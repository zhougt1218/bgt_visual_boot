package com.sdyy.springboot.bgt.bgt_visual_boot.model.OpenData;

import java.io.Serializable;

/**
 * 获取网站运行情况信息
 * From open_data_daily_statistic
 * @author PPF
 *
 */
public class QueryByDaily implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String update_time;
	private Integer visit_count_sum;
	private Integer visit_number_sum;
	private Integer login_count_sum;
	private Integer login_user_count_sum;
	private Integer download_count_sum;
	private Integer download_user_count_sum;
	private Integer service_call_count_sum;
	private Integer register_count_sum;
	public String getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(String update_time) {
		this.update_time = update_time;
	}
	public Integer getVisit_count_sum() {
		return visit_count_sum;
	}
	public void setVisit_count_sum(Integer visit_count_sum) {
		this.visit_count_sum = visit_count_sum;
	}
	public Integer getVisit_number_sum() {
		return visit_number_sum;
	}
	public void setVisit_number_sum(Integer visit_number_sum) {
		this.visit_number_sum = visit_number_sum;
	}
	public Integer getLogin_count_sum() {
		return login_count_sum;
	}
	public void setLogin_count_sum(Integer login_count_sum) {
		this.login_count_sum = login_count_sum;
	}
	public Integer getLogin_user_count_sum() {
		return login_user_count_sum;
	}
	public void setLogin_user_count_sum(Integer login_user_count_sum) {
		this.login_user_count_sum = login_user_count_sum;
	}
	public Integer getDownload_count_sum() {
		return download_count_sum;
	}
	public void setDownload_count_sum(Integer download_count_sum) {
		this.download_count_sum = download_count_sum;
	}
	public Integer getDownload_user_count_sum() {
		return download_user_count_sum;
	}
	public void setDownload_user_count_sum(Integer download_user_count_sum) {
		this.download_user_count_sum = download_user_count_sum;
	}
	public Integer getService_call_count_sum() {
		return service_call_count_sum;
	}
	public void setService_call_count_sum(Integer service_call_count_sum) {
		this.service_call_count_sum = service_call_count_sum;
	}
	public Integer getRegister_count_sum() {
		return register_count_sum;
	}
	public void setRegister_count_sum(Integer register_count_sum) {
		this.register_count_sum = register_count_sum;
	}
	@Override
	public String toString() {
		return "QueryByDaily [update_time=" + update_time + ", visit_count_sum=" + visit_count_sum
				+ ", visit_number_sum=" + visit_number_sum + ", login_count_sum=" + login_count_sum
				+ ", login_user_count_sum=" + login_user_count_sum + ", download_count_sum=" + download_count_sum
				+ ", download_user_count_sum=" + download_user_count_sum + ", service_call_count_sum="
				+ service_call_count_sum + ", register_count_sum=" + register_count_sum + "]";
	}
	
}
