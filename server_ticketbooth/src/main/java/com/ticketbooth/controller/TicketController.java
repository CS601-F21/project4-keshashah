package com.ticketbooth.controller;

import com.ticketbooth.dao.impl.TicketDAOImpl;
import com.ticketbooth.model.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "api/ticket")
public class TicketController {

    @Autowired
    TicketDAOImpl ticketDAOimpl;

    @GetMapping("/{eventId}/{userId}")
    public int getTicketCount(@PathVariable int eventId, @PathVariable int userId) {
        return ticketDAOimpl.getTicketCount(eventId, userId);
    }

    @PostMapping("/")
    public String purchaseTicket(@RequestBody Ticket ticket) {
        return ticketDAOimpl.purchaseTicket(ticket);
    }

    @PostMapping("/{toUserId}")
    public String transferTicket(@RequestBody Ticket ticket, @PathVariable int toUserId) {
        return ticketDAOimpl.transferTicket(ticket, toUserId);
    }
}
