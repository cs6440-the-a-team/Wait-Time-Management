package com.waittime.backend.db;

import java.util.concurrent.ConcurrentHashMap;

import com.waittime.backend.model.Patient;

public class PatientDb implements Db<String, Patient> {
	
	private ConcurrentHashMap<String, Patient> patients = new ConcurrentHashMap<>();
	
	public PatientDb() {
		patients.put("1", Patient.builder()
        			.withId("1")
        			.withName("John")
        			.withStatus("In Procedure")
        			.withStart_time("2017-11-02T01:03:09+00:00")
        			.withEnd_time("")
        			.withExpected_duration(60)
        			.withLocation_id("B32")
        			.withProcedure("surgery")
        			.build());
	}
	
	public Patient create(Patient patient) {
		return patients.putIfAbsent(patient.getId(), patient);
	}
	
	public Patient retrieve(String id) {
		return patients.get(id);
	}
	
	public Patient update(Patient patient) {
		return patients.put(patient.getId(), patient);
	}

	@Override
	public Patient delete(String id) {
		return patients.remove(id);
	}

}
