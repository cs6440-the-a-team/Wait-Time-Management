package com.waittime.backend.db.mapper;

import java.util.LinkedList;

import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.waittime.backend.model.Room;

public interface RoomMapper {

	@Select("SELECT\n" + 
			"    r.room_id,\n" + 
			"    r.room_name,\n" + 
			"    r.room_type_id,\n" + 
			"    r.room_status_id,\n" + 
			"    (CASE WHEN s.expected_duration = -1 THEN ps.expected_duration ELSE s.expected_duration END) AS expected_duration,\n" + 
			"    DATE_FORMAT(frl.time_sk, '%Y-%m-%dT%TZ') AS start_time,\n" + 
			"    r.last_room_log_id\n" + 
			"FROM dim_room AS r\n" + 
			"LEFT JOIN dim_room_status AS s ON r.room_status_id=s.room_status_id\n" + 
			"LEFT JOIN dim_patient AS p ON p.room_id=r.room_id AND p.active=TRUE\n" + 
			"LEFT JOIN dim_procedure_status AS ps ON ps.procedure_status_id=p.procedure_status_id\n" + 
			"LEFT JOIN fact_room_log AS frl ON r.last_room_log_id=frl.id\n" + 
			"WHERE r.active=TRUE")
	LinkedList<Room> list();
	
	@Select("SELECT\n" + 
			"    r.room_id,\n" + 
			"    r.room_name,\n" + 
			"    r.room_type_id,\n" + 
			"    r.room_status_id,\n" + 
			"    (CASE WHEN s.expected_duration = -1 THEN ps.expected_duration ELSE s.expected_duration END) AS expected_duration,\n" + 
			"    DATE_FORMAT(frl.time_sk, '%Y-%m-%dT%TZ'),\n" + 
			"    r.last_room_log_id\n" + 
			"FROM dim_room AS r\n" + 
			"LEFT JOIN dim_room_status AS s ON r.room_status_id=s.room_status_id\n" + 
			"LEFT JOIN dim_patient AS p ON p.room_id=r.room_id AND p.active=TRUE\n" + 
			"LEFT JOIN dim_procedure_status AS ps ON ps.procedure_status_id=p.procedure_status_id\n" + 
			"LEFT JOIN fact_room_log AS frl ON r.last_room_log_id=frl.id\n" + 
			"WHERE r.room_id=#{room_id}")
	Room retrieve(Integer id);
	
	@Update("UPDATE fact_room_log SET duration = TIMESTAMPDIFF(MINUTE, time_sk, NOW()) WHERE id=#{last_room_log_id}")
	int updateDuration(Integer id);
}
