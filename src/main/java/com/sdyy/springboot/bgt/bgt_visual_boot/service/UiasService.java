package com.sdyy.springboot.bgt.bgt_visual_boot.service;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.Uias.*;
import org.springframework.stereotype.Service;

import java.util.List;


/**
 * 统一身份认证
 * @author PPF
 *
 */
@Service
public interface UiasService {
	/**
	 * 查询法人情况
	 */
	public List<QueryByCor> queryByCor();
	
	/**
	 * 查询总体接入情况
	 */
	public List<QueryByTotal> queryByTotal();
	
	/**
	 * 查询用户注册情况
	 */
	public List<QueryByUser> queryByUser();
	
	/**
	 * 查询用户访问pv|uv
	 */
	public List<QueryByPv> queryByPv();
	
	/**
	 * 查询省使用量
	 */
	public List<QueryByProvince> queryByProvince();
	
	/**
	 * 查询地市使用量
	 */
	public List<QueryByProvince> queryByRegion();
}
