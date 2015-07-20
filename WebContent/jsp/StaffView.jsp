<%@page import="in.co.sunrays.wsx.model.AppRole"%>
<%@page import="in.co.sunrays.wsx.model.CollegeModel"%>
<%@page import="in.co.sunrays.wsx.model.StaffModel"%>
<%@page import="java.util.List"%>
<%@page import="in.co.sunrays.wsx.controller.StaffCtl"%>
<%@page import="java.util.HashMap"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>

    
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
   <script type="text/javascript" src="<%=ORSView.JS_FOLDER%>/staffdropdown.js"></script>
<%--     <script type="text/javascript" src="<%=ORSView.JS_FOLDER%>/trainervalidation.js"></script> --%>
<jsp:useBean id="model" class="in.co.sunrays.wsx.model.StaffModel"
	scope="request"></jsp:useBean>

<jsp:useBean id="collegeList" class="java.util.ArrayList"
	scope="request" />

<jsp:useBean id="departementMap" class="java.util.ArrayList"
	scope="request" />

<jsp:useBean id="departementList" class="java.util.ArrayList"
	scope="request" />
<jsp:useBean id="countryList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="stateList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="statePresentList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="stateHighList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="stateHigherList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="stateGraduateList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="stateHigherGraduateList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="districtList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="districtPrersentList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="districtHighList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="districtHigherList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="districtGraduateList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="districtHigherGraduateList" class="java.util.ArrayList"
	scope="request" />

	<jsp:useBean id="cityList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="cityPresentList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="cityHighList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="cityHigherList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="cityGraduateList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="cityHigherGraduateList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="areaList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="areaPresentList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="areaHighList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="areaHigherList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="areaGraduateList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="areaHigherGraduateList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="postOfficeList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="postOfficePresentList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="postOfficeHighList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="postOfficeHigherList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="postOfficeGraduateList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="postOfficeHigherGraduateList" class="java.util.ArrayList"
	scope="request" />
	
<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>
<center>
<br>
			<p>
<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Trainer</font>
</p>
	<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="100%">
	<tr>
		<td>
			<form name="form" action="<%=ORSView.STAFF_CTL%>" method="POST" >
				<input type="hidden" name="id" value="<%=model.getId()%>">

		<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="75%">
		<tr>
					<td style="border: 1px solid gray;" width="804" colspan="12" class="subheader" height="24">
						Trainer Information
					</td>
				</tr>
					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Code</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="code" readonly="readonly"
							value="<%=DataUtility.getStringData(model.getCode())%>"></input><font
							color="red"> </font></td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">First Name*</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="firstName"
							value="<%=DataUtility.getStringData(model.getFirstName())%>"></input><font
							color="red"> <%=ServletUtility.getErrorMessage("firstName", request)%></font></td>

</tr>
					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Middle Name</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="middleName"
							value="<%=DataUtility.getStringData(model.getMiddleName())%>"><font
							color="red"> <%=ServletUtility.getErrorMessage("middleName", request)%></font></td>
			
					<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Last Name*</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="lastName"
							value="<%=DataUtility.getStringData(model.getLastName())%>"><font
							color="red"> <%=ServletUtility.getErrorMessage("lastName", request)%></font></td>
			</tr>		
				
					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Father Name</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="fatherName"
							value="<%=DataUtility.getStringData(model.getFatherName())%>"></td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Mother Name</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="motherName"
							value="<%=DataUtility.getStringData(model.getMotherName())%>"></td>
					</tr>
					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Training Center*</td>
						<td   height="22" style="border: 1px solid gray;"><%=HTMLUtility.getList("collegeIdSel", model.getCollegeId()
					+ "", collegeList, true)%> <input type="hidden" name="collegeId"
							value="<%=model.getCollegeId()%>"></td>

						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Sector*</td>
						<td   height="22" style="border: 1px solid gray;"><%=HTMLUtility.getList("departementId",
					model.getDepartementId(), departementMap)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("departementId", request)%></font>
					</td>

					</tr>


					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Date Of Birth(mm/dd/yyyy)*</td>
					<td   height="22" style="border: 1px solid gray;"><input type="text" name="dob" readonly="readonly"
							value="<%=DataUtility.getDateString(model.getDob())%>"> <a
							href="javascript:getCalendar(document.forms[0].dob);"> <img
								src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
								border="0" alt="Calender">
						</a><font color="red"> <%=ServletUtility.getErrorMessage("dob", request)%></font></td>
			
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Gender *</td>
							<td   height="22" style="border: 1px solid gray;">
							<%
								HashMap map = new HashMap();
							map.put("", "--Select--");
							map.put("M", "Male");
								map.put("F", "Female");

								String htmlList = HTMLUtility.getList("gender", model.getGender(),
										map);
							%> <%=htmlList%><font color="red"><%=ServletUtility.getErrorMessage("gender", request)%></font></td>
					</tr>
					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Mobile No*</td>
								<td   height="22" style="border: 1px solid gray;"><input type="text" name="mobileNo" 
							value="<%=DataUtility.getStringData(model.getMobileNo())%>"><font
							color="red"> <%=ServletUtility.getErrorMessage("mobileNo", request)%></font></td>
							
							<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Martial Status *</td>
							<td   height="22" style="border: 1px solid gray;">
							<%
								HashMap map1 = new HashMap();
							map1.put("", "--Select--");	
							map1.put("S", "Single");
								map1.put("M", "Married");

								String htmlList1 = HTMLUtility.getList("martialStatus", model.getMartialStatus(),
										map1);
							%> <%=htmlList1%><font color="red"><%=ServletUtility.getErrorMessage("martialStatus", request)%></font></td>
							<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Date Of Joining(mm/dd/yyyy)*</td>
					<td   height="22" style="border: 1px solid gray;"><input type="text" name="doj" readonly="readonly"
							value="<%=DataUtility.getDateString(model.getDoj())%>"> <a
							href="javascript:getCalendar(document.forms[0].doj);"> <img
								src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
								border="0" alt="Calender">
						</a><font color="red"> <%=ServletUtility.getErrorMessage("doj", request)%></font></td>
						
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Date Of Relieving(mm/dd/yyyy)</td>
					<td   height="22" style="border: 1px solid gray;"><input type="text" name="dor" readonly="readonly"
						value="<%=DataUtility.getDateString(model.getDor())%>"	> <a
							href="javascript:getCalendar(document.forms[0].dor);"> <img
								src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
								border="0" alt="Calender">
						</a><font color="red"> <%=ServletUtility.getErrorMessage("dor", request)%></font></td>
										
					</tr></table>
						<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="100%">	
					<tr>
					<td style="border: 1px solid gray;" width="804" colspan="12" class="subheader" height="24">
						Address Information
					</td>
				</tr>
				<tr>
				<td class="label" width="27%" height="22" style="border: 1px solid gray;" colspan="2"><b>Permanent Information</b></td>
				<td class="label" width="27%" height="22" style="border: 1px solid gray;" colspan="2"><b>Present Address</b>
				<!-- Same <input type="checkbox"  name="same" id="same" value="FALSE" /> -->
				</td>
				</tr>
				<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">House/Flate/Block No</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="houseNo" 
							value="<%=DataUtility.getStringData(model.getHouseNo())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("houseNo", request)%></font></td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">House/Flate/Block No</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="presentHouseNo" id="presentHouseNo"
							value="<%=DataUtility.getStringData(model.getPresentHouseNo())%>"></input><font
							color="red"> <%=ServletUtility.getErrorMessage("presentHouseNo", request)%></font></td>
				</tr>	
				
				<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Name of Permises/Building/Village*</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="village" 
							value="<%=DataUtility.getStringData(model.getVillage())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("village", request)%></font></td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Name of Permises/Building/Village*</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="presentVillage" id="presentVillage"
							value="<%=DataUtility.getStringData(model.getPresentVillage())%>"></input><font
							color="red"> <%=ServletUtility.getErrorMessage("presentVillage", request)%></font></td>
				</tr>	
				
					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Road /Street/Lane</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="road" 
							value="<%=DataUtility.getStringData(model.getRoad())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("road", request)%></font></td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Road /Street/Lane</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="presentRoad" id="presentRoad"
							value="<%=DataUtility.getStringData(model.getPresentRoad())%>"></input><font
							color="red"> <%=ServletUtility.getErrorMessage("presentRoad", request)%></font></td>
				</tr>	
				<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Country*</td>
						<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("country",
					model.getCountryId(), countryList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("country", request)%></font>
					</td>
							</td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Country*</td>
						<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("countryPresent",
					model.getCountryPresentId(), countryList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("countryPresent", request)%></font>
							</td>
				</tr>	
				
					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">State*</td>
						<td   height="22" style="border: 1px solid gray;">
					
								<%=HTMLUtility.getList("state",
					model.getStateId(), stateList)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("state", request)%></font>
							</td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">State*</td>
						<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("statePresent",
									model.getStatePresentId(), statePresentList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("statePresent", request)%></font>
							</td>
				</tr>	
					
					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">District*</td>
						<td   height="22" style="border: 1px solid gray;">
								<%=HTMLUtility.getList("district",
									model.getDistrictId(), districtList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("district", request)%></font>
							</td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">District*</td>
						<td   height="22" style="border: 1px solid gray;">
								<%=HTMLUtility.getList("districtPresent",
									model.getDistrictPresentId(), districtPrersentList)%>
									<font
							color="red"> <%=ServletUtility.getErrorMessage("districtPresent", request)%></font>
							</td>
				</tr>	
				<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">City*</td>
						<td   height="22" style="border: 1px solid gray;">
								<%=HTMLUtility.getList("city",
									model.getCityId(), cityList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("city", request)%></font>
							</td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">City*</td>
						<td   height="22" style="border: 1px solid gray;">
							
							<%=HTMLUtility.getList("cityPresent",
									model.getCityPresentId(), cityPresentList)%>
												<font
							color="red"> <%=ServletUtility.getErrorMessage("cityPresent", request)%></font>
							</td>
				</tr>	
					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Area*</td>
						<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("area",
									model.getAreaId(), areaList)%>
													<font
							color="red"> <%=ServletUtility.getErrorMessage("area", request)%></font>
							</td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Area*</td>
						<td   height="22" style="border: 1px solid gray;">
								<%=HTMLUtility.getList("areaPresrent",
									model.getAreaPresrentId(), areaPresentList)%>
													<font
							color="red"> <%=ServletUtility.getErrorMessage("areaPresrent", request)%></font>
							</td>
				</tr>	
					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Post Office*</td>
						<td   height="22" style="border: 1px solid gray;">
								<%=HTMLUtility.getList("postOffice",
									model.getPostOfficeId(), postOfficeList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("postOffice", request)%></font>
									
							</td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Post Office*</td>
						<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("postOfficePresent",
									model.getPostOfficePresentId(), postOfficePresentList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("postOfficePresent", request)%></font>
							</td>
				</tr>	
					<tr>
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Pin Code</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="pinCode" id="pinCode"
							value="<%=DataUtility.getStringData(model.getPinCodeId())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("pinCode", request)%></font></td>
				
						<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Pin Code</td>
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="persentPinCode" id="persentPinCode"
							value="<%=DataUtility.getStringData(model.getPersentPinCodeId())%>"></input><font
							color="red"> <%=ServletUtility.getErrorMessage("persentPinCode", request)%></font></td>
				</tr></table>
				<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="100%">	
					<tr>
					<td style="border: 1px solid gray;" width="804" colspan="12" class="subheader" height="24">
						Education Information
					</td>
				</tr>
				<tr>

					<td class="label" width="25%" height="22" style="border: 1px solid gray;"><b>Qualification</b></td>
					
					<td class="label" width="27%" height="22" style="border: 1px solid gray;"><b>High School</b></td>
					<td class="label" width="27%" height="22" style="border: 1px solid gray;"><b>Higher Secondary</b></td>
				<td class="label" width="27%" height="22" style="border: 1px solid gray;"><b>Graduate</b></td>
				<td class="label" width="27%" height="22" style="border: 1px solid gray;"><b>Higher Education</b></td>
				</tr>

				<tr>
				
					<td class="label" width="25%" height="22" style="border: 1px solid gray;">Class/Degree</td>
					
					<td class="label" width="27%" height="22" style="border: 1px solid gray;">X</td>
					<td class="label" width="27%" height="22" style="border: 1px solid gray;">XII</td>
			
				<td   height="22" style="border: 1px solid gray;">
							<%
								HashMap map2 = new HashMap();
							map2.put("", "--Select--");
							
							map2.put("B.E", "B.E");
								map2.put("B.Com", "B.Com");
								map2.put("B.A", "B.A");
								map2.put("BCA", "BCA");
								map2.put("BSC", "BSC");

								String htmlList2 = HTMLUtility.getList("graduate", model.getGraduate(),
										map2);
							%> <%=htmlList2%>
				
			
				<td   height="22" style="border: 1px solid gray;">
							<%
								HashMap map3 = new HashMap();
							map3.put("", "--Select--");
							
							map3.put("M.E", "M.E");
								map3.put("M.Com", "M.Com");
								map3.put("P.hd", "P.bd");
								map3.put("MCA", "MCA");
								map3.put("MSC", "MSC");

								String htmlList3 = HTMLUtility.getList("higherGraduation", model.getHigherGraduation(),
										map3);
							%> <%=htmlList3%></td>
				
				</tr>
				<tr>
				<td class="label" width="25%" height="22" style="border: 1px solid gray;">School/College/Insititute</td>
				<td   height="22" style="border: 1px solid gray;"><input type="text" name="schoolName" 
							value="<%=DataUtility.getStringData(model.getSchoolName())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("schoolName", request)%></font></td>
				
				<td   height="22" style="border: 1px solid gray;"><input type="text" name="schoolNameHigher" 
							value="<%=DataUtility.getStringData(model.getSchoolNameHigher())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("schoolNameHigher", request)%></font></td>
				
				<td   height="22" style="border: 1px solid gray;"><input type="text" name="schoolNameGraduate" 
							value="<%=DataUtility.getStringData(model.getSchoolNameGraduate())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("schoolNameGraduate", request)%></font></td>
						
				<td   height="22" style="border: 1px solid gray;"><input type="text" name="schoolNameHigherGraduate" 
							value="<%=DataUtility.getStringData(model.getSchoolNameHigherGraduate())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("schoolNameHigherGraduate", request)%></font></td>		
							
				</tr>	
				<tr>
				<td class="label" width="25%" height="22" style="border: 1px solid gray;">Board/University</td>
				<td   height="22" style="border: 1px solid gray;"><input type="text" name="universityHigh" 
							value="<%=DataUtility.getStringData(model.getUniversityHigh())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("universityHigh", request)%></font></td>
							
				<td   height="22" style="border: 1px solid gray;"><input type="text" name="universityHigher" 
							value="<%=DataUtility.getStringData(model.getUniversityHigher())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("universityHigher", request)%></font></td>
							
							<td   height="22" style="border: 1px solid gray;"><input type="text" name="universityGraduate" 
							value="<%=DataUtility.getStringData(model.getUniversityGraduate())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("universityGraduate", request)%></font></td>
							
							
							<td   height="22" style="border: 1px solid gray;"><input type="text" name="universityHigherGraduate" 
							value="<%=DataUtility.getStringData(model.getUniversityHigherGraduate())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("universityHigherGraduate", request)%></font></td>
							
							</tr>
							<tr>
							<td class="label" width="25%" height="22" style="border: 1px solid gray;">Year of Passing</td>
							<td   height="22" style="border: 1px solid gray;"><input type="text" name="yearOfPassingHigh" 
							value="<%=DataUtility.getStringData(model.getYearOfPassing())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("yearOfPassingHigh", request)%></font></td>
							
						<td   height="22" style="border: 1px solid gray;"><input type="text" name="yearOfPassingHigher" 
							value="<%=DataUtility.getStringData(model.getYearOfPassingHigher())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("yearOfPassingHigher", request)%></font></td>
							
								<td   height="22" style="border: 1px solid gray;"><input type="text" name="yearOfPassingGraduate" 
							value="<%=DataUtility.getStringData(model.getYearOfPassingGraduate())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("yearOfPassingGraduate", request)%></font></td>
							
								<td   height="22" style="border: 1px solid gray;"><input type="text" name="yearOfPassingHigherGraduate" 
							value="<%=DataUtility.getStringData(model.getYearOfPassingHigherGraduate())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("yearOfPassingHigherGraduate", request)%></font></td>
							</tr>
							<tr>
							<td class="label" width="25%" height="22" style="border: 1px solid gray;">Country</td>
							<td   height="22" style="border: 1px solid gray;">
								<%=HTMLUtility.getList("countryHigh",
					model.getCountryHighId(), countryList)%>
						<td   height="22" style="border: 1px solid gray;">
								<%=HTMLUtility.getList("countryHigher",
					model.getCountryHigherId(), countryList)%>
							
							<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("countryGraduate",
					model.getCountryGraduateId(), countryList)%>
							<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("countryHigherGraduate",
					model.getCountryHigherGraduateId(), countryList)%>	</td>
							<tr>
							<td class="label" width="25%" height="22" style="border: 1px solid gray;">State</td>
							<td   height="22" style="border: 1px solid gray;">
										<%=HTMLUtility.getList("stateHigh",
											model.getStateHighId(), stateHighList)%>
										</td>
							
							<td   height="22" style="border: 1px solid gray;">
							
							<%=HTMLUtility.getList("stateHigher",
											model.getStateHigherId(), stateHigherList)%>
							</td>
							
							<td   height="22" style="border: 1px solid gray;">
							
							<%=HTMLUtility.getList("stateGraduate",
											model.getStateGraduateId(), stateGraduateList)%>
							</td>
							
							<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("stateHigherGraduate",
											model.getStateHigherGraduateId(), stateHigherGraduateList)%>
							</td>
							</tr>
							
						<tr>
							<td class="label" width="25%" height="22" style="border: 1px solid gray;">District</td>	
							<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("districtHigh",
									model.getDistrictHighId(), districtHighList)%>
							</td>
							<td   height="22" style="border: 1px solid gray;">
								<%=HTMLUtility.getList("districtHigher",
									model.getDistrictHigherId(), districtHigherList)%>
							</td>
							
							<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("districtGraduate",
									model.getDistrictGraduateId(), districtGraduateList)%>
							</td>
							
							<td   height="22" style="border: 1px solid gray;">
							
								<%=HTMLUtility.getList("districtHigherGraduate",
									model.getDistrictHigherGraduateId(), districtHigherGraduateList)%>
							</td>
							
							</tr>
					<tr>
							<td class="label" width="25%" height="22" style="border: 1px solid gray;">City</td>		
							
									<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("cityHigh",
									model.getCityHighId(), cityHighList)%>
							</td>
							
								<td   height="22" style="border: 1px solid gray;">
							
							<%=HTMLUtility.getList("cityHigher",
									model.getCityHigherId(), cityHigherList)%>
							</td>
							
								<td   height="22" style="border: 1px solid gray;">
							
							<%=HTMLUtility.getList("cityGraduate",
									model.getCityGraduateId(), cityGraduateList)%>
							</td>
							
								<td   height="22" style="border: 1px solid gray;">
							
							<%=HTMLUtility.getList("cityHigherGraduate",
									model.getCityHigherGraduateId(), cityHigherGraduateList)%>
							</td>
							
							</tr>
<tr>
							<td class="label" width="25%" height="22" style="border: 1px solid gray;">Area</td>
								<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("areaHigh",
									model.getAreaHighId(), areaHighList)%>
							</td>
							
							<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("areaHigher",
									model.getAreaHigherId(), areaHigherList)%>
							</td>
							
							<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("areaGraduate",
									model.getAreaGraduateId(), areaGraduateList)%>
							</td>
							
							<td   height="22" style="border: 1px solid gray;">
							
								<%=HTMLUtility.getList("areaHigherGraduate",
									model.getAreaHigherGraduateId(), areaHigherGraduateList)%>
							</td>
							
							</tr>
								
<tr>
							<td class="label" width="25%" height="22" style="border: 1px solid gray;">Post Office</td>
							<td   height="22" style="border: 1px solid gray;">
								<%=HTMLUtility.getList("postOfficeHigh",
									model.getPostOfficeHighId(), postOfficeHighList)%>
							</td>
							
							<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("postOfficeHigher",
									model.getPostOfficeHigherId(), postOfficeHigherList)%>
							</td>
							
							<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("postOfficeGraduate",
									model.getPostOfficeGraduateId(), postOfficeGraduateList)%>
							</td>
							
							<td   height="22" style="border: 1px solid gray;">
							<%=HTMLUtility.getList("postOfficeHigherGraduate",
									model.getPostOfficeHigherGraduateId(), postOfficeHigherGraduateList)%>
							</td>
</tr>
<tr>
							<td class="label" width="25%" height="22" style="border: 1px solid gray;">Pin Code</td>
							
							<td   height="22" style="border: 1px solid gray;"><input type="text" name="highPinCode" id="highPinCode" 
							value="<%=DataUtility.getStringData(model.getHighPinCodeId())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("highPinCode", request)%></font></td>
							
							<td   height="22" style="border: 1px solid gray;"><input type="text" name="higherPinCode" id="higherPinCode" 
							value="<%=DataUtility.getStringData(model.getHigherPinCodeId())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("higherPinCode", request)%></font></td>
							
							<td   height="22" style="border: 1px solid gray;"><input type="text" name="graduatePinCode" id="graduatePinCode" 
							value="<%=DataUtility.getStringData(model.getGraduatePinCodeId())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("graduatePinCode", request)%></font></td>
							
							<td   height="22" style="border: 1px solid gray;"><input type="text" name="higherGraduatePinCode" id="higherGraduatePinCode" 
							value="<%=DataUtility.getStringData(model.getHigherGraduatePinCodeId())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("higherGraduatePinCode", request)%></font></td>
							
							</tr>
<tr>
							<td class="label" width="25%" height="22" style="border: 1px solid gray;">Percantage</td>
							
							<td   height="22" style="border: 1px solid gray;"><input type="text" name="percentage" 
							value="<%=DataUtility.getStringData(model.getPercentage())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("percentage", request)%></font></td>
							
							<td   height="22" style="border: 1px solid gray;"><input type="text" name="percentageHigher" 
							value="<%=DataUtility.getStringData(model.getPercentageHigher())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("percentageHigher", request)%></font></td>
							
							<td   height="22" style="border: 1px solid gray;"><input type="text" name="percentageGraduate" 
							value="<%=DataUtility.getStringData(model.getPercentageGraduate())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("percentageGraduate", request)%></font></td>
							<td   height="22" style="border: 1px solid gray;"><input type="text" name="percentageHigherGraduate" 
							value="<%=DataUtility.getStringData(model.getPercentageHigherGraduate())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("percentageHigherGraduate", request)%></font></td>
							

</tr>

<tr>
							<td class="label" width="25%" height="22" style="border: 1px solid gray;">Subject</td>
								<td   height="22" style="border: 1px solid gray;"><input type="text" name="subjectHigh" 
							value="<%=DataUtility.getStringData(model.getSubjectHigh())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("subjectHigh", request)%></font></td>
								<td   height="22" style="border: 1px solid gray;"><input type="text" name="subjectHigher" 
							value="<%=DataUtility.getStringData(model.getSubjectHigher())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("subjectHigher", request)%></font></td>
								<td   height="22" style="border: 1px solid gray;"><input type="text" name="subjectGrauduate" 
							value="<%=DataUtility.getStringData(model.getSubjectGrauduate())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("subjectGrauduate", request)%></font></td>
								<td   height="22" style="border: 1px solid gray;"><input type="text" name="subjectHigherGraduate" 
							value="<%=DataUtility.getStringData(model.getSubjectHigherGraduate())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("subjectHigherGraduate", request)%></font></td>
							
							
						</tr>				
							
				</table>
				<p align="center">
				 <%=HTMLUtility.getSubmitButton(BaseCtl.OP_SAVE,
					AccessUtility.canAdd(request), request)%>
				</p>
			</form>
		</td>
	</tr>
</table>

<table style="margin-right:-760px;margin-top:-870px;">
						<%
			String imageName = model.getPhoto();
			if (imageName != null && imageName.trim().length() > 0) {
				imageName = ORSView.APP_CONTEXT + "/" + AppRole.STAFF + "/"
						+ imageName;
			} else {
				imageName = ORSView.IMG_FOLDER + "/man.png";
			}
		%>

<tr>	<td>
	<br>

	<img src="<%=imageName%>" height="100px" width="100px"> <br>
			<form method="POST" enctype="multipart/form-data"
				action="<%=ORSView.FILE_UPLOAD_CTL%>">
				<input type="hidden" name="id" value="<%=model.getId()%>"> <input
					type="hidden" name="type" value="<%=AppRole.STAFF%>"><br />
				<input type="hidden" name="page"
					value="<%=ORSView.STAFF_CTL%>?id=<%=model.getId()%>"><br />
					<% if(model.getId()>0) { %>
				<input type="file" class="button" name="upfile" style="margin-right:60px; margin-top:-20px;"><br />
				<br>
				 <input
					type="submit" class="button" value="Upload Photo">
					<%} %>
			</form>

			</td>
				</tr>	
</table>

</center>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
