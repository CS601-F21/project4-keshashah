package com.ticketbooth.dao;

import com.ticketbooth.model.Ticket;

public interface TicketDAO {

    int getTicketCount(int eventId, int userId);
    String purchaseTicket(Ticket ticket);
}
