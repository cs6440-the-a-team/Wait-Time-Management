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
import com.waittime.backend.db.gen.mapper.DimProcedureMapper;
import com.waittime.backend.db.gen.model.DimProcedure;
import com.waittime.backend.db.gen.model.DimProcedureExample;

@Path("/admin/procedure")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AdminProcedureApi {
	
	@GET
	public LinkedList<DimProcedure> list() {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimProcedureExample ex = new DimProcedureExample();
			ex.createCriteria().andActiveEqualTo(Boolean.TRUE);
			return new LinkedList<>(session.getMapper(DimProcedureMapper.class).selectByExample(ex));
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@GET
	@Path("/{id}")
	public DimProcedure retrieve(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimProcedure retrieve = session.getMapper(DimProcedureMapper.class).selectByPrimaryKey(id);
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
	public DimProcedure create(DimProcedure v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimProcedureMapper dimPatientMapper = session.getMapper(DimProcedureMapper.class);
			v.setActive(Boolean.TRUE);
			dimPatientMapper.insert(v);
			session.commit();
			return retrieve(v.getProcedure_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@PUT
	@Path("/{id}")
	public DimProcedure update(@PathParam("id") Integer id, DimProcedure v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimProcedureMapper dimPatientMapper = session.getMapper(DimProcedureMapper.class);
			dimPatientMapper.updateByPrimaryKeySelective(v);
			session.commit();
			return retrieve(v.getProcedure_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@DELETE
	@Path("/{id}")
	public DimProcedure delete(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			
			DimProcedure r = retrieve(id);
			r.setActive(Boolean.FALSE);
			
			session.getMapper(DimProcedureMapper.class).updateByPrimaryKeySelective(r);
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