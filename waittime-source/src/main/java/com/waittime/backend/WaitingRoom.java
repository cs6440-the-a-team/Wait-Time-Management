package com.waittime.backend;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/waitingroom")
public class WaitingRoom {
    
	@GET()
    public String hello() {
        return "hello waitingroom!";
    }
}