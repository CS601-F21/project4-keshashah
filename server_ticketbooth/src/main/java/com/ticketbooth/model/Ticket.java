package com.ticketbooth.model;

public class Ticket {
    private int userId;
    private int eventId;
    private int count;

    public Ticket() {
    }

    public Ticket(int userId, int eventId, int count) {
        this.userId = userId;
        this.eventId = eventId;
        this.count = count;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
