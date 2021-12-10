package com.ticketbooth.dao;

public interface LoginDAO {

    int createIfNotExistOrGetUserid(String name, String email);
}
