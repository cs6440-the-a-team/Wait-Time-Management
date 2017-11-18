package com.waittime.backend.db.gen.model;

import java.util.ArrayList;
import java.util.List;

public class DimProcedureExample {
    /**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	protected String orderByClause;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	protected boolean distinct;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	protected List<Criteria> oredCriteria;

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public DimProcedureExample() {
		oredCriteria = new ArrayList<Criteria>();
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public void setOrderByClause(String orderByClause) {
		this.orderByClause = orderByClause;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public String getOrderByClause() {
		return orderByClause;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public void setDistinct(boolean distinct) {
		this.distinct = distinct;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public boolean isDistinct() {
		return distinct;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public List<Criteria> getOredCriteria() {
		return oredCriteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public void or(Criteria criteria) {
		oredCriteria.add(criteria);
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public Criteria or() {
		Criteria criteria = createCriteriaInternal();
		oredCriteria.add(criteria);
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
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
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	protected Criteria createCriteriaInternal() {
		Criteria criteria = new Criteria();
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_procedure
	 * @mbg.generated  Fri Nov 17 21:10:24 PST 2017
	 */
	public void clear() {
		oredCriteria.clear();
		orderByClause = null;
		distinct = false;
	}

	/**
	 * This class was generated by MyBatis Generator. This class corresponds to the database table dim_procedure
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

		public Criteria andProcedure_idIsNull() {
			addCriterion("procedure_id is null");
			return (Criteria) this;
		}

		public Criteria andProcedure_idIsNotNull() {
			addCriterion("procedure_id is not null");
			return (Criteria) this;
		}

		public Criteria andProcedure_idEqualTo(Integer value) {
			addCriterion("procedure_id =", value, "procedure_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_idNotEqualTo(Integer value) {
			addCriterion("procedure_id <>", value, "procedure_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_idGreaterThan(Integer value) {
			addCriterion("procedure_id >", value, "procedure_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_idGreaterThanOrEqualTo(Integer value) {
			addCriterion("procedure_id >=", value, "procedure_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_idLessThan(Integer value) {
			addCriterion("procedure_id <", value, "procedure_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_idLessThanOrEqualTo(Integer value) {
			addCriterion("procedure_id <=", value, "procedure_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_idIn(List<Integer> values) {
			addCriterion("procedure_id in", values, "procedure_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_idNotIn(List<Integer> values) {
			addCriterion("procedure_id not in", values, "procedure_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_idBetween(Integer value1, Integer value2) {
			addCriterion("procedure_id between", value1, value2, "procedure_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_idNotBetween(Integer value1, Integer value2) {
			addCriterion("procedure_id not between", value1, value2, "procedure_id");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameIsNull() {
			addCriterion("procedure_name is null");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameIsNotNull() {
			addCriterion("procedure_name is not null");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameEqualTo(String value) {
			addCriterion("procedure_name =", value, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameNotEqualTo(String value) {
			addCriterion("procedure_name <>", value, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameGreaterThan(String value) {
			addCriterion("procedure_name >", value, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameGreaterThanOrEqualTo(String value) {
			addCriterion("procedure_name >=", value, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameLessThan(String value) {
			addCriterion("procedure_name <", value, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameLessThanOrEqualTo(String value) {
			addCriterion("procedure_name <=", value, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameLike(String value) {
			addCriterion("procedure_name like", value, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameNotLike(String value) {
			addCriterion("procedure_name not like", value, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameIn(List<String> values) {
			addCriterion("procedure_name in", values, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameNotIn(List<String> values) {
			addCriterion("procedure_name not in", values, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameBetween(String value1, String value2) {
			addCriterion("procedure_name between", value1, value2, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andProcedure_nameNotBetween(String value1, String value2) {
			addCriterion("procedure_name not between", value1, value2, "procedure_name");
			return (Criteria) this;
		}

		public Criteria andExpected_durationIsNull() {
			addCriterion("expected_duration is null");
			return (Criteria) this;
		}

		public Criteria andExpected_durationIsNotNull() {
			addCriterion("expected_duration is not null");
			return (Criteria) this;
		}

		public Criteria andExpected_durationEqualTo(Integer value) {
			addCriterion("expected_duration =", value, "expected_duration");
			return (Criteria) this;
		}

		public Criteria andExpected_durationNotEqualTo(Integer value) {
			addCriterion("expected_duration <>", value, "expected_duration");
			return (Criteria) this;
		}

		public Criteria andExpected_durationGreaterThan(Integer value) {
			addCriterion("expected_duration >", value, "expected_duration");
			return (Criteria) this;
		}

		public Criteria andExpected_durationGreaterThanOrEqualTo(Integer value) {
			addCriterion("expected_duration >=", value, "expected_duration");
			return (Criteria) this;
		}

		public Criteria andExpected_durationLessThan(Integer value) {
			addCriterion("expected_duration <", value, "expected_duration");
			return (Criteria) this;
		}

		public Criteria andExpected_durationLessThanOrEqualTo(Integer value) {
			addCriterion("expected_duration <=", value, "expected_duration");
			return (Criteria) this;
		}

		public Criteria andExpected_durationIn(List<Integer> values) {
			addCriterion("expected_duration in", values, "expected_duration");
			return (Criteria) this;
		}

		public Criteria andExpected_durationNotIn(List<Integer> values) {
			addCriterion("expected_duration not in", values, "expected_duration");
			return (Criteria) this;
		}

		public Criteria andExpected_durationBetween(Integer value1, Integer value2) {
			addCriterion("expected_duration between", value1, value2, "expected_duration");
			return (Criteria) this;
		}

		public Criteria andExpected_durationNotBetween(Integer value1, Integer value2) {
			addCriterion("expected_duration not between", value1, value2, "expected_duration");
			return (Criteria) this;
		}

		public Criteria andAverage_durationIsNull() {
			addCriterion("average_duration is null");
			return (Criteria) this;
		}

		public Criteria andAverage_durationIsNotNull() {
			addCriterion("average_duration is not null");
			return (Criteria) this;
		}

		public Criteria andAverage_durationEqualTo(Integer value) {
			addCriterion("average_duration =", value, "average_duration");
			return (Criteria) this;
		}

		public Criteria andAverage_durationNotEqualTo(Integer value) {
			addCriterion("average_duration <>", value, "average_duration");
			return (Criteria) this;
		}

		public Criteria andAverage_durationGreaterThan(Integer value) {
			addCriterion("average_duration >", value, "average_duration");
			return (Criteria) this;
		}

		public Criteria andAverage_durationGreaterThanOrEqualTo(Integer value) {
			addCriterion("average_duration >=", value, "average_duration");
			return (Criteria) this;
		}

		public Criteria andAverage_durationLessThan(Integer value) {
			addCriterion("average_duration <", value, "average_duration");
			return (Criteria) this;
		}

		public Criteria andAverage_durationLessThanOrEqualTo(Integer value) {
			addCriterion("average_duration <=", value, "average_duration");
			return (Criteria) this;
		}

		public Criteria andAverage_durationIn(List<Integer> values) {
			addCriterion("average_duration in", values, "average_duration");
			return (Criteria) this;
		}

		public Criteria andAverage_durationNotIn(List<Integer> values) {
			addCriterion("average_duration not in", values, "average_duration");
			return (Criteria) this;
		}

		public Criteria andAverage_durationBetween(Integer value1, Integer value2) {
			addCriterion("average_duration between", value1, value2, "average_duration");
			return (Criteria) this;
		}

		public Criteria andAverage_durationNotBetween(Integer value1, Integer value2) {
			addCriterion("average_duration not between", value1, value2, "average_duration");
			return (Criteria) this;
		}
	}

	/**
	 * This class was generated by MyBatis Generator. This class corresponds to the database table dim_procedure
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
     * This class corresponds to the database table dim_procedure
     *
     * @mbg.generated do_not_delete_during_merge Fri Nov 17 15:10:31 PST 2017
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }
}