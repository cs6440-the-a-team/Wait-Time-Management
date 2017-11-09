package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.model.Room;

@Path("/admin/room")
public class AdminRoomApi extends ResourceApi<Room> {

	public AdminRoomApi() {
		super(Dbs.rooms);
	}
}