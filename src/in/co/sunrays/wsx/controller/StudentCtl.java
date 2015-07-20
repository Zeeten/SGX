package in.co.sunrays.wsx.controller;

import in.co.sunrays.common.controller.BaseCtl;

import in.co.sunrays.common.model.BaseModel;
import in.co.sunrays.common.model.UserModel;
import in.co.sunrays.util.AccessUtility;
import in.co.sunrays.util.DataUtility;
import in.co.sunrays.util.DataValidator;
import in.co.sunrays.util.PropertyReader;
import in.co.sunrays.util.ServletUtility;
import in.co.sunrays.util.UserFilterManager;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.AreaModel;
import in.co.sunrays.wsx.model.CityModel;
import in.co.sunrays.wsx.model.CollegeModel;
import in.co.sunrays.wsx.model.DepartementModel;
import in.co.sunrays.wsx.model.DistrictModel;
import in.co.sunrays.wsx.model.LanguageModel;
import in.co.sunrays.wsx.model.PostOfficeModel;
import in.co.sunrays.wsx.model.StaffModel;
import in.co.sunrays.wsx.model.StateModel;
import in.co.sunrays.wsx.model.StudentModel;
import in.co.sunrays.wsx.model.TrainingModel;
import in.co.sunrays.wsx.model.CountryModel;

import java.io.IOException;
import java.util.LinkedHashMap;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

/**
 * Student functionality Controller. Performs operation for add, update, delete
 * and get Student
 * 
 * @author SUNRAYS Technologies
 * @version 1.0
 * @Copyright (c) SUNRAYS Technologies
 */

public class StudentCtl extends BaseCtl {

	/**
	 * Logger to log the messages.
	 */
	private static Logger log = Logger.getLogger(StudentCtl.class);

	/**
	 * Loads pre-loaded data like Dropdown List.
	 */
	@Override
	protected void preload(HttpServletRequest request) {
		Long id = DataUtility.getLong(request.getParameter("id"));
		CollegeModel model = new CollegeModel();
		CountryModel countryModel = new CountryModel();

		try {
			List list = model.search();
			request.setAttribute("collegeList", list);
		} catch (ApplicationException e) {
			log.error(e);
		}

		DepartementModel departementModel = new DepartementModel();
		List deptList = departementModel.search();
		request.setAttribute("departementList", deptList);

		LanguageModel languageModel = new LanguageModel();
		List languageList = languageModel.search();
		request.setAttribute("languageList", languageList);
		
	
		TrainingModel model1 = new TrainingModel();
		try {
			List list = model1.search();
			request.setAttribute("trainingList", list);
			
			List countryList = countryModel.search();
			request.setAttribute("countryList", countryList);
			
			if (id > 0) {
				StudentModel studentmodel = new StudentModel();
				StateModel stateModel = new StateModel();
				DistrictModel districtModel = new DistrictModel();
				AreaModel areaModel = new AreaModel();
				CityModel cityModel = new CityModel();
				PostOfficeModel postOfficeModel = new PostOfficeModel();
				
				studentmodel.setCollegeId(UserFilterManager.getCollegeId(request));
				studentmodel = studentmodel.findByPK(id);
				
			if(studentmodel.getPermanentStateId()>0){	
			stateModel.setId(studentmodel.getPermanentStateId());
			List statePermanentList = stateModel.search();
			request.setAttribute("statePermanentList", statePermanentList);
			}
			if(studentmodel.getPresentStateId()>0){
			stateModel.setId(studentmodel.getPresentStateId());
			List statePresentList = stateModel.search();
			request.setAttribute("statePresentList", statePresentList);
			}
			if(studentmodel.getUnderMetricStateId()>0){
			stateModel.setId(studentmodel.getUnderMetricStateId());
			List stateMetricList = stateModel.search();
			request.setAttribute("stateMetricList", stateMetricList);
			}
			if(studentmodel.getHighSchoolStateId()>0){
			stateModel.setId(studentmodel.getHighSchoolStateId());
			List stateHighList = stateModel.search();
			request.setAttribute("stateHighList", stateHighList);
			}
			if(studentmodel.getHigherSecondaryStateId()>0){
			stateModel.setId(studentmodel.getHigherSecondaryStateId());
			List stateHigherList = stateModel.search();
			request.setAttribute("stateHigherList", stateHigherList);
			}
			if(studentmodel.getGraduationStateId()>0){
			stateModel.setId(studentmodel.getGraduationStateId());
			List stateGraduationList = stateModel.search();
			request.setAttribute("stateGraduationList", stateGraduationList);
			}
			if(studentmodel.getOtherStateId()>0){
				stateModel.setId(studentmodel.getOtherStateId());
				List stateOtherList = stateModel.search();
				request.setAttribute("stateOtherList", stateOtherList);
				}
			
			if(studentmodel.getPermanentDistrictId()>0){
			districtModel.setId(studentmodel.getPermanentDistrictId());
			List districtPermanentList = districtModel.search();
			request.setAttribute("districtPermanentList", districtPermanentList);
			}
			if(studentmodel.getPresentDistrictId()>0){
			districtModel.setId(studentmodel.getPresentDistrictId());
			List districtPresentList = districtModel.search();
			request.setAttribute("districtPresentList", districtPresentList);
			}
			if(studentmodel.getUnderMetricDistrictId()>0){
			districtModel.setId(studentmodel.getUnderMetricDistrictId());
			List districtUnderMetricList = districtModel.search();
			request.setAttribute("districtUnderMetricList", districtUnderMetricList);
			}
			if(studentmodel.getHighSchoolDistrictId()>0){
			districtModel.setId(studentmodel.getHighSchoolDistrictId());
			List districtHighList = districtModel.search();
			request.setAttribute("districtHighList", districtHighList);
			}
			if(studentmodel.getHigherSecondaryDistrictId()>0){
			districtModel.setId(studentmodel.getHigherSecondaryDistrictId());
			List districtHigherSecondaryList = districtModel.search();
			request.setAttribute("districtHigherSecondaryList", districtHigherSecondaryList);
			}
			if(studentmodel.getGraduationDistrictId()>0){
			districtModel.setId(studentmodel.getGraduationDistrictId());
			List districtGraduationList = districtModel.search();
			request.setAttribute("districtGraduationList", districtGraduationList);
			}
			if(studentmodel.getOtherDistrictId()>0){
				districtModel.setId(studentmodel.getOtherDistrictId());
				List districtOtherList = districtModel.search();
				request.setAttribute("districtOtherList", districtOtherList);
				}
			
			
			if(studentmodel.getPermanentCityId()>0){
			cityModel.setId(studentmodel.getPermanentCityId());
			List cityPermanentList = cityModel.search();
			request.setAttribute("cityPermanentList", cityPermanentList);
			}
			if(studentmodel.getPresentCityId()>0){
			cityModel.setId(studentmodel.getPresentCityId());
			List cityPresentList = cityModel.search();
			request.setAttribute("cityPresentList", cityPresentList);
			}
			if(studentmodel.getUnderMetricCityId()>0){
			cityModel.setId(studentmodel.getUnderMetricCityId());
			List cityUnderMetricList = cityModel.search();
			request.setAttribute("cityUnderMetricList", cityUnderMetricList);
			}
			if(studentmodel.getHighSchoolCityId()>0){
			cityModel.setId(studentmodel.getHighSchoolCityId());
			List cityHighSchoolList = cityModel.search();
			request.setAttribute("cityHighSchoolList", cityHighSchoolList);
			}
			if(studentmodel.getHigherSecondaryCityId()>0){
			cityModel.setId(studentmodel.getHigherSecondaryCityId());
			List cityHigherSecondaryList = cityModel.search();
			request.setAttribute("cityHigherSecondaryList", cityHigherSecondaryList);
			}
			if(studentmodel.getGraduationCityId()>0){
			cityModel.setId(studentmodel.getGraduationCityId());
			List cityGraduationList = cityModel.search();
			request.setAttribute("cityGraduationList", cityGraduationList);
			}
			
			if(studentmodel.getOtherCityId()>0){
				cityModel.setId(studentmodel.getOtherCityId());
				List cityOtherList = cityModel.search();
				request.setAttribute("cityOtherList", cityOtherList);
				}
			
			
			if(studentmodel.getPermanentPostOfficeId()>0){
			postOfficeModel.setId(studentmodel.getPermanentPostOfficeId());
			List postOfficePermanentList = postOfficeModel.search();
			request.setAttribute("postOfficePermanentList", postOfficePermanentList);
			}
			if(studentmodel.getPresentPostOfficeId()>0){
			postOfficeModel.setId(studentmodel.getPresentPostOfficeId());
			List postOfficePresentList = postOfficeModel.search();
			request.setAttribute("postOfficePresentList", postOfficePresentList);
			}
			if(studentmodel.getUnderMetricPostOfficeId()>0){
			postOfficeModel.setId(studentmodel.getUnderMetricPostOfficeId());
			List postOfficeUnderMetricList = postOfficeModel.search();
			request.setAttribute("postOfficeUnderMetricList", postOfficeUnderMetricList);
			}
			if(studentmodel.getHighScoolPostOfficeId()>0){
			postOfficeModel.setId(studentmodel.getHighScoolPostOfficeId());
			List postOfficeHighList = postOfficeModel.search();
			request.setAttribute("postOfficeHighList", postOfficeHighList);
			}
			if(studentmodel.getHigherSecondaryPostOfficeId()>0){
			postOfficeModel.setId(studentmodel.getHigherSecondaryPostOfficeId());
			List postOfficeHigherList = postOfficeModel.search();
			request.setAttribute("postOfficeHigherList", postOfficeHigherList);
			}
			if(studentmodel.getGraduationPostOfficeId()>0){
			postOfficeModel.setId(studentmodel.getGraduationPostOfficeId());
			List postOfficeGraduationList = postOfficeModel.search();
			request.setAttribute("postOfficeGraduationList", postOfficeGraduationList);
			}
			
			if(studentmodel.getOtherPostOfficeId()>0){
				postOfficeModel.setId(studentmodel.getOtherPostOfficeId());
				List postOfficeOtherList = postOfficeModel.search();
				request.setAttribute("postOfficeOtherList", postOfficeOtherList);
				}
			}
				
			
		} catch (ApplicationException e) {
			log.error(e);
		}

		LinkedHashMap<String, String> semesterMap = new LinkedHashMap<String, String>();
		semesterMap.put("", "--Select--");
		semesterMap.put("1", "1");
		semesterMap.put("2", "2");
		semesterMap.put("3", "3");
		semesterMap.put("4", "4");
		semesterMap.put("5", "5");
		semesterMap.put("6", "6");
		semesterMap.put("7", "7");
		semesterMap.put("8", "8");
		request.setAttribute("semesterMap", semesterMap);

		LinkedHashMap<String, String> yearMap = new LinkedHashMap<String, String>();
		yearMap.put("", "--Select--");
		yearMap.put("1", "1");
		yearMap.put("2", "2");
		yearMap.put("3", "3");
		yearMap.put("4", "4");

		request.setAttribute("yearMap", yearMap);
		
		LinkedHashMap<String, String> bloodgroup = new LinkedHashMap<String, String>();
		bloodgroup.put("", "--Select--");
		bloodgroup.put("1", "A+");
		bloodgroup.put("2", "A-");
		bloodgroup.put("3", "AB+");
		bloodgroup.put("4", "AB-");
		bloodgroup.put("5", "B+");
		bloodgroup.put("6", "B-");
		bloodgroup.put("7", "O+");
		bloodgroup.put("8", "O-");
		request.setAttribute("bloodgroup", bloodgroup);
	

	}

	/**
	 * Validates Input data
	 */
	@Override
	protected boolean validate(HttpServletRequest request) {

		log.debug("StudentCtl Method validate Started");

		boolean pass = true;
		String emailId = request.getParameter("emailId");
		
		if (DataValidator.isNull(request.getParameter("firstName"))) {
			request.setAttribute("firstName",
					PropertyReader.getValue("error.require", "FirstName"));

			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("lastName"))) {
			request.setAttribute("lastName",
					PropertyReader.getValue("error.require", "LastName"));
			pass = false;
		}
	
	
		if (DataValidator.isNull(request.getParameter("trainingId"))) {
			request.setAttribute("trainingId",
					PropertyReader.getValue("error.require", "Training Name"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("departementId"))) {
			request.setAttribute("departementId",
					PropertyReader.getValue("error.require", "Departement Name"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("collegeId"))) {
			request.setAttribute("collegeId",
					PropertyReader.getValue("error.require", "College Name"));
			pass = false;
		}
		if (DataValidator.isNull(emailId)) {
			request.setAttribute("emailId",
					PropertyReader.getValue("error.require", "Email Id"));
			pass = false;
		} else if (!DataValidator.isEmail(emailId)) {
			request.setAttribute("emailId",
					PropertyReader.getValue("error.email", "EmailId"));
			pass = false;
		}
		
		
		if (DataValidator.isNull(request.getParameter("dob"))) {
			request.setAttribute("dob",
					PropertyReader.getValue("error.require", "Date Of Birth"));
			pass = false;

		}
		if (DataValidator.isNull(request.getParameter("gender"))) {
			request.setAttribute("gender",
					PropertyReader.getValue("error.require", "Gender"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("mobileNo"))) {
			request.setAttribute("mobileNo",
					PropertyReader.getValue("error.require", "Mobile No"));
			pass = false;
		}
		if (!DataValidator.isNumber(request.getParameter("mobileNo"))) {
			request.setAttribute("mobileNo",
					PropertyReader.getValue("error.number", "Mobile No"));
			pass = false;
		}
		if (!DataValidator.isNumberLenth(request.getParameter("mobileNo"))) {
			request.setAttribute("mobileNo",
					PropertyReader.getValue("error.length", "Mobile No"));
			pass = false;
		}
		
	
		if (DataValidator.isNull(request.getParameter("permanentAddress"))) {
			request.setAttribute("permanentAddress",
					PropertyReader.getValue("error.require", "Permanent Address"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("permanentCountry"))) {
			request.setAttribute("permanentCountry",
					PropertyReader.getValue("error.require", "Permanent Country"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("permanentState"))) {
			request.setAttribute("permanentState",
					PropertyReader.getValue("error.require", "Permanent State"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("permanentDistrict"))) {
			request.setAttribute("permanentDistrict",
					PropertyReader.getValue("error.require", "Permanent District"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("permanentCity"))) {
			request.setAttribute("permanentCity",
					PropertyReader.getValue("error.require", "Permanent City"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("permanentPostOffice"))) {
			request.setAttribute("permanentPostOffice",
					PropertyReader.getValue("error.require", "Permanent PostOffice"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("permanentPinCode"))) {
			request.setAttribute("permanentPinCode",
					PropertyReader.getValue("error.require", "Permanent PinCode"));
			pass = false;
		}
		
		
		
		if (DataValidator.isNull(request.getParameter("presentAddress"))) {
			request.setAttribute("presentAddress",
					PropertyReader.getValue("error.require", "Present Address"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("presentCountry"))) {
			request.setAttribute("presentCountry",
					PropertyReader.getValue("error.require", "Present Country"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("presentState"))) {
			request.setAttribute("presentState",
					PropertyReader.getValue("error.require", "Present State"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("presentDistrict"))) {
			request.setAttribute("presentDistrict",
					PropertyReader.getValue("error.require", "Present District"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("presentCity"))) {
			request.setAttribute("presentCity",
					PropertyReader.getValue("error.require", "Present City"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("presentPostOffice"))) {
			request.setAttribute("presentPostOffice",
					PropertyReader.getValue("error.require", "Present PostOffice"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("presentPinCode"))) {
			request.setAttribute("presentPinCode",
					PropertyReader.getValue("error.require", "Present PinCode"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("bloodGroup"))) {
			request.setAttribute("bloodGroup",
					PropertyReader.getValue("error.require", "Blood Group"));
			pass = false;
		}

		if (DataValidator.isNull(request.getParameter("underMetricBoard"))) {
			request.setAttribute("underMetricBoard",
					PropertyReader.getValue("error.require", "University/Board"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("underMetricInstitute"))) {
			request.setAttribute("underMetricInstitute",
					PropertyReader.getValue("error.require", "School"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("underMetricCountry"))) {
			request.setAttribute("underMetricCountry",
					PropertyReader.getValue("error.require", "Country"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("underMetricState"))) {
			request.setAttribute("underMetricState",
					PropertyReader.getValue("error.require", "State"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("underMetricDistrict"))) {
			request.setAttribute("underMetricDistrict",
					PropertyReader.getValue("error.require", "District"));
			pass = false;
		}
		
		
		if (DataValidator.isNull(request.getParameter("underMetricCity"))) {
			request.setAttribute("underMetricCity",
					PropertyReader.getValue("error.require", "City"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("underMetricPostOffice"))) {
			request.setAttribute("underMetricPostOffice",
					PropertyReader.getValue("error.require", "PostOffice"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("underMetricPinCode"))) {
			request.setAttribute("underMetricPinCode",
					PropertyReader.getValue("error.require", "PinCode"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("underMetricPercentage"))) {
			request.setAttribute("underMetricPercentage",
					PropertyReader.getValue("error.require", "Percentage"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("underMetricSubject"))) {
			request.setAttribute("underMetricSubject",
					PropertyReader.getValue("error.require", "Subject"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("responsiblePersonName1"))) {
			request.setAttribute("responsiblePersonName1",
					PropertyReader.getValue("error.require", "Name"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("responsiblePerconAddress1"))) {
			request.setAttribute("responsiblePerconAddress1",
					PropertyReader.getValue("error.require", "Address"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("responsiblePersonPinCode1"))) {
			request.setAttribute("responsiblePersonPinCode1",
					PropertyReader.getValue("error.require", "PinCode"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("responsiblePersonName2"))) {
			request.setAttribute("responsiblePersonName2",
					PropertyReader.getValue("error.require", "Name"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("responsiblePerconAddress2"))) {
			request.setAttribute("responsiblePerconAddress2",
					PropertyReader.getValue("error.require", "Address"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("responsiblePersonPinCode2"))) {
			request.setAttribute("responsiblePersonPinCode2",
					PropertyReader.getValue("error.require", "PinCode"));
			pass = false;
		}
		
		log.debug("StudentCtl Method validate Ended  " + pass);

		return pass;
	}

	@Override
	protected BaseModel populateModel(HttpServletRequest request) {

		log.debug("StudentCtl Method populatebean Started");

		StudentModel model = new StudentModel();

		model.setId(DataUtility.getLong(request.getParameter("id")));

		// bean.setRoleId(RoleBean.STUDENT);
		model.setCode(DataUtility.getString(request.getParameter("code")));
		model.setFirstName(DataUtility.getString(request
				.getParameter("firstName")));
		model.setMiddleName(DataUtility.getString(request
				.getParameter("middleName")));
		model.setLastName(DataUtility.getString(request
				.getParameter("lastName")));
		model.setFatherName(DataUtility.getString(request
				.getParameter("fatherName")));
		model.setMotherName(DataUtility.getString(request
				.getParameter("motherName")));
		model.setCollegeId(DataUtility.getLong(request
				.getParameter("collegeId")));
		
		model.setDepartementId(DataUtility.getLong(request
				.getParameter("departementId")));
		model.setTrainingId(DataUtility.getLong(request
				.getParameter("trainingId")));
		model.setSemester(DataUtility.getInt(request.getParameter("semester")));
		model.setYear(DataUtility.getInt(request.getParameter("year")));
		model.setDoa(DataUtility.getDate(request.getParameter("doa")));
		model.setDob(DataUtility.getDate(request.getParameter("dob")));
		model.setGender(DataUtility.getString(request.getParameter("gender")));
		model.setMobileNo(DataUtility.getString(request
				.getParameter("mobileNo")));
		model.setTelephoneNo(DataUtility.getString(request
				.getParameter("telephoneNo")));
		model.setEmailId(DataUtility.getString(request.getParameter("emailId")));
		
		model.setPermanentAddress(DataUtility.getString(request.getParameter("permanentAddress")));
		model.setPermanentCountryId(DataUtility.getLong(request.getParameter("permanentCountry")));
		model.setPermanentStateId(DataUtility.getLong(request.getParameter("permanentState")));
		model.setPermanentDistrictId(DataUtility.getLong(request.getParameter("permanentDistrict")));
		model.setPermanentCityId(DataUtility.getLong(request.getParameter("permanentCity")));
		model.setPermanentPostOfficeId(DataUtility.getLong(request.getParameter("permanentPostOffice")));
		model.setPermanentPinCodeId(DataUtility.getLong(request.getParameter("permanentPinCode")));
		model.setPermanentContactNo1(DataUtility.getString(request.getParameter("permanentContactNo1")));
		model.setPermanentContactNo2(DataUtility.getString(request.getParameter("permanentContactNo2")));
		
	
		model.setPresentAddress(DataUtility.getString(request.getParameter("presentAddress")));
		model.setPresentCountryId(DataUtility.getLong(request.getParameter("presentCountry")));
		model.setPresentStateId(DataUtility.getLong(request.getParameter("presentState")));
		model.setPresentDistrictId(DataUtility.getLong(request.getParameter("presentDistrict")));
		model.setPresentCityId(DataUtility.getLong(request.getParameter("presentCity")));
		model.setPresentPostOfficeId(DataUtility.getLong(request.getParameter("presentPostOffice")));
		model.setPresentPinCodeId(DataUtility.getLong(request.getParameter("presentPinCode")));
		model.setPresentContactNo1(DataUtility.getString(request.getParameter("presentContactNo1")));
		model.setPresentContactNo2(DataUtility.getString(request.getParameter("presentContactNo2")));
		
		
		
		model.setHeight(DataUtility.getInt(request.getParameter("height")));
		model.setHeightInche(DataUtility.getInt(request.getParameter("heightInche")));
		model.setHeightCm(DataUtility.getInt(request.getParameter("heightCm")));
		
		model.setChest(DataUtility.getInt(request.getParameter("chest")));
		model.setChestCm(DataUtility.getInt(request.getParameter("chestCm")));
		
		model.setWeight(DataUtility.getInt(request.getParameter("weight")));
		model.setWeightKg(DataUtility.getInt(request.getParameter("weightKg")));
		
		model.setBloodGroup(DataUtility.getString(request.getParameter("bloodGroup")));
		
		model.setHindiRead(DataUtility.getString(request.getParameter("hindiRead")));
		model.setHindiWrite(DataUtility.getString(request.getParameter("hindiWrite")));
		model.setHindiSpeak(DataUtility.getString(request.getParameter("hindiSpeak")));
		
		model.setEnglisgRead(DataUtility.getString(request.getParameter("englisgRead")));
		model.setEnglishWrite(DataUtility.getString(request.getParameter("englishWrite")));
		model.setEnglishSpeak(DataUtility.getString(request.getParameter("englishSpeak")));
		
		model.setOtherLanguageId(DataUtility.getLong(request.getParameter("otherLanguage")));
		model.setOtherLanguageRead(DataUtility.getString(request.getParameter("otherLanguageRead")));
		model.setOtherLanguageWrite(DataUtility.getString(request.getParameter("otherLanguageWrite")));
		model.setOtherLanguageSpeak(DataUtility.getString(request.getParameter("otherLanguageSpeak")));
		model.setPresentEmployent(DataUtility.getString(request.getParameter("presentEmployent")));
		model.setPreviousEmployent(DataUtility.getString(request.getParameter("previousEmployent")));
		model.setOraganizationName1(DataUtility.getString(request.getParameter("oraganizationName1")));
		model.setOraganizationName2(DataUtility.getString(request.getParameter("oraganizationName2")));
		model.setOrganizationDesignation1(DataUtility.getString(request.getParameter("organizationDesignation1")));
		model.setOrganizationDesignation2(DataUtility.getString(request.getParameter("organizationDesignation2")));
		model.setTotalExperience(DataUtility.getDouble(request.getParameter("totalExperience")));
		
		model.setUnderMetricBoard(DataUtility.getString(request.getParameter("underMetricBoard")));
		model.setUnderMetricInstitute(DataUtility.getString(request.getParameter("underMetricInstitute")));
		model.setUnderMetricCountryId(DataUtility.getLong(request.getParameter("underMetricCountry")));
		model.setUnderMetricStateId(DataUtility.getLong(request.getParameter("underMetricState")));
		model.setUnderMetricDistrictId(DataUtility.getLong(request.getParameter("underMetricDistrict")));
		model.setUnderMetricCityId(DataUtility.getLong(request.getParameter("underMetricCity")));
		model.setUnderMetricPostOfficeId(DataUtility.getLong(request.getParameter("underMetricPostOffice")));
		model.setUnderMetricPinCodeId(DataUtility.getLong(request.getParameter("underMetricPinCode")));
		model.setUnderMetricPercentage(DataUtility.getDouble(request.getParameter("underMetricPercentage")));
		model.setUnderMetricSubject(DataUtility.getString(request.getParameter("underMetricSubject")));
		
		model.setHighSchoolBoard(DataUtility.getString(request.getParameter("highSchoolBoard")));
		model.setHighSchoolInstitute(DataUtility.getString(request.getParameter("highSchoolInstitute")));
		model.setHighSchoolCountryId(DataUtility.getLong(request.getParameter("highSchoolCountry")));
		model.setHighSchoolStateId(DataUtility.getLong(request.getParameter("highSchoolState")));
		model.setHighSchoolDistrictId(DataUtility.getLong(request.getParameter("highSchoolDistrict")));
		model.setHighSchoolCityId(DataUtility.getLong(request.getParameter("highSchoolCity")));
		model.setHighScoolPostOfficeId(DataUtility.getLong(request.getParameter("highScoolPostOffice")));
		model.setHighSchoolPinCodeId(DataUtility.getLong(request.getParameter("highSchoolPinCode")));
		model.setHighSchoolPercentage(DataUtility.getDouble(request.getParameter("highSchoolPercentage")));
		model.setHighSchoolSubject(DataUtility.getString(request.getParameter("highSchoolSubject")));
		
		model.setHigherSecondaryBoard(DataUtility.getString(request.getParameter("higherSecondaryBoard")));
		model.setHigherSecondaryInstitute(DataUtility.getString(request.getParameter("higherSecondaryInstitute")));
		model.setHigherSeconndaryCountryId(DataUtility.getLong(request.getParameter("higherSeconndaryCountry")));
		model.setHigherSecondaryStateId(DataUtility.getLong(request.getParameter("higherSecondaryState")));
		model.setHigherSecondaryDistrictId(DataUtility.getLong(request.getParameter("higherSecondaryDistrict")));
		model.setHigherSecondaryCityId(DataUtility.getLong(request.getParameter("higherSecondaryCity")));
		model.setHigherSecondaryPostOfficeId(DataUtility.getLong(request.getParameter("higherSecondaryPostOffice")));
		model.setHigherSecondaryPinCodeId(DataUtility.getLong(request.getParameter("higherSecondaryPinCode")));
		model.setHigherSecondaryPercentage(DataUtility.getDouble(request.getParameter("higherSecondaryPercentage")));
		model.setHigherSecondarySubject(DataUtility.getString(request.getParameter("higherSecondarySubject")));
		
		model.setGraduationUniversity(DataUtility.getString(request.getParameter("graduationUniversity")));
		model.setGraduationInstitute(DataUtility.getString(request.getParameter("graduationInstitute")));
		model.setGraduationCountryId(DataUtility.getLong(request.getParameter("graduationCountry")));
		model.setGraduationStateId(DataUtility.getLong(request.getParameter("graduationState")));
		model.setGraduationDistrictId(DataUtility.getLong(request.getParameter("graduationDistrict")));
		model.setGraduationCityId(DataUtility.getLong(request.getParameter("graduationCity")));
		model.setGraduationPostOfficeId(DataUtility.getLong(request.getParameter("graduationPostOffice")));
		model.setGraduationPinCodeId(DataUtility.getLong(request.getParameter("graduationPinCode")));
		model.setGraduationPercentage(DataUtility.getDouble(request.getParameter("graduationPercentage")));
		model.setGraduationDegree(DataUtility.getString(request.getParameter("graduationDegree")));
		model.setGraduationSubject(DataUtility.getString(request.getParameter("graduationSubject")));
		
		model.setOtherBoard(DataUtility.getString(request.getParameter("otherBoard")));
		model.setOtherInstitute(DataUtility.getString(request.getParameter("otherInstitute")));
		model.setOtherCountryId(DataUtility.getLong(request.getParameter("otherCountry")));
		model.setOtherStateId(DataUtility.getLong(request.getParameter("otherState")));
		model.setOtherDistrictId(DataUtility.getLong(request.getParameter("otherDistrict")));
		model.setOtherCityId(DataUtility.getLong(request.getParameter("otherCity")));
		model.setOtherPostOfficeId(DataUtility.getLong(request.getParameter("otherPostOffice")));
		model.setOtherPinCodeId(DataUtility.getLong(request.getParameter("otherPinCode")));
		//model.setOtherPercentage(DataUtility.getFloat(request.getParameter("otherPercentage")));
		model.setOtherDegree(DataUtility.getString(request.getParameter("otherDegree")));
		model.setOtherSubject(DataUtility.getString(request.getParameter("otherSubject")));
		
		model.setUidCardNo(DataUtility.getString(request.getParameter("uidCardNo")));
		model.setPanCardNo(DataUtility.getString(request.getParameter("panCardNo")));
		model.setVoterCardNo(DataUtility.getString(request.getParameter("voterCardNo")));
		model.setVoterIssuingAuthority(DataUtility.getString(request.getParameter("voterIssuingAuthority")));
		model.setRationCardNo(DataUtility.getString(request.getParameter("rationCardNo")));
		model.setRationIssuingAuthority(DataUtility.getString(request.getParameter("rationIssuingAuthority")));
		model.setDrivingLicenseNo(DataUtility.getString(request.getParameter("drivingLicenseNo")));
		model.setDrivingIssuingAuthority(DataUtility.getString(request.getParameter("drivingIssuingAuthority")));
		model.setDrivingValidation(DataUtility.getDate(request.getParameter("drivingValidation")));
		model.setPassPortNo(DataUtility.getString(request.getParameter("passPortNo")));
		model.setPassPortIssuingAuthority(DataUtility.getString(request.getParameter("passPortIssuingAuthority")));
		model.setPassPortValidTill(DataUtility.getDate(request.getParameter("passPortValidTill")));
		model.setResponsiblePersonName1(DataUtility.getString(request.getParameter("responsiblePersonName1")));
		model.setResponsiblePerconAddress1(DataUtility.getString(request.getParameter("responsiblePerconAddress1")));
		model.setResponsiblePersonPinCode1(DataUtility.getLong(request.getParameter("responsiblePersonPinCode1")));
		model.setResponsiblePersonName2(DataUtility.getString(request.getParameter("responsiblePersonName2")));
		model.setResponsiblePerconAddress2(DataUtility.getString(request.getParameter("responsiblePerconAddress2")));
		model.setResponsiblePersonPinCode2(DataUtility.getLong(request.getParameter("responsiblePersonPinCode2")));
		
		model.setRollNo(DataUtility.getString(request.getParameter("rollNo")));
		model.setPlaceOfBirth(DataUtility.getString(request.getParameter("placeOfBirth")));
				model.setUserId(DataUtility.getLong(request.getParameter("userId")));

				System.out.println("model"+DataUtility.getString(request
						.getParameter("permanentAddress")));
				
				
		populateModel(model, request);

		log.debug("StudentCtl Method populatemodel Ended");

		return model;
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		log.debug("StudentCtl Method doGet Started");

		String op = DataUtility.getString(request.getParameter("operation"));

		// get model
		StudentModel model = (StudentModel) populateModel(request);

		long id = model.getId();

		if (OP_SAVE.equalsIgnoreCase(op)) {
			try {
				if (id > 0) {
					model.update();
				} else {
					System.out.println("model"+DataUtility.getString(request
				.getParameter("firstName")));
					long pk = model.add();
					
					model.setId(pk);
				}
				ServletUtility.setModel(model, request);
				ServletUtility.setSuccessMessage("Data is successfully saved",
						request);
			} catch (ApplicationException e) {
				log.error(e);
				ServletUtility.handleException(e, request, response);
				return;
			}

		} else if (OP_DELETE.equalsIgnoreCase(op)) {
			try {
				model.delete();
				ServletUtility.redirect(ORSView.STUDENT_LIST_CTL, request,
						response);
				return;
			} catch (ApplicationException e) {
				log.error(e);
				ServletUtility.handleException(e, request, response);
				return;
			}
		} else {
			if (id > 0 || op != null) {
				StudentModel model1;
				try {
					model1 = model.findByPK(id);
					ServletUtility.setModel(model1, request);
				} catch (ApplicationException e) {

					ServletUtility.handleException(e, request, response);
					return;
				}
			}
		}
		ServletUtility.forwardView(ORSView.STUDENT_VIEW, request, response);
		log.debug("StudentCtl Method doGet Ended");
	}

	/**
	 * Contains Display Logic
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		Long id = DataUtility.getLong(request.getParameter("id"));

		StudentModel model = new StudentModel();
		UserModel userModel = ServletUtility.getUserModel(request);
		model.setCollegeId(userModel.getCollegeId());

		if (id > 0) {
			try {
				model = model.findByPK(id);
			} catch (ApplicationException e) {
				ServletUtility.handleException(e, request, response);
				return;
			}
		}

		ServletUtility.setModel(model, request);

		ServletUtility.forwardView(ORSView.STUDENT_VIEW, request, response);
	}

	@Override
	protected String getView() {
		return ORSView.STUDENT_VIEW;
	}

	@Override
	protected void setAccess(HttpServletRequest request) {
		super.setAccess(request);
		AccessUtility.setWriteAccess("" + AppRole.SUPER_ADMIN + ""
				+ AppRole.ADMIN, request);

		AccessUtility.setWriteAccess("" + AppRole.SUPER_ADMIN + ""
				+ AppRole.ADMIN, request);

	}
}
