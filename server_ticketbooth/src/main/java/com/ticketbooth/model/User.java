package com.ticketbooth.model;

import java.time.LocalDate;

public class User {

    private int id;
    private String name;
    private String email;
    private int gender; // 1 for male, 2 for female, 3 for others;
    private LocalDate dob;
    private String country;
    //private AuthenticationProvider authenticationProvider;

    public User() {
    }

    public User(int id, String name, String email, int gender, LocalDate dob, String country) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.dob = dob;
        this.country = country;
      //  this.authenticationProvider = authenticationProvider;
    }

    /*
    public User(String name, String email, AuthenticationProvider authenticationProvider) {
        this.name = name;
        this.email = email;
        this.authenticationProvider = authenticationProvider;
    }
*/

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

  /*  public AuthenticationProvider getAuthenticationProvider() {
        return authenticationProvider;
    }

    public void setAuthenticationProvider(AuthenticationProvider authenticationProvider) {
        this.authenticationProvider = authenticationProvider;
    }*/

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", gender=" + gender +
                ", dob=" + dob +
                ", country='" + country + '\'' +
                '}'+"\n";
    }
}
