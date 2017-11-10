package com.waittime.backend.db;

import java.util.LinkedList;
import java.util.concurrent.ConcurrentHashMap;

import com.waittime.backend.model.Model;

public class HashMapDb<V extends Model> implements Db<String, V> {
	
	private ConcurrentHashMap<String, V> map = new ConcurrentHashMap<>();

	public V create(V model) {
		return map.putIfAbsent(model.getId(), model);
	}
	
	public V retrieve(String id) {
		return map.get(id);
	}
	
	public V update(String id, V model) {
		return map.put(id, model);
	}

	@Override
	public V delete(String id) {
		return map.remove(id);
	}

	@Override
	public LinkedList<V> list() {
		return new LinkedList<V>(map.values());
	}

	@Override
	public boolean contains(String id) {
		return map.containsKey(id);
	}
}
