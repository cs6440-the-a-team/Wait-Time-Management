package com.waittime.backend.model;

public class Room {

	private Integer room_id;
	private Integer room_type_id;
	private String room_name;
	private Integer room_status_id;
	private Integer last_room_log_id;
	private Integer expected_duration;
	private String start_time;

	public Integer getRoom_id() {
		return room_id;
	}

	public void setRoom_id(Integer room_id) {
		this.room_id = room_id;
	}

	public Integer getRoom_type_id() {
		return room_type_id;
	}

	public void setRoom_type_id(Integer room_type_id) {
		this.room_type_id = room_type_id;
	}

	public String getRoom_name() {
		return room_name;
	}

	public void setRoom_name(String room_name) {
		this.room_name = room_name;
	}

	public Integer getRoom_status_id() {
		return room_status_id;
	}

	public void setRoom_status_id(Integer room_status_id) {
		this.room_status_id = room_status_id;
	}

	public Integer getLast_room_log_id() {
		return last_room_log_id;
	}

	public void setLast_room_log_id(Integer last_room_log_id) {
		this.last_room_log_id = last_room_log_id;
	}

	public Integer getExpected_duration() {
		return expected_duration;
	}

	public void setExpected_duration(Integer expected_duration) {
		this.expected_duration = expected_duration;
	}

	public String getStart_time() {
		return start_time;
	}

	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}

}
