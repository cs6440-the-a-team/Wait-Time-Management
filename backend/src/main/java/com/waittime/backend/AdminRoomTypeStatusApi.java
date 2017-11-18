package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.db.gen.model.DimRoomStatus;

@Path("/admin/room_type_status")
public class AdminRoomTypeStatusApi extends ResourceApi<DimRoomStatus> {

	public AdminRoomTypeStatusApi() {
		super(Dbs.roomStatuses);
	}
}
