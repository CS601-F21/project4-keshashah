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

    @GetMapping("/user")
    public Map<String, Object> getUser(@AuthenticationPrincipal OAuth2User principal) {
        System.out.println("name is:"+ principal.getAttribute("name"));
        return Collections.singletonMap("name", principal.getAttribute("name"));
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }

    @GetMapping("/getUser/{id}")
    public User getUser(@PathVariable int id) {
        return userDAO.getUserById(id);
    }

    @GetMapping("/getUser/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userDAO.getUserByEmail(email);
    }


    @PostMapping("/newUser")
    public String saveUser(@RequestBody User user) {
        return userDAO.saveUser(user) + " number of rows added to users";
    }

    @PutMapping("updateUser/{id}")
    public String updateUser(@RequestBody User user,@PathVariable int id) {
        return userDAO.updateUser(user, id) + " number of rows updated to users";
    }

    @DeleteMapping("deleteUser/{id}")
    public String deleteUser(@PathVariable int id) {
        return  userDAO.deleteUser(id) + " number of rows deleted from users";
    }
}
