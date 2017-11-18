package com.waittime.backend.db;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

public class MyBatisDb<E,V> implements Db<E, V> {

	private Map<String, String> statements;

	public MyBatisDb(Map<String, String> statements) {
		this.statements = statements;
	}

	@Override
	public boolean contains(E id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			return null != session.selectOne(statements.get("retrieve"), id);
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public V create(V v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			session.insert(statements.get("insert"), v);
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
			return session.selectOne(statements.get("retrieve"), id);
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public V update(E id, V v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			session.insert(statements.get("update"), v);
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
			session.delete(statements.get("delete"), id);
			session.commit();
			return v;
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public LinkedList<V> list() {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			List<V> selectList = session.selectList(statements.get("list"),null);
			return new LinkedList<V>(selectList);
		} finally {
			if (session!=null) session.close();
		}
	}

}
