package com.waittime.backend.model;

public class RoomTypeStatus {

	private Integer room_status_id;
	private String room_status;
	private Integer room_type_id;
	private Integer expected_duration;
	private Integer room_status_order;
	private Double average_duration;

	public Integer getRoom_status_id() {
		return room_status_id;
	}

	public void setRoom_status_id(Integer room_status_id) {
		this.room_status_id = room_status_id;
	}

	public String getRoom_status() {
		return room_status;
	}

	public void setRoom_status(String room_status) {
		this.room_status = room_status;
	}

	public Integer getRoom_type_id() {
		return room_type_id;
	}

	public void setRoom_type_id(Integer room_type_id) {
		this.room_type_id = room_type_id;
	}

	public Integer getExpected_duration() {
		return expected_duration;
	}

	public void setExpected_duration(Integer expected_duration) {
		this.expected_duration = expected_duration;
	}

	public Integer getRoom_status_order() {
		return room_status_order;
	}

	public void setRoom_status_order(Integer room_status_order) {
		this.room_status_order = room_status_order;
	}

	public Double getAverage_duration() {
		return average_duration;
	}

	public void setAverage_duration(Double average_duration) {
		this.average_duration = average_duration;
	}

}
