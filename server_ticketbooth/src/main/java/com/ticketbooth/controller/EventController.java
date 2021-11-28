package com.ticketbooth.controller;

import com.ticketbooth.dao.EventDAO;
import com.ticketbooth.model.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
