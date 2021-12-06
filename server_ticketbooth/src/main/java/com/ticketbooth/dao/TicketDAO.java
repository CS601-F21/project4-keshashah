package com.ticketbooth.dao;

import com.ticketbooth.model.Ticket;

public interface TicketDAO {

    int getTicketCount(int eventId, int userId);
    String transferTicket(Ticket ticket, String toUserEmail);
    String purchaseTicket(Ticket ticket);
}
