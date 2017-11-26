package com.waittime.backend.db.mapper;

import java.util.LinkedList;

import org.apache.ibatis.annotations.Select;

import com.waittime.backend.model.RoomTypeStatus;

public interface RoomTypeStatusMapper {

	@Select("SELECT \n" + 
			"    rs.room_status_id,\n" + 
			"    rs.room_status,\n" + 
			"    rs.room_type_id,\n" + 
			"    rs.room_status_order,\n" + 
			"    rs.expected_duration,\n" + 
			"    FLOOR(AVG(frl.duration)) AS average_duration\n" + 
			"FROM dim_room_status AS rs\n" + 
			"LEFT JOIN fact_room_log AS frl ON rs.room_status_id=frl.room_status_id\n" + 
			"WHERE rs.active=TRUE\n" + 
			"GROUP BY rs.room_status_id")
	LinkedList<RoomTypeStatus> list();
	
	@Select("SELECT \n" + 
			"    rs.room_status_id,\n" + 
			"    rs.room_status,\n" + 
			"    rs.room_type_id,\n" + 
			"    rs.room_status_order,\n" + 
			"    rs.expected_duration,\n" + 
			"    FLOOR(AVG(frl.duration)) AS average_duration\n" + 
			"FROM dim_room_status AS rs\n" + 
			"LEFT JOIN fact_room_log AS frl ON rs.room_status_id=frl.room_status_id\n" + 
			"WHERE rs.room_status_id=#{room_status_id}")
	RoomTypeStatus retrieve(Integer id);
	
	
}
