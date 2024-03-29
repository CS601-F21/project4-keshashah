package com.ticketbooth.dao;

import com.ticketbooth.model.User;

import java.util.List;

public interface UserDAO {

    int updateUser(User user, int id);
    List<String> getAllUsersExcept(int id);
    User getUserById(int id);

}
