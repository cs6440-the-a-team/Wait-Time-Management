package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.db.gen.model.DimRoomType;

@Path("/admin/room_type")
public class AdminRoomTypeApi extends ResourceApi<Integer, DimRoomType> {

	public AdminRoomTypeApi() {
		super(Dbs.roomTypes);
	}
}