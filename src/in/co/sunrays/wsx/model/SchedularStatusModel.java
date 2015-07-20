package in.co.sunrays.wsx.model;

import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.JDBCDataSource;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.exception.DatabaseException;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

public class SchedularStatusModel extends BaseModel {

	private static Logger log = Logger.getLogger(SchedularStatusModel.class);
	
	private String schedularName;
	private Timestamp startTime;
	private Timestamp stopTime; 
	private String status;
	
	public String getSchedularName() {
		return schedularName;
	}

	public void setSchedularName(String schedularName) {
		this.schedularName = schedularName;
	}

	public Timestamp getStartTime() {
		return startTime;
	}

	public void setStartTime(Timestamp startTime) {
		this.startTime = startTime;
	}

	public Timestamp getStopTime() {
		return stopTime;
	}

	public void setStopTime(Timestamp stopTime) {
		this.stopTime = stopTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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
	
	/**
	 * Add Schedular Status
	 * 
	 * @param bean
	 * @throws DatabaseException
	 * 
	 */
	public long add() throws ApplicationException {
		log.debug("Model add Started");
		Connection conn = null;
		long pk = 0;
		try {
			conn = JDBCDataSource.getConnection();
			pk = nextPK();

			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn
					.prepareStatement("INSERT INTO ST_SCHEDULARSTATUS (ID,SCHEDULAR_NAME,START_TIME)VALUES(?,?,?)");
			pstmt.setLong(1, pk);
			pstmt.setString(2, schedularName);
			pstmt.setTimestamp(3, startTime);

			
			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();

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
	 * Update Schedular Status
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
					.prepareStatement("UPDATE ST_SCHEDULARSTATUS SET STOP_TIME=?,STATUS=? WHERE ID=?");

			pstmt.setTimestamp(1, stopTime);
			pstmt.setString(2, status);
			pstmt.setLong(3, id);

			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();

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
				"SELECT * FROM ST_SCHEDULARSTATUS  WHERE 1=1");

		if (id > 0) {
			sql.append(" AND ID = " + id);
		}

		if (schedularName != null && schedularName.length() > 0) {
			sql.append(" AND SCHEDULAR_NAME LIKE '" + schedularName + "%'");
		}

		if (startTime != null) {
			sql.append(" AND START_TIME >= '"
					+ DataUtility.getMySQLDateString(startTime) + "'");
		}

		if (stopTime != null) {
			sql.append(" AND STOP_TIME <= '"
					+ DataUtility.getMySQLDateString(stopTime) + "'");
		}
		
		sql.append(" ORDER BY START_TIME DESC");

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
				SchedularStatusModel model = new SchedularStatusModel();
				model.setId(rs.getLong(1));
				model.setSchedularName(rs.getString(2));
				model.setStartTime(rs.getTimestamp(3));
				model.setStopTime(rs.getTimestamp(4));
				model.setStatus(rs.getString(5));
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
	@Override
	public String getKey() {
		
		return id + "";
	}

	@Override
	public String getValue() {

		return schedularName;
	}

	@Override
	public String getTableName() {

		return "ST_SCHEDULARSTATUS";
	}


}
