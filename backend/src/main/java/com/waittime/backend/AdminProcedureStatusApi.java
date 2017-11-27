package com.waittime.backend;

import java.util.LinkedList;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.ibatis.session.SqlSession;

import com.waittime.backend.db.MyBatisUtil;
import com.waittime.backend.db.gen.mapper.DimProcedureStatusMapper;
import com.waittime.backend.db.gen.model.DimProcedureStatus;
import com.waittime.backend.db.mapper.ProcedureStatusMapper;
import com.waittime.backend.model.ProcedureStatus;

@Path("/admin/procedure_status")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AdminProcedureStatusApi  {

	@GET
	public LinkedList<ProcedureStatus> list() {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			return session.getMapper(ProcedureStatusMapper.class).list();
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@GET
	@Path("/{id}")
	public ProcedureStatus retrieve(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			ProcedureStatus retrieve = session.getMapper(ProcedureStatusMapper.class).retrieve(id);
			if (retrieve == null) {
				throw new javax.ws.rs.NotFoundException();
			}
			return retrieve;
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@POST
	public ProcedureStatus create(DimProcedureStatus v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimProcedureStatusMapper dimPatientMapper = session.getMapper(DimProcedureStatusMapper.class);
			v.setActive(Boolean.TRUE);
			dimPatientMapper.insert(v);
			session.commit();
			return retrieve(v.getProcedure_status_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@PUT
	@Path("/{id}")
	public ProcedureStatus update(@PathParam("id") Integer id, DimProcedureStatus v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimProcedureStatusMapper dimPatientMapper = session.getMapper(DimProcedureStatusMapper.class);
			dimPatientMapper.updateByPrimaryKeySelective(v);
			session.commit();
			return retrieve(v.getProcedure_status_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@DELETE
	@Path("/{id}")
	public ProcedureStatus delete(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimProcedureStatusMapper roomStatusMapper = session.getMapper(DimProcedureStatusMapper.class);
			DimProcedureStatus r = roomStatusMapper.selectByPrimaryKey(id);

			r.setActive(Boolean.FALSE);
			roomStatusMapper.updateByPrimaryKeySelective(r);

			session.commit();
			
			return retrieve(id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}

}