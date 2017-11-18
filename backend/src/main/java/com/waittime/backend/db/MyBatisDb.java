package com.waittime.backend.db;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import com.google.common.collect.ImmutableMap;

public class MyBatisDb<E,V> implements Db<E, V> {

	private static final String SEARCH = "search";
	private static final String DELETE = "delete";
	private static final String INSERT = "insert";
	private static final String UPDATE = "update";
	private static final String RETRIEVE = "retrieve";
	
	private final Map<String, String> statements;

	public MyBatisDb(Map<String, String> statements) {
		this.statements = statements;
	}
	
	public static <E,T> MyBatisDb<E, T> create(String mapperClassName) {
		return new MyBatisDb<>(ImmutableMap.of(
			RETRIEVE, mapperClassName+".selectByPrimaryKey",
			UPDATE, mapperClassName+".updateByPrimaryKeySelective",
			INSERT, mapperClassName+".insert",
			DELETE, mapperClassName+".deleteByPrimaryKey",
			SEARCH, mapperClassName+".selectByExample"));
	}


	@Override
	public boolean contains(E id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			return null != session.selectOne(statement(RETRIEVE), id);
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public V create(V v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			session.insert(statement(INSERT), v);
			session.commit();
			return v;
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public V retrieve(E id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			return session.selectOne(statement(RETRIEVE), id);
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public V update(E id, V v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			session.insert(statement(UPDATE), v);
			session.commit();
			return retrieve(id);
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public V delete(E id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			V v = retrieve(id);
			session.delete(statement(DELETE), id);
			session.commit();
			return v;
		} finally {
			if (session!=null) session.close();
		}
	}

	private String statement(String statement) {
		if (!statements.containsKey(statement)) {
			throw new IllegalArgumentException("no defined statement: "+ statement);
		}
		return statements.get(statement);
	}

	@Override
	public LinkedList<V> search(SearchExample v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			List<V> selectList = session.selectList(statement(SEARCH), v);
			return new LinkedList<V>(selectList);
		} finally {
			if (session!=null) session.close();
		}
	}

}
