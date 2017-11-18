package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.db.gen.model.DimPatient;

@Path("/admin/patient")
public class AdminPatientApi extends ResourceApi<DimPatient> {

	public AdminPatientApi() {
		super(Dbs.patients);
	}
}