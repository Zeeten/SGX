<%@page import="in.co.sunrays.wsx.model.AppRole"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>
<%@page import="in.co.sunrays.wsx.model.CollegeModel"%>
<%@page import="in.co.sunrays.wsx.model.TrainingModel"%>
<%@page import="java.util.List"%>
<%@page import="in.co.sunrays.wsx.controller.StudentCtl"%>
<%@page import="java.util.HashMap"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="java.util.LinkedHashMap"%>


<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="<%=ORSView.JS_FOLDER%>/studentdropdown.js"></script>
<%-- <script src="<%=ORSView.JS_FOLDER%>/studentvalidation.js"></script> --%>

<jsp:useBean id="model" class="in.co.sunrays.wsx.model.StudentModel"
	scope="request" />

<jsp:useBean id="collegeList" class="java.util.ArrayList"
	scope="request" />

<jsp:useBean id="semesterMap" class="java.util.LinkedHashMap"
	scope="request" />

<jsp:useBean id="yearMap" class="java.util.LinkedHashMap"
	scope="request" />

<jsp:useBean id="departementList" class="java.util.ArrayList"
	scope="request" />

<jsp:useBean id="trainingList" class="java.util.ArrayList"
	scope="request" />

<jsp:useBean id="countryList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="statePermanentList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="statePresentList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="stateMetricList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="stateHighList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="stateHigherList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="stateGraduationList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="stateOtherList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="districtPermanentList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="districtPresentList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="districtUnderMetricList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="districtHighList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="districtHigherSecondaryList"
	class="java.util.ArrayList" scope="request" />

<jsp:useBean id="districtGraduationList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="districtOtherList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="cityPermanentList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="cityPresentList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="cityUnderMetricList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="cityHighSchoolList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="cityHigherSecondaryList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="cityGraduationList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="cityOtherList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="postOfficePermanentList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="postOfficePresentList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="postOfficeUnderMetricList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="postOfficeHighList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="postOfficeHigherList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="postOfficeGraduationList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="postOfficeOtherList" class="java.util.ArrayList"
	scope="request" />
	
<jsp:useBean id="languageList" class="java.util.ArrayList"
	scope="request" />

<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>

	<center>
		<br>
		<p>
			<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Trainee
				Registration Form</font>
		</p>
		<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="100%">
<tr>
		<td>
<form  name = "form" action="<%=ORSView.STUDENT_CTL%>" method="POST"  onSubmit="return validateForm()">
<input type="hidden" name="id" value="<%=model.getId()%>">


			<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="75%">
				<tr>
					<td style="border: 1px solid gray;" width="804" colspan="11" class="subheader" height="24">
						Personal Information
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Code
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input
								type="text" name="code" readonly="readonly"
								value="<%=DataUtility.getStringData(model.getCode())%>"></input><font
								color="red"> </font></td>
								
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						First Name
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input
								type="text" name="firstName"
								value="<%=DataUtility.getStringData(model.getFirstName())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("firstName", request)%></font></td>
				</tr>
				
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Middle Name
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input
								type="text" name="middleName"
								value="<%=DataUtility.getStringData(model.getMiddleName())%>"><font
								color="red"> <%=ServletUtility.getErrorMessage("middleName", request)%></font></td>
								
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						Last Name
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input
								type="text" name="lastName"
								value="<%=DataUtility.getStringData(model.getLastName())%>"><font
								color="red"> <%=ServletUtility.getErrorMessage("lastName", request)%></font></td>
				</tr>
				
				
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Father Name
				
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="fatherName"
							value="<%=DataUtility.getStringData(model.getFatherName())%>"></td>
							
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						Mother Name
				
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input type="text" name="motherName"
							value="<%=DataUtility.getStringData(model.getMotherName())%>"></td>
				</tr>
				<tr>
				<td style="border: 1px solid gray;" width="196" class="label" height="24">
						D.O.B *
				
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="dob" readonly="readonly"
								value="<%=DataUtility.getDateString(model.getDob())%>">
								<a href="javascript:getCalendar(document.forms[0].dob);"> <img
									src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
									border="0" alt="Calender">
							</a><font color="red"> <%=ServletUtility.getErrorMessage("dob", request)%></font>
							</td>
							
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						Gender *
				
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<%
									HashMap map = new HashMap();
						           map.put("", "--Select--");
									map.put("M", "Male");
									map.put("F", "Female");

									String htmlList = HTMLUtility.getList("gender", model.getGender(),
											map);
								%> <%=htmlList%>
								<font color="red"><%=ServletUtility.getErrorMessage("gender", request)%></font>
							</td>
				</tr>
				
				
				<tr>
				<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Mobile No. *
				
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="mobileNo" maxlength="10" minlength ="8" 
								value="<%=DataUtility.getStringData(model.getMobileNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("mobileNo", request)%></font>
							</td>
							
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						Telephone No.
				
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input type="text" name="telephoneNo" maxlength="13" minlength ="8"
								value="<%=DataUtility.getStringData(model.getTelephoneNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("telephoneNo", request)%></font>
							</td>
				</tr>
				<tr>
							<td style="border: 1px solid gray;" width="196" class="label"
								height="24">e-mail*</td>
							<td style="border: 1px solid gray;" width="205" colspan="3">
								<input type="text" name="emailId"
								value="<%=DataUtility.getStringData(model.getEmailId())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("emailId", request)%></font>
							</td>
							
						</tr>
					
					</table>
				<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="100%">		
				<tr>
					<td style="border: 1px solid gray;" width="804" colspan="11" class="subheader" height="24">
					Organization Details
					</td>
				</tr>	
				<tr>
				<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Training Center
						*
					</td>
				<td style="border: 1px solid gray;" width="205" colspan="3">
				
					<%=HTMLUtility.getList("collegeIdSel", model.getCollegeId()
					+ "", collegeList, true)%> <input type="hidden" name="collegeId"
							value="<%=model.getCollegeId()%>"><font color="red"> <%=ServletUtility.getErrorMessage("collegeName",
					request)%></font>
					
							</td>
				<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						Sector
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<%=HTMLUtility.getList("departementId",
					model.getDepartementId(), departementList)%>
					
					<font color="red"> <%=ServletUtility.getErrorMessage("departementId",
					request)%></font>
					
							</td>
				</tr>
				<tr>
				<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Training Name*
				
					</td>
				<td style="border: 1px solid gray;" width="205" colspan="3">
				
					<%=HTMLUtility.getList("trainingId", model.getTrainingId(),
					trainingList)%><font color="red"> <%=ServletUtility.getErrorMessage("trainingId",
					request)%></font>
					
							</td>
				</tr>
					
				</table>	
			
						
					<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="100%">	
				
				<tr>
					<td style="border: 1px solid gray;" width="804" colspan="11" class="subheader" height="24">
					Residential Information
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Permanent Address
						*
					</td>
					<td style="border: 1px solid gray;" colspan="3">
						<textarea
									name="permanentAddress" cols="22"><%=DataUtility.getStringData(model.getPermanentAddress())%></textarea>
								<font color="red"> <%=ServletUtility.getErrorMessage("permanentAddress",
					request)%></font>
							</td>
							<td style="color: #B1B1B1;" colspan="7" height="24">
								&nbsp;(For e.g. street / building / lane / block no.)</td>
						</tr>
		
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Country
						*
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<%=HTMLUtility.getList("permanentCountry",
					model.getPermanentCountryId(), countryList)%>
					<font color="red"> <%=ServletUtility.getErrorMessage("permanentCountry",
					request)%></font>
					
							</td>
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						State
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<%=HTMLUtility.getList("permanentState",
					model.getPermanentStateId(), statePermanentList)%>
					<font color="red"> <%=ServletUtility.getErrorMessage("permanentState",
					request)%></font>
					
					
							</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						District
						*
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<%=HTMLUtility.getList("permanentDistrict",
					model.getPermanentDistrictId(), districtPermanentList)%>
					
					<font color="red"> <%=ServletUtility.getErrorMessage("permanentDistrict",
					request)%></font>
							</td>
							
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						City
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<%=HTMLUtility.getList("permanentCity",
					model.getPermanentCityId(), cityPermanentList)%>
					<font color="red"> <%=ServletUtility.getErrorMessage("permanentCity",
					request)%></font>
							</td>
							
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Post Office
						*
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<%=HTMLUtility.getList("permanentPostOffice",
					model.getPermanentPostOfficeId(), postOfficePermanentList)%>
					<font color="red"> <%=ServletUtility.getErrorMessage("permanentPostOffice",
					request)%></font>
					
							</td>
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						PIN Code
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input type="text" name="permanentPinCode" id="permanentPinCode"
								value="<%=DataUtility.getStringData(model.getPermanentPinCodeId())%>"></input><font
								color="red"><%=ServletUtility.getErrorMessage("permanentPinCode",
					request)%></font>
							</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Phone No. 1
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="permanentContactNo1" maxlength="12"
								value="<%=DataUtility.getStringData(model.getPermanentContactNo1())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("permanentContactNo1",
					request)%></font>
							</td>
							
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						Phone No. 2
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input type="text" name="permanentContactNo2" maxlength="12"
								value="<%=DataUtility.getStringData(model.getPermanentContactNo2())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("permanentContactNo2",
					request)%></font>
							</td>
							
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Present Address
						*
					</td>
					<td style="border: 1px solid gray;" colspan="3">
						<textarea
									name="presentAddress" cols="22"><%=DataUtility.getStringData(model.getPresentAddress())%></textarea>
								<font color="red"> <%=ServletUtility.getErrorMessage("presentAddress", request)%></font>
							</td>
							<td style="color: #B1B1B1;" colspan="7" height="24">
								&nbsp;(For e.g. street / building / lane / block no.)</td>
						</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Country
						*
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						
						<%=HTMLUtility.getList("presentCountry",
					model.getPresentCountryId(), countryList)%>
					<font
								color="red"><%=ServletUtility.getErrorMessage("presentCountry",
					request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						State
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<%=HTMLUtility.getList("presentState",
					model.getPresentStateId(), statePresentList)%>
					<font
								color="red"><%=ServletUtility.getErrorMessage("presentState",
					request)%></font>
					
							</td>
				</tr>
				<tr>
				<td style="border: 1px solid gray;" width="196" class="label" height="24">
						District
						*
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<%=HTMLUtility.getList("presentDistrict",
					model.getPresentDistrictId(), districtPresentList)%>
					<font
								color="red"><%=ServletUtility.getErrorMessage("presentDistrict",
					request)%></font>
					
							</td>
							
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						City
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<%=HTMLUtility.getList("presentCity",
					model.getPresentCityId(), cityPresentList)%>
					
					<font
								color="red"><%=ServletUtility.getErrorMessage("presentCity",
					request)%></font>
							</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Post Office
						*
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
					<%=HTMLUtility.getList("presentPostOffice",
					model.getPresentPostOfficeId(), postOfficePresentList)%>
					
					<font
								color="red"><%=ServletUtility.getErrorMessage("presentPostOffice",
					request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						PIN Code
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input type="text" name="presentPinCode" id="presentPinCode"
								value="<%=DataUtility.getStringData(model.getPresentPinCodeId())%>"></input><font
								color="red"><%=ServletUtility.getErrorMessage("presentPinCode", request)%></font>
							</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Phone No. 1
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="presentContactNo1" maxlength="11"
								value="<%=DataUtility.getStringData(model.getPresentContactNo1())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("presentContactNo1",
					request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						Phone No. 2
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input type="text" name="presentContactNo2" maxlength="11"
								value="<%=DataUtility.getStringData(model.getPresentContactNo2())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("presentContactNo2",
					request)%></font>
							</td>
							
				</tr>
			</table>
				
			<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="100%">		
				<tr>
					<td style="border: 1px solid gray;" width="804" colspan="11" class="subheader" height="24">
						Physical Information
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Height 
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="height" 
								value="<%=DataUtility.getStringData(model.getHeight())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("height", request)%></font>
					<font class="label">Feet</font> 
					</td>
					<td style="border: 1px solid gray;" width="212" colspan="3" height="24">
						<input type="text" name="inch" size="7" value="" onkeyup="convertin();" id="inch">
					<font class="label">Inches</font>	
					</td>
					<td style="border: 1px solid gray;" width="188" colspan="4">
						<input type="text" name="height" size="7" value="" onkeyup="convertcenti();" id="cm">
					<font class="label">Cm</font>	
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Chest 
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="chest" maxlength="13"
								value="<%=DataUtility.getStringData(model.getChest())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("chest", request)%></font>
					<font class="label">Inches</font>
					</td>
					<td style="border: 1px solid gray;" width="401" colspan="7" height="24">
						<input type="text" name="cms" size="7" value="" onkeyup="convertcm();" id="cms">
					<font class="label">Cm</font>	
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Weight 
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="weight"
								value="<%=DataUtility.getStringData(model.getWeight())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("weight", request)%></font>
					<font class="label">Pounds</font>	
					</td>
					<td style="border: 1px solid gray;" width="401" colspan="7" height="24">
						<input type="text" name="weight" size="7" value="" onkeyup="convertkg();" id="kilos">
					<font class="label">Kg</font>		
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Blood Group
						*
					</td>
					<td style="border: 1px solid gray;" width="607" colspan="10">
						<%
									HashMap map16 = new HashMap();
									map16.put("", "--Select--");
									map16.put("A+", "A+");
									map16.put("A-", "A-");
									map16.put("AB+", "AB+");
									map16.put("AB-", "AB-");
									map16.put("B+", "B+");
									map16.put("B-", "B-");
									map16.put("O+", "O+");
									map16.put("O-", "O-");

									String htmlList16 = HTMLUtility.getList("bloodGroup",
											model.getBloodGroup(), map16);
								%> <%=htmlList16%>
								<font
								color="red"> <%=ServletUtility.getErrorMessage("bloodGroup", request)%></font></td>
								

				</tr>
				</table>
				
					<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="100%">		
				<tr>
					<td style="border: 1px solid gray;" width="804" colspan="11" class="subheader" height="24">
						Languages Known
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Languages
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3" class="label" align="center">
						Read
					</td>
					<td style="border: 1px solid gray;" width="212" colspan="3" class="label" height="24" align="center">
						Write
					</td>
					<td style="border: 1px solid gray;" width="188" colspan="4" class="label" align="center">
						Speak
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196"  height="24">
						<font face="Verdana" size="2" class="label"> Hindi </font>
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3" class="label" align="center">
						<input type="checkbox" name="hindiRead" value="Yes" >
					</td>
					<td style="border: 1px solid gray;" width="212" colspan="3" class="label" height="24" align="center">
						<input type="checkbox" name="hindiWrite" value="Yes">
					</td>
					<td style="border: 1px solid gray;" width="188" colspan="4" class="label" align="center">
						<input type="checkbox" name="hindiSpeak" value="Yes">
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" height="24">
						<font face="Verdana" size="2" class="label"> English </font>
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3" class="label" align="center">
						<input type="checkbox" name="englisgRead" value="Yes">
					</td>
					<td style="border: 1px solid gray;" width="212" colspan="3" class="label" height="24" align="center">
						<input type="checkbox" name="englishWrite" value="Yes">
					</td>
					<td style="border: 1px solid gray;" width="188" colspan="4" class="label" align="center">
						<input type="checkbox" name="englishSpeak" value="Yes">
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" height="24">
						<%=HTMLUtility.getList("otherLanguage",
					model.getOtherLanguageId(), languageList)%>
					<font
								color="red"><%=ServletUtility.getErrorMessage("otherLanguage",
					request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="205" colspan="3" class="label" align="center">
						<input type="checkbox" name="otherLanguageRead" value="Yes">
					</td>
					<td style="border: 1px solid gray;" width="212" colspan="3" class="label" height="24" align="center">
						<input type="checkbox" name="otherLanguageWrite" value="Yes">
					</td>
					<td style="border: 1px solid gray;" width="188" colspan="4" class="label" align="center">
						<input type="checkbox" name="otherLanguageSpeak" value="Yes">
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="402" colspan="4" class="subheader" height="24" align="center">
						Present Employment Details&nbsp;
							<input type="radio" name="presentEmployent" value="Yes" id="presentEmployent"> Yes&nbsp;<input type="radio" name="presentEmployent" value="No"  id="presentEmployent"> No
					</td>
					<td style="border: 1px solid gray;" width="401" colspan="7" class="subheader" height="24">
                       Previous Employment Details&nbsp;&nbsp; <input type="radio" name="previousEmployent" value="Yes"  id="previousEmployent"> Yes&nbsp;&nbsp;&nbsp; <input type="radio" name="previousEmployent" value="No"  id="previousEmployent"> No

					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" height="24">
						<font class="label" size="2" face="Verdana"> Name of Organization </font>
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="oraganizationName1"
								value="<%=DataUtility.getStringData(model.getOraganizationName1())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("oraganizationName1",
					request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label">
						Name of Organization
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input type="text" name="oraganizationName2"
								value="<%=DataUtility.getStringData(model.getOraganizationName2())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("oraganizationName2",
					request)%></font>
							</td>
				</tr>
			
				<!--<tr>
					<td style="border: 1px solid gray;" height="24" colspan="1" class="label" width="196">
						Designation
					</td>
					<td style="border: 1px solid gray;" height="24" colspan="3" width="205">
						<input type="text" name="orgDesignation1" value="" onblur=" securityPersonnelForm.orgDesignation1.value = securityPersonnelForm.orgDesignation1.value.substr(0, 1).toUpperCase()
     + securityPersonnelForm.orgDesignation1.value.substr(1);">
					</td>
					<td style="border: 1px solid gray;" height="24" colspan="2" class="label" width="141">
						Designation
					</td>
					<td style="border: 1px solid gray;" height="24" colspan="5" width="259">
						<input type="text" name="orgDesignation2" value="" onblur=" securityPersonnelForm.orgDesignation2.value = securityPersonnelForm.orgDesignation2.value.substr(0, 1).toUpperCase()
     + securityPersonnelForm.orgDesignation2.value.substr(1);">
					</td>
				</tr>
				--><tr>
					<td style="border: 1px solid gray;" width="196" height="24">
						<font class="label" size="2" face="Verdana">Total Experience </font>
					</td>
					<td style="border: 1px solid gray;" width="607" colspan="10">
						<input type="text" name="totalExperience"
								value="<%=DataUtility.getStringData(model.getTotalExperience())%>"></input><font
								color="red"> <%=ServletUtility
					.getErrorMessage("totalExperience", request)%></font></td>
				</tr>
				</table>
				
				<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="100%">		
				<tr>
					<td style="border: 1px solid gray;" width="804" colspan="11" class="subheader" height="24">
						Educational Information
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="34" align="center" height="24">
						<font class="label" size="2" face="Verdana"> Qualifications </font>
					</td>
					<td style="border: 1px solid gray;" width="34" align="center" height="24">
						<font class="label" size="2" face="Verdana"> University/ Board </font>
					</td>
					<td style="border: 1px solid gray;" width="34" align="center" height="24">
						<font class="label" size="2" face="Verdana"> School/ College </font>
					</td>
					<td style="border: 1px solid gray;" width="61" align="center" height="24">
						<font class="label" size="2" face="Verdana"> Country </font>
					</td>
					<td style="border: 1px solid gray;" width="70" align="center" height="24">
						<font class="label" size="2" face="Verdana"> State </font>
					</td>
					<td style="border: 1px solid gray;" width="70" align="center" height="24">
						<font class="label" size="2" face="Verdana"> District </font>
					</td>
					<td style="border: 1px solid gray;" width="70" align="center" height="24">
						<font class="label" size="2" face="Verdana"> City </font>
					</td>
					<td style="border: 1px solid gray;" width="53" align="center" height="24">
						<font class="label" size="2" face="Verdana"> Post Office </font>
					</td>
					<td style="border: 1px solid gray;" width="62" align="center" height="24">
						<font class="label" size="2" face="Verdana"> PIN Code </font>
					</td>
					<td style="border: 1px solid gray;" width="26" align="center" height="24">
						<font class="label" size="2" face="Verdana"> % </font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="34" class="label" height="24" rowspan="2">
						Middle School
						*
					</td>
					<td style="border: 1px solid gray;" width="108">
						<input
								type="text" name="underMetricBoard" size="14"
								value="<%=DataUtility.getStringData(model.getUnderMetricBoard())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("underMetricBoard",
					request)%></font>
							</td>
							
					<td style="border: 1px solid gray;" width="34">
						<input
								type="text" name="underMetricInstitute" size="12"
								value="<%=DataUtility.getStringData(model.getUnderMetricInstitute())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("underMetricInstitute",
					request)%></font>
							</td>
							
					<td style="border: 1px solid gray;" width="61">
						<%=HTMLUtility.getList("underMetricCountry",
					model.getUnderMetricCountryId(), countryList)%>
					<font
								color="red"> <%=ServletUtility.getErrorMessage("underMetricCountry",
					request)%></font>
					</td>
					
					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("underMetricState",
					model.getUnderMetricStateId(), stateMetricList)%>
					<font
								color="red"> <%=ServletUtility.getErrorMessage("underMetricState",
					request)%></font>
					</td>
					
					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("underMetricDistrict",
					model.getUnderMetricDistrictId(), districtUnderMetricList)%>
					<font
								color="red"> <%=ServletUtility.getErrorMessage("underMetricDistrict",
					request)%></font>
					
					</td>
					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("underMetricCity",
					model.getUnderMetricCityId(), cityUnderMetricList)%>
					<font
								color="red"> <%=ServletUtility.getErrorMessage("underMetricCity",
					request)%></font>
					
					</td>
					<td style="border: 1px solid gray;" width="53">
						<%=HTMLUtility.getList("underMetricPostOffice",
					model.getUnderMetricPostOfficeId(),
					postOfficeUnderMetricList)%>
					<font
								color="red"> <%=ServletUtility.getErrorMessage("underMetricPostOffice",
					request)%></font>
					
							</td>
					<td style="border: 1px solid gray;" width="62">
						<input
								type="text" name="underMetricPinCode" id="underMetricPinCode"  size="6"
								value="<%=DataUtility.getStringData(model.getUnderMetricPinCodeId())%>"></input><font
								color="red"><%=ServletUtility.getErrorMessage("underMetricPinCode",
					request)%></font></td>
					<td style="border: 1px solid gray;" width="26">
						<input
								type="text" name="underMetricPercentage" size="4"
								value="<%=DataUtility.getStringData(model
					.getUnderMetricPercentage())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("underMetricPercentage",
					request)%></font>
							</td>
				</tr>
				<tr>
				  <td style="border: 1px solid gray;" colspan="1" height="25" class="label" align="center" width="108">
					Subject
				</td>	
				<td style="border: 1px solid gray;" colspan="11" width="501">
					<input type="text" name="underMetricSubject" size="91"
								value="<%=DataUtility.getStringData(model.getUnderMetricSubject())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("underMetricSubject",
					request)%></font>
							</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="150" class="label" height="24" rowspan="2">
						High School
					</td>
					<td style="border: 1px solid gray;" width="108">
						<input
								type="text" name="highSchoolBoard" size="14"
								value="<%=DataUtility.getStringData(model.getHighSchoolBoard())%>"></input><font
								color="red"> <%=ServletUtility
					.getErrorMessage("highSchoolBoard", request)%></font>

							</td>
					<td style="border: 1px solid gray;" width="34">
						<input
								type="text" name="highSchoolInstitute" size="12"
								value="<%=DataUtility.getStringData(model
					.getHigherSecondaryInstitute())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("highSchoolInstitute",
					request)%></font>
							</td>
							
					<td style="border: 1px solid gray;" width="61">
						<%=HTMLUtility.getList("highSchoolCountry",
					model.getHighSchoolCountryId(), countryList)%></td>
					
					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("highSchoolState",
					model.getHighSchoolStateId(), stateHighList)%></td>
					
					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("highSchoolDistrict",
					model.getHighSchoolDistrictId(), districtHighList)%></td>
					
					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("highSchoolCity",
					model.getHighSchoolCityId(), cityHighSchoolList)%></td>
					
					<td style="border: 1px solid gray;" width="53">
						<%=HTMLUtility.getList("highScoolPostOffice",
					model.getHighScoolPostOfficeId(), postOfficeHighList)%></td>
					<td style="border: 1px solid gray;" width="62">
						<input
								type="text" name="highSchoolPinCode" id="highSchoolPinCode" size="6"
								value="<%=DataUtility.getStringData(model.getHighSchoolPinCodeId())%>"></input><font
								color="red"><%=ServletUtility.getErrorMessage("highSchoolPinCode",
					request)%></font></td>
					<td style="border: 1px solid gray;" width="26">
						<input
								type="text" name="highSchoolPercentage" size="4"
								value="<%=DataUtility.getStringData(model.getHighSchoolPercentage())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("highSchoolPercentage",
					request)%></font>
							</td>
				</tr>
				<tr>
				  <td style="border: 1px solid gray;" colspan="1" height="25" class="label" align="center" width="108">
					Subject
				</td>	
				<td style="border: 1px solid gray;" colspan="11" width="501">
					<input type="text" name="highSchoolSubject" size="91"
								value="<%=DataUtility.getStringData(model.getHighSchoolSubject())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("highSchoolSubject",
					request)%></font>
							</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="150" class="label" height="24" rowspan="2">
						Higher Secondary
					</td>
					<td style="border: 1px solid gray;" width="108">
						<input
								type="text" name="higherSecondaryBoard"  size="14"
								value="<%=DataUtility.getStringData(model.getHigherSecondaryBoard())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("higherSecondaryBoard",
					request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="34">
						<input
								type="text" name="higherSecondaryInstitute" size="12"
								value="<%=DataUtility.getStringData(model
					.getHigherSecondaryInstitute())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage(
					"higherSecondaryInstitute", request)%></font>
							</td> 
							
					<td style="border: 1px solid gray;" width="61">
						<%=HTMLUtility.getList("higherSeconndaryCountry",
					model.getHigherSeconndaryCountryId(), countryList)%></td>
					
					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("higherSecondaryState",
					model.getHigherSecondaryStateId(), stateHigherList)%></td>
					
					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("higherSecondaryDistrict",
					model.getHigherSecondaryDistrictId(),
					districtHigherSecondaryList)%>
							</td>
							
					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("higherSecondaryCity",
					model.getHigherSecondaryCityId(), cityHigherSecondaryList)%></td>
					
					<td style="border: 1px solid gray;" width="53">
						<%=HTMLUtility.getList("higherSecondaryPostOffice",
					model.getHigherSecondaryPostOfficeId(),
					postOfficeHigherList)%>
							</td>
							
					<td style="border: 1px solid gray;" width="62">
						<input
								type="text" name="higherSecondaryPinCode" size="6"
								id="higherSecondaryPinCode"
								value="<%=DataUtility.getStringData(model
					.getHigherSecondaryPinCodeId())%>"></input><font
								color="red"><%=ServletUtility.getErrorMessage("higherSecondaryPinCode",
					request)%></font></td>
					
					<td style="border: 1px solid gray;" width="26">
						<input
								type="text" name="higherSecondaryPercentage" size="4"
								value="<%=DataUtility.getStringData(model
					.getHigherSecondaryPercentage())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage(
					"higherSecondaryPercentage", request)%></font>
					</td>
				</tr>
				<tr>
				  <td style="border: 1px solid gray;" colspan="1" height="25" class="label" align="center" width="108">
					Subject
				</td>	
				<td style="border: 1px solid gray;" colspan="11" width="501">
					<input type="text" name="higherSecondarySubject" size="91"
								value="<%=DataUtility.getStringData(model
					.getHigherSecondarySubject())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("higherSecondarySubject",
					request)%></font>
							</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="150" class="label" height="24" rowspan="2">
						Graduation
					</td>
					<td style="border: 1px solid gray;" width="108">
						<input
								type="text" name="graduationUniversity" size="14"
								value="<%=DataUtility.getStringData(model.getGraduationUniversity())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("graduationUniversity",
					request)%></font>
							</td>
							
					<td style="border: 1px solid gray;" width="34">
						<input
								type="text" name="graduationInstitute" size="12"
								value="<%=DataUtility.getStringData(model.getGraduationInstitute())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("graduationInstitute",
					request)%></font>
							</td>
							
					<td style="border: 1px solid gray;" width="61">
						<%=HTMLUtility.getList("graduationCountry",
					model.getGraduationCountryId(), countryList)%></td>
					
					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("graduationState",
					model.getGraduationStateId(), stateGraduationList)%></td>

					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("graduationDistrict",
					model.getGraduationDistrictId(), districtGraduationList)%></td>
					
					<td style="border: 1px solid gray;" width="70">
						<%=HTMLUtility.getList("graduationCity",
					model.getGraduationCityId(), cityGraduationList)%></td>
					
					<td style="border: 1px solid gray;" width="53">
						<%=HTMLUtility.getList("graduationPostOffice",
					model.getGraduationPostOfficeId(), postOfficeGraduationList)%>
							</td>
							
					<td style="border: 1px solid gray;" width="62">
						<input
								type="text" name="graduationPinCode" id="graduationPinCode" size="6" maxlength="6"
								value="<%=DataUtility.getStringData(model.getGraduationPinCodeId())%>"></input><font
								color="red"><%=ServletUtility.getErrorMessage("graduationPinCode",
					request)%></font></td>
					
					<td style="border: 1px solid gray;" width="26">
						<input
								type="text" name="graduationPercentage" maxlength="6" size="4"
								value="<%=DataUtility.getStringData(model.getGraduationPercentage())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("graduationPercentage",
					request)%></font>
							</td>
							
				</tr>
				<tr>
				<td style="border: 1px solid gray;" colspan="1" height="20" class="label" align="center">
						Degree
				</td>
				<td style="border: 1px solid gray;" colspan="1" height="20">
					<%
									HashMap map2 = new HashMap();
					map2.put("", "--Select--");
					map2.put("B.E", "B.E");
					map2.put("B.Com", "B.Com");
					map2.put("M.E", "M.E");
					map2.put("M.Com", "M.Com");
					map2.put("P.hd", "P.bd");
					map2.put("MCA", "MCA");
					map2.put("MSC", "MSC");
					

									String htmlList2 = HTMLUtility.getList("graduationDegree", model.getGraduationDegree(),
											map2);
								%> <%=htmlList2%>
							</td>
					<!--
				--></td>
				  <td style="border: 1px solid gray;" colspan="1" height="25" class="label" align="center">
					Subject
				</td>	
				<td style="border: 1px solid gray;" colspan="10">
					<input
								type="text" name="graduationSubject" size ="65"
								value="<%=DataUtility.getStringData(model.getGraduationSubject())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("graduationSubject",
					request)%></font>
							</td>
				</tr>
				
			<tr>
				<td style="border: 1px solid gray;" width="804" colspan="11"
								class="subheader" height="24">UID Details</td>
						</tr>
						<tr>
							<td style="border: 1px solid gray;" width="196" class="label"
								height="24">Card No.</td>
							<td style="border: 1px solid gray;" width="607" colspan="10">
								<input type="text" name="uidCardNo" size="15"
								value="<%=DataUtility.getStringData(model.getUidCardNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("uidCardNo", request)%></font>
							</td>
						</tr>
				<tr>
							<td style="border: 1px solid gray;" width="804" colspan="11"
								class="subheader" height="24">Voter's ID Card Details</td>
						</tr>
						<tr>
							<td style="border: 1px solid gray;" width="196" class="label"
								height="24">Card No.</td>
							<td style="border: 1px solid gray;" width="205" colspan="3">
								<input type="text" name="voterCardNo" size="15"
								value="<%=DataUtility.getStringData(model.getVoterCardNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("voterCardNo", request)%></font>
							</td>
							<td style="border: 1px solid gray;" width="141" colspan="2"
								class="label" height="24">Issuing Authority</td>
							<td style="border: 1px solid gray;" width="259" colspan="5">
								<input type="text" name="voterIssuingAuthority" size="15"
								value="<%=DataUtility.getStringData(model
					.getVoterIssuingAuthority())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("voterIssuingAuthority",
					request)%></font>
							</td>
						</tr>
				
				
					<td style="border: 1px solid gray;" width="804" colspan="11" class="subheader" height="24">
						PAN Card Details
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Card No.
					</td>
					<td style="border: 1px solid gray;" width="607" colspan="10">
						<input type="text" name="panCardNo" size="15"
								value="<%=DataUtility.getStringData(model.getPanCardNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("panCardNo", request)%></font>
							</td>
				</tr>
				
				<tr>
					<td style="border: 1px solid gray;" width="804" colspan="11" class="subheader" height="24">
						Ration Card Details
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Card No.
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="rationCardNo" size="15"
								value="<%=DataUtility.getStringData(model.getRationCardNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("rationCardNo", request)%></font>
							</td>
							
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						Issuing Authority
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input type="text" name="rationIssuingAuthority" size="15"
								value="<%=DataUtility.getStringData(model
					.getRationIssuingAuthority())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("rationIssuingAuthority",
					request)%></font>
							</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="804" colspan="11" class="subheader" height="24">
						Driving License Details
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						License No.
					</td>
					<td style="border: 1px solid gray;" width="143" colspan="2">
						<input type="text" name="drivingLicenseNo" size="15"
								value="<%=DataUtility.getStringData(model.getDrivingLicenseNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("drivingLicenseNo",
					request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="132" colspan="2" class="label" height="24">
						Issuing Authority
					</td>
					<td style="border: 1px solid gray;" width="141" colspan="2">
						<input type="text" name="drivingIssuingAuthority" size="15"
								value="<%=DataUtility.getStringData(model
					.getDrivingIssuingAuthority())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("drivingIssuingAuthority",
					request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="53" class="label" height="24" colspan="1">
						Valid Till
					</td>
					<td style="border: 1px solid gray;" width="134" colspan="3">
						<input type="text" name="drivingValidation"  size ="9"
								value="<%=DataUtility.getDateString(model.getDrivingValidation())%>">
								<a
								href="javascript:getCalendar(document.forms[0].drivingValidation);">
									<img src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16"
									height="15" border="0" alt="Calender">
							</a><font color="red"> <%=ServletUtility.getErrorMessage("drivingValidation",
					request)%></font>
							</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="804" colspan="11" class="subheader" height="24">
						Passport Details
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Passport No
					</td>
					<td style="border: 1px solid gray;" width="143" colspan="2">
						<input type="text" name="passPortNo" size="15" maxlength = "20"
								value="<%=DataUtility.getStringData(model.getPassPortNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("passPortNo", request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="132" colspan="2" height="24">
						<font face="Verdana" size="2" class="label"> Issuing Authority </font>
					</td>
					<td style="border: 1px solid gray;" width="141" colspan="2">
						<input type="text" name="passPortIssuingAuthority" size="15"
								value="<%=DataUtility.getStringData(model
					.getPassPortIssuingAuthority())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage(
					"passPortIssuingAuthority", request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="53" height="24" colspan="1">
						<font face="Verdana" size="2" class="label"> Valid till </font>
					</td>
					<td style="border: 1px solid gray;" width="134" colspan="3">
						<input type="text" name="passPortValidTill"  size ="9"
								value="<%=DataUtility.getDateString(model.getDrivingValidation())%>">
								<a
								href="javascript:getCalendar(document.forms[0].passPortValidTill);">
									<img src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16"
									height="15" border="0" alt="Calender">
							</a><font color="red"> <%=ServletUtility.getErrorMessage("passPortValidTill",
					request)%></font></td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="804" colspan="11" class="subheader" height="24">
						Names &amp; Addresses of two References
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Name
						*
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="responsiblePersonName1"
								value="<%=DataUtility.getStringData(model
					.getResponsiblePersonName1())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("responsiblePersonName1",
					request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						Name
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input type="text" name="responsiblePersonName2"
								value="<%=DataUtility.getStringData(model
					.getResponsiblePersonName2())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("responsiblePersonName2",
					request)%></font>
							</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						Address
						*
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<textarea name="responsiblePerconAddress1" cols="22"><%=DataUtility.getStringData(model
					.getResponsiblePerconAddress1())%></textarea>
								<font color="red"> <%=ServletUtility.getErrorMessage(
					"responsiblePerconAddress1", request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						Address
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<textarea name="responsiblePerconAddress2" cols="22"><%=DataUtility.getStringData(model
					.getResponsiblePerconAddress2())%></textarea>
								<font color="red"> <%=ServletUtility.getErrorMessage(
					"responsiblePerconAddress2", request)%></font>
							</td>
				</tr>
			
				<tr>
					<td style="border: 1px solid gray;" width="196" class="label" height="24">
						PIN Code
						*
					</td>
					<td style="border: 1px solid gray;" width="205" colspan="3">
						<input type="text" name="responsiblePersonPinCode1"
								maxlength="6"
								value="<%=DataUtility.getStringData(model
					.getResponsiblePersonPinCode1())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage(
					"responsiblePersonPinCode1", request)%></font>

					<td style="border: 1px solid gray;" width="141" colspan="2" class="label" height="24">
						PIN Code
						*
					</td>
					<td style="border: 1px solid gray;" width="259" colspan="5">
						<input type="text" name="responsiblePersonPinCode2"
								maxlength="6"
								value="<%=DataUtility.getStringData(model
					.getResponsiblePersonPinCode2())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage(
					"responsiblePersonPinCode2", request)%></font>

							</td>
				</tr>
			</table>
				<p align="center">
				 <%=HTMLUtility.getSubmitButton(BaseCtl.OP_SAVE,
					AccessUtility.canAdd(request), request)%>
		</form>
	</center>
</body>
</html>
				</td>
			</tr>
			
</table>
<table style="margin-right:-760px;margin-top:-1610px;">
						<%
			String imageName = model.getPhoto();
			if (imageName != null && imageName.trim().length() > 0) {
				imageName = ORSView.APP_CONTEXT + "/" + AppRole.STUDENT + "/"
						+ imageName;
			} else {
				imageName = ORSView.IMG_FOLDER + "/man.png";
			}
		%>

<tr>	<td >
	<br>

	<img src="<%=imageName%>" height="100px" width="100px" style="margin-top:-15px;"> <br>
			<form method="POST" enctype="multipart/form-data"
				action="<%=ORSView.FILE_UPLOAD_CTL%>">
				<input type="hidden" name="id" value="<%=model.getId()%>"> <input
					type="hidden" name="type" value="<%=AppRole.STUDENT%>">
				<input type="hidden" name="page"
					value="<%=ORSView.STUDENT_CTL%>?id=<%=model.getId()%>"><br />
					<% if(model.getId()>0) { %>
				<input type="file" class="button" name="upfile" style="margin-left: -53px;" name="upfile">
				<br>
				 <input
					type="submit" class="button" value="Upload Photo">
					<%} %>
			</form>

			</td>
				</tr>	
</table>

</center>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

 
				</td>
			</tr>
		</table>
	</body>
</html>
					