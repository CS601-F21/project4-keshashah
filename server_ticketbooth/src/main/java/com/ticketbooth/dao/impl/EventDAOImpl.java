package com.ticketbooth.dao.impl;

import com.ticketbooth.dao.EventDAO;
import com.ticketbooth.model.Event;
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
        SimpleDateFormat inputdateformat = new SimpleDateFormat("MM/dd/yyyy hh:mm aa", Locale.ENGLISH);
        SimpleDateFormat outputdateformat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S");
        Date tempDate = null;
        try {
            tempDate = inputdateformat.parse(inputdate);
            String newdate = outputdateformat.format(tempDate);
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
            int rows = jdbcTemplate.update("INSERT INTO event (name, description, startTime, endTime, ownerId) VALUES (?,?,?,?,?)",
                    new Object[]{event.getName(), event.getDescription(), startDatetime, endDatetime, event.getOwnerId()});

            return rows + " event successfully added.";
        }
    }

    @Override
    public List<Event> getAllEvents() {
        return jdbcTemplate.query("SELECT eventId, name, description, startTime, endTime FROM event",
                new BeanPropertyRowMapper<>(Event.class));
    }

}

