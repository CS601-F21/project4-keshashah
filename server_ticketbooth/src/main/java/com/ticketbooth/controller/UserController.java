package com.ticketbooth.controller;

import com.ticketbooth.dao.UserDAO;
import com.ticketbooth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "api/user")
public class UserController {

    @Autowired
    private UserDAO userDAO;

    @GetMapping("/allEmailsExcept/{id}")
    public List<String> getAllUsersExcept(@PathVariable int id) {
        return userDAO.getAllUsersExcept(id);
    }

    @PutMapping("/{id}")
    public String updateUser(@RequestBody User user,@PathVariable int id) {
        return userDAO.updateUser(user, id) + " user successfully updated";
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable int id) {
        return userDAO.getUserById(id);
    }

}
