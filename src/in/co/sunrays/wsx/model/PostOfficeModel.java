package in.co.sunrays.wsx.model;

import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.util.JDBCDataSource;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.exception.DatabaseException;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

public class PostOfficeModel extends BaseModel {

	private static Logger log = Logger.getLogger(PostOfficeModel.class);

	private String name;
	
	private long districtId;
	private long stateId;
	private long countryId;
	
	public long getDistrictId() {
		return districtId;
	}

	public void setDistrictId(long districtId) {
		this.districtId = districtId;
	}

	public long getStateId() {
		return stateId;
	}

	public void setStateId(long stateId) {
		this.stateId = stateId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}



	public long getCountryId() {
		return countryId;
	}

	public void setCountryId(long countryId) {
		this.countryId = countryId;
	}

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
				"SELECT * FROM POST_OFFICE WHERE 1=1");

		if (id > 0) {

			sql.append(" AND ID = " + id);
		}
		if (name != null && name.length() > 0) {
			sql.append(" AND NAME like '" + name + "%'");
		}if (countryId > 0) {

			sql.append(" AND COUNTRY_ID = " + countryId);
		}if (stateId > 0) {

			sql.append(" AND STATE_ID = " + stateId);
		}if (districtId > 0) {

			sql.append(" AND DISTRICT_ID = " + districtId);
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
				PostOfficeModel model = new PostOfficeModel();
				model.setId(rs.getLong(1));
				model.setName(rs.getString(2));
				model.setDistrictId(rs.getLong(3));	
				model.setStateId(rs.getLong(4));	
				model.setCountryId(rs.getLong(5));		

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
		return "POST_OFFICE";
	}

}
