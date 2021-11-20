package com.ticketbooth.dao;

import com.ticketbooth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int saveUser(User user) {
        return 0;
    }

    @Override
    public int updateUser(User user, int id) {
        return 0;
    }

    @Override
    public int deleteUser(User user) {
        return 0;
    }

    @Override
    public List<User> getAllUsers() {
        return jdbcTemplate.query("SELECT id, name, email, gender, dob, country FROM user", new BeanPropertyRowMapper<>(User.class));
    }

    @Override
    public User getUserById(int id) {
        return null;
    }

}
