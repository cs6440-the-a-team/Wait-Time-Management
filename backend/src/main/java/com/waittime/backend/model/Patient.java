package com.waittime.backend.model;

import javax.annotation.Generated;

public class Patient implements Model {

	private String id;
	private String name;
	private String status;
	private String start_time;
	private String end_time;
	private int expected_duration;
	private String location_id;
	private String procedure_status_id;


	@Generated("SparkTools")
	private Patient(Builder builder) {
		this.id = builder.id;
		this.name = builder.name;
		this.status = builder.status;
		this.start_time = builder.start_time;
		this.end_time = builder.end_time;
		this.expected_duration = builder.expected_duration;
		this.location_id = builder.location_id;
		this.procedure_status_id = builder.procedure_status_id;
	}

	
	public Patient() {
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
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


	public int getExpected_duration() {
		return expected_duration;
	}


	public void setExpected_duration(int expected_duration) {
		this.expected_duration = expected_duration;
	}


	public String getLocation_id() {
		return location_id;
	}


	public void setLocation_id(String location_id) {
		this.location_id = location_id;
	}


	public String getProcedure_status_id() {
		return procedure_status_id;
	}


	public void setProcedure_status_id(String procedure_status_id) {
		this.procedure_status_id = procedure_status_id;
	}


	/**
	 * Creates builder to build {@link Patient}.
	 * @return created builder
	 */
	@Generated("SparkTools")
	public static IIdStage builder() {
		return new Builder();
	}


	@Generated("SparkTools")
	public interface IIdStage {
		public INameStage withId(String id);
	}


	@Generated("SparkTools")
	public interface INameStage {
		public IStatusStage withName(String name);
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
		public IExpected_durationStage withEnd_time(String end_time);
	}


	@Generated("SparkTools")
	public interface IExpected_durationStage {
		public ILocation_idStage withExpected_duration(int expected_duration);
	}


	@Generated("SparkTools")
	public interface ILocation_idStage {
		public IProcedure_status_idStage withLocation_id(String location_id);
	}


	@Generated("SparkTools")
	public interface IProcedure_status_idStage {
		public IBuildStage withProcedure_status_id(String procedure_status_id);
	}


	@Generated("SparkTools")
	public interface IBuildStage {
		public Patient build();
	}


	/**
	 * Builder to build {@link Patient}.
	 */
	@Generated("SparkTools")
	public static final class Builder implements IIdStage, INameStage, IStatusStage, IStart_timeStage, IEnd_timeStage,
			IExpected_durationStage, ILocation_idStage, IProcedure_status_idStage, IBuildStage {
		private String id;
		private String name;
		private String status;
		private String start_time;
		private String end_time;
		private int expected_duration;
		private String location_id;
		private String procedure_status_id;

		private Builder() {
		}

		@Override
		public INameStage withId(String id) {
			this.id = id;
			return this;
		}

		@Override
		public IStatusStage withName(String name) {
			this.name = name;
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
		public IExpected_durationStage withEnd_time(String end_time) {
			this.end_time = end_time;
			return this;
		}

		@Override
		public ILocation_idStage withExpected_duration(int expected_duration) {
			this.expected_duration = expected_duration;
			return this;
		}

		@Override
		public IProcedure_status_idStage withLocation_id(String location_id) {
			this.location_id = location_id;
			return this;
		}

		@Override
		public IBuildStage withProcedure_status_id(String procedure_status_id) {
			this.procedure_status_id = procedure_status_id;
			return this;
		}

		@Override
		public Patient build() {
			return new Patient(this);
		}
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((end_time == null) ? 0 : end_time.hashCode());
		result = prime * result + expected_duration;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((location_id == null) ? 0 : location_id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((procedure_status_id == null) ? 0 : procedure_status_id.hashCode());
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
		Patient other = (Patient) obj;
		if (end_time == null) {
			if (other.end_time != null)
				return false;
		} else if (!end_time.equals(other.end_time))
			return false;
		if (expected_duration != other.expected_duration)
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (location_id == null) {
			if (other.location_id != null)
				return false;
		} else if (!location_id.equals(other.location_id))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (procedure_status_id == null) {
			if (other.procedure_status_id != null)
				return false;
		} else if (!procedure_status_id.equals(other.procedure_status_id))
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


}
