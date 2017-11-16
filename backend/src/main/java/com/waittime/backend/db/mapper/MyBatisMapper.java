package com.waittime.backend.db.mapper;

import java.util.LinkedList;

public interface MyBatisMapper<V> {

	boolean contains(String id);

	void create(V v);

	V retrieve(String id);

	void update(String id, V v);

	void delete(String id);
	
	LinkedList<V> list();
}
