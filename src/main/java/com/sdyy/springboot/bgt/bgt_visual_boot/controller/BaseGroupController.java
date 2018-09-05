package com.sdyy.springboot.bgt.bgt_visual_boot.controller;

import com.sdyy.springboot.bgt.bgt_visual_boot.model.Mail.*;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.MailService;
import com.sdyy.springboot.bgt.bgt_visual_boot.util.JSONUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * @author xiaohu
 * @createDate 2018-09-05 15:39
 */
@Controller
public class BaseGroupController {

    @Autowired
    private MailService mailService;


    @RequestMapping("/officialMail")
    public String officialMailHtml(Model model){
        System.out.println(123);
        List<QueryBySpam> queryBySpam = mailService.queryBySpam();
        List<QueryByDeptActive> queryByDeptActive = mailService.queryByDeptActive();
        List<QueryBySendReceive> queryBySendReceive = mailService.queryBySendReceive();
        List<QueryByUserLog> queryByUserLog = mailService.queryByUserLog();
        List<QueryByMailLog> queryByMailLog = mailService.queryByMailLog();
        List<QueryByTAttackType> queryByAttackNum = mailService.queryByAttackNum();
        List<QueryByTAttackType> queryByAttackType = mailService.queryByAttackType();
        List<QueryByMailLog> queryByMailLogSum = mailService.queryByMailLogSum();
        List<QueryByUserLog> queryByUserLogin = mailService.queryByUserLogin();

        String json1 = JSONUtil.toJSONString(queryBySpam);
        String json2 = JSONUtil.toJSONString(queryByDeptActive);
        String json3 = JSONUtil.toJSONString(queryBySendReceive);
        String json4 = JSONUtil.toJSONString(queryByUserLog);
        String json5 = JSONUtil.toJSONString(queryByMailLog);
        String json6 = JSONUtil.toJSONString(queryByAttackNum);
        String json7 = JSONUtil.toJSONString(queryByAttackType);

        String json8 = JSONUtil.toJSONString(queryByMailLogSum);
        String json9 = JSONUtil.toJSONString(queryByUserLogin);
        model.addAttribute("queryBySpam", json1);
        model.addAttribute("queryByDeptActive", json2);
        model.addAttribute("queryBySendReceive", json3);
        model.addAttribute("queryByUserLog",json4);
        model.addAttribute("queryByMailLog",json5);
        model.addAttribute("queryByAttackNum",json6);
        model.addAttribute("queryByAttackType",json7);
        model.addAttribute("queryByMailLogSum",json8);
        model.addAttribute("queryByUserLogin",json9);
        return "baseGroup/officialMail";
    }

}
