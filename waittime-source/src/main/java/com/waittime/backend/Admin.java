package com.waittime.backend;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/admin")
public class Admin {

	@GET()
    public String hello() {
        return "hello admin!";
    }
}
