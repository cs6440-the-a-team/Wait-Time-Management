package com.waittime.backend;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.NotSupportedException;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.waittime.backend.db.RoomDb;
import com.waittime.backend.model.Room;

@Path("/admin/room")
public class AdminRoomApi {

	private RoomDb db = new RoomDb();

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
    public Room create(Room room) {
		if (null != retrieve(room.getId())) {
			throw new javax.ws.rs.BadRequestException();
		}
        return db.create(room);
    }
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{id}")
    public Room retrieve(@PathParam("id") String id) {
		Room p = db.retrieve(id);
        if (p==null) {
        		throw new javax.ws.rs.NotFoundException();
        }
        return p;
    }
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
    public Room update(Room patient) {
		retrieve(patient.getId());
        return db.update(patient);
    }
	
	@DELETE
	@Path("/{id}")
	public void delete(@PathParam("id") String id) {
		throw new NotSupportedException();
	}
}
