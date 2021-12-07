package com.ticketbooth.dao.impl;

import com.ticketbooth.dao.UserDAO;
import com.ticketbooth.dao.impl.util.SQLQueriesConstant;
import com.ticketbooth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public int updateUser(User user, int id) {

        //SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        //sdf.parse(user.getDob().toString())

//        System.out.println("Name:"+user.getName());
//        System.out.println("Gender:"+user.getGender());
//        System.out.println("DOb:"+user.getDob());
//        System.out.println("Country:"+user.getCountry());
//        System.out.println("Id:"+id);
        return jdbcTemplate.update(SQLQueriesConstant.updateUser,
                    new Object[]{user.getName(), user.getGender(), user.getDob(), user.getCountry(), id});
    }

    @Override
    public List<String> getAllUsersExcept(int id) {
        return jdbcTemplate.queryForList(SQLQueriesConstant.getAllUserEmails,
                String.class, id);
    }

    @Override
    public User getUserById(int id) {
        return jdbcTemplate.queryForObject(SQLQueriesConstant.getUserByID,
                new BeanPropertyRowMapper<>(User.class),
                id);
    }

}
