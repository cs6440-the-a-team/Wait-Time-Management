package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.model.RoomType;

@Path("/admin/room_type")
public class AdminRoomTypeApi extends ResourceApi<RoomType> {

	public AdminRoomTypeApi() {
		super(Dbs.roomTypes);
	}
}