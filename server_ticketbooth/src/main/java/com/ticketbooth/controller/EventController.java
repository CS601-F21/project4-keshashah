package com.ticketbooth.controller;

import com.ticketbooth.dao.EventDAO;
import com.ticketbooth.model.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "api/event")
public class EventController {

    @Autowired
    private EventDAO eventDAO;

    @PostMapping("/")
    public String saveEvent(@RequestBody Event event) {
        return eventDAO.saveEvent(event) ;
    }

    @PutMapping("/")
    public String updateEvent(@RequestBody Event event) {
        return eventDAO.updateEvent(event);
    }

    @GetMapping("/")
    public List<Event> getAllEvents(@RequestParam(defaultValue = "1") Integer pageNo,
                                    @RequestParam(defaultValue = "100") Integer pageSize) {
        try {
            return eventDAO.getAllEvents(pageNo, pageSize);
        } catch (EmptyResultDataAccessException e) {
                //LOGGER.debug("No record found in database for events");
                return new ArrayList<>();
        }
    }

    @GetMapping("/user/{userid}")
    public List<Event> getAllEventsForUser(@PathVariable int userid) {
        try {
            return eventDAO.getAllEventsByUser(userid);
        } catch (EmptyResultDataAccessException e) {
            //LOGGER.debug("No record found in database for events");
            return new ArrayList<>();
        }
    }

    @GetMapping("/search/{key}")
    public List<Event> searchEvent(@PathVariable String key) {
        try {
            return eventDAO.searchEvent(key);
        } catch (EmptyResultDataAccessException e) {
            //LOGGER.debug("No record found in database for events");
            return new ArrayList<>();
        }
    }

    @GetMapping("/{id}")
    public Event getEvent(@PathVariable int id){
        try {
            return eventDAO.getEvent(id);
        } catch (EmptyResultDataAccessException e) {
                //LOGGER.debug("No record found in database for event id "+id);
                return null;
            }
    }

    @DeleteMapping("/{id}")
    public String deleteEvent(@PathVariable int id) {
        return  eventDAO.deleteEvent(id);
    }
}
