package com.ticketbooth.user;

import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;

@Component
public class UserService {

    public List<User> getUserProfile() {
        return List.of(
                new User("Kesha","ksshah4@usfca.edu",2, LocalDate.of(2020,06,11),"India"),
                new User("Kesha2","ksshah4@usfca.edu",2, LocalDate.of(2020,06,11),"India"),
                new User("Kesha3","ksshah4@usfca.edu",2, LocalDate.of(2020,06,11),"India")
        );
    }
}
