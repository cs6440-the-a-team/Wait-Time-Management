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
		private String start_time;
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

		public String getStart_time() {
			return start_time;
		}

		public void setStart_time(String start_time) {
			this.start_time = start_time;
		}

		public String getLocation() {
			return location;
		}

		public void setLocation(String location) {
			this.location = location;
		}

	}
}
