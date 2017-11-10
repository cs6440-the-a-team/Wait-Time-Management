package com.waittime.backend;

import java.util.LinkedList;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.HEAD;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.waittime.backend.db.Db;
import com.waittime.backend.model.Model;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public abstract class ResourceApi<V extends Model> {

	private final Db<String, V> db;

	public ResourceApi(Db<String, V> db) {
		this.db = db;
	}
	
	@GET
	public LinkedList<V> list() {
		return db.list();
	}
	
	@POST
	public V create(V v) {
		if (db.contains(v.getId())) {
			throw new javax.ws.rs.BadRequestException();
		}
		return db.create(v);
	}

	@PUT
	@Path("/{id}")
	public V update(@PathParam("id") String id, V v) {
		contains(id);
		return db.update(id, v);
	}
	
	@GET
	@Path("/{id}")
	public V retrieve(@PathParam("id") String id) {
		contains(id);
		return db.retrieve(id);
	}

	@DELETE
	@Path("/{id}")
	public V delete(@PathParam("id") String id) {
		contains(id);
		return db.delete(id);
	}
	
	@HEAD
	@Path("/{id}")
	public void contains(@PathParam("id") String id) {
		System.out.println(!db.contains(id));
		if (!db.contains(id)) {
			throw new javax.ws.rs.NotFoundException();
		}
	}

}
