package com.ticketbooth.controller;

import com.ticketbooth.dao.UserDAO;
import com.ticketbooth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/user")
public class UserController {

    @Autowired
    private UserDAO userDAO;

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers() {
        return userDAO.getAllUsers();
    }

    @GetMapping("/getUser/{id}")
    public User getUser(@PathVariable int id) {
        return userDAO.getUserById(id);
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
