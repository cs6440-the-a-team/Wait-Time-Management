package com.waittime.backend.db;

import java.util.concurrent.ConcurrentHashMap;

import com.waittime.backend.model.Room;

public class RoomDb {

	private ConcurrentHashMap<String, Room> rooms = new ConcurrentHashMap<>();
	
	public RoomDb() {
		rooms.put("1", Room.builder()
    			.withId("1")
    			.withName("B32")
    			.withStatus("occupied")
    			.withStart_time("2017-11-02T01:03:09+00:00")
    			.withEnd_time("")
    			.withExpected_duration(60)
    			.withRoom_type("post-op")
    			.build());
	}
	
	public Room create(Room room) {
		return rooms.putIfAbsent(room.getId(), room);
	}
	
	public Room retrieve(String id) {
		return rooms.get(id);
	}
	
	public Room update(Room room) {
		return rooms.put(room.getId(), room);
	}
}
