package com.waittime.backend;

import java.util.Date;
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

import com.google.common.base.Objects;
import com.waittime.backend.db.MyBatisUtil;
import com.waittime.backend.db.gen.mapper.DimRoomMapper;
import com.waittime.backend.db.gen.mapper.FactRoomLogMapper;
import com.waittime.backend.db.gen.model.DimRoom;
import com.waittime.backend.db.gen.model.FactRoomLog;
import com.waittime.backend.db.mapper.RoomMapper;
import com.waittime.backend.model.Room;

@Path("/admin/room/")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AdminRoomApi {

	@GET
	public LinkedList<Room> list() {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			return new LinkedList<>(session.getMapper(RoomMapper.class).list());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@GET
	@Path("/{id}")
	public Room retrieve(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			Room retrieve = session.getMapper(RoomMapper.class).retrieve(id);
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
	public Room create(DimRoom v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimRoomMapper dimMapper = session.getMapper(DimRoomMapper.class);
			v.setActive(Boolean.TRUE);
			dimMapper.insert(v);
			session.commit();
			return retrieve(v.getRoom_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@PUT
	@Path("/{id}")
	public Room update(@PathParam("id") Integer id, DimRoom v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			DimRoomMapper dimMapper = session.getMapper(DimRoomMapper.class);
			Room retrieve = retrieve(id);
			
			if (!Objects.equal(retrieve.getRoom_status_id(), v.getRoom_status_id())) {
				session.getMapper(RoomMapper.class).updateDuration(id);
				FactRoomLogMapper factRoomLogMapper = session.getMapper(FactRoomLogMapper.class);
				
				FactRoomLog newLog = new FactRoomLog();
				newLog.setRoom_id(v.getRoom_id());
				newLog.setRoom_status_id(v.getRoom_status_id());
				newLog.setTime_sk(new Date());
				factRoomLogMapper.insert(newLog);
				
				v.setLast_room_log_id(newLog.getId());
			}
			
			dimMapper.updateByPrimaryKeySelective(v);
			session.commit();
			return retrieve(v.getRoom_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@DELETE
	@Path("/{id}")
	public Room delete(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			retrieve(id);
			DimRoom r = new DimRoom();
			r.setActive(Boolean.FALSE);
			session.getMapper(DimRoomMapper.class).updateByPrimaryKeySelective(r);
			return retrieve(id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
}