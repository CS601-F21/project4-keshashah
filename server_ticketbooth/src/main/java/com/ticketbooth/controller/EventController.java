package com.ticketbooth.controller;

import com.ticketbooth.dao.EventDAO;
import com.ticketbooth.model.Event;
import com.ticketbooth.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "api/event")
public class EventController {

    @Autowired
    private EventDAO eventDAO;

    @PostMapping("/create")
    public String saveUser(@RequestBody Event event) {
        return eventDAO.saveEvent(event) ;
    }

    @GetMapping("/all")
    public List<Event> getAllUsers() {
        return eventDAO.getAllEvents();
    }
}
