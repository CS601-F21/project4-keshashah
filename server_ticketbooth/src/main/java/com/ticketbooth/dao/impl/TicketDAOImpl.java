package com.ticketbooth.dao.impl;

import com.ticketbooth.dao.TicketDAO;
import com.ticketbooth.dao.impl.util.SQLQueriesConstant;
import com.ticketbooth.model.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.DefaultTransactionDefinition;

import java.sql.SQLException;

@Repository
public class TicketDAOImpl implements TicketDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Autowired
    private PlatformTransactionManager platformTransactionManager;


    @Override
    public int getTicketCount(int eventId, int userId) {
        try {
            Ticket t= jdbcTemplate.queryForObject(SQLQueriesConstant.getTicketCount,
                    new BeanPropertyRowMapper<>(Ticket.class),
                    eventId, userId);
            return t.getCount();
        }
        catch (EmptyResultDataAccessException e) {
            return 0;
        }
    }

    @Override
    public String purchaseTicket(Ticket ticket) {
        jdbcTemplate.update(SQLQueriesConstant.insertTicket,
                ticket.getUserId(), ticket.getEventId(), ticket.getCount());

        return "Congratulations, you have successfully purchased " + ticket.getCount() +" tickets";
    }

    public String transferTicket(Ticket ticket, int toUserId) {
        DefaultTransactionDefinition paramTransactionDefinition = new    DefaultTransactionDefinition();
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
        ticket.setUserId(toUserId);
        purchaseTicket(ticket);

        platformTransactionManager.commit(status);
        return "Successfully transferred "+ticket.getCount()+" tickets to "+ticket.getUserId();
    }
}
