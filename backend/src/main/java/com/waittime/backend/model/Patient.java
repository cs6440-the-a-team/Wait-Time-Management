package com.waittime.backend.model;

public class Patient {

	private Integer patient_id;
	private String alias;
	private String patient_name;
	private Integer room_id;
	private Integer procedure_id;
	private Integer procedure_status_id;
	private Integer expected_duration;
	private String start_time;
	private Integer last_patient_log_id;
	
	public Integer getPatient_id() {
		return patient_id;
	}
	public void setPatient_id(Integer patient_id) {
		this.patient_id = patient_id;
	}
	public String getAlias() {
		return alias;
	}
	public void setAlias(String alias) {
		this.alias = alias;
	}
	public String getPatient_name() {
		return patient_name;
	}
	public void setPatient_name(String patient_name) {
		this.patient_name = patient_name;
	}
	public Integer getRoom_id() {
		return room_id;
	}
	public void setRoom_id(Integer room_id) {
		this.room_id = room_id;
	}
	public Integer getProcedure_id() {
		return procedure_id;
	}
	public void setProcedure_id(Integer procedure_id) {
		this.procedure_id = procedure_id;
	}
	public Integer getProcedure_status_id() {
		return procedure_status_id;
	}
	public void setProcedure_status_id(Integer procedure_status_id) {
		this.procedure_status_id = procedure_status_id;
	}
	public Integer getExpected_duration() {
		return expected_duration;
	}
	public void setExpected_duration(Integer expected_duration) {
		this.expected_duration = expected_duration;
	}
	public String getStart_time() {
		return start_time;
	}
	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}
	public Integer getLast_patient_log_id() {
		return last_patient_log_id;
	}
	public void setLast_patient_log_id(Integer last_patient_log_id) {
		this.last_patient_log_id = last_patient_log_id;
	}
}
