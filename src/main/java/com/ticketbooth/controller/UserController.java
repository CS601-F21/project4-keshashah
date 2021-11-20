package com.ticketbooth.controller;

import com.ticketbooth.dao.UserDAO;
import com.ticketbooth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/userprofile")
public class UserController {

    @Autowired
    private UserDAO userDAO;

    @GetMapping("/allUsers")
    public List<User> allUsers() {
        return userDAO.getAllUsers();
    }



}
