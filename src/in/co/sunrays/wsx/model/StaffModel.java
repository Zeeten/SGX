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
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;

import org.apache.log4j.Logger;

/**
 * JDBC Implementation of Staff Model
 * 
 * @author SUNRAYS Technologies
 * @version 1.0
 * @Copyright (c) SUNRAYS Technologies
 */

public class StaffModel extends BaseModel {

	private static Logger log = Logger.getLogger(StaffModel.class);

	/**
	 * First Name of Student
	 */

	private String code;
	private String firstName;
	private String lastName;
	private String fatherName;
	private String motherName;
	private long collegeId;
	private String collegeName;
	private long departementId;
	private String departementName;
	private int semester;
	private int year;
	private Date dob;
	private String gender;
	private String mobileNo;
	private String address;
	private String photo;
	private long userId;
	private String leftPalm;
	private String rightPalm;
	
	private String middleName;
	private String martialStatus;
	private Date doj;
	private Date dor;
	private String houseNo;
	private String presentHouseNo;
	private String village;
	private String presentVillage;
	
	private String road;
	private String presentRoad;
	private String graduate;
	private String higherGraduation;

	private long countryId;
	private String country;
	private long countryPresentId;
	private String countryPresent;
	private long countryHighId;
	private String countryHigh;
	private long countryHigherId;
	private String countryHigher;
	private long countryGraduateId;
	private String countryGraduate;
	private long countryHigherGraduateId;
	private String countryHigherGraduate;
	
	private long stateId;
	private String state;
	private long statePresentId;
	private String statePresent;
	private long stateHighId;
	private String stateHigh;
	private long stateHigherId;
	private String stateHigher;
	private long stateGraduateId;
	private String stateGraduate;
	private long stateHigherGraduateId;
	private String stateHigherGraduate;
	
	private long districtId;
	private String district;
	private long districtPresentId;
	private String districtPresent;
	private long districtHighId;
	private String districtHigh;
	private long districtHigherId;
	private String districtHigher;
	private long districtGraduateId;
	private String districtGraduate;
	private long districtHigherGraduateId;
	private String districtHigherGraduate;
	
	private long cityId;
	private String city;
	private long cityPresentId;
	private String cityPresent;
	private long cityHighId;
	private String cityHigh;
	private long cityHigherId;
	private String cityHigher;
	private long cityGraduateId;
	private String cityGraduate;
	private long cityHigherGraduateId;
	private String cityHigherGraduate;
	
	private long areaId;
	private String area;
	private long areaPresrentId;
	private String areaPresrent;
	private long areaHighId;
	private String areaHigh;
	private long areaHigherId;
	private String areaHigher;
	private long areaGraduateId;
	private String areaGraduate;
	private long areaHigherGraduateId;
	private String areaHigherGraduate;
	
	private long postOfficeId;
	private String postOffice;
	private long postOfficePresentId;
	private String postOfficePresent;
	private long postOfficeHighId;
	private String postOfficeHigh;
	private long postOfficeHigherId;
	private String postOfficeHigher;
	private long postOfficeGraduateId;
	private String postOfficeGraduate;
	private long postOfficeHigherGraduateId;
	private String postOfficeHigherGraduate;
	

	private long pinCodeId;
	private long pinCode;
	private long persentPinCodeId;
	private long persentPinCode;
	private long highPinCodeId;
	private long highPinCode;
	private long higherPinCodeId;
	private long higherPinCode;
	private long graduatePinCodeId;
	private long graduatePinCode;
	private long higherGraduatePinCodeId;
	private long higherGraduatePinCode;
	
	private String schoolName;
	private String schoolNameHigher;
	private String schoolNameGraduate;
	private String schoolNameHigherGraduate;
	
	private String universityHigh;
	private String universityHigher;
	private String universityGraduate;
	private String universityHigherGraduate;
	
	
	private int yearOfPassingHigh;
	private int yearOfPassingHigher;
	private int yearOfPassingGraduate;
	private int yearOfPassingHigherGraduate;

	private float percentage;
	private float percentageHigher;
	private float percentageGraduate;
	private float percentageHigherGraduate;
	
	private String subjectHigh;
	private String subjectHigher;
	private String subjectGrauduate;
	private String subjectHigherGraduate;
	public long getCountryId() {
		return countryId;
	}

	public void setCountryId(long countryId) {
		this.countryId = countryId;
	}

	public long getCountryPresentId() {
		return countryPresentId;
	}

	public void setCountryPresentId(long countryPresentId) {
		this.countryPresentId = countryPresentId;
	}

	public String getCountryPresent() {
		return countryPresent;
	}

	public void setCountryPresent(String countryPresent) {
		this.countryPresent = countryPresent;
	}

	public long getCountryHighId() {
		return countryHighId;
	}

	public void setCountryHighId(long countryHighId) {
		this.countryHighId = countryHighId;
	}

	public String getCountryHigh() {
		return countryHigh;
	}

	public void setCountryHigh(String countryHigh) {
		this.countryHigh = countryHigh;
	}

	public long getCountryHigherId() {
		return countryHigherId;
	}

	public void setCountryHigherId(long countryHigherId) {
		this.countryHigherId = countryHigherId;
	}

	public String getCountryHigher() {
		return countryHigher;
	}

	public void setCountryHigher(String countryHigher) {
		this.countryHigher = countryHigher;
	}

	public long getCountryGraduateId() {
		return countryGraduateId;
	}

	public void setCountryGraduateId(long countryGraduateId) {
		this.countryGraduateId = countryGraduateId;
	}

	public String getCountryGraduate() {
		return countryGraduate;
	}

	public void setCountryGraduate(String countryGraduate) {
		this.countryGraduate = countryGraduate;
	}

	public long getCountryHigherGraduateId() {
		return countryHigherGraduateId;
	}

	public void setCountryHigherGraduateId(long countryHigherGraduateId) {
		this.countryHigherGraduateId = countryHigherGraduateId;
	}

	public String getCountryHigherGraduate() {
		return countryHigherGraduate;
	}

	public void setCountryHigherGraduate(String countryHigherGraduate) {
		this.countryHigherGraduate = countryHigherGraduate;
	}

	public long getStateId() {
		return stateId;
	}

	public void setStateId(long stateId) {
		this.stateId = stateId;
	}

	public long getStatePresentId() {
		return statePresentId;
	}

	public void setStatePresentId(long statePresentId) {
		this.statePresentId = statePresentId;
	}

	public long getStateHighId() {
		return stateHighId;
	}

	public void setStateHighId(long stateHighId) {
		this.stateHighId = stateHighId;
	}

	public long getStateHigherId() {
		return stateHigherId;
	}

	public void setStateHigherId(long stateHigherId) {
		this.stateHigherId = stateHigherId;
	}

	public long getStateGraduateId() {
		return stateGraduateId;
	}

	public void setStateGraduateId(long stateGraduateId) {
		this.stateGraduateId = stateGraduateId;
	}

	public long getStateHigherGraduateId() {
		return stateHigherGraduateId;
	}

	public void setStateHigherGraduateId(long stateHigherGraduateId) {
		this.stateHigherGraduateId = stateHigherGraduateId;
	}

	public long getDistrictId() {
		return districtId;
	}

	public void setDistrictId(long districtId) {
		this.districtId = districtId;
	}

	public long getDistrictPresentId() {
		return districtPresentId;
	}

	public void setDistrictPresentId(long districtPresentId) {
		this.districtPresentId = districtPresentId;
	}

	public long getDistrictHighId() {
		return districtHighId;
	}

	public void setDistrictHighId(long districtHighId) {
		this.districtHighId = districtHighId;
	}

	public long getDistrictHigherId() {
		return districtHigherId;
	}

	public void setDistrictHigherId(long districtHigherId) {
		this.districtHigherId = districtHigherId;
	}

	public long getDistrictGraduateId() {
		return districtGraduateId;
	}

	public void setDistrictGraduateId(long districtGraduateId) {
		this.districtGraduateId = districtGraduateId;
	}

	public long getDistrictHigherGraduateId() {
		return districtHigherGraduateId;
	}

	public void setDistrictHigherGraduateId(long districtHigherGraduateId) {
		this.districtHigherGraduateId = districtHigherGraduateId;
	}

	public long getCityId() {
		return cityId;
	}

	public void setCityId(long cityId) {
		this.cityId = cityId;
	}

	public long getCityPresentId() {
		return cityPresentId;
	}

	public void setCityPresentId(long cityPresentId) {
		this.cityPresentId = cityPresentId;
	}

	public long getCityHighId() {
		return cityHighId;
	}

	public void setCityHighId(long cityHighId) {
		this.cityHighId = cityHighId;
	}

	public long getCityHigherId() {
		return cityHigherId;
	}

	public void setCityHigherId(long cityHigherId) {
		this.cityHigherId = cityHigherId;
	}

	public long getCityGraduateId() {
		return cityGraduateId;
	}

	public void setCityGraduateId(long cityGraduateId) {
		this.cityGraduateId = cityGraduateId;
	}

	public long getCityHigherGraduateId() {
		return cityHigherGraduateId;
	}

	public void setCityHigherGraduateId(long cityHigherGraduateId) {
		this.cityHigherGraduateId = cityHigherGraduateId;
	}

	public long getAreaId() {
		return areaId;
	}

	public void setAreaId(long areaId) {
		this.areaId = areaId;
	}

	public long getAreaPresrentId() {
		return areaPresrentId;
	}

	public void setAreaPresrentId(long areaPresrentId) {
		this.areaPresrentId = areaPresrentId;
	}

	public long getAreaHighId() {
		return areaHighId;
	}

	public void setAreaHighId(long areaHighId) {
		this.areaHighId = areaHighId;
	}

	public long getAreaHigherId() {
		return areaHigherId;
	}

	public void setAreaHigherId(long areaHigherId) {
		this.areaHigherId = areaHigherId;
	}

	public long getAreaGraduateId() {
		return areaGraduateId;
	}

	public void setAreaGraduateId(long areaGraduateId) {
		this.areaGraduateId = areaGraduateId;
	}

	public long getAreaHigherGraduateId() {
		return areaHigherGraduateId;
	}

	public void setAreaHigherGraduateId(long areaHigherGraduateId) {
		this.areaHigherGraduateId = areaHigherGraduateId;
	}

	public long getPostOfficeId() {
		return postOfficeId;
	}

	public void setPostOfficeId(long postOfficeId) {
		this.postOfficeId = postOfficeId;
	}

	public long getPostOfficePresentId() {
		return postOfficePresentId;
	}

	public void setPostOfficePresentId(long postOfficePresentId) {
		this.postOfficePresentId = postOfficePresentId;
	}

	public long getPostOfficeHighId() {
		return postOfficeHighId;
	}

	public void setPostOfficeHighId(long postOfficeHighId) {
		this.postOfficeHighId = postOfficeHighId;
	}

	public long getPostOfficeHigherId() {
		return postOfficeHigherId;
	}

	public void setPostOfficeHigherId(long postOfficeHigherId) {
		this.postOfficeHigherId = postOfficeHigherId;
	}

	public long getPostOfficeGraduateId() {
		return postOfficeGraduateId;
	}

	public void setPostOfficeGraduateId(long postOfficeGraduateId) {
		this.postOfficeGraduateId = postOfficeGraduateId;
	}

	public long getPostOfficeHigherGraduateId() {
		return postOfficeHigherGraduateId;
	}

	public void setPostOfficeHigherGraduateId(long postOfficeHigherGraduateId) {
		this.postOfficeHigherGraduateId = postOfficeHigherGraduateId;
	}

	public long getPinCodeId() {
		return pinCodeId;
	}

	public void setPinCodeId(long pinCodeId) {
		this.pinCodeId = pinCodeId;
	}

	public long getPersentPinCodeId() {
		return persentPinCodeId;
	}

	public void setPersentPinCodeId(long persentPinCodeId) {
		this.persentPinCodeId = persentPinCodeId;
	}

	public long getHighPinCodeId() {
		return highPinCodeId;
	}

	public void setHighPinCodeId(long highPinCodeId) {
		this.highPinCodeId = highPinCodeId;
	}

	public long getHigherPinCodeId() {
		return higherPinCodeId;
	}

	public void setHigherPinCodeId(long higherPinCodeId) {
		this.higherPinCodeId = higherPinCodeId;
	}

	public long getGraduatePinCodeId() {
		return graduatePinCodeId;
	}

	public void setGraduatePinCodeId(long graduatePinCodeId) {
		this.graduatePinCodeId = graduatePinCodeId;
	}

	public long getHigherGraduatePinCodeId() {
		return higherGraduatePinCodeId;
	}

	public void setHigherGraduatePinCodeId(long higherGraduatePinCodeId) {
		this.higherGraduatePinCodeId = higherGraduatePinCodeId;
	}

	
	
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getFatherName() {
		return fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	public String getMotherName() {
		return motherName;
	}

	public void setMotherName(String motherName) {
		this.motherName = motherName;
	}

	public int getSemester() {
		return semester;
	}

	public void setSemester(int semester) {
		this.semester = semester;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public long getCollegeId() {
		return collegeId;
	}

	public void setCollegeId(long collegeId) {
		this.collegeId = collegeId;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getCollegeName() {
		return collegeName;
	}

	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
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

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}
	public String getLeftPalm() {
		return leftPalm;
	}

	public void setLeftPalm(String leftPalm) {
		this.leftPalm = leftPalm;
	}

	public String getRightPalm() {
		return rightPalm;
	}

	public void setRightPalm(String rightPalm) {
		this.rightPalm = rightPalm;
	}

	
	
	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getMartialStatus() {
		return martialStatus;
	}

	public void setMartialStatus(String martialStatus) {
		this.martialStatus = martialStatus;
	}

	public Date getDoj() {
		return doj;
	}

	public void setDoj(Date doj) {
		this.doj = doj;
	}

	public Date getDor() {
		return dor;
	}

	public void setDor(Date dor) {
		this.dor = dor;
	}

	public String getHouseNo() {
		return houseNo;
	}

	public void setHouseNo(String houseNo) {
		this.houseNo = houseNo;
	}

	public String getVillage() {
		return village;
	}

	public void setVillage(String village) {
		this.village = village;
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

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getPostOffice() {
		return postOffice;
	}

	public void setPostOffice(String postOffice) {
		this.postOffice = postOffice;
	}

	public long getPinCode() {
		return pinCode;
	}

	public void setPinCode(long pinCode) {
		this.pinCode = pinCode;
	}
	

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	public String getUniversityHigh() {
		return universityHigh;
	}

	public void setUniversity(String universityHigh) {
		this.universityHigh = universityHigh;
	}

	public int getYearOfPassing() {
		return yearOfPassingHigh;
	}

	public void setYearOfPassing(int yearOfPassingHigh) {
		this.yearOfPassingHigh = yearOfPassingHigh;
	}

	public float getPercentage() {
		return percentage;
	}

	public void setPercentage(float percentage) {
		this.percentage = percentage;
	}
	

	public String getPresentHouseNo() {
		return presentHouseNo;
	}

	public void setPresentHouseNo(String presentHouseNo) {
		this.presentHouseNo = presentHouseNo;
	}

	public String getPresentVillage() {
		return presentVillage;
	}

	public void setPresentVillage(String presentVillage) {
		this.presentVillage = presentVillage;
	}

	public String getPresentRoad() {
		return presentRoad;
	}

	public void setPresentRoad(String presentRoad) {
		this.presentRoad = presentRoad;
	}

	public String getStatePresent() {
		return statePresent;
	}

	public void setStatePresent(String statePresent) {
		this.statePresent = statePresent;
	}

	public String getStateHigh() {
		return stateHigh;
	}

	public void setStateHigh(String stateHigh) {
		this.stateHigh = stateHigh;
	}

	public String getStateHigher() {
		return stateHigher;
	}

	public void setStateHigher(String stateHigher) {
		this.stateHigher = stateHigher;
	}

	public String getStateGraduate() {
		return stateGraduate;
	}

	public void setStateGraduate(String stateGraduate) {
		this.stateGraduate = stateGraduate;
	}

	public String getStateHigherGraduate() {
		return stateHigherGraduate;
	}

	public void setStateHigherGraduate(String stateHigherGraduate) {
		this.stateHigherGraduate = stateHigherGraduate;
	}

	public String getDistrictPresent() {
		return districtPresent;
	}

	public void setDistrictPresent(String districtPresent) {
		this.districtPresent = districtPresent;
	}

	public String getDistrictHigh() {
		return districtHigh;
	}

	public void setDistrictHigh(String districtHigh) {
		this.districtHigh = districtHigh;
	}

	public String getDistrictHigher() {
		return districtHigher;
	}

	public void setDistrictHigher(String districtHigher) {
		this.districtHigher = districtHigher;
	}

	public String getDistrictGraduate() {
		return districtGraduate;
	}

	public void setDistrictGraduate(String districtGraduate) {
		this.districtGraduate = districtGraduate;
	}

	public String getDistrictHigherGraduate() {
		return districtHigherGraduate;
	}

	public void setDistrictHigherGraduate(String districtHigherGraduate) {
		this.districtHigherGraduate = districtHigherGraduate;
	}

	public String getCityPresent() {
		return cityPresent;
	}

	public void setCityPresent(String cityPresent) {
		this.cityPresent = cityPresent;
	}

	public String getCityHigh() {
		return cityHigh;
	}

	public void setCityHigh(String cityHigh) {
		this.cityHigh = cityHigh;
	}

	public String getCityHigher() {
		return cityHigher;
	}

	public void setCityHigher(String cityHigher) {
		this.cityHigher = cityHigher;
	}

	public String getCityGraduate() {
		return cityGraduate;
	}

	public void setCityGraduate(String cityGraduate) {
		this.cityGraduate = cityGraduate;
	}

	public String getCityHigherGraduate() {
		return cityHigherGraduate;
	}

	public void setCityHigherGraduate(String cityHigherGraduate) {
		this.cityHigherGraduate = cityHigherGraduate;
	}

	public String getAreaPresrent() {
		return areaPresrent;
	}

	public void setAreaPresrent(String areaPresrent) {
		this.areaPresrent = areaPresrent;
	}

	public String getAreaHigh() {
		return areaHigh;
	}

	public void setAreaHigh(String areaHigh) {
		this.areaHigh = areaHigh;
	}

	public String getAreaHigher() {
		return areaHigher;
	}

	public void setAreaHigher(String areaHigher) {
		this.areaHigher = areaHigher;
	}

	public String getAreaGraduate() {
		return areaGraduate;
	}

	public void setAreaGraduate(String areaGraduate) {
		this.areaGraduate = areaGraduate;
	}

	public String getAreaHigherGraduate() {
		return areaHigherGraduate;
	}

	public void setAreaHigherGraduate(String areaHigherGraduate) {
		this.areaHigherGraduate = areaHigherGraduate;
	}

	public String getPostOfficePresent() {
		return postOfficePresent;
	}

	public void setPostOfficePresent(String postOfficePresent) {
		this.postOfficePresent = postOfficePresent;
	}

	public String getPostOfficeHigh() {
		return postOfficeHigh;
	}

	public void setPostOfficeHigh(String postOfficeHigh) {
		this.postOfficeHigh = postOfficeHigh;
	}

	public String getPostOfficeHigher() {
		return postOfficeHigher;
	}

	public void setPostOfficeHigher(String postOfficeHigher) {
		this.postOfficeHigher = postOfficeHigher;
	}

	public String getPostOfficeGraduate() {
		return postOfficeGraduate;
	}

	public void setPostOfficeGraduate(String postOfficeGraduate) {
		this.postOfficeGraduate = postOfficeGraduate;
	}

	public String getPostOfficeHigherGraduate() {
		return postOfficeHigherGraduate;
	}

	public void setPostOfficeHigherGraduate(String postOfficeHigherGraduate) {
		this.postOfficeHigherGraduate = postOfficeHigherGraduate;
	}

	public long getPersentPinCode() {
		return persentPinCode;
	}

	public void setPersentPinCode(long persentPinCode) {
		this.persentPinCode = persentPinCode;
	}

	public long getHighPinCode() {
		return highPinCode;
	}

	public void setHighPinCode(long highPinCode) {
		this.highPinCode = highPinCode;
	}

	public long getHigherPinCode() {
		return higherPinCode;
	}

	public void setHigherPinCode(long higherPinCode) {
		this.higherPinCode = higherPinCode;
	}

	public long getGraduatePinCode() {
		return graduatePinCode;
	}

	public void setGraduatePinCode(long graduatePinCode) {
		this.graduatePinCode = graduatePinCode;
	}

	public long getHigherGraduatePinCode() {
		return higherGraduatePinCode;
	}

	public void setHigherGraduatePinCode(long higherGraduatePinCode) {
		this.higherGraduatePinCode = higherGraduatePinCode;
	}

	public String getSchoolNameHigher() {
		return schoolNameHigher;
	}

	public void setSchoolNameHigher(String schoolNameHigher) {
		this.schoolNameHigher = schoolNameHigher;
	}

	public String getSchoolNameGraduate() {
		return schoolNameGraduate;
	}

	public void setSchoolNameGraduate(String schoolNameGraduate) {
		this.schoolNameGraduate = schoolNameGraduate;
	}

	public String getSchoolNameHigherGraduate() {
		return schoolNameHigherGraduate;
	}

	public void setSchoolNameHigherGraduate(String schoolNameHigherGraduate) {
		this.schoolNameHigherGraduate = schoolNameHigherGraduate;
	}

	public String getUniversityHigher() {
		return universityHigher;
	}

	public void setUniversityHigher(String universityHigher) {
		this.universityHigher = universityHigher;
	}

	public String getUniversityGraduate() {
		return universityGraduate;
	}

	public void setUniversityGraduate(String universityGraduate) {
		this.universityGraduate = universityGraduate;
	}

	public String getUniversityHigherGraduate() {
		return universityHigherGraduate;
	}

	public void setUniversityHigherGraduate(String universityHigherGraduate) {
		this.universityHigherGraduate = universityHigherGraduate;
	}

	public int getYearOfPassingHigh() {
		return yearOfPassingHigh;
	}

	public void setYearOfPassingHigh(int yearOfPassingHigh) {
		this.yearOfPassingHigh = yearOfPassingHigh;
	}

	public int getYearOfPassingHigher() {
		return yearOfPassingHigher;
	}

	public void setYearOfPassingHigher(int yearOfPassingHigher) {
		this.yearOfPassingHigher = yearOfPassingHigher;
	}

	public int getYearOfPassingGraduate() {
		return yearOfPassingGraduate;
	}

	public void setYearOfPassingGraduate(int yearOfPassingGraduate) {
		this.yearOfPassingGraduate = yearOfPassingGraduate;
	}

	public int getYearOfPassingHigherGraduate() {
		return yearOfPassingHigherGraduate;
	}

	public void setYearOfPassingHigherGraduate(int yearOfPassingHigherGraduate) {
		this.yearOfPassingHigherGraduate = yearOfPassingHigherGraduate;
	}

	public float getPercentageHigher() {
		return percentageHigher;
	}

	public void setPercentageHigher(float percentageHigher) {
		this.percentageHigher = percentageHigher;
	}

	public float getPercentageGraduate() {
		return percentageGraduate;
	}

	public void setPercentageGraduate(float percentageGraduate) {
		this.percentageGraduate = percentageGraduate;
	}

	public float getPercentageHigherGraduate() {
		return percentageHigherGraduate;
	}

	public void setPercentageHigherGraduate(float percentageHigherGraduate) {
		this.percentageHigherGraduate = percentageHigherGraduate;
	}

	public void setUniversityHigh(String universityHigh) {
		this.universityHigh = universityHigh;
	}
	public String getGraduate() {
		return graduate;
	}

	public void setGraduate(String graduate) {
		this.graduate = graduate;
	}

	public String getHigherGraduation() {
		return higherGraduation;
	}

	public void setHigherGraduation(String higherGraduation) {
		this.higherGraduation = higherGraduation;
	}

	
	
	public String getSubjectHigh() {
		return subjectHigh;
	}

	public void setSubjectHigh(String subjectHigh) {
		this.subjectHigh = subjectHigh;
	}

	public String getSubjectHigher() {
		return subjectHigher;
	}

	public void setSubjectHigher(String subjectHigher) {
		this.subjectHigher = subjectHigher;
	}

	public String getSubjectGrauduate() {
		return subjectGrauduate;
	}

	public void setSubjectGrauduate(String subjectGrauduate) {
		this.subjectGrauduate = subjectGrauduate;
	}

	public String getSubjectHigherGraduate() {
		return subjectHigherGraduate;
	}

	public void setSubjectHigherGraduate(String subjectHigherGraduate) {
		this.subjectHigherGraduate = subjectHigherGraduate;
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
		StaffModel codeData = findByCode(code);
		Connection conn = null;

		long pk = 0;
		if (codeData != null) {

			throw new DuplicateRecordException("This code allready exists !");
		}

		try {
			conn = JDBCDataSource.getConnection();
			pk = nextPK();

			code = AppRole.STAFF + "-" + getCodeString(pk, 10);

			// Get auto-generated next primary key
			System.out.println(pk + " in ModelJDBC");
			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn
					.prepareStatement("INSERT INTO ST_STAFF (ID,CODE,FIRST_NAME,MIDDLE_NAME, LAST_NAME,FATHER_NAME,MOTHER_NAME," +
							"COLLEGE_ID,DEPARTEMENT_ID,DATE_OF_BIRTH,GENDER,"+
  "MARTIAL_STATUS,MOBILE_NO,JOINING_DATE,RELIVING_DATE,HOUSE_NO," +
  "PRESENT_HOUSE_NO,VILLAGE,PRESENT_VILLAGE,ROAD,PRESENT_ROAD,COUNTRY_ID,COUNTRY_PRESENT_ID,COUNTRY_HIGH_ID,COUNTRY_HIGHER_ID,COUNTRY_GRADUATE_ID,COUNTRY_HIGHER_GRADUATE_ID,"+
             "STATE_ID,STATE_PRESENT_ID,STATE_HIGH_ID,STATE_HIGHER_ID,STATE_GRADUATE_ID,STATE_HIGHER_GRADUATE_ID,DISTRICT_ID,DISTRICT_PRESENT_ID,DISTRICT_HIGH_ID,DISTRICT_HIGHER_ID,"+
        "DISTRICT_GRADUATE_ID,DISTRICT_HIGHER_GRADUATE_ID,CITY_ID,CITY_PRESENT_ID,CITY_HIGH_ID,CITY_HIGHER_ID,CITY_GRADUATE_ID,CITY_HIGHER_GRADUATE_ID,AREA_ID,AREA_PRESENT_ID,"+
        "AREA_HIGH_ID,AREA_HIGHER_ID,AREA_GRADUATE_ID,AREA_HIGHER_GRADUATE_ID,POST_OFFICE_ID,POST_OFFICE_PRESENT_ID,POST_OFFICE_HIGH_ID,POST_OFFICE_HIGHER_ID,POST_OFFICE_GRADUATE_ID,"+
      "POST_OFFICE_HIGHER_GRADUATE_ID,PIN_CODE_ID,PRESENT_PIN_CODE_ID,HIGH_PIN_CODE_ID," +
       "HIGHER_PIN_CODE_ID,GRADUATE_PIN_CODE_ID,HIGHER_GRADUATE_PIN_CODE_ID,SCHOOL_NAME,SCHOOL_NAME_HIGHER,"+
       "SCHOOL_NAME_GRADUATE,SCHOOL_NAME_HIGHER_GRADUATE,UNIVERSITY_HIGH," +
       "UNIVERSITY_HIGHER,UNIVERSITY_GRADUATE,UNIVERSITY_HIGHER_GRADUATE,YEAR_OF_PASSING_HIGH,"+
             "YEAR_OF_PASSING_HIGHER,YEAR_OF_PASSING_GRADUATE,YEAR_OF_PASSING_HIGHER_GRADUATE," +
             "PERCANTAGE,PERCANTAGE_HIGHER,PERCANTAGE_GRADUATE,PERCANTAGE_HIGHER_GRADUATE,SUBJECT_HIGH,SUBJECT_HIGHER,SUBJECT_GRADUATE,SUBJECT_HIGHER_GRADUATE,GRADUATE,HIGHER_GRADUATION,USER_ID)"+
             " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?," +
             "?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			pstmt.setLong(1, pk);
			pstmt.setString(2, code);
			pstmt.setString(3, firstName);
			pstmt.setString(4,middleName);
			pstmt.setString(5, lastName);
			pstmt.setString(6, fatherName);
			pstmt.setString(7, motherName);
			pstmt.setLong(8, collegeId);
			pstmt.setLong(9, departementId);
			pstmt.setDate(10, new java.sql.Date(dob.getTime()));
			
			pstmt.setString(11, gender);
			pstmt.setString(12, martialStatus);
			pstmt.setString(13, mobileNo);
			if(doj!=null){
				pstmt.setDate(14,  new java.sql.Date(doj.getTime()));
			}else{
				pstmt.setDate(14, (java.sql.Date) doj);
			}
			if(dor!=null){
				pstmt.setDate(15,  new java.sql.Date(dor.getTime()));
			}else{
				pstmt.setDate(15, (java.sql.Date) dor);
			}

			pstmt.setString(16, houseNo);
			pstmt.setString(17, presentHouseNo);	
			pstmt.setString(18, village);
			pstmt.setString(19, presentVillage);
			pstmt.setString(20, road);
			
			pstmt.setString(21, presentRoad);
			pstmt.setLong(22, countryId);
			pstmt.setLong(23, countryPresentId);
			pstmt.setLong(24, countryHighId);
			pstmt.setLong(25, countryHigherId);
			pstmt.setLong(26, countryGraduateId);
			pstmt.setLong(27, countryHigherGraduateId);
			pstmt.setLong(28, stateId);
			pstmt.setLong(29, statePresentId);
			pstmt.setLong(30, stateHighId);
			pstmt.setLong(31, stateHigherId);
			pstmt.setLong(32, stateGraduateId);
			pstmt.setLong(33, stateHigherGraduateId);	
			pstmt.setLong(34,districtId);
			pstmt.setLong(35, districtPresentId);
			
			pstmt.setLong(36, districtHighId);
			pstmt.setLong(37, districtHigherId);
			pstmt.setLong(38, districtGraduateId);
			pstmt.setLong(39, districtHigherGraduateId);
			pstmt.setLong(40, cityId);
			pstmt.setLong(41, cityPresentId);
			pstmt.setLong(42, cityHighId);
			pstmt.setLong(43, cityHigherId);
			pstmt.setLong(44, cityGraduateId);
			pstmt.setLong(45, cityHigherGraduateId);
			
			pstmt.setLong(46, areaId);
			pstmt.setLong(47, areaPresrentId);
			pstmt.setLong(48, areaHighId);
			pstmt.setLong(49, areaHigherId);
			pstmt.setLong(50, areaGraduateId);
			pstmt.setLong(51, areaHigherGraduateId);
			pstmt.setLong(52, postOfficeId);
			System.out.println("postOfficePresentId"+postOfficePresentId);
			pstmt.setLong(53, postOfficePresentId);
			pstmt.setLong(54, postOfficeHighId);
			pstmt.setLong(55, postOfficeHigherId);
			pstmt.setLong(56, postOfficeGraduateId);
			pstmt.setLong(57, postOfficeHigherGraduateId);
			pstmt.setLong(58,pinCodeId);
			pstmt.setLong(59,persentPinCodeId);
			pstmt.setLong(60,highPinCodeId);
			pstmt.setLong(61,higherPinCodeId);
			pstmt.setLong(62,graduatePinCodeId);
			pstmt.setLong(63,higherGraduatePinCodeId);
			pstmt.setString(64, schoolName);
			pstmt.setString(65, schoolNameHigher);
			pstmt.setString(66, schoolNameGraduate);
			
			pstmt.setString(67, schoolNameHigherGraduate);
			pstmt.setString(68, universityHigh);
			pstmt.setString(69, universityHigher);
			pstmt.setString(70, universityGraduate);
			pstmt.setString(71, universityHigherGraduate);
			pstmt.setInt(72, yearOfPassingHigh);
			pstmt.setInt(73, yearOfPassingHigher);
			pstmt.setInt(74, yearOfPassingGraduate);
			pstmt.setInt(75, yearOfPassingHigherGraduate);
			pstmt.setFloat(76, percentage);
			pstmt.setFloat(77, percentageHigher);
			pstmt.setFloat(78, percentageGraduate);
			pstmt.setFloat(79, percentageHigherGraduate);
			
			
			pstmt.setString(80, subjectHigh);
			pstmt.setString(81, subjectHigher);
			pstmt.setString(82, subjectGrauduate);
			pstmt.setString(83, subjectHigherGraduate);
			pstmt.setString(84, graduate);
			pstmt.setString(85, higherGraduation);
	        pstmt.setLong(86, userId);
			
			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();
			this.setId(pk);
			updateCreatedInfo();
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
					.prepareStatement("DELETE FROM ST_STAFF WHERE ID=?");

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

	public StaffModel findByPK(long pk) throws ApplicationException {
		log.debug("Model findByPK Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_STAFF  WHERE ID=?");

		StaffModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, pk);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = populateModel(new StaffModel(), rs);
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

	public StaffModel findByCode(String Code) throws ApplicationException {
		log.debug("Model findByPK Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_STAFF  WHERE ID=?");

		StaffModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setString(1, code);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = populateModel(new StaffModel(), rs);
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

	public StaffModel findByUserId(long userId) throws ApplicationException {
		log.debug("Model findByPK Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_STAFF  WHERE USER_ID=?");

		StaffModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, userId);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = new StaffModel();
				model = populateModel(new StaffModel(), rs);
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

		StaffModel codeData = findByCode(code);
		// Check duplicate code

		if (codeData != null && codeData.getId() != id) {

			throw new DuplicateRecordException("This code allready exists !");
		}

		Connection conn = null;

		try {

			conn = JDBCDataSource.getConnection();

			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn
					.prepareStatement("UPDATE ST_STAFF SET CODE=?,FIRST_NAME=?,MIDDLE_NAME=?,"
							+ "LAST_NAME=?,FATHER_NAME=?,MOTHER_NAME=?,COLLEGE_ID=?,DEPARTEMENT_ID=?,"
							+ "DATE_OF_BIRTH=?,GENDER=?,MARTIAL_STATUS=?,MOBILE_NO=?,JOINING_DATE=?,RELIVING_DATE=?,HOUSE_NO=?,PRESENT_HOUSE_NO=?,VILLAGE=?,"
							+ "PRESENT_VILLAGE=?,ROAD=?,PRESENT_ROAD=?,COUNTRY_ID=?,COUNTRY_PRESENT_ID=?,COUNTRY_HIGH_ID=?,COUNTRY_HIGHER_ID=?,COUNTRY_GRADUATE_ID=?,COUNTRY_HIGHER_GRADUATE_ID=?,STATE_ID=?,STATE_PRESENT_ID=?,STATE_HIGH_ID=?,STATE_HIGHER_ID=?,STATE_GRADUATE_ID=?," +
							"STATE_HIGHER_GRADUATE_ID=?,DISTRICT_ID=?,DISTRICT_PRESENT_ID=?,DISTRICT_HIGH_ID=?,DISTRICT_HIGHER_ID=?,DISTRICT_GRADUATE_ID=?," +
							"DISTRICT_HIGHER_GRADUATE_ID=?,CITY_ID=?,CITY_PRESENT_ID=?,CITY_HIGH_ID=?,CITY_HIGHER_ID=?,CITY_GRADUATE_ID=?,CITY_HIGHER_GRADUATE_ID=?," +
							"AREA_ID=?,AREA_PRESENT_ID=?,AREA_HIGH_ID=?,AREA_HIGHER_ID=?,AREA_GRADUATE_ID=?,AREA_HIGHER_GRADUATE_ID=?,POST_OFFICE_ID=?,POST_OFFICE_PRESENT_ID=?," +
							"POST_OFFICE_HIGH_ID=?,POST_OFFICE_HIGHER_ID=?,POST_OFFICE_GRADUATE_ID=?,POST_OFFICE_HIGHER_GRADUATE_ID=?,PIN_CODE_ID=?,PRESENT_PIN_CODE_ID=?,HIGH_PIN_CODE_ID=?," +
       "HIGHER_PIN_CODE_ID=?,GRADUATE_PIN_CODE_ID=?,HIGHER_GRADUATE_PIN_CODE_ID=?,SCHOOL_NAME=?,SCHOOL_NAME_HIGHER=?,"+
       "SCHOOL_NAME_GRADUATE=?,SCHOOL_NAME_HIGHER_GRADUATE=?,UNIVERSITY_HIGH=?," +
       "UNIVERSITY_HIGHER=?,UNIVERSITY_GRADUATE=?,UNIVERSITY_HIGHER_GRADUATE=?,YEAR_OF_PASSING_HIGH=?,"+
             "YEAR_OF_PASSING_HIGHER=?,YEAR_OF_PASSING_GRADUATE=?,YEAR_OF_PASSING_HIGHER_GRADUATE=?," +
             "PERCANTAGE=?,PERCANTAGE_HIGHER=?,PERCANTAGE_GRADUATE=?,PERCANTAGE_HIGHER_GRADUATE=?," +
             "SUBJECT_HIGH=?,SUBJECT_HIGHER=?,SUBJECT_GRADUATE=?,SUBJECT_HIGHER_GRADUATE=?,GRADUATE=?,HIGHER_GRADUATION=?,USER_ID=? WHERE ID=?");

			pstmt.setString(1, code);
			pstmt.setString(2, firstName);
			pstmt.setString(3,middleName);
			pstmt.setString(4, lastName);
			pstmt.setString(5, fatherName);
			pstmt.setString(6, motherName);
			pstmt.setLong(7, collegeId);
			pstmt.setLong(8, departementId);
			pstmt.setDate(9, new java.sql.Date(dob.getTime()));
			pstmt.setString(10, gender);
			pstmt.setString(11, martialStatus);
			pstmt.setString(12, mobileNo);
			pstmt.setDate(13, new java.sql.Date(doj.getTime()));
			if(dor!=null){
				pstmt.setDate(14,  new java.sql.Date(dor.getTime()));
			}else{
				pstmt.setDate(14, (java.sql.Date) dor);
			}
			pstmt.setString(15, houseNo);
			pstmt.setString(16, presentHouseNo);	
			pstmt.setString(17, village);
			pstmt.setString(18, presentVillage);
			pstmt.setString(19, road);
			pstmt.setString(20, presentRoad);
			
			pstmt.setLong(21, countryId);
			pstmt.setLong(22, countryPresentId);
			pstmt.setLong(23, countryHighId);
			pstmt.setLong(24, countryHigherId);
			pstmt.setLong(25, countryGraduateId);
			pstmt.setLong(26, countryHigherGraduateId);
			
			pstmt.setLong(27, stateId);
			pstmt.setLong(28, statePresentId);
			pstmt.setLong(29, stateHighId);
			pstmt.setLong(30, stateHigherId);
			pstmt.setLong(31, stateGraduateId);
			pstmt.setLong(32, stateHigherGraduateId);	
			pstmt.setLong(33,districtId);
			pstmt.setLong(34, districtPresentId);
			pstmt.setLong(35, districtHighId);
			
			pstmt.setLong(36, districtHigherId);
			pstmt.setLong(37, districtGraduateId);
			pstmt.setLong(38, districtHigherGraduateId);
			pstmt.setLong(39, cityId);
			pstmt.setLong(40, cityPresentId);
			pstmt.setLong(41, cityHighId);
			pstmt.setLong(42, cityHigherId);
			pstmt.setLong(43, cityGraduateId);
			pstmt.setLong(44, cityHigherGraduateId);
			pstmt.setLong(45, areaId);
			
			pstmt.setLong(46, areaPresrentId);
			pstmt.setLong(47, areaHighId);
			pstmt.setLong(48, areaHigherId);
			pstmt.setLong(49, areaGraduateId);
			pstmt.setLong(50, areaHigherGraduateId);
			pstmt.setLong(51, postOfficeId);
			pstmt.setLong(52, postOfficePresentId);
			pstmt.setLong(53, postOfficeHighId);
			pstmt.setLong(54, postOfficeHigherId);
			pstmt.setLong(55, postOfficeGraduateId);
			
			pstmt.setLong(56, postOfficeHigherGraduateId);
			pstmt.setLong(57,pinCodeId);
			pstmt.setLong(58,persentPinCodeId);
			pstmt.setLong(59,highPinCodeId);
			pstmt.setLong(60,higherPinCodeId);
			pstmt.setLong(61,graduatePinCodeId);
			pstmt.setLong(62,higherGraduatePinCodeId);
			pstmt.setString(63, schoolName);
			pstmt.setString(64, schoolNameHigher);
			pstmt.setString(65, schoolNameGraduate);
			
			pstmt.setString(66, schoolNameHigherGraduate);
			pstmt.setString(67, universityHigh);
			pstmt.setString(68, universityHigher);
			pstmt.setString(69, universityGraduate);
			pstmt.setString(70, universityHigherGraduate);
			pstmt.setInt(71, yearOfPassingHigh);
			pstmt.setInt(72, yearOfPassingHigher);
			pstmt.setInt(73, yearOfPassingGraduate);
			pstmt.setInt(74, yearOfPassingHigherGraduate);
			pstmt.setFloat(75, percentage);
			
			pstmt.setFloat(76, percentageHigher);
			pstmt.setFloat(77, percentageGraduate);
			pstmt.setFloat(78, percentageHigherGraduate);
			
			
			pstmt.setString(79, subjectHigh);
			pstmt.setString(80, subjectHigher);
			pstmt.setString(81, subjectGrauduate);
			pstmt.setString(82, subjectHigherGraduate);
			pstmt.setString(83, graduate);
			pstmt.setString(84, higherGraduation);
			pstmt.setLong(85, userId);
			pstmt.setLong(86, id);
			pstmt.executeUpdate();
			conn.commit(); // End transaction
			pstmt.close();
			updateModifiedInfo();
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
		StringBuffer sql = new StringBuffer("SELECT * FROM ST_STAFF WHERE 1=1");

		if (id > 0) {
			sql.append(" AND id = " + id);
		}

		if (code != null && code.length() > 0) {
			sql.append(" AND CODE like '" + code + "%'");
		}

		if (firstName != null && firstName.length() > 0) {
			sql.append(" AND FIRST_NAME like '" + firstName + "%'");
		}
		if (lastName != null && lastName.length() > 0) {
			sql.append(" AND LAST_NAME like '" + lastName + "%'");
		}
		if (fatherName != null && fatherName.length() > 0) {
			sql.append(" AND FATHER_NAME like '" + fatherName + "%'");
		}
		if (motherName != null && motherName.length() > 0) {
			sql.append(" AND MOTHER_NAME like '" + motherName + "%'");
		}
		if (collegeId > 0) {
			sql.append(" AND COLLEGE_ID = " + collegeId);
		}
		if (departementId > 0) {
			sql.append(" AND DEPARTEMENT_ID = " + departementId);
		}
		if (semester != 0 && semester > 0) {
			sql.append(" AND SEMESTER like '" + semester + "%'");
		}
		if (dob != null && dob.getDate() > 0) {
			sql.append(" AND DOB = " + dob);
		}
		if (mobileNo != null && mobileNo.length() > 0) {
			sql.append(" AND MOBILE_NO like '" + mobileNo + "%'");
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
				StaffModel model = populateModel(new StaffModel(), rs);
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
		super.populateModel(m, rs);
		StaffModel model = (StaffModel) m;
		model.setId(rs.getLong("ID"));
		model.setCode(rs.getString("CODE"));
		model.setFirstName(rs.getString("FIRST_NAME"));
		model.setMiddleName(rs.getString("MIDDLE_NAME"));
     	model.setLastName(rs.getString("LAST_NAME"));
		model.setFatherName(rs.getString("FATHER_NAME"));
		model.setMotherName(rs.getString("MOTHER_NAME"));
		model.setCollegeId(rs.getLong("COLLEGE_ID"));
		model.setCollegeName(rs.getString("COLLEGE_NAME"));
		model.setDepartementId(rs.getLong("DEPARTEMENT_ID"));
		model.setDepartementName(rs.getString("DEPARTEMENT_NAME"));
		model.setDob(rs.getDate("DATE_OF_BIRTH"));
		model.setGender(rs.getString("GENDER"));
		model.setMartialStatus(rs.getString("MARTIAL_STATUS"));
		model.setMobileNo(rs.getString("MOBILE_NO"));
		model.setDoj(rs.getDate("JOINING_DATE"));
    	model.setDor(rs.getDate("RELIVING_DATE"));
		model.setHouseNo(rs.getString("HOUSE_NO"));
		model.setPresentHouseNo(rs.getString("PRESENT_HOUSE_NO"));
		model.setVillage(rs.getString("VILLAGE"));
		model.setPresentVillage(rs.getString("PRESENT_VILLAGE"));
		model.setRoad(rs.getString("ROAD"));
		model.setPresentRoad(rs.getString("PRESENT_ROAD"));
		model.setCountryId(rs.getLong("COUNTRY_ID"));
		model.setCountry(rs.getString("COUNTRY"));
		model.setCountryPresentId(rs.getLong("COUNTRY_PRESENT_ID"));
		model.setCountryPresent(rs.getString("COUNTRY_PRESENT"));
		model.setCountryHighId(rs.getLong("COUNTRY_HIGH_ID"));
		model.setCountryHigh(rs.getString("COUNTRY_HIGH"));
		model.setCountryHigherId(rs.getLong("COUNTRY_HIGHER_ID"));
		model.setCountryHigher(rs.getString("COUNTRY_HIGHER"));
		model.setCountryGraduateId(rs.getLong("COUNTRY_GRADUATE_ID"));
		model.setCountryGraduate(rs.getString("COUNTRY_GRADUATE"));
		model.setCountryHigherGraduateId(rs.getLong("COUNTRY_HIGHER_GRADUATE_ID"));
		model.setCountryHigherGraduate(rs.getString("COUNTRY_HIGHER_GRADUATE"));
		
		model.setStateId(rs.getLong("STATE_ID"));
		model.setState(rs.getString("STATE"));
		model.setStatePresentId(rs.getLong("STATE_PRESENT_ID"));
		model.setStatePresent(rs.getString("STATE_PRESENT"));
		model.setStateHighId(rs.getLong("STATE_HIGH_ID"));
		model.setStateHigh(rs.getString("STATE_HIGH"));
		model.setStateHigherId(rs.getLong("STATE_HIGHER_ID"));
		model.setStateHigher(rs.getString("STATE_HIGHER"));
		model.setStateGraduateId(rs.getLong("STATE_GRADUATE_ID"));
		model.setStateGraduate(rs.getString("STATE_GRADUATE"));
		model.setStateHigherGraduateId(rs.getLong("STATE_HIGHER_GRADUATE_ID"));
		model.setStateHigherGraduate(rs.getString("STATE_HIGHER_GRADUATE"));
		
		model.setDistrictId(rs.getLong("DISTRICT_ID"));
		model.setDistrict(rs.getString("DISTRICT"));
		model.setDistrictPresentId(rs.getLong("DISTRICT_PRESENT_ID"));
		model.setDistrictPresent(rs.getString("DISTRICT_PRESENT"));
		model.setDistrictHighId(rs.getLong("DISTRICT_HIGH_ID"));
		model.setDistrictHigh(rs.getString("DISTRICT_HIGH"));
		model.setDistrictHigherId(rs.getLong("DISTRICT_HIGHER_ID"));
		model.setDistrictHigher(rs.getString("DISTRICT_HIGHER"));
		model.setDistrictGraduateId(rs.getLong("DISTRICT_GRADUATE_ID"));
		model.setDistrictGraduate(rs.getString("DISTRICT_GRADUATE"));
		model.setDistrictHigherGraduateId(rs.getLong("DISTRICT_HIGHER_GRADUATE_ID"));
		model.setDistrictHigherGraduate(rs.getString("DISTRICT_HIGHER_GRADUATE"));
		
		model.setCityId(rs.getLong("CITY_ID"));
		model.setCity(rs.getString("CITY"));
		model.setCityPresentId(rs.getLong("CITY_PRESENT_ID"));
		model.setCityPresent(rs.getString("CITY_PRESENT"));
		model.setCityHighId(rs.getLong("CITY_HIGH_ID"));
		model.setCityHigh(rs.getString("CITY_HIGH"));
		model.setCityHigherId(rs.getLong("CITY_HIGHER_ID"));
		model.setCityHigher(rs.getString("CITY_HIGHER"));
		model.setCityGraduateId(rs.getLong("CITY_GRADUATE_ID"));
		model.setCityGraduate(rs.getString("CITY_GRADUATE"));
		model.setCityHigherGraduateId(rs.getLong("CITY_HIGHER_GRADUATE_ID"));
		model.setCityHigherGraduate(rs.getString("CITY_HIGHER_GRADUATE"));
		
		model.setAreaId(rs.getLong("AREA_ID"));
		model.setArea(rs.getString("AREA"));
		model.setAreaPresrentId(rs.getLong("AREA_PRESENT_ID"));
		model.setAreaPresrent(rs.getString("AREA_PRESENT"));
		model.setAreaHighId(rs.getLong("AREA_HIGH_ID"));
		model.setAreaHigh(rs.getString("AREA_HIGH"));
		model.setAreaHigherId(rs.getLong("AREA_HIGHER_ID"));
		model.setAreaHigher(rs.getString("AREA_HIGHER"));
		model.setAreaGraduateId(rs.getLong("AREA_GRADUATE_ID"));
		model.setAreaGraduate(rs.getString("AREA_GRADUATE"));
		model.setAreaHigherGraduateId(rs.getLong("AREA_HIGHER_GRADUATE_ID"));
		model.setAreaHigherGraduate(rs.getString("AREA_HIGHER_GRADUATE"));
		
		model.setPostOfficeId(rs.getLong("POST_OFFICE_ID"));
		model.setPostOffice(rs.getString("POST_OFFICE"));
		model.setPostOfficePresentId(rs.getLong("POST_OFFICE_PRESENT_ID"));
		model.setPostOfficePresent(rs.getString("POST_OFFICE_PRESENT"));
		model.setPostOfficeHighId(rs.getLong("POST_OFFICE_HIGH_ID"));
		model.setPostOfficeHigh(rs.getString("POST_OFFICE_HIGH"));
		model.setPostOfficeHigherId(rs.getLong("POST_OFFICE_HIGHER_ID"));
		model.setPostOfficeHigher(rs.getString("POST_OFFICE_HIGHER"));
		model.setPostOfficeGraduateId(rs.getLong("POST_OFFICE_GRADUATE_ID"));
		model.setPostOfficeGraduate(rs.getString("POST_OFFICE_GRADUATE"));
		model.setPostOfficeHigherGraduateId(rs.getLong("POST_OFFICE_HIGHER_GRADUATE_ID"));
		model.setPostOfficeHigherGraduate(rs.getString("POST_OFFICE_HIGHER_GRADUATE"));
		
		model.setPinCodeId(rs.getLong("PIN_CODE_ID"));
		model.setPinCode(rs.getLong("PIN_CODE"));
		model.setPersentPinCodeId(rs.getLong("PRESENT_PIN_CODE_ID"));
		model.setPersentPinCode(rs.getLong("PRESENT_PIN_CODE"));
		model.setHighPinCodeId(rs.getLong("HIGH_PIN_CODE_ID"));
		model.setHighPinCode(rs.getLong("HIGH_PIN_CODE"));
		model.setHigherPinCodeId(rs.getLong("HIGHER_PIN_CODE_ID"));
		model.setHigherPinCode(rs.getLong("HIGHER_PIN_CODE"));
		model.setGraduatePinCodeId(rs.getLong("GRADUATE_PIN_CODE_ID"));
		model.setGraduatePinCode(rs.getLong("GRADUATE_PIN_CODE"));
		model.setHigherGraduatePinCodeId(rs.getLong("HIGHER_GRADUATE_PIN_CODE_ID"));
		model.setHigherGraduatePinCode(rs.getLong("HIGHER_GRADUATE_PIN_CODE"));
		
		model.setSchoolName(rs.getString("SCHOOL_NAME"));
		model.setSchoolNameHigher(rs.getString("SCHOOL_NAME_HIGHER"));
		model.setSchoolNameGraduate(rs.getString("SCHOOL_NAME_GRADUATE"));
		model.setSchoolNameHigherGraduate(rs.getString("SCHOOL_NAME_HIGHER_GRADUATE"));
		model.setUniversityHigh(rs.getString("UNIVERSITY_HIGH"));
		model.setUniversityHigher(rs.getString("UNIVERSITY_HIGHER"));
		model.setUniversityGraduate(rs.getString("UNIVERSITY_GRADUATE"));
		model.setUniversityHigherGraduate(rs.getString("UNIVERSITY_HIGHER_GRADUATE"));
		model.setYearOfPassingHigh(rs.getInt("YEAR_OF_PASSING_HIGH"));
		model.setYearOfPassingHigher(rs.getInt("YEAR_OF_PASSING_HIGHER"));
		model.setYearOfPassingGraduate(rs.getInt("YEAR_OF_PASSING_GRADUATE"));
		model.setYearOfPassingHigherGraduate(rs.getInt("YEAR_OF_PASSING_HIGHER_GRADUATE"));
		model.setPercentage(rs.getFloat("PERCANTAGE"));
		model.setPercentageHigher(rs.getFloat("PERCANTAGE_HIGHER"));
		model.setPercentageGraduate(rs.getFloat("PERCANTAGE_GRADUATE"));
		model.setPercentageHigherGraduate(rs.getFloat("PERCANTAGE_HIGHER_GRADUATE"));
		model.setSubjectHigh(rs.getString("SUBJECT_HIGH"));
		model.setSubjectHigher(rs.getString("SUBJECT_HIGHER"));
		model.setSubjectGrauduate(rs.getString("SUBJECT_GRADUATE"));
		model.setSubjectHigherGraduate(rs.getString("SUBJECT_HIGHER_GRADUATE"));
		model.setGraduate(rs.getString("GRADUATE"));
		model.setHigherGraduation(rs.getString("HIGHER_GRADUATION"));
		
	
		model.setUserId(rs.getLong("USER_ID"));
		model.setPhoto(rs.getString("PHOTO"));

		return m;
	}

	/**
	 * Update uploaded photo
	 */
	public void updatePhoto() {

		String sql = "UPDATE ST_STAFF SET PHOTO = '" + photo
				+ "' WHERE ID = " + id;

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

	public void updateReferenceData(long id) throws ApplicationException,
			DuplicateRecordException {

		String collegeSql = "UPDATE ST_STAFF U SET COLLEGE_NAME = (SELECT COMPANY_NAME FROM ST_COLLEGE C WHERE C.ID = U.COLLEGE_ID)  WHERE ID = "
				+ id;

		String deptSql = "UPDATE ST_STAFF U SET DEPARTEMENT_NAME = (SELECT NAME FROM ST_DEPARTEMENT C WHERE C.ID = U.DEPARTEMENT_ID)  WHERE ID = "
				+ id;
		
		String countrySql = "UPDATE ST_STAFF U SET COUNTRY = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_ID),COUNTRY_PRESENT = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_PRESENT_ID),"
				+"COUNTRY_HIGH = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_HIGH_ID),COUNTRY_HIGHER = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_HIGHER_ID),"
				+"COUNTRY_GRADUATE = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_GRADUATE_ID),COUNTRY_HIGHER_GRADUATE = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_HIGHER_GRADUATE_ID) WHERE ID = "
				+ id;
		
		String stateSql = "UPDATE ST_STAFF U SET STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_ID),STATE_PRESENT = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_PRESENT_ID),"
				+"STATE_HIGH = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_HIGH_ID),STATE_HIGHER = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_HIGHER_ID),"
				+"STATE_GRADUATE = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_GRADUATE_ID),STATE_HIGHER_GRADUATE = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_HIGHER_GRADUATE_ID) WHERE ID = "
				+ id;
		
		String districtSql = "UPDATE ST_STAFF U SET DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_ID),DISTRICT_PRESENT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_PRESENT_ID),"
				+"DISTRICT_HIGH = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_HIGH_ID),DISTRICT_HIGHER = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_HIGHER_ID),"
				+"DISTRICT_GRADUATE = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_GRADUATE_ID),DISTRICT_HIGHER_GRADUATE = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_HIGHER_GRADUATE_ID) WHERE ID = "
				+ id;
		
		String citySql = "UPDATE ST_STAFF U SET CITY = (SELECT NAME FROM CITY C WHERE C.ID = U.CITY_ID),CITY_PRESENT = (SELECT NAME FROM CITY C WHERE C.ID = U.CITY_PRESENT_ID),"
				+"CITY_HIGH = (SELECT NAME FROM CITY C WHERE C.ID = U.CITY_HIGH_ID),CITY_HIGHER = (SELECT NAME FROM CITY C WHERE C.ID = U.CITY_HIGHER_ID),"
				+"CITY_GRADUATE = (SELECT NAME FROM CITY C WHERE C.ID = U.CITY_GRADUATE_ID),CITY_HIGHER_GRADUATE = (SELECT NAME FROM CITY C WHERE C.ID = U.CITY_HIGHER_GRADUATE_ID) WHERE ID = "
				+ id;
		
		String areaSql = "UPDATE ST_STAFF U SET AREA = (SELECT NAME FROM AREA C WHERE C.ID = U.AREA_ID),AREA_PRESENT = (SELECT NAME FROM AREA C WHERE C.ID = U.AREA_PRESENT_ID),"
				+"AREA_HIGH = (SELECT NAME FROM AREA C WHERE C.ID = U.AREA_HIGH_ID),AREA_HIGHER = (SELECT NAME FROM AREA C WHERE C.ID = U.AREA_HIGHER_ID),"
				+"AREA_GRADUATE = (SELECT NAME FROM AREA C WHERE C.ID = U.AREA_GRADUATE_ID),AREA_HIGHER_GRADUATE = (SELECT NAME FROM AREA C WHERE C.ID = U.AREA_HIGHER_GRADUATE_ID) WHERE ID = "
				+ id;
		
		String postOfiiceSql = "UPDATE ST_STAFF U SET POST_OFFICE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.POST_OFFICE_ID),POST_OFFICE_PRESENT = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.POST_OFFICE_PRESENT_ID),"
				+"POST_OFFICE_HIGH = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.POST_OFFICE_HIGH_ID),POST_OFFICE_HIGHER = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.POST_OFFICE_HIGHER_ID),"
				+"POST_OFFICE_GRADUATE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.POST_OFFICE_GRADUATE_ID),POST_OFFICE_HIGHER_GRADUATE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.POST_OFFICE_HIGHER_GRADUATE_ID) WHERE ID = "
				+ id;

		String pincodeSql = "UPDATE ST_STAFF U SET PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.PIN_CODE_ID),PRESENT_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.PRESENT_PIN_CODE_ID),"
				+"HIGH_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.HIGH_PIN_CODE_ID),HIGHER_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.HIGHER_PIN_CODE_ID),"
				+"GRADUATE_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.GRADUATE_PIN_CODE_ID),HIGHER_GRADUATE_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.HIGHER_GRADUATE_PIN_CODE_ID) WHERE ID = "
				+ id;
		log.debug("Model update Started");

		Connection conn = null;

		try {
			conn = JDBCDataSource.getConnection();
			conn.setAutoCommit(false); // Begin transaction
			Statement stmt = conn.createStatement();
			stmt.executeUpdate(collegeSql);
			stmt.executeUpdate(deptSql);
			stmt.executeUpdate(countrySql);
			stmt.executeUpdate(stateSql);
			stmt.executeUpdate(districtSql);
			stmt.executeUpdate(citySql);
			stmt.executeUpdate(areaSql);
			stmt.executeUpdate(postOfiiceSql);
			stmt.executeUpdate(pincodeSql);
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
	 * Sets the palm staus, if it is stored in the system
	 * 
	 * @param status
	 *            : Y/N Yes or No
	 * @param palmType
	 *            : L/R Left or Right
	 * @throws ApplicationException
	 */

	public void updatePalmStatus(String status, String palmType) {

		String sql = "";
		if ("L".equals(palmType)) {
			sql = "UPDATE ST_STAFF  SET LEFT_PALM = '" + status
					+ "' WHERE ID = " + id;
		} else if ("R".equals(palmType)) {
			sql = "UPDATE ST_STAFF  SET RIGHT_PALM = '" + status
					+ "' WHERE ID = " + id;
		}
		log.info("SQL : " + sql);

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
		return firstName + " " + lastName;
	}

	@Override
	public String getTableName() {
		return "ST_STAFF";
	}

}