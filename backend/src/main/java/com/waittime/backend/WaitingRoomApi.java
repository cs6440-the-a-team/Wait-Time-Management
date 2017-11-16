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
//		LinkedList<WaitingRoomPatient> patients = new LinkedList<>();
//		for (Patient p : Dbs.patients.list()) {
//			WaitingRoomPatient pat = new WaitingRoomPatient();
//			pat.setPatient_id(p.getId());
//			pat.setStatus(p.getStatus());
//			pat.setExpected_duration(p.getExpected_duration());
//			pat.setLocation(p.getLocation_id());
//			pat.setTime_elapsed("");
//			patients.add(pat);
//		}
//		WaitingRoom room = new WaitingRoom();
//		room.setPatients(patients);
//		return room;
		try {
			WaitingRoom room = new WaitingRoom();
			SqlSession session = MyBatisUtil.getSqlSessionFactory().openSession();
			WaitingRoomMapper mapper = session.getMapper(WaitingRoomMapper.class);
			room.setPatients(mapper.patients());
			session.commit();
			session.close();
			return room;
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		}
		
	}
}
