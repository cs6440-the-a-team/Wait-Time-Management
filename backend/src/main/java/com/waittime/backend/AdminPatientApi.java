package com.waittime.backend;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.apache.ibatis.session.SqlSession;

import com.google.common.base.Objects;
import com.waittime.backend.db.MyBatisUtil;
import com.waittime.backend.db.gen.mapper.DimPatientMapper;
import com.waittime.backend.db.gen.mapper.FactPatientLogMapper;
import com.waittime.backend.db.gen.model.DimPatient;
import com.waittime.backend.db.gen.model.DimPatientExample;
import com.waittime.backend.db.gen.model.FactPatientLog;
import com.waittime.backend.db.mapper.PatientMapper;
import com.waittime.backend.model.Patient;

@Path("/admin/patient")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AdminPatientApi {
	
	@GET
	public LinkedList<Patient> list() {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			PatientMapper mapper = session.getMapper(PatientMapper.class);
			return mapper.list();
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@GET
	@Path("/{id}")
	public Patient retrieve(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			PatientMapper mapper = session.getMapper(PatientMapper.class);
			Patient retrieve = mapper.retrieve(id);
			if (retrieve == null) {
				throw new javax.ws.rs.NotFoundException();
			}
			return retrieve;
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@POST
	public Patient create(DimPatient v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			
			DimPatientMapper dimPatientMapper = session.getMapper(DimPatientMapper.class);
			v.setPatient_id(null);
			v.setAlias(alias(dimPatientMapper));
			v.setActive(Boolean.TRUE);
			dimPatientMapper.insert(v);
			
			FactPatientLog log = new FactPatientLog();
			log.setPatient_id(v.getPatient_id());
			log.setProcedure_status_id(v.getProcedure_status_id());
			log.setTime_sk(new Date());
			FactPatientLogMapper factPatientLogMapper = session.getMapper(FactPatientLogMapper.class);
			factPatientLogMapper.insert(log);
			
			v.setLast_patient_log_id(log.getId());
			dimPatientMapper.updateByPrimaryKeySelective(v);
			session.commit();

			return retrieve(v.getPatient_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@PUT
	@Path("/{id}")
	public Patient update(@PathParam("id") Integer id, DimPatient v) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			
			DimPatientMapper dimPatientMapper = session.getMapper(DimPatientMapper.class);
			Patient retrieve = retrieve(id);
			
			if (!Objects.equal(retrieve.getProcedure_id(), v.getProcedure_id())) {
				FactPatientLogMapper factPatientLogMapper = session.getMapper(FactPatientLogMapper.class);
				FactPatientLog log = new FactPatientLog();
				log.setId(retrieve.getLast_patient_log_id());
				factPatientLogMapper.updateByPrimaryKeySelective(log);
				
				FactPatientLog newlog = new FactPatientLog();
				newlog.setPatient_id(v.getPatient_id());
				newlog.setProcedure_status_id(v.getProcedure_status_id());
				newlog.setTime_sk(new Date());
				factPatientLogMapper.insert(log);
				
				v.setLast_patient_log_id(newlog.getId());
			}
			
			dimPatientMapper.updateByPrimaryKeySelective(v);
			
			session.commit();

			return retrieve(v.getPatient_id());
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}
	
	@DELETE
	@Path("/{id}")
	public Patient delete(@PathParam("id") Integer id) {
		SqlSession session = null;
		try {
			session = MyBatisUtil.getSqlSessionFactory().openSession();
			retrieve(id);
			DimPatient r = new DimPatient();
			r.setActive(Boolean.FALSE);
			session.getMapper(DimPatientMapper.class).updateByPrimaryKeySelective(r);
			return retrieve(id);
		} catch (Exception e) {
			e.printStackTrace();
			throw new javax.ws.rs.ServiceUnavailableException();
		} finally {
			if (session!=null) session.close();
		}
	}

	private String alias(DimPatientMapper dimPatientMapper) {
		String a = null;
		List<DimPatient> selectByExample = null;
		while (selectByExample==null || !selectByExample.isEmpty()) {
			a = ""+((char) (new Random().nextInt(26)+'a'))+""+
					new Random().nextInt((9 - 0) + 1) +""+
					new Random().nextInt((9 - 0) + 1)+""+
					new Random().nextInt((9 - 0) + 1);
			DimPatientExample example = new DimPatientExample();
			example.createCriteria().andAliasEqualTo(a);
			selectByExample = dimPatientMapper.selectByExample(example);
		}
		return a;
	}
	
}