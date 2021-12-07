package com.ticketbooth.dao.impl.util;

public class SQLQueriesConstant {
    public static final String insertEvent = "INSERT INTO event (name, description, startTime, endTime, ownerId, isActive) VALUES (?,?,?,?,?,1)";
    public static final String showEventsBase = "SELECT event.eventId as eventId, name, description, startTime, endTime, ownerId, COALESCE(SUM(ticket.count),0) as ticketsSold FROM event LEFT OUTER JOIN ticket ON event.eventID = ticket.eventID WHERE event.isActive=1 ";
    public static final String showEvents = showEventsBase + " GROUP BY eventID";
    public static String showEventById = showEventsBase +" AND event.eventId=? GROUP BY eventID";
    public static String getTicketCount = "SELECT COALESCE(sum(count), 0) AS count FROM ticket WHERE eventId=? and userId =? ;";
    public static String insertTicket = "INSERT INTO ticket(userId, eventId, count) VALUES(?,?,?)";
    public static String getAllUserEmails = "SELECT email FROM user WHERE userID <> ?";
    public static String deleteEvent = "UPDATE event SET isActive = 0 WHERE eventId=? ";
    public static String updateUser = "UPDATE user SET name=?, gender=?, dob=?, country=? WHERE userId=?";
    public static String getUserByID = "SELECT userId, name, email, gender, dob, country FROM user WHERE userId=?";
    public static String showEventsForUser = showEventsBase + " AND ticket.userId=? GROUP BY event.eventID";
    public static String getUserIdFromEmail = "SELECT userId FROM user WHERE email = ? ";
    public static String searchEvents = showEventsBase + " AND (LOWER(name) LIKE ? OR LOWER(description) LIKE ? ) GROUP BY event.eventID" ;
    public static String updateEvent= "UPDATE event SET name=?, description=?, startTime=?, endTime=? WHERE eventId=?";
}
