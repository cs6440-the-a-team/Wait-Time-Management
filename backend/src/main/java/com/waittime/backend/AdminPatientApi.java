package com.waittime.backend;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.NotSupportedException;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.waittime.backend.db.PatientDb;
import com.waittime.backend.model.Patient;

@Path("/admin/patient")
public class AdminPatientApi {
	
	private PatientDb db = new PatientDb();

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
    public Patient create(Patient patient) {
		if (null != retrieve(patient.getId())) {
			throw new javax.ws.rs.BadRequestException();
		}
        return db.create(patient);
    }
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{id}")
    public Patient retrieve(@PathParam("id") String id) {
        Patient p = db.retrieve(id);
        if (p==null) {
        		throw new javax.ws.rs.NotFoundException();
        }
        return p;
    }
	
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
    public Patient update(Patient patient) {
		retrieve(patient.getId());
        return db.update(patient);
    }
	
	@DELETE
	@Path("/{id}")
	public void delete(@PathParam("id") String id) {
		throw new NotSupportedException();
	}
}