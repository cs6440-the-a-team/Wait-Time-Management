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
import com.waittime.backend.db.SearchExample;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public abstract class ResourceApi<E, V> {

	private final Db<E, V> db;

	public ResourceApi(Db<E, V> db) {
		this.db = db;
	}

	@GET
	public LinkedList<V> list() {
		try {
			return db.search(null);
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		}
	}

	@POST
	@Path("/search")
	public LinkedList<V> search(SearchExample criteria) {
		try {
			return db.search(criteria);
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		}
	}

	@POST
	public V create(V v) {
		try {
			return db.create(v);
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		}
	}

	@PUT
	@Path("/{id}")
	public V update(@PathParam("id") E id, V v) {
		contains(id);
		try {
			return db.update(id, v);
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		}
	}

	@GET
	@Path("/{id}")
	public V retrieve(@PathParam("id") E id) {
		contains(id);
		try {
			return db.retrieve(id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		}
	}

	@DELETE
	@Path("/{id}")
	public V delete(@PathParam("id") E id) {
		contains(id);
		try {
			return db.delete(id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		}
	}

	@HEAD
	@Path("/{id}")
	public void contains(@PathParam("id") E id) {
		try {
			if (!db.contains(id)) {
				throw new javax.ws.rs.NotFoundException();
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		}
	}
}
