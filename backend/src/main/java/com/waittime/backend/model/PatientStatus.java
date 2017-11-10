package com.waittime.backend.model;

import javax.annotation.Generated;

public class PatientStatus implements Model {

	private String id;
	private String name;
	private String procedure_id;
	private int expected_duration;
	private double average_duration;
	
	public PatientStatus() {
	}

	@Generated("SparkTools")
	private PatientStatus(Builder builder) {
		this.id = builder.id;
		this.name = builder.name;
		this.procedure_id = builder.procedure_id;
		this.expected_duration = builder.expected_duration;
		this.average_duration = builder.average_duration;
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

	public String getProcedure_id() {
		return procedure_id;
	}

	public void setProcedure_id(String procedure_id) {
		this.procedure_id = procedure_id;
	}

	public int getExpected_duration() {
		return expected_duration;
	}

	public void setExpected_duration(int expected_duration) {
		this.expected_duration = expected_duration;
	}

	public double getAverage_duration() {
		return average_duration;
	}

	public void setAverage_duration(double average_duration) {
		this.average_duration = average_duration;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		long temp;
		temp = Double.doubleToLongBits(average_duration);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + expected_duration;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((procedure_id == null) ? 0 : procedure_id.hashCode());
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
		PatientStatus other = (PatientStatus) obj;
		if (Double.doubleToLongBits(average_duration) != Double.doubleToLongBits(other.average_duration))
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
		if (procedure_id == null) {
			if (other.procedure_id != null)
				return false;
		} else if (!procedure_id.equals(other.procedure_id))
			return false;
		return true;
	}

	/**
	 * Creates builder to build {@link PatientStatus}.
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
		public IProcedure_idStage withName(String name);
	}

	@Generated("SparkTools")
	public interface IProcedure_idStage {
		public IExpected_durationStage withProcedure_id(String procedure_id);
	}

	@Generated("SparkTools")
	public interface IExpected_durationStage {
		public IAverage_durationStage withExpected_duration(int expected_duration);
	}

	@Generated("SparkTools")
	public interface IAverage_durationStage {
		public IBuildStage withAverage_duration(double average_duration);
	}

	@Generated("SparkTools")
	public interface IBuildStage {
		public PatientStatus build();
	}

	/**
	 * Builder to build {@link PatientStatus}.
	 */
	@Generated("SparkTools")
	public static final class Builder implements IIdStage, INameStage, IProcedure_idStage, IExpected_durationStage,
			IAverage_durationStage, IBuildStage {
		private String id;
		private String name;
		private String procedure_id;
		private int expected_duration;
		private double average_duration;

		private Builder() {
		}

		@Override
		public INameStage withId(String id) {
			this.id = id;
			return this;
		}

		@Override
		public IProcedure_idStage withName(String name) {
			this.name = name;
			return this;
		}

		@Override
		public IExpected_durationStage withProcedure_id(String procedure_id) {
			this.procedure_id = procedure_id;
			return this;
		}

		@Override
		public IAverage_durationStage withExpected_duration(int expected_duration) {
			this.expected_duration = expected_duration;
			return this;
		}

		@Override
		public IBuildStage withAverage_duration(double average_duration) {
			this.average_duration = average_duration;
			return this;
		}

		@Override
		public PatientStatus build() {
			return new PatientStatus(this);
		}
	}

}
