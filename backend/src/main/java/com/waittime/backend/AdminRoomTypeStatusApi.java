package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.model.RoomTypeStatus;

@Path("/admin/room_type_status")
public class AdminRoomTypeStatusApi extends ResourceApi<RoomTypeStatus> {

	public AdminRoomTypeStatusApi() {
		super(Dbs.roomTypeStatuses);
	}
}
