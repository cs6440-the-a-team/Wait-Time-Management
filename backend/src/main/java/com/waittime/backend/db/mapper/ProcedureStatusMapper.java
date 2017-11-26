package com.waittime.backend.db.mapper;

import java.util.LinkedList;

import org.apache.ibatis.annotations.Select;

import com.waittime.backend.model.ProcedureStatus;

public interface ProcedureStatusMapper {

	@Select("SELECT\n" + 
			"    ps.procedure_status_id,\n" + 
			"    ps.procedure_status,\n" + 
			"    ps.procedure_id,\n" + 
			"    ps.procedure_status_order,\n" + 
			"    ps.expected_duration,\n" + 
			"    FLOOR(AVG(fpl.duration)) AS average_duration\n" + 
			"FROM dim_procedure_status AS ps\n" + 
			"LEFT JOIN fact_patient_log AS fpl ON fpl.procedure_status_id=ps.procedure_status_id\n" + 
			"WHERE ps.active=TRUE\n" + 
			"GROUP BY ps.procedure_status_id")
	LinkedList<ProcedureStatus> list();

	@Select("SELECT\n" + 
			"    ps.procedure_status_id,\n" + 
			"    ps.procedure_status,\n" + 
			"    ps.procedure_id,\n" + 
			"    ps.procedure_status_order,\n" + 
			"    ps.expected_duration,\n" + 
			"    FLOOR(AVG(fpl.duration)) AS average_duration\n" + 
			"FROM dim_procedure_status AS ps\n" + 
			"LEFT JOIN fact_patient_log AS fpl ON fpl.procedure_status_id=ps.procedure_status_id\n" + 
			"WHERE ps.procedure_status_id=#{procedure_status_id}")
	ProcedureStatus retrieve(Integer id);
}
