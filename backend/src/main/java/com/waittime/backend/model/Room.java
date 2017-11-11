package com.waittime.backend.model;

import javax.annotation.Generated;

public class Room implements Model {

	private String id;
	private String name;
	private String room_status_id;
	private String start_time;
	private String end_time;
	private int expected_duration;
	private String room_type;

	@Generated("SparkTools")
	private Room(Builder builder) {
		this.id = builder.id;
		this.name = builder.name;
		this.room_status_id = builder.room_status_id;
		this.start_time = builder.start_time;
		this.end_time = builder.end_time;
		this.expected_duration = builder.expected_duration;
		this.room_type = builder.room_type;
	}

	public Room() {
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

	public String getRoom_status_id() {
		return room_status_id;
	}

	public void setRoom_status_id(String room_status_id) {
		this.room_status_id = room_status_id;
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

	public String getRoom_type() {
		return room_type;
	}

	public void setRoom_type(String room_type) {
		this.room_type = room_type;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((end_time == null) ? 0 : end_time.hashCode());
		result = prime * result + (int) (expected_duration ^ (expected_duration >>> 32));
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((room_type == null) ? 0 : room_type.hashCode());
		result = prime * result + ((start_time == null) ? 0 : start_time.hashCode());
		result = prime * result + ((room_status_id == null) ? 0 : room_status_id.hashCode());
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
		Room other = (Room) obj;
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
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (room_type == null) {
			if (other.room_type != null)
				return false;
		} else if (!room_type.equals(other.room_type))
			return false;
		if (start_time == null) {
			if (other.start_time != null)
				return false;
		} else if (!start_time.equals(other.start_time))
			return false;
		if (room_status_id == null) {
			if (other.room_status_id != null)
				return false;
		} else if (!room_status_id.equals(other.room_status_id))
			return false;
		return true;
	}

	/**
	 * Creates builder to build {@link Room}.
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
		public IRoom_status_idStage withName(String name);
	}

	@Generated("SparkTools")
	public interface IRoom_status_idStage {
		public IStart_timeStage withRoom_status_id(String room_status_id);
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
		public IRoom_typeStage withExpected_duration(int expected_duration);
	}

	@Generated("SparkTools")
	public interface IRoom_typeStage {
		public IBuildStage withRoom_type(String room_type);
	}

	@Generated("SparkTools")
	public interface IBuildStage {
		public Room build();
	}

	/**
	 * Builder to build {@link Room}.
	 */
	@Generated("SparkTools")
	public static final class Builder implements IIdStage, INameStage, IRoom_status_idStage, IStart_timeStage,
			IEnd_timeStage, IExpected_durationStage, IRoom_typeStage, IBuildStage {
		private String id;
		private String name;
		private String room_status_id;
		private String start_time;
		private String end_time;
		private int expected_duration;
		private String room_type;

		private Builder() {
		}

		@Override
		public INameStage withId(String id) {
			this.id = id;
			return this;
		}

		@Override
		public IRoom_status_idStage withName(String name) {
			this.name = name;
			return this;
		}

		@Override
		public IStart_timeStage withRoom_status_id(String room_status_id) {
			this.room_status_id = room_status_id;
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
		public IRoom_typeStage withExpected_duration(int expected_duration) {
			this.expected_duration = expected_duration;
			return this;
		}

		@Override
		public IBuildStage withRoom_type(String room_type) {
			this.room_type = room_type;
			return this;
		}

		@Override
		public Room build() {
			return new Room(this);
		}
	}



}
