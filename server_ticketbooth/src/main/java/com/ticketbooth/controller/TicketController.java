package com.ticketbooth.controller;

import com.ticketbooth.dao.TicketDAO;
import com.ticketbooth.model.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "api/ticket")
public class TicketController {

    @Autowired
    TicketDAO ticketDAO;

    @GetMapping("/{eventId}/{userId}")
    public int getTicketCount(@PathVariable int eventId, @PathVariable int userId) {
        return ticketDAO.getTicketCount(eventId, userId);
    }

    @PostMapping("/")
    public String purchaseTicket(@RequestBody Ticket ticket) {
        return ticketDAO.purchaseTicket(ticket);
    }

    @PostMapping("/transfer/{toUserEmail}")
    public String transferTicket(@RequestBody Ticket ticket, @PathVariable String toUserEmail ) {
        return ticketDAO.transferTicket(ticket, toUserEmail);
    }
}
