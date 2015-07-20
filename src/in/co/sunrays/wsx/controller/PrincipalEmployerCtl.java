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
import in.co.sunrays.wsx.model.DepartementModel;
import in.co.sunrays.wsx.model.DistrictModel;
import in.co.sunrays.wsx.model.IndustryModel;
import in.co.sunrays.wsx.model.PostOfficeModel;
import in.co.sunrays.wsx.model.StaffModel;
import in.co.sunrays.wsx.model.StateModel;
import in.co.sunrays.wsx.model.PrincipalEmployerModel;
import in.co.sunrays.wsx.model.PrincipalEmployerModel;
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



public class PrincipalEmployerCtl extends BaseCtl {
	
	/**
	 * Logger to log the messages.
	 */
	private static Logger log = Logger.getLogger(PrincipalEmployerCtl.class);

	/**
	 * Loads pre-loaded data like Dropdown List.
	 */
	@Override
	protected void preload(HttpServletRequest request) {
		Long id = DataUtility.getLong(request.getParameter("id"));
		IndustryModel model = new IndustryModel();
		
		CountryModel countryModel = new CountryModel();
		try {
			List list = model.search();
			request.setAttribute("industryList", list);
		} catch (ApplicationException e) {
			log.error(e);
		}
		
		try {
		
			List countryList = countryModel.search();
			request.setAttribute("countryList", countryList);
		
			if (id > 0) {
				PrincipalEmployerModel principalEmployerModel = new PrincipalEmployerModel();
				StateModel stateModel = new StateModel();
				DistrictModel districtModel = new DistrictModel();
				AreaModel areaModel = new AreaModel();
				CityModel cityModel = new CityModel();
				PostOfficeModel postOfficeModel = new PostOfficeModel();
				
				principalEmployerModel.setCollegeId(UserFilterManager.getCollegeId(request));
				principalEmployerModel.setOrganizationId(UserFilterManager.getOrganizationId(request));
				
				principalEmployerModel = principalEmployerModel.findByPK(id);
				
			if(principalEmployerModel.getStateId()>0){	
			stateModel.setId(principalEmployerModel.getStateId());
			
			List stateList = stateModel.search();
			request.setAttribute("stateList", stateList);
			}
			
			if(principalEmployerModel.getDistrictId()>0){
			districtModel.setId(principalEmployerModel.getDistrictId());
			List districtList = districtModel.search();
			request.setAttribute("districtList", districtList);
			}
			
			if(principalEmployerModel.getCityId()>0){
			cityModel.setId(principalEmployerModel.getCityId());
			List cityList = cityModel.search();
			request.setAttribute("cityList", cityList);
			}
			
			if(principalEmployerModel.getAreaId()>0){
				areaModel.setId(principalEmployerModel.getAreaId());
				List areaList = areaModel.search();
				request.setAttribute("areaList", areaList);
				}
			
			
			if(principalEmployerModel.getPostOfficeId()>0){
			postOfficeModel.setId(principalEmployerModel.getPostOfficeId());
			List postOfficeList = postOfficeModel.search();
			request.setAttribute("postOfficeList", postOfficeList);
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

		log.debug("PrincipalEmployerCtl Method validate Started");

		boolean pass = true;
		String emailId = request.getParameter("emailId");
		
		String personEmailId = request.getParameter("personEmailId");
		
		if (DataValidator.isNull(request.getParameter("name"))) {
			request.setAttribute("name",
					PropertyReader.getValue("error.require", "Name Of Owner"));

			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("designation"))) {
			request.setAttribute("designation",
					PropertyReader.getValue("error.require", "Designation"));
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
		
		
		if (DataValidator.isNull(request.getParameter("industry"))) {
			request.setAttribute("industry",
					PropertyReader.getValue("error.require", "Industry"));
			pass = false;

		}
		if (DataValidator.isNull(request.getParameter("companyType"))) {
			request.setAttribute("companyType",
					PropertyReader.getValue("error.require", "Company Type"));
			pass = false;

		}
		
		if (DataValidator.isNull(request.getParameter("organization"))) {
			request.setAttribute("organization",
					PropertyReader.getValue("error.require", "Organization"));
			pass = false;

		}
		
		if (DataValidator.isNull(request.getParameter("building"))) {
			request.setAttribute("building",
					PropertyReader.getValue("error.require", "Name of Premises / Building / Village"));
			pass = false;

		}
		if (DataValidator.isNull(request.getParameter("country"))) {
			request.setAttribute("country",
					PropertyReader.getValue("error.require", "Country"));
			pass = false;
		}

		if (DataValidator.isNull(request.getParameter("state"))) {
			request.setAttribute("state",
					PropertyReader.getValue("error.integer", "State"));
			pass = false;
		}
	
		if (DataValidator.isNull(request.getParameter("district"))) {
			request.setAttribute("district",
					PropertyReader.getValue("error.require", "District"));
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
					PropertyReader.getValue("error.require", "PostOffice"));
			pass = false;
		}
		if (DataValidator.isNull(request.getParameter("pinCode"))) {
			request.setAttribute("pinCode",
					PropertyReader.getValue("error.require", "Pin Code"));
			pass = false;
		}
	
		
		if (DataValidator.isNull(request.getParameter("phoneNo"))) {
			request.setAttribute("phoneNo",
					PropertyReader.getValue("error.require", "Phone No"));
			pass = false;
		}
		if (!DataValidator.isNumber(request.getParameter("phoneNo"))) {
			request.setAttribute("phoneNo",
					PropertyReader.getValue("error.number", "Phone No"));
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
		
		if (DataValidator.isNull(request.getParameter("personName"))) {
			request.setAttribute("personName",
					PropertyReader.getValue("error.require", "Person Name"));
			pass = false;
		}
		
		if (DataValidator.isNull(request.getParameter("personMobileNo"))) {
			request.setAttribute("personMobileNo",
					PropertyReader.getValue("error.require", "Person Mobile No"));
			pass = false;
		}
		if (!DataValidator.isNumber(request.getParameter("personMobileNo"))) {
			request.setAttribute("personMobileNo",
					PropertyReader.getValue("error.number", "Person Mobile No"));
			pass = false;
		}
		if (!DataValidator.isNumberLenth(request.getParameter("personMobileNo"))) {
			request.setAttribute("personMobileNo",
					PropertyReader.getValue("error.length", "Person Mobile No"));
			pass = false;
		}
		
		
		if (DataValidator.isNull(personEmailId)) {
			request.setAttribute("personEmailId",
					PropertyReader.getValue("error.require", "Email Id"));
			pass = false;
		} else if (!DataValidator.isEmail(personEmailId)) {
			request.setAttribute("personEmailId",
					PropertyReader.getValue("error.email", "Contact Person Email Id"));
			pass = false;
		}
		
	
		log.debug("PrincipalEmployerCtl Method validate Ended  " + pass);

		return pass;
	}

	@Override
	protected BaseModel populateModel(HttpServletRequest request) {

		log.debug("PrincipalEmployerCtl Method populatebean Started");

		PrincipalEmployerModel model = new PrincipalEmployerModel();

		model.setId(DataUtility.getLong(request.getParameter("id")));

		// bean.setRoleId(RoleBean.STUDENT);
		model.setName(DataUtility.getString(request.getParameter("name")));
		model.setDesignation(DataUtility.getString(request
				.getParameter("designation")));
		model.setOrganization(DataUtility.getString(request
				.getParameter("organization")));
		model.setIndustryId(DataUtility.getLong(request
				.getParameter("industry")));
		model.setCompanyType(DataUtility.getString(request
				.getParameter("companyType")));
		model.setBlockNo(DataUtility.getString(request
				.getParameter("blockNo")));
		
		model.setBilding(DataUtility.getString(request.getParameter("building")));
		model.setRoad(DataUtility.getString(request.getParameter("road")));
		model.setCountryId(DataUtility.getLong(request.getParameter("country")));
		model.setStateId(DataUtility.getLong(request.getParameter("state")));
		model.setDistrictId(DataUtility.getLong(request.getParameter("district")));
		model.setCityId(DataUtility.getLong(request.getParameter("city")));
		model.setAreaId(DataUtility.getLong(request.getParameter("area")));
		model.setPostOfficeId(DataUtility.getLong(request.getParameter("postOffice")));
		model.setPinCodeId(DataUtility.getLong(request.getParameter("pinCode")));
		model.setEmailId(DataUtility.getString(request.getParameter("emailId")));
		
		model.setMobileNo(DataUtility.getString(request
				.getParameter("mobileNo")));
		model.setStdCodePhoneNo(DataUtility.getString(request
				.getParameter("stdCodePhoneNo")));
		model.setPhoneNo(DataUtility.getString(request
				.getParameter("phoneNo")));
		model.setShopNo(DataUtility.getString(request.getParameter("shopNo")));
		model.setShopIssuingAuthority(DataUtility.getString(request.getParameter("shopIssuingAuthority")));
		model.setShopFrom(DataUtility.getDate(request.getParameter("shopFrom")));
		model.setShopTill(DataUtility.getDate(request.getParameter("shopTill")));
		model.setShopPlaceOfIssue(DataUtility.getString(request.getParameter("shopPlaceOfIssue")));
		model.setGovtRegiNo(DataUtility.getString(request.getParameter("govtRegiNo")));
		model.setGovtPanCardNo(DataUtility.getString(request.getParameter("govtPanCardNo")));
		model.setGovtEpfNo(DataUtility.getString(request.getParameter("govtEpfNo")));
		model.setGovtEsicNo(DataUtility.getString(request.getParameter("govtEsicNo")));
		model.setPersonName(DataUtility.getString(request.getParameter("personName")));
		model.setPersonMobileNo(DataUtility.getString(request.getParameter("personMobileNo")));
		model.setPersonEmailId(DataUtility.getString(request.getParameter("personEmailId")));
					
				
		populateModel(model, request);

		log.debug("PrincipalEmployerCtl Method populatemodel Ended");

		return model;
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

		log.debug("PrincipalEmployerCtl Method doGet Started");

		String op = DataUtility.getString(request.getParameter("operation"));

		// get model
		PrincipalEmployerModel model = (PrincipalEmployerModel) populateModel(request);

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
				ServletUtility.setErrorMessage("Oragnization name allready exists !",
						request);
				ServletUtility.forwardView(ORSView.PRINCIPAL_EMPLOYER_VIEW,
						request, response);
			}


		} else if (OP_DELETE.equalsIgnoreCase(op)) {
			try {
				model.delete();
				ServletUtility.redirect(ORSView.PRINCIPAL_EMPLOYER_LIST_CTL, request,
						response);
				return;
			} catch (ApplicationException e) {
				log.error(e);
				ServletUtility.handleException(e, request, response);
				return;
			}
		} else {
			if (id > 0 || op != null) {
				PrincipalEmployerModel model1;
				try {
					model1 = model.findByPK(id);
					ServletUtility.setModel(model1, request);
				} catch (ApplicationException e) {

					ServletUtility.handleException(e, request, response);
					return;
				}
			}
		}
		ServletUtility.forwardView(ORSView.PRINCIPAL_EMPLOYER_VIEW, request, response);
		log.debug("PrincipalEmployerCtl Method doGet Ended");
	}

	/**
	 * Contains Display Logic
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		Long id = DataUtility.getLong(request.getParameter("id"));

		PrincipalEmployerModel model = new PrincipalEmployerModel();
		
		UserModel userModel = ServletUtility.getUserModel(request);
		model.setCollegeId(userModel.getCollegeId());
		model.setOrganizationId(userModel.getOrganizationId());
		
		if (id > 0) {
			try {
				model = model.findByPK(id);
			} catch (ApplicationException e) {
				ServletUtility.handleException(e, request, response);
				return;
			}
		}

		ServletUtility.setModel(model, request);

		ServletUtility.forwardView(ORSView.PRINCIPAL_EMPLOYER_VIEW, request, response);
	}

	@Override
	protected String getView() {
		return ORSView.PRINCIPAL_EMPLOYER_VIEW;
	}

	@Override
	protected void setAccess(HttpServletRequest request) {
		super.setAccess(request);
		AccessUtility.setWriteAccess("" + AppRole.SUPER_ADMIN + ""
				+ AppRole.PRINCIPAL_EMPLOYER + "" + AppRole.ADMIN, request);

		AccessUtility.setWriteAccess("" + AppRole.SUPER_ADMIN + ""
				+ AppRole.PRINCIPAL_EMPLOYER + "" + AppRole.ADMIN, request);

	}
}
	


