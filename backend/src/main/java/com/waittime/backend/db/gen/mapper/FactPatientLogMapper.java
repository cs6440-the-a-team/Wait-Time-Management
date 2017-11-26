package com.waittime.backend.db.gen.mapper;

import com.waittime.backend.db.gen.model.FactPatientLog;
import com.waittime.backend.db.gen.model.FactPatientLogExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface FactPatientLogMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	long countByExample(FactPatientLogExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int deleteByExample(FactPatientLogExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int deleteByPrimaryKey(Integer id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int insert(FactPatientLog record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int insertSelective(FactPatientLog record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	List<FactPatientLog> selectByExample(FactPatientLogExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	FactPatientLog selectByPrimaryKey(Integer id);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByExampleSelective(@Param("record") FactPatientLog record,
			@Param("example") FactPatientLogExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByExample(@Param("record") FactPatientLog record, @Param("example") FactPatientLogExample example);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByPrimaryKeySelective(FactPatientLog record);

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	int updateByPrimaryKey(FactPatientLog record);
}