package com.ticketbooth.dao.impl;

import com.ticketbooth.dao.EventDAO;
import com.ticketbooth.dao.impl.util.SQLQueriesConstant;
import com.ticketbooth.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Repository
public class EventDAOImpl implements EventDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    private Date dateFormat(String inputdate, SimpleDateFormat inputdateformat) {

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

        SimpleDateFormat inputdateformat = new SimpleDateFormat("MM/dd/yyyy, hh:mm:ss a", Locale.ENGLISH);
        Date startDatetime = dateFormat(event.getStartTime(), inputdateformat);
        Date endDatetime = dateFormat(event.getEndTime(), inputdateformat);

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
    public List<Event> getAllEvents(Integer pageNo, Integer pageSize) {
        return jdbcTemplate.query(SQLQueriesConstant.showEvents,
                new BeanPropertyRowMapper<>(Event.class), pageSize, pageSize*(pageNo-1)) ;

    }

    @Override
    public Event getEvent(int id) {
        Event event =  jdbcTemplate.queryForObject(SQLQueriesConstant.showEventById,
                new BeanPropertyRowMapper<>(Event.class),
                id);
        SimpleDateFormat inputdateformat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.ENGLISH);
        SimpleDateFormat targetFormat = new SimpleDateFormat("MM/dd/yyyy, hh:mm:ss a", Locale.ENGLISH);

        event.setStartTime(targetFormat.format(dateFormat(event.getStartTime(),inputdateformat )));
        event.setEndTime(targetFormat.format(dateFormat(event.getEndTime(),inputdateformat )));

        return event;
    }

    @Override
    public String deleteEvent(int id) {
            return jdbcTemplate.update(SQLQueriesConstant.deleteEvent, id) + " event successfully deleted";
    }

    @Override
    public List<Event> getAllEventsByUser(int id) {
        return jdbcTemplate.query(SQLQueriesConstant.showEventsForUser,
                new BeanPropertyRowMapper<>(Event.class),
                id);
    }

    @Override
    public List<Event> searchEvent(String key) {
        String searchTerm = "%"+key.toLowerCase()+"%";
        return jdbcTemplate.query(SQLQueriesConstant.searchEvents,
                new BeanPropertyRowMapper<>(Event.class),
                searchTerm,searchTerm);
    }

    @Override
    public String updateEvent(Event event) {
        SimpleDateFormat inputdateformat = new SimpleDateFormat("MM/dd/yyyy, hh:mm:ss a", Locale.ENGLISH);
        Date startDatetime = dateFormat(event.getStartTime(), inputdateformat);
        Date endDatetime = dateFormat(event.getEndTime(), inputdateformat);

        if(startDatetime == null || endDatetime == null) {
            return "Sorry, event not updated. " +
                    "\nCould not parse the date and time for the event properly. " +
                    "\nPlease contact admin.";
        } else {
            int rows = jdbcTemplate.update(SQLQueriesConstant.updateEvent,
                    new Object[]{event.getName(), event.getDescription(), startDatetime, endDatetime, event.getEventId()});

            return rows + " event updated successfully.";
        }
    }

}

