package com.waittime.backend.db;

import java.util.LinkedList;

public interface Db<E, V> {
	
	public boolean contains(E id);

	public V create(V v);

	public V retrieve(E id);

	public V update(E id, V v);

	public V delete(E id);
	
	public LinkedList<V> list();

}
