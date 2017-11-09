package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.model.Procedure;

@Path("/admin/procedure")
public class AdminProcedureApi extends ResourceApi<Procedure> {

	public AdminProcedureApi() {
		super(Dbs.procedures);
	}
}