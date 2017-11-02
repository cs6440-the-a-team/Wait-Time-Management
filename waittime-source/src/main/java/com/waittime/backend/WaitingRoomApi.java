package com.waittime.backend;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.waittime.backend.model.WaitingRoom;
import com.waittime.backend.model.WaitingRoomPatient;

@Path("/waitingroom")
public class WaitingRoomApi {
    
	@GET()
	@Produces(MediaType.APPLICATION_JSON)
    public WaitingRoom hello() {
        return dummyRoom;
    }
	
	static WaitingRoom dummyRoom = WaitingRoom.builder()
									.withPatient(WaitingRoomPatient.builder()
												.withPatient_id("B32")
												.withStatus("In Procedure")
												.withStart_time("2017-11-02T01:03:09+00:00")
												.withEnd_time("2017-11-02T04:03:09+00:00")
												.withLocation("H1")
												.build())
									.withPatient(WaitingRoomPatient.builder()
											.withPatient_id("I55")
											.withStatus("Recovery")
											.withStart_time( "2017-11-02T12:00:09+00:00")
											.withEnd_time( "2017-11-02T01:11:09+00:00")
											.withLocation("ICU")
											.build())
									.withPatient(WaitingRoomPatient.builder()
											.withPatient_id("D42")
											.withStatus("In Procedure")
											.withStart_time( "2017-11-02T01:25:09+00:00")
											.withEnd_time( "2017-11-02T01:55:09+00:00")
											.withLocation("R32")
											.build())
									.withPatient(WaitingRoomPatient.builder()
											.withPatient_id("K71")
											.withStatus("In Triage")
											.withStart_time( "2017-11-02T01:40:09+00:00")
											.withEnd_time( "2017-11-02T01:53:09+00:00")
											.withLocation("O1")
											.build())
									.withPatient(WaitingRoomPatient.builder()
											.withPatient_id("P12")
											.withStatus("In Procedure")
											.withStart_time( "2017-11-02T03:00:09+00:00")
											.withEnd_time( "2017-11-02T03:47:09+00:00")
											.withLocation("T1")
											.build())
									.build();
}