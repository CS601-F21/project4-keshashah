package com.ticketbooth.controller;

import com.ticketbooth.dao.LoginDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

    @Autowired
    LoginDAO loginDAO;

    @GetMapping("/login")
    public int loginUser(Principal p) {
        System.out.println(p);
        if(p!=null) {
            Map<String, Object> details = ((OAuth2AuthenticationToken) p).getPrincipal().getAttributes();

            return loginDAO.createIfNotExistOrGetUserid((String) details.get("name"), (String) details.get("email"));
        }
        else
            return 3;
    }

}
