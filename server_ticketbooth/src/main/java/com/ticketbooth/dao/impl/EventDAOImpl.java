package com.ticketbooth.dao.impl;

import com.ticketbooth.dao.EventDAO;
import com.ticketbooth.dao.impl.util.SQLQueriesConstant;
import com.ticketbooth.model.Event;
import com.ticketbooth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Repository
public class EventDAOImpl implements EventDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    private Date dateFormat(String inputdate) {
        SimpleDateFormat inputdateformat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
        SimpleDateFormat outputdateformat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Date tempDate = null;
        try {
            tempDate = inputdateformat.parse(inputdate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        return tempDate;
    }


    @Override
    public String saveEvent(Event event) {

        Date startDatetime = dateFormat(event.getStartTime());
        Date endDatetime = dateFormat(event.getEndTime());

        if(startDatetime == null || endDatetime == null) {
            return "Sorry, event not added. " +
                    "\nCould not parse the date and time for the event properly. " +
                    "\nPlease contact admin.";
        } else {
            int rows = jdbcTemplate.update(SQLQueriesConstant.insertEvent,
                    new Object[]{event.getName(), event.getDescription(), startDatetime, endDatetime, event.getOwnerId()});

            return rows + " event successfully added.";
        }
    }

    @Override
    public List<Event> getAllEvents() {
        return jdbcTemplate.query(SQLQueriesConstant.showEvents,
                new BeanPropertyRowMapper<>(Event.class));
    }

    @Override
    public Event getEvent(int id) {
        return jdbcTemplate.queryForObject(SQLQueriesConstant.showEventById,
                new BeanPropertyRowMapper<>(Event.class),
                id);
    }

    @Override
    public String deleteEvent(int id) {
            return jdbcTemplate.update(SQLQueriesConstant.deleteEvent, id) + " event successfully deleted.";
    }

    @Override
    public List<Event> getAllEventsByUser(int id) {
        return jdbcTemplate.query(SQLQueriesConstant.showEventsForUser,
                new BeanPropertyRowMapper<>(Event.class),
                id);
    }

}

