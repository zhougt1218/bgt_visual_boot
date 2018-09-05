package com.sdyy.springboot.bgt.bgt_visual_boot.service.impl;

import com.sdyy.springboot.bgt.bgt_visual_boot.mapper.MailMapper;
import com.sdyy.springboot.bgt.bgt_visual_boot.model.Mail.*;
import com.sdyy.springboot.bgt.bgt_visual_boot.service.MailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author xiaohu
 * @createDate 2018-09-05 16:14
 */
@Service
public class MailServiceImpl implements MailService {

    @Autowired
    public MailMapper mapper;

    @Override
    public List<QueryByUserLog> queryByUserLog() {

        return mapper.queryByUserLog();
    }

    @Override
    public List<QueryByMailLog> queryByMailLog() {
        return mapper.queryByMailLog();
    }

    @Override
    public List<QueryByTAttackType> queryByAttackNum() {
        return mapper.queryByAttackNum();
    }

    @Override
    public List<QueryByTAttackType> queryByAttackType() {
        return mapper.queryByAttackType();
    }

    @Override
    public List<QueryBySpam> queryBySpam() {
        return mapper.queryBySpam();
    }

    @Override
    public List<QueryByDeptActive> queryByDeptActive() {
        return mapper.queryByDeptActive();
    }

    @Override
    public List<QueryBySendReceive> queryBySendReceive() {
        return mapper.queryBySendReceive();
    }

    @Override
    public List<QueryByMailLog> queryByMailLogSum() {
        return mapper.queryByMailLogSum();
    }

    @Override
    public List<QueryByUserLog> queryByUserLogin() {
        return mapper.queryByUserLogin();
    }
}
