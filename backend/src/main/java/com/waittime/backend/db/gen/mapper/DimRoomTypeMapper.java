package com.waittime.backend.db.gen.mapper;

import com.waittime.backend.db.gen.model.DimRoomType;
import com.waittime.backend.db.gen.model.DimRoomTypeExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DimRoomTypeMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	long countByExample(DimRoomTypeExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int deleteByExample(DimRoomTypeExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int deleteByPrimaryKey(Integer room_type_id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int insert(DimRoomType record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int insertSelective(DimRoomType record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	List<DimRoomType> selectByExample(DimRoomTypeExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	DimRoomType selectByPrimaryKey(Integer room_type_id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByExampleSelective(@Param("record") DimRoomType record, @Param("example") DimRoomTypeExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByExample(@Param("record") DimRoomType record, @Param("example") DimRoomTypeExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByPrimaryKeySelective(DimRoomType record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByPrimaryKey(DimRoomType record);
}