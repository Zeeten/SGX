package in.co.sunrays.wsx.model;

import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.util.JDBCDataSource;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.exception.DatabaseException;
import in.co.sunrays.wsx.exception.DuplicateRecordException;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;

import org.apache.log4j.Logger;

/**
 * JDBC Implementation of Departement Model
 * 
 * @author SUNRAYS Technologies
 * @version 1.0
 * @Copyright (c) SUNRAYS Technologies
 */

public class DepartementModel extends BaseModel {

	private static Logger log = Logger.getLogger(StudentModel.class);

	private String code;
	private String name;
	private String decription;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDecription() {
		return decription;
	}

	public void setDecription(String decription) {
		this.decription = decription;
	}

	/**
	 * Add a Student
	 * 
	 * @param bean
	 * @throws DatabaseException
	 * 
	 */
	public long add() throws ApplicationException, DuplicateRecordException {
		log.debug("Model add Started");
		DepartementModel departmentData = findByCode(code);
		if (departmentData != null) {

			throw new DuplicateRecordException(
					"Departement code allready exists !");
		}
		departmentData = findByName(name);

		if (departmentData != null) {

			throw new DuplicateRecordException(
					"Departement Name All Ready Exists !");
		}
		Connection conn = null;
		long pk = 0;
		try {
			conn = JDBCDataSource.getConnection();
			pk = nextPK();
			// Get auto-generated next primary key
			System.out.println(pk + " in ModelJDBC");
			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn
					.prepareStatement("INSERT INTO ST_DEPARTEMENT(ID,CODE,NAME,"
							+ "DECRIPTION) VALUES(?,?,?,?)");
			pstmt.setLong(1, pk);
			pstmt.setString(2, code);
			pstmt.setString(3, name);
			pstmt.setString(4, decription);

			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();
			this.setId(pk);
			updateCreatedInfo();

		} catch (Exception e) {
			log.error(e);
			JDBCDataSource.trnRollback(conn);
			throw new ApplicationException(e);
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model add End");
		return pk;
	}

	/**
	 * Delete a Student
	 * 
	 * @param bean
	 * @throws DatabaseException
	 */
	public void delete() throws ApplicationException {
		log.debug("Model delete Started");
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn
					.prepareStatement("DELETE FROM ST_DEPARTEMENT WHERE ID=?");

			pstmt.setLong(1, id);
			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();

		} catch (Exception e) {
			log.error("Database Exception..", e);
			try {
				conn.rollback();
			} catch (Exception ex) {
				throw new ApplicationException(
						"Exception : Delete rollback exception "
								+ ex.getMessage());
			}
			throw new ApplicationException(
					"Exception : Exception in delete Student");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model delete Started");
	}

	/**
	 * Find Student by PK
	 * 
	 * @param pk
	 *            : get parameter
	 * @return bean
	 * @throws DatabaseException
	 */

	public DepartementModel findByPK(long pk) throws ApplicationException {
		log.debug("Model findByPK Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_DEPARTEMENT  WHERE ID=?");

		DepartementModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, pk);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = new DepartementModel();
				model.setId(rs.getLong(1));
				model.setCode(rs.getString(2));
				model.setName(rs.getString(3));
				model.setDecription(rs.getString(4));

			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new ApplicationException(
					"Exception : Exception in getting User by pk");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model findByPK End");
		return model;
	}

	/**
	 * Find Student by PK
	 * 
	 * @param pk
	 *            : get parameter
	 * @return bean
	 * @throws DatabaseException
	 */

	public DepartementModel findByName(String name) throws ApplicationException {
		log.debug("Model findByNAME Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_DEPARTEMENT  WHERE NAME=?");

		DepartementModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setString(1, name);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = new DepartementModel();
				model.setId(rs.getLong(1));
				model.setCode(rs.getString(2));
				model.setName(rs.getString(3));
				model.setDecription(rs.getString(4));

			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new ApplicationException(
					"Exception : Exception in getting User by NAME");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model findByNAME End");
		return model;
	}

	public DepartementModel findByCode(String code) throws ApplicationException {
		log.debug("Model findByCode Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_DEPARTEMENT  WHERE CODE=?");

		DepartementModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setString(1, code);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = new DepartementModel();
				model.setId(rs.getLong(1));
				model.setCode(rs.getString(2));
				model.setName(rs.getString(3));
				model.setDecription(rs.getString(4));

			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new ApplicationException(
					"Exception : Exception in getting User by NAME");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model findByNAME End");
		return model;
	}

	/**
	 * Update a Student
	 * 
	 * @param bean
	 * @throws DatabaseException
	 */

	public void update() throws ApplicationException {
		log.debug("Model update Started");
		
		DepartementModel departmentData = findByCode(code);
		if (departmentData != null && departmentData.getId() != id) {

			throw new DuplicateRecordException(
					"Departement code allready exists !");
		}
		departmentData = findByName(name);

		if (departmentData != null && departmentData.getId() != id) {

			throw new DuplicateRecordException(
					"Departement name allready exists !");
		}
		
		
		Connection conn = null;

		try {

			conn = JDBCDataSource.getConnection();

			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn
					.prepareStatement("UPDATE ST_DEPARTEMENT  SET CODE=?,"
							+ "NAME=?,DECRIPTION=?  WHERE ID=?");

			pstmt.setString(1, code);
			pstmt.setString(2, name);
			pstmt.setString(3, decription);
			pstmt.setLong(4, id);
			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();
			updateModifiedInfo();
		} catch (Exception e) {
			log.error(e);
			JDBCDataSource.trnRollback(conn);
			throw new ApplicationException(e);
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model update End");
	}

	/**
	 * Search Student
	 * 
	 * @param bean
	 *            : Search Parameters
	 * @throws DatabaseException
	 */

	public List search() throws ApplicationException {
		return search(0, 0);
	}

	/**
	 * Search Student with pagination
	 * 
	 * @return list : List of Students
	 * @param bean
	 *            : Search Parameters
	 * @param pageNo
	 *            : Current Page No.
	 * @param pageSize
	 *            : Size of Page
	 * 
	 * @throws DatabaseException
	 */

	public List search(int pageNo, int pageSize) throws ApplicationException {
		log.debug("Model search Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_DEPARTEMENT WHERE 1=1");

		if (id > 0) {
			sql.append(" AND id = " + id);
		}
		if (code != null && code.length() > 0) {
			sql.append(" AND CODE like '" + code + "%'");
		}
		if (name != null && name.length() > 0) {
			sql.append(" AND NAME like '" + name + "%'");
		}
		if (decription != null && decription.length() > 0) {
			sql.append(" AND DECRIPTION like '" + decription + "%'");
		}

		// if page size is greater than zero then apply pagination
		if (pageSize > 0) {
			// Calculate start record index
			pageNo = (pageNo - 1) * pageSize;

			sql.append(" Limit " + pageNo + ", " + pageSize);
			// sql.append(" limit " + pageNo + "," + pageSize);
		}

		ArrayList list = new ArrayList();
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				DepartementModel model = new DepartementModel();
				model.setId(rs.getLong(1));
				model.setCode(rs.getString(2));
				model.setName(rs.getString(3));
				model.setDecription(rs.getString(4));
				list.add(model);
			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new ApplicationException(
					"Exception : Exception in search Student");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}

		log.debug("Model search End");
		return list;
	}

	@Override
	public String getKey() {
		return id + "";
	}

	@Override
	public String getValue() {
		return name;
	}

	@Override
	public String getTableName() {
		return "ST_DEPARTEMENT";
	}

}