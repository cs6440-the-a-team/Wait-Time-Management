package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.HashMapDb;
import com.waittime.backend.model.Patient;

@Path("/admin/patient")
public class AdminPatientApi extends ResourceApi<Patient> {

	public AdminPatientApi() {
		super(HashMapDb.patients);
	}
}