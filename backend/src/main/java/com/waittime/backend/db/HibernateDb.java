package com.waittime.backend.db;

import java.util.LinkedList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

import com.waittime.backend.model.Model;
import com.waittime.backend.model.Patient;

public class HibernateDb<V extends Model> implements Db<String, V> {

	private static SessionFactory sessionFactory = null;
	private Class<V> clazz;

	public HibernateDb(Class<V> vclass) {
		this.clazz = vclass;
	}
	
	static {
		StandardServiceRegistry registry = new StandardServiceRegistryBuilder().configure().build();
		try {
			sessionFactory = new MetadataSources(registry)
					.addAnnotatedClass(Patient.class)
					.buildMetadata().buildSessionFactory();
		} catch (Exception ex) {
			System.err.println("Unable to connect to database: "+ ex);
			System.exit(1);
		}
	}

	@Override
	public boolean contains(String id) {
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			return session.get(clazz, id) != null;
		} finally {
			session.close();
		}
	}

	@Override
	public V create(V v) {
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			session.save(v);
			session.getTransaction().commit();
		} finally {
			session.close();
		}
		return v;
	}

	@Override
	public V retrieve(String id) {
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			return session.get(clazz, id);
		} finally {
			session.close();
		}
	}

	@Override
	public V update(String id, V v) {
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			session.update(v);
			session.getTransaction().commit();
		} finally {
			session.close();
		}
		return v;
	}

	@Override
	public V delete(String id) {
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			V v = retrieve(id);
			session.remove(v);
			session.getTransaction().commit();
			return v;
		} finally {
			session.close();
		}
	}

	@Override
	public LinkedList<V> list() {
		Session session = sessionFactory.openSession();
		try {
			session.beginTransaction();
			@SuppressWarnings("deprecation")
			List list = session.createCriteria(clazz).list();
			System.out.println(list);
			return new LinkedList<V>(list);
		} finally {
			session.close();
		}
	}
}
