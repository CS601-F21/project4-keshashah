package com.ticketbooth.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @GetMapping("/")
    public String getHomePage() {
        return "Login Page is unrestricted";
    }

    @GetMapping("/restricted")
    public String getRestrictedPage() {
        return "Congrats you can see a restricted page";
    }

}
