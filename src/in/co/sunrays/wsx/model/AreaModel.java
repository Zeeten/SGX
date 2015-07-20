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

public class AreaModel extends BaseModel {

	private static Logger log = Logger.getLogger(AreaModel.class);

	private String name;
	private long districtId;

	
	public long getDistrictId() {
		return districtId;
	}

	public void setDistrictId(long districtId) {
		this.districtId = districtId;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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
				"SELECT * FROM AREA WHERE 1=1");

		if (id > 0) {

			sql.append(" AND ID = " + id);
		}
		if (name != null && name.length() > 0) {
			sql.append(" AND NAME like '" + name + "%'");
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
				AreaModel model = new AreaModel();
				model.setId(rs.getLong(1));
				model.setName(rs.getString(2));
				model.setDistrictId(rs.getLong(3));		

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
		return "AREA";
	}

}
