package com.waittime.backend.db;

import java.util.ArrayList;
import java.util.List;

public class SearchExample {

	protected String orderByClause;
	public void setOredCriteria(List<Criteria> oredCriteria) {
		this.oredCriteria = oredCriteria;
	}

	protected boolean distinct;

	protected List<Criteria> oredCriteria;

	public SearchExample() {
		oredCriteria = new ArrayList<Criteria>();
	}

	public void setOrderByClause(String orderByClause) {
		this.orderByClause = orderByClause;
	}

	public String getOrderByClause() {
		return orderByClause;
	}

	public void setDistinct(boolean distinct) {
		this.distinct = distinct;
	}

	public boolean isDistinct() {
		return distinct;
	}

	public List<Criteria> getOredCriteria() {
		return oredCriteria;
	}

	public void or(Criteria criteria) {
		oredCriteria.add(criteria);
	}

	public Criteria or() {
		Criteria criteria = createCriteriaInternal();
		oredCriteria.add(criteria);
		return criteria;
	}

	public Criteria createCriteria() {
		Criteria criteria = createCriteriaInternal();
		if (oredCriteria.size() == 0) {
			oredCriteria.add(criteria);
		}
		return criteria;
	}

	protected Criteria createCriteriaInternal() {
		Criteria criteria = new Criteria();
		return criteria;
	}

	public void clear() {
		oredCriteria.clear();
		orderByClause = null;
		distinct = false;
	}

	public static class Criteria {
		protected List<Criterion> criteria;

		public Criteria() {
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

		public void setCriteria(List<Criterion> criteria) {
			this.criteria = criteria;
		}

	}

	/**
	 * This class was generated by MyBatis Generator. This class corresponds to the
	 * database table dim_patient
	 * 
	 * @mbg.generated Fri Nov 17 21:10:24 PST 2017
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

		public void setCondition(String condition) {
			this.condition = condition;
		}

		public Object getValue() {
			return value;
		}

		public void setValue(Object value) {
			this.value = value;
		}

		public Object getSecondValue() {
			return secondValue;
		}

		public void setSecondValue(Object secondValue) {
			this.secondValue = secondValue;
		}

		public boolean isNoValue() {
			return noValue;
		}

		public void setNoValue(boolean noValue) {
			this.noValue = noValue;
		}

		public boolean isSingleValue() {
			return singleValue;
		}

		public void setSingleValue(boolean singleValue) {
			this.singleValue = singleValue;
		}

		public boolean isBetweenValue() {
			return betweenValue;
		}

		public void setBetweenValue(boolean betweenValue) {
			this.betweenValue = betweenValue;
		}

		public boolean isListValue() {
			return listValue;
		}

		public void setListValue(boolean listValue) {
			this.listValue = listValue;
		}

		public String getTypeHandler() {
			return typeHandler;
		}

		public void setTypeHandler(String typeHandler) {
			this.typeHandler = typeHandler;
		}

	}
}