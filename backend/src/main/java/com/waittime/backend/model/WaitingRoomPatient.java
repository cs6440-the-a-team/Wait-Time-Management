package com.waittime.backend.model;

import javax.annotation.Generated;

public class WaitingRoomPatient {

	private String patient_id;
	private String status;
	private String start_time;
	private String end_time;
	private String location;

	@Generated("SparkTools")
	private WaitingRoomPatient(Builder builder) {
		this.patient_id = builder.patient_id;
		this.status = builder.status;
		this.start_time = builder.start_time;
		this.end_time = builder.end_time;
		this.location = builder.location;
	}

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

	public String getEnd_time() {
		return end_time;
	}

	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((end_time == null) ? 0 : end_time.hashCode());
		result = prime * result + ((location == null) ? 0 : location.hashCode());
		result = prime * result + ((patient_id == null) ? 0 : patient_id.hashCode());
		result = prime * result + ((start_time == null) ? 0 : start_time.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
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
		WaitingRoomPatient other = (WaitingRoomPatient) obj;
		if (end_time == null) {
			if (other.end_time != null)
				return false;
		} else if (!end_time.equals(other.end_time))
			return false;
		if (location == null) {
			if (other.location != null)
				return false;
		} else if (!location.equals(other.location))
			return false;
		if (patient_id == null) {
			if (other.patient_id != null)
				return false;
		} else if (!patient_id.equals(other.patient_id))
			return false;
		if (start_time == null) {
			if (other.start_time != null)
				return false;
		} else if (!start_time.equals(other.start_time))
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		return true;
	}

	/**
	 * Creates builder to build {@link WaitingRoomPatient}.
	 * 
	 * @return created builder
	 */
	@Generated("SparkTools")
	public static IPatient_idStage builder() {
		return new Builder();
	}

	@Generated("SparkTools")
	public interface IPatient_idStage {
		public IStatusStage withPatient_id(String patient_id);
	}

	@Generated("SparkTools")
	public interface IStatusStage {
		public IStart_timeStage withStatus(String status);
	}

	@Generated("SparkTools")
	public interface IStart_timeStage {
		public IEnd_timeStage withStart_time(String start_time);
	}

	@Generated("SparkTools")
	public interface IEnd_timeStage {
		public ILocationStage withEnd_time(String end_time);
	}

	@Generated("SparkTools")
	public interface ILocationStage {
		public IBuildStage withLocation(String location);
	}

	@Generated("SparkTools")
	public interface IBuildStage {
		public WaitingRoomPatient build();
	}

	/**
	 * Builder to build {@link WaitingRoomPatient}.
	 */
	@Generated("SparkTools")
	public static final class Builder
			implements IPatient_idStage, IStatusStage, IStart_timeStage, IEnd_timeStage, ILocationStage, IBuildStage {
		private String patient_id;
		private String status;
		private String start_time;
		private String end_time;
		private String location;

		private Builder() {
		}

		@Override
		public IStatusStage withPatient_id(String patient_id) {
			this.patient_id = patient_id;
			return this;
		}

		@Override
		public IStart_timeStage withStatus(String status) {
			this.status = status;
			return this;
		}

		@Override
		public IEnd_timeStage withStart_time(String start_time) {
			this.start_time = start_time;
			return this;
		}

		@Override
		public ILocationStage withEnd_time(String end_time) {
			this.end_time = end_time;
			return this;
		}

		@Override
		public IBuildStage withLocation(String location) {
			this.location = location;
			return this;
		}

		@Override
		public WaitingRoomPatient build() {
			return new WaitingRoomPatient(this);
		}
	}

}
