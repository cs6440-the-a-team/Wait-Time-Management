package com.waittime.backend.db.mapper;

import java.util.LinkedList;

import org.apache.ibatis.annotations.Select;

import com.waittime.backend.model.WaitingRoom;

public interface WaitingRoomMapper {

	
	@Select("SELECT \n" + 
			"    p.alias AS patient_id, \n" + 
			"    r.room_name AS `location`, \n" + 
			"    s.procedure_status AS status, \n" + 
			"    DATE_FORMAT(fpl.time_sk, '%Y-%m-%dT%TZ') AS start_time \n" + 
			"FROM dim_patient AS p \n" + 
			"INNER JOIN dim_room AS r ON p.room_id=r.room_id \n" + 
			"INNER JOIN dim_procedure_status AS s ON p.procedure_status_id=s.procedure_status_id \n" + 
			"INNER JOIN fact_patient_log AS fpl ON p.last_patient_log_id=fpl.id \n" + 
			"WHERE p.active=TRUE")
	LinkedList<WaitingRoom.WaitingRoomPatient> patients();
}
