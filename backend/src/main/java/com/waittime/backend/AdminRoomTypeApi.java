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
import com.waittime.backend.db.gen.mapper.DimRoomTypeMapper;
import com.waittime.backend.db.gen.model.DimRoomType;
import com.waittime.backend.db.gen.model.DimRoomTypeExample;

@Path("/admin/room_type")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AdminRoomTypeApi {
	
	@GET
	public LinkedList<DimRoomType> list() {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimRoomTypeExample ex = new DimRoomTypeExample();
			ex.createCriteria().andActiveEqualTo(Boolean.TRUE);
			return new LinkedList<>(session.getMapper(DimRoomTypeMapper.class).selectByExample(ex));
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@GET
	@Path("/{id}")
	public DimRoomType retrieve(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimRoomType retrieve = session.getMapper(DimRoomTypeMapper.class).selectByPrimaryKey(id);
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
	public DimRoomType create(DimRoomType v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimRoomTypeMapper dimPatientMapper = session.getMapper(DimRoomTypeMapper.class);
			v.setActive(Boolean.TRUE);
			dimPatientMapper.insert(v);
			session.commit();
			return retrieve(v.getRoom_type_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@PUT
	@Path("/{id}")
	public DimRoomType update(@PathParam("id") Integer id, DimRoomType v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimRoomTypeMapper dimPatientMapper = session.getMapper(DimRoomTypeMapper.class);
			dimPatientMapper.updateByPrimaryKeySelective(v);
			session.commit();
			return retrieve(v.getRoom_type_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@DELETE
	@Path("/{id}")
	public DimRoomType delete(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimRoomType r = retrieve(id);

			r.setActive(Boolean.FALSE);

			session.getMapper(DimRoomTypeMapper.class).updateByPrimaryKeySelective(r);
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