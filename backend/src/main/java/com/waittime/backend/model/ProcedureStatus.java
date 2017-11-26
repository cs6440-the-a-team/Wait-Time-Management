package com.waittime.backend.model;

public class ProcedureStatus {

	private Integer procedure_status_id;
	private String procedure_status;
	private Integer procedure_id;
	private Integer procedure_status_order;
	private Integer expected_duration;
	private Double average_duration;

	public Integer getProcedure_status_id() {
		return procedure_status_id;
	}

	public void setProcedure_status_id(Integer procedure_status_id) {
		this.procedure_status_id = procedure_status_id;
	}

	public String getProcedure_status() {
		return procedure_status;
	}

	public void setProcedure_status(String procedure_status) {
		this.procedure_status = procedure_status;
	}

	public Integer getProcedure_id() {
		return procedure_id;
	}

	public void setProcedure_id(Integer procedure_id) {
		this.procedure_id = procedure_id;
	}

	public Integer getProcedure_status_order() {
		return procedure_status_order;
	}

	public void setProcedure_status_order(Integer procedure_status_order) {
		this.procedure_status_order = procedure_status_order;
	}

	public Integer getExpected_duration() {
		return expected_duration;
	}

	public void setExpected_duration(Integer expected_duration) {
		this.expected_duration = expected_duration;
	}

	public Double getAverage_duration() {
		return average_duration;
	}

	public void setAverage_duration(Double average_duration) {
		this.average_duration = average_duration;
	}

}
