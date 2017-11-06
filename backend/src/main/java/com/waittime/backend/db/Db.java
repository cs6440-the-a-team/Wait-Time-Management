package com.waittime.backend.db;

import java.util.LinkedList;

public interface Db<E, V> {

	public V create(V v);

	public V retrieve(E id);

	public V update(V v);

	public V delete(E id);
	
	public LinkedList<V> list();

}
