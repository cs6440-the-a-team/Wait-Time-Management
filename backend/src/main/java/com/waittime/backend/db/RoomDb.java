package com.waittime.backend.db;

import java.util.LinkedList;
import java.util.concurrent.ConcurrentHashMap;

import com.waittime.backend.model.Room;

public class RoomDb implements Db<String, Room> {

	private ConcurrentHashMap<String, Room> rooms = new ConcurrentHashMap<>();
	
	public RoomDb() {
		rooms.put("OR3", Room.builder()
    			.withId("OR3")
    			.withName("Operating Room 3")
    			.withStatus("occupied")
    			.withStart_time("2017-11-02T01:03:09+00:00")
    			.withEnd_time("")
    			.withExpected_duration(240)
    			.withRoom_type("OR")
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

	@Override
	public Room delete(String id) {
		return rooms.remove(id);
	}
	
	@Override
	public LinkedList<Room> list() {
		return new LinkedList<Room>(rooms.values());
	}
	
	@Override
	public boolean contains(String id) {
		return rooms.containsKey(id);
	}
}
