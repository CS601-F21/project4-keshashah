package com.ticketbooth.dao.impl;

import com.ticketbooth.dao.TicketDAO;
import com.ticketbooth.dao.impl.util.SQLQueriesConstant;
import com.ticketbooth.model.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

@Repository
public class TicketDAOImpl implements TicketDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    private PlatformTransactionManager platformTransactionManager;


    @Override
    public int getTicketCount(int eventId, int userId) {
        return jdbcTemplate.queryForObject(SQLQueriesConstant.getTicketCount,
                                Integer.class, eventId, userId);
    }

    @Override
    public String purchaseTicket(Ticket ticket) {
        jdbcTemplate.update(SQLQueriesConstant.insertTicket,
                ticket.getUserId(), ticket.getEventId(), ticket.getCount());

        return "Congratulations, you have successfully purchased " + ticket.getCount() +" tickets";
    }

    public String transferTicket(Ticket ticket, String toUserEmail) {
        DefaultTransactionDefinition paramTransactionDefinition = new DefaultTransactionDefinition();
        TransactionStatus status=platformTransactionManager.getTransaction(paramTransactionDefinition );

        //to make atomic --> delete and add of tickets
        // Reference: https://stackoverflow.com/questions/31983352/commit-on-jdbctemplate-or-datasource
        int totalTickets = getTicketCount(ticket.getEventId(), ticket.getUserId());
        if(totalTickets < ticket.getCount()) {
            return "Sorry, you only have "+totalTickets+" tickets.\nTry transferring less than "+ticket.getCount();
        }

        ticket.setCount(-1*ticket.getCount()); //to make a negative entry
        purchaseTicket(ticket);

        ticket.setCount(-1*ticket.getCount());
        ticket.setUserId(getUserId(toUserEmail));
        purchaseTicket(ticket);

        platformTransactionManager.commit(status);
        return "Successfully transferred "+ticket.getCount()+" tickets to "+ toUserEmail;
    }

    private int getUserId(String toUserEmail) {
        return jdbcTemplate.queryForObject(SQLQueriesConstant.getUserIdFromEmail,
                Integer.class, toUserEmail);
    }
}
