package com.waittime.backend.db.gen.model;

import java.util.ArrayList;
import java.util.List;

public class DimRoomTypeExample {
    /**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	protected String orderByClause;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	protected boolean distinct;
	/**
	 * This field was generated by MyBatis Generator. This field corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	protected List<Criteria> oredCriteria;

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	public DimRoomTypeExample() {
		oredCriteria = new ArrayList<Criteria>();
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	public void setOrderByClause(String orderByClause) {
		this.orderByClause = orderByClause;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	public String getOrderByClause() {
		return orderByClause;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	public void setDistinct(boolean distinct) {
		this.distinct = distinct;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	public boolean isDistinct() {
		return distinct;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	public List<Criteria> getOredCriteria() {
		return oredCriteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	public void or(Criteria criteria) {
		oredCriteria.add(criteria);
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	public Criteria or() {
		Criteria criteria = createCriteriaInternal();
		oredCriteria.add(criteria);
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	public Criteria createCriteria() {
		Criteria criteria = createCriteriaInternal();
		if (oredCriteria.size() == 0) {
			oredCriteria.add(criteria);
		}
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	protected Criteria createCriteriaInternal() {
		Criteria criteria = new Criteria();
		return criteria;
	}

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
	 */
	public void clear() {
		oredCriteria.clear();
		orderByClause = null;
		distinct = false;
	}

	/**
	 * This class was generated by MyBatis Generator. This class corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
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

		public Criteria andRoom_type_idIsNull() {
			addCriterion("room_type_id is null");
			return (Criteria) this;
		}

		public Criteria andRoom_type_idIsNotNull() {
			addCriterion("room_type_id is not null");
			return (Criteria) this;
		}

		public Criteria andRoom_type_idEqualTo(Integer value) {
			addCriterion("room_type_id =", value, "room_type_id");
			return (Criteria) this;
		}

		public Criteria andRoom_type_idNotEqualTo(Integer value) {
			addCriterion("room_type_id <>", value, "room_type_id");
			return (Criteria) this;
		}

		public Criteria andRoom_type_idGreaterThan(Integer value) {
			addCriterion("room_type_id >", value, "room_type_id");
			return (Criteria) this;
		}

		public Criteria andRoom_type_idGreaterThanOrEqualTo(Integer value) {
			addCriterion("room_type_id >=", value, "room_type_id");
			return (Criteria) this;
		}

		public Criteria andRoom_type_idLessThan(Integer value) {
			addCriterion("room_type_id <", value, "room_type_id");
			return (Criteria) this;
		}

		public Criteria andRoom_type_idLessThanOrEqualTo(Integer value) {
			addCriterion("room_type_id <=", value, "room_type_id");
			return (Criteria) this;
		}

		public Criteria andRoom_type_idIn(List<Integer> values) {
			addCriterion("room_type_id in", values, "room_type_id");
			return (Criteria) this;
		}

		public Criteria andRoom_type_idNotIn(List<Integer> values) {
			addCriterion("room_type_id not in", values, "room_type_id");
			return (Criteria) this;
		}

		public Criteria andRoom_type_idBetween(Integer value1, Integer value2) {
			addCriterion("room_type_id between", value1, value2, "room_type_id");
			return (Criteria) this;
		}

		public Criteria andRoom_type_idNotBetween(Integer value1, Integer value2) {
			addCriterion("room_type_id not between", value1, value2, "room_type_id");
			return (Criteria) this;
		}

		public Criteria andRoom_typeIsNull() {
			addCriterion("room_type is null");
			return (Criteria) this;
		}

		public Criteria andRoom_typeIsNotNull() {
			addCriterion("room_type is not null");
			return (Criteria) this;
		}

		public Criteria andRoom_typeEqualTo(String value) {
			addCriterion("room_type =", value, "room_type");
			return (Criteria) this;
		}

		public Criteria andRoom_typeNotEqualTo(String value) {
			addCriterion("room_type <>", value, "room_type");
			return (Criteria) this;
		}

		public Criteria andRoom_typeGreaterThan(String value) {
			addCriterion("room_type >", value, "room_type");
			return (Criteria) this;
		}

		public Criteria andRoom_typeGreaterThanOrEqualTo(String value) {
			addCriterion("room_type >=", value, "room_type");
			return (Criteria) this;
		}

		public Criteria andRoom_typeLessThan(String value) {
			addCriterion("room_type <", value, "room_type");
			return (Criteria) this;
		}

		public Criteria andRoom_typeLessThanOrEqualTo(String value) {
			addCriterion("room_type <=", value, "room_type");
			return (Criteria) this;
		}

		public Criteria andRoom_typeLike(String value) {
			addCriterion("room_type like", value, "room_type");
			return (Criteria) this;
		}

		public Criteria andRoom_typeNotLike(String value) {
			addCriterion("room_type not like", value, "room_type");
			return (Criteria) this;
		}

		public Criteria andRoom_typeIn(List<String> values) {
			addCriterion("room_type in", values, "room_type");
			return (Criteria) this;
		}

		public Criteria andRoom_typeNotIn(List<String> values) {
			addCriterion("room_type not in", values, "room_type");
			return (Criteria) this;
		}

		public Criteria andRoom_typeBetween(String value1, String value2) {
			addCriterion("room_type between", value1, value2, "room_type");
			return (Criteria) this;
		}

		public Criteria andRoom_typeNotBetween(String value1, String value2) {
			addCriterion("room_type not between", value1, value2, "room_type");
			return (Criteria) this;
		}

		public Criteria andActiveIsNull() {
			addCriterion("active is null");
			return (Criteria) this;
		}

		public Criteria andActiveIsNotNull() {
			addCriterion("active is not null");
			return (Criteria) this;
		}

		public Criteria andActiveEqualTo(Boolean value) {
			addCriterion("active =", value, "active");
			return (Criteria) this;
		}

		public Criteria andActiveNotEqualTo(Boolean value) {
			addCriterion("active <>", value, "active");
			return (Criteria) this;
		}

		public Criteria andActiveGreaterThan(Boolean value) {
			addCriterion("active >", value, "active");
			return (Criteria) this;
		}

		public Criteria andActiveGreaterThanOrEqualTo(Boolean value) {
			addCriterion("active >=", value, "active");
			return (Criteria) this;
		}

		public Criteria andActiveLessThan(Boolean value) {
			addCriterion("active <", value, "active");
			return (Criteria) this;
		}

		public Criteria andActiveLessThanOrEqualTo(Boolean value) {
			addCriterion("active <=", value, "active");
			return (Criteria) this;
		}

		public Criteria andActiveIn(List<Boolean> values) {
			addCriterion("active in", values, "active");
			return (Criteria) this;
		}

		public Criteria andActiveNotIn(List<Boolean> values) {
			addCriterion("active not in", values, "active");
			return (Criteria) this;
		}

		public Criteria andActiveBetween(Boolean value1, Boolean value2) {
			addCriterion("active between", value1, value2, "active");
			return (Criteria) this;
		}

		public Criteria andActiveNotBetween(Boolean value1, Boolean value2) {
			addCriterion("active not between", value1, value2, "active");
			return (Criteria) this;
		}
	}

	/**
	 * This class was generated by MyBatis Generator. This class corresponds to the database table dim_room_type
	 * @mbg.generated  Sun Nov 26 03:42:55 PST 2017
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
     * This class corresponds to the database table dim_room_type
     *
     * @mbg.generated do_not_delete_during_merge Fri Nov 17 15:10:31 PST 2017
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }
}