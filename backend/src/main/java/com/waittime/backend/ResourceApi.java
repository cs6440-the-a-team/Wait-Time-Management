package com.waittime.backend;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.waittime.backend.db.Db;
import com.waittime.backend.model.Model;

public abstract class ResourceApi<V extends Model> {

	private final Db<String, V> db;

	public ResourceApi(Db<String, V> db) {
		super();
		this.db = db;
	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public V create(V v) {
		if (null != retrieve(v.getId())) {
			throw new javax.ws.rs.BadRequestException();
		}
		return db.create(v);
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{id}")
	public V retrieve(@PathParam("id") String id) {
		V p = db.retrieve(id);
		if (p == null) {
			throw new javax.ws.rs.NotFoundException();
		}
		return p;
	}

	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public V update(V v) {
		retrieve(v.getId());
		return db.update(v);
	}

	@DELETE
	@Path("/{id}")
	public V delete(@PathParam("id") String id) {
		retrieve(id);
		return db.delete(id);
	}
}
