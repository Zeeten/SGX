package in.co.sunrays.wsx.model;

import in.co.sunrays.common.model.BaseModel;
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

public class PrincipalEmployerModel extends BaseModel {

	private static Logger log = Logger.getLogger(PrincipalEmployerModel.class);

	private String name;
	private String designation;
	private String organization;
	private long organizationId;
	private String industry;
	private long industryId;
	private String companyType;
	private long companyTypeId;
	private String blockNo;
	private String building;
	private String road;

	private String country;
	private long countryId;
	private String state;
	private long stateId;
	private String district;
	private long districtId;
	private String city;
	private long cityId;
	private String area;
	private long areaId;
	private String postOffice;
	private long postOfficeId;
	private long pinCode;
	private String stdCodePhoneNo;
	private String phoneNo;

	private long pinCodeId;
	private String emailId;
	private String mobileNo;

	private String shopNo;
	private String shopIssuingAuthority;
	private Date shopFrom;
	private Date shopTill;
	private String shopPlaceOfIssue;

	private String govtRegiNo;
	private String govtPanCardNo;
	private String govtEpfNo;
	private String govtEsicNo;
	private String personName;
	private String personMobileNo;
	private String personEmailId;
private long collegeId;



	public long getOrganizationId() {
	return organizationId;
}

public void setOrganizationId(long organizationId) {
	this.organizationId = organizationId;
}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public long getIndustryId() {
		return industryId;
	}

	public void setIndustryId(long industryId) {
		this.industryId = industryId;
	}

	public long getCompanyTypeId() {
		return companyTypeId;
	}

	public void setCompanyTypeId(long companyTypeId) {
		this.companyTypeId = companyTypeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	public String getIndustry() {
		return industry;
	}

	public void setIndustry(String industry) {
		this.industry = industry;
	}

	public String getCompanyType() {
		return companyType;
	}

	public void setCompanyType(String companyType) {
		this.companyType = companyType;
	}

	public String getBlockNo() {
		return blockNo;
	}

	public void setBlockNo(String blockNo) {
		this.blockNo = blockNo;
	}

	public String getBuilding() {
		return building;
	}

	public void setBilding(String building) {
		this.building = building;
	}

	public String getRoad() {
		return road;
	}

	public void setRoad(String road) {
		this.road = road;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public long getCountryId() {
		return countryId;
	}

	public void setCountryId(long countryId) {
		this.countryId = countryId;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public long getStateId() {
		return stateId;
	}

	public void setStateId(long stateId) {
		this.stateId = stateId;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public long getDistrictId() {
		return districtId;
	}

	public void setDistrictId(long districtId) {
		this.districtId = districtId;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public long getCityId() {
		return cityId;
	}

	public void setCityId(long cityId) {
		this.cityId = cityId;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public long getAreaId() {
		return areaId;
	}

	public void setAreaId(long areaId) {
		this.areaId = areaId;
	}

	public String getPostOffice() {
		return postOffice;
	}

	public void setPostOffice(String postOffice) {
		this.postOffice = postOffice;
	}

	public long getPostOfficeId() {
		return postOfficeId;
	}

	public void setPostOfficeId(long postOfficeId) {
		this.postOfficeId = postOfficeId;
	}

	public long getPinCode() {
		return pinCode;
	}

	public void setPinCode(long pinCode) {
		this.pinCode = pinCode;
	}

	public long getPinCodeId() {
		return pinCodeId;
	}

	public void setPinCodeId(long pinCodeId) {
		this.pinCodeId = pinCodeId;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getShopNo() {
		return shopNo;
	}

	public void setShopNo(String shopNo) {
		this.shopNo = shopNo;
	}

	public String getShopIssuingAuthority() {
		return shopIssuingAuthority;
	}

	public void setShopIssuingAuthority(String shopIssuingAuthority) {
		this.shopIssuingAuthority = shopIssuingAuthority;
	}

	public Date getShopFrom() {
		return shopFrom;
	}

	public void setShopFrom(Date shopFrom) {
		this.shopFrom = shopFrom;
	}

	public Date getShopTill() {
		return shopTill;
	}

	public void setShopTill(Date shopTill) {
		this.shopTill = shopTill;
	}

	public String getShopPlaceOfIssue() {
		return shopPlaceOfIssue;
	}

	public void setShopPlaceOfIssue(String shopPlaceOfIssue) {
		this.shopPlaceOfIssue = shopPlaceOfIssue;
	}

	public String getGovtRegiNo() {
		return govtRegiNo;
	}

	public void setGovtRegiNo(String govtRegiNo) {
		this.govtRegiNo = govtRegiNo;
	}

	public String getGovtPanCardNo() {
		return govtPanCardNo;
	}

	public void setGovtPanCardNo(String govtPanCardNo) {
		this.govtPanCardNo = govtPanCardNo;
	}

	public String getGovtEpfNo() {
		return govtEpfNo;
	}

	public void setGovtEpfNo(String govtEpfNo) {
		this.govtEpfNo = govtEpfNo;
	}

	public String getGovtEsicNo() {
		return govtEsicNo;
	}

	public void setGovtEsicNo(String govtEsicNo) {
		this.govtEsicNo = govtEsicNo;
	}

	public String getPersonName() {
		return personName;
	}

	public void setPersonName(String personName) {
		this.personName = personName;
	}

	public String getPersonMobileNo() {
		return personMobileNo;
	}

	public void setPersonMobileNo(String personMobileNo) {
		this.personMobileNo = personMobileNo;
	}

	public String getPersonEmailId() {
		return personEmailId;
	}

	public void setPersonEmailId(String personEmailId) {
		this.personEmailId = personEmailId;
	}
	

	public String getStdCodePhoneNo() {
		return stdCodePhoneNo;
	}

	public void setStdCodePhoneNo(String stdCodePhoneNo) {
		this.stdCodePhoneNo = stdCodePhoneNo;
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
	 */
	public long add() throws ApplicationException, DuplicateRecordException {
		log.debug("Model add Started");
		
		PrincipalEmployerModel principalEmployerData = findByOrganization(organization);
		Connection conn = null;
		long pk = 0;
		
		if (principalEmployerData != null) {
			
			throw new DuplicateRecordException("Oraganization name allready exists !");
		}

		try {
			conn = JDBCDataSource.getConnection();

			// Get auto-generated next primary key
			pk = nextPK();

			conn.setAutoCommit(false); // Begin transaction

			String sql = "INSERT INTO st_principalemployer (ID, NAME, DESIGNATION, ORGANIZATION, INDUSTRY_ID, COMPANY_TYPE, "
					+ "BLOCK_NO, BUILDING, ROAD, COUNTRY_ID, STATE_ID, DISTRICT_ID,"
					+ "CITY_ID, AREA_ID, POST_OFFICE_ID, PIN_CODE_ID, STD_CODE_PHONE_NO, PHONE_NO, MOBILE_NO, EMAIL_ID,"
					+ "SHOP_NO, SHOP_ISSUING_AUTHORITY, SHOP_FROM, SHOP_TILL, SHOP_PLACE_OF_ISSUE, GOVT_REGI_NO, GOVT_PAN_CARD_NO,"
					+ "GOVT_EPF_NO, GOVT_ESIC_NO, PERSON_NAME, PERSON_MOBILE_NO, PERSON_EMAIL_ID) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

			log.info("SQL : " + sql);

			PreparedStatement pstmt = conn.prepareStatement(sql);
			pstmt.setLong(1, pk);
			pstmt.setString(2, name);
			pstmt.setString(3, designation);
			pstmt.setString(4, organization);
			pstmt.setLong(5, industryId);
			pstmt.setString(6, companyType);
			pstmt.setString(7, blockNo);
			pstmt.setString(8, building);
			pstmt.setString(9, road);
			pstmt.setLong(10, countryId);
			pstmt.setLong(11, stateId);
			pstmt.setLong(12, districtId);
			pstmt.setLong(13, cityId);
			pstmt.setLong(14, areaId);
			pstmt.setLong(15, postOfficeId);
			pstmt.setLong(16, pinCodeId);
			pstmt.setString(17, stdCodePhoneNo);
			pstmt.setString(18, phoneNo);
			pstmt.setString(19, mobileNo);
			pstmt.setString(20, emailId);
			pstmt.setString(21, shopNo);
			pstmt.setString(22, shopIssuingAuthority);
			
			if(shopFrom!=null){
				pstmt.setDate(23,  new java.sql.Date(shopFrom.getTime()));
			}else{
				pstmt.setDate(23, (java.sql.Date) shopFrom);
			}
			if(shopTill!=null){
				pstmt.setDate(24,  new java.sql.Date(shopTill.getTime()));
			}else{
				pstmt.setDate(24, (java.sql.Date) shopTill);
			}
			
			pstmt.setString(25, shopPlaceOfIssue);
			pstmt.setString(26, govtRegiNo);
			pstmt.setString(27, govtPanCardNo);
			pstmt.setString(28, govtEpfNo);
			pstmt.setString(29, govtEsicNo);
			pstmt.setString(30, personName);
			pstmt.setString(31, personMobileNo);
			pstmt.setString(32, personEmailId);

			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();
			this.setId(pk);
			updateCreatedInfo();
			updateReferenceData(pk);

		} catch (Exception e) {
			log.error("Database Exception..", e);
			try {
				conn.rollback();
			} catch (Exception ex) {
				ex.printStackTrace();
				throw new ApplicationException(
						"Exception : add rollback exception " + ex.getMessage());
			}
			throw new ApplicationException(
					"Exception : Exception in add Comment");
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

			String sql = "DELETE FROM st_principalemployer WHERE ID=?";
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
					"Exception : Exception in delete comment");
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
	public PrincipalEmployerModel findByPK(long pk) throws ApplicationException {
		log.debug("Model findByName Started");

		StringBuffer sql = new StringBuffer(
				"SELECT * FROM st_principalemployer WHERE ID=?");

		log.info("SQL : " + sql);

		PrincipalEmployerModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, pk);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = populateModel(new PrincipalEmployerModel(), rs);
			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new ApplicationException(
					"Exception : Exception in getting comment by PK");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model findByPk End");
		return model;
	}
	
	public PrincipalEmployerModel findByOrganization(String organization) throws ApplicationException {
		log.debug("Model findByOrganization Started");

		StringBuffer sql = new StringBuffer(
				"SELECT * FROM st_principalemployer WHERE ORGANIZATION=?");

		log.info("SQL : " + sql);

		PrincipalEmployerModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setString(1, organization);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = populateModel(new PrincipalEmployerModel(), rs);
			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new ApplicationException(
					"Exception : Exception in getting comment by PK");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model findByOrganization End");
		return model;
	}

	
	

	/**
	 * Updates a records
	 * 
	 * @throws ApplicationException
	 */
	public void update() throws ApplicationException {

		log.debug("Model update Started");
		
		PrincipalEmployerModel principalEmployerData = findByOrganization(organization);
		
if (principalEmployerData != null && principalEmployerData.getId() != id) {
			
			throw new DuplicateRecordException("Oragnization name all ready  exists !");
		}
	
		Connection conn = null;

		try {

			conn = JDBCDataSource.getConnection();

			conn.setAutoCommit(false); // Begin transaction

			String sql = "UPDATE st_principalemployer SET  NAME=?, DESIGNATION=?, ORGANIZATION=?, INDUSTRY_ID=?, COMPANY_TYPE=?,"
					+ "BLOCK_NO=?, BUILDING=?, ROAD=?, COUNTRY_ID=?, STATE_ID=?, DISTRICT_ID=?,"
					+ "CITY_ID=?, AREA_ID=?, POST_OFFICE_ID=?, PIN_CODE_ID=?, STD_CODE_PHONE_NO=?, PHONE_NO=?, MOBILE_NO=?, EMAIL_ID=?,"
					+ "SHOP_NO=?, SHOP_ISSUING_AUTHORITY=?, SHOP_FROM=?, SHOP_TILL=?, SHOP_PLACE_OF_ISSUE=?, GOVT_REGI_NO=?, GOVT_PAN_CARD_NO=?,"
					+ "GOVT_EPF_NO=?, GOVT_ESIC_NO=?, PERSON_NAME=?, PERSON_MOBILE_NO=?, PERSON_EMAIL_ID=? WHERE ID=?";

			log.info("SQL : " + sql);

			PreparedStatement pstmt = conn.prepareStatement(sql);

			pstmt.setString(1, name);
			pstmt.setString(2, designation);
			pstmt.setString(3, organization);
			pstmt.setLong(4, industryId);
			pstmt.setString(5, companyType);
			pstmt.setString(6, blockNo);
			pstmt.setString(7, building);
			pstmt.setString(8, road);
			pstmt.setLong(9, countryId);
			pstmt.setLong(10, stateId);
			
			pstmt.setLong(11, districtId);
			pstmt.setLong(12, cityId);
			pstmt.setLong(13, areaId);
			pstmt.setLong(14, postOfficeId);
			pstmt.setLong(15, pinCodeId);
			pstmt.setString(16, stdCodePhoneNo);
			pstmt.setString(17, phoneNo);
			pstmt.setString(18, mobileNo);
			pstmt.setString(19, emailId);
			pstmt.setString(20, shopNo);
			pstmt.setString(21, shopIssuingAuthority);
			
			if(shopFrom!=null){
				pstmt.setDate(22,  new java.sql.Date(shopFrom.getTime()));
			}else{
				pstmt.setDate(22, (java.sql.Date) shopFrom);
			}
			if(shopTill!=null){
				pstmt.setDate(23,  new java.sql.Date(shopTill.getTime()));
			}else{
				pstmt.setDate(23, (java.sql.Date) shopTill);
			}
		
			pstmt.setString(24, shopPlaceOfIssue);
			pstmt.setString(25, govtRegiNo);
			pstmt.setString(26, govtPanCardNo);
			pstmt.setString(27, govtEpfNo);
			pstmt.setString(28, govtEsicNo);
			pstmt.setString(29, personName);
			pstmt.setString(30, personMobileNo);
			pstmt.setString(31, personEmailId);
			pstmt.setLong(32, id);

			pstmt.executeUpdate();

			conn.commit(); // End transaction
			pstmt.close();

			updateReferenceData(id);
		} catch (Exception e) {
			log.error("Database Exception..", e);
			try {
				conn.rollback();
			} catch (Exception ex) {
				throw new ApplicationException(
						"Exception : Delete rollback exception "
								+ ex.getMessage());
			}
			throw new ApplicationException("Exception in updating Comment ");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}
		log.debug("Model update End");
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
				"SELECT * FROM st_principalemployer WHERE 1=1");

		if (id > 0) {
			sql.append(" AND id = " + id);
			
		}
		if (organization != null && organization.length() > 0) {
			sql.append(" AND ORGANIZATION like '" + organization + "%'");
		}
		if (name != null && name.length() > 0) {
			sql.append(" AND NAME like '" + name + "%'");
		}
		
		if (industryId > 0) {
			sql.append(" AND INDUSTRY_ID = " + industryId);
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
				PrincipalEmployerModel model = populateModel(
						new PrincipalEmployerModel(), rs);

				list.add(model);
			}
			rs.close();
		} catch (Exception e) {
			log.error("Database Exception..", e);
			throw new ApplicationException(
					"Exception : Exception in search Comment");
		} finally {
			JDBCDataSource.closeConnection(conn);
		}

		log.debug("Model search End");
		return list;
	}

	
	@Override
	protected <T extends BaseModel> T populateModel(T m, ResultSet rs)
			throws SQLException {
		super.populateModel(m, rs);

		PrincipalEmployerModel model = (PrincipalEmployerModel) m;
		model.setId(rs.getLong("ID"));
		model.setName(rs.getString("NAME"));
		model.setDesignation(rs.getString("DESIGNATION"));
		model.setOrganization(rs.getString("ORGANIZATION"));
		model.setIndustry(rs.getString("INDUSTRY"));
		model.setIndustryId(rs.getLong("INDUSTRY_ID"));
		model.setCompanyType(rs.getString("COMPANY_TYPE"));

		model.setBlockNo(rs.getString("BLOCK_NO"));
		model.setBilding(rs.getString("BUILDING"));
		model.setRoad(rs.getString("ROAD"));
		model.setCountryId(rs.getLong("COUNTRY_ID"));
		model.setCountry(rs.getString("COUNTRY"));
		model.setState(rs.getString("STATE"));
		model.setStateId(rs.getLong("STATE_ID"));
		model.setDistrict(rs.getString("DISTRICT"));
		model.setDistrictId(rs.getLong("DISTRICT_ID"));
		model.setCity(rs.getString("CITY"));
		model.setCityId(rs.getLong("CITY_ID"));
		model.setArea(rs.getString("AREA"));
		model.setAreaId(rs.getLong("AREA_ID"));
		model.setPostOffice(rs.getString("POST_OFFICE"));
		model.setPostOfficeId(rs.getLong("POST_OFFICE_ID"));
		model.setPinCode(rs.getLong("PIN_CODE"));
		model.setPinCodeId(rs.getLong("PIN_CODE_ID"));
		model.setStdCodePhoneNo(rs.getString("STD_CODE_PHONE_NO"));
		model.setPhoneNo(rs.getString("PHONE_NO"));
		model.setMobileNo(rs.getString("MOBILE_NO"));
		model.setEmailId(rs.getString("EMAIL_ID"));
		model.setShopNo(rs.getString("SHOP_NO"));
		model.setShopIssuingAuthority(rs.getString("SHOP_ISSUING_AUTHORITY"));
		model.setShopFrom(rs.getDate("SHOP_FROM"));
		model.setShopTill(rs.getDate("SHOP_TILL"));
		model.setShopPlaceOfIssue(rs.getString("SHOP_PLACE_OF_ISSUE"));
		model.setGovtRegiNo(rs.getString("GOVT_REGI_NO"));
		model.setGovtPanCardNo(rs.getString("GOVT_PAN_CARD_NO"));
		model.setGovtEpfNo(rs.getString("GOVT_EPF_NO"));
		model.setGovtEsicNo(rs.getString("GOVT_ESIC_NO"));
		model.setPersonName(rs.getString("PERSON_NAME"));
		model.setPersonMobileNo(rs.getString("PERSON_MOBILE_NO"));
		model.setPersonEmailId(rs.getString("PERSON_EMAIL_ID"));

		return m;
	}

	public void updateReferenceData(long id) throws ApplicationException,
			DuplicateRecordException {

		String countrySql = "UPDATE st_principalemployer U SET COUNTRY = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_ID)  WHERE ID = "
				+ id;

		String stateSql = "UPDATE st_principalemployer U SET STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_ID) WHERE ID = "
				+ id;

		String districtSql = "UPDATE st_principalemployer U SET DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_ID)  WHERE ID = "
				+ id;

		String citySql = "UPDATE st_principalemployer U SET CITY = (SELECT NAME FROM CITY C WHERE C.ID = U.CITY_ID) WHERE ID = "
				+ id;

		String areaSql = "UPDATE st_principalemployer U SET AREA = (SELECT NAME FROM AREA C WHERE C.ID = U.AREA_ID) WHERE ID = "
				+ id;

		String postOfiiceSql = "UPDATE st_principalemployer U SET POST_OFFICE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.POST_OFFICE_ID) WHERE ID = "
				+ id;

		String pincodeSql = "UPDATE st_principalemployer U SET PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.PIN_CODE_ID) WHERE ID = "
				+ id;
		
		String industrySql = "UPDATE st_principalemployer U SET INDUSTRY = (SELECT NAME FROM INDUSTRY C WHERE C.ID = U.INDUSTRY_ID) WHERE ID = "
				+ id;

		log.debug("Model update Started");

		Connection conn = null;

		try {
			conn = JDBCDataSource.getConnection();
			conn.setAutoCommit(false); // Begin transaction
			Statement stmt = conn.createStatement();
			stmt.executeUpdate(countrySql);
			stmt.executeUpdate(stateSql);
			stmt.executeUpdate(districtSql);
			stmt.executeUpdate(citySql);
			stmt.executeUpdate(areaSql);
			stmt.executeUpdate(postOfiiceSql);
			stmt.executeUpdate(pincodeSql);
			stmt.executeUpdate(industrySql);
			

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
		return organization;
	}

	/**
	 * Returns name of table
	 */
	@Override
	public String getTableName() {
		return "st_principalemployer";
	}

}
