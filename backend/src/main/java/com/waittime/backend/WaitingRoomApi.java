package com.waittime.backend;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.ibatis.session.SqlSession;

import com.waittime.backend.db.MyBatisUtil;
import com.waittime.backend.db.mapper.WaitingRoomMapper;
import com.waittime.backend.model.WaitingRoom;

@Path("/waitingroom")
public class WaitingRoomApi {

	@GET()
	@Produces(MediaType.APPLICATION_JSON)
	public WaitingRoom hello() {
		SqlSession session = null;
		try {
			WaitingRoom room = new WaitingRoom();
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			WaitingRoomMapper mapper = session.getMapper(WaitingRoomMapper.class);
			room.setPatients(mapper.patients());
			session.commit();
			session.close();
			return room;
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}	
	}
}
