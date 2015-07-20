package in.co.sunrays.wsx.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;

import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.util.JDBCDataSource;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.exception.DatabaseException;

public class IndustryModel extends BaseModel {

	private static Logger log = Logger.getLogger(IndustryModel.class);

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
	 * Search Industry with pagination
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

		StringBuffer sql = new StringBuffer("SELECT * FROM INDUSTRY WHERE 1=1");

		if (id > 0) {

			sql.append(" AND Id = " + id);
		}
		if (name != null && name.length() > 0) {
			sql.append(" AND NAME like '" + name + "%'");
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
				IndustryModel model = new IndustryModel();
				model.setId(rs.getLong(1));
				model.setName(rs.getString(2));
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

	private String name;

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

		return "INDUSTRY";
	}

}
