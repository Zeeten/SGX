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
import in.co.sunrays.wsx.exception.DuplicateRecordException;
import in.co.sunrays.wsx.model.AppRole;
import in.co.sunrays.wsx.model.AreaModel;
import in.co.sunrays.wsx.model.CityModel;
import in.co.sunrays.wsx.model.CollegeModel;
import in.co.sunrays.wsx.model.CountryModel;
import in.co.sunrays.wsx.model.DepartementModel;
import in.co.sunrays.wsx.model.DistrictModel;
import in.co.sunrays.wsx.model.PostOfficeModel;
import in.co.sunrays.wsx.model.StaffModel;
import in.co.sunrays.wsx.model.StateModel;
import in.co.sunrays.wsx.model.TrainingModel;

import java.io.IOException;
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
public class StaffCtl extends BaseCtl {

	/**
	 * Logger to log the messages.
	 */
	private static Logger log = Logger.getLogger(StaffCtl.class);

	/**
	 * Loads pre-loaded data like Dropdown List.
	 */
	/*
	 * (non-Javadoc)
	 * 
	 * @see in.co.sunrays.common.controller.BaseCtl#preload(javax.servlet.http.
	 * HttpServletRequest)
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
		request.setAttribute("departementMap", deptList);

		TrainingModel model1 = new TrainingModel();
		try {
			List list = model1.search();
			request.setAttribute("trainingList", list);
			
			List countryList = countryModel.search();
			request.setAttribute("countryList", countryList);
			
		
			if (id > 0) {
				StaffModel staffmodel = new StaffModel();
				StateModel stateModel = new StateModel();
				DistrictModel districtModel = new DistrictModel();
				AreaModel areaModel = new AreaModel();
				CityModel cityModel = new CityModel();
				PostOfficeModel postOfficeModel = new PostOfficeModel();
				staffmodel.setCollegeId(UserFilterManager.getCollegeId(request));
				staffmodel = staffmodel.findByPK(id);
			if(staffmodel.getStateId()>0){	
			stateModel.setId(staffmodel.getStateId());
			List stateList = stateModel.search();
			request.setAttribute("stateList", stateList);
			}
			if(staffmodel.getStatePresentId()>0){
			stateModel.setId(staffmodel.getStatePresentId());
			List statePresentList = stateModel.search();
			request.setAttribute("statePresentList", statePresentList);
			}
			if(staffmodel.getStateHighId()>0){
			stateModel.setId(staffmodel.getStateHighId());
			List stateHighList = stateModel.search();
			request.setAttribute("stateHighList", stateHighList);
			}
			if(staffmodel.getStateHigherId()>0){
			stateModel.setId(staffmodel.getStateHigherId());
			List stateHigherList = stateModel.search();
			request.setAttribute("stateHigherList", stateHigherList);
			}
			if(staffmodel.getStateGraduateId()>0){
			stateModel.setId(staffmodel.getStateGraduateId());
			List stateGraduateList = stateModel.search();
			request.setAttribute("stateGraduateList", stateGraduateList);
			}
			if(staffmodel.getStateHigherGraduateId()>0){
			stateModel.setId(staffmodel.getStateHigherGraduateId());
			List stateHigherGraduateList = stateModel.search();
			request.setAttribute("stateHigherGraduateList", stateHigherGraduateList);
			}
			if(staffmodel.getDistrictId()>0){
			districtModel.setId(staffmodel.getDistrictId());
			List districtList = districtModel.search();
			request.setAttribute("districtList", districtList);
			}
			if(staffmodel.getDistrictPresentId()>0){
			districtModel.setId(staffmodel.getDistrictPresentId());
			List districtPrersentList = districtModel.search();
			request.setAttribute("districtPrersentList", districtPrersentList);
			}
			if(staffmodel.getDistrictHighId()>0){
			districtModel.setId(staffmodel.getDistrictHighId());
			List districtHighList = districtModel.search();
			request.setAttribute("districtHighList", districtHighList);
			}
			if(staffmodel.getDistrictHigherId()>0){
			districtModel.setId(staffmodel.getDistrictHigherId());
			List districtHigherList = districtModel.search();
			request.setAttribute("districtHigherList", districtHigherList);
			}
			if(staffmodel.getDistrictGraduateId()>0){
			districtModel.setId(staffmodel.getDistrictGraduateId());
			List districtGraduateList = districtModel.search();
			request.setAttribute("districtGraduateList", districtGraduateList);
			}
			if(staffmodel.getDistrictHigherGraduateId()>0){
			districtModel.setId(staffmodel.getDistrictHigherGraduateId());
			List districtHigherGraduateList = districtModel.search();
			request.setAttribute("districtHigherGraduateList", districtHigherGraduateList);
			}
			if(staffmodel.getCityId()>0){
			cityModel.setId(staffmodel.getCityId());
			List cityList = cityModel.search();
			request.setAttribute("cityList", cityList);
			}
			if(staffmodel.getCityPresentId()>0){
			cityModel.setId(staffmodel.getCityPresentId());
			List cityPresentList = cityModel.search();
			request.setAttribute("cityPresentList", cityPresentList);
			}
			if(staffmodel.getCityHighId()>0){
			cityModel.setId(staffmodel.getCityHighId());
			List cityHighList = cityModel.search();
			request.setAttribute("cityHighList", cityHighList);
			}
			if(staffmodel.getCityHigherId()>0){
			cityModel.setId(staffmodel.getCityHigherId());
			List cityHigherList = cityModel.search();
			request.setAttribute("cityHigherList", cityHigherList);
			}
			if(staffmodel.getCityGraduateId()>0){
			cityModel.setId(staffmodel.getCityGraduateId());
			List cityGraduateList = cityModel.search();
			request.setAttribute("cityGraduateList", cityGraduateList);
			}
			if(staffmodel.getCityHigherGraduateId()>0){
			cityModel.setId(staffmodel.getCityHigherGraduateId());
			List cityHigherGraduateList = cityModel.search();
			request.setAttribute("cityHigherGraduateList", cityHigherGraduateList);
			}
			if(staffmodel.getAreaId()>0){
			areaModel.setId(staffmodel.getAreaId());
			List areaList = areaModel.search();
			request.setAttribute("areaList", areaList);
			}
			if(staffmodel.getAreaPresrentId()>0){
			areaModel.setId(staffmodel.getAreaPresrentId());
			List areaPresentList = areaModel.search();
			request.setAttribute("areaPresentList", areaPresentList);
			}
			if(staffmodel.getAreaHighId()>0){
			areaModel.setId(staffmodel.getAreaHighId());
			List areaHighList = areaModel.search();
			request.setAttribute("areaHighList", areaHighList);
			}
			if(staffmodel.getAreaHigherId()>0){
			areaModel.setId(staffmodel.getAreaHigherId());
			List areaHigherList = areaModel.search();
			request.setAttribute("areaHigherList", areaHigherList);
			}
			if(staffmodel.getAreaGraduateId()>0){
			areaModel.setId(staffmodel.getAreaGraduateId());
			List areaGraduateList = areaModel.search();
			request.setAttribute("areaGraduateList", areaGraduateList);
			}
			if(staffmodel.getAreaHigherGraduateId()>0){
			areaModel.setId(staffmodel.getAreaHigherGraduateId());
			List areaHigherGraduateList = areaModel.search();
			request.setAttribute("areaHigherGraduateList", areaHigherGraduateList);
			}
			if(staffmodel.getPostOfficeId()>0){
			postOfficeModel.setId(staffmodel.getPostOfficeId());
			List postOfficeList = postOfficeModel.search();
			request.setAttribute("postOfficeList", postOfficeList);
			}
			if(staffmodel.getPostOfficePresentId()>0){
			postOfficeModel.setId(staffmodel.getPostOfficePresentId());
			List postOfficePresentList = postOfficeModel.search();
			request.setAttribute("postOfficePresentList", postOfficePresentList);
			}
			if(staffmodel.getPostOfficeHighId()>0){
			postOfficeModel.setId(staffmodel.getPostOfficeHighId());
			List postOfficeHighList = postOfficeModel.search();
			request.setAttribute("postOfficeHighList", postOfficeHighList);
			}
			if(staffmodel.getPostOfficeHigherId()>0){
			postOfficeModel.setId(staffmodel.getPostOfficeHigherId());
			List postOfficeHigherList = postOfficeModel.search();
			request.setAttribute("postOfficeHigherList", postOfficeHigherList);
			}
			if(staffmodel.getPostOfficeGraduateId()>0){
			postOfficeModel.setId(staffmodel.getPostOfficeGraduateId());
			List postOfficeGraduateList = postOfficeModel.search();
			request.setAttribute("postOfficeGraduateList", postOfficeGraduateList);
			}
			if(staffmodel.getPostOfficeHigherGraduateId()>0){
			postOfficeModel.setId(staffmodel.getPostOfficeHigherGraduateId());
			List postOfficeHigherGraduateList = postOfficeModel.search();
			request.setAttribute("postOfficeHigherGraduateList", postOfficeHigherGraduateList);
			}
			}
		} catch (ApplicationException e) {
			log.error(e);
		}
	}

	/**
	 * Validates Input data
	 */
	@Override
	protected boolean validate(HttpServletRequest request) {

		log.debug("StaffCtl Method validate Started");

		boolean pass = true;
		if (DataValidator.isNull(request.getParameter("firstName"))) {
			request.setAttribute("firstName",
					PropertyReader.getValue("error.require", "First Name"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("lastName"))) {
			request.setAttribute("lastName",
					PropertyReader.getValue("error.require", "Last Name"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("departementId"))) {
			request.setAttribute("departementId",
					PropertyReader.getValue("error.require", "Sector Name"));
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
		if (DataValidator.isNull(request.getParameter("martialStatus"))) {
			request.setAttribute("martialStatus",
					PropertyReader.getValue("error.require", "Martial Status"));
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
		
		if (DataValidator.isNull(request.getParameter("doj"))) {
			request.setAttribute("doj",
					PropertyReader.getValue("error.require", "Date Of Joining"));
			pass = false;

		}
		if (DataValidator.isNull(request.getParameter("village"))) {
			request.setAttribute("village",
					PropertyReader.getValue("error.require", "Building"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("presentVillage"))) {
			request.setAttribute("presentVillage",
					PropertyReader.getValue("error.require", "Building"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("country"))) {
			request.setAttribute("country",
					PropertyReader.getValue("error.require", "Country"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("countryPresent"))) {
			request.setAttribute("countryPresent",
					PropertyReader.getValue("error.require", "Country"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("state"))) {
			request.setAttribute("state",
					PropertyReader.getValue("error.require", "State"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("statePresent"))) {
			request.setAttribute("statePresent",
					PropertyReader.getValue("error.require", "State"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("district"))) {
			request.setAttribute("district",
					PropertyReader.getValue("error.require", "District"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("districtPresent"))) {
			request.setAttribute("districtPresent",
					PropertyReader.getValue("error.require", "District"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("city"))) {
			request.setAttribute("city",
					PropertyReader.getValue("error.require", "City"));
			pass = false;
		}
		
		
		if (DataValidator.isNull(request.getParameter("cityPresent"))) {
			request.setAttribute("cityPresent",
					PropertyReader.getValue("error.require", "City"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("area"))) {
			request.setAttribute("area",
					PropertyReader.getValue("error.require", "Area"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("areaPresrent"))) {
			request.setAttribute("areaPresrent",
					PropertyReader.getValue("error.require", "Area"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("postOffice"))) {
			request.setAttribute("postOffice",
					PropertyReader.getValue("error.require", "Post Office"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("postOfficePresent"))) {
			request.setAttribute("postOfficePresent",
					PropertyReader.getValue("error.require", "Post Office"));
			pass = false;
		}
	
		log.debug("StaffCtl Method validate Ended");

		return pass;
	}

	@Override
	protected BaseModel populateModel(HttpServletRequest request) {

		log.debug("StaffCtl Method populatebean Started");

		StaffModel model = new StaffModel();

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
	
		model.setDob(DataUtility.getDate(request.getParameter("dob")));
		model.setGender(DataUtility.getString(request.getParameter("gender")));
		model.setMobileNo(DataUtility.getString(request
				.getParameter("mobileNo")));
		model.setMartialStatus(DataUtility.getString(request
				.getParameter("martialStatus")));
		model.setDoj(DataUtility.getDate(request.getParameter("doj")));
		model.setDor(DataUtility.getDate(request.getParameter("dor")));
		
		model.setHouseNo(DataUtility.getString(request.getParameter("houseNo")));
		model.setPresentHouseNo(DataUtility.getString(request.getParameter("presentHouseNo")));
		model.setVillage(DataUtility.getString(request.getParameter("village")));
		model.setPresentVillage(DataUtility.getString(request.getParameter("presentVillage")));
		model.setRoad(DataUtility.getString(request.getParameter("road")));
		model.setPresentRoad(DataUtility.getString(request.getParameter("presentRoad")));
		model.setGraduate(DataUtility.getString(request.getParameter("graduate")));
		model.setHigherGraduation(DataUtility.getString(request.getParameter("higherGraduation")));
		
		model.setCountryId(DataUtility.getLong(request.getParameter("country")));
		model.setCountryPresentId(DataUtility.getLong(request.getParameter("countryPresent")));
		model.setCountryHighId(DataUtility.getLong(request.getParameter("countryHigh")));
		model.setCountryHigherId(DataUtility.getLong(request.getParameter("countryHigher")));
		model.setCountryGraduateId(DataUtility.getLong(request.getParameter("countryGraduate")));
		model.setCountryHigherGraduateId(DataUtility.getLong(request.getParameter("countryHigherGraduate")));
		
		model.setStateId(DataUtility.getLong(request.getParameter("state")));
		model.setStatePresentId(DataUtility.getLong(request.getParameter("statePresent")));
		model.setStateHighId(DataUtility.getLong(request.getParameter("stateHigh")));
		model.setStateHigherId(DataUtility.getLong(request.getParameter("stateHigher")));
		model.setStateGraduateId(DataUtility.getLong(request.getParameter("stateGraduate")));
		model.setStateHigherGraduateId(DataUtility.getLong(request.getParameter("stateHigherGraduate")));
		
		model.setDistrictId(DataUtility.getLong(request.getParameter("district")));
		model.setDistrictPresentId(DataUtility.getLong(request.getParameter("districtPresent")));
		model.setDistrictHighId(DataUtility.getLong(request.getParameter("districtHigh")));
		model.setDistrictHigherId(DataUtility.getLong(request.getParameter("districtHigher")));
		model.setDistrictGraduateId(DataUtility.getLong(request.getParameter("districtGraduate")));
		model.setDistrictHigherGraduateId(DataUtility.getLong(request.getParameter("districtHigherGraduate")));
	
		model.setCityId(DataUtility.getLong(request.getParameter("city")));
		model.setCityPresentId(DataUtility.getLong(request.getParameter("cityPresent")));
		model.setCityHighId(DataUtility.getLong(request.getParameter("cityHigh")));
		model.setCityHigherId(DataUtility.getLong(request.getParameter("cityHigher")));
		model.setCityGraduateId(DataUtility.getLong(request.getParameter("cityGraduate")));
		model.setCityHigherGraduateId(DataUtility.getLong(request.getParameter("cityHigherGraduate")));
		
		model.setAreaId(DataUtility.getLong(request.getParameter("area")));
		model.setAreaPresrentId(DataUtility.getLong(request.getParameter("areaPresrent")));
		model.setAreaHighId(DataUtility.getLong(request.getParameter("areaHigh")));
		model.setAreaHigherId(DataUtility.getLong(request.getParameter("areaHigher")));
		model.setAreaGraduateId(DataUtility.getLong(request.getParameter("areaGraduate")));
		model.setAreaHigherGraduateId(DataUtility.getLong(request.getParameter("areaHigherGraduate")));
		
		model.setPostOfficeId(DataUtility.getLong(request.getParameter("postOffice")));
		model.setPostOfficePresentId(DataUtility.getLong(request.getParameter("postOfficePresent")));
		model.setPostOfficeHighId(DataUtility.getLong(request.getParameter("postOfficeHigh")));
		model.setPostOfficeHigherId(DataUtility.getLong(request.getParameter("postOfficeHigher")));
		model.setPostOfficeGraduateId(DataUtility.getLong(request.getParameter("postOfficeGraduate")));
		model.setPostOfficeHigherGraduateId(DataUtility.getLong(request.getParameter("postOfficeHigherGraduate")));
		
		model.setPinCodeId(DataUtility.getLong(request.getParameter("pinCode")));
		model.setPersentPinCodeId(DataUtility.getLong(request.getParameter("persentPinCode")));
		model.setHighPinCodeId(DataUtility.getLong(request.getParameter("highPinCode")));
		model.setHigherPinCodeId(DataUtility.getLong(request.getParameter("higherPinCode")));
		model.setGraduatePinCodeId(DataUtility.getLong(request.getParameter("graduatePinCode")));
		model.setHigherGraduatePinCodeId(DataUtility.getLong(request.getParameter("higherGraduatePinCode")));
		
		model.setSchoolName(DataUtility.getString(request.getParameter("schoolName")));
		model.setSchoolNameHigher(DataUtility.getString(request.getParameter("schoolNameHigher")));
		model.setSchoolNameGraduate(DataUtility.getString(request.getParameter("schoolNameGraduate")));
		model.setSchoolNameHigherGraduate(DataUtility.getString(request.getParameter("schoolNameHigherGraduate")));
		
		model.setUniversityHigh(DataUtility.getString(request.getParameter("universityHigh")));
		model.setUniversityHigher(DataUtility.getString(request.getParameter("universityHigher")));
		model.setUniversityGraduate(DataUtility.getString(request.getParameter("universityGraduate")));
		model.setUniversityHigherGraduate(DataUtility.getString(request.getParameter("universityHigherGraduate")));
		
		model.setYearOfPassingHigh(DataUtility.getInt(request.getParameter("yearOfPassingHigh")));
		model.setYearOfPassingHigher(DataUtility.getInt(request.getParameter("yearOfPassingHigher")));
		model.setYearOfPassingGraduate(DataUtility.getInt(request.getParameter("yearOfPassingGraduate")));
		model.setYearOfPassingHigherGraduate(DataUtility.getInt(request.getParameter("yearOfPassingHigherGraduate")));


		model.setPercentage(DataUtility.getFloat(request.getParameter("percentage")));
		model.setPercentageHigher(DataUtility.getFloat(request.getParameter("percentageHigher")));
		model.setPercentageGraduate(DataUtility.getFloat(request.getParameter("percentageGraduate")));
		model.setPercentageHigherGraduate(DataUtility.getFloat(request.getParameter("percentageHigherGraduate")));
		
		model.setSubjectHigh(DataUtility.getString(request.getParameter("subjectHigh")));
		model.setSubjectHigher(DataUtility.getString(request.getParameter("subjectHigher")));
		model.setSubjectGrauduate(DataUtility.getString(request.getParameter("subjectGrauduate")));
		model.setSubjectHigherGraduate(DataUtility.getString(request.getParameter("subjectHigherGraduate")));
		
		model.setGraduate(DataUtility.getString(request.getParameter("graduate")));
		model.setHigherGraduation(DataUtility.getString(request.getParameter("higherGraduation")));
		
		model.setAddress(DataUtility.getString(request.getParameter("address")));
		model.setUserId(DataUtility.getLong(request.getParameter("userId")));

		populateModel(model, request);

		log.debug("StaffCtl Method populatemodel Ended");

		return model;
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		log.debug("StaffCtl Method doGet Started");

		String op = DataUtility.getString(request.getParameter("operation"));

		// get model
		StaffModel model = (StaffModel) populateModel(request);

		long id = model.getId();

		if (OP_SAVE.equalsIgnoreCase(op)) {
			try {
				if (id > 0) {
					model.update();
				} else {
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
			} catch (DuplicateRecordException e) {
				log.error(e);
				ServletUtility.setModel(model, request);
				ServletUtility.setErrorMessage("This code allready exists !",
						request);
				ServletUtility.forwardView(ORSView.COLLEGE_VIEW, request,
						response);
			}

		} else if (OP_DELETE.equalsIgnoreCase(op)) {
			try {
				model.delete();
				ServletUtility.redirect(ORSView.STAFF_LIST_CTL, request,
						response);
				return;
			} catch (ApplicationException e) {
				log.error(e);
				ServletUtility.handleException(e, request, response);
				return;
			}
		} else {
			if (id > 0 || op != null) {
				StaffModel model1;
				try {
					model1 = model.findByPK(id);
					ServletUtility.setModel(model1, request);
				} catch (ApplicationException e) {

					ServletUtility.handleException(e, request, response);
					return;
				}
			}
		}
		ServletUtility.forwardView(ORSView.STAFF_VIEW, request, response);
		log.debug("StaffCtl Method doGet Ended");
	}

	/**
	 * Contains Display Logic
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		Long id = DataUtility.getLong(request.getParameter("id"));

		StaffModel model = new StaffModel();

		model.setCollegeId(UserFilterManager.getCollegeId(request));

		if (id > 0) {
			try {
				
				model = model.findByPK(id);
		
			} catch (ApplicationException e) {
				ServletUtility.handleException(e, request, response);
				return;
			}
		}
		ServletUtility.setModel(model, request);
		ServletUtility.forwardView(ORSView.STAFF_VIEW, request, response);
	}

	@Override
	protected String getView() {
		return ORSView.STAFF_VIEW;
	}

	@Override
	protected void setAccess(HttpServletRequest request) {

		super.setAccess(request);

		AccessUtility.setWriteAccess("" + AppRole.SUPER_ADMIN + ""
				+ AppRole.ADMIN, request);

		AccessUtility.setDeleteAccess("" + AppRole.SUPER_ADMIN + ""
				+ AppRole.ADMIN, request);

	}
}
