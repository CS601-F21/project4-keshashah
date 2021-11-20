package com.ticketbooth.dao;

import com.ticketbooth.model.User;

import java.util.List;

public interface UserDAO {

    int saveUser(User user);

    int updateUser(User user, int id);

    int deleteUser(int id);

    List<User> getAllUsers();

    User getUserById(int id);
}
