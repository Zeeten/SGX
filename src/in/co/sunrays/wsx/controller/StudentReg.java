package in.co.sunrays.wsx.controller;

import in.co.sunrays.util.DataUtility;
import in.co.sunrays.wsx.exception.ApplicationException;
import in.co.sunrays.wsx.model.StudentModel;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class StudentReg extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {

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
		model.setDrivingValidation(DataUtility.getDate1(request.getParameter("drivingValidation")));
		model.setPassPortNo(DataUtility.getString(request.getParameter("passPortNo")));
		model.setPassPortIssuingAuthority(DataUtility.getString(request.getParameter("passPortIssuingAuthority")));
		model.setPassPortValidTill(DataUtility.getDate1(request.getParameter("passPortValidTill")));
		model.setResponsiblePersonName1(DataUtility.getString(request.getParameter("responsiblePersonName1")));
		model.setResponsiblePerconAddress1(DataUtility.getString(request.getParameter("responsiblePerconAddress1")));
		model.setResponsiblePersonPinCode1(DataUtility.getLong(request.getParameter("responsiblePersonPinCode1")));
		model.setResponsiblePersonName2(DataUtility.getString(request.getParameter("responsiblePersonName2")));
		model.setResponsiblePerconAddress2(DataUtility.getString(request.getParameter("responsiblePerconAddress2")));
		model.setResponsiblePersonPinCode2(DataUtility.getLong(request.getParameter("responsiblePersonPinCode2")));
		
		model.setRollNo(DataUtility.getString(request.getParameter("rollNo")));
		model.setPlaceOfBirth(DataUtility.getString(request.getParameter("placeOfBirth")));
				model.setUserId(DataUtility.getLong(request.getParameter("userId")));
		long pk = 0;
		boolean success = true;

		// {sucess:"true", error : "no error",id :"89"}

		String json = "";

		try {
			pk = model.add();
			json = "{sucess:\"true\", error : \"no error\",id :\"" + pk + "\"}";
		} catch (ApplicationException e) {
			json = "{sucess:\"false\", error : \"" + e.getMessage()
					+ "\",id :\"-1\"}";
		}

		response.setContentType("application/json");
		PrintWriter out = response.getWriter();
		out.print(json);
		out.close();
	}

}
