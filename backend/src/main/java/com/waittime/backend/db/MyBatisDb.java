package com.waittime.backend.db;

import java.util.LinkedList;

import org.apache.ibatis.session.SqlSession;

import com.waittime.backend.db.mapper.MyBatisMapper;
import com.waittime.backend.model.Model;

public class MyBatisDb<V extends Model> implements Db<String, V> {

	private final Class<MyBatisMapper<V>> mapperClass;

	public MyBatisDb(Class<MyBatisMapper<V>> mapperClass) {
		this.mapperClass = mapperClass;
	}

	@Override
	public boolean contains(String id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			MyBatisMapper<V> mapper = session.getMapper(mapperClass);
			return mapper.contains(id);
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public V create(V v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			MyBatisMapper<V> mapper = session.getMapper(mapperClass);
			mapper.create(v);
			session.commit();
			return v;
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public V retrieve(String id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			MyBatisMapper<V> mapper = session.getMapper(mapperClass);
			return mapper.retrieve(id);
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public V update(String id, V v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			MyBatisMapper<V> mapper = session.getMapper(mapperClass);
			mapper.update(id, v);
			session.commit();
			return v;
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public V delete(String id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			MyBatisMapper<V> mapper = session.getMapper(mapperClass);
			mapper.delete(id);
			session.commit();
			return retrieve(id);
		} finally {
			if (session!=null) session.close();
		}
	}

	@Override
	public LinkedList<V> list() {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			MyBatisMapper<V> mapper = session.getMapper(mapperClass);
			return mapper.list();
		} finally {
			if (session!=null) session.close();
		}
	}

}
