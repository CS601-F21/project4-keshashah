package com.ticketbooth.dao.impl;

import com.ticketbooth.dao.UserDAO;
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
        return jdbcTemplate.update("INSERT INTO user(name, email, gender, dob, country) VALUES (?,?,?,?,?)",
                new Object[] {user.getName(), user.getEmail(), user.getGender(), user.getDob(), user.getCountry()});
    }

    @Override
    public int updateUser(User user, int id) {
        return jdbcTemplate.update("UPDATE user SET name=?, gender=?, dob=?, country=? WHERE id=?",
                new Object[]{user.getName(), user.getGender(), user.getDob(), user.getCountry(), id});
    }

    @Override
    public int deleteUser(int id) {
        return jdbcTemplate.update("DELETE FROM user WHERE id=?", id);
    }

    @Override
    public List<User> getAllUsers() {
        return jdbcTemplate.query("SELECT userId, name, email, gender, dob, country FROM user",
                new BeanPropertyRowMapper<>(User.class));
    }

    @Override
    public User getUserById(int id) {
        return jdbcTemplate.queryForObject("SELECT userId, name, email, gender, dob, country FROM user WHERE userId =?",
                new BeanPropertyRowMapper<>(User.class),
                id);
    }

    @Override
    public User getUserByEmail(String email) {
        return jdbcTemplate.queryForObject("SELECT id, name, email, gender, dob, country FROM user WHERE email =?",
                new BeanPropertyRowMapper<>(User.class),
                email);
    }

}
