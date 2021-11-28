package com.ticketbooth.dao;

import com.ticketbooth.model.Event;

public interface EventDAO {
    String saveEvent(Event event);
}
