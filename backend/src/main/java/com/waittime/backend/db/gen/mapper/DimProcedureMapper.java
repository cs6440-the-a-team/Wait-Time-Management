package com.waittime.backend.db.gen.mapper;

import com.waittime.backend.db.gen.model.DimProcedure;
import com.waittime.backend.db.gen.model.DimProcedureExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DimProcedureMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	long countByExample(DimProcedureExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int deleteByExample(DimProcedureExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int deleteByPrimaryKey(Integer procedure_id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int insert(DimProcedure record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int insertSelective(DimProcedure record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	List<DimProcedure> selectByExample(DimProcedureExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	DimProcedure selectByPrimaryKey(Integer procedure_id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByExampleSelective(@Param("record") DimProcedure record, @Param("example") DimProcedureExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByExample(@Param("record") DimProcedure record, @Param("example") DimProcedureExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByPrimaryKeySelective(DimProcedure record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByPrimaryKey(DimProcedure record);
}