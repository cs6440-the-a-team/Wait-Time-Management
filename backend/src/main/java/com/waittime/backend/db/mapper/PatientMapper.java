package com.waittime.backend.db.mapper;

import java.util.LinkedList;

import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.waittime.backend.model.Patient;

public interface PatientMapper {

	@Select("SELECT\n" + 
			"    p.patient_id,\n" + 
			"    p.alias,\n" + 
			"    p.patient_name,\n" + 
			"    p.room_id,\n" + 
			"    p.procedure_id,\n" + 
			"    p.procedure_status_id,\n" + 
			"    s.expected_duration,\n" + 
			"    DATE_FORMAT(fpl.time_sk, '%Y-%m-%dT%TZ') AS start_time,\n" + 
			"    p.last_patient_log_id\n" + 
			"FROM dim_patient AS p\n" + 
			"LEFT JOIN dim_room AS r ON p.room_id=r.room_id\n" + 
			"LEFT JOIN dim_procedure_status AS s ON p.procedure_status_id=s.procedure_status_id \n" + 
			"LEFT JOIN fact_patient_log AS fpl ON p.last_patient_log_id=fpl.id \n" + 
			"WHERE p.active=TRUE")
	LinkedList<Patient> list();
	
	@Select("SELECT\n" + 
			"    p.patient_id,\n" + 
			"    p.alias,\n" + 
			"    p.patient_name,\n" + 
			"    p.room_id,\n" + 
			"    p.procedure_id,\n" + 
			"    p.procedure_status_id,\n" + 
			"    s.expected_duration,\n" + 
			"    DATE_FORMAT(fpl.time_sk, '%Y-%m-%dT%TZ') AS start_time,\n" + 
			"    p.last_patient_log_id\n" + 
			"FROM dim_patient AS p\n" + 
			"LEFT JOIN dim_room AS r ON p.room_id=r.room_id\n" + 
			"LEFT JOIN dim_procedure_status AS s ON p.procedure_status_id=s.procedure_status_id \n" + 
			"LEFT JOIN fact_patient_log AS fpl ON p.last_patient_log_id=fpl.id \n" + 
			"WHERE p.patient_id=#{patient_id}")
	Patient retrieve(Integer id);

	@Update("UPDATE fact_patient_log SET duration = TIMESTAMPDIFF(MINUTE, time_sk, NOW()) WHERE id=#{last_patient_log_id}")
	int updateDuration(Integer id);

}
