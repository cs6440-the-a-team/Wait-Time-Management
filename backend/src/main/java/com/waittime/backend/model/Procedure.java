package com.waittime.backend.model;

import java.util.LinkedList;
import javax.annotation.Generated;

public class Procedure implements Model {

	private String id;
	private String name;
	private LinkedList<String> statuses = new LinkedList<>();
	
	public Procedure() {
	}

	@Generated("SparkTools")
	private Procedure(Builder builder) {
		this.id = builder.id;
		this.name = builder.name;
		this.statuses = builder.statuses;
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

	public LinkedList<String> getStatuses() {
		return statuses;
	}

	public void setStatuses(LinkedList<String> statuses) {
		this.statuses = statuses;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((statuses == null) ? 0 : statuses.hashCode());
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
		Procedure other = (Procedure) obj;
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
		if (statuses == null) {
			if (other.statuses != null)
				return false;
		} else if (!statuses.equals(other.statuses))
			return false;
		return true;
	}

	/**
	 * Creates builder to build {@link Procedure}.
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
		public IStatusesStage withName(String name);
	}

	@Generated("SparkTools")
	public interface IStatusesStage {
		public IBuildStage withStatuses(LinkedList<String> statuses);
	}

	@Generated("SparkTools")
	public interface IBuildStage {
		public Procedure build();
	}

	/**
	 * Builder to build {@link Procedure}.
	 */
	@Generated("SparkTools")
	public static final class Builder implements IIdStage, INameStage, IStatusesStage, IBuildStage {
		private String id;
		private String name;
		private LinkedList<String> statuses;

		private Builder() {
		}

		@Override
		public INameStage withId(String id) {
			this.id = id;
			return this;
		}

		@Override
		public IStatusesStage withName(String name) {
			this.name = name;
			return this;
		}

		@Override
		public IBuildStage withStatuses(LinkedList<String> statuses) {
			this.statuses = statuses;
			return this;
		}

		@Override
		public Procedure build() {
			return new Procedure(this);
		}
	}

}
