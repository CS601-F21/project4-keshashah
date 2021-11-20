package com.ticketbooth.user;

import java.time.LocalDate;

public class User {
    private Long id;
    private String name;
    private String email;
    private int gender; // 1 for male, 2 for female, 3 for others;
    private LocalDate dob;
    private String country;

    public User(String name, String email, int gender, LocalDate dob, String country) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.dob = dob;
        this.country = country;
    }

    public User(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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
