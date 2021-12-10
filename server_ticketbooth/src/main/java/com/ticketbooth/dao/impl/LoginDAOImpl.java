package com.ticketbooth.dao.impl;

import com.ticketbooth.dao.LoginDAO;
import com.ticketbooth.dao.impl.util.SQLQueriesConstant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class LoginDAOImpl implements LoginDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int createIfNotExistOrGetUserid(String name, String email) {
        try {
            int num = jdbcTemplate.queryForObject(SQLQueriesConstant.getUserId, Integer.class, email);
            return num;
        } catch(EmptyResultDataAccessException e) {
            jdbcTemplate.update(SQLQueriesConstant.addUser,
                    new Object[]{name,email});
            int num = jdbcTemplate.queryForObject(SQLQueriesConstant.getUserId, Integer.class, email);
            return num;
        }

    }
}
