package com.waittime.backend.db.gen.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class FactPatientLogExample {
    /**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	protected String orderByClause;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	protected boolean distinct;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	protected List<Criteria> oredCriteria;

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public FactPatientLogExample() {
		oredCriteria = new ArrayList<Criteria>();
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public void setOrderByClause(String orderByClause) {
		this.orderByClause = orderByClause;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public String getOrderByClause() {
		return orderByClause;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public void setDistinct(boolean distinct) {
		this.distinct = distinct;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public boolean isDistinct() {
		return distinct;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public List<Criteria> getOredCriteria() {
		return oredCriteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public void or(Criteria criteria) {
		oredCriteria.add(criteria);
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public Criteria or() {
		Criteria criteria = createCriteriaInternal();
		oredCriteria.add(criteria);
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public Criteria createCriteria() {
		Criteria criteria = createCriteriaInternal();
		if (oredCriteria.size() == 0) {
			oredCriteria.add(criteria);
		}
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	protected Criteria createCriteriaInternal() {
		Criteria criteria = new Criteria();
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public void clear() {
		oredCriteria.clear();
		orderByClause = null;
		distinct = false;
	}

	/**
	 * This class was generated by MyBatis Generator. This class corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	protected abstract static class GeneratedCriteria {
		protected List<Criterion> criteria;

		protected GeneratedCriteria() {
			super();
			criteria = new ArrayList<Criterion>();
		}

		public boolean isValid() {
			return criteria.size() > 0;
		}

		public List<Criterion> getAllCriteria() {
			return criteria;
		}

		public List<Criterion> getCriteria() {
			return criteria;
		}

		protected void addCriterion(String condition) {
			if (condition == null) {
				throw new RuntimeException("Value for condition cannot be null");
			}
			criteria.add(new Criterion(condition));
		}

		protected void addCriterion(String condition, Object value, String property) {
			if (value == null) {
				throw new RuntimeException("Value for " + property + " cannot be null");
			}
			criteria.add(new Criterion(condition, value));
		}

		protected void addCriterion(String condition, Object value1, Object value2, String property) {
			if (value1 == null || value2 == null) {
				throw new RuntimeException("Between values for " + property + " cannot be null");
			}
			criteria.add(new Criterion(condition, value1, value2));
		}

		public Criteria andIdIsNull() {
			addCriterion("id is null");
			return (Criteria) this;
		}

		public Criteria andIdIsNotNull() {
			addCriterion("id is not null");
			return (Criteria) this;
		}

		public Criteria andIdEqualTo(Integer value) {
			addCriterion("id =", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdNotEqualTo(Integer value) {
			addCriterion("id <>", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdGreaterThan(Integer value) {
			addCriterion("id >", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdGreaterThanOrEqualTo(Integer value) {
			addCriterion("id >=", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdLessThan(Integer value) {
			addCriterion("id <", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdLessThanOrEqualTo(Integer value) {
			addCriterion("id <=", value, "id");
			return (Criteria) this;
		}

		public Criteria andIdIn(List<Integer> values) {
			addCriterion("id in", values, "id");
			return (Criteria) this;
		}

		public Criteria andIdNotIn(List<Integer> values) {
			addCriterion("id not in", values, "id");
			return (Criteria) this;
		}

		public Criteria andIdBetween(Integer value1, Integer value2) {
			addCriterion("id between", value1, value2, "id");
			return (Criteria) this;
		}

		public Criteria andIdNotBetween(Integer value1, Integer value2) {
			addCriterion("id not between", value1, value2, "id");
			return (Criteria) this;
		}

		public Criteria andPatient_idIsNull() {
			addCriterion("patient_id is null");
			return (Criteria) this;
		}

		public Criteria andPatient_idIsNotNull() {
			addCriterion("patient_id is not null");
			return (Criteria) this;
		}

		public Criteria andPatient_idEqualTo(Integer value) {
			addCriterion("patient_id =", value, "patient_id");
			return (Criteria) this;
		}

		public Criteria andPatient_idNotEqualTo(Integer value) {
			addCriterion("patient_id <>", value, "patient_id");
			return (Criteria) this;
		}

		public Criteria andPatient_idGreaterThan(Integer value) {
			addCriterion("patient_id >", value, "patient_id");
			return (Criteria) this;
		}

		public Criteria andPatient_idGreaterThanOrEqualTo(Integer value) {
			addCriterion("patient_id >=", value, "patient_id");
			return (Criteria) this;
		}

		public Criteria andPatient_idLessThan(Integer value) {
			addCriterion("patient_id <", value, "patient_id");
			return (Criteria) this;
		}

		public Criteria andPatient_idLessThanOrEqualTo(Integer value) {
			addCriterion("patient_id <=", value, "patient_id");
			return (Criteria) this;
		}

		public Criteria andPatient_idIn(List<Integer> values) {
			addCriterion("patient_id in", values, "patient_id");
			return (Criteria) this;
		}

		public Criteria andPatient_idNotIn(List<Integer> values) {
			addCriterion("patient_id not in", values, "patient_id");
			return (Criteria) this;
		}

		public Criteria andPatient_idBetween(Integer value1, Integer value2) {
			addCriterion("patient_id between", value1, value2, "patient_id");
			return (Criteria) this;
		}

		public Criteria andPatient_idNotBetween(Integer value1, Integer value2) {
			addCriterion("patient_id not between", value1, value2, "patient_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idIsNull() {
			addCriterion("procedure_status_id is null");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idIsNotNull() {
			addCriterion("procedure_status_id is not null");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idEqualTo(Integer value) {
			addCriterion("procedure_status_id =", value, "procedure_status_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idNotEqualTo(Integer value) {
			addCriterion("procedure_status_id <>", value, "procedure_status_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idGreaterThan(Integer value) {
			addCriterion("procedure_status_id >", value, "procedure_status_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idGreaterThanOrEqualTo(Integer value) {
			addCriterion("procedure_status_id >=", value, "procedure_status_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idLessThan(Integer value) {
			addCriterion("procedure_status_id <", value, "procedure_status_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idLessThanOrEqualTo(Integer value) {
			addCriterion("procedure_status_id <=", value, "procedure_status_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idIn(List<Integer> values) {
			addCriterion("procedure_status_id in", values, "procedure_status_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idNotIn(List<Integer> values) {
			addCriterion("procedure_status_id not in", values, "procedure_status_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idBetween(Integer value1, Integer value2) {
			addCriterion("procedure_status_id between", value1, value2, "procedure_status_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_status_idNotBetween(Integer value1, Integer value2) {
			addCriterion("procedure_status_id not between", value1, value2, "procedure_status_id");
			return (Criteria) this;
		}

		public Criteria andTime_skIsNull() {
			addCriterion("time_sk is null");
			return (Criteria) this;
		}

		public Criteria andTime_skIsNotNull() {
			addCriterion("time_sk is not null");
			return (Criteria) this;
		}

		public Criteria andTime_skEqualTo(Date value) {
			addCriterion("time_sk =", value, "time_sk");
			return (Criteria) this;
		}

		public Criteria andTime_skNotEqualTo(Date value) {
			addCriterion("time_sk <>", value, "time_sk");
			return (Criteria) this;
		}

		public Criteria andTime_skGreaterThan(Date value) {
			addCriterion("time_sk >", value, "time_sk");
			return (Criteria) this;
		}

		public Criteria andTime_skGreaterThanOrEqualTo(Date value) {
			addCriterion("time_sk >=", value, "time_sk");
			return (Criteria) this;
		}

		public Criteria andTime_skLessThan(Date value) {
			addCriterion("time_sk <", value, "time_sk");
			return (Criteria) this;
		}

		public Criteria andTime_skLessThanOrEqualTo(Date value) {
			addCriterion("time_sk <=", value, "time_sk");
			return (Criteria) this;
		}

		public Criteria andTime_skIn(List<Date> values) {
			addCriterion("time_sk in", values, "time_sk");
			return (Criteria) this;
		}

		public Criteria andTime_skNotIn(List<Date> values) {
			addCriterion("time_sk not in", values, "time_sk");
			return (Criteria) this;
		}

		public Criteria andTime_skBetween(Date value1, Date value2) {
			addCriterion("time_sk between", value1, value2, "time_sk");
			return (Criteria) this;
		}

		public Criteria andTime_skNotBetween(Date value1, Date value2) {
			addCriterion("time_sk not between", value1, value2, "time_sk");
			return (Criteria) this;
		}

		public Criteria andDurationIsNull() {
			addCriterion("duration is null");
			return (Criteria) this;
		}

		public Criteria andDurationIsNotNull() {
			addCriterion("duration is not null");
			return (Criteria) this;
		}

		public Criteria andDurationEqualTo(Integer value) {
			addCriterion("duration =", value, "duration");
			return (Criteria) this;
		}

		public Criteria andDurationNotEqualTo(Integer value) {
			addCriterion("duration <>", value, "duration");
			return (Criteria) this;
		}

		public Criteria andDurationGreaterThan(Integer value) {
			addCriterion("duration >", value, "duration");
			return (Criteria) this;
		}

		public Criteria andDurationGreaterThanOrEqualTo(Integer value) {
			addCriterion("duration >=", value, "duration");
			return (Criteria) this;
		}

		public Criteria andDurationLessThan(Integer value) {
			addCriterion("duration <", value, "duration");
			return (Criteria) this;
		}

		public Criteria andDurationLessThanOrEqualTo(Integer value) {
			addCriterion("duration <=", value, "duration");
			return (Criteria) this;
		}

		public Criteria andDurationIn(List<Integer> values) {
			addCriterion("duration in", values, "duration");
			return (Criteria) this;
		}

		public Criteria andDurationNotIn(List<Integer> values) {
			addCriterion("duration not in", values, "duration");
			return (Criteria) this;
		}

		public Criteria andDurationBetween(Integer value1, Integer value2) {
			addCriterion("duration between", value1, value2, "duration");
			return (Criteria) this;
		}

		public Criteria andDurationNotBetween(Integer value1, Integer value2) {
			addCriterion("duration not between", value1, value2, "duration");
			return (Criteria) this;
		}
	}

	/**
	 * This class was generated by MyBatis Generator. This class corresponds to the database table fact_patient_log
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public static class Criterion {
		private String condition;
		private Object value;
		private Object secondValue;
		private boolean noValue;
		private boolean singleValue;
		private boolean betweenValue;
		private boolean listValue;
		private String typeHandler;

		public String getCondition() {
			return condition;
		}

		public Object getValue() {
			return value;
		}

		public Object getSecondValue() {
			return secondValue;
		}

		public boolean isNoValue() {
			return noValue;
		}

		public boolean isSingleValue() {
			return singleValue;
		}

		public boolean isBetweenValue() {
			return betweenValue;
		}

		public boolean isListValue() {
			return listValue;
		}

		public String getTypeHandler() {
			return typeHandler;
		}

		protected Criterion(String condition) {
			super();
			this.condition = condition;
			this.typeHandler = null;
			this.noValue = true;
		}

		protected Criterion(String condition, Object value, String typeHandler) {
			super();
			this.condition = condition;
			this.value = value;
			this.typeHandler = typeHandler;
			if (value instanceof List<?>) {
				this.listValue = true;
			} else {
				this.singleValue = true;
			}
		}

		protected Criterion(String condition, Object value) {
			this(condition, value, null);
		}

		protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
			super();
			this.condition = condition;
			this.value = value;
			this.secondValue = secondValue;
			this.typeHandler = typeHandler;
			this.betweenValue = true;
		}

		protected Criterion(String condition, Object value, Object secondValue) {
			this(condition, value, secondValue, null);
		}
	}

	/**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table fact_patient_log
     *
     * @mbg.generated do_not_delete_during_merge Fri Nov 17 15:10:31 PST 2017
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }
}