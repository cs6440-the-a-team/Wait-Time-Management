package com.waittime.backend.db.gen.client;

import com.waittime.backend.db.gen.model.FactRoomLog;
import com.waittime.backend.db.gen.model.FactRoomLogExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface FactRoomLogMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_room_log
	 * @mbg.generated  Fri Nov 17 17:54:11 PST 2017
	 */
	long countByExample(FactRoomLogExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_room_log
	 * @mbg.generated  Fri Nov 17 17:54:11 PST 2017
	 */
	int deleteByExample(FactRoomLogExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_room_log
	 * @mbg.generated  Fri Nov 17 17:54:11 PST 2017
	 */
	int deleteByPrimaryKey(Integer id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_room_log
	 * @mbg.generated  Fri Nov 17 17:54:11 PST 2017
	 */
	int insert(FactRoomLog record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_room_log
	 * @mbg.generated  Fri Nov 17 17:54:11 PST 2017
	 */
	int insertSelective(FactRoomLog record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_room_log
	 * @mbg.generated  Fri Nov 17 17:54:11 PST 2017
	 */
	List<FactRoomLog> selectByExample(FactRoomLogExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_room_log
	 * @mbg.generated  Fri Nov 17 17:54:11 PST 2017
	 */
	FactRoomLog selectByPrimaryKey(Integer id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_room_log
	 * @mbg.generated  Fri Nov 17 17:54:11 PST 2017
	 */
	int updateByExampleSelective(@Param("record") FactRoomLog record, @Param("example") FactRoomLogExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_room_log
	 * @mbg.generated  Fri Nov 17 17:54:11 PST 2017
	 */
	int updateByExample(@Param("record") FactRoomLog record, @Param("example") FactRoomLogExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_room_log
	 * @mbg.generated  Fri Nov 17 17:54:11 PST 2017
	 */
	int updateByPrimaryKeySelective(FactRoomLog record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_room_log
	 * @mbg.generated  Fri Nov 17 17:54:11 PST 2017
	 */
	int updateByPrimaryKey(FactRoomLog record);
}