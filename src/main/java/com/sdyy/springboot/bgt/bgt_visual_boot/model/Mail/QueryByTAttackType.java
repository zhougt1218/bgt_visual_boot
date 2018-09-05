package com.sdyy.springboot.bgt.bgt_visual_boot.model.Mail;

/**
 * mail_t_attack_type and mail_t_attack_num
 * @author Lozebra
 *
 */
public class QueryByTAttackType {
	private String attack_type;
	private Integer attack_num;
	private String date;
	public String getAttack_type() {
		return attack_type;
	}
	public void setAttack_type(String attack_type) {
		this.attack_type = attack_type;
	}
	public Integer getAttack_num() {
		return attack_num;
	}
	public void setAttack_num(Integer attack_num) {
		this.attack_num = attack_num;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "QueryByTAttackType [attack_type=" + attack_type + ", attack_num=" + attack_num + ", date=" + date + "]";
	}
	
}
