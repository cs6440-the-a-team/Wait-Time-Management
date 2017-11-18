package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.db.gen.model.DimRoom;

@Path("/admin/room/")
public class AdminRoomApi extends ResourceApi<Integer, DimRoom> {

	public AdminRoomApi() {
		super(Dbs.rooms);
	}
}