package com.waittime.backend.model;

import java.util.LinkedList;
import javax.annotation.Generated;

public class WaitingRoom {

	private LinkedList<WaitingRoomPatient> patients = new LinkedList<WaitingRoomPatient>();
	
	public WaitingRoom() {
	}

	@Generated("SparkTools")
	private WaitingRoom(Builder builder) {
		this.patients = builder.patients;
	}

	public LinkedList<WaitingRoomPatient> getPatients() {
		return patients;
	}

	public void setPatients(LinkedList<WaitingRoomPatient> patients) {
		this.patients = patients;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((patients == null) ? 0 : patients.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		WaitingRoom other = (WaitingRoom) obj;
		if (patients == null) {
			if (other.patients != null)
				return false;
		} else if (!patients.equals(other.patients))
			return false;
		return true;
	}

	/**
	 * Creates builder to build {@link WaitingRoom}.
	 * @return created builder
	 */
	@Generated("SparkTools")
	public static Builder builder() {
		return new Builder();
	}

	/**
	 * Builder to build {@link WaitingRoom}.
	 */
	@Generated("SparkTools")
	public static final class Builder {
		private LinkedList<WaitingRoomPatient> patients;

		private Builder() {
		}

		public Builder withPatients(LinkedList<WaitingRoomPatient> patients) {
			this.patients = patients;
			return this;
		}
		
		public Builder withPatient(WaitingRoomPatient patient) {
			if (patients==null) {
				patients = new LinkedList<WaitingRoomPatient>();
			}
			this.patients.add(patient);
			return this;
		}

		public WaitingRoom build() {
			return new WaitingRoom(this);
		}
	}
	
	
}
