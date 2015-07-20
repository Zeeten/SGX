package in.co.sunrays.wsx.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;

import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.JDBCDataSource;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.exception.DatabaseException;

public class AttendanceSheetModel extends BaseModel {
	private static Logger log = Logger.getLogger(AttendanceSheetModel.class);

	private long studentId;
	private String code;
	private String name;
	private long collegeId;
	private long roleId;
	private String  year;
	private String month;
	public static int day = 1;
	private int total;
	private int day1;
	private int day2;
	private int day3;
	private int day4;
	private int day5;
	private int day6;
	private int day7;
	private int day8;
	private int day9;
	private int day10;
	private int day11;
	private int day12;
	private int day13;
	private int day14;
	private int day15;
	private int day16;
	private int day17;
	private int day18;
	private int day19;
	private int day20;
	private int day21;
	private int day22;
	private int day23;
	private int day24;
	private int day25;
	private int day26;
	private int day27;
	private int day28;
	private int day29;
	private int day30;
	private int day31;
	public int getDay1() {
		return day1;
	}

	public void setDay1(int day1) {
		this.day1 = day1;
	}

	public int getDay2() {
		return day2;
	}

	public void setDay2(int day2) {
		this.day2 = day2;
	}

	public int getDay3() {
		return day3;
	}

	public void setDay3(int day3) {
		this.day3 = day3;
	}

	public int getDay4() {
		return day4;
	}

	public void setDay4(int day4) {
		this.day4 = day4;
	}

	public int getDay5() {
		return day5;
	}

	public void setDay5(int day5) {
		this.day5 = day5;
	}

	public int getDay6() {
		return day6;
	}

	public void setDay6(int day6) {
		this.day6 = day6;
	}

	public int getDay7() {
		return day7;
	}

	public void setDay7(int day7) {
		this.day7 = day7;
	}

	public int getDay8() {
		return day8;
	}

	public void setDay8(int day8) {
		this.day8 = day8;
	}

	public int getDay9() {
		return day9;
	}

	public void setDay9(int day9) {
		this.day9 = day9;
	}

	public int getDay10() {
		return day10;
	}

	public void setDay10(int day10) {
		this.day10 = day10;
	}

	public int getDay11() {
		return day11;
	}

	public void setDay11(int day11) {
		this.day11 = day11;
	}

	public int getDay12() {
		return day12;
	}

	public void setDay12(int day12) {
		this.day12 = day12;
	}

	public int getDay13() {
		return day13;
	}

	public void setDay13(int day13) {
		this.day13 = day13;
	}

	public int getDay14() {
		return day14;
	}

	public void setDay14(int day14) {
		this.day14 = day14;
	}

	public int getDay15() {
		return day15;
	}

	public void setDay15(int day15) {
		this.day15 = day15;
	}

	public int getDay16() {
		return day16;
	}

	public void setDay16(int day16) {
		this.day16 = day16;
	}

	public int getDay17() {
		return day17;
	}

	public void setDay17(int day17) {
		this.day17 = day17;
	}

	public int getDay18() {
		return day18;
	}

	public void setDay18(int day18) {
		this.day18 = day18;
	}

	public int getDay19() {
		return day19;
	}

	public void setDay19(int day19) {
		this.day19 = day19;
	}

	public int getDay20() {
		return day20;
	}

	public void setDay20(int day20) {
		this.day20 = day20;
	}

	public int getDay21() {
		return day21;
	}

	public void setDay21(int day21) {
		this.day21 = day21;
	}

	public int getDay22() {
		return day22;
	}

	public void setDay22(int day22) {
		this.day22 = day22;
	}

	public int getDay23() {
		return day23;
	}

	public void setDay23(int day23) {
		this.day23 = day23;
	}

	public int getDay24() {
		return day24;
	}

	public void setDay24(int day24) {
		this.day24 = day24;
	}

	public int getDay25() {
		return day25;
	}

	public void setDay25(int day25) {
		this.day25 = day25;
	}

	public int getDay26() {
		return day26;
	}

	public void setDay26(int day26) {
		this.day26 = day26;
	}

	public int getDay27() {
		return day27;
	}

	public void setDay27(int day27) {
		this.day27 = day27;
	}

	public int getDay28() {
		return day28;
	}

	public void setDay28(int day28) {
		this.day28 = day28;
	}

	public int getDay29() {
		return day29;
	}

	public void setDay29(int day29) {
		this.day29 = day29;
	}

	public int getDay30() {
		return day30;
	}

	public void setDay30(int day30) {
		this.day30 = day30;
	}

	public int getDay31() {
		return day31;
	}

	public void setDay31(int day31) {
		this.day31 = day31;
	}

	public long getCollegeId() {
		return collegeId;
	}

	public void setCollegeId(long collegeId) {
		this.collegeId = collegeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public long getStudentId() {
		return studentId;
	}

	public void setStudentId(long studentId) {
		this.studentId = studentId;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public long getRoleId() {
		return roleId;
	}

	public void setRoleId(long roleId) {
		this.roleId = roleId;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}


	/**
	 * created next PK of record
	 * 
	 * @throws DatabaseException
	 */

	public long nextPK() throws DatabaseException {
		log.debug("Model nextPK Started");
		Connection conn = null;
		long pk = 0;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn
					.prepareStatement("SELECT MAX(ID) FROM " + getTableName());
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				pk = rs.getInt(1);
			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new DatabaseException("Exception : Exception in getting PK");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model nextPK End");
		return pk + 1;
	}
	
	public long add() throws ApplicationException {
		
		System.out.println("in attendance");
		log.debug("Model add Started");
		Connection conn = null;
	
		long pk = 0;
		try {
			conn = JDBCDataSource.getConnection();
			pk = nextPK();
			// Get auto-generated next primary key
			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmtupdate = conn
					.prepareStatement("UPDATE ST_ATTENDANCESHEET  SET D1=?  WHERE STUDENT_ID=? AND ROLE_ID=? AND YEAR=? AND MONTH=?");
			PreparedStatement pstmt = conn
					.prepareStatement("INSERT INTO ST_ATTENDANCESHEET(ID,CODE,ROLE_ID,STUDENT_ID,COLLEGE_ID,NAME,YEAR,MONTH,DAY) VALUES(?,?,?,?,?,?,?,?,?)");
			java.sql.Statement statement = conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_UPDATABLE);
			ResultSet rs = statement.executeQuery("SELECT ID,CODE,ROLE_ID,STUDENT_ID,COLLEGE_ID,NAME,YEAR(STR_TO_DATE(DATE, '%Y-%m-%d')) AS YEAR,MONTH(STR_TO_DATE(DATE, '%Y-%m-%d')) AS MONTH,DAY(STR_TO_DATE(DATE, '%Y-%m-%d')) AS DAY FROM st_studentattendance");
			while ( rs.next() )  
			{  
				Boolean flag=false;
				long id = rs.getLong(1);

				String code = rs.getString(2);
				long roleId = rs.getLong(3);
				long studentId=rs.getLong(4);
				long collegeId=rs.getLong(5);
				String studentName = rs.getString(6);
				String year = rs.getString(7);
				String month = rs.getString(8);
				String d = rs.getString(9);
		
				PreparedStatement pstmt2 = conn
						.prepareStatement("SELECT * FROM ST_ATTENDANCESHEET WHERE STUDENT_ID=? AND ROLE_ID=? AND YEAR=? AND MONTH=? ");
				pstmt2.setLong(1, studentId);
				pstmt2.setLong(2, roleId);
				pstmt2.setString(3, year);
				pstmt2.setString(4, month);
				ResultSet rs1 = pstmt2.executeQuery();
				if (rs1.next()) {
					flag = true;
				}
				if(flag==false){
					pstmt = conn
							.prepareStatement("INSERT INTO ST_ATTENDANCESHEET(ID,CODE,ROLE_ID,STUDENT_ID,COLLEGE_ID,NAME,YEAR,MONTH,D"+(d)+") VALUES(?,?,?,?,?,?,?,?,?)");
					pstmt.setLong(1, id);
					pstmt.setString(2, code); 
					pstmt.setLong(3, roleId); 
					pstmt.setLong(4, studentId);
					pstmt.setLong(5, collegeId);
					pstmt.setString(6, studentName); 
					pstmt.setString(7, year);
					pstmt.setString(8, month);
					pstmt.setInt(9, day);
					pstmt.executeUpdate();
				}else{
					 pstmtupdate = conn
								.prepareStatement("UPDATE ST_ATTENDANCESHEET  SET D"+(d)+"=?  WHERE STUDENT_ID=? AND ROLE_ID=? AND YEAR=? AND MONTH=?");
					 pstmtupdate.setInt(1, day); 
					 pstmtupdate.setLong(2, studentId);
					 pstmtupdate.setLong(3, roleId);
					 pstmtupdate.setString(4, year);
					 pstmtupdate.setString(5, month);
					 pstmtupdate.executeUpdate();
				
				}
				
				conn.commit(); // End transaction
				pstmt.close();
			}
			PreparedStatement pstmt3 = conn
					.prepareStatement("SELECT ID,SUM(D1+D2+D3+D4+D5+D6+D7+D8+D9+D10+D11+D12+D13+D14+D15+D16+D17+D18+D19+D20+D21+D22+D23+D24+D25+D26+D27+D28+D29+D30+D31) AS total FROM ST_ATTENDANCESHEET group By ID");
	
			ResultSet rs3 = pstmt3.executeQuery();
			while (rs3.next()) {
				long aId = rs3.getLong(1);
				int totalPresent = rs3.getInt(2);
					PreparedStatement	 pstmtcount = conn
								.prepareStatement("UPDATE ST_ATTENDANCESHEET  SET TOTAL=?  WHERE ID=?");
					pstmtcount.setInt(1, totalPresent); 
					pstmtcount.setLong(2,aId);
					pstmtcount.executeUpdate();
					conn.commit(); // End transaction
					pstmtcount.close();
			}
		}catch (Exception e) {
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
	 * Search Attendance
	 * 
	 * @param bean
	 *            : Search Parameters
	 * @throws DatabaseException
	 */

	public List search() throws ApplicationException {
		return search(0, 0);
	}

	/**
	 * Search Attendance with pagination
	 * 
	 * @return list : List of Attendance
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
				"SELECT * FROM ST_ATTENDANCESHEET WHERE 1=1");

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
		if (code != null && code.length() > 0) {
			sql.append(" AND CODE like '" + code + "%'");
		}
		if (year != null && year.length() > 0) {
			sql.append(" AND YEAR like '" + year + "%'");

		}
		if (month != null && month.length() > 0) {
			sql.append(" AND MONTH like '" + month + "%'");
		}else{
			sql.append(" AND  MONTH = MONTH(CURDATE()) AND YEAR = YEAR(CURDATE()) ORDER BY MONTH,YEAR DESC");
		}


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
				AttendanceSheetModel model = populateModel(
						new AttendanceSheetModel(), rs);
				list.add(model);
			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new ApplicationException(
					"Exception : Exception in search AttendanceSheet");
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

		AttendanceSheetModel model = (AttendanceSheetModel) m;
		model.setId(rs.getLong("ID"));
		model.setCode(rs.getString("CODE"));
		model.setRoleId(rs.getLong("ROLE_ID"));
		model.setStudentId(rs.getLong("STUDENT_ID"));
		model.setName(rs.getString("NAME"));
		model.setDay1(rs.getInt("D1"));
		model.setDay2(rs.getInt("D2"));
		model.setDay3(rs.getInt("D3"));
		model.setDay4(rs.getInt("D4"));
		model.setDay5(rs.getInt("D5"));
		model.setDay6(rs.getInt("D6"));
		model.setDay7(rs.getInt("D7"));
		model.setDay8(rs.getInt("D8"));
		model.setDay9(rs.getInt("D9"));
		model.setDay10(rs.getInt("D10"));
		model.setDay11(rs.getInt("D11"));
		model.setDay12(rs.getInt("D12"));
		model.setDay13(rs.getInt("D13"));
		model.setDay14(rs.getInt("D14"));
		model.setDay15(rs.getInt("D15"));
		model.setDay16(rs.getInt("D16"));
		model.setDay17(rs.getInt("D17"));
		model.setDay18(rs.getInt("D18"));
		model.setDay19(rs.getInt("D19"));
		model.setDay20(rs.getInt("D20"));
		model.setDay21(rs.getInt("D21"));
		model.setDay22(rs.getInt("D22"));
		model.setDay23(rs.getInt("D23"));
		model.setDay24(rs.getInt("D24"));
		model.setDay25(rs.getInt("D25"));
		model.setDay26(rs.getInt("D26"));
		model.setDay27(rs.getInt("D27"));
		model.setDay28(rs.getInt("D28"));
		model.setDay29(rs.getInt("D29"));
		model.setDay30(rs.getInt("D30"));
		model.setDay31(rs.getInt("D31"));
		model.setTotal(rs.getInt("TOTAL"));

		return m;
	}
	@Override
	public String getKey() {
		return id + "";
	}

	@Override
	public String getValue() {

		return code;
	}

	@Override
	public String getTableName() {
	
		return "ST_ATTENDANCESHEET";
	}

	
}
