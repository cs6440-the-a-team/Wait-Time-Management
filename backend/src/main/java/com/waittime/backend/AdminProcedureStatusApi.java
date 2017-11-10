package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.model.ProcedureStatus;

@Path("/admin/procedure_status")
public class AdminProcedureStatusApi extends ResourceApi<ProcedureStatus> {

	public AdminProcedureStatusApi() {
		super(Dbs.procedure_statuses);
	}
}