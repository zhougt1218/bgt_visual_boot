package com.sdyy.springboot.bgt.bgt_visual_boot.model.Mail;

/**
 * mail_t_zs_count
 * @author Lozebra
 *
 */
public class QueryByZsCount {

	private Integer normal_count;
	private Integer reject_count;
	private Integer virus_count;
	private Integer spam_count;
	private String log_time;
	public Integer getNormal_count() {
		return normal_count;
	}
	public void setNormal_count(Integer normal_count) {
		this.normal_count = normal_count;
	}
	public Integer getReject_count() {
		return reject_count;
	}
	public void setReject_count(Integer reject_count) {
		this.reject_count = reject_count;
	}
	public Integer getVirus_count() {
		return virus_count;
	}
	public void setVirus_count(Integer virus_count) {
		this.virus_count = virus_count;
	}
	public Integer getSpam_count() {
		return spam_count;
	}
	public void setSpam_count(Integer spam_count) {
		this.spam_count = spam_count;
	}
	public String getLog_time() {
		return log_time;
	}
	public void setLog_time(String log_time) {
		this.log_time = log_time;
	}
	@Override
	public String toString() {
		return "QueryByZsCount [normal_count=" + normal_count + ", reject_count=" + reject_count + ", virus_count="
				+ virus_count + ", spam_count=" + spam_count + ", log_time=" + log_time + "]";
	}
	public QueryByZsCount() {
		super();
		// TODO Auto-generated constructor stub
	}
	public QueryByZsCount(Integer normal_count, Integer reject_count, Integer virus_count, Integer spam_count,
			String log_time) {
		super();
		this.normal_count = normal_count;
		this.reject_count = reject_count;
		this.virus_count = virus_count;
		this.spam_count = spam_count;
		this.log_time = log_time;
	}
	
	
	
}
