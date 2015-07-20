package in.co.sunrays.wsx.model;

import in.co.sunrays.common.model.BaseModel;

import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.JDBCDataSource;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.exception.DatabaseException;
import in.co.sunrays.wsx.exception.DuplicateRecordException;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.sql.Timestamp;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;

import org.apache.log4j.Logger;

/**
 * JDBC Implementation of Student Model
 * 
 * @author SUNRAYS Technologies
 * @version 1.0
 * @Copyright (c) SUNRAYS Technologies
 */

public class StudentAttendanceModel extends BaseModel {

	private static Logger log = Logger.getLogger(StudentAttendanceModel.class);

	public static String PRESENT = "P";
	public static String ABSENT = "A";

	private long roleId;
	private long studentId;
	private String name;
	private Date date;
	private String attendance;
	private String code;
	private Timestamp attendanceTime;

	private Timestamp in1;
	private Timestamp in2;
	private Timestamp in3;
	private Timestamp in4;
	private Timestamp out1;
	private Timestamp out2;
	private Timestamp out3;
	private Timestamp out4;
	private long collegeId;

	private float presentHours;

	private Date startDate;
	private Date endDate;

	public long getRoleId() {
		return roleId;
	}

	public void setRoleId(long roleId) {
		this.roleId = roleId;
	}
	public Timestamp getAttendanceTime() {
		return attendanceTime;
	}

	public void setAttendanceTime(Timestamp attendanceTime) {
		this.attendanceTime = attendanceTime;
	}

	public long getStudentId() {
		return studentId;
	}

	public void setStudentId(long studentId) {
		this.studentId = studentId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAttendance() {
		return attendance;
	}

	public void setAttendance(String attendance) {
		this.attendance = attendance;
	}

	public Timestamp getIn1() {
		return in1;
	}

	public void setIn1(Timestamp in1) {
		this.in1 = in1;
	}

	public Timestamp getIn2() {
		return in2;
	}

	public void setIn2(Timestamp in2) {
		this.in2 = in2;
	}

	public Timestamp getIn3() {
		return in3;
	}

	public void setIn3(Timestamp in3) {
		this.in3 = in3;
	}

	public Timestamp getIn4() {
		return in4;
	}

	public void setIn4(Timestamp in4) {
		this.in4 = in4;
	}

	public Timestamp getOut1() {
		return out1;
	}

	public void setOut1(Timestamp out1) {
		this.out1 = out1;
	}

	public Timestamp getOut2() {
		return out2;
	}

	public void setOut2(Timestamp out2) {
		this.out2 = out2;
	}

	public Timestamp getOut3() {
		return out3;
	}

	public void setOut3(Timestamp out3) {
		this.out3 = out3;
	}

	public Timestamp getOut4() {
		return out4;
	}

	public void setOut4(Timestamp out4) {
		this.out4 = out4;
	}

	public float getPresentHours() {
		return presentHours;
	}

	public void setPresentHours(float presentHours) {
		this.presentHours = presentHours;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
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

	public long getCollegeId() {
		return collegeId;
	}

	public void setCollegeId(long collegeId) {
		this.collegeId = collegeId;
	}

	/**
	 * Adds a record
	 * 
	 * @return
	 * @throws ApplicationException
	 * @throws SQLException 
	 */
	public long add() throws ApplicationException {
		System.out.println("in student");
		log.debug("Model add Started");
		Connection conn = null;
		long pk = 0;

		// Check if attendance for current user and current role is exist for
		// given date.
		if (findByParameters(roleId, studentId, date) > 0) {
			
			int count=countData(roleId,studentId, date);
			int j=0,k=0;
			try {
				conn = JDBCDataSource.getConnection();
				conn.setAutoCommit(false);
		for(int i=count;i==count;i++){
			System.out.println("innn"+count);
			if(i%2==0){
				j=(i/2);
				k=(i%2);
				PreparedStatement	pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET OUT"+(i-(j+k))+"=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1,attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(date.getTime()));
				pstmtupdate.executeUpdate();
				conn.commit(); // End transaction
				pstmtupdate.close();
			
			}else{
                j=(i/2);
				PreparedStatement	pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET IN"+(i-(j))+"=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1,attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(date.getTime()));
				pstmtupdate.executeUpdate();
				conn.commit(); // End transaction
				pstmtupdate.close();
			
			}
		}
			}catch (Exception e) {
				log.error("Database Exception..", e);
				JDBCDataSource.trnRollback(conn);
				throw new ApplicationException(e);
			} finally {
				JDBCDataSource.closeConnection(conn);
			}
			id = pk;
			return pk;
		}

		try {
			conn = JDBCDataSource.getConnection();
			pk = nextPK();
			// Get auto-generated next primary key
			conn.setAutoCommit(false); // Begin transaction
			String sql = "INSERT INTO st_studentattendance (ID,CODE,ROLE_ID,STUDENT_ID,COLLEGE_ID,ATTENDANCE,DATE,IN1) VALUES (?,?,?,?,?,?,?,?)";
			log.info("SQL : " + sql);

			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setLong(1, pk);
			pstmt.setString(2, code);
			pstmt.setLong(3, roleId);
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, attendance);
			pstmt.setDate(7, new java.sql.Date(date.getTime()));
			pstmt.setTimestamp(8,attendanceTime);
			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();

			// updateCreatedInfo();
			updateReferenceData(pk);

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
	
	public int countData(long roleId,long StudentId,Date date) throws ApplicationException {
		
		int count = 0;
		StringBuffer sql = new StringBuffer(
				"SELECT count(*) FROM ST_ATTENDENCE WHERE TYPE=? AND STUDENT_ID=? AND DATE(ATTENDANCE_TIME)= ?");
		log.info("SQL: " + sql);

		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, roleId);
			pstmt.setLong(2, StudentId);
			pstmt.setDate(3, new java.sql.Date(date.getTime()));

			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				count = rs.getInt(1);
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

		return count;
	}
	
	public long addSchedular(String date) throws ApplicationException {
		System.out.println("in student");
		log.debug("Model add Started");
		Connection conn = null;
	
		long pk = 0;

		// Check if attendance for current user and current role is exist for
		// given date.
		/*if (findByParameters(roleId, studentId, date) > 0) {
			id = pk;
			return pk;
		}*/

		try {
			conn = JDBCDataSource.getConnection();
			pk = nextPK();
			// Get auto-generated next primary key
			conn.setAutoCommit(false); // Begin transaction

			PreparedStatement pstmtdelete = conn.prepareStatement("DELETE FROM st_studentattendancetemp");
			pstmtdelete.executeUpdate();
			conn.commit(); // End transaction
			pstmtdelete.close();
			PreparedStatement pstmtupdate = conn
					.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET OUT1=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
			PreparedStatement pstmt = conn
					.prepareStatement("INSERT INTO st_studentattendancetemp(ID,CODE,ROLE_ID,STUDENT_ID,COLLEGE_ID,NAME,DATE,IN1) VALUES(?,?,?,?,?,?,?,?)");
			java.sql.Statement statement = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_UPDATABLE);
			ResultSet rs = statement.executeQuery("SELECT ID,CODE,TYPE,STUDENT_ID,COLLEGE_ID,STUDENT_NAME,ATTENDANCE_TIME from st_attendence where '"+date+"' = DATE(ATTENDANCE_TIME) ");
		
			while ( rs.next() )  
			{  
				Boolean flag=false;
				int count=0;
			long id = rs.getLong(1);

			String code = rs.getString(2);
			long roleId = rs.getLong(3);
			long studentId=rs.getLong(4);
		
			long collegeId=rs.getLong(5);
			String studentName = rs.getString(6);
			Timestamp attendanceTime=rs.getTimestamp(7);
			System.out.println("id"+studentId);
			PreparedStatement pstmt2 = conn
					.prepareStatement("SELECT * FROM ST_STUDENTATTENDANCETEMP WHERE STUDENT_ID=? AND ROLE_ID=?");
			pstmt2.setLong(1, studentId);
			pstmt2.setLong(2, roleId);
			ResultSet rs1 = pstmt2.executeQuery();
			if (rs1.next()) {
				flag = true;
			}
			PreparedStatement pstmtcount = conn
					.prepareStatement("SELECT count(*) FROM ST_STUDENTATTENDANCETEMP WHERE STUDENT_ID=? AND ROLE_ID=? ");
			pstmtcount.setLong(1, studentId);
			pstmtcount.setLong(2, roleId);
			ResultSet rscount1 = pstmtcount.executeQuery();
			if (rscount1.next()) {
			count=rscount1.getInt(1);
			}
		if(flag==false && count==0){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();

		}else if(flag==true && count==1){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
					.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET OUT1=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
			pstmtupdate.setTimestamp(1, attendanceTime);
			pstmtupdate.setLong(2, roleId); 
			pstmtupdate.setLong(3, studentId); 
			pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
			pstmtupdate.executeUpdate();
		}else if(flag==true && count==2){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET IN2=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
		}else if(flag==true && count==3){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET OUT2=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
			
		}else if(flag==true && count==4){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET IN3=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
			
		}else if(flag==true && count==5){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET OUT3=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
			
		}
		else if(flag==true && count==6){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET IN4=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
			
		}
		else if(flag==true && count==7){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET OUT4=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
			
		}
			
			}
			conn.commit(); // End transaction
			pstmt.close();
			// updateCreatedInfo();
		//	updateReferenceData(pk);

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

	
	public long addSchedular() throws ApplicationException {
		System.out.println("in student");
		log.debug("Model add Started");
		Connection conn = null;
	
		long pk = 0;

		// Check if attendance for current user and current role is exist for
		// given date.
		/*if (findByParameters(roleId, studentId, date) > 0) {
			id = pk;
			return pk;
		}*/

		try {
			conn = JDBCDataSource.getConnection();
			pk = nextPK();
			// Get auto-generated next primary key
			conn.setAutoCommit(false); // Begin transaction

			PreparedStatement pstmtdelete = conn.prepareStatement("DELETE FROM st_studentattendancetemp");
			pstmtdelete.executeUpdate();
			conn.commit(); // End transaction
			pstmtdelete.close();
			PreparedStatement pstmtupdate = conn
					.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET OUT1=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
			PreparedStatement pstmt = conn
					.prepareStatement("INSERT INTO st_studentattendancetemp(ID,CODE,ROLE_ID,STUDENT_ID,COLLEGE_ID,NAME,DATE,IN1) VALUES(?,?,?,?,?,?,?,?)");
			java.sql.Statement statement = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_UPDATABLE);
			ResultSet rs = statement.executeQuery("SELECT ID,CODE,TYPE,STUDENT_ID,COLLEGE_ID,STUDENT_NAME,ATTENDANCE_TIME from st_attendence where (CURRENT_DATE()) = DATE(ATTENDANCE_TIME) ");
		
			while ( rs.next() )  
			{  
				Boolean flag=false;
				int count=0;
			long id = rs.getLong(1);

			String code = rs.getString(2);
			long roleId = rs.getLong(3);
			long studentId=rs.getLong(4);
		
			long collegeId=rs.getLong(5);
			String studentName = rs.getString(6);
			Timestamp attendanceTime=rs.getTimestamp(7);
			System.out.println("id"+studentId);
			PreparedStatement pstmt2 = conn
					.prepareStatement("SELECT * FROM ST_STUDENTATTENDANCETEMP WHERE STUDENT_ID=? AND ROLE_ID=?");
			pstmt2.setLong(1, studentId);
			pstmt2.setLong(2, roleId);
			ResultSet rs1 = pstmt2.executeQuery();
			if (rs1.next()) {
				flag = true;
			}
			PreparedStatement pstmtcount = conn
					.prepareStatement("SELECT count(*) FROM ST_STUDENTATTENDANCETEMP WHERE STUDENT_ID=? AND ROLE_ID=? ");
			pstmtcount.setLong(1, studentId);
			pstmtcount.setLong(2, roleId);
			ResultSet rscount1 = pstmtcount.executeQuery();
			if (rscount1.next()) {
			count=rscount1.getInt(1);
			}
		if(flag==false && count==0){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();

		}else if(flag==true && count==1){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
					.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET OUT1=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
			pstmtupdate.setTimestamp(1, attendanceTime);
			pstmtupdate.setLong(2, roleId); 
			pstmtupdate.setLong(3, studentId); 
			pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
			pstmtupdate.executeUpdate();
		}else if(flag==true && count==2){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET IN2=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
		}else if(flag==true && count==3){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET OUT2=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
			
		}else if(flag==true && count==4){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET IN3=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
			
		}else if(flag==true && count==5){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET OUT3=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
			
		}
		else if(flag==true && count==6){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET IN4=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
			
		}
		else if(flag==true && count==7){
			pstmt.setLong(1, id);
			pstmt.setString(2, code); 
			pstmt.setLong(3, roleId); 
			pstmt.setLong(4, studentId);
			pstmt.setLong(5, collegeId);
			pstmt.setString(6, studentName); 
			pstmt.setTimestamp(7, attendanceTime);
			pstmt.setTimestamp(8, attendanceTime);
			pstmt.executeUpdate();
			 pstmtupdate = conn
						.prepareStatement("UPDATE ST_STUDENTATTENDANCE  SET OUT4=?  WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE=?");
				pstmtupdate.setTimestamp(1, attendanceTime);
				pstmtupdate.setLong(2, roleId); 
				pstmtupdate.setLong(3, studentId); 
				pstmtupdate.setDate(4, new java.sql.Date(attendanceTime.getTime()));
				pstmtupdate.executeUpdate();
			
		}
			
			}
			conn.commit(); // End transaction
			pstmt.close();
			// updateCreatedInfo();
		//	updateReferenceData(pk);

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
					.prepareStatement("DELETE FROM ST_STUDENTATTENDANCE WHERE ID=?");

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

	public StudentAttendanceModel findByPK(long pk) throws ApplicationException {
		log.debug("Model findByPK Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_STUDENTATTENDANCE  WHERE ID=?");

		StudentAttendanceModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, pk);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = populateModel(new StudentAttendanceModel(), rs);
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
	
	public boolean findByStudent(long studentId) throws Exception {
		Connection conn = null;
		boolean flag = false;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("SELECT * FROM ST_STUDENTATTENDANCE WHERE STUDENT_ID=?");
			pstmt.setLong(1, studentId);
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) {
				flag = true;
			}
			rs.close();
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		return flag;
	}

	public long findByParameters(long roleId, long studentId, Date date) {

		log.debug("Model findByPK Started");
		long pk = 0;

		StringBuffer sql = new StringBuffer(
				"SELECT ID FROM ST_STUDENTATTENDANCE WHERE ROLE_ID=? AND STUDENT_ID=? AND DATE = ?");
		log.info("SQL: " + sql);

		StudentAttendanceModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, roleId);
			pstmt.setLong(2, studentId);
			pstmt.setDate(3, new java.sql.Date(date.getTime()));

			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				pk = rs.getLong(1);
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

		return pk;
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
			String sql = "UPDATE ST_STUDENTATTENDANCE  SET ROLE_ID=?,"
					+ "STUDENT_ID=?, ATTENDANCE=?, DATE =?  WHERE ID=?";

			log.debug(sql);
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setLong(1, roleId);
			pstmt.setLong(2, studentId);
			pstmt.setString(3, attendance);
			pstmt.setDate(4, new java.sql.Date(date.getTime()));
			pstmt.setLong(5, id);
			pstmt.executeUpdate();

			conn.commit(); // End transaction
			pstmt.close();

			// updateModifiedInfo();
			updateReferenceData(id);
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
				"SELECT * FROM ST_STUDENTATTENDANCE WHERE 1=1");

		if (id > 0) {
			sql.append(" AND id = " + id);
		}
		if (roleId > 0) {
			sql.append(" AND ROLE_ID like '" + roleId + "%'");
		}
		if (studentId > 0) {
			sql.append(" AND STUDENT_ID like '" + studentId + "%'");
		}
		if (collegeId > 0) {
			sql.append(" AND COLLEGE_ID = " + collegeId);
		}
		if (name != null && name.length() > 0) {
			sql.append(" AND NAME like '" + name + "%'");
		}
		if (attendance != null && attendance.length() > 0) {
			sql.append(" AND ATTENDANCE like '" + attendance + "%'");

		}
		if (startDate != null) {
			sql.append(" AND DATE >= '"
					+ DataUtility.getMySQLDateString(startDate) + "'");
		}

		if (endDate != null) {
			sql.append(" AND DATE <= '"
					+ DataUtility.getMySQLDateString(endDate) + "'");
		}

		if (code != null && code.length() > 0) {
			sql.append(" AND CODE like '" + code + "%'");

		}
		sql.append(" ORDER BY DATE DESC");
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
				StudentAttendanceModel model = populateModel(
						new StudentAttendanceModel(), rs);
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
	protected <T extends BaseModel> T populateModel(T m, ResultSet rs)
			throws SQLException {
		// super.populateModel(m, rs);

		StudentAttendanceModel model = (StudentAttendanceModel) m;
		model.setId(rs.getLong("ID"));
		model.setCode(rs.getString("CODE"));
		model.setRoleId(rs.getLong("ROLE_ID"));
		model.setStudentId(rs.getLong("STUDENT_ID"));
		model.setName(rs.getString("NAME"));
		model.setAttendance(rs.getString("ATTENDANCE"));
		model.setDate(rs.getDate("DATE"));

		model.setIn1(rs.getTimestamp("IN1"));
		model.setIn2(rs.getTimestamp("IN2"));
		model.setIn3(rs.getTimestamp("IN3"));
		model.setIn4(rs.getTimestamp("IN4"));
		model.setOut1(rs.getTimestamp("OUT1"));
		model.setOut2(rs.getTimestamp("OUT2"));
		model.setOut3(rs.getTimestamp("OUT3"));
		model.setOut4(rs.getTimestamp("OUT4"));

		model.setPresentHours(rs.getFloat("PRESENT_HOURS"));

		return m;
	}

	public void updateReferenceData(long id) {

		String sql = "";
System.out.println();
		if (roleId == AppRole.STUDENT) {
			sql = "UPDATE ST_STUDENTATTENDANCE U SET NAME = (SELECT  CONCAT(first_name, ' ' ,last_name) FROM ST_STUDENT C WHERE C.ID = U.STUDENT_ID)  WHERE ID = "
					+ id;
		} else if (roleId == AppRole.STAFF) {
			sql = "UPDATE ST_STUDENTATTENDANCE U SET NAME = (SELECT  CONCAT(first_name, ' ' ,last_name) FROM st_staff C WHERE C.ID = U.STUDENT_ID)  WHERE ID = "
					+ id;
		}else if (roleId == AppRole.ASSESSOR) {
			sql = "UPDATE ST_STUDENTATTENDANCE U SET NAME = (SELECT  CONCAT(first_name, ' ' ,last_name) FROM st_assessor C WHERE C.ID = U.STUDENT_ID)  WHERE ID = "
					+ id;
		}

		log.debug("Model update Started");
		log.info("SQL: " + sql);

		Connection conn = null;

		try {
			conn = JDBCDataSource.getConnection();
			conn.setAutoCommit(false); // Begin transaction
			Statement stmt = conn.createStatement();
			stmt.executeUpdate(sql);
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

	@Override
	public String getKey() {
		return id + "";
	}

	@Override
	public String getValue() {
		return name + "";
	}

	@Override
	public String getTableName() {
		return "st_studentattendance";
	}

	public static void main(String[] args) {

		StudentAttendanceModel model = new StudentAttendanceModel();
		model.setRoleId(2);
		model.setStudentId(13);
		model.setAttendance("P");
		model.setDate(new Date());
		model.add();

	}
}