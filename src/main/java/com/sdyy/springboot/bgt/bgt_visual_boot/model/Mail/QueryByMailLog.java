package com.sdyy.springboot.bgt.bgt_visual_boot.model.Mail;

/**
 * statistics_mail_log
 * @author Lozebra
 *
 */
public class QueryByMailLog {
	private String date;
	private String domain_name;
	private Long send_size;
	private Integer send_num;
	private Integer receive_num;
	private Long receive_size;
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getDomain_name() {
		return domain_name;
	}
	public void setDomain_name(String domain_name) {
		this.domain_name = domain_name;
	}
	public Long getSend_size() {
		return send_size;
	}
	public void setSend_size(Long send_size) {
		this.send_size = send_size;
	}
	public Integer getSend_num() {
		return send_num;
	}
	public void setSend_num(Integer send_num) {
		this.send_num = send_num;
	}
	public Integer getReceive_num() {
		return receive_num;
	}
	public void setReceive_num(Integer receive_num) {
		this.receive_num = receive_num;
	}
	public Long getReceive_size() {
		return receive_size;
	}
	public void setReceive_size(Long receive_size) {
		this.receive_size = receive_size;
	}
	@Override
	public String toString() {
		return "QueryByMailLog [date=" + date + ", domain_name=" + domain_name + ", send_size=" + send_size
				+ ", send_num=" + send_num + ", receive_num=" + receive_num + ", receive_size=" + receive_size + "]";
	}
	public QueryByMailLog(String date, String domain_name, Long send_size, Integer send_num, Integer receive_num,
			Long receive_size) {
		super();
		this.date = date;
		this.domain_name = domain_name;
		this.send_size = send_size;
		this.send_num = send_num;
		this.receive_num = receive_num;
		this.receive_size = receive_size;
	}
	public QueryByMailLog() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
}
