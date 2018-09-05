package com.sdyy.springboot.bgt.bgt_visual_boot.model.Mail;

/**
 * mail_t_attack
 * @author Lozebra
 *
 */
public class QueryByTAttack {
	private Integer attack_num;
	private String from_address;
	private String date;
	public Integer getAttack_num() {
		return attack_num;
	}
	public void setAttack_num(Integer attack_num) {
		this.attack_num = attack_num;
	}
	public String getFrom_address() {
		return from_address;
	}
	public void setFrom_address(String from_address) {
		this.from_address = from_address;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public QueryByTAttack(Integer attack_num, String from_address, String date) {
		super();
		this.attack_num = attack_num;
		this.from_address = from_address;
		this.date = date;
	}
	public QueryByTAttack() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
