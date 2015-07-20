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
public class StudentModel extends BaseModel {

	private static Logger log = Logger.getLogger(StudentModel.class);

	private String code;
	private String uidCode;
	private String didCode;
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
	private long trainingId;
	private String trainingName;
	private long userId;
	private String photo;
	private String rollNo;
	private Date doa;
	private String placeOfBirth;
	private String uploadPhoto;
	
private String middleName;
private String emailId;
private String telephoneNo;
private String presentAddress;
private String presentCountry;
private long  presentCountryId;
private String presentState;
private long presentStateId; 
private String presentDistrict;
private long presentDistrictId;
private String presentCity;
private long presentCityId;
private String presentPostOffice;
private long presentPostOfficeId;
private long presentPinCode = 0;
private long presentPinCodeId;

private String presentContactNo1;
private String presentContactNo2;
private String permanentAddress;
private String permanentCountry;
private long permanentCountryId;
private String permanentState;
private long permanentStateId;
private String permanentDistrict;
private long permanentDistrictId;
private String permanentCity;
private long permanentCityId;
private String permanentPostOffice;
private long permanentPostOfficeId;
private long permanentPinCode;
private long permanentPinCodeId;
private String permanentContactNo1;
private String permanentContactNo2;
private String area;

private int height;
private int heightInche;
private int heightCm;

private int chest;
private int chestCm;

private int weight;
private int weightKg;
private String bloodGroup;
private String hindiRead;
private String hindiWrite;
private String hindiSpeak;
private String englisgRead;
private String englishWrite;
private String englishSpeak;
private String otherLanguage;
private long otherLanguageId;
private String otherLanguageRead;
private String otherLanguageWrite;
private String otherLanguageSpeak;
private String presentEmployent;
private String previousEmployent;
private String oraganizationName1;
private String oraganizationName2;
private String organizationDesignation1;
private String organizationDesignation2;
private double totalExperience;

private String underMetricBoard;
private String underMetricInstitute;
private String underMetricCountry;
private long underMetricCountryId;

private String underMetricState;
private long underMetricStateId;
private String underMetricDistrict;
private long underMetricDistrictId;
private String underMetricCity;
private long underMetricCityId;
private String underMetricPostOffice;
private long underMetricPostOfficeId;
private long underMetricPinCode;
private long underMetricPinCodeId;
private double underMetricPercentage;
private String underMetricSubject;

private String highSchoolBoard;
private String highSchoolInstitute;
private String highSchoolCountry;
private long highSchoolCountryId;
private String highSchoolState;
private long highSchoolStateId;
private String highSchoolDistrict;
private long highSchoolDistrictId;
private String highSchoolCity;
private long highSchoolCityId;
private String highScoolPostOffice;
private long highScoolPostOfficeId;
private long highSchoolPinCode;
private long highSchoolPinCodeId;

private double highSchoolPercentage;
private String highSchoolSubject;

private String higherSecondaryBoard;
private String higherSecondaryInstitute;
private String higherSeconndaryCountry;
private long higherSeconndaryCountryId;
private String higherSecondaryState;
private long higherSecondaryStateId;
private String higherSecondaryDistrict;
private long higherSecondaryDistrictId;

private String higherSecondaryCity;
private long higherSecondaryCityId;
private String higherSecondaryPostOffice;
private long higherSecondaryPostOfficeId;
private long higherSecondaryPinCode;
private long higherSecondaryPinCodeId;
private double higherSecondaryPercentage;
private String higherSecondarySubject;

private String graduationUniversity;
private String graduationInstitute;
private String graduationCountry;
private long graduationCountryId;
private String graduationState;
private long graduationStateId;
private String graduationDistrict;
private long graduationDistrictId;
private String graduationCity;
private long graduationCityId;
private String graduationPostOffice;
private long graduationPostOfficeId;
private long graduationPinCode;
private long graduationPinCodeId;
private double graduationPercentage;
private String graduationDegree;
private String graduationSubject;

private String otherBoard;
private String otherInstitute;
private String otherCountry;
private long otherCountryId;
private String otherState;
private long otherStateId;
private String otherDistrict;
private long otherDistrictId;
private String otherCity;
private long otherCityId;
private String otherPostOffice;
private long otherPostOfficeId;
private long otherPinCode;
private long otherPinCodeId;
private double otherPercentage;
private String otherDegree;
private String otherSubject;

private String uidCardNo;
private String panCardNo;
private String voterCardNo;
private String voterIssuingAuthority;
private String rationCardNo;
private String rationIssuingAuthority;
private String drivingLicenseNo;
private String drivingIssuingAuthority;
private Date drivingValidation;
private String passPortNo;
private String passPortIssuingAuthority;
private Date passPortValidTill;
private String responsiblePersonName1;
private String responsiblePerconAddress1;
private long responsiblePersonPinCode1;
private long responsiblePersonPinCodeId1;
private String responsiblePersonName2;
private String responsiblePerconAddress2;
private long responsiblePersonPinCode2;
private long responsiblePersonPinCodeId2;

	
	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
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

	

	public String getPresentAddress() {
		return presentAddress;
	}

	public void setPresentAddress(String presentAddress) {
		this.presentAddress = presentAddress;
	}

	public String getPermanentAddress() {
		return permanentAddress;
	}

	public void setPermanentAddress(String permanentAddress) {
		this.permanentAddress = permanentAddress;
	}

	public long getCollegeId() {
		return collegeId;
	}

	public void setCollegeId(long collegeId) {
		this.collegeId = collegeId;
	}

	public String getUidCode() {
		return uidCode;
	}

	public void setUidCode(String uidCode) {
		this.uidCode = uidCode;
	}

	public String getDidCode() {
		return didCode;
	}

	public void setDidCode(String didCode) {
		this.didCode = didCode;
	}

	public long getTrainingId() {
		return trainingId;
	}

	public void setTrainingId(long trainingId) {
		this.trainingId = trainingId;
	}

	public String getTrainingName() {
		return trainingName;
	}

	public void setTrainingName(String trainingName) {
		this.trainingName = trainingName;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}
	
	public String getMiddleName() {
		return middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getRollNo() {
		return rollNo;
	}

	public void setRollNo(String rollNo) {
		this.rollNo = rollNo;
	}

	public Date getDoa() {
		return doa;
	}

	public void setDoa(Date doa) {
		this.doa = doa;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getPlaceOfBirth() {
		return placeOfBirth;
	}

	public void setPlaceOfBirth(String placeOfBirth) {
		this.placeOfBirth = placeOfBirth;
	}

	public String getUploadPhoto() {
		return uploadPhoto;
	}

	public void setUploadPhoto(String uploadPhoto) {
		this.uploadPhoto = uploadPhoto;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	
	public String getTelephoneNo() {
		return telephoneNo;
	}

	public void setTelephoneNo(String telephoneNo) {
		this.telephoneNo = telephoneNo;
	}

	

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	
	public int getChest() {
		return chest;
	}

	public void setChest(int chest) {
		this.chest = chest;
	}

	public String getHindiRead() {
		return hindiRead;
	}

	public void setHindiRead(String hindiRead) {
		this.hindiRead = hindiRead;
	}

	public String getHindiWrite() {
		return hindiWrite;
	}

	public void setHindiWrite(String hindiWrite) {
		this.hindiWrite = hindiWrite;
	}

	public String getHindiSpeak() {
		return hindiSpeak;
	}

	public void setHindiSpeak(String hindiSpeak) {
		this.hindiSpeak = hindiSpeak;
	}

	public String getEnglisgRead() {
		return englisgRead;
	}

	public void setEnglisgRead(String englisgRead) {
		this.englisgRead = englisgRead;
	}

	public String getEnglishWrite() {
		return englishWrite;
	}

	public void setEnglishWrite(String englishWrite) {
		this.englishWrite = englishWrite;
	}

	public String getEnglishSpeak() {
		return englishSpeak;
	}

	public void setEnglishSpeak(String englishSpeak) {
		this.englishSpeak = englishSpeak;
	}

	public String getOtherLanguage() {
		return otherLanguage;
	}

	public void setOtherLanguage(String otherLanguage) {
		this.otherLanguage = otherLanguage;
	}

	public String getOtherLanguageRead() {
		return otherLanguageRead;
	}

	public void setOtherLanguageRead(String otherLanguageRead) {
		this.otherLanguageRead = otherLanguageRead;
	}

	public String getOtherLanguageWrite() {
		return otherLanguageWrite;
	}

	public void setOtherLanguageWrite(String otherLanguageWrite) {
		this.otherLanguageWrite = otherLanguageWrite;
	}

	public String getOtherLanguageSpeak() {
		return otherLanguageSpeak;
	}

	public void setOtherLanguageSpeak(String otherLanguageSpeak) {
		this.otherLanguageSpeak = otherLanguageSpeak;
	}

	public String getPresentEmployent() {
		return presentEmployent;
	}

	public void setPresentEmployent(String presentEmployent) {
		this.presentEmployent = presentEmployent;
	}

	public String getPreviousEmployent() {
		return previousEmployent;
	}

	public void setPreviousEmployent(String previousEmployent) {
		this.previousEmployent = previousEmployent;
	}

	public String getOraganizationName1() {
		return oraganizationName1;
	}

	public void setOraganizationName1(String oraganizationName1) {
		this.oraganizationName1 = oraganizationName1;
	}

	public String getOraganizationName2() {
		return oraganizationName2;
	}

	public void setOraganizationName2(String oraganizationName2) {
		this.oraganizationName2 = oraganizationName2;
	}

	public String getOrganizationDesignation1() {
		return organizationDesignation1;
	}

	public void setOrganizationDesignation1(String organizationDesignation1) {
		this.organizationDesignation1 = organizationDesignation1;
	}

	public String getOrganizationDesignation2() {
		return organizationDesignation2;
	}

	public void setOrganizationDesignation2(String organizationDesignation2) {
		this.organizationDesignation2 = organizationDesignation2;
	}

	public double getTotalExperience() {
		return totalExperience;
	}

	public void setTotalExperience(double totalExperience) {
		this.totalExperience = totalExperience;
	}

	public String getUnderMetricBoard() {
		return underMetricBoard;
	}

	public void setUnderMetricBoard(String underMetricBoard) {
		this.underMetricBoard = underMetricBoard;
	}

	public String getUnderMetricInstitute() {
		return underMetricInstitute;
	}

	public void setUnderMetricInstitute(String underMetricInstitute) {
		this.underMetricInstitute = underMetricInstitute;
	}

	public String getUnderMetricCountry() {
		return underMetricCountry;
	}

	public void setUnderMetricCountry(String underMetricCountry) {
		this.underMetricCountry = underMetricCountry;
	}

	public String getUnderMetricState() {
		return underMetricState;
	}

	public void setUnderMetricState(String underMetricState) {
		this.underMetricState = underMetricState;
	}

	public String getUnderMetricDistrict() {
		return underMetricDistrict;
	}

	public void setUnderMetricDistrict(String underMetricDistrict) {
		this.underMetricDistrict = underMetricDistrict;
	}

	public String getUnderMetricCity() {
		return underMetricCity;
	}

	public void setUnderMetricCity(String underMetricCity) {
		this.underMetricCity = underMetricCity;
	}

	public String getUnderMetricPostOffice() {
		return underMetricPostOffice;
	}

	public void setUnderMetricPostOffice(String underMetricPostOffice) {
		this.underMetricPostOffice = underMetricPostOffice;
	}

	public long getUnderMetricPinCode() {
		return underMetricPinCode;
	}

	public void setUnderMetricPinCode(long underMetricPinCode) {
		this.underMetricPinCode = underMetricPinCode;
	}

	public double getUnderMetricPercentage() {
		return underMetricPercentage;
	}

	public void setUnderMetricPercentage(double underMetricPercentage) {
		this.underMetricPercentage = underMetricPercentage;
	}

	public String getUnderMetricSubject() {
		return underMetricSubject;
	}

	public void setUnderMetricSubject(String underMetricSubject) {
		this.underMetricSubject = underMetricSubject;
	}

	public String getHighSchoolBoard() {
		return highSchoolBoard;
	}

	public void setHighSchoolBoard(String highSchoolBoard) {
		this.highSchoolBoard = highSchoolBoard;
	}

	public String getHighSchoolInstitute() {
		return highSchoolInstitute;
	}

	public void setHighSchoolInstitute(String highSchoolInstitute) {
		this.highSchoolInstitute = highSchoolInstitute;
	}

	public String getHighSchoolCountry() {
		return highSchoolCountry;
	}

	public void setHighSchoolCountry(String highSchoolCountry) {
		this.highSchoolCountry = highSchoolCountry;
	}

	public String getHighSchoolState() {
		return highSchoolState;
	}

	public void setHighSchoolState(String highSchoolState) {
		this.highSchoolState = highSchoolState;
	}

	public String getHighSchoolDistrict() {
		return highSchoolDistrict;
	}

	public void setHighSchoolDistrict(String highSchoolDistrict) {
		this.highSchoolDistrict = highSchoolDistrict;
	}

	public String getHighSchoolCity() {
		return highSchoolCity;
	}

	public void setHighSchoolCity(String highSchoolCity) {
		this.highSchoolCity = highSchoolCity;
	}

	public String getHighScoolPostOffice() {
		return highScoolPostOffice;
	}

	public void setHighScoolPostOffice(String highScoolPostOffice) {
		this.highScoolPostOffice = highScoolPostOffice;
	}

	public long getHighSchoolPinCode() {
		return highSchoolPinCode;
	}

	public void setHighSchoolPinCode(long highSchoolPinCode) {
		this.highSchoolPinCode = highSchoolPinCode;
	}

	public double getHighSchoolPercentage() {
		return highSchoolPercentage;
	}

	public void setHighSchoolPercentage(double highSchoolPercentage) {
		this.highSchoolPercentage = highSchoolPercentage;
	}

	public String getHighSchoolSubject() {
		return highSchoolSubject;
	}

	public void setHighSchoolSubject(String highSchoolSubject) {
		this.highSchoolSubject = highSchoolSubject;
	}

	public String getHigherSecondaryBoard() {
		return higherSecondaryBoard;
	}

	public void setHigherSecondaryBoard(String higherSecondaryBoard) {
		this.higherSecondaryBoard = higherSecondaryBoard;
	}

	public String getHigherSecondaryInstitute() {
		return higherSecondaryInstitute;
	}

	public void setHigherSecondaryInstitute(String higherSecondaryInstitute) {
		this.higherSecondaryInstitute = higherSecondaryInstitute;
	}

	public String getHigherSeconndaryCountry() {
		return higherSeconndaryCountry;
	}

	public void setHigherSeconndaryCountry(String higherSeconndaryCountry) {
		this.higherSeconndaryCountry = higherSeconndaryCountry;
	}

	public String getHigherSecondaryState() {
		return higherSecondaryState;
	}

	public void setHigherSecondaryState(String higherSecondaryState) {
		this.higherSecondaryState = higherSecondaryState;
	}

	public String getHigherSecondaryDistrict() {
		return higherSecondaryDistrict;
	}

	public void setHigherSecondaryDistrict(String higherSecondaryDistrict) {
		this.higherSecondaryDistrict = higherSecondaryDistrict;
	}

	public String getHigherSecondaryCity() {
		return higherSecondaryCity;
	}

	public void setHigherSecondaryCity(String higherSecondaryCity) {
		this.higherSecondaryCity = higherSecondaryCity;
	}

	public String getHigherSecondaryPostOffice() {
		return higherSecondaryPostOffice;
	}

	public void setHigherSecondaryPostOffice(String higherSecondaryPostOffice) {
		this.higherSecondaryPostOffice = higherSecondaryPostOffice;
	}

	public long getHigherSecondaryPinCode() {
		return higherSecondaryPinCode;
	}

	public void setHigherSecondaryPinCode(long higherSecondaryPinCode) {
		this.higherSecondaryPinCode = higherSecondaryPinCode;
	}

	public double getHigherSecondaryPercentage() {
		return higherSecondaryPercentage;
	}

	public void setHigherSecondaryPercentage(double higherSecondaryPercentage) {
		this.higherSecondaryPercentage = higherSecondaryPercentage;
	}

	public String getHigherSecondarySubject() {
		return higherSecondarySubject;
	}

	public void setHigherSecondarySubject(String higherSecondarySubject) {
		this.higherSecondarySubject = higherSecondarySubject;
	}

	public String getGraduationUniversity() {
		return graduationUniversity;
	}

	public void setGraduationUniversity(String graduationUniversity) {
		this.graduationUniversity = graduationUniversity;
	}

	public String getGraduationInstitute() {
		return graduationInstitute;
	}

	public void setGraduationInstitute(String graduationInstitute) {
		this.graduationInstitute = graduationInstitute;
	}

	public String getGraduationCountry() {
		return graduationCountry;
	}

	public void setGraduationCountry(String graduationCountry) {
		this.graduationCountry = graduationCountry;
	}

	public String getGraduationState() {
		return graduationState;
	}

	public void setGraduationState(String graduationState) {
		this.graduationState = graduationState;
	}

	public String getGraduationDistrict() {
		return graduationDistrict;
	}

	public void setGraduationDistrict(String graduationDistrict) {
		this.graduationDistrict = graduationDistrict;
	}

	public String getGraduationCity() {
		return graduationCity;
	}

	public void setGraduationCity(String graduationCity) {
		this.graduationCity = graduationCity;
	}

	public String getGraduationPostOffice() {
		return graduationPostOffice;
	}

	public void setGraduationPostOffice(String graduationPostOffice) {
		this.graduationPostOffice = graduationPostOffice;
	}

	public long getGraduationPinCode() {
		return graduationPinCode;
	}

	public void setGraduationPinCode(long graduationPinCode) {
		this.graduationPinCode = graduationPinCode;
	}

	public double getGraduationPercentage() {
		return graduationPercentage;
	}

	public void setGraduationPercentage(double graduationPercentage) {
		this.graduationPercentage = graduationPercentage;
	}

	public String getGraduationDegree() {
		return graduationDegree;
	}

	public void setGraduationDegree(String graduationDegree) {
		this.graduationDegree = graduationDegree;
	}

	public String getGraduationSubject() {
		return graduationSubject;
	}

	public void setGraduationSubject(String graduationSubject) {
		this.graduationSubject = graduationSubject;
	}

	public String getOtherBoard() {
		return otherBoard;
	}

	public void setOtherBoard(String otherBoard) {
		this.otherBoard = otherBoard;
	}

	public String getOtherInstitute() {
		return otherInstitute;
	}

	public void setOtherInstitute(String otherInstitute) {
		this.otherInstitute = otherInstitute;
	}

	public String getOtherCountry() {
		return otherCountry;
	}

	public void setOtherCountry(String otherCountry) {
		this.otherCountry = otherCountry;
	}

	public String getOtherState() {
		return otherState;
	}

	public void setOtherState(String otherState) {
		this.otherState = otherState;
	}

	public String getOtherDistrict() {
		return otherDistrict;
	}

	public void setOtherDistrict(String otherDistrict) {
		this.otherDistrict = otherDistrict;
	}

	public String getOtherCity() {
		return otherCity;
	}

	public void setOtherCity(String otherCity) {
		this.otherCity = otherCity;
	}

	public String getOtherPostyOffice() {
		return otherPostOffice;
	}

	public void setOtherPostOffice(String otherPostOffice) {
		this.otherPostOffice = otherPostOffice;
	}

	public long getOtherPinCode() {
		return otherPinCode;
	}

	public void setOtherPinCode(long otherPinCode) {
		this.otherPinCode = otherPinCode;
	}

	public double getOtherPercentage() {
		return otherPercentage;
	}

	public void setOtherPercentage(double otherPercentage) {
		this.otherPercentage = otherPercentage;
	}

	public String getOtherDegree() {
		return otherDegree;
	}

	public void setOtherDegree(String otherDegree) {
		this.otherDegree = otherDegree;
	}

	public String getOtherSubject() {
		return otherSubject;
	}

	public void setOtherSubject(String otherSubject) {
		this.otherSubject = otherSubject;
	}

	public String getUidCardNo() {
		return uidCardNo;
	}

	public void setUidCardNo(String uidCardNo) {
		this.uidCardNo = uidCardNo;
	}

	public String getPanCardNo() {
		return panCardNo;
	}

	public void setPanCardNo(String panCardNo) {
		this.panCardNo = panCardNo;
	}

	public String getVoterCardNo() {
		return voterCardNo;
	}

	public void setVoterCardNo(String voterCardNo) {
		this.voterCardNo = voterCardNo;
	}

	public String getVoterIssuingAuthority() {
		return voterIssuingAuthority;
	}

	public void setVoterIssuingAuthority(String voterIssuingAuthority) {
		this.voterIssuingAuthority = voterIssuingAuthority;
	}

	public String getRationCardNo() {
		return rationCardNo;
	}

	public void setRationCardNo(String rationCardNo) {
		this.rationCardNo = rationCardNo;
	}

	public String getRationIssuingAuthority() {
		return rationIssuingAuthority;
	}

	public void setRationIssuingAuthority(String rationIssuingAuthority) {
		this.rationIssuingAuthority = rationIssuingAuthority;
	}

	public String getDrivingLicenseNo() {
		return drivingLicenseNo;
	}

	public void setDrivingLicenseNo(String drivingLicenseNo) {
		this.drivingLicenseNo = drivingLicenseNo;
	}

	public String getDrivingIssuingAuthority() {
		return drivingIssuingAuthority;
	}

	public void setDrivingIssuingAuthority(String drivingIssuingAuthority) {
		this.drivingIssuingAuthority = drivingIssuingAuthority;
	}

	public Date getDrivingValidation() {
		return drivingValidation;
	}

	public void setDrivingValidation(Date drivingValidation) {
		this.drivingValidation = drivingValidation;
	}

	public String getPassPortNo() {
		return passPortNo;
	}

	public void setPassPortNo(String passPortNo) {
		this.passPortNo = passPortNo;
	}

	public String getPassPortIssuingAuthority() {
		return passPortIssuingAuthority;
	}

	public void setPassPortIssuingAuthority(String passPortIssuingAuthority) {
		this.passPortIssuingAuthority = passPortIssuingAuthority;
	}

	public Date getPassPortValidTill() {
		return passPortValidTill;
	}

	public void setPassPortValidTill(Date passPortValidTill) {
		this.passPortValidTill = passPortValidTill;
	}

	public String getResponsiblePersonName1() {
		return responsiblePersonName1;
	}

	public void setResponsiblePersonName1(String responsiblePersonName1) {
		this.responsiblePersonName1 = responsiblePersonName1;
	}

	public String getResponsiblePerconAddress1() {
		return responsiblePerconAddress1;
	}

	public void setResponsiblePerconAddress1(String responsiblePerconAddress1) {
		this.responsiblePerconAddress1 = responsiblePerconAddress1;
	}

	public long getResponsiblePersonPinCode1() {
		return responsiblePersonPinCode1;
	}

	public void setResponsiblePersonPinCode1(long responsiblePersonPinCode1) {
		this.responsiblePersonPinCode1 = responsiblePersonPinCode1;
	}

	public String getResponsiblePersonName2() {
		return responsiblePersonName2;
	}

	public void setResponsiblePersonName2(String responsiblePersonName2) {
		this.responsiblePersonName2 = responsiblePersonName2;
	}

	public String getResponsiblePerconAddress2() {
		return responsiblePerconAddress2;
	}

	public void setResponsiblePerconAddress2(String responsiblePerconAddress2) {
		this.responsiblePerconAddress2 = responsiblePerconAddress2;
	}

	public long getResponsiblePersonPinCode2() {
		return responsiblePersonPinCode2;
	}

	public void setResponsiblePersonPinCode2(long responsiblePersonPinCode2) {
		this.responsiblePersonPinCode2 = responsiblePersonPinCode2;
	}

	
	public String getPresentCountry() {
		return presentCountry;
	}

	public void setPresentCountry(String presentCountry) {
		this.presentCountry = presentCountry;
	}

	public String getPresentState() {
		return presentState;
	}

	public void setPresentState(String presentState) {
		this.presentState = presentState;
	}

	public String getPresentDistrict() {
		return presentDistrict;
	}

	public void setPresentDistrict(String presentDistrict) {
		this.presentDistrict = presentDistrict;
	}

	public String getPresentCity() {
		return presentCity;
	}

	public void setPresentCity(String presentCity) {
		this.presentCity = presentCity;
	}

	public String getPresentPostOffice() {
		return presentPostOffice;
	}

	public void setPresentPostOffice(String presentPostOffice) {
		this.presentPostOffice = presentPostOffice;
	}

	public long getPresentPinCode() {
		return presentPinCode;
	}

	public void setPresentPinCode(long presentPinCode) {
		this.presentPinCode = presentPinCode;
	}

	public String getPresentContactNo1() {
		return presentContactNo1;
	}

	public void setPresentContactNo1(String presentContactNo1) {
		this.presentContactNo1 = presentContactNo1;
	}

	public String getPresentContactNo2() {
		return presentContactNo2;
	}

	public void setPresentContactNo2(String presentContactNo2) {
		this.presentContactNo2 = presentContactNo2;
	}

	public String getPermanentCountry() {
		return permanentCountry;
	}

	public void setPermanentCountry(String permanentCountry) {
		this.permanentCountry = permanentCountry;
	}

	public String getPermanentState() {
		return permanentState;
	}

	public void setPermanentState(String permanentState) {
		this.permanentState = permanentState;
	}

	public String getPermanentDistrict() {
		return permanentDistrict;
	}

	public void setPermanentDistrict(String permanentDistrict) {
		this.permanentDistrict = permanentDistrict;
	}

	public String getPermanentCity() {
		return permanentCity;
	}

	public void setPermanentCity(String permanentCity) {
		this.permanentCity = permanentCity;
	}

	public String getPermanentPostOffice() {
		return permanentPostOffice;
	}

	public void setPermanentPostOffice(String permanentPostOffice) {
		this.permanentPostOffice = permanentPostOffice;
	}

	public long getPermanentPinCode() {
		return permanentPinCode;
	}

	public void setPermanentPinCode(long permanentPinCode) {
		this.permanentPinCode = permanentPinCode;
	}

	public String getPermanentContactNo1() {
		return permanentContactNo1;
	}

	public void setPermanentContactNo1(String permanentContactNo1) {
		this.permanentContactNo1 = permanentContactNo1;
	}

	public String getPermanentContactNo2() {
		return permanentContactNo2;
	}

	public void setPermanentContactNo2(String permanentContactNo2) {
		this.permanentContactNo2 = permanentContactNo2;
	}

	
	public long getPresentCountryId() {
		return presentCountryId;
	}

	public void setPresentCountryId(long presentCountryId) {
		this.presentCountryId = presentCountryId;
	}

	public long getPresentStateId() {
		return presentStateId;
	}

	public void setPresentStateId(long presentStateId) {
		this.presentStateId = presentStateId;
	}

	public long getPresentDistrictId() {
		return presentDistrictId;
	}

	public void setPresentDistrictId(long presentDistrictId) {
		this.presentDistrictId = presentDistrictId;
	}

	public long getPresentCityId() {
		return presentCityId;
	}

	public void setPresentCityId(long presentCityId) {
		this.presentCityId = presentCityId;
	}

	public long getPresentPostOfficeId() {
		return presentPostOfficeId;
	}

	public void setPresentPostOfficeId(long presentPostOfficeId) {
		this.presentPostOfficeId = presentPostOfficeId;
	}

	public long getPresentPinCodeId() {
		return presentPinCodeId;
	}

	public void setPresentPinCodeId(long presentPinCodeId) {
		this.presentPinCodeId = presentPinCodeId;
	}

	public long getPermanentCountryId() {
		return permanentCountryId;
	}

	public void setPermanentCountryId(long permanentCountryId) {
		this.permanentCountryId = permanentCountryId;
	}

	public long getPermanentStateId() {
		return permanentStateId;
	}

	public void setPermanentStateId(long permanentStateId) {
		this.permanentStateId = permanentStateId;
	}

	public long getPermanentDistrictId() {
		return permanentDistrictId;
	}

	public void setPermanentDistrictId(long permanentDistrictId) {
		this.permanentDistrictId = permanentDistrictId;
	}

	public long getPermanentCityId() {
		return permanentCityId;
	}

	public void setPermanentCityId(long permanentCityId) {
		this.permanentCityId = permanentCityId;
	}

	public long getPermanentPostOfficeId() {
		return permanentPostOfficeId;
	}

	public void setPermanentPostOfficeId(long permanentPostOfficeId) {
		this.permanentPostOfficeId = permanentPostOfficeId;
	}

	public long getPermanentPinCodeId() {
		return permanentPinCodeId;
	}

	public void setPermanentPinCodeId(long permanentPinCodeId) {
		this.permanentPinCodeId = permanentPinCodeId;
	}

	public long getUnderMetricCountryId() {
		return underMetricCountryId;
	}

	public void setUnderMetricCountryId(long underMetricCountryId) {
		this.underMetricCountryId = underMetricCountryId;
	}

	public long getUnderMetricStateId() {
		return underMetricStateId;
	}

	public void setUnderMetricStateId(long underMetricStateId) {
		this.underMetricStateId = underMetricStateId;
	}

	public long getUnderMetricDistrictId() {
		return underMetricDistrictId;
	}

	public void setUnderMetricDistrictId(long underMetricDistrictId) {
		this.underMetricDistrictId = underMetricDistrictId;
	}

	public long getUnderMetricCityId() {
		return underMetricCityId;
	}

	public void setUnderMetricCityId(long underMetricCityId) {
		this.underMetricCityId = underMetricCityId;
	}

	public long getUnderMetricPostOfficeId() {
		return underMetricPostOfficeId;
	}

	public void setUnderMetricPostOfficeId(long underMetricPostOfficeId) {
		this.underMetricPostOfficeId = underMetricPostOfficeId;
	}

	public long getUnderMetricPinCodeId() {
		return underMetricPinCodeId;
	}

	public void setUnderMetricPinCodeId(long underMetricPinCodeId) {
		this.underMetricPinCodeId = underMetricPinCodeId;
	}

	public long getHighSchoolCountryId() {
		return highSchoolCountryId;
	}

	public void setHighSchoolCountryId(long highSchoolCountryId) {
		this.highSchoolCountryId = highSchoolCountryId;
	}

	public long getHighSchoolStateId() {
		return highSchoolStateId;
	}

	public void setHighSchoolStateId(long highSchoolStateId) {
		this.highSchoolStateId = highSchoolStateId;
	}

	public long getHighSchoolDistrictId() {
		return highSchoolDistrictId;
	}

	public void setHighSchoolDistrictId(long highSchoolDistrictId) {
		this.highSchoolDistrictId = highSchoolDistrictId;
	}

	public long getHighSchoolCityId() {
		return highSchoolCityId;
	}

	public void setHighSchoolCityId(long highSchoolCityId) {
		this.highSchoolCityId = highSchoolCityId;
	}

	public long getHighScoolPostOfficeId() {
		return highScoolPostOfficeId;
	}

	public void setHighScoolPostOfficeId(long highScoolPostOfficeId) {
		this.highScoolPostOfficeId = highScoolPostOfficeId;
	}

	public long getHighSchoolPinCodeId() {
		return highSchoolPinCodeId;
	}

	public void setHighSchoolPinCodeId(long highSchoolPinCodeId) {
		this.highSchoolPinCodeId = highSchoolPinCodeId;
	}

	public long getHigherSeconndaryCountryId() {
		return higherSeconndaryCountryId;
	}

	public void setHigherSeconndaryCountryId(long higherSeconndaryCountryId) {
		this.higherSeconndaryCountryId = higherSeconndaryCountryId;
	}

	public long getHigherSecondaryStateId() {
		return higherSecondaryStateId;
	}

	public void setHigherSecondaryStateId(long higherSecondaryStateId) {
		this.higherSecondaryStateId = higherSecondaryStateId;
	}

	public long getHigherSecondaryDistrictId() {
		return higherSecondaryDistrictId;
	}

	public void setHigherSecondaryDistrictId(long higherSecondaryDistrictId) {
		this.higherSecondaryDistrictId = higherSecondaryDistrictId;
	}

	public long getHigherSecondaryCityId() {
		return higherSecondaryCityId;
	}

	public void setHigherSecondaryCityId(long higherSecondaryCityId) {
		this.higherSecondaryCityId = higherSecondaryCityId;
	}

	public long getHigherSecondaryPostOfficeId() {
		return higherSecondaryPostOfficeId;
	}

	public void setHigherSecondaryPostOfficeId(long higherSecondaryPostOfficeId) {
		this.higherSecondaryPostOfficeId = higherSecondaryPostOfficeId;
	}

	public long getHigherSecondaryPinCodeId() {
		return higherSecondaryPinCodeId;
	}

	public void setHigherSecondaryPinCodeId(long higherSecondaryPinCodeId) {
		this.higherSecondaryPinCodeId = higherSecondaryPinCodeId;
	}

	public long getGraduationCountryId() {
		return graduationCountryId;
	}

	public void setGraduationCountryId(long graduationCountryId) {
		this.graduationCountryId = graduationCountryId;
	}

	public long getGraduationStateId() {
		return graduationStateId;
	}

	public void setGraduationStateId(long graduationStateId) {
		this.graduationStateId = graduationStateId;
	}

	public long getGraduationDistrictId() {
		return graduationDistrictId;
	}

	public void setGraduationDistrictId(long graduationDistrictId) {
		this.graduationDistrictId = graduationDistrictId;
	}

	public long getGraduationCityId() {
		return graduationCityId;
	}

	public void setGraduationCityId(long graduationCityId) {
		this.graduationCityId = graduationCityId;
	}

	public long getGraduationPostOfficeId() {
		return graduationPostOfficeId;
	}

	public void setGraduationPostOfficeId(long graduationPostOfficeId) {
		this.graduationPostOfficeId = graduationPostOfficeId;
	}

	public long getGraduationPinCodeId() {
		return graduationPinCodeId;
	}

	public void setGraduationPinCodeId(long graduationPinCodeId) {
		this.graduationPinCodeId = graduationPinCodeId;
	}

	public long getOtherCountryId() {
		return otherCountryId;
	}

	public void setOtherCountryId(long otherCountryId) {
		this.otherCountryId = otherCountryId;
	}

	public long getOtherStateId() {
		return otherStateId;
	}

	public void setOtherStateId(long otherStateId) {
		this.otherStateId = otherStateId;
	}

	public long getOtherDistrictId() {
		return otherDistrictId;
	}

	public void setOtherDistrictId(long otherDistrictId) {
		this.otherDistrictId = otherDistrictId;
	}

	public long getOtherCityId() {
		return otherCityId;
	}

	public void setOtherCityId(long otherCityId) {
		this.otherCityId = otherCityId;
	}

	public long getOtherPostOfficeId() {
		return otherPostOfficeId;
	}

	public void setOtherPostOfficeId(long otherPostOfficeId) {
		this.otherPostOfficeId = otherPostOfficeId;
	}

	public long getOtherPinCodeId() {
		return otherPinCodeId;
	}

	public void setOtherPinCodeId(long otherPinCodeId) {
		this.otherPinCodeId = otherPinCodeId;
	}

	public long getResponsiblePersonPinCodeId1() {
		return responsiblePersonPinCodeId1;
	}

	public void setResponsiblePersonPinCodeId1(long responsiblePersonPinCodeId1) {
		this.responsiblePersonPinCodeId1 = responsiblePersonPinCodeId1;
	}

	public long getResponsiblePersonPinCodeId2() {
		return responsiblePersonPinCodeId2;
	}

	public void setResponsiblePersonPinCodeId2(long responsiblePersonPinCodeId2) {
		this.responsiblePersonPinCodeId2 = responsiblePersonPinCodeId2;
	}

	public String getOtherPostOffice() {
		return otherPostOffice;
	}
	
	public long getOtherLanguageId() {
		return otherLanguageId;
	}

	public void setOtherLanguageId(long otherLanguageId) {
		this.otherLanguageId = otherLanguageId;
	}

	public int getHeightInche() {
		return heightInche;
	}

	public void setHeightInche(int heightInche) {
		this.heightInche = heightInche;
	}

	public int getHeightCm() {
		return heightCm;
	}

	public void setHeightCm(int heightCm) {
		this.heightCm = heightCm;
	}

	public int getChestCm() {
		return chestCm;
	}

	public void setChestCm(int chestCm) {
		this.chestCm = chestCm;
	}

	public int getWeightKg() {
		return weightKg;
	}

	public void setWeightKg(int weightKg) {
		this.weightKg = weightKg;
	}

	/**
	 * Add a Student
	 * 
	 * @param bean
	 * @throws DatabaseException
	 * 
	 */
	public long add() throws ApplicationException {
		System.out.println("in the systtem");
		log.debug("Model add Started");

		Connection conn = null;
		long pk = 0;

		try {
			conn = JDBCDataSource.getConnection();
			pk = nextPK();
			code = AppRole.STUDENT + "-" + getCodeString(pk, 10);
			// Get auto-generated next primary key
			System.out.println(pk + " in ModelJDBC");
			conn.setAutoCommit(false); // Begin transaction 
			PreparedStatement pstmt = conn
					.prepareStatement("INSERT INTO ST_STUDENT(ID, CODE, FIRST_NAME, MIDDLE_NAME, LAST_NAME, FATHER_NAME, MOTHER_NAME, COLLEGE_ID, DEPARTEMENT_ID,TRAINING_ID,"+  
						"SEMESTER, YEAR, DATE_OF_BIRTH, GENDER, MOBILE_NO, TELEPHONE_NO,EMAIL_ID, PERMANENT_ADDRESS, PERMANENT_COUNTRY_ID, PERMANENT_STATE_ID,"+ 
         "PERMANENT_DISTRICT_ID, PERMANENT_CITY_ID,  PERMANENT_POST_OFFICE_ID, PERMANENT_PIN_CODE_ID, PERMANENT_CONTACT_NO_1, PERMANENT_CONTACT_NO_2, PRESENT_ADDRESS, PRESENT_COUNTRY_ID,PRESENT_STATE_ID,PRESENT_DISTRICT_ID,"+
       "PRESENT_CITY_ID, PRESENT_POST_OFFICE_ID, PRESENT_PIN_CODE_ID, PRESENT_CONTACT_NO_1, PRESENT_CONTACT_NO_2, HEIGHT, HEIGHT_INCH, HEIGHT_CM, CHEST, CHEST_CM, WEIGHT, WEIGHT_KG, BLOOD_GROUP, HINDI_READ,"+
        "HINDI_WRITE, HINDI_SPEAK, ENGLISH_READ, ENGLISH_WRITE, ENGLISH_SPEAK, OTHER_LANGUAGE_ID, OTHER_LANGUAGE_READ, OTHER_LANGUAGE_WRITE, OTHER_LANGUAGE_SPEAK,PRESENT_EMPLOYMENT, ORGANIZATION_NAME_1,"+
           "PREVIOUS_EMPLOYMENT, ORGANIZATION_NAME_2, TOTAL_EXPERIENCE, UNDER_METRIC_BOARD, UNDER_METRIC_INSTITUTE, UNDER_METRIC_COUNTRY_ID, UNDER_METRIC_STATE_ID, UNDER_METRIC_DISTRICT_ID,"+
            "UNDER_METRIC_CITY_ID, UNDER_METRIC_POST_OFFICE_ID, UNDER_METRIC_PIN_CODE_ID, UNDER_METRIC_PERCENTAGE, UNDER_METRIC_SUBJECT, HIGH_SCHOOL_BOARD, HIGH_SCHOOL_INSTITUTE, HIGH_SCHOOL_COUNTRY_ID, HIGH_SCHOOL_STATE_ID, HIGH_SCHOOL_DISTRICT_ID,"+
           "HIGH_SCHOOL_CITY_ID, HIGH_SCHOOL_POST_OFFICE_ID, HIGH_SCHOOL_PIN_CODE_ID,HIGH_SCHOOL_PERCENTAGE, HIGH_SCHOOL_SUBJECT, HIGHER_SECONDARY_BOARD, HIGHER_SECONDARY_INSTITUTE, HIGHER_SECONDARY_COUNTRY_ID, HIGHER_SECONDARY_STATE_ID, HIGHER_SECONDARY_DISTRICT_ID,"+  
            "HIGHER_SECONDARY_CITY_ID, HIGHER_SECONDARY_POST_OFFICE_ID,HIGHER_SECONDARY_PIN_CODE_ID, HIGHER_SECONDARY_PERCENTAGE, HIGHER_SECONDARY_SUBJECT, GRADUATION_UNIVERSITY, GRADUATION_INSTITUTE, GRADUATION_COUNTRY_ID, GRADUATION_STATE_ID, GRADUATION_DISTRICT_ID,"+
           "GRADUATION_CITY_ID, GRADUATION_POST_OFFICE_ID, GRADUATION_PIN_CODE_ID, GRADUATION_PERCENTAGE, GRADUATION_DEGREE, GRADUATION_SUBJECT, OTHER_BOARD, OTHER_INSTITUTE, OTHER_COUNTRY_ID, OTHER_STATE_ID,"+
             "OTHER_DISTRICT_ID, OTHER_CITY_ID, OTHER_POST_OFFICE_ID, OTHER_PIN_CODE_ID, OTHER_DEGREE,OTHER_SUBJECT,UID_CARD_NO,PAN_CARD_NO,VOTER_CARD_NO,VOTER_ISSUING_AUTHORITY,"+
           "RATION_CARD_NO, RATION_ISSUING_AUTHORITY, DRIVING_LICENSE_NO, DRIVING_ISSUING_AUTHORITY, DRIVING_VALIDATION, PASSPORT_NO, PASSPORT_ISSUING_AUTHORITY, PASSPORT_VALID_TILL, RESPONSIBLE_PERSON_NAME_1,RESPONSIBLE_PERSON_ADDRESS_1,"+
             "RESPONSIBLE_PERSON_PIN_CODE_1, RESPONSIBLE_PERSON_NAME_2, RESPONSIBLE_PERSON_ADDRESS_2, RESPONSIBLE_PERSON_PIN_CODE_2, USER_ID)"+
             "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
					
			pstmt.setLong(1, pk);
			pstmt.setString(2, code);
			pstmt.setString(3, firstName);
			pstmt.setString(4, middleName);
			pstmt.setString(5, lastName);
			pstmt.setString(6, fatherName);
			pstmt.setString(7, motherName);
			pstmt.setLong(8, collegeId);
			pstmt.setLong(9, departementId);
			pstmt.setLong(10, trainingId);
			
			pstmt.setInt(11, semester);
			pstmt.setInt(12, year);
			if(dob!=null){
				pstmt.setDate(13,  new java.sql.Date(dob.getTime()));
			}else{
				pstmt.setDate(13, (java.sql.Date) dob);
			}
			pstmt.setString(14, gender);
			pstmt.setString(15, mobileNo);
			pstmt.setString(16, telephoneNo);
			pstmt.setString(17, emailId);
			
			pstmt.setString(18, permanentAddress);	
	        pstmt.setLong(19, permanentCountryId);	
			pstmt.setLong(20, permanentStateId);
			pstmt.setLong(21, permanentDistrictId);
			pstmt.setLong(22, permanentCityId);
			pstmt.setLong(23, permanentPostOfficeId);
			pstmt.setLong(24, permanentPinCodeId);
			pstmt.setString(25, permanentContactNo1);
			pstmt.setString(26, permanentContactNo2);
			
			pstmt.setString(27, presentAddress);	
			pstmt.setLong(28, presentCountryId);	
			pstmt.setLong(29, presentStateId);
			pstmt.setLong(30, presentDistrictId);
			pstmt.setLong(31, presentCityId);
			pstmt.setLong(32, presentPostOfficeId);
			pstmt.setLong(33, presentPinCodeId);
			pstmt.setString(34, presentContactNo1);
			pstmt.setString(35, presentContactNo2);
			
			pstmt.setInt(36,height);
			pstmt.setInt(37,heightInche);
			pstmt.setInt(38,heightCm);
			pstmt.setInt(39,chest);
			pstmt.setInt(40,chestCm);
			pstmt.setInt(41,weight);
			pstmt.setInt(42,weightKg);
			pstmt.setString(43, bloodGroup);
			pstmt.setString(44, hindiRead);
			
			pstmt.setString(45, hindiWrite);	
			pstmt.setString(46, hindiSpeak);
			pstmt.setString(47, englisgRead);
			pstmt.setString(48, englishWrite);
			pstmt.setString(49, englishSpeak);
			pstmt.setLong(50, otherLanguageId);
			pstmt.setString(51, otherLanguageRead);
			pstmt.setString(52, otherLanguageWrite);
			pstmt.setString(53, otherLanguageSpeak);
			pstmt.setString(54, presentEmployent);
			
			pstmt.setString(55, oraganizationName1);
			pstmt.setString(56, previousEmployent);
			pstmt.setString(57, oraganizationName2);
		    pstmt.setDouble(58, totalExperience);
		    pstmt.setString(59, underMetricBoard);
		    pstmt.setString(60,underMetricInstitute);
		
		    pstmt.setLong(61,underMetricCountryId);
	        pstmt.setLong(62, underMetricStateId);
		    pstmt.setLong(63, underMetricDistrictId);
		    pstmt.setLong(64, underMetricCityId);
		    pstmt.setLong(65, underMetricPostOfficeId);
		    pstmt.setLong(66, underMetricPinCodeId);
		    pstmt.setDouble(67, underMetricPercentage);
		    pstmt.setString(68, underMetricSubject);
		    pstmt.setString(69, highSchoolBoard);
		    pstmt.setString(70, highSchoolInstitute);
		    pstmt.setLong(71, highSchoolCountryId);
		    pstmt.setLong(72, highSchoolStateId);
		    pstmt.setLong(73, highSchoolDistrictId);
		    pstmt.setLong(74, highSchoolCityId);
		    
		    pstmt.setLong(75, highScoolPostOfficeId);
		    pstmt.setLong(76, highSchoolPinCodeId);
		    pstmt.setDouble(77, highSchoolPercentage);
		    pstmt.setString(78, highSchoolSubject);
            pstmt.setString(79, higherSecondaryBoard);
		    pstmt.setString(80, higherSecondaryInstitute);
		    pstmt.setLong(81, higherSeconndaryCountryId);
		    pstmt.setLong(82, higherSecondaryStateId);
		    pstmt.setLong(83, higherSecondaryDistrictId);
		    pstmt.setLong(84, higherSecondaryCityId);
		    
		    pstmt.setLong(85, higherSecondaryPostOfficeId);
		    pstmt.setLong(86, higherSecondaryPinCodeId);
		    pstmt.setDouble(87, higherSecondaryPercentage);
		    pstmt.setString(88, higherSecondarySubject);
		    pstmt.setString(89, graduationUniversity);
		    pstmt.setString(90, graduationInstitute);
		    pstmt.setLong(91, graduationCountryId);
		    pstmt.setLong(92, graduationStateId);
		    pstmt.setLong(93, graduationDistrictId);
		    pstmt.setLong(94, graduationCityId);
		    
		    pstmt.setLong(95, graduationPostOfficeId);
		    pstmt.setLong(96, graduationPinCodeId);
		    pstmt.setDouble(97, graduationPercentage);
		    pstmt.setString(98, graduationDegree);
		    pstmt.setString(99, graduationSubject);
		    pstmt.setString(100, otherBoard);
		    pstmt.setString(101, otherInstitute);
		    pstmt.setLong(102, otherCountryId);
		    pstmt.setLong(103, otherStateId);
		    pstmt.setLong(104, otherDistrictId);
		    
		    pstmt.setLong(105, otherCityId);
		    pstmt.setLong(106, otherPostOfficeId);
		    pstmt.setLong(107, otherPinCodeId);
		    //pstmt.setDouble(104,otherPercentage);
		    pstmt.setString(108, otherDegree);
		    pstmt.setString(109, otherSubject);
		    pstmt.setString(110, uidCardNo);
		    pstmt.setString(111, panCardNo);
		    pstmt.setString(112, voterCardNo);
		    pstmt.setString(113, voterIssuingAuthority);
		    
		    pstmt.setString(114, rationCardNo);
		    pstmt.setString(115, rationIssuingAuthority);
		    pstmt.setString(116, drivingLicenseNo);
		    pstmt.setString(117, drivingIssuingAuthority);
		   
		    if(drivingValidation!=null){
				pstmt.setDate(118,  new java.sql.Date(drivingValidation.getTime()));
			}else{
				pstmt.setDate(118, (java.sql.Date) drivingValidation);
			}
		    pstmt.setString(119, passPortNo);
		    pstmt.setString(120, passPortIssuingAuthority);
		    
		    if(passPortValidTill!=null){
				pstmt.setDate(121,  new java.sql.Date(passPortValidTill.getTime()));
			}else{
				pstmt.setDate(121, (java.sql.Date) passPortValidTill);
			}
		   
		    pstmt.setString(122, responsiblePersonName1);
		    pstmt.setString(123,responsiblePerconAddress1);
		    pstmt.setLong(124, responsiblePersonPinCode1);
		    pstmt.setString(125, responsiblePersonName2);
		    pstmt.setString(126, responsiblePerconAddress2);
		    pstmt.setLong(127, responsiblePersonPinCode2);
		    pstmt.setLong(128, userId);
			

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
					.prepareStatement("DELETE FROM ST_STUDENT WHERE ID=?");

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

	public StudentModel findByPK(long pk) throws ApplicationException {
		log.debug("Model findByPK Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_STUDENT  WHERE ID=?");

		StudentModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, pk);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = populateModel(new StudentModel(), rs);
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

	public StudentModel findByUserId(long userId) throws ApplicationException {
		log.debug("Model findByPK Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_STUDENT WHERE USER_ID=?");

		StudentModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, userId);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = populateModel(new StudentModel(), rs);
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
		Connection conn = null;

		try {

			conn = JDBCDataSource.getConnection();

			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn
					.prepareStatement("UPDATE ST_STUDENT SET CODE=?,FIRST_NAME=?, MIDDLE_NAME=?, LAST_NAME=?, FATHER_NAME=?, MOTHER_NAME=?, COLLEGE_ID=?, DEPARTEMENT_ID=?, TRAINING_ID=?,"+  
							"SEMESTER=?, YEAR=?, DATE_OF_BIRTH=?, GENDER=?, MOBILE_NO=?, TELEPHONE_NO=?,EMAIL_ID=?, PERMANENT_ADDRESS=?, PERMANENT_COUNTRY_ID=?, PERMANENT_STATE_ID=?,"+ 
          "PERMANENT_DISTRICT_ID=?, PERMANENT_CITY_ID=?, PERMANENT_POST_OFFICE_ID=?, PERMANENT_PIN_CODE_ID=?, PERMANENT_CONTACT_NO_1=?, PERMANENT_CONTACT_NO_2=?, PRESENT_ADDRESS=?, PRESENT_COUNTRY_ID=?,PRESENT_STATE_ID=?,PRESENT_DISTRICT_ID=?,"+
       "PRESENT_CITY_ID=?, PRESENT_POST_OFFICE_ID=?, PRESENT_PIN_CODE_ID=?, PRESENT_CONTACT_NO_1=?, PRESENT_CONTACT_NO_2=?, HEIGHT=?, HEIGHT_INCH=?, HEIGHT_CM=?, CHEST=?, CHEST_CM=?, WEIGHT=?, WEIGHT_KG=?, BLOOD_GROUP=?, HINDI_READ=?,"+
        "HINDI_WRITE=?, HINDI_SPEAK=?, ENGLISH_READ=?, ENGLISH_WRITE=?, ENGLISH_SPEAK=?, OTHER_LANGUAGE_ID=?, OTHER_LANGUAGE_READ=?, OTHER_LANGUAGE_WRITE=?, OTHER_LANGUAGE_SPEAK=?,PRESENT_EMPLOYMENT=?, ORGANIZATION_NAME_1=?,"+
           "PREVIOUS_EMPLOYMENT=?, ORGANIZATION_NAME_2=?, TOTAL_EXPERIENCE=?, UNDER_METRIC_BOARD=?, UNDER_METRIC_INSTITUTE=?, UNDER_METRIC_COUNTRY_ID=?, UNDER_METRIC_STATE_ID=?, UNDER_METRIC_DISTRICT_ID=?,"+
            "UNDER_METRIC_CITY_ID=?, UNDER_METRIC_POST_OFFICE_ID=?, UNDER_METRIC_PIN_CODE_ID=?, UNDER_METRIC_PERCENTAGE=?, UNDER_METRIC_SUBJECT=?, HIGH_SCHOOL_BOARD=?, HIGH_SCHOOL_INSTITUTE=?, HIGH_SCHOOL_COUNTRY_ID=?, HIGH_SCHOOL_STATE_ID=?, HIGH_SCHOOL_DISTRICT_ID=?,"+
            "HIGH_SCHOOL_CITY_ID=?, HIGH_SCHOOL_POST_OFFICE_ID=?, HIGH_SCHOOL_PIN_CODE_ID=?, HIGH_SCHOOL_PERCENTAGE=?, HIGH_SCHOOL_SUBJECT=?, HIGHER_SECONDARY_BOARD=?, HIGHER_SECONDARY_INSTITUTE=?, HIGHER_SECONDARY_COUNTRY_ID=?, HIGHER_SECONDARY_STATE_ID=?, HIGHER_SECONDARY_DISTRICT_ID=?,"+  
            "HIGHER_SECONDARY_CITY_ID=?, HIGHER_SECONDARY_POST_OFFICE_ID=?, HIGHER_SECONDARY_PIN_CODE_ID=?, HIGHER_SECONDARY_PERCENTAGE=?, HIGHER_SECONDARY_SUBJECT=?, GRADUATION_UNIVERSITY=?, GRADUATION_INSTITUTE=?, GRADUATION_COUNTRY_ID=?, GRADUATION_STATE_ID=?, GRADUATION_DISTRICT_ID=?,"+
           "GRADUATION_CITY_ID=?, GRADUATION_POST_OFFICE_ID=?, GRADUATION_PIN_CODE_ID=?, GRADUATION_PERCENTAGE=?, GRADUATION_DEGREE=?, GRADUATION_SUBJECT=?, OTHER_BOARD=?, OTHER_INSTITUTE=?, OTHER_COUNTRY_ID=?, OTHER_STATE_ID=?,"+
             "OTHER_DISTRICT_ID=?,OTHER_CITY_ID=?,OTHER_POST_OFFICE_ID=?,OTHER_PIN_CODE_ID=?,OTHER_DEGREE=?,OTHER_SUBJECT=?,UID_CARD_NO=?,PAN_CARD_NO=?,VOTER_CARD_NO=?,VOTER_ISSUING_AUTHORITY=?,"+
             "RATION_CARD_NO=?, RATION_ISSUING_AUTHORITY=?, DRIVING_LICENSE_NO=?, DRIVING_ISSUING_AUTHORITY=?, DRIVING_VALIDATION=?, PASSPORT_NO=?, PASSPORT_ISSUING_AUTHORITY=?, PASSPORT_VALID_TILL=?, RESPONSIBLE_PERSON_NAME_1=?,RESPONSIBLE_PERSON_ADDRESS_1=?,"+
             "RESPONSIBLE_PERSON_PIN_CODE_1=?, RESPONSIBLE_PERSON_NAME_2=?, RESPONSIBLE_PERSON_ADDRESS_2=?, RESPONSIBLE_PERSON_PIN_CODE_2=?,USER_ID=? WHERE ID=?");
			
			pstmt.setString(1, code);
			pstmt.setString(2, firstName);
			pstmt.setString(3, middleName);
			pstmt.setString(4, lastName);
			pstmt.setString(5, fatherName);
			pstmt.setString(6, motherName);
			pstmt.setLong(7, collegeId);
			pstmt.setLong(8, departementId);
			pstmt.setLong(9, trainingId);
			
			pstmt.setInt(10, semester);
			pstmt.setInt(11, year);
			
			if(dob!=null){
				pstmt.setDate(12,  new java.sql.Date(dob.getTime()));
			}else{
				pstmt.setDate(12, (java.sql.Date) dob);
			}
			pstmt.setString(13, gender);
			pstmt.setString(14, mobileNo);
			pstmt.setString(15, telephoneNo);
			pstmt.setString(16, emailId);
			
			pstmt.setString(17, permanentAddress);	
	        pstmt.setLong(18, permanentCountryId);	
			pstmt.setLong(19, permanentStateId);
			pstmt.setLong(20, permanentDistrictId);
			pstmt.setLong(21, permanentCityId);
			pstmt.setLong(22, permanentPostOfficeId);
			pstmt.setLong(23, permanentPinCodeId);
			pstmt.setString(24, permanentContactNo1);
			pstmt.setString(25, permanentContactNo2);
			
			pstmt.setString(26, presentAddress);	
			pstmt.setLong(27, presentCountryId);	
			pstmt.setLong(28, presentStateId);
			pstmt.setLong(29, presentDistrictId);
			pstmt.setLong(30, presentCityId);
			pstmt.setLong(31, presentPostOfficeId);
			pstmt.setLong(32, presentPinCodeId);
			pstmt.setString(33, presentContactNo1);
			pstmt.setString(34, presentContactNo2);
			
			pstmt.setInt(35,height);
			pstmt.setInt(36,heightInche);
			pstmt.setInt(37,heightCm);
			pstmt.setInt(38,chest);
			pstmt.setInt(39,chestCm);
			pstmt.setInt(40,weight);
			pstmt.setInt(41,weightKg);
			pstmt.setString(42, bloodGroup);
			pstmt.setString(43, hindiRead);
			
			pstmt.setString(44, hindiWrite);	
			pstmt.setString(45, hindiSpeak);
			pstmt.setString(46, englisgRead);
			pstmt.setString(47, englishWrite);
			pstmt.setString(48, englishSpeak);
			pstmt.setLong(49, otherLanguageId);
			pstmt.setString(50, otherLanguageRead);
			pstmt.setString(51, otherLanguageWrite);
			pstmt.setString(52, otherLanguageSpeak);
			pstmt.setString(53, presentEmployent);
			
			pstmt.setString(54, oraganizationName1);
			pstmt.setString(55, previousEmployent);
			pstmt.setString(56, oraganizationName2);
		    pstmt.setDouble(57, totalExperience);
		    pstmt.setString(58, underMetricBoard);
		    pstmt.setString(59,underMetricInstitute);
		
		    pstmt.setLong(60,underMetricCountryId);
	        pstmt.setLong(61, underMetricStateId);
		    pstmt.setLong(62, underMetricDistrictId);
		    pstmt.setLong(63, underMetricCityId);
		    pstmt.setLong(64, underMetricPostOfficeId);
		    pstmt.setLong(65, underMetricPinCodeId);
		    pstmt.setDouble(66, underMetricPercentage);
		    pstmt.setString(67, underMetricSubject);
		    pstmt.setString(68, highSchoolBoard);
		    pstmt.setString(69, highSchoolInstitute);
		    pstmt.setLong(70, highSchoolCountryId);
		    pstmt.setLong(71, highSchoolStateId);
		    pstmt.setLong(72, highSchoolDistrictId);
		    pstmt.setLong(73, highSchoolCityId);
		    
		    pstmt.setLong(74, highScoolPostOfficeId);
		    pstmt.setLong(75, highSchoolPinCodeId);
		    pstmt.setDouble(76, highSchoolPercentage);
		    pstmt.setString(77, highSchoolSubject);
            pstmt.setString(78, higherSecondaryBoard);
		    pstmt.setString(79, higherSecondaryInstitute);
		    pstmt.setLong(80, higherSeconndaryCountryId);
		    pstmt.setLong(81, higherSecondaryStateId);
		    pstmt.setLong(82, higherSecondaryDistrictId);
		    pstmt.setLong(83, higherSecondaryCityId);
		    
		    pstmt.setLong(84, higherSecondaryPostOfficeId);
		    pstmt.setLong(85, higherSecondaryPinCodeId);
		    pstmt.setDouble(86, higherSecondaryPercentage);
		    pstmt.setString(87, higherSecondarySubject);
		    pstmt.setString(88, graduationUniversity);
		    pstmt.setString(89, graduationInstitute);
		    pstmt.setLong(90, graduationCountryId);
		    pstmt.setLong(91, graduationStateId);
		    pstmt.setLong(92, graduationDistrictId);
		    pstmt.setLong(93, graduationCityId);
		    
		    pstmt.setLong(94, graduationPostOfficeId);
		    pstmt.setLong(95, graduationPinCodeId);
		    pstmt.setDouble(96, graduationPercentage);
		    pstmt.setString(97, graduationDegree);
		    pstmt.setString(98, graduationSubject);
		    pstmt.setString(99, otherBoard);
		    pstmt.setString(100, otherInstitute);
		    pstmt.setLong(101, otherCountryId);
		    pstmt.setLong(102, otherStateId);
		    pstmt.setLong(103, otherDistrictId);
		    
		    pstmt.setLong(104, otherCityId);
		    pstmt.setLong(105, otherPostOfficeId);
		    pstmt.setLong(106, otherPinCodeId);
		    //pstmt.setDouble(103,otherPercentage);
		    pstmt.setString(107, otherDegree);
		    pstmt.setString(108, otherSubject);
		    pstmt.setString(109, uidCardNo);
		    pstmt.setString(110, panCardNo);
		    pstmt.setString(111, voterCardNo);
		    pstmt.setString(112, voterIssuingAuthority);
		    
		    pstmt.setString(113, rationCardNo);
		    pstmt.setString(114, rationIssuingAuthority);
		    pstmt.setString(115, drivingLicenseNo);
		    pstmt.setString(116, drivingIssuingAuthority);
		    
		    if(drivingValidation!=null){
				pstmt.setDate(117,  new java.sql.Date(drivingValidation.getTime()));
			}else{
				pstmt.setDate(117, (java.sql.Date) drivingValidation);
			}
		    pstmt.setString(118, passPortNo);
		    pstmt.setString(119, passPortIssuingAuthority);
		    
		    if(passPortValidTill!=null){
				pstmt.setDate(120,  new java.sql.Date(passPortValidTill.getTime()));
			}else{
				pstmt.setDate(120, (java.sql.Date) passPortValidTill);
		
			}  
		    pstmt.setString(121, responsiblePersonName1);
		    pstmt.setString(122,responsiblePerconAddress1);
		    pstmt.setLong(123, responsiblePersonPinCode1);
		    pstmt.setString(124, responsiblePersonName2);
		    pstmt.setString(125, responsiblePerconAddress2);
		    pstmt.setLong(126, responsiblePersonPinCode2);
		    pstmt.setLong(127, userId);
			pstmt.setLong(128, id);
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
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_STUDENT WHERE 1=1");

		if (id > 0) {
			sql.append(" AND id = " + id);
		}
		
		if (collegeId > 0) {
			sql.append(" AND COLLEGE_ID = " + collegeId);
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
				StudentModel model = populateModel(new StudentModel(), rs);
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

		StudentModel model = (StudentModel) m;
		model.setId(rs.getLong("ID"));
		model.setFirstName(rs.getString("FIRST_NAME"));
		model.setMiddleName(rs.getString("MIDDLE_NAME"));
		model.setLastName(rs.getString("LAST_NAME"));
		model.setFatherName(rs.getString("FATHER_NAME"));
		model.setMotherName(rs.getString("MOTHER_NAME"));
		model.setCollegeId(rs.getLong("COLLEGE_ID"));
		model.setCollegeName(rs.getString("COLLEGE_NAME"));
		model.setDepartementId(rs.getLong("DEPARTEMENT_ID"));
		model.setDepartementName(rs.getString("DEPARTEMENT_NAME"));
		model.setTrainingId(rs.getLong("TRAINING_ID"));
		model.setTrainingName(rs.getString("TRAINING_NAME"));
		model.setSemester(rs.getInt("SEMESTER"));
		model.setYear(rs.getInt("YEAR"));
	
		model.setDob(rs.getDate("DATE_OF_BIRTH"));
		model.setGender(rs.getString("GENDER"));
		model.setMobileNo(rs.getString("MOBILE_NO"));
		model.setTelephoneNo(rs.getString("TELEPHONE_NO"));
		
		
		//model.setPlaceOfBirth(rs.getString("PLACE_OF_BIRTH"));
		model.setEmailId(rs.getString("EMAIL_ID"));
		
		model.setPermanentAddress(rs.getString("PERMANENT_ADDRESS"));
		model.setPermanentCountry(rs.getString("PERMANENT_COUNTRY"));
		model.setPermanentCountryId(rs.getLong("PERMANENT_COUNTRY_ID"));
		model.setPermanentState(rs.getString("PERMANENT_STATE"));
		model.setPermanentStateId(rs.getLong("PERMANENT_STATE_ID"));
		model.setPermanentDistrict(rs.getString("PERMANENT_DISTRICT"));
		model.setPermanentDistrictId(rs.getLong("PERMANENT_DISTRICT_ID"));
		model.setPermanentCity(rs.getString("PERMANENT_CITY"));
		model.setPermanentCityId(rs.getLong("PERMANENT_CITY_ID"));
		model.setPermanentPostOffice(rs.getString("PERMANENT_POST_OFFICE"));
		model.setPermanentPostOfficeId(rs.getLong("PERMANENT_POST_OFFICE_ID"));
		model.setPermanentPinCode(rs.getLong("PERMANENT_PIN_CODE"));
		model.setPermanentPinCodeId(rs.getLong("PERMANENT_PIN_CODE_ID"));
		model.setPermanentContactNo1(rs.getString("PERMANENT_CONTACT_NO_1"));
		model.setPermanentContactNo2(rs.getString("PERMANENT_CONTACT_NO_2"));
		
		model.setPresentAddress(rs.getString("PRESENT_ADDRESS"));
		model.setPresentCountry(rs.getString("PRESENT_COUNTRY"));
		model.setPresentCountryId(rs.getLong("PRESENT_COUNTRY_ID"));
		model.setPresentState(rs.getString("PRESENT_STATE"));
		model.setPresentStateId(rs.getLong("PRESENT_STATE_ID"));
		model.setPresentDistrict(rs.getString("PRESENT_DISTRICT"));
		model.setPresentDistrictId(rs.getLong("PRESENT_DISTRICT_ID"));
		model.setPresentCity(rs.getString("PRESENT_CITY"));
		model.setPresentCityId(rs.getLong("PRESENT_CITY_ID"));
		model.setPresentPostOffice(rs.getString("PRESENT_POST_OFFICE"));
		model.setPresentPostOfficeId(rs.getLong("PRESENT_POST_OFFICE_ID"));
		model.setPresentPinCode(rs.getLong("PRESENT_PIN_CODE"));
		model.setPresentPinCodeId(rs.getLong("PRESENT_PIN_CODE_ID"));
		model.setPresentContactNo1(rs.getString("PRESENT_CONTACT_NO_1"));
		model.setPresentContactNo2(rs.getString("PRESENT_CONTACT_NO_2"));
		
		model.setWeight(rs.getInt("WEIGHT"));
		model.setWeightKg(rs.getInt("WEIGHT_KG"));
		model.setHeight(rs.getInt("HEIGHT"));
		model.setHeightInche(rs.getInt("HEIGHT_INCH"));
		model.setHeightCm(rs.getInt("HEIGHT_CM"));
		model.setChest(rs.getInt("CHEST"));
		model.setChestCm(rs.getInt("CHEST_CM"));
		
		model.setBloodGroup(rs.getString("BLOOD_GROUP"));
		
		model.setHindiRead(rs.getString("HINDI_READ"));
		model.setHindiWrite(rs.getString("HINDI_WRITE"));
		model.setHindiSpeak(rs.getString("HINDI_SPEAK"));
		model.setEnglisgRead(rs.getString("ENGLISH_READ"));
		model.setEnglishWrite(rs.getString("ENGLISH_WRITE"));
		model.setEnglishSpeak(rs.getString("ENGLISH_SPEAK"));
		model.setOtherLanguage(rs.getString("OTHER_LANGUAGE"));
		model.setOtherLanguageId(rs.getLong("OTHER_LANGUAGE_ID"));
		model.setOtherLanguageRead(rs.getString("OTHER_LANGUAGE_READ"));
		model.setOtherLanguageWrite(rs.getString("OTHER_LANGUAGE_WRITE"));
		model.setOtherLanguageSpeak(rs.getString("OTHER_LANGUAGE_SPEAK"));
		
		model.setPresentEmployent(rs.getString("PRESENT_EMPLOYMENT"));
		model.setOraganizationName1(rs.getString("ORGANIZATION_NAME_1"));
		model.setOrganizationDesignation1(rs.getString("ORGANIZATION_DESIGNATION_1"));
		model.setPreviousEmployent(rs.getString("PREVIOUS_EMPLOYMENT"));
		model.setOraganizationName2(rs.getString("ORGANIZATION_NAME_2"));
		model.setOrganizationDesignation2(rs.getString("ORGANIZATION_DESIGNATION_2"));
		model.setTotalExperience(rs.getDouble("TOTAL_EXPERIENCE"));
		
		model.setUnderMetricBoard(rs.getString("UNDER_METRIC_BOARD"));
		model.setUnderMetricInstitute(rs.getString("UNDER_METRIC_INSTITUTE"));
		model.setUnderMetricCountry(rs.getString("UNDER_METRIC_COUNTRY"));
		model.setUnderMetricCountryId(rs.getLong("UNDER_METRIC_COUNTRY_ID"));
		model.setUnderMetricState(rs.getString("UNDER_METRIC_STATE"));
		model.setUnderMetricStateId(rs.getLong("UNDER_METRIC_STATE_ID"));
		model.setUnderMetricDistrict(rs.getString("UNDER_METRIC_DISTRICT"));
		model.setUnderMetricDistrictId(rs.getLong("UNDER_METRIC_DISTRICT_ID"));
		model.setUnderMetricCity(rs.getString("UNDER_METRIC_CITY"));
		model.setUnderMetricCityId(rs.getLong("UNDER_METRIC_CITY_ID"));
		model.setUnderMetricPostOffice(rs.getString("UNDER_METRIC_POST_OFFICE"));
		model.setUnderMetricPostOfficeId(rs.getLong("UNDER_METRIC_POST_OFFICE_ID"));
		model.setUnderMetricPinCode(rs.getLong("UNDER_METRIC_PIN_CODE"));
		model.setUnderMetricPinCodeId(rs.getLong("UNDER_METRIC_PIN_CODE_ID"));
		model.setUnderMetricPercentage(rs.getDouble("UNDER_METRIC_PERCENTAGE"));
		model.setUnderMetricSubject(rs.getString("UNDER_METRIC_SUBJECT"));
		
		model.setHighSchoolBoard(rs.getString("HIGH_SCHOOL_BOARD"));
		model.setHighSchoolInstitute(rs.getString("HIGH_SCHOOL_INSTITUTE"));
		model.setHighSchoolCountry(rs.getString("HIGH_SCHOOL_COUNTRY"));
		model.setHighSchoolCountryId(rs.getLong("HIGH_SCHOOL_COUNTRY_ID"));
		model.setHighSchoolState(rs.getString("HIGH_SCHOOL_STATE"));
		model.setHighSchoolStateId(rs.getLong("HIGH_SCHOOL_STATE_ID"));
		model.setHighSchoolDistrict(rs.getString("HIGH_SCHOOL_DISTRICT"));
		model.setHighSchoolDistrictId(rs.getLong("HIGH_SCHOOL_DISTRICT_ID"));
		model.setHighSchoolCity(rs.getString("HIGH_SCHOOL_CITY"));
		model.setHighSchoolCityId(rs.getLong("HIGH_SCHOOL_CITY_ID"));
		model.setHighScoolPostOffice(rs.getString("HIGH_SCHOOL_POST_OFFICE"));
		model.setHighScoolPostOfficeId(rs.getLong("HIGH_SCHOOL_POST_OFFICE_ID"));
		model.setHighSchoolPinCode(rs.getLong("HIGH_SCHOOL_PIN_CODE"));
		model.setHighSchoolPinCodeId(rs.getLong("HIGH_SCHOOL_PIN_CODE_ID"));
		model.setHighSchoolPercentage(rs.getDouble("HIGH_SCHOOL_PERCENTAGE"));
		model.setHighSchoolSubject(rs.getString("HIGH_SCHOOL_SUBJECT"));
		
		
		model.setHigherSecondaryBoard(rs.getString("HIGHER_SECONDARY_BOARD"));
		model.setHigherSecondaryInstitute(rs.getString("HIGHER_SECONDARY_INSTITUTE"));
		model.setHigherSeconndaryCountry(rs.getString("HIGHER_SECONDARY_COUNTRY"));
		model.setHigherSeconndaryCountryId(rs.getLong("HIGHER_SECONDARY_COUNTRY_ID"));
		model.setHigherSecondaryState(rs.getString("HIGHER_SECONDARY_STATE"));
		model.setHigherSecondaryStateId(rs.getLong("HIGHER_SECONDARY_STATE_ID"));
		model.setHigherSecondaryDistrict(rs.getString("HIGHER_SECONDARY_DISTRICT"));
		model.setHigherSecondaryDistrictId(rs.getLong("HIGHER_SECONDARY_DISTRICT_ID"));
		model.setHigherSecondaryCity(rs.getString("HIGHER_SECONDARY_CITY"));
		model.setHigherSecondaryCityId(rs.getLong("HIGHER_SECONDARY_CITY_ID"));
		model.setHigherSecondaryPostOffice(rs.getString("HIGHER_SECONDARY_POST_OFFICE"));
		model.setHigherSecondaryPostOfficeId(rs.getLong("HIGHER_SECONDARY_POST_OFFICE_ID"));
		model.setHigherSecondaryPinCode(rs.getLong("HIGHER_SECONDARY_PIN_CODE"));
		model.setHigherSecondaryPinCodeId(rs.getLong("HIGHER_SECONDARY_PIN_CODE_ID"));
		model.setHigherSecondaryPercentage(rs.getDouble("HIGHER_SECONDARY_PERCENTAGE"));
		model.setHigherSecondarySubject(rs.getString("HIGHER_SECONDARY_SUBJECT"));
		
		model.setGraduationUniversity(rs.getString("GRADUATION_UNIVERSITY"));
		model.setGraduationInstitute(rs.getString("GRADUATION_INSTITUTE"));
		model.setGraduationCountry(rs.getString("GRADUATION_COUNTRY"));
		model.setGraduationCountryId(rs.getLong("GRADUATION_COUNTRY_ID"));
		model.setGraduationState(rs.getString("GRADUATION_STATE"));
		model.setGraduationStateId(rs.getLong("GRADUATION_STATE_ID"));
		model.setGraduationDistrict(rs.getString("GRADUATION_DISTRICT"));
		model.setGraduationDistrictId(rs.getLong("GRADUATION_DISTRICT_ID"));
		model.setGraduationCity(rs.getString("GRADUATION_CITY"));
		model.setGraduationCityId(rs.getLong("GRADUATION_CITY_ID"));
		model.setGraduationPostOffice(rs.getString("GRADUATION_POST_OFFICE"));
		model.setGraduationPostOfficeId(rs.getLong("GRADUATION_POST_OFFICE_ID"));
		model.setGraduationPinCode(rs.getLong("GRADUATION_PIN_CODE"));
		model.setGraduationPinCodeId(rs.getLong("GRADUATION_PIN_CODE_ID"));
		model.setGraduationPercentage(rs.getDouble("GRADUATION_PERCENTAGE"));
		model.setGraduationDegree(rs.getString("GRADUATION_DEGREE"));
		model.setGraduationSubject(rs.getString("GRADUATION_SUBJECT"));
		
		model.setOtherBoard(rs.getString("OTHER_BOARD"));
		model.setOtherInstitute(rs.getString("OTHER_INSTITUTE"));
		model.setOtherCountry(rs.getString("OTHER_COUNTRY"));
		model.setOtherCountryId(rs.getLong("OTHER_COUNTRY_ID"));
		model.setOtherState(rs.getString("OTHER_STATE"));
		model.setOtherStateId(rs.getLong("OTHER_STATE_ID"));
		model.setOtherDistrict(rs.getString("OTHER_DISTRICT"));
		model.setOtherDistrictId(rs.getLong("OTHER_DISTRICT_ID"));
		model.setOtherCity(rs.getString("OTHER_CITY"));
		model.setOtherCityId(rs.getLong("OTHER_CITY_ID"));
		model.setOtherPostOffice(rs.getString("OTHER_POST_OFFICE"));
		model.setOtherPostOfficeId(rs.getLong("OTHER_POST_OFFICE_ID"));
		model.setOtherPinCode(rs.getLong("OTHER_PIN_CODE"));
		model.setOtherPinCodeId(rs.getLong("OTHER_PIN_CODE_ID"));
		model.setOtherPercentage(rs.getDouble("OTHER_PERCENTAGE"));
		model.setOtherDegree(rs.getString("OTHER_DEGREE"));
		model.setOtherSubject(rs.getString("OTHER_SUBJECT"));
				
		model.setUidCardNo(rs.getString("UID_CARD_NO"));
		model.setPanCardNo(rs.getString("PAN_CARD_NO"));
		model.setVoterCardNo(rs.getString("VOTER_CARD_NO"));
		model.setVoterIssuingAuthority(rs.getString("VOTER_ISSUING_AUTHORITY"));
		model.setRationCardNo(rs.getString("RATION_CARD_NO"));
		model.setRationIssuingAuthority(rs.getString("RATION_ISSUING_AUTHORITY"));
		model.setDrivingLicenseNo(rs.getString("DRIVING_LICENSE_NO"));
		model.setDrivingIssuingAuthority(rs.getString("DRIVING_ISSUING_AUTHORITY"));
		model.setDrivingValidation(rs.getDate("DRIVING_VALIDATION"));
		model.setPassPortNo(rs.getString("PASSPORT_NO"));
		model.setPassPortIssuingAuthority(rs.getString("PASSPORT_ISSUING_AUTHORITY"));
		model.setPassPortValidTill(rs.getDate("PASSPORT_VALID_TILL"));
		
		model.setResponsiblePersonName1(rs.getString("RESPONSIBLE_PERSON_NAME_1"));
		model.setResponsiblePerconAddress1(rs.getString("RESPONSIBLE_PERSON_ADDRESS_1"));
		model.setResponsiblePersonPinCode1(rs.getLong("RESPONSIBLE_PERSON_PIN_CODE_1"));
		model.setResponsiblePersonName2(rs.getString("RESPONSIBLE_PERSON_NAME_2"));
		model.setResponsiblePerconAddress2(rs.getString("RESPONSIBLE_PERSON_ADDRESS_2"));
		model.setResponsiblePersonPinCode2(rs.getLong("RESPONSIBLE_PERSON_PIN_CODE_2"));
	
		
	
		model.setUserId(rs.getLong("USER_ID"));
		
		model.setCode(rs.getString("CODE"));
		model.setPhoto(rs.getString("PHOTO"));
		
		return m;
	}

	
	/**
	 * Update uploaded photo
	 */
	public void updatePhoto() {

		String sql = "UPDATE ST_STUDENT  SET PHOTO = '" + photo
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

		String collegeSql = "UPDATE ST_STUDENT U SET COLLEGE_NAME = (SELECT COMPANY_NAME FROM ST_COLLEGE C WHERE C.ID = U.COLLEGE_ID)  WHERE ID = "
				+ id;

		String deptSql = "UPDATE ST_STUDENT U SET DEPARTEMENT_NAME = (SELECT NAME FROM ST_DEPARTEMENT C WHERE C.ID = U.DEPARTEMENT_ID)  WHERE ID = "
				+ id;

		String trnSql = "UPDATE ST_STUDENT U SET TRAINING_NAME = (SELECT NAME FROM ST_TRAINING C WHERE C.ID = U.TRAINING_ID)  WHERE ID = "
				+ id;
		
		String countrySql = "UPDATE ST_STUDENT U SET PERMANENT_COUNTRY = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.PERMANENT_COUNTRY_ID),PRESENT_COUNTRY = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.PRESENT_COUNTRY_ID),"
				+"UNDER_METRIC_COUNTRY = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.UNDER_METRIC_COUNTRY_ID),HIGH_SCHOOL_COUNTRY = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.HIGH_SCHOOL_COUNTRY_ID),"
				+"HIGHER_SECONDARY_COUNTRY = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.HIGHER_SECONDARY_COUNTRY_ID),GRADUATION_COUNTRY = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.GRADUATION_COUNTRY_ID),OTHER_COUNTRY = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.OTHER_COUNTRY_ID) WHERE ID = "
				+ id;
		
		String stateSql = "UPDATE ST_STUDENT U SET PERMANENT_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.PERMANENT_STATE_ID),PRESENT_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.PRESENT_STATE_ID),"
				+"UNDER_METRIC_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.UNDER_METRIC_STATE_ID),HIGH_SCHOOL_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.HIGH_SCHOOL_STATE_ID),"
				+"HIGHER_SECONDARY_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.HIGHER_SECONDARY_STATE_ID),GRADUATION_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.GRADUATION_STATE_ID),OTHER_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.OTHER_STATE_ID) WHERE ID = "
				+ id;
		
		String districtSql = "UPDATE ST_STUDENT U SET PERMANENT_DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.PERMANENT_DISTRICT_ID),PRESENT_DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.PRESENT_DISTRICT_ID),"
				+"UNDER_METRIC_DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.UNDER_METRIC_DISTRICT_ID),HIGH_SCHOOL_DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.HIGH_SCHOOL_DISTRICT_ID),"
				+"HIGHER_SECONDARY_STATE = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.HIGHER_SECONDARY_STATE_ID),GRADUATION_DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.GRADUATION_DISTRICT_ID),OTHER_DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.OTHER_DISTRICT_ID) WHERE ID = "
				+ id;
		String citySql = "UPDATE ST_STUDENT U SET PERMANENT_CITY = (SELECT NAME FROM CITY C WHERE C.ID = U.PERMANENT_CITY_ID),PRESENT_CITY = (SELECT NAME FROM CITY C WHERE C.ID = U.PRESENT_CITY_ID),"
				+"UNDER_METRIC_CITY = (SELECT NAME FROM CITY C WHERE C.ID = U.UNDER_METRIC_CITY_ID),HIGH_SCHOOL_CITY = (SELECT NAME FROM CITY C WHERE C.ID = U.HIGH_SCHOOL_CITY_ID),"
				+"HIGHER_SECONDARY_CITY = (SELECT NAME FROM CITY C WHERE C.ID = U.HIGHER_SECONDARY_CITY_ID),GRADUATION_CITY = (SELECT NAME FROM CITY C WHERE C.ID = U.GRADUATION_CITY_ID),OTHER_CITY = (SELECT NAME FROM CITY C WHERE C.ID = U.OTHER_CITY_ID) WHERE ID = "
				+ id;
		
		String postOfiiceSql = "UPDATE ST_STUDENT U SET PERMANENT_POST_OFFICE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.PERMANENT_POST_OFFICE_ID),PRESENT_POST_OFFICE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.PRESENT_POST_OFFICE_ID),"
				+"UNDER_METRIC_POST_OFFICE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.UNDER_METRIC_POST_OFFICE_ID),HIGH_SCHOOL_POST_OFFICE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.HIGH_SCHOOL_POST_OFFICE_ID),"
				+"HIGHER_SECONDARY_POST_OFFICE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.HIGHER_SECONDARY_POST_OFFICE_ID),GRADUATION_POST_OFFICE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.GRADUATION_POST_OFFICE_ID),OTHER_POST_OFFICE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.OTHER_POST_OFFICE_ID) WHERE ID = "
				+ id;

		
		String pincodeSql = "UPDATE ST_STUDENT U SET PERMANENT_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.PERMANENT_PIN_CODE_ID),PRESENT_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.PRESENT_PIN_CODE_ID),"
				+"UNDER_METRIC_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.UNDER_METRIC_PIN_CODE_ID),HIGH_SCHOOL_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.HIGH_SCHOOL_PIN_CODE_ID),"
				+"HIGHER_SECONDARY_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.HIGHER_SECONDARY_PIN_CODE_ID),GRADUATION_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.GRADUATION_PIN_CODE_ID),OTHER_PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.OTHER_PIN_CODE_ID) WHERE ID = "
				+ id;
		
		String languageSql = "UPDATE ST_STUDENT U SET OTHER_LANGUAGE = (SELECT NAME FROM LANGUAGE C WHERE C.ID = U.OTHER_LANGUAGE_ID) WHERE ID = "
				+ id;

		
		
		
		
		log.debug("Model update Started");

		Connection conn = null;

		try {
			conn = JDBCDataSource.getConnection();
			conn.setAutoCommit(false); // Begin transaction
			Statement stmt = conn.createStatement();
			stmt.executeUpdate(collegeSql);
			stmt.executeUpdate(deptSql);
			stmt.executeUpdate(trnSql);
			stmt.executeUpdate(countrySql);
			stmt.executeUpdate(stateSql);
			stmt.executeUpdate(districtSql);
			stmt.executeUpdate(citySql);
			stmt.executeUpdate(postOfiiceSql);
			stmt.executeUpdate(pincodeSql);
			stmt.executeUpdate(languageSql);
			
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
			sql = "UPDATE ST_STUDENT SET LEFT_PALM = '" + status
					+ "' WHERE ID = " + id;
		} else if ("R".equals(palmType)) {
			sql = "UPDATE ST_STUDENT  SET RIGHT_PALM = '" + status
					+ "' WHERE ID = " + id;
		}
		log.debug("Model update Started");

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
		return "ST_STUDENT";
	}
}