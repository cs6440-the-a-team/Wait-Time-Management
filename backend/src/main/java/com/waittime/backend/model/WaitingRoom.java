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
	
}
