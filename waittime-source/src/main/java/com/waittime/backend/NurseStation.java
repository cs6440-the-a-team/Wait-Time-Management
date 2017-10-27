package com.waittime.backend;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/nursestation")
public class NurseStation {

	@GET()
    public String hello() {
        return "hello nursestation!";
    }
}
