package com.waittime.backend;

import javax.ws.rs.Path;

import com.waittime.backend.db.Dbs;
import com.waittime.backend.db.gen.model.DimProcedure;

@Path("/admin/procedure")
public class AdminProcedureApi extends ResourceApi<DimProcedure> {

	public AdminProcedureApi() {
		super(Dbs.procedures);
	}
}