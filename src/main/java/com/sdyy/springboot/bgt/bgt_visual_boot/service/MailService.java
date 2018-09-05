package com.sdyy.springboot.bgt.bgt_visual_boot.service;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.Mail.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MailService {
	
	/**
	 * 查询mail_statistics_user_log
	 */
	public List<QueryByUserLog> queryByUserLog();
	
	/**
	 * 查询mail_statistics_mail_log
	 */
	public List<QueryByMailLog> queryByMailLog();
	
	/**
	 * 查询mail_t_attack_num
	 */
	public List<QueryByTAttackType> queryByAttackNum();
	
	/**
	 * 查询mail_t_attack_type
	 */
	public List<QueryByTAttackType> queryByAttackType();

	/**
	 * 连接数、被拒数、病毒邮件、垃圾邮件  from t_zs_count
	 * @return 部门入驻情况
	 */
	public List<QueryBySpam> queryBySpam();
	
	/**
	 * 部门活跃度
	 */
	public List<QueryByDeptActive> queryByDeptActive();
	
	/**
	 * 收发件流量
	 */
	public List<QueryBySendReceive> queryBySendReceive();
	
	/**
	 * 累计收发件流量
	 */
	public List<QueryByMailLog> queryByMailLogSum();
	
	/**
	 * 登录次数
	 */
	public List<QueryByUserLog> queryByUserLogin();
	
}
