package com.waittime.backend.model;

import java.util.LinkedList;

public class WaitingRoom {

	private LinkedList<WaitingRoomPatient> patients = new LinkedList<WaitingRoomPatient>();

	public LinkedList<WaitingRoomPatient> getPatients() {
		return patients;
	}

	public void setPatients(LinkedList<WaitingRoomPatient> patients) {
		this.patients = patients;
	}
	
	
	public static class WaitingRoomPatient {

		private String patient_id;
		private String status;
		private String time_elapsed;
		private int expected_duration;
		private String location;

		public String getPatient_id() {
			return patient_id;
		}

		public void setPatient_id(String patient_id) {
			this.patient_id = patient_id;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public String getTime_elapsed() {
			return time_elapsed;
		}

		public void setTime_elapsed(String time_elapsed) {
			this.time_elapsed = time_elapsed;
		}

		public int getExpected_duration() {
			return expected_duration;
		}

		public void setExpected_duration(int expected_duration) {
			this.expected_duration = expected_duration;
		}

		public String getLocation() {
			return location;
		}

		public void setLocation(String location) {
			this.location = location;
		}

	}

	
}
