package com.sdyy.springboot.bgt.bgt_visual_boot.model.Mail;

public class QueryBySendReceive {
	private String update_time;
	private Integer send_count;
	private String send_flow;
	private Integer receive_count;
	private String receive_flow;
	@Override
	public String toString() {
		return "QueryBySendReceive [update_time=" + update_time + ", send_count=" + send_count + ", send_flow="
				+ send_flow + ", receive_count=" + receive_count + ", receive_flow=" + receive_flow + "]";
	}
	public String getUpdate_time() {
		return update_time;
	}
	public void setUpdate_time(String update_time) {
		this.update_time = update_time;
	}
	public Integer getSend_count() {
		return send_count;
	}
	public void setSend_count(Integer send_count) {
		this.send_count = send_count;
	}
	public String getSend_flow() {
		return send_flow;
	}
	public void setSend_flow(String send_flow) {
		this.send_flow = send_flow;
	}
	public Integer getReceive_count() {
		return receive_count;
	}
	public void setReceive_count(Integer receive_count) {
		this.receive_count = receive_count;
	}
	public String getReceive_flow() {
		return receive_flow;
	}
	public void setReceive_flow(String receive_flow) {
		this.receive_flow = receive_flow;
	}
	public QueryBySendReceive(String update_time, Integer send_count, String send_flow, Integer receive_count,
			String receive_flow) {
		super();
		this.update_time = update_time;
		this.send_count = send_count;
		this.send_flow = send_flow;
		this.receive_count = receive_count;
		this.receive_flow = receive_flow;
	}
	public QueryBySendReceive() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
