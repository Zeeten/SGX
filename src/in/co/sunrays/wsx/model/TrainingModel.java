package in.co.sunrays.wsx.model;

import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.common.model.UserModel;
import in.co.sunrays.util.JDBCDataSource;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.exception.DatabaseException;
import in.co.sunrays.wsx.exception.DuplicateRecordException;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

public class TrainingModel extends BaseModel {
	private static Logger log = Logger.getLogger(CollegeModel.class);

	private String name;
	private String description;
	private long departementId;
	private String departementName = null;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public long getDepartementId() {
		return departementId;
	}

	public void setDepartementId(long departementId) {
		this.departementId = departementId;
	}

	public String getDepartementName() {
		return departementName;
	}

	public void setDepartementName(String departementName) {
		this.departementName = departementName;
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
		TrainingModel trainingManagementData = findByName(name);
		Connection conn = null;
		long pk = 0;
		if (trainingManagementData != null) {

			throw new DuplicateRecordException(
					"Training name all ready  exists !");
		}

		try {
			conn = JDBCDataSource.getConnection();
			pk = nextPK();
			// Get auto-generated next primary key
			System.out.println(pk + " in ModelJDBC");
			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn
					.prepareStatement("INSERT INTO ST_TRAINING(ID,NAME,DESCRIPTION,DEPARTEMENT_ID) VALUES(?,?,?,?)");
			pstmt.setLong(1, pk);
			pstmt.setString(2, name);
			pstmt.setString(3, description);
			pstmt.setLong(4, departementId);
			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();

			this.setId(pk);
			updateCreatedInfo();
			updateReferenceData(pk);

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
					.prepareStatement("DELETE FROM ST_TRAINING WHERE ID=?");

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

	public TrainingModel findByPK(long pk) throws ApplicationException {
		log.debug("Model findByPK Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_TRAINING  WHERE ID=?");

		TrainingModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, pk);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = new TrainingModel();
				model = populateModel(model, rs);
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

	public TrainingModel findByName(String name) throws ApplicationException {
		log.debug("Model findByNAME Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_TRAINING  WHERE NAME=?");

		TrainingModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setString(1, name);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = new TrainingModel();
				model = populateModel(model, rs);
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
	 * Update a Student
	 * 
	 * @param bean
	 * @throws DatabaseException
	 */

	public void update() throws ApplicationException {
		log.debug("Model update Started");

		TrainingModel trainingManagementData = findByName(name);

		if (trainingManagementData != null
				&& trainingManagementData.getId() != id) {

			throw new DuplicateRecordException(
					"Training name all ready  exists !");
		}

		Connection conn = null;
		try {

			conn = JDBCDataSource.getConnection();

			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn
					.prepareStatement("UPDATE ST_TRAINING SET NAME=?,DESCRIPTION=?,DEPARTEMENT_ID=? WHERE ID=?");

			pstmt.setString(1, name);
			pstmt.setString(2, description);
			pstmt.setLong(3, departementId);
			pstmt.setLong(4, id);
			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();
			updateModifiedInfo();
			updateReferenceData(id);
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
	 * Search College
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
				"SELECT * FROM ST_TRAINING WHERE 1=1");

		if (id > 0) {

			sql.append(" AND id = " + id);
		}
		if (name != null && name.length() > 0) {
			sql.append(" AND NAME like '" + name + "%'");
		}
		if (description != null && description.length() > 0) {
			sql.append(" AND DESCRIPTION like '" + description + "%'");
		}
		if (departementId > 0) {
			sql.append(" AND DEPARTEMENT_ID like '" + departementId + "%'");
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
				TrainingModel model = new TrainingModel();
				model = populateModel(model, rs);

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
		return name + " ";
	}

	@Override
	public String getTableName() {
		return "ST_TRAINING";
	}

	/**
	 * Updates reference data
	 * 
	 * @param id
	 * @throws ApplicationException
	 * @throws DuplicateRecordException
	 */

	public void updateReferenceData(long id) throws ApplicationException,
			DuplicateRecordException {

		String sql = "UPDATE ST_TRAINING T SET DEPARTEMENT_NAME = (SELECT NAME FROM ST_DEPARTEMENT D WHERE D.ID = T.DEPARTEMENT_ID)  WHERE ID = "
				+ id;

		log.debug("Model update Started");

		Connection conn = null;

		try {
			conn = JDBCDataSource.getConnection();
			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			JDBCDataSource.trnRollback(conn);
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model update End");

	}

	@Override
	protected <T extends BaseModel> T populateModel(T m, ResultSet rs)
			throws SQLException {
		super.populateModel(m, rs);

		TrainingModel model = (TrainingModel) m;
		model.setId(rs.getLong("ID"));
		model.setName(rs.getString("NAME"));
		model.setDescription(rs.getString("DESCRIPTION"));
		model.setDepartementId(rs.getLong("DEPARTEMENT_ID"));
		model.setDepartementName(rs.getString("DEPARTEMENT_NAME"));

		return m;
	}

}
