package com.ticketbooth.dao;

import com.ticketbooth.model.Event;
import java.util.List;

public interface EventDAO {
    String saveEvent(Event event);
    List<Event> getAllEvents(Integer pageNo, Integer pageSize);
    Event getEvent(int id);
    String deleteEvent(int id);
    List<Event> getAllEventsByUser(int id);
    List<Event> searchEvent(String key);
    String updateEvent(Event event);
}
