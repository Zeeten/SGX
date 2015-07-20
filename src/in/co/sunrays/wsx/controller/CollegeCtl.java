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
import in.co.sunrays.wsx.model.DistrictModel;
import in.co.sunrays.wsx.model.IndustryModel;
import in.co.sunrays.wsx.model.PostOfficeModel;
import in.co.sunrays.wsx.model.PrincipalEmployerModel;
import in.co.sunrays.wsx.model.StaffModel;
import in.co.sunrays.wsx.model.StateModel;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

/**
 * Servlet implementation class CollegeCtl
 */

public class CollegeCtl extends BaseCtl {

	/**
	 * Logger to log the messages.
	 */
	private static Logger log = Logger.getLogger(CollegeCtl.class);

	/**
	 * Loads pre-loaded data like Dropdown List.
	 */
	@Override
	protected void preload(HttpServletRequest request) {
		HttpSession session = request.getSession(true);
		UserModel sessionModel = (UserModel) session.getAttribute("user");
		Long id = sessionModel.getCollegeId();
		if(id==0){
			 id = DataUtility.getLong(request.getParameter("id"));	
		}
		 IndustryModel model = new IndustryModel();
		 CountryModel countryModel = new CountryModel();
		 StateModel statemodel=new StateModel();
		 PrincipalEmployerModel principalModel = new PrincipalEmployerModel();
		 try {
				List list = model.search();
				request.setAttribute("industryList", list);
				List countryList = countryModel.search();
				request.setAttribute("countryList", countryList);
				List esicStateList = statemodel.search();
				request.setAttribute("esicStateList", esicStateList);
				List epfStateList = statemodel.search();
				request.setAttribute("epfStateList", epfStateList);
				List profStateList = statemodel.search();
				request.setAttribute("profStateList", profStateList);
				List serStateList = statemodel.search();
				request.setAttribute("serStateList", serStateList);
				
				principalModel.setId(UserFilterManager.getOrganizationId(request));
				System.out.println("model"+UserFilterManager.getOrganizationId(request));
				List organizationList = principalModel.search();
				request.setAttribute("organizationList", organizationList);
				
				if (id > 0) {
					CollegeModel collegemodel = new CollegeModel();
					StateModel stateModel = new StateModel();
					DistrictModel districtModel = new DistrictModel();
					AreaModel areaModel = new AreaModel();
					CityModel cityModel = new CityModel();
					PostOfficeModel postOfficeModel = new PostOfficeModel();
					
					collegemodel.setOrganizationId(UserFilterManager.getOrganizationId(request));
					collegemodel = collegemodel.findByPK(id);
				if(collegemodel.getStateId()>0){	
				stateModel.setId(collegemodel.getStateId());
				List stateList = stateModel.search();
				request.setAttribute("stateList", stateList);
				}
			
				
				if(collegemodel.getDistrictId()>0){
				districtModel.setId(collegemodel.getDistrictId());
				List districtList = districtModel.search();
				request.setAttribute("districtList", districtList);
				}
				
				if(collegemodel.getCityId()>0){
				cityModel.setId(collegemodel.getCityId());
				List cityList = cityModel.search();
				request.setAttribute("cityList", cityList);
				}
				
				if(collegemodel.getAreaId()>0){
				areaModel.setId(collegemodel.getAreaId());
				List areaList = areaModel.search();
				request.setAttribute("areaList", areaList);
				}
				
				if(collegemodel.getPostOfficeId()>0){
				postOfficeModel.setId(collegemodel.getPostOfficeId());
				List postOfficeList = postOfficeModel.search();
				request.setAttribute("postOfficeList", postOfficeList);
				}
				if(collegemodel.getEsicDistrictId()>0){
					districtModel.setId(collegemodel.getEsicDistrictId());
					List esicDistrictList = districtModel.search();
					request.setAttribute("esicDistrictList", esicDistrictList);
					}
				if(collegemodel.getEpfDistrictId()>0){
					districtModel.setId(collegemodel.getEpfDistrictId());
					List epfDistrictList = districtModel.search();
					request.setAttribute("epfDistrictList", epfDistrictList);
					}
				if(collegemodel.getProfDistrictId()>0){
					districtModel.setId(collegemodel.getProfDistrictId());
					List profDistrictList = districtModel.search();
					request.setAttribute("profDistrictList", profDistrictList);
					}
				if(collegemodel.getSerDistrictId()>0){
					districtModel.setId(collegemodel.getSerDistrictId());
					List serDistrictList = districtModel.search();
					request.setAttribute("serDistrictList", serDistrictList);
					}
				if(collegemodel.getStateOneId()>0){	
					stateModel.setId(collegemodel.getStateOneId());
					List stateOneList = stateModel.search();
					request.setAttribute("stateOneList", stateOneList);
					}
				if(collegemodel.getStateTwoId()>0){	
					stateModel.setId(collegemodel.getStateTwoId());
					List stateTwoList = stateModel.search();
					request.setAttribute("stateTwoList", stateTwoList);
					}
				if(collegemodel.getStateThreeId()>0){	
					stateModel.setId(collegemodel.getStateThreeId());
					List stateThreeList = stateModel.search();
					request.setAttribute("stateThreeList", stateThreeList);
					}
				if(collegemodel.getState4Id()>0){	
					stateModel.setId(collegemodel.getState4Id());
					List state4List = stateModel.search();
					request.setAttribute("state4List", state4List);
					}
				if(collegemodel.getDistrict1Id()>0){
					districtModel.setId(collegemodel.getDistrict1Id());
					List district1List = districtModel.search();
					request.setAttribute("district1List", district1List);
					}
				if(collegemodel.getDistrict2Id()>0){
					districtModel.setId(collegemodel.getDistrict2Id());
					List district2List = districtModel.search();
					request.setAttribute("district2List", district2List);
					}
				if(collegemodel.getDistrict3Id()>0){
					districtModel.setId(collegemodel.getDistrict3Id());
					List district3List = districtModel.search();
					request.setAttribute("district3List", district3List);
					}
				if(collegemodel.getDistrict4Id()>0){
					districtModel.setId(collegemodel.getDistrict4Id());
					List district4List = districtModel.search();
					request.setAttribute("district4List", district4List);
					}
				if(collegemodel.getOwnerStateId()>0){	
					stateModel.setId(collegemodel.getOwnerStateId());
					List ownerStateList = stateModel.search();
					request.setAttribute("ownerStateList", ownerStateList);
					}
				if(collegemodel.getOwnerDistrictId()>0){
					districtModel.setId(collegemodel.getOwnerDistrictId());
					List ownerDistrictList = districtModel.search();
					request.setAttribute("ownerDistrictList", ownerDistrictList);
					}
				if(collegemodel.getOwnerCityId()>0){
					cityModel.setId(collegemodel.getOwnerCityId());
					List ownerCityList = cityModel.search();
					request.setAttribute("ownerCityList", ownerCityList);
					}
				if(collegemodel.getOwnerAreaId()>0){
					areaModel.setId(collegemodel.getOwnerAreaId());
					List ownerAreaList = areaModel.search();
					request.setAttribute("ownerAreaList", ownerAreaList);
					}
					
					if(collegemodel.getOwnerPostOfficeId()>0){
					postOfficeModel.setId(collegemodel.getOwnerPostOfficeId());
					List ownerPostOfficeList = postOfficeModel.search();
					request.setAttribute("ownerPostOfficeList", ownerPostOfficeList);
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

		log.debug("CollegeCtl Method validate Started");

		boolean pass = true;
		String emailId = request.getParameter("emailId");

		if (DataValidator.isNull(request.getParameter("companyname"))) {
			request.setAttribute("companyname",
					PropertyReader.getValue("error.require", "companyname"));
			pass = false;
		}	
		if (DataValidator.isNull(request.getParameter("industryId"))) {
			request.setAttribute("industryId",
					PropertyReader.getValue("error.require", "industryId"));
			pass = false;
		}	
		if (DataValidator.isNull(request.getParameter("village"))) {
			request.setAttribute("village",
					PropertyReader.getValue("error.require", "village"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("country"))) {
			request.setAttribute("country",
					PropertyReader.getValue("error.require", "country"));
			pass = false;
		}	
		if (DataValidator.isNull(request.getParameter("state"))) {
			request.setAttribute("state",
					PropertyReader.getValue("error.require", "state"));
			pass = false;
		}	
		if (DataValidator.isNull(request.getParameter("district"))) {
			request.setAttribute("district",
					PropertyReader.getValue("error.require", "district"));
			pass = false;
		}	
		if (DataValidator.isNull(request.getParameter("city"))) {
			request.setAttribute("city",
					PropertyReader.getValue("error.require", "city"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("area"))) {
			request.setAttribute("area",
					PropertyReader.getValue("error.require", "Area"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("postOffice"))) {
			request.setAttribute("postOffice",
					PropertyReader.getValue("error.require", "Post Office"));
			pass = false;
		}
		

		if (DataValidator.isNull(request.getParameter("stdCodePhoneNoOne"))) {
			request.setAttribute("stdCodePhoneNoOne",
					PropertyReader.getValue("error.require", "STD Code"));
			pass = false;
		}
		if (!DataValidator.isNumber(request.getParameter("stdCodePhoneNoOne"))) {
			request.setAttribute("stdCodePhoneNoOne",
					PropertyReader.getValue("error.number", "STD Code"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("phoneNoOne"))) {
			request.setAttribute("phoneNoOne",
					PropertyReader.getValue("error.require", "Phone No"));
			pass = false;
		}
		if (!DataValidator.isNumber(request.getParameter("phoneNoOne"))) {
			request.setAttribute("phoneNoOne",
					PropertyReader.getValue("error.number", "Phone No"));
			pass = false;
		}
		
		
		if (DataValidator.isNull(request.getParameter("orgEmailIdOne"))) {
			request.setAttribute("orgEmailIdOne",
					PropertyReader.getValue("error.require", "Email Id"));
			pass = false;
		}else if (!DataValidator.isEmail(request.getParameter("orgEmailIdOne"))) {
			request.setAttribute("orgEmailIdOne",
					PropertyReader.getValue("error.email", "Email Id"));
			pass = false;
		}if (DataValidator.isNull(request.getParameter("ownerName"))) {
			request.setAttribute("ownerName",
					PropertyReader.getValue("error.require", "Name of Owner"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("ownerAddress"))) {
			request.setAttribute("ownerAddress",
					PropertyReader.getValue("error.require", "Address"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("ownerCountryId"))) {
			request.setAttribute("ownerCountryId",
					PropertyReader.getValue("error.require", "Country"));
			pass = false;
		}if (DataValidator.isNull(request.getParameter("ownerStateId"))) {
			request.setAttribute("ownerStateId",
					PropertyReader.getValue("error.require", "State"));
			pass = false;
		}if (DataValidator.isNull(request.getParameter("ownerDistrictId"))) {
			request.setAttribute("ownerDistrictId",
					PropertyReader.getValue("error.require", "District"));
			pass = false;
		}if (DataValidator.isNull(request.getParameter("ownerCityId"))) {
			request.setAttribute("ownerCityId",
					PropertyReader.getValue("error.require", "City"));
			pass = false;
		}if (DataValidator.isNull(request.getParameter("ownerAreaId"))) {
			request.setAttribute("ownerAreaId",
					PropertyReader.getValue("error.require", "Area"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("ownerPostOfficeId"))) {
			request.setAttribute("ownerPostOfficeId",
					PropertyReader.getValue("error.require", "Post Office"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("ownerPINCode"))) {
			request.setAttribute("ownerPINCode",
					PropertyReader.getValue("error.require", "Pin Code"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("ownerMobileNo"))) {
			request.setAttribute("ownerMobileNo",
					PropertyReader.getValue("error.require", "Mobile No"));
			pass = false;
		}
		if (!DataValidator.isNumber(request.getParameter("ownerMobileNo"))) {
			request.setAttribute("ownerMobileNo",
					PropertyReader.getValue("error.number", "Mobile No"));
			pass = false;
		}
		if (!DataValidator.isNumberLenth(request.getParameter("ownerMobileNo"))) {
			request.setAttribute("ownerMobileNo",
					PropertyReader.getValue("error.length", "Mobile No"));
			pass = false;
		}
		
	
		if (DataValidator.isNull(request.getParameter("ownerEmail"))) {
			request.setAttribute("ownerEmail",
					PropertyReader.getValue("error.require", "Email Id"));
			pass = false;
		}else if (!DataValidator.isEmail(request.getParameter("ownerEmail"))) {
			request.setAttribute("ownerEmail",
					PropertyReader.getValue("error.email", "Email Id"));
			pass = false;
		}if (DataValidator.isNull(request.getParameter("contactPersonName"))) {
			request.setAttribute("contactPersonName",
					PropertyReader.getValue("error.require", "Name"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("contactPersonMobileNo"))) {
			request.setAttribute("contactPersonMobileNo",
					PropertyReader.getValue("error.require", "Contact Person Mobile No"));
			pass = false;
		}
		if (!DataValidator.isNumber(request.getParameter("contactPersonMobileNo"))) {
			request.setAttribute("contactPersonMobileNo",
					PropertyReader.getValue("error.number", "Contact Person Mobile No"));
			pass = false;
		}
		if (!DataValidator.isNumberLenth(request.getParameter("contactPersonMobileNo"))) {
			request.setAttribute("contactPersonMobileNo",
					PropertyReader.getValue("error.length", "Contact Person Mobile No"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("contactPersonEmail"))) {
			request.setAttribute("contactPersonEmail",
					PropertyReader.getValue("error.require", "Email Id"));
			pass = false;
		}else if (!DataValidator.isEmail(request.getParameter("contactPersonEmail"))) {
			request.setAttribute("contactPersonEmail",
					PropertyReader.getValue("error.email", "Email Id"));
			pass = false;
		}
		
		
		
		log.debug("CollegeCtl Method validate Ended");

		return pass;
	}

	@Override
	protected BaseModel populateModel(HttpServletRequest request) {

		log.debug("CollegeCtl Method populatebean Started");

		CollegeModel model = new CollegeModel();

		model.setId(DataUtility.getLong(request.getParameter("id")));

		// bean.setRoleId(RoleBean.STUDENT);
		model.setName(DataUtility.getString(request.getParameter("name")));
		model.setEmailId(DataUtility.getString(request.getParameter("emailId")));
		model.setPhoneNo(DataUtility.getString(request.getParameter("phoneNo")));
	model.setDescription(DataUtility.getString(request
				.getParameter("description")));
	model.setAddress(DataUtility.getString(request.getParameter("address")));
	
	model.setCompanyName(DataUtility.getString(request.getParameter("companyname")));
	model.setIndustryId(DataUtility.getLong(request.getParameter("industryId")));
	model.setHouseNo(DataUtility.getString(request.getParameter("houseNo")));
	model.setVillage(DataUtility.getString(request.getParameter("village")));
	model.setRoad(DataUtility.getString(request.getParameter("road")));
	model.setCountryId(DataUtility.getLong(request.getParameter("country")));
	model.setStateId(DataUtility.getLong(request.getParameter("state")));
	model.setDistrictId(DataUtility.getLong(request.getParameter("district")));
	model.setCityId(DataUtility.getLong(request.getParameter("city")));
	model.setAreaId(DataUtility.getLong(request.getParameter("area")));
	model.setPostOfficeId(DataUtility.getLong(request.getParameter("postOffice")));
	model.setPinCodeId(DataUtility.getLong(request.getParameter("pinCode")));
	model.setStdCodePhoneNoOne(DataUtility.getString(request.getParameter("stdCodePhoneNoOne")));
	model.setPhoneNoOne(DataUtility.getString(request.getParameter("phoneNoOne")));
	model.setStdCodePhoneNoTwo(DataUtility.getString(request.getParameter("stdCodePhoneNoTwo")));
	model.setPhoneNoTwo(DataUtility.getString(request.getParameter("phoneNoTwo")));
	model.setOrgEmailIdOne(DataUtility.getString(request.getParameter("orgEmailIdOne")));
	model.setOrgEmailIdTwo(DataUtility.getString(request.getParameter("orgEmailIdTwo")));
	
	model.setShopLicenseNo(DataUtility.getString(request.getParameter("establishmentNo")));
	model.setIssueAuthority(DataUtility.getString(request.getParameter("estbIssuingAuthority")));
	model.setShopValidFrom(DataUtility.getDate(request.getParameter("establishmentFrom")));
	model.setShopValidTill(DataUtility.getDate(request.getParameter("establishmentTill")));
	model.setPlaceOfIssue(DataUtility.getString(request.getParameter("shopEstbPlace")));
	
	model.setEsicNo(DataUtility.getString(request.getParameter("esicNo")));
	model.setEsicIssuingAuthority(DataUtility.getString(request.getParameter("esicIssuingAuthority")));
	model.setEsicPlace(DataUtility.getString(request.getParameter("esicPlace")));
	model.setEsicStateId(DataUtility.getLong(request.getParameter("esicStateId")));
	model.setEsicDistrictId(DataUtility.getLong(request.getParameter("esicDistrictId")));
	model.setEpfAccNo(DataUtility.getString(request.getParameter("epfAccNo")));
	model.setEpfAuthority(DataUtility.getString(request.getParameter("epfAuthority")));
	model.setEpfPlace(DataUtility.getString(request.getParameter("epfPlace")));
	model.setEpfStateId(DataUtility.getLong(request.getParameter("epfStateId")));
	model.setEpfDistrictId(DataUtility.getLong(request.getParameter("epfDistrictId")));
	model.setProfessionalTax(DataUtility.getString(request.getParameter("professionalTax")));
	model.setProfTaxAuthority(DataUtility.getString(request.getParameter("profTaxAuthority")));
	model.setProfTaxPlace(DataUtility.getString(request.getParameter("profTaxPlace")));
	model.setProfStateId(DataUtility.getLong(request.getParameter("profStateId")));
	model.setProfDistrictId(DataUtility.getLong(request.getParameter("profDistrictId")));
	model.setWcaNo(DataUtility.getString(request.getParameter("wcaNo")));
	model.setWcaFrom(DataUtility.getDate(request.getParameter("wcaFrom")));
	model.setWcaTo(DataUtility.getDate(request.getParameter("wcaTo")));
	model.setWcaCompany(DataUtility.getString(request.getParameter("wcaCompany")));
	model.setServiceTax(DataUtility.getString(request.getParameter("serviceTax")));
	model.setServiceTaxAuthority(DataUtility.getString(request.getParameter("serviceTaxAuthority")));
	model.setSerTaxPlace(DataUtility.getString(request.getParameter("serTaxPlace")));
	model.setSerStateId(DataUtility.getLong(request.getParameter("serStateId")));
	model.setSerDistrictId(DataUtility.getLong(request.getParameter("serDistrictId")));
	model.setPanCard(DataUtility.getString(request.getParameter("panCard")));
	
	model.setName1(DataUtility.getString(request.getParameter("name1")));
	model.setName2(DataUtility.getString(request.getParameter("name2")));
	model.setName3(DataUtility.getString(request.getParameter("name3")));
	model.setName4(DataUtility.getString(request.getParameter("name4")));
	model.setRegistrationNo1(DataUtility.getString(request.getParameter("registrationNo1")));
	model.setRegistrationNo2(DataUtility.getString(request.getParameter("registrationNo2")));
	model.setRegistrationNo3(DataUtility.getString(request.getParameter("registrationNo3")));
	model.setRegistrationNo4(DataUtility.getString(request.getParameter("registrationNo4")));
	model.setCountryOneId(DataUtility.getLong(request.getParameter("countryOneId")));
	model.setCountryTwoId(DataUtility.getLong(request.getParameter("countryTwoId")));
	model.setCountryThreeId(DataUtility.getLong(request.getParameter("countryThreeId")));
	model.setCountry4Id(DataUtility.getLong(request.getParameter("country4Id")));
	model.setStateOneId(DataUtility.getLong(request.getParameter("stateOneId")));
	model.setStateTwoId(DataUtility.getLong(request.getParameter("stateTwoId")));
	model.setStateThreeId(DataUtility.getLong(request.getParameter("stateThreeId")));
	model.setState4Id(DataUtility.getLong(request.getParameter("state4Id")));
	model.setDistrict1Id(DataUtility.getLong(request.getParameter("district1Id")));
	model.setDistrict2Id(DataUtility.getLong(request.getParameter("district2Id")));
	model.setDistrict3Id(DataUtility.getLong(request.getParameter("district3Id")));
	model.setDistrict4Id(DataUtility.getLong(request.getParameter("district4Id")));
	model.setOwnerName(DataUtility.getString(request.getParameter("ownerName")));
	model.setOwnerHouseFlatDoorBlockNo(DataUtility.getString(request.getParameter("ownerHouseFlatDoorBlockNo")));
	model.setOwnerAddress(DataUtility.getString(request.getParameter("ownerAddress")));
	model.setOwnerRoadStreetLane(DataUtility.getString(request.getParameter("ownerRoadStreetLane")));
	model.setOwnerCountryId(DataUtility.getLong(request.getParameter("ownerCountryId")));
	model.setOwnerStateId(DataUtility.getLong(request.getParameter("ownerStateId")));
	model.setOwnerDistrictId(DataUtility.getLong(request.getParameter("ownerDistrictId")));
	model.setOwnerCityId(DataUtility.getLong(request.getParameter("ownerCityId")));
	model.setOwnerAreaId(DataUtility.getLong(request.getParameter("ownerAreaId")));
	model.setOwnerPostOfficeId(DataUtility.getLong(request.getParameter("ownerPostOfficeId")));
	model.setOwnerPinCode(DataUtility.getString(request.getParameter("ownerPINCode")));
	model.setOwnerStdCodePhoneNo(DataUtility.getString(request.getParameter("ownerStdCodePhoneNo")));
	model.setOwnerPhoneNo(DataUtility.getString(request.getParameter("ownerPhoneNo")));
	model.setOwnerMobileNo(DataUtility.getString(request.getParameter("ownerMobileNo")));
	model.setOwnerEmail(DataUtility.getString(request.getParameter("ownerEmail")));
	model.setContactPersonName(DataUtility.getString(request.getParameter("contactPersonName")));
	model.setContactPersonMobileNo(DataUtility.getString(request.getParameter("contactPersonMobileNo")));
	model.setContactPersonEmail(DataUtility.getString(request.getParameter("contactPersonEmail")));
	model.setOrganizationId(DataUtility.getLong(request.getParameter("organizationId")));
	
	   model = populateModel(model, request);
	
		log.debug("CollegeCtl Method populatemodel Ended");

		return model;
	}

	/**
	 * 
	 * Contains Submit Logic
	 * 
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		log.debug("CollegeCtl Method doPost Started");

		String op = DataUtility.getString(request.getParameter("operation"));

		// get model
		CollegeModel model = (CollegeModel) populateModel(request);
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
			}catch (DuplicateRecordException e) {
				log.error(e);
				ServletUtility.setModel(model, request);
				ServletUtility.setErrorMessage("College name allready exists !",
						request);
				ServletUtility.forwardView(ORSView.COLLEGE_VIEW,
						request, response);
			}

		} else if (OP_DELETE.equalsIgnoreCase(op)) {
			try {
				model.delete();
				ServletUtility.redirect(ORSView.COLLEGE_LIST_CTL, request,
						response);
				return;
			} catch (ApplicationException e) {
				log.error(e);
				ServletUtility.handleException(e, request, response);
				return;
			}
		} else {
			if (id > 0 || op != null) {
				CollegeModel model1;
				try {
					model1 = model.findByPK(id);
					ServletUtility.setModel(model1, request);
				} catch (ApplicationException e) {

					ServletUtility.handleException(e, request, response);
					return;
				}
			}
		}
		ServletUtility.forwardView(ORSView.COLLEGE_VIEW, request, response);
		log.debug("CollegeCtl Method doPost Ended");
	}

	/**
	 * Contains Display Logic
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
	
		HttpSession session = request.getSession(true);
		UserModel sessionModel = (UserModel) session.getAttribute("user");
		
		
		Long id = sessionModel.getCollegeId();
		Long roleId = sessionModel.getRoleId();
		
		if(id==0){
			 id = DataUtility.getLong(request.getParameter("id"));
			 
		}
		
		 
		CollegeModel model = new CollegeModel();
		System.out.println("org12"+UserFilterManager.getOrganizationId(request));
		model.setOrganizationId(UserFilterManager.getOrganizationId(request));
		

		if (id > 0) {
			try {
				model = model.findByPK(id);
				ServletUtility.setModel(model, request);
			} catch (ApplicationException e) {
				ServletUtility.handleException(e, request, response);
				return;
			}
		}
		ServletUtility.setModel(model, request);
		ServletUtility.forwardView(ORSView.COLLEGE_VIEW, request, response);
	}

	@Override
	protected String getView() {
		return ORSView.COLLEGE_VIEW;
	}
	@Override
	protected void setAccess(HttpServletRequest request) {
		super.setAccess(request);
		AccessUtility.setWriteAccess("" +   AppRole.SUPER_ADMIN + "" + AppRole.ADMIN, request);
		
		AccessUtility.setWriteAccess("" +   AppRole.SUPER_ADMIN +"" + AppRole.ADMIN, request);
	
	}
}
