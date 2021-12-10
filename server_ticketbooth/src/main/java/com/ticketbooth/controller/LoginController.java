package com.ticketbooth.controller;

import com.ticketbooth.dao.LoginDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "api/login")
public class LoginController {

    @Autowired
    LoginDAO loginDAO;

    @GetMapping("/{name}/{email}")
    public int loginUser(@PathVariable String name, @PathVariable String email) {
        System.out.println(name);
        System.out.println(email);
        return loginDAO.createIfNotExistOrGetUserid(name, email);
       /* System.out.println(p);
        if(p!=null) {
            Map<String, Object> details = ((OAuth2AuthenticationToken) p).getPrincipal().getAttributes();

            return loginDAO.createIfNotExistOrGetUserid((String) details.get("name"), (String) details.get("email"));
        }
        else
            return 3;*/
    }

}
