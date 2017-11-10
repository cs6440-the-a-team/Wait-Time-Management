package com.waittime.backend.db;

import java.util.LinkedList;

import com.google.common.collect.ImmutableList;
import com.waittime.backend.model.Patient;
import com.waittime.backend.model.PatientStatus;
import com.waittime.backend.model.Procedure;
import com.waittime.backend.model.Room;
import com.waittime.backend.model.RoomType;
import com.waittime.backend.model.RoomTypeStatus;

public enum Dbs {
	;
	public static Db<String, Patient> patients = new HashMapDb<>();
	public static Db<String, PatientStatus> patient_statuses = new HashMapDb<>();
	public static Db<String, Room> rooms = new HashMapDb<>();
	public static Db<String, RoomType> roomTypes = new HashMapDb<>();
	public static Db<String, RoomTypeStatus> roomTypeStatuses = new HashMapDb<>();
	public static Db<String, Procedure> procedures = new HashMapDb<>();

	static {
			patients.create(Patient.builder()
	        			.withId("B32")
	        			.withName("John Joe")
	        			.withStatus("In Procedure")
	        			.withStart_time("2017-11-02T01:03:09+00:00")
	        			.withEnd_time("")
	        			.withExpected_duration(60)
	        			.withLocation_id("H1")
	        			.withProcedure("Surgery")
	        			.build());
			
			patients.create(Patient.builder()
	    			.withId("I55")
	    			.withName("Jane Doe")
	    			.withStatus("Recover")
	    			.withStart_time("2017-11-02T12:00:09+00:00")
	    			.withEnd_time("")
	    			.withExpected_duration(30)
	    			.withLocation_id("ICU")
	    			.withProcedure("Imaging")
	    			.build());
			
			patients.create(Patient.builder()
	    			.withId("D42")
	    			.withName("Debra Anon")
	    			.withStatus("In Procedure")
	    			.withStart_time("2017-11-02T01:25:09+00:00")
	    			.withEnd_time("")
	    			.withExpected_duration(30)
	    			.withLocation_id("R32")
	    			.withProcedure("Surgery")
	    			.build());
			
			patients.create(Patient.builder()
	    			.withId("K71")
	    			.withName("Kermit Frogger")
	    			.withStatus("In Triage")
	    			.withStart_time("2017-11-02T01:40:09+00:00")
	    			.withEnd_time("")
	    			.withExpected_duration(45)
	    			.withLocation_id("OR3")
	    			.withProcedure("Surgery")
	    			.build());
			
			patients.create(Patient.builder()
	    			.withId("P12")
	    			.withName("Marky Bee")
	    			.withStatus("In Procedure")
	    			.withStart_time("2017-11-02T03:00:09+00:00")
	    			.withEnd_time("")
	    			.withExpected_duration(120)
	    			.withLocation_id("T7")
	    			.withProcedure("Surgery")
	    			.build());
			
			rooms.create(Room.builder()
	    			.withId("OR3")
	    			.withName("Operating Room 3")
	    			.withStatus("occupied")
	    			.withStart_time("2017-11-02T01:03:09+00:00")
	    			.withEnd_time("")
	    			.withExpected_duration(240)
	    			.withRoom_type("OR")
	    			.build());
			rooms.create(Room.builder()
	    			.withId("OR1")
	    			.withName("Operating Room 1")
	    			.withStatus("vacant")
	    			.withStart_time("")
	    			.withEnd_time("")
	    			.withExpected_duration(0)
	    			.withRoom_type("OR")
	    			.build());
			
			roomTypes.create(RoomType.builder()
					.withId("OR")
					.withName("Operating Room")
					.withRoom_statuses(new LinkedList<String>(ImmutableList.of("vacant", "occupied", "ready", "needs maintenance")))
					.build());
			roomTypes.create(RoomType.builder()
					.withId("WR")
					.withName("Waiting Room")
					.withRoom_statuses(new LinkedList<String>(ImmutableList.of("open", "closed")))
					.build());
			procedures.create(Procedure.builder()
					.withId("surgery")
					.withName("Surgery")
					.withStatuses(new LinkedList<String>(ImmutableList.of("pre-op", "op", "post-op")))
					.build());
	}
}
