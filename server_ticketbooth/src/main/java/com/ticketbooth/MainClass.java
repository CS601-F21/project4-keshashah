package com.ticketbooth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;


@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
//@SpringBootApplication()
public class MainClass {

	public static void main(String[] args) {

		SpringApplication.run(MainClass.class, args);

		/*	try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/user021","user021","user021");
			System.out.println("Kesha");
			System.out.println(conn.getMetaData().getUserName());
			System.out.println("Kesha2");

		}catch(Exception e){
			e.printStackTrace();
		}*/

		/* Call createTable if not exist */
		/* 1. User */
		/* 2. Event */
		/* 3. Ticket */

	}

}
