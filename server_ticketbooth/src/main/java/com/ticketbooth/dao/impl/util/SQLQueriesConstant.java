package com.ticketbooth.dao.impl.util;

public class SQLQueriesConstant {
    public static final String insertEvent = "INSERT INTO event (name, description, startTime, endTime, ownerId) VALUES (?,?,?,?,?)";
    public static final String showEventsBase = "SELECT event.eventId as eventId, name, description, startTime, endTime, COUNT(ticketId) as ticketsSold FROM event LEFT OUTER JOIN ticket ON event.eventID = ticket.eventID ";
    public static final String showEvents = showEventsBase + " GROUP BY eventID";
    public static String showEventById = showEventsBase +" WHERE event.eventId =? GROUP BY eventID";
}
