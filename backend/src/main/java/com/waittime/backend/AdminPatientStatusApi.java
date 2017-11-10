package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.model.PatientStatus;

@Path("/admin/patient_status")
public class AdminPatientStatusApi extends ResourceApi<PatientStatus> {

	public AdminPatientStatusApi() {
		super(Dbs.patient_statuses);
	}
}