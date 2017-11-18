package com.waittime.backend.db;

import com.google.common.collect.ImmutableMap;
import com.waittime.backend.db.gen.mapper.DimPatientMapper;
import com.waittime.backend.db.gen.mapper.DimProcedureMapper;
import com.waittime.backend.db.gen.mapper.DimProcedureStatusMapper;
import com.waittime.backend.db.gen.mapper.DimRoomMapper;
import com.waittime.backend.db.gen.mapper.DimRoomStatusMapper;
import com.waittime.backend.db.gen.mapper.DimRoomTypeMapper;
import com.waittime.backend.db.gen.model.DimPatient;
import com.waittime.backend.db.gen.model.DimProcedure;
import com.waittime.backend.db.gen.model.DimProcedureStatus;
import com.waittime.backend.db.gen.model.DimRoom;
import com.waittime.backend.db.gen.model.DimRoomStatus;
import com.waittime.backend.db.gen.model.DimRoomType;

public enum Dbs {
	;
	
	public static Db<Integer, DimPatient> patients = myBatis(DimPatientMapper.class.getCanonicalName());
	public static Db<Integer, DimProcedure> procedures = myBatis(DimProcedureMapper.class.getCanonicalName());
	public static Db<Integer, DimProcedureStatus> procedure_statuses = myBatis(DimProcedureStatusMapper.class.getCanonicalName());
	public static Db<Integer, DimRoom> rooms = myBatis(DimRoomMapper.class.getCanonicalName());
	public static Db<Integer, DimRoomType> roomTypes = myBatis(DimRoomTypeMapper.class.getCanonicalName());
	public static Db<Integer, DimRoomStatus> roomStatuses = myBatis(DimRoomStatusMapper.class.getCanonicalName());

	private static <E,T> MyBatisDb<E, T> myBatis(String className) {
		return new MyBatisDb<>(ImmutableMap.of(
			"retrieve", className+".selectByPrimaryKey",
			"update", className+".updateByPrimaryKeySelective",
			"insert", className+".insert",
			"delete", className+".deleteByPrimaryKey",
			"list", className+".selectByExample"));
	}

}
