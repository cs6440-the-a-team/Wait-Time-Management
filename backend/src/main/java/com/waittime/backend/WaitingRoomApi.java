package com.waittime.backend;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.waittime.backend.db.PatientDb;
import com.waittime.backend.model.Patient;
import com.waittime.backend.model.WaitingRoom;
import com.waittime.backend.model.WaitingRoom.Builder;
import com.waittime.backend.model.WaitingRoomPatient;

@Path("/waitingroom")
public class WaitingRoomApi {
	
	private final PatientDb db = new PatientDb();
    
	@GET()
	@Produces(MediaType.APPLICATION_JSON)
    public WaitingRoom hello() {
		Builder builder = WaitingRoom.builder();
		for (Patient p : db.list()) {
			builder.withPatient(WaitingRoomPatient.builder()
					.withPatient_id(p.getId())
					.withStatus(p.getStatus())
					.withStart_time(p.getStart_time())
					.withEnd_time(p.getEnd_time())
					.withExpected_duration(p.getExpected_duration())
					.withLocation(p.getLocation_id())
					.build());
		}
        return builder.build();
    }
}