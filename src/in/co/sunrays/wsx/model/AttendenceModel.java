package in.co.sunrays.wsx.model;

import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.JDBCDataSource;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.exception.DatabaseException;
import in.co.sunrays.wsx.exception.DuplicateRecordException;

import java.sql.Connection;
import java.util.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

/**
 * Model contains Attendence attributes and its Create, Read, Update and Delete
 * methods.
 * 
 * @version 1.0
 * @since 01 Feb 2015
 * @author SUNRAYS Developer
 * @Copyright (c) sunRays Technologies. All rights reserved.
 * @URL www.sunrays.co.in
 */
public class AttendenceModel extends BaseModel {

	private static Logger log = Logger.getLogger(AttendenceModel.class);

	private long studentId;
	private String studentName;
	private long collegeId;
	private String collegeName;

	private int type = AppRole.STUDENT;
	private Timestamp attendanceTime;
	private Timestamp receivedAt;
	private Date startDate;
	private Date endDate;
	private String code;

	public long getStudentId() {
		return studentId;
	}

	public void setStudentId(long studentId) {
		this.studentId = studentId;
	}

	public Timestamp getAttendanceTime() {
		return attendanceTime;
	}

	public void setAttendanceTime(Timestamp attendanceTime) {
		this.attendanceTime = attendanceTime;
	}

	public Timestamp getReceivedAt() {
		return receivedAt;
	}

	public void setReceivedAt(Timestamp receivedAt) {
		this.receivedAt = receivedAt;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public long getCollegeId() {
		return collegeId;
	}

	public void setCollegeId(long collegeId) {
		this.collegeId = collegeId;
	}

	public String getCollegeName() {
		return collegeName;
	}

	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	/**
	 * Adds a record
	 * 
	 * @return
	 * @throws ApplicationException
	 */
	public long add() throws ApplicationException {
		log.debug("Model add Started");
		Connection conn = null;
		long pk = 0;

		try {
			conn = JDBCDataSource.getConnection();
			pk = nextPK();
			// Get auto-generated next primary key
			conn.setAutoCommit(false); // Begin transaction
			String sql = "INSERT INTO st_attendence  (ID,CODE,STUDENT_ID, ATTENDANCE_TIME, RECEIVED_AT, TYPE ) VALUES (?,?,?,?,?,?);";
			log.info("SQL : " + sql);
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setLong(1, pk);
			pstmt.setString(2, code);
			pstmt.setLong(3, studentId);
			pstmt.setTimestamp(4, attendanceTime);
			pstmt.setTimestamp(5, DataUtility.getCurrentTimestamp());
			pstmt.setInt(6, type);
			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();
			this.setId(pk);

			// updateCreatedInfo();

			updateReferenceData(pk);
			StudentAttendanceModel attendanceModel = new StudentAttendanceModel();
			AttendenceModel model=findByPK(pk);
			long collegeId= model.getCollegeId();
			attendanceModel.setCode(code);
			attendanceModel.setRoleId(type);
			attendanceModel.setStudentId(studentId);
			attendanceModel.setCollegeId(collegeId);
			attendanceModel.setAttendance(StudentAttendanceModel.PRESENT);
			attendanceModel.setDate(attendanceTime);
			attendanceModel.setAttendanceTime(attendanceTime);
			attendanceModel.add();

		} catch (Exception e) {
			log.error("Database Exception..", e);
			JDBCDataSource.trnRollback(conn);
			throw new ApplicationException(e);
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model add End");

		return pk;
	}

	/**
	 * Deletes a record
	 * 
	 * @throws ApplicationException
	 */
	public void delete() throws ApplicationException {
		log.debug("Model delete Started");
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			conn.setAutoCommit(false); // Begin transaction
			String sql = "DELETE FROM ST_ATTENDENCE WHERE ID=?";
			log.info("SQL : " + sql);

			PreparedStatement pstmt = conn.prepareStatement(sql);
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
					"Exception : Exception in delete Attendence");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model delete Started");
	}

	/**
	 * Finds record by Primary Key ( ID)
	 * 
	 * @param pk
	 * @return
	 * @throws ApplicationException
	 */
	public AttendenceModel findByPK(long pk) throws ApplicationException {
		log.debug("Model findByPk Started");

		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_ATTENDENCE WHERE ID=?");

		log.info("SQL : " + sql);

		AttendenceModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, pk);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = populateModel(new AttendenceModel(), rs);
			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new ApplicationException(
					"Exception : Exception in getting Attendence by PK");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model findByName End");
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
		Connection conn = null;

		try {

			conn = JDBCDataSource.getConnection();
			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn
					.prepareStatement("UPDATE ST_ATTENDENCE  SET STUDENT_ID=?,TIME=?  WHERE ID=?");

			pstmt.setLong(1, studentId);
			pstmt.setTimestamp(2, new java.sql.Timestamp(new Date().getTime()));
			pstmt.setLong(3, id);
			pstmt.executeUpdate();

			conn.commit(); // End transaction
			pstmt.close();

			updateModifiedInfo();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			JDBCDataSource.trnRollback(conn);
			throw new ApplicationException(e);
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model update End");
	}

	/**
	 * Searches records on the basis of model NOT NULL attributes with
	 * pagination.
	 * 
	 * 
	 * @param pageNo
	 * @param pageSize
	 * @return
	 * @throws ApplicationException
	 */
	public List search(int pageNo, int pageSize) throws ApplicationException {

		log.debug("Model search Started");

		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_ATTENDENCE  WHERE 1=1");

		if (id > 0) {
			sql.append(" AND ID = " + id);
		}

		if (studentId > 0) {
			sql.append(" AND STUDENT_ID = '" + studentId + "'");
		}
		if (collegeId > 0) {
			sql.append(" AND COLLEGE_ID = " + collegeId);
		}

		

		if (type > 0) {
			sql.append(" AND TYPE = '" + type + "'");
		}

		if (studentName != null && studentName.length() > 0) {
			sql.append(" AND STUDENT_NAME LIKE '" + studentName + "%'");
		}

		if (startDate != null) {
			sql.append(" AND ATTENDANCE_TIME >= '"
					+ DataUtility.getMySQLDateString(startDate) + "'");
		}

		if (endDate != null) {
			sql.append(" AND ATTENDANCE_TIME <= '"
					+ DataUtility.getMySQLDateString(endDate) + "'");
		}
		
		sql.append(" ORDER BY ATTENDANCE_TIME DESC");

		// if page size is greater than zero then apply pagination
		if (pageSize > 0) {
			// Calculate start record index
			pageNo = (pageNo - 1) * pageSize;
			sql.append(" Limit " + pageNo + ", " + pageSize);
			// sql.append(" limit " + pageNo + "," + pageSize);
		}

		log.info("SQL : " + sql);

		ArrayList list = new ArrayList();
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				AttendenceModel model = populateModel(new AttendenceModel(), rs);
				list.add(model);
			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new ApplicationException(
					"Exception : Exception in search Attendence");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}

		log.debug("Model search End");
		return list;
	}

	/**
	 * Searches records on the basis of model NOT NULL attributes
	 * 
	 * @return
	 * @throws ApplicationException
	 */
	public List search() throws ApplicationException {
		return search(0, 0);
	}

	/**
	 * Finds record by Student ID
	 * 
	 * @param pk
	 * @return
	 * @throws ApplicationException
	 */
	public List findByStudentPk(AttendenceModel model, int pageNo, int pageSize)
			throws ApplicationException {
		log.debug("Model list Started");
		List list = new ArrayList();
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM  ST_ATTENDENCE WHERE STUDENT_ID = '"
						+ model.getStudentId() + "'");

		// if page size is greater than zero then apply pagination
		if (pageSize > 0) {
			// Calculate start record index
			pageNo = (pageNo - 1) * pageSize;
			sql.append(" LIMIT " + pageNo + "," + pageSize);
		}
		log.info("SQL : " + sql);
		Connection conn = null;

		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = populateModel(new AttendenceModel(), rs);
				list.add(model);
			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new ApplicationException(
					"Exception : Exception in getting list of users");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}

		log.debug("Model list End");
		return list;
	}

	public List findByStudentPk(AttendenceModel model)
			throws ApplicationException {
		return findByStudentPk(model, 0, 0);
	}

	@Override
	protected <T extends BaseModel> T populateModel(T m, ResultSet rs)
			throws SQLException {
		super.populateModel(m, rs);
		// st_attendence (ID, STUDENT_ID, ATTENDANCE_TIME, RECEIVED_AT, TYPE
		AttendenceModel model = (AttendenceModel) m;
		model.setId(rs.getLong("ID"));
		model.setStudentId(rs.getLong("STUDENT_ID"));
		model.setStudentName(rs.getString("STUDENT_NAME"));


		model.setAttendanceTime(rs.getTimestamp("ATTENDANCE_TIME"));
		model.setReceivedAt(rs.getTimestamp("RECEIVED_AT"));
		model.setType(rs.getInt("TYPE"));

		model.setCollegeId(rs.getLong("COLLEGE_ID"));
		model.setCollegeName(rs.getString("COLLEGE_NAME"));

		return m;
	}

	public void updateReferenceData(long id) throws ApplicationException,
			DuplicateRecordException {

		String sql = "";

		if (type == AppRole.STUDENT) {
			sql = "UPDATE st_attendence U SET STUDENT_NAME = "
					+ "(SELECT  CONCAT(first_name, ' ' ,last_name) FROM ST_STUDENT C WHERE C.ID = U.STUDENT_ID), COLLEGE_ID = "
					+ "(SELECT COLLEGE_ID FROM ST_STUDENT C WHERE C.ID = U.STUDENT_ID)  WHERE ID = "
					+ id;
		} else if (type == AppRole.STAFF) {

			sql = "UPDATE st_attendence U SET STUDENT_NAME = "
					+ "(SELECT  CONCAT(first_name, ' ' ,last_name) FROM st_staff C WHERE C.ID = U.STUDENT_ID), COLLEGE_ID = "
					+ "(SELECT COLLEGE_ID FROM st_staff C WHERE C.ID = U.STUDENT_ID)  WHERE ID = "
					+ id;
		}
		else if (type == AppRole.ASSESSOR) {

			sql = "UPDATE st_attendence U SET STUDENT_NAME = "
					+ "(SELECT  CONCAT(first_name, ' ' ,last_name) FROM st_assessor C WHERE C.ID = U.STUDENT_ID), COLLEGE_ID = "
					+ "(SELECT COLLEGE_ID FROM st_assessor C WHERE C.ID = U.STUDENT_ID)  WHERE ID = "
					+ id;
		}

		String collegeSql = "UPDATE st_attendence U SET COLLEGE_NAME = (SELECT COMPANY_NAME FROM ST_COLLEGE C WHERE C.ID = U.COLLEGE_ID)  WHERE ID = "
				+ id;

		log.debug("Model update Started");

		Connection conn = null;

		try {
			conn = JDBCDataSource.getConnection();
			conn.setAutoCommit(false); // Begin transaction
			Statement stmt = conn.createStatement();
			stmt.executeUpdate(sql);
			stmt.executeUpdate(collegeSql);
			conn.commit(); // End transaction
			stmt.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			JDBCDataSource.trnRollback(conn);
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model update End");

	}

	/**
	 * Returns Drop Down List key
	 */
	@Override
	public String getKey() {
		return id + "";
	}

	/**
	 * Returns Drop Down List Value
	 */
	@Override
	public String getValue() {
		return studentId + "";
	}

	/**
	 * Returns name of table
	 */
	@Override
	public String getTableName() {
		return "ST_ATTENDENCE";
	}

}
