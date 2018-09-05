package com.sdyy.springboot.bgt.bgt_visual_boot.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author xiaohu
 * @createDate 2018-09-05 15:26
 */
@Controller
public class IndexController {

    @RequestMapping(value = {"/","/index"})
    public String index(){
        return "index";
    }

    @RequestMapping("/user.do")
    public String user(Model model){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext()
                .getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();
        model.addAttribute("username",username);
        return "user/userList";
    }

    @RequestMapping("roles.do")
    public String roles(){
        return "role/roleList";
    }

    @RequestMapping("resources.do")
    public String resources(){
        return "resources/resourceList";
    }

}
