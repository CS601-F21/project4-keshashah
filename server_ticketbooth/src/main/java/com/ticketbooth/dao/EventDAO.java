package com.ticketbooth.dao;

import com.ticketbooth.model.Event;
import java.util.List;

public interface EventDAO {
    String saveEvent(Event event);
    List<Event> getAllEvents();
    Event getEvent(int id);
    String deleteEvent(int id);
    List<Event> getAllEventsByUser(int id);
}
