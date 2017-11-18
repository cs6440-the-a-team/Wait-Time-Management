package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.db.gen.model.DimProcedureStatus;

@Path("/admin/procedure_status")
public class AdminProcedureStatusApi extends ResourceApi<Integer, DimProcedureStatus> {

	public AdminProcedureStatusApi() {
		super(Dbs.procedure_statuses);
	}
}