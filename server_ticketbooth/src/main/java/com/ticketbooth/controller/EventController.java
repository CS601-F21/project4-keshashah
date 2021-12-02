package com.ticketbooth.controller;

import com.ticketbooth.dao.EventDAO;
import com.ticketbooth.model.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/all")
    public List<Event> getAllEvents() {
        return eventDAO.getAllEvents();
    }

    @GetMapping("/{id}")
    public Event getEvent(@PathVariable int id) {
        return eventDAO.getEvent(id);
    }
}
