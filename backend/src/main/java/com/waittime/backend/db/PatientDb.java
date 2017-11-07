package com.waittime.backend.db;

import java.util.LinkedList;
import java.util.concurrent.ConcurrentHashMap;

import com.waittime.backend.model.Patient;

public class PatientDb implements Db<String, Patient> {
	
	private ConcurrentHashMap<String, Patient> patients = new ConcurrentHashMap<>();
	
	public PatientDb() {
		patients.put("B32", Patient.builder()
        			.withId("B32")
        			.withName("John Joe")
        			.withStatus("In Procedure")
        			.withStart_time("2017-11-02T01:03:09+00:00")
        			.withEnd_time("")
        			.withExpected_duration(60)
        			.withLocation_id("H1")
        			.withProcedure("Surgery")
        			.build());
		
		patients.put("I55", Patient.builder()
    			.withId("I55")
    			.withName("Jane Doe")
    			.withStatus("Recover")
    			.withStart_time("2017-11-02T12:00:09+00:00")
    			.withEnd_time("")
    			.withExpected_duration(30)
    			.withLocation_id("ICU")
    			.withProcedure("Imaging")
    			.build());
		
		patients.put("D42", Patient.builder()
    			.withId("D42")
    			.withName("Debra Anon")
    			.withStatus("In Procedure")
    			.withStart_time("2017-11-02T01:25:09+00:00")
    			.withEnd_time("")
    			.withExpected_duration(30)
    			.withLocation_id("R32")
    			.withProcedure("Surgery")
    			.build());
		
		patients.put("K71", Patient.builder()
    			.withId("K71")
    			.withName("Kermit Frogger")
    			.withStatus("In Triage")
    			.withStart_time("2017-11-02T01:40:09+00:00")
    			.withEnd_time("")
    			.withExpected_duration(45)
    			.withLocation_id("OR3")
    			.withProcedure("Surgery")
    			.build());
		
		patients.put("P12", Patient.builder()
    			.withId("P12")
    			.withName("Marky Bee")
    			.withStatus("In Procedure")
    			.withStart_time("2017-11-02T03:00:09+00:00")
    			.withEnd_time("")
    			.withExpected_duration(120)
    			.withLocation_id("T7")
    			.withProcedure("Surgery")
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

	@Override
	public LinkedList<Patient> list() {
		return new LinkedList<Patient>(patients.values());
	}

	@Override
	public boolean contains(String id) {
		return patients.containsKey(id);
	}
}
