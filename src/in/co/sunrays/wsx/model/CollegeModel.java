package in.co.sunrays.wsx.model;

import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.common.model.UserModel;
import in.co.sunrays.util.JDBCDataSource;
import in.co.sunrays.util.ServletUtility;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.exception.DatabaseException;
import in.co.sunrays.wsx.exception.DuplicateRecordException;
import in.co.sunrays.wsx.exception.RecordNotFoundException;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.log4j.Logger;

public class CollegeModel extends BaseModel {
	private static Logger log = Logger.getLogger(CollegeModel.class);

	

	private String name;
	private String description;
	private String emailId;
	private String phoneNo;
	private String address;
	private String photo;
	
	private String companyName;
	private long industryId;
	private String industryName;
	private String houseNo;
	private String village;
	private String road;
	private long countryId;
	private String country;
	private long stateId;
	private String state;
	private long districtId;
	private String district;
	private long cityId;
	private String city;
	private long areaId;
	private String area;
	private long postOfficeId;
	private String postOffice;
	private long pinCodeId;
	private String pinCode;
	private String stdCodePhoneNoOne;
	private String stdCodePhoneNoTwo;
	private String phoneNoOne;
	private String phoneNoTwo;
	private String orgEmailIdOne;
	private String orgEmailIdTwo;
	
	private String shopLicenseNo;
	private String issueAuthority;
	Date shopValidFrom;
	Date shopValidTill;
	private String placeOfIssue;
	
	private String esicNo;
	private String esicIssuingAuthority;
	private long esicStateId;
	private String esicState;
	private long esicDistrictId;
	private String esicDistrict;
	private String esicPlace;
	private String epfAccNo;
	private String epfAuthority;
	private String epfPlace;
	private long epfStateId;
	private String epfState;
	private long epfDistrictId;
	private String epfDistrict;
	private String professionalTax;
	private String profTaxAuthority;
	private String profTaxPlace;
	private long profStateId;
	private String profState;
	private long profDistrictId;
	private String profDistrict;
	private String wcaNo;
	private Date wcaFrom;
	private Date wcaTo;
	private String wcaCompany;
	private String serviceTax;
	private String serviceTaxAuthority;
	private String serTaxPlace;
	private long serStateId;
	private String serState;
	private long serDistrictId;
	private String serDistrict;
	private String panCard;
	
	private String name1;
	private String name2;
	private String name3;
	private String name4;
	private String registrationNo1;
	private String registrationNo2;
	private String registrationNo3;
	private String registrationNo4;
	private String countryOne;
	private long countryOneId;
	private String countryTwo;
	private long countryTwoId;
	private String countryThree;
	private long countryThreeId;
	private String country4;
	private String stateOne;
	private long stateOneId;
	private String stateTwo;
	private long stateTwoId;
	private String stateThree;
	private long stateThreeId;
	private String state4;
	private long district1Id;
	private String district1;
	private long district2Id;
	private String district2;
	private long district3Id;
	private String district3;
	private long district4Id;
	private String district4;
	
	private String ownerName;
	private String ownerHouseFlatDoorBlockNo;
	private String	ownerAddress;
	private String ownerRoadStreetLane;
	
	private long  ownerCountryId;
	private String ownerCountry;
	private long  ownerStateId;
	private String ownerState;
	private long  ownerDistrictId;
	private String ownerDistrict;
	private long  ownerCityId;
	private String ownerCity;
	private long  ownerPostOfficeId;
	private String ownerPostOffice;
	private long ownerAreaId;
	private String ownerArea;
	private String ownerPinCode;
	private String ownerStdCodePhoneNo;
	private String ownerPhoneNo;
	private String ownerMobileNo;
	private String ownerEmail;
	private String contactPersonName;
	private String contactPersonMobileNo;
	private String contactPersonEmail;
	private long organizationId;
	private String organization;
	
	private long collegeId;
	
	
	
	
	public long getCollegeId() {
		return collegeId;
	}


	public void setCollegeId(long collegeId) {
		this.collegeId = collegeId;
	}


	public String getOrganization() {
		return organization;
	}


	public void setOrganization(String organization) {
		this.organization = organization;
	}


	public String getContactPersonName() {
		return contactPersonName;
	}


	public void setContactPersonName(String contactPersonName) {
		this.contactPersonName = contactPersonName;
	}


	public String getContactPersonMobileNo() {
		return contactPersonMobileNo;
	}


	public void setContactPersonMobileNo(String contactPersonMobileNo) {
		this.contactPersonMobileNo = contactPersonMobileNo;
	}


	public String getContactPersonEmail() {
		return contactPersonEmail;
	}


	public void setContactPersonEmail(String contactPersonEmail) {
		this.contactPersonEmail = contactPersonEmail;
	}


	public String getOwnerMobileNo() {
		return ownerMobileNo;
	}


	public void setOwnerMobileNo(String ownerMobileNo) {
		this.ownerMobileNo = ownerMobileNo;
	}


	public String getOwnerEmail() {
		return ownerEmail;
	}


	public void setOwnerEmail(String ownerEmail) {
		this.ownerEmail = ownerEmail;
	}


	public String getOwnerStdCodePhoneNo() {
		return ownerStdCodePhoneNo;
	}


	public void setOwnerStdCodePhoneNo(String ownerStdCodePhoneNo) {
		this.ownerStdCodePhoneNo = ownerStdCodePhoneNo;
	}


	public String getOwnerPhoneNo() {
		return ownerPhoneNo;
	}


	public void setOwnerPhoneNo(String ownerPhoneNo) {
		this.ownerPhoneNo = ownerPhoneNo;
	}


	public String getOwnerPinCode() {
		return ownerPinCode;
	}


	public void setOwnerPinCode(String ownerPinCode) {
		this.ownerPinCode = ownerPinCode;
	}


	public long getOwnerPostOfficeId() {
		return ownerPostOfficeId;
	}


	public void setOwnerPostOfficeId(long ownerPostOfficeId) {
		this.ownerPostOfficeId = ownerPostOfficeId;
	}


	public String getOwnerPostOffice() {
		return ownerPostOffice;
	}


	public void setOwnerPostOffice(String ownerPostOffice) {
		this.ownerPostOffice = ownerPostOffice;
	}


	public long getOwnerAreaId() {
		return ownerAreaId;
	}


	public void setOwnerAreaId(long ownerAreaId) {
		this.ownerAreaId = ownerAreaId;
	}


	public String getOwnerArea() {
		return ownerArea;
	}


	public void setOwnerArea(String ownerArea) {
		this.ownerArea = ownerArea;
	}


	public long getOwnerCountryId() {
		return ownerCountryId;
	}


	public void setOwnerCountryId(long ownerCountryId) {
		this.ownerCountryId = ownerCountryId;
	}


	public String getOwnerCountry() {
		return ownerCountry;
	}


	public void setOwnerCountry(String ownerCountry) {
		this.ownerCountry = ownerCountry;
	}


	public long getOwnerStateId() {
		return ownerStateId;
	}


	public void setOwnerStateId(long ownerStateId) {
		this.ownerStateId = ownerStateId;
	}


	public String getOwnerState() {
		return ownerState;
	}


	public void setOwnerState(String ownerState) {
		this.ownerState = ownerState;
	}


	public long getOwnerDistrictId() {
		return ownerDistrictId;
	}


	public void setOwnerDistrictId(long ownerDistrictId) {
		this.ownerDistrictId = ownerDistrictId;
	}


	public String getOwnerDistrict() {
		return ownerDistrict;
	}


	public void setOwnerDistrict(String ownerDistrict) {
		this.ownerDistrict = ownerDistrict;
	}


	public long getOwnerCityId() {
		return ownerCityId;
	}


	public void setOwnerCityId(long ownerCityId) {
		this.ownerCityId = ownerCityId;
	}


	public String getOwnerCity() {
		return ownerCity;
	}


	public void setOwnerCity(String ownerCity) {
		this.ownerCity = ownerCity;
	}


	public String getOwnerName() {
		return ownerName;
	}


	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}


	public String getOwnerHouseFlatDoorBlockNo() {
		return ownerHouseFlatDoorBlockNo;
	}


	public void setOwnerHouseFlatDoorBlockNo(String ownerHouseFlatDoorBlockNo) {
		this.ownerHouseFlatDoorBlockNo = ownerHouseFlatDoorBlockNo;
	}


	public String getOwnerAddress() {
		return ownerAddress;
	}


	public void setOwnerAddress(String ownerAddress) {
		this.ownerAddress = ownerAddress;
	}


	public String getOwnerRoadStreetLane() {
		return ownerRoadStreetLane;
	}


	public void setOwnerRoadStreetLane(String ownerRoadStreetLane) {
		this.ownerRoadStreetLane = ownerRoadStreetLane;
	}


	public long getDistrict4Id() {
		return district4Id;
	}


	public void setDistrict4Id(long district4Id) {
		this.district4Id = district4Id;
	}


	public String getDistrict4() {
		return district4;
	}


	public void setDistrict4(String district4) {
		this.district4 = district4;
	}


	public long getDistrict3Id() {
		return district3Id;
	}


	public void setDistrict3Id(long district3Id) {
		this.district3Id = district3Id;
	}


	public String getDistrict3() {
		return district3;
	}


	public void setDistrict3(String district3) {
		this.district3 = district3;
	}


	public long getDistrict2Id() {
		return district2Id;
	}


	public void setDistrict2Id(long district2Id) {
		this.district2Id = district2Id;
	}


	public String getDistrict2() {
		return district2;
	}


	public void setDistrict2(String district2) {
		this.district2 = district2;
	}


	public long getDistrict1Id() {
		return district1Id;
	}


	public void setDistrict1Id(long district1Id) {
		this.district1Id = district1Id;
	}


	public String getDistrict1() {
		return district1;
	}


	public void setDistrict1(String district1) {
		this.district1 = district1;
	}


	public String getState4() {
		return state4;
	}


	public void setState4(String state4) {
		this.state4 = state4;
	}


	public long getState4Id() {
		return state4Id;
	}


	public void setState4Id(long state4Id) {
		this.state4Id = state4Id;
	}

	private long state4Id;
	
	
	public String getStateThree() {
		return stateThree;
	}


	public void setStateThree(String stateThree) {
		this.stateThree = stateThree;
	}


	public long getStateThreeId() {
		return stateThreeId;
	}


	public void setStateThreeId(long stateThreeId) {
		this.stateThreeId = stateThreeId;
	}


	public String getStateTwo() {
		return stateTwo;
	}


	public void setStateTwo(String stateTwo) {
		this.stateTwo = stateTwo;
	}


	public long getStateTwoId() {
		return stateTwoId;
	}


	public void setStateTwoId(long stateTwoId) {
		this.stateTwoId = stateTwoId;
	}


	public String getStateOne() {
		return stateOne;
	}


	public void setStateOne(String stateOne) {
		this.stateOne = stateOne;
	}


	public long getStateOneId() {
		return stateOneId;
	}


	public void setStateOneId(long stateOneId) {
		this.stateOneId = stateOneId;
	}


	public long getCountryOneId() {
		return countryOneId;
	}


	public void setCountryOneId(long countryOneId) {
		this.countryOneId = countryOneId;
	}


	public long getCountryTwoId() {
		return countryTwoId;
	}


	public void setCountryTwoId(long countryTwoId) {
		this.countryTwoId = countryTwoId;
	}


	public long getCountryThreeId() {
		return countryThreeId;
	}


	public void setCountryThreeId(long countryThreeId) {
		this.countryThreeId = countryThreeId;
	}


	public long getCountry4Id() {
		return country4Id;
	}


	public void setCountry4Id(long country4Id) {
		this.country4Id = country4Id;
	}

	private long country4Id;

	public String getCountryOne() {
		return countryOne;
	}


	public void setCountryOne(String countryOne) {
		this.countryOne = countryOne;
	}


	public String getCountryTwo() {
		return countryTwo;
	}


	public void setCountryTwo(String countryTwo) {
		this.countryTwo = countryTwo;
	}


	public String getCountryThree() {
		return countryThree;
	}


	public void setCountryThree(String countryThree) {
		this.countryThree = countryThree;
	}


	public String getCountry4() {
		return country4;
	}


	public void setCountry4(String country4) {
		this.country4 = country4;
	}


	public String getRegistrationNo1() {
		return registrationNo1;
	}


	public void setRegistrationNo1(String registrationNo1) {
		this.registrationNo1 = registrationNo1;
	}


	public String getRegistrationNo2() {
		return registrationNo2;
	}


	public void setRegistrationNo2(String registrationNo2) {
		this.registrationNo2 = registrationNo2;
	}


	public String getRegistrationNo3() {
		return registrationNo3;
	}


	public void setRegistrationNo3(String registrationNo3) {
		this.registrationNo3 = registrationNo3;
	}


	public String getRegistrationNo4() {
		return registrationNo4;
	}


	public void setRegistrationNo4(String registrationNo4) {
		this.registrationNo4 = registrationNo4;
	}


	public String getName1() {
		return name1;
	}


	public void setName1(String name1) {
		this.name1 = name1;
	}


	public String getName2() {
		return name2;
	}


	public void setName2(String name2) {
		this.name2 = name2;
	}


	public String getName3() {
		return name3;
	}


	public void setName3(String name3) {
		this.name3 = name3;
	}


	public String getName4() {
		return name4;
	}


	public void setName4(String name4) {
		this.name4 = name4;
	}


	public String getProfessionalTax() {
		return professionalTax;
	}


	public void setProfessionalTax(String professionalTax) {
		this.professionalTax = professionalTax;
	}
	public String getEsicNo() {
		return esicNo;
	}


	public String getServiceTax() {
		return serviceTax;
	}

	public void setServiceTax(String serviceTax) {
		this.serviceTax = serviceTax;
	}

	public void setEsicNo(String esicNo) {
		this.esicNo = esicNo;
	}

	public String getEsicIssuingAuthority() {
		return esicIssuingAuthority;
	}

	public void setEsicIssuingAuthority(String esicIssuingAuthority) {
		this.esicIssuingAuthority = esicIssuingAuthority;
	}

	public long getEsicStateId() {
		return esicStateId;
	}

	public void setEsicStateId(long esicStateId) {
		this.esicStateId = esicStateId;
	}

	public String getEsicState() {
		return esicState;
	}

	public void setEsicState(String esicState) {
		this.esicState = esicState;
	}

	public long getEsicDistrictId() {
		return esicDistrictId;
	}

	public void setEsicDistrictId(long esicDistrictId) {
		this.esicDistrictId = esicDistrictId;
	}

	public String getEsicDistrict() {
		return esicDistrict;
	}

	public void setEsicDistrict(String esicDistrict) {
		this.esicDistrict = esicDistrict;
	}

	public String getEsicPlace() {
		return esicPlace;
	}

	public void setEsicPlace(String esicPlace) {
		this.esicPlace = esicPlace;
	}

	public String getEpfAccNo() {
		return epfAccNo;
	}

	public void setEpfAccNo(String epfAccNo) {
		this.epfAccNo = epfAccNo;
	}

	public String getEpfAuthority() {
		return epfAuthority;
	}

	public void setEpfAuthority(String epfAuthority) {
		this.epfAuthority = epfAuthority;
	}

	public String getEpfPlace() {
		return epfPlace;
	}

	public void setEpfPlace(String epfPlace) {
		this.epfPlace = epfPlace;
	}

	public long getEpfStateId() {
		return epfStateId;
	}

	public void setEpfStateId(long epfStateId) {
		this.epfStateId = epfStateId;
	}

	public String getEpfState() {
		return epfState;
	}

	public void setEpfState(String epfState) {
		this.epfState = epfState;
	}

	public long getEpfDistrictId() {
		return epfDistrictId;
	}

	public void setEpfDistrictId(long epfDistrictId) {
		this.epfDistrictId = epfDistrictId;
	}

	public String getEpfDistrict() {
		return epfDistrict;
	}

	public void setEpfDistrict(String epfDistrict) {
		this.epfDistrict = epfDistrict;
	}



	public String getProfTaxAuthority() {
		return profTaxAuthority;
	}

	public void setProfTaxAuthority(String profTaxAuthority) {
		this.profTaxAuthority = profTaxAuthority;
	}

	public String getProfTaxPlace() {
		return profTaxPlace;
	}

	public void setProfTaxPlace(String profTaxPlace) {
		this.profTaxPlace = profTaxPlace;
	}

	public long getProfStateId() {
		return profStateId;
	}

	public void setProfStateId(long profStateId) {
		this.profStateId = profStateId;
	}

	public String getProfState() {
		return profState;
	}

	public void setProfState(String profState) {
		this.profState = profState;
	}

	public long getProfDistrictId() {
		return profDistrictId;
	}

	public void setProfDistrictId(long profDistrictId) {
		this.profDistrictId = profDistrictId;
	}

	public String getProfDistrict() {
		return profDistrict;
	}

	public void setProfDistrict(String profDistrict) {
		this.profDistrict = profDistrict;
	}

	public String getWcaNo() {
		return wcaNo;
	}

	public void setWcaNo(String wcaNo) {
		this.wcaNo = wcaNo;
	}

	public Date getWcaFrom() {
		return wcaFrom;
	}

	public void setWcaFrom(Date wcaFrom) {
		this.wcaFrom = wcaFrom;
	}

	public Date getWcaTo() {
		return wcaTo;
	}

	public void setWcaTo(Date wcaTo) {
		this.wcaTo = wcaTo;
	}

	public String getWcaCompany() {
		return wcaCompany;
	}

	public void setWcaCompany(String wcaCompany) {
		this.wcaCompany = wcaCompany;
	}

	public String getServiceTaxAuthority() {
		return serviceTaxAuthority;
	}

	public void setServiceTaxAuthority(String serviceTaxAuthority) {
		this.serviceTaxAuthority = serviceTaxAuthority;
	}

	public String getSerTaxPlace() {
		return serTaxPlace;
	}

	public void setSerTaxPlace(String serTaxPlace) {
		this.serTaxPlace = serTaxPlace;
	}

	public long getSerStateId() {
		return serStateId;
	}

	public void setSerStateId(long serStateId) {
		this.serStateId = serStateId;
	}

	public String getSerState() {
		return serState;
	}

	public void setSerState(String serState) {
		this.serState = serState;
	}

	public long getSerDistrictId() {
		return serDistrictId;
	}

	public void setSerDistrictId(long serDistrictId) {
		this.serDistrictId = serDistrictId;
	}

	public String getSerDistrict() {
		return serDistrict;
	}

	public void setSerDistrict(String serDistrict) {
		this.serDistrict = serDistrict;
	}

	public String getPanCard() {
		return panCard;
	}

	public void setPanCard(String panCard) {
		this.panCard = panCard;
	}

	public String getStdCodePhoneNoOne() {
		return stdCodePhoneNoOne;
	}

	public String getShopLicenseNo() {
		return shopLicenseNo;
	}

	public void setShopLicenseNo(String shopLicenseNo) {
		this.shopLicenseNo = shopLicenseNo;
	}

	public String getIssueAuthority() {
		return issueAuthority;
	}

	public void setIssueAuthority(String issueAuthority) {
		this.issueAuthority = issueAuthority;
	}

	public Date getShopValidFrom() {
		return shopValidFrom;
	}

	public void setShopValidFrom(Date shopValidFrom) {
		this.shopValidFrom = shopValidFrom;
	}

	public Date getShopValidTill() {
		return shopValidTill;
	}

	public void setShopValidTill(Date shopValidTill) {
		this.shopValidTill = shopValidTill;
	}

	public String getPlaceOfIssue() {
		return placeOfIssue;
	}

	public void setPlaceOfIssue(String placeOfIssue) {
		this.placeOfIssue = placeOfIssue;
	}

	public void setStdCodePhoneNoOne(String stdCodePhoneNoOne) {
		this.stdCodePhoneNoOne = stdCodePhoneNoOne;
	}

	public String getStdCodePhoneNoTwo() {
		return stdCodePhoneNoTwo;
	}

	public void setStdCodePhoneNoTwo(String stdCodePhoneNoTwo) {
		this.stdCodePhoneNoTwo = stdCodePhoneNoTwo;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public long getIndustryId() {
		return industryId;
	}

	public void setIndustryId(long industryId) {
		this.industryId = industryId;
	}

	public String getIndustryName() {
		return industryName;
	}

	public void setIndustryName(String industryName) {
		this.industryName = industryName;
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

	public long getCountryId() {
		return countryId;
	}

	public void setCountryId(long countryId) {
		this.countryId = countryId;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public long getStateId() {
		return stateId;
	}

	public void setStateId(long stateId) {
		this.stateId = stateId;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public long getDistrictId() {
		return districtId;
	}

	public void setDistrictId(long districtId) {
		this.districtId = districtId;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public long getCityId() {
		return cityId;
	}

	public void setCityId(long cityId) {
		this.cityId = cityId;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public long getAreaId() {
		return areaId;
	}

	public void setAreaId(long areaId) {
		this.areaId = areaId;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public long getPostOfficeId() {
		return postOfficeId;
	}

	public void setPostOfficeId(long postOfficeId) {
		this.postOfficeId = postOfficeId;
	}

	public String getPostOffice() {
		return postOffice;
	}

	public void setPostOffice(String postOffice) {
		this.postOffice = postOffice;
	}

	public long getPinCodeId() {
		return pinCodeId;
	}

	public void setPinCodeId(long pinCodeId) {
		this.pinCodeId = pinCodeId;
	}

	public String getPinCode() {
		return pinCode;
	}

	public void setPinCode(String pinCode) {
		this.pinCode = pinCode;
	}

	public String getPhoneNoOne() {
		return phoneNoOne;
	}

	public void setPhoneNoOne(String phoneNoOne) {
		this.phoneNoOne = phoneNoOne;
	}

	public String getPhoneNoTwo() {
		return phoneNoTwo;
	}

	public void setPhoneNoTwo(String phoneNoTwo) {
		this.phoneNoTwo = phoneNoTwo;
	}

	public String getOrgEmailIdOne() {
		return orgEmailIdOne;
	}

	public void setOrgEmailIdOne(String orgEmailIdOne) {
		this.orgEmailIdOne = orgEmailIdOne;
	}

	public String getOrgEmailIdTwo() {
		return orgEmailIdTwo;
	}

	public void setOrgEmailIdTwo(String orgEmailIdTwo) {
		this.orgEmailIdTwo = orgEmailIdTwo;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

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
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	

	public long getOrganizationId() {
		return organizationId;
	}


	public void setOrganizationId(long organizationId) {
		this.organizationId = organizationId;
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
		CollegeModel collegeData = findByName(name);
		Connection conn = null;
		long pk = 0;
		if (collegeData != null) {
		
			throw new DuplicateRecordException("College name allready exists !");
		}
		try {
				conn = JDBCDataSource.getConnection();
				pk = nextPK();
				// Get auto-generated next primary key
				System.out.println(pk + " in ModelJDBC");
				conn.setAutoCommit(false); // Begin transaction
				PreparedStatement pstmt = conn
						.prepareStatement("INSERT INTO ST_COLLEGE(ID,COMPANY_NAME,INDUSTRY_ID,HOUSE_NO,VILLAGE,ROAD,COUNTRY_ID,STATE_ID,DISTRICT_ID,CITY_ID,AREA_ID,"+
								"POST_OFFICE_ID,PIN_CODE_ID,STD_CODE_ONE,PHONE_NO_ONE,STD_CODE_TWO,PHONE_NO_TWO,ORG_EMAIL_ID_ONE,ORG_EMAIL_ID_TWO,SHOP_LICENCE_NO,ISSUE_AUTHORITY,"+
								"SHOP_VALID_FORM,SHOP_VALID_TILL,PLACE_OF_ISSUE,ESIC_NO,ESIC_ISSUE_AUTHORITY,ESIC_STATE_ID,ESIC_DISTRICT_ID,ESIC_PLACE,EPF_ACCNO,EPF_AUTHORITY," +
								"EPF_PLACE,EPF_STATE_ID,EPF_DISTRICT_ID,PROFESSIONAL_TAX,PROF_TAX_AUTHORITY,PROF_TAX_PLACE,PROF_STATE_ID,PROF_DISTRICT_ID,WCA_NO,WCA_FROM," +
								"WCA_TO,WCA_COMPANY,SERVICE_TAX,SERVICE_TAX_AUTHORITY,SER_TAX_PLACE,SER_STATE_ID,SER_DISTRICT_ID,PAN_CARD," +
								"NAME_ONE,REGISTRATION_NO_ONE,COUNTRY_ONE_ID,STATE_ONE_ID,DISTRICT_ONE_ID,NAME_TWO,REGISTRATION_NO_TWO,COUNTRY_TWO_ID,STATE_TWO_ID,DISTRICT_TWO_ID,"+
								"NAME_THREE,REGISTRATION_NO_THREE,COUNTRY_THREE_ID,STATE_THREE_ID,DISTRICT_THRTEE_ID,NAME_FOUR,REGISTRATION_NO_FOUR,COUNTRY_FOUR_ID,STATE_FOUR_ID,DISTRICT_FOUR_ID,"+
								"OWNER_NAME,OWNER_HOUSE_FLAT_DOOR_BLOCK_NO,OWNER_ADDRESS,OWNER_ROAD_STREET_LANE,OWNER_COUNTRY_ID,OWNER_STATE_ID,OWNER_DISTRICT_ID,OWNER_CITY_ID,OWNER_POST_OFFICE_ID,OWNER_AREA_ID,"+
								"OWNER_PIN_CODE,OWNER_STD_CODE_PHONE_NO,OWNER_PHONE_NO,OWNER_MOBILE_NO,OWNER_EMAIL,"+
								"CONTACT_PERSON_NAME,CONTACT_PERSON_EMAIL,CONTACT_PERSON_MOBILE_NO,ORGANIZATION_ID) " +
								"VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
				
				
				pstmt.setLong(1, pk);
				pstmt.setString(2, companyName);
				pstmt.setLong(3, industryId);
				pstmt.setString(4, houseNo);
				pstmt.setString(5, village);
				pstmt.setString(6, road);
				pstmt.setLong(7, countryId);
				pstmt.setLong(8, stateId);
				pstmt.setLong(9, districtId);
				pstmt.setLong(10, cityId);
				pstmt.setLong(11, areaId);
				pstmt.setLong(12, postOfficeId);
				pstmt.setLong(13, pinCodeId);
				pstmt.setString(14, stdCodePhoneNoOne);
				pstmt.setString(15, phoneNoOne);
				pstmt.setString(16, stdCodePhoneNoTwo);
				pstmt.setString(17, phoneNoTwo);
				pstmt.setString(18, orgEmailIdOne);
				pstmt.setString(19, orgEmailIdTwo);
				pstmt.setString(20, shopLicenseNo);
				pstmt.setString(21, issueAuthority);
				
				if(shopValidFrom!=null){
					pstmt.setDate(22,  new java.sql.Date(shopValidFrom.getTime()));
				}else{
					pstmt.setDate(22, (java.sql.Date) shopValidFrom);
				}
				if(shopValidTill!=null){
					pstmt.setDate(23,  new java.sql.Date(shopValidTill.getTime()));
				}else{
					pstmt.setDate(23, (java.sql.Date) shopValidTill);
				}

				pstmt.setString(24, placeOfIssue);
	
				pstmt.setString(25, esicNo);
				pstmt.setString(26, esicIssuingAuthority);
				pstmt.setLong(27, esicStateId);
				pstmt.setLong(28, esicDistrictId);
				pstmt.setString(29, esicPlace);
				pstmt.setString(30, epfAccNo);
				pstmt.setString(31, epfAuthority);
				pstmt.setString(32, epfPlace);
				pstmt.setLong(33, epfStateId);
				pstmt.setLong(34, epfDistrictId);
				pstmt.setString(35, professionalTax);
				pstmt.setString(36, profTaxAuthority);
				pstmt.setString(37, profTaxPlace);
				pstmt.setLong(38, profStateId);
				pstmt.setLong(39, profDistrictId);
				pstmt.setString(40, wcaNo);
				if(wcaFrom!=null){
					pstmt.setDate(41,  new java.sql.Date(wcaFrom.getTime()));
				}else{
					pstmt.setDate(41, (java.sql.Date) wcaFrom);
				}
				if(wcaTo!=null){
					pstmt.setDate(42,  new java.sql.Date(wcaTo.getTime()));
				}else{
					pstmt.setDate(42, (java.sql.Date) wcaTo);
				}
				pstmt.setString(43, wcaCompany);
				pstmt.setString(44, serviceTax);
				
				pstmt.setString(45, serviceTaxAuthority);
				pstmt.setString(46, serTaxPlace);
				pstmt.setLong(47, serStateId);
				pstmt.setLong(48, serDistrictId);
				pstmt.setString(49, panCard);
	
				pstmt.setString(50, name1);
				pstmt.setString(51, registrationNo1);
				pstmt.setLong(52, countryOneId);
				pstmt.setLong(53, stateOneId);
				pstmt.setLong(54, district1Id);
				pstmt.setString(55, name2);
				pstmt.setString(56, registrationNo2);
				pstmt.setLong(57, countryTwoId);
				pstmt.setLong(58, stateTwoId);
				pstmt.setLong(59, district2Id);
				pstmt.setString(60, name3);
				pstmt.setString(61, registrationNo3);
				pstmt.setLong(62, countryThreeId);
				pstmt.setLong(63, stateThreeId);
				pstmt.setLong(64, district3Id);
				pstmt.setString(65, name4);
				pstmt.setString(66, registrationNo4);
				pstmt.setLong(67, country4Id);
				pstmt.setLong(68, state4Id);
				pstmt.setLong(69, district4Id);
				
				pstmt.setString(70, ownerName);
				pstmt.setString(71, ownerHouseFlatDoorBlockNo);
				pstmt.setString(72, ownerAddress);
				pstmt.setString(73, ownerRoadStreetLane);
				pstmt.setLong(74, ownerCountryId);
				pstmt.setLong(75, ownerStateId);
				pstmt.setLong(76, ownerDistrictId);
				pstmt.setLong(77, ownerCityId);
				pstmt.setLong(78, ownerPostOfficeId);
				pstmt.setLong(79, ownerAreaId);
				pstmt.setString(80, ownerPinCode);
				pstmt.setString(81, ownerStdCodePhoneNo);
				pstmt.setString(82, ownerPhoneNo);
				pstmt.setString(83, ownerMobileNo);
				pstmt.setString(84, ownerEmail);
				
				pstmt.setString(85, contactPersonName);
				pstmt.setString(86, contactPersonEmail);
				pstmt.setString(87, contactPersonMobileNo);
				System.out.println("organizationId"+ organizationId);
				pstmt.setLong(88, organizationId);
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
					.prepareStatement("DELETE FROM ST_COLLEGE WHERE ID=?");

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

	public CollegeModel findByPK(long pk) throws ApplicationException {
		log.debug("Model findByPK Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_COLLEGE  WHERE ID=?");

		CollegeModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setLong(1, pk);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = new CollegeModel();
				model.setId(rs.getLong(1));
				model.setCompanyName(rs.getString(2));
				model.setIndustryId(rs.getLong(3));
				model.setIndustryName(rs.getString(4));
				model.setHouseNo(rs.getString(5));
				model.setVillage(rs.getString(6));
				model.setRoad(rs.getString(7));
				model.setCountryId(rs.getLong(8));
				model.setCountry(rs.getString(9));
				model.setStateId(rs.getLong(10));
				model.setState(rs.getString(11));
				model.setDistrictId(rs.getLong(12));
				model.setDistrict(rs.getString(13));
				model.setCityId(rs.getLong(14));
				model.setCity(rs.getString(15));
				model.setAreaId(rs.getLong(16));
				model.setArea(rs.getString(17));
				model.setPostOfficeId(rs.getLong(18));
				model.setPostOffice(rs.getString(19));
				model.setPinCodeId(rs.getLong(20));
				model.setPinCode(rs.getString(21));
				
				model.setStdCodePhoneNoOne(rs.getString(22));
				model.setPhoneNoOne(rs.getString(23));
				model.setStdCodePhoneNoTwo(rs.getString(24));
				model.setPhoneNoTwo(rs.getString(25));
				model.setOrgEmailIdOne(rs.getString(26));
				model.setOrgEmailIdTwo(rs.getString(27));
				model.setShopLicenseNo(rs.getString(28));
				model.setIssueAuthority(rs.getString(29));
				model.setShopValidFrom(rs.getDate(30));
				model.setShopValidTill(rs.getDate(31));
				model.setPlaceOfIssue(rs.getString(32));
				
				model.setEsicNo(rs.getString(33));
				model.setEsicIssuingAuthority(rs.getString(34));
				model.setEsicStateId(rs.getLong(35));
				model.setEsicState(rs.getString(36));
				model.setEsicDistrictId(rs.getLong(37));
				model.setEsicDistrict(rs.getString(38));
				model.setEsicPlace(rs.getString(39));
				model.setEpfAccNo(rs.getString(40));
				model.setEpfAuthority(rs.getString(41));
				model.setEpfPlace(rs.getString(42));
				model.setEpfStateId(rs.getLong(43));
				model.setEpfState(rs.getString(44));
				model.setEpfDistrictId(rs.getLong(45));
				model.setEpfDistrict(rs.getString(46));
				model.setProfessionalTax(rs.getString(47));
				model.setProfTaxAuthority(rs.getString(48));
				model.setProfTaxPlace(rs.getString(49));
				model.setProfStateId(rs.getLong(50));
				model.setProfState(rs.getString(51));
				model.setProfDistrictId(rs.getLong(52));
				model.setProfDistrict(rs.getString(53));
				model.setWcaNo(rs.getString(54));
				model.setWcaFrom(rs.getDate(55));
				model.setWcaTo(rs.getDate(56));
				model.setWcaCompany(rs.getString(57));
				model.setServiceTax(rs.getString(58));
				model.setServiceTaxAuthority(rs.getString(59));
				model.setSerTaxPlace(rs.getString(60));
				model.setSerStateId(rs.getLong(61));
				model.setSerState(rs.getString(62));
				model.setSerDistrictId(rs.getLong(63));
				model.setSerDistrict(rs.getString(64));
				model.setPanCard(rs.getString(65));
				
				model.setName1(rs.getString(66));
				model.setRegistrationNo1(rs.getString(67));
				model.setCountryOneId(rs.getLong(68));
				model.setCountryOne(rs.getString(69));
				model.setStateOneId(rs.getLong(70));
				model.setStateOne(rs.getString(71));
				model.setDistrict1Id(rs.getLong(72));
				model.setDistrict1(rs.getString(73));
				model.setName2(rs.getString(74));
				model.setRegistrationNo2(rs.getString(75));
				model.setCountryTwoId(rs.getLong(76));
				model.setCountryTwo(rs.getString(77));
				model.setStateTwoId(rs.getLong(78));
				model.setStateTwo(rs.getString(79));
				model.setDistrict2Id(rs.getLong(80));
				model.setDistrict2(rs.getString(81));
				model.setName3(rs.getString(82));
				model.setRegistrationNo3(rs.getString(83));
				model.setCountryThreeId(rs.getLong(84));
				model.setCountryThree(rs.getString(85));
				model.setStateThreeId(rs.getLong(86));
				model.setStateThree(rs.getString(87));
				model.setDistrict3Id(rs.getLong(88));
				model.setDistrict3(rs.getString(89));
				model.setName4(rs.getString(90));
				model.setRegistrationNo4(rs.getString(91));
				model.setCountry4Id(rs.getLong(92));
				model.setCountry4(rs.getString(93));
				model.setState4Id(rs.getLong(94));
				model.setState4(rs.getString(95));
				model.setDistrict4Id(rs.getLong(96));
				model.setDistrict4(rs.getString(97));
				
				model.setOwnerName(rs.getString(98));
				model.setOwnerHouseFlatDoorBlockNo(rs.getString(99));
				model.setOwnerAddress(rs.getString(100));
				model.setOwnerRoadStreetLane(rs.getString(101));
				model.setOwnerCountryId(rs.getLong(102));
				model.setOwnerCountry(rs.getString(103));
				model.setOwnerStateId(rs.getLong(104));
				model.setOwnerState(rs.getString(105));
				model.setOwnerDistrictId(rs.getLong(106));
				model.setOwnerDistrict(rs.getString(107));
				model.setOwnerCityId(rs.getLong(108));
				model.setOwnerCity(rs.getString(109));
				model.setOwnerPostOfficeId(rs.getLong(110));
				model.setOwnerPostOffice(rs.getString(111));
				model.setOwnerAreaId(rs.getLong(112));
				model.setOwnerArea(rs.getString(113));
				model.setOwnerPinCode(rs.getString(114));
				model.setOwnerStdCodePhoneNo(rs.getString(115));
				model.setOwnerPhoneNo(rs.getString(116));
				model.setOwnerMobileNo(rs.getString(117));
				model.setOwnerEmail(rs.getString(118));
				
				model.setContactPersonName(rs.getString(119));
				model.setContactPersonEmail(rs.getString(120));
				model.setContactPersonMobileNo(rs.getString(121));	
				model.setOrganizationId(rs.getLong(122));	
				model.setOrganization(rs.getString(123));	
				model.setPhoto(rs.getString(128));
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
	 * Find Training by Name
	 * 
	 * @param pk
	 *            : get parameter
	 * @return bean
	 * @throws DatabaseException
	 */

	public CollegeModel findByName(String name) throws ApplicationException {
		log.debug("Model findByPK Started");
		StringBuffer sql = new StringBuffer(
				"SELECT * FROM ST_COLLEGE  WHERE COMPANY_NAME=?");

		CollegeModel model = null;
		Connection conn = null;
		try {
			conn = JDBCDataSource.getConnection();
			PreparedStatement pstmt = conn.prepareStatement(sql.toString());
			pstmt.setString(1, name);
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) {
				model = new CollegeModel();
				model.setId(rs.getLong(1));
				model.setCompanyName(rs.getString(2));
				model.setIndustryId(rs.getLong(3));
				model.setIndustryName(rs.getString(4));
				model.setHouseNo(rs.getString(5));
				model.setVillage(rs.getString(6));
				model.setRoad(rs.getString(7));
				model.setCountryId(rs.getLong(8));
				model.setCountry(rs.getString(9));
				model.setStateId(rs.getLong(10));
				model.setState(rs.getString(11));
				model.setDistrictId(rs.getLong(12));
				model.setDistrict(rs.getString(13));
				model.setCityId(rs.getLong(14));
				model.setCity(rs.getString(15));
				model.setAreaId(rs.getLong(16));
				model.setArea(rs.getString(17));
				model.setPostOfficeId(rs.getLong(18));
				model.setPostOffice(rs.getString(19));
				model.setPinCodeId(rs.getLong(20));
				model.setPinCode(rs.getString(21));
				
				model.setStdCodePhoneNoOne(rs.getString(22));
				model.setPhoneNoOne(rs.getString(23));
				model.setStdCodePhoneNoTwo(rs.getString(24));
				model.setPhoneNoTwo(rs.getString(25));
				model.setOrgEmailIdOne(rs.getString(26));
				model.setOrgEmailIdTwo(rs.getString(27));
				model.setShopLicenseNo(rs.getString(28));
				model.setIssueAuthority(rs.getString(29));
				model.setShopValidFrom(rs.getDate(30));
				model.setShopValidTill(rs.getDate(31));
				model.setPlaceOfIssue(rs.getString(32));
				
				model.setEsicNo(rs.getString(33));
				model.setEsicIssuingAuthority(rs.getString(34));
				model.setEsicStateId(rs.getLong(35));
				model.setEsicState(rs.getString(36));
				model.setEsicDistrictId(rs.getLong(37));
				model.setEsicDistrict(rs.getString(38));
				model.setEsicPlace(rs.getString(39));
				model.setEpfAccNo(rs.getString(40));
				model.setEpfAuthority(rs.getString(41));
				model.setEpfPlace(rs.getString(42));
				model.setEpfStateId(rs.getLong(43));
				model.setEpfState(rs.getString(44));
				model.setEpfDistrictId(rs.getLong(45));
				model.setEpfDistrict(rs.getString(46));
				model.setProfessionalTax(rs.getString(47));
				model.setProfTaxAuthority(rs.getString(48));
				model.setProfTaxPlace(rs.getString(49));
				model.setProfStateId(rs.getLong(50));
				model.setProfState(rs.getString(51));
				model.setProfDistrictId(rs.getLong(52));
				model.setProfDistrict(rs.getString(53));
				model.setWcaNo(rs.getString(54));
				model.setWcaFrom(rs.getDate(55));
				model.setWcaTo(rs.getDate(56));
				model.setWcaCompany(rs.getString(57));
				model.setServiceTax(rs.getString(58));
				model.setServiceTaxAuthority(rs.getString(59));
				model.setSerTaxPlace(rs.getString(60));
				model.setSerStateId(rs.getLong(61));
				model.setSerState(rs.getString(62));
				model.setSerDistrictId(rs.getLong(63));
				model.setSerDistrict(rs.getString(64));
				model.setPanCard(rs.getString(65));
				
				model.setName1(rs.getString(66));
				model.setRegistrationNo1(rs.getString(67));
				model.setCountryOneId(rs.getLong(68));
				model.setCountryOne(rs.getString(69));
				model.setStateOneId(rs.getLong(70));
				model.setStateOne(rs.getString(71));
				model.setDistrict1Id(rs.getLong(72));
				model.setDistrict1(rs.getString(73));
				model.setName2(rs.getString(74));
				model.setRegistrationNo2(rs.getString(75));
				model.setCountryTwoId(rs.getLong(76));
				model.setCountryTwo(rs.getString(77));
				model.setStateTwoId(rs.getLong(78));
				model.setStateTwo(rs.getString(79));
				model.setDistrict2Id(rs.getLong(80));
				model.setDistrict2(rs.getString(81));
				model.setName3(rs.getString(82));
				model.setRegistrationNo3(rs.getString(83));
				model.setCountryThreeId(rs.getLong(84));
				model.setCountryThree(rs.getString(85));
				model.setStateThreeId(rs.getLong(86));
				model.setStateThree(rs.getString(87));
				model.setDistrict3Id(rs.getLong(88));
				model.setDistrict3(rs.getString(89));
				model.setName4(rs.getString(90));
				model.setRegistrationNo4(rs.getString(91));
				model.setCountry4Id(rs.getLong(92));
				model.setCountry4(rs.getString(93));
				model.setState4Id(rs.getLong(94));
				model.setState4(rs.getString(95));
				model.setDistrict4Id(rs.getLong(96));
				model.setDistrict4(rs.getString(97));
				
				model.setOwnerName(rs.getString(98));
				model.setOwnerHouseFlatDoorBlockNo(rs.getString(99));
				model.setOwnerAddress(rs.getString(100));
				model.setOwnerRoadStreetLane(rs.getString(101));
				model.setOwnerCountryId(rs.getLong(102));
				model.setOwnerCountry(rs.getString(103));
				model.setOwnerStateId(rs.getLong(104));
				model.setOwnerState(rs.getString(105));
				model.setOwnerDistrictId(rs.getLong(106));
				model.setOwnerDistrict(rs.getString(107));
				model.setOwnerCityId(rs.getLong(108));
				model.setOwnerCity(rs.getString(109));
				model.setOwnerPostOfficeId(rs.getLong(110));
				model.setOwnerPostOffice(rs.getString(111));
				model.setOwnerAreaId(rs.getLong(112));
				model.setOwnerArea(rs.getString(113));
				model.setOwnerPinCode(rs.getString(114));
				model.setOwnerStdCodePhoneNo(rs.getString(115));
				model.setOwnerPhoneNo(rs.getString(116));
				model.setOwnerMobileNo(rs.getString(117));
				model.setOwnerEmail(rs.getString(118));
				
				model.setContactPersonName(rs.getString(119));
				model.setContactPersonEmail(rs.getString(120));
				model.setContactPersonMobileNo(rs.getString(121));
				model.setOrganizationId(rs.getLong(122));	
				model.setOrganization(rs.getString(123));	
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
		
		CollegeModel collegeData = findByName(name);
		
		//Check duplicate college name 
		
		if (collegeData != null && collegeData.getId() != id) {
			
			throw new DuplicateRecordException("College name all ready  exists !");
		}
		
		
		Connection conn = null;
		try {

			conn = JDBCDataSource.getConnection();

			conn.setAutoCommit(false); // Begin transaction
			PreparedStatement pstmt = conn
					.prepareStatement("UPDATE ST_COLLEGE SET COMPANY_NAME=?,INDUSTRY_ID=?,HOUSE_NO=?,VILLAGE=?,ROAD=?,COUNTRY_ID=?,STATE_ID=?,DISTRICT_ID=?,CITY_ID=?,AREA_ID=?," +
							"POST_OFFICE_ID=?,PIN_CODE_ID=?,STD_CODE_ONE=?,PHONE_NO_ONE=?,STD_CODE_TWO=?,PHONE_NO_TWO=?,ORG_EMAIL_ID_ONE=?,ORG_EMAIL_ID_TWO=?,SHOP_LICENCE_NO=?,ISSUE_AUTHORITY=?,"+
							"SHOP_VALID_FORM=?,SHOP_VALID_TILL=?,PLACE_OF_ISSUE=?,ESIC_NO=?,ESIC_ISSUE_AUTHORITY=?,ESIC_STATE_ID=?,ESIC_DISTRICT_ID=?,ESIC_PLACE=?,EPF_ACCNO=?,EPF_AUTHORITY=?," +
							"EPF_PLACE=?,EPF_STATE_ID=?,EPF_DISTRICT_ID=?,PROFESSIONAL_TAX=?,PROF_TAX_AUTHORITY=?,PROF_TAX_PLACE=?,PROF_STATE_ID=?,PROF_DISTRICT_ID=?,WCA_NO=?,WCA_FROM=?," +
							"WCA_TO=?,WCA_COMPANY=?,SERVICE_TAX=?,SERVICE_TAX_AUTHORITY=?,SER_TAX_PLACE=?,SER_STATE_ID=?,SER_DISTRICT_ID=?,PAN_CARD=?," +
							"NAME_ONE=?,REGISTRATION_NO_ONE=?,COUNTRY_ONE_ID=?,STATE_ONE_ID=?,DISTRICT_ONE_ID=?,NAME_TWO=?,REGISTRATION_NO_TWO=?,COUNTRY_TWO_ID=?,STATE_TWO_ID=?,DISTRICT_TWO_ID=?,"+
							"NAME_THREE=?,REGISTRATION_NO_THREE=?,COUNTRY_THREE_ID=?,STATE_THREE_ID=?,DISTRICT_THRTEE_ID=?,NAME_FOUR=?,REGISTRATION_NO_FOUR=?,COUNTRY_FOUR_ID=?,STATE_FOUR_ID=?,DISTRICT_FOUR_ID=?,"+
							"OWNER_NAME=?,OWNER_HOUSE_FLAT_DOOR_BLOCK_NO=?,OWNER_ADDRESS=?,OWNER_ROAD_STREET_LANE=?,OWNER_COUNTRY_ID=?,OWNER_STATE_ID=?,OWNER_DISTRICT_ID=?,OWNER_CITY_ID=?,OWNER_POST_OFFICE_ID=?,OWNER_AREA_ID=?,"+
							"OWNER_PIN_CODE=?,OWNER_STD_CODE_PHONE_NO=?,OWNER_PHONE_NO=?,OWNER_MOBILE_NO=?,OWNER_EMAIL=?,"+
							"CONTACT_PERSON_NAME=?,CONTACT_PERSON_EMAIL=?,CONTACT_PERSON_MOBILE_NO=?,ORGANIZATION_ID=? WHERE ID=?");

			pstmt.setString(1, companyName);
			pstmt.setLong(2, industryId);
			pstmt.setString(3, houseNo);
			pstmt.setString(4, village);
			pstmt.setString(5, road);
			pstmt.setLong(6, countryId);
			pstmt.setLong(7, stateId);
			pstmt.setLong(8, districtId);
			pstmt.setLong(9, cityId);
			pstmt.setLong(10, areaId);
			pstmt.setLong(11, postOfficeId);
			pstmt.setLong(12, pinCodeId);
			pstmt.setString(13, stdCodePhoneNoOne);
			pstmt.setString(14, phoneNoOne);
			pstmt.setString(15, stdCodePhoneNoTwo);
			pstmt.setString(16, phoneNoTwo);
			pstmt.setString(17, orgEmailIdOne);
			pstmt.setString(18, orgEmailIdTwo);
			pstmt.setString(19, shopLicenseNo);
			pstmt.setString(20, issueAuthority);
			
			if(shopValidFrom!=null){
				pstmt.setDate(21,  new java.sql.Date(shopValidFrom.getTime()));
			}else{
				pstmt.setDate(21, (java.sql.Date) shopValidFrom);
			}
			if(shopValidTill!=null){
				pstmt.setDate(22,  new java.sql.Date(shopValidTill.getTime()));
			}else{
				pstmt.setDate(22, (java.sql.Date) shopValidTill);
			}
			pstmt.setString(23, placeOfIssue);

			pstmt.setString(24, esicNo);
			pstmt.setString(25, esicIssuingAuthority);
			pstmt.setLong(26, esicStateId);
			pstmt.setLong(27, esicDistrictId);
			pstmt.setString(28, esicPlace);
			pstmt.setString(29, epfAccNo);
			pstmt.setString(30, epfAuthority);
			pstmt.setString(31, epfPlace);
			pstmt.setLong(32, epfStateId);
			pstmt.setLong(33, epfDistrictId);
			pstmt.setString(34, professionalTax);
			pstmt.setString(35, profTaxAuthority);
			pstmt.setString(36, profTaxPlace);
			pstmt.setLong(37, profStateId);
			pstmt.setLong(38, profDistrictId);
			pstmt.setString(39, wcaNo);
			if(wcaFrom!=null){
				pstmt.setDate(40,  new java.sql.Date(wcaFrom.getTime()));
			}else{
				pstmt.setDate(40, (java.sql.Date) wcaFrom);
			}
			if(wcaTo!=null){
				pstmt.setDate(41,  new java.sql.Date(wcaTo.getTime()));
			}else{
				pstmt.setDate(41, (java.sql.Date) wcaTo);
			}
			pstmt.setString(42, wcaCompany);
			pstmt.setString(43, serviceTax);
			
			pstmt.setString(44, serviceTaxAuthority);
			pstmt.setString(45, serTaxPlace);
			pstmt.setLong(46, serStateId);
			pstmt.setLong(47, serDistrictId);
			pstmt.setString(48, panCard);
			
			pstmt.setString(49, name1);
			pstmt.setString(50, registrationNo1);
			pstmt.setLong(51, countryOneId);
			pstmt.setLong(52, stateOneId);
			pstmt.setLong(53, district1Id);
			pstmt.setString(54, name2);
			pstmt.setString(55, registrationNo2);
			pstmt.setLong(56, countryTwoId);
			pstmt.setLong(57, stateTwoId);
			pstmt.setLong(58, district2Id);
			pstmt.setString(59, name3);
			pstmt.setString(60, registrationNo3);
			pstmt.setLong(61, countryThreeId);
			pstmt.setLong(62, stateThreeId);
			pstmt.setLong(63, district3Id);
			pstmt.setString(64, name4);
			pstmt.setString(65, registrationNo4);
			pstmt.setLong(66, country4Id);
			pstmt.setLong(67, state4Id);
			pstmt.setLong(68, district4Id);
			
			pstmt.setString(69, ownerName);
			pstmt.setString(70, ownerHouseFlatDoorBlockNo);
			pstmt.setString(71, ownerAddress);
			pstmt.setString(72, ownerRoadStreetLane);
			pstmt.setLong(73, ownerCountryId);
			pstmt.setLong(74, ownerStateId);
			pstmt.setLong(75, ownerDistrictId);
			pstmt.setLong(76, ownerCityId);
			pstmt.setLong(77, ownerPostOfficeId);
			pstmt.setLong(78, ownerAreaId);
			pstmt.setString(79, ownerPinCode);
			pstmt.setString(80, ownerStdCodePhoneNo);
			pstmt.setString(81, ownerPhoneNo);
			pstmt.setString(82, ownerMobileNo);
			pstmt.setString(83, ownerEmail);
			
			pstmt.setString(84, contactPersonName);
			pstmt.setString(85, contactPersonEmail);
			pstmt.setString(86, contactPersonMobileNo);
			pstmt.setLong(87, organizationId);
			pstmt.setLong(88, id);
		
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
	 * Update uploaded photo
	 */
	public void updatePhoto() {

		String sql = "UPDATE ST_COLLEGE SET PHOTO = '" + photo
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
				"SELECT * FROM ST_COLLEGE WHERE 1=1");

		if (id > 0) {

			sql.append(" AND id = " + id);
		}if (organizationId > 0) {

			sql.append(" AND ORGANIZATION_ID = " + organizationId);
		}
		if (companyName != null && companyName.length() > 0) {
			sql.append(" AND COMPANY_NAME like '" + companyName + "%'");
		}
		if (orgEmailIdOne != null && orgEmailIdOne.length() > 0) {
			sql.append(" AND ORG_EMAIL_ID_ONE like '" + orgEmailIdOne + "%'");
		}
		if (phoneNoOne != null && phoneNoOne.length() > 0) {
			sql.append(" AND PHONE_NO_ONE like '" + phoneNoOne + "%'");
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
				CollegeModel model = new CollegeModel();
				model.setId(rs.getLong(1));
				model.setCompanyName(rs.getString(2));
				model.setIndustryId(rs.getLong(3));
				model.setIndustryName(rs.getString(4));
				model.setHouseNo(rs.getString(5));
				model.setVillage(rs.getString(6));
				model.setRoad(rs.getString(7));
				model.setCountryId(rs.getLong(8));
				model.setCountry(rs.getString(9));
				model.setStateId(rs.getLong(10));
				model.setState(rs.getString(11));
				model.setDistrictId(rs.getLong(12));
				model.setDistrict(rs.getString(13));
				model.setCityId(rs.getLong(14));
				model.setCity(rs.getString(15));
				model.setAreaId(rs.getLong(16));
				model.setArea(rs.getString(17));
				model.setPostOfficeId(rs.getLong(18));
				model.setPostOffice(rs.getString(19));
				model.setPinCodeId(rs.getLong(20));
				model.setPinCode(rs.getString(21));
				
				model.setStdCodePhoneNoOne(rs.getString(22));
				model.setPhoneNoOne(rs.getString(23));
				model.setStdCodePhoneNoTwo(rs.getString(24));
				model.setPhoneNoTwo(rs.getString(25));
				model.setOrgEmailIdOne(rs.getString(26));
				model.setOrgEmailIdTwo(rs.getString(27));
				model.setShopLicenseNo(rs.getString(28));
				model.setIssueAuthority(rs.getString(29));
				model.setShopValidFrom(rs.getDate(30));
				model.setShopValidTill(rs.getDate(31));
				model.setPlaceOfIssue(rs.getString(32));
				
				model.setEsicNo(rs.getString(33));
				model.setEsicIssuingAuthority(rs.getString(34));
				model.setEsicStateId(rs.getLong(35));
				model.setEsicState(rs.getString(36));
				model.setEsicDistrictId(rs.getLong(37));
				model.setEsicDistrict(rs.getString(38));
				model.setEsicPlace(rs.getString(39));
				model.setEpfAccNo(rs.getString(40));
				model.setEpfAuthority(rs.getString(41));
				model.setEpfPlace(rs.getString(42));
				model.setEpfStateId(rs.getLong(43));
				model.setEpfState(rs.getString(44));
				model.setEpfDistrictId(rs.getLong(45));
				model.setEpfDistrict(rs.getString(46));
				model.setProfessionalTax(rs.getString(47));
				model.setProfTaxAuthority(rs.getString(48));
				model.setProfTaxPlace(rs.getString(49));
				model.setProfStateId(rs.getLong(50));
				model.setProfState(rs.getString(51));
				model.setProfDistrictId(rs.getLong(52));
				model.setProfDistrict(rs.getString(53));
				model.setWcaNo(rs.getString(54));
				model.setWcaFrom(rs.getDate(55));
				model.setWcaTo(rs.getDate(56));
				model.setWcaCompany(rs.getString(57));
				model.setServiceTax(rs.getString(58));
				model.setServiceTaxAuthority(rs.getString(59));
				model.setSerTaxPlace(rs.getString(60));
				model.setSerStateId(rs.getLong(61));
				model.setSerState(rs.getString(62));
				model.setSerDistrictId(rs.getLong(63));
				model.setSerDistrict(rs.getString(64));
				model.setPanCard(rs.getString(65));
				
				model.setName1(rs.getString(66));
				model.setRegistrationNo1(rs.getString(67));
				model.setCountryOneId(rs.getLong(68));
				model.setCountryOne(rs.getString(69));
				model.setStateOneId(rs.getLong(70));
				model.setStateOne(rs.getString(71));
				model.setDistrict1Id(rs.getLong(72));
				model.setDistrict1(rs.getString(73));
				model.setName2(rs.getString(74));
				model.setRegistrationNo2(rs.getString(75));
				model.setCountryTwoId(rs.getLong(76));
				model.setCountryTwo(rs.getString(77));
				model.setStateTwoId(rs.getLong(78));
				model.setStateTwo(rs.getString(79));
				model.setDistrict2Id(rs.getLong(80));
				model.setDistrict2(rs.getString(81));
				model.setName3(rs.getString(82));
				model.setRegistrationNo3(rs.getString(83));
				model.setCountryThreeId(rs.getLong(84));
				model.setCountryThree(rs.getString(85));
				model.setStateThreeId(rs.getLong(86));
				model.setStateThree(rs.getString(87));
				model.setDistrict3Id(rs.getLong(88));
				model.setDistrict3(rs.getString(89));
				model.setName4(rs.getString(90));
				model.setRegistrationNo4(rs.getString(91));
				model.setCountry4Id(rs.getLong(92));
				model.setCountry4(rs.getString(93));
				model.setState4Id(rs.getLong(94));
				model.setState4(rs.getString(95));
				model.setDistrict4Id(rs.getLong(96));
				model.setDistrict4(rs.getString(97));
				
				model.setOwnerName(rs.getString(98));
				model.setOwnerHouseFlatDoorBlockNo(rs.getString(99));
				model.setOwnerAddress(rs.getString(100));
				model.setOwnerRoadStreetLane(rs.getString(101));
				model.setOwnerCountryId(rs.getLong(102));
				model.setOwnerCountry(rs.getString(103));
				model.setOwnerStateId(rs.getLong(104));
				model.setOwnerState(rs.getString(105));
				model.setOwnerDistrictId(rs.getLong(106));
				model.setOwnerDistrict(rs.getString(107));
				model.setOwnerCityId(rs.getLong(108));
				model.setOwnerCity(rs.getString(109));
				model.setOwnerPostOfficeId(rs.getLong(110));
				model.setOwnerPostOffice(rs.getString(111));
				model.setOwnerAreaId(rs.getLong(112));
				model.setOwnerArea(rs.getString(113));
				model.setOwnerPinCode(rs.getString(114));
				model.setOwnerStdCodePhoneNo(rs.getString(115));
				model.setOwnerPhoneNo(rs.getString(116));
				model.setOwnerMobileNo(rs.getString(117));
				model.setOwnerEmail(rs.getString(118));
				
				model.setContactPersonName(rs.getString(119));
				model.setContactPersonEmail(rs.getString(120));
				model.setContactPersonMobileNo(rs.getString(121));		
				model.setOrganizationId(rs.getLong(122));
				model.setOrganization(rs.getString(123));	

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
	public void updateReferenceData(long id) throws ApplicationException,
	DuplicateRecordException {

String industrySql = "UPDATE ST_COLLEGE U SET INDUSTRY_NAME = (SELECT NAME FROM INDUSTRY C WHERE C.ID = U.INDUSTRY_ID)  WHERE ID = "
		+ id;


String countrySql = "UPDATE ST_COLLEGE U SET COUNTRY = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_ID),COUNTRY_ONE = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_ONE_ID),"
		+"COUNTRY_TWO = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_TWO_ID),COUNTRY_THREE = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_THREE_ID),"
		+"COUNTRY_FOUR = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.COUNTRY_FOUR_ID),OWNER_COUNTRY = (SELECT NAME FROM COUNTRY C WHERE C.ID = U.OWNER_COUNTRY_ID) WHERE ID = "
		+ id;

String stateSql = "UPDATE ST_COLLEGE U SET STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_ID),ESIC_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.ESIC_STATE_ID),"
		+"EPF_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.EPF_STATE_ID),PROF_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.PROF_STATE_ID),"
		+"SER_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.SER_STATE_ID),STATE_ONE = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_ONE_ID),"
		+"STATE_TWO = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_TWO_ID),STATE_THREE = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_THREE_ID),"
		+"STATE_FOUR = (SELECT NAME FROM STATE C WHERE C.ID = U.STATE_FOUR_ID),OWNER_STATE = (SELECT NAME FROM STATE C WHERE C.ID = U.OWNER_STATE_ID) WHERE ID = "
		+ id;

String districtSql = "UPDATE ST_COLLEGE U SET DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_ID),ESIC_DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.ESIC_DISTRICT_ID),"
		+"EPF_DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.EPF_DISTRICT_ID),PROF_DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.PROF_DISTRICT_ID),"
		+"SER_DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.SER_DISTRICT_ID),DISTRICT_ONE = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_ONE_ID),"
		+"DISTRICT_TWO = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_TWO_ID),DISTRICT_THRTEE = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_THRTEE_ID),"
		+"DISTRICT_FOUR = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.DISTRICT_FOUR_ID),OWNER_DISTRICT = (SELECT NAME FROM DISTRICT C WHERE C.ID = U.OWNER_DISTRICT_ID) WHERE ID = "
		+ id;

String citySql = "UPDATE ST_COLLEGE U SET CITY = (SELECT NAME FROM CITY C WHERE C.ID = U.CITY_ID),OWNER_CITY = (SELECT NAME FROM CITY C WHERE C.ID = U.OWNER_CITY_ID) WHERE ID = "
		+ id;

String areaSql = "UPDATE ST_COLLEGE U SET AREA = (SELECT NAME FROM AREA C WHERE C.ID = U.AREA_ID),OWNER_AREA = (SELECT NAME FROM AREA C WHERE C.ID = U.OWNER_AREA_ID) WHERE ID = "
		+ id;

String postOfiiceSql = "UPDATE ST_COLLEGE U SET POST_OFFICE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.POST_OFFICE_ID),OWNER_POST_OFFICE = (SELECT NAME FROM POST_OFFICE C WHERE C.ID = U.OWNER_POST_OFFICE_ID) WHERE ID = "
		+ id;

String pincodeSql = "UPDATE ST_COLLEGE U SET PIN_CODE = (SELECT NAME FROM PIN_CODE C WHERE C.ID = U.PIN_CODE_ID) WHERE ID = "
		+ id;

String oraganizationSql = "UPDATE ST_COLLEGE U SET ORGANIZATION = (SELECT ORGANIZATION FROM st_principalemployer C WHERE C.ID = U.ORGANIZATION_ID) WHERE ID = "
		+ id;

log.debug("Model update Started");

Connection conn = null;

try {
	conn = JDBCDataSource.getConnection();
	conn.setAutoCommit(false); // Begin transaction
	Statement stmt = conn.createStatement();
	stmt.executeUpdate(industrySql);
	stmt.executeUpdate(countrySql);
	stmt.executeUpdate(stateSql);
	stmt.executeUpdate(districtSql);
	stmt.executeUpdate(citySql);
	stmt.executeUpdate(areaSql);
	stmt.executeUpdate(postOfiiceSql);
	stmt.executeUpdate(pincodeSql);
	stmt.executeUpdate(oraganizationSql);
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
		return companyName;
	}

	@Override
	public String getTableName() {
		return "ST_COLLEGE";
	}

}
