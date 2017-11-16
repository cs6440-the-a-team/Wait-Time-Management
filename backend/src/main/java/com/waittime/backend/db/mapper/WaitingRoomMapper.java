package com.waittime.backend.db.mapper;

import java.util.LinkedList;

import org.apache.ibatis.annotations.Select;

import com.waittime.backend.model.WaitingRoomPatient;

public interface WaitingRoomMapper {

	
	@Select("SELECT \n" + 
			"	pat.alias AS patient_id,\n" + 
			"	stat.status AS status,\n" + 
			"	TIMESTAMPDIFF(MINUTE, STR_TO_DATE(pat_time.first_time , '%Y-%m-%d %H:%i:%s'), STR_TO_DATE(NOW(), '%Y-%m-%d %H:%i:%s')) AS time_elapsed,\n" + 
			"	pro.expected_time AS expected_duration,\n" + 
			"	room.room_name AS location\n" + 
			"FROM\n" + 
			"	dim_patients pat\n" + 
			"INNER JOIN\n" + 
			"	dim_patient_status stat\n" + 
			"	ON pat.patient_status_id = stat.patient_status_id\n" + 
			"INNER JOIN\n" + 
			"	dim_room room\n" + 
			"	ON pat.room_id = room.room_id\n" + 
			"INNER JOIN (\n" + 
			"	SELECT\n" + 
			"		patient_id AS patient_id,\n" + 
			"		MIN(time_sk) AS first_time\n" + 
			"	FROM\n" + 
			"		fact_patient_log\n" + 
			"	GROUP BY 1\n" + 
			") pat_time\n" + 
			"	ON pat.patient_id = pat_time.patient_id;")
	LinkedList<WaitingRoomPatient> patients();
}
