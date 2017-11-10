package com.waittime.backend.model;

import java.util.LinkedList;
import javax.annotation.Generated;

public class RoomType implements Model {

	private String id;
	private String name;
	private LinkedList<String> room_statuses = new LinkedList<>();
	
	public RoomType() {
	}

	@Generated("SparkTools")
	private RoomType(Builder builder) {
		this.id = builder.id;
		this.name = builder.name;
		this.room_statuses = builder.room_statuses;
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

	public LinkedList<String> getRoom_statuses() {
		return room_statuses;
	}

	public void setRoom_statuses(LinkedList<String> room_statuses) {
		this.room_statuses = room_statuses;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((room_statuses == null) ? 0 : room_statuses.hashCode());
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
		RoomType other = (RoomType) obj;
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
		if (room_statuses == null) {
			if (other.room_statuses != null)
				return false;
		} else if (!room_statuses.equals(other.room_statuses))
			return false;
		return true;
	}

	/**
	 * Creates builder to build {@link RoomType}.
	 * 
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
		public IRoom_statusesStage withName(String name);
	}

	@Generated("SparkTools")
	public interface IRoom_statusesStage {
		public IBuildStage withRoom_statuses(LinkedList<String> room_statuses);
	}

	@Generated("SparkTools")
	public interface IBuildStage {
		public RoomType build();
	}

	/**
	 * Builder to build {@link RoomType}.
	 */
	@Generated("SparkTools")
	public static final class Builder implements IIdStage, INameStage, IRoom_statusesStage, IBuildStage {
		private String id;
		private String name;
		private LinkedList<String> room_statuses;

		private Builder() {
		}

		@Override
		public INameStage withId(String id) {
			this.id = id;
			return this;
		}

		@Override
		public IRoom_statusesStage withName(String name) {
			this.name = name;
			return this;
		}

		@Override
		public IBuildStage withRoom_statuses(LinkedList<String> room_statuses) {
			this.room_statuses = room_statuses;
			return this;
		}

		@Override
		public RoomType build() {
			return new RoomType(this);
		}
	}

}
