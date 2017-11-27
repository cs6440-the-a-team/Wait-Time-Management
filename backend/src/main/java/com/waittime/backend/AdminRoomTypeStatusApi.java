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
import com.waittime.backend.db.gen.mapper.DimRoomStatusMapper;
import com.waittime.backend.db.gen.model.DimRoomStatus;
import com.waittime.backend.db.mapper.RoomTypeStatusMapper;
import com.waittime.backend.model.RoomTypeStatus;

@Path("/admin/room_type_status")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AdminRoomTypeStatusApi {
	
	@GET
	public LinkedList<RoomTypeStatus> list() {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			return session.getMapper(RoomTypeStatusMapper.class).list();
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@GET
	@Path("/{id}")
	public RoomTypeStatus retrieve(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			RoomTypeStatus retrieve = session.getMapper(RoomTypeStatusMapper.class).retrieve(id);
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
	public RoomTypeStatus create(DimRoomStatus v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimRoomStatusMapper dimPatientMapper = session.getMapper(DimRoomStatusMapper.class);
			v.setActive(Boolean.TRUE);
			dimPatientMapper.insert(v);
			session.commit();
			return retrieve(v.getRoom_status_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@PUT
	@Path("/{id}")
	public RoomTypeStatus update(@PathParam("id") Integer id, DimRoomStatus v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimRoomStatusMapper dimPatientMapper = session.getMapper(DimRoomStatusMapper.class);
			dimPatientMapper.updateByPrimaryKeySelective(v);
			session.commit();
			return retrieve(v.getRoom_status_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@DELETE
	@Path("/{id}")
	public RoomTypeStatus delete(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			retrieve(id);
			DimRoomStatus r = new DimRoomStatus();
			r.setActive(Boolean.FALSE);
			session.getMapper(DimRoomStatusMapper.class).updateByPrimaryKeySelective(r);
			return retrieve(id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
}
