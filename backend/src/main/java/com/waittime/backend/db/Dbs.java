package com.waittime.backend.db;

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
	
	public static Db<Integer, DimPatient> patients = MyBatisDb.create(DimPatientMapper.class.getCanonicalName());
	public static Db<Integer, DimProcedure> procedures = MyBatisDb.create(DimProcedureMapper.class.getCanonicalName());
	public static Db<Integer, DimProcedureStatus> procedure_statuses = MyBatisDb.create(DimProcedureStatusMapper.class.getCanonicalName());
	public static Db<Integer, DimRoom> rooms = MyBatisDb.create(DimRoomMapper.class.getCanonicalName());
	public static Db<Integer, DimRoomType> roomTypes = MyBatisDb.create(DimRoomTypeMapper.class.getCanonicalName());
	public static Db<Integer, DimRoomStatus> roomStatuses = MyBatisDb.create(DimRoomStatusMapper.class.getCanonicalName());

}
