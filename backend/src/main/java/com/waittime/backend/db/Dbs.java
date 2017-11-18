package com.waittime.backend.db;

import com.google.common.collect.ImmutableMap;
import com.waittime.backend.db.gen.client.DimPatientMapper;
import com.waittime.backend.db.gen.client.DimProcedureMapper;
import com.waittime.backend.db.gen.client.DimProcedureStatusMapper;
import com.waittime.backend.db.gen.client.DimRoomMapper;
import com.waittime.backend.db.gen.client.DimRoomStatusMapper;
import com.waittime.backend.db.gen.client.DimRoomTypeMapper;
import com.waittime.backend.db.gen.model.DimPatient;
import com.waittime.backend.db.gen.model.DimProcedure;
import com.waittime.backend.db.gen.model.DimProcedureStatus;
import com.waittime.backend.db.gen.model.DimRoom;
import com.waittime.backend.db.gen.model.DimRoomStatus;
import com.waittime.backend.db.gen.model.DimRoomType;

public enum Dbs {
	;
	
	public static Db<String, DimPatient> patients = myBatis(DimPatientMapper.class.getCanonicalName());
	public static Db<String, DimProcedure> procedures = myBatis(DimProcedureMapper.class.getCanonicalName());
	public static Db<String, DimProcedureStatus> procedure_statuses = myBatis(DimProcedureStatusMapper.class.getCanonicalName());
	public static Db<String, DimRoom> rooms = myBatis(DimRoomMapper.class.getCanonicalName());
	public static Db<String, DimRoomType> roomTypes = myBatis(DimRoomTypeMapper.class.getCanonicalName());
	public static Db<String, DimRoomStatus> roomStatuses = myBatis(DimRoomStatusMapper.class.getCanonicalName());

	private static <T> MyBatisDb<String, T> myBatis(String className) {
		return new MyBatisDb<>(ImmutableMap.of(
			"retrieve",className+".selectByPrimaryKey",
			"insert", className+".insert",
			"delete",className+".deleteByPrimaryKey",
			"list",className+".selectByExample"));
	}

}
