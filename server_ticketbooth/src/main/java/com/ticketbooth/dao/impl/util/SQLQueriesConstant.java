package com.ticketbooth.dao.impl.util;

public class SQLQueriesConstant {
    public static final String insertEvent = "INSERT INTO event (name, description, startTime, endTime, ownerId) VALUES (?,?,?,?,?)";
    public static final String showEventsBase = "SELECT event.eventId as eventId, name, description, startTime, endTime, ownerId, COALESCE(SUM(ticket.count),0) as ticketsSold FROM event LEFT OUTER JOIN ticket ON event.eventID = ticket.eventID ";
    public static final String showEvents = showEventsBase + " GROUP BY eventID";
    public static String showEventById = showEventsBase +" WHERE event.eventId=? GROUP BY eventID";
    public static String getTicketCount = "SELECT COALESCE(sum(count), 0) AS count FROM ticket WHERE eventId=? and userId =? ;";
    public static String insertTicket = "INSERT INTO ticket(userId, eventId, count) VALUES(?,?,?)";
    public static String getAllUserEmails = "SELECT email FROM user WHERE userID <> ?";
    public static String deleteEvent = "DELETE FROM event WHERE eventId=?";
    public static String updateUser = "UPDATE user SET name=?, gender=?, dob=?, country=? WHERE userId=?";
    public static String getUserByID = "SELECT userId, name, email, gender, dob, country FROM user WHERE userId=?";
    public static String showEventsForUser = showEventsBase + " WHERE ticket.userId=? GROUP BY event.eventID";
}
