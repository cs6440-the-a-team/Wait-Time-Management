package com.waittime.backend.model;

import java.util.LinkedList;
import javax.annotation.Generated;

public class Procedure implements Model {

	private String id;
	private String name;
	private LinkedList<String> procedure_statuses = new LinkedList<>();

	@Generated("SparkTools")
	private Procedure(Builder builder) {
		this.id = builder.id;
		this.name = builder.name;
		this.procedure_statuses = builder.procedure_statuses;
	}
	
	public Procedure() {
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

	public LinkedList<String> getProcedure_statuses() {
		return procedure_statuses;
	}

	public void setProcedure_statuses(LinkedList<String> procedure_statuses) {
		this.procedure_statuses = procedure_statuses;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((procedure_statuses == null) ? 0 : procedure_statuses.hashCode());
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
		if (procedure_statuses == null) {
			if (other.procedure_statuses != null)
				return false;
		} else if (!procedure_statuses.equals(other.procedure_statuses))
			return false;
		return true;
	}

	/**
	 * Creates builder to build {@link Procedure}.
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
		public IProcedure_statusesStage withName(String name);
	}

	@Generated("SparkTools")
	public interface IProcedure_statusesStage {
		public IBuildStage withProcedure_statuses(LinkedList<String> procedure_statuses);
	}

	@Generated("SparkTools")
	public interface IBuildStage {
		public Procedure build();
	}

	/**
	 * Builder to build {@link Procedure}.
	 */
	@Generated("SparkTools")
	public static final class Builder implements IIdStage, INameStage, IProcedure_statusesStage, IBuildStage {
		private String id;
		private String name;
		private LinkedList<String> procedure_statuses;

		private Builder() {
		}

		@Override
		public INameStage withId(String id) {
			this.id = id;
			return this;
		}

		@Override
		public IProcedure_statusesStage withName(String name) {
			this.name = name;
			return this;
		}

		@Override
		public IBuildStage withProcedure_statuses(LinkedList<String> procedure_statuses) {
			this.procedure_statuses = procedure_statuses;
			return this;
		}

		@Override
		public Procedure build() {
			return new Procedure(this);
		}
	}



}
