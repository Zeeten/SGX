<%@page import="in.co.sunrays.wsx.model.AppRole"%>
<%@page import="in.co.sunrays.wsx.model.CollegeModel"%>
<%@page import="java.util.List"%>
<%@page import="in.co.sunrays.wsx.controller.CollegeCtl"%>
<%@page import="java.util.HashMap"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="java.util.LinkedHashMap"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>

<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript" src="<%=ORSView.JS_FOLDER%>/collegedropdown.js"></script>
<%-- <script type="text/javascript" src="<%=ORSView.JS_FOLDER%>/collegedvalidation.js"></script> --%>


<jsp:useBean id="model" class="in.co.sunrays.wsx.model.CollegeModel"
	scope="request"></jsp:useBean>
	<jsp:useBean id="industryList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="countryList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="stateList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="districtList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="cityList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="areaList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="postOfficeList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="esicStateList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="esicDistrictList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="epfStateList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="epfDistrictList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="profStateList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="profDistrictList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="serStateList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="serDistrictList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="stateOneList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="stateTwoList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="stateThreeList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="state4List" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="district1List" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="district2List" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="district3List" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="district4List" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="ownerStateList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="ownerDistrictList" class="java.util.ArrayList"
	scope="request" />
	<jsp:useBean id="ownerCityList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="ownerAreaList" class="java.util.ArrayList"
	scope="request" />
		<jsp:useBean id="ownerPostOfficeList" class="java.util.ArrayList"
	scope="request" />
	
	<jsp:useBean id="organizationList" class="java.util.ArrayList"
	scope="request" />
	

<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>
<center>
<br>
			<p>
<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Training Provider's Registration Form</font>
</p>
<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="100%">
<tr>
		<td>
<form name="form" action="<%=ORSView.COLLEGE_CTL%>" method="POST" >
	<input type="hidden" name="id" value="<%=model.getId()%>">

     <table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="75%">
				<tr>
					<td style="border: 1px solid gray;" colspan="2" class="subheader" height="25" width="656"
						align="center">
						Organization Details
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Company's
							Name*</font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="150" colspan="1">
						<input type="text" name="companyname" value="<%=DataUtility.getStringData(model.getCompanyName())%>"></input><font
							color="red"> <%=ServletUtility.getErrorMessage("companyname", request)%></font></td>
						</tr>	<tr>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">&nbsp;Select Industry* </font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="208" colspan="1">
				<%=HTMLUtility.getList("industryId",
					model.getIndustryId(), industryList)%>
					<font color="red"> <%=ServletUtility.getErrorMessage("industryId",
					request)%></font>
					</td>
				</tr>
			<tr>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">&nbsp;Organization* </font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="208" colspan="1">
				<%=HTMLUtility.getList("organizationIdSel", model.getOrganizationId()
					+ "", organizationList,true)%> <input type="hidden" name="organizationId"
							value="<%=model.getOrganizationId()%>"></td>
				</tr>	
				
				<tr>
					<td style="border: 1px solid gray;" colspan="4" class="subheader" height="25" width="656">
						&nbsp;
						Address Details
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">House / Flat / Door / Block No.
						</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="3" width="473">
						<input type="text" name="houseNo" maxlength="50" size="30" value="<%=DataUtility.getStringData(model.getHouseNo())%>" id="houseNo">
							<font
							color="red"><%=ServletUtility.getErrorMessage("houseNo", request)%></font>
					</td>
				</tr>
				<tr>
					<td nowrap style="border: 1px solid gray;" height="25" width="200">
						<font face="Verdana" size="2" class="label">Name of Premises / Building / Village*
						</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="3" width="473">
						<input type="text" name="village" maxlength="50" size="30" value="<%=DataUtility.getStringData(model.getVillage())%>" id="village">
					
						<font
							color="red"><%=ServletUtility.getErrorMessage("village", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Road / Street / Lane
						</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="3" width="473">
						<input type="text" name="road" maxlength="50" size="30" value="<%=DataUtility.getStringData(model.getRoad())%>" id="road">
					<font
							color="red"><%=ServletUtility.getErrorMessage("road", request)%></font>
					</td>
				</tr>
								</table>
				<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="100%">
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Country * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<%=HTMLUtility.getList("country",
					model.getCountryId(), countryList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("country", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">State * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
							<%=HTMLUtility.getList("state",
					model.getStateId(), stateList)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("state", request)%></font>	

					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">District * </font>
					</td>
					<td style="border: 1px solid gray;" style="border: 1px solid gray;" height="25" colspan="1" width="150">
					<%=HTMLUtility.getList("district",
									model.getDistrictId(), districtList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("district", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">City * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
							<%=HTMLUtility.getList("city",
									model.getCityId(), cityList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("city", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Area * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
							<%=HTMLUtility.getList("area",
									model.getAreaId(), areaList)%>
													<font
							color="red"> <%=ServletUtility.getErrorMessage("area", request)%></font>
					 
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Post Office * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
						<%=HTMLUtility.getList("postOffice",
									model.getPostOfficeId(), postOfficeList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("postOffice", request)%></font>
					</td>	
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">PIN Code</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="3">
					 
						<input type="text" name="pinCode" id="pinCode" value="<%=DataUtility.getStringData(model.getPinCodeId())%>" readonly="readonly" >
					 	<font
							color="red"><%=ServletUtility.getErrorMessage("pinCode", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Phone Numbers * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="countryCodePhoneNo1" maxlength="3" size="3" value="+91" readonly="readonly">
						<input type="text" name="stdCodePhoneNoOne"  size="5" value="<%=DataUtility.getStringData(model.getStdCodePhoneNoOne())%>"> -
						<input type="text" name="phoneNoOne"  size="12" value="<%=DataUtility.getStringData(model.getPhoneNoOne())%>">
						<font
							color="red"><%=ServletUtility.getErrorMessage("stdCodePhoneNoOne", request)%></font>
							<font
							color="red"><%=ServletUtility.getErrorMessage("phoneNoOne", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="2" width="322">
					    <input type="text" name="countryCodePhoneNo2" maxlength="3" size="3" value="+91" readonly="readonly">
						<input type="text" name="stdCodePhoneNoTwo" size="5" value="<%=DataUtility.getStringData(model.getStdCodePhoneNoTwo())%>"> -
						<input type="text" name="phoneNoTwo"   size="12" value="<%=DataUtility.getStringData(model.getPhoneNoTwo())%>">
					
					<font
							color="red"><%=ServletUtility.getErrorMessage("stdCodePhoneNoTwo", request)%></font>
							<font
							color="red"><%=ServletUtility.getErrorMessage("phoneNoTwo", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">e-mail * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="orgEmailIdOne" maxlength="30" 	value="<%=DataUtility.getStringData(model.getOrgEmailIdOne())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("orgEmailIdOne", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="2" width="322">
						<input type="text" name="orgEmailIdTwo" maxlength="30" 	value="<%=DataUtility.getStringData(model.getOrgEmailIdTwo())%>">
						<font
								color="red"> <%=ServletUtility.getErrorMessage("orgEmailIdTwo", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" colspan="4" class="subheader" width="656">
						Shop & Establishment
					</td>
				</tr>
				<tr height="25">
					<td nowrap style="border: 1px solid gray;" width="182">
						<font face="Verdana" size="2" class="label">Shop &
							Establishment License No.</font>
					</td>
					<td style="border: 1px solid gray;" width="150">
						<input type="text" name="establishmentNo" maxlength="20" value="<%=DataUtility.getStringData(model.getShopLicenseNo())%>">
					<font
								color="red"> <%=ServletUtility.getErrorMessage("establishmentNo", request)%></font>
					</td>
					<td style="border: 1px solid gray;" width="113">
						<font face="Verdana" size="2" class="label">Issuing
							Authority</font>
					</td>
					<td style="border: 1px solid gray;" width="208">
						<input type="text" name="estbIssuingAuthority" maxlength="50" value="<%=DataUtility.getStringData(model.getIssueAuthority())%>">
					<font
								color="red"> <%=ServletUtility.getErrorMessage("estbIssuingAuthority", request)%></font>
					</td>
				</tr>

				<tr height="25">
					<td style="border: 1px solid gray;" width="182">
						<font class="label" face="Verdana" size="2">Valid </font>
					</td>
					<td nowrap style="border: 1px solid gray;" >
						<font color="#4E4E4E">From</font>
						<input type="text" name="establishmentFrom"  value="<%=DataUtility.getDateString(model.getShopValidFrom())%>" size="9" readonly="readonly">
						<a
							href="javascript:getCalendar(document.forms[0].establishmentFrom);"> <img
								src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
								border="0" alt="Calender">
						</a>
						<font color="red"> <%=ServletUtility.getErrorMessage("establishmentFrom", request)%></font>
						&nbsp;
						<font color="#4E4E4E">Till</font>
						<input type="text" name="establishmentTill"  value="<%=DataUtility.getDateString(model.getShopValidTill())%>" size="9" readonly="readonly">
						<a
							href="javascript:getCalendar(document.forms[0].establishmentTill);"> <img
								src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
								border="0" alt="Calender">
						</a>
						<font color="red"> <%=ServletUtility.getErrorMessage("establishmentTill", request)%></font>
							</td>
					<td style="border: 1px solid gray;" width="113">
						<font class="label" face="Verdana" size="2">Place of
							Issue </font>
					</td>
					<td style="border: 1px solid gray;" width="208">
						<input type="text" name="shopEstbPlace" maxlength="50" value="<%=DataUtility.getStringData(model.getPlaceOfIssue())%>">
						<font color="red"> <%=ServletUtility.getErrorMessage("shopEstbPlace", request)%></font>
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;" class="subheader" colspan="4" height="25" width="656">
						Govt. Statutory Compliances - Licenses
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">ESIC No. </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="esicNo" maxlength="30" value="<%=DataUtility.getStringData(model.getEsicNo())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("esicNo", request)%></font>	
					</td>

					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Issuing
							Authority </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
						<input type="text" name="esicIssuingAuthority" maxlength="50" value="<%=DataUtility.getStringData(model.getEsicIssuingAuthority())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("esicIssuingAuthority", request)%></font>	
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Place of
							issue </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="esicPlace" maxlength="50" value="<%=DataUtility.getStringData(model.getEsicPlace())%>">
							<font
							color="red"> <%=ServletUtility.getErrorMessage("esicPlace", request)%></font>
					</td>

					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">State </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
					
					
						<%=HTMLUtility.getList("esicStateId",
					model.getEsicStateId(), esicStateList)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("esicStateId", request)%></font>	
							</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">District
						</font>
					</td>
					<td style="border: 1px solid gray;border-bottom: 2px solid gray;" height="25" colspan="3" width="473">
					
							<%=HTMLUtility.getList("esicDistrictId",
									model.getEsicDistrictId(), esicDistrictList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("esicDistrictId", request)%></font>
					
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;border-top: 2px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">EPF Account No. </font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="150">
						<input type="text" name="epfAccNo" maxlength="30" value="<%=DataUtility.getStringData(model.getEpfAccNo())%>">
							<font
							color="red"> <%=ServletUtility.getErrorMessage("epfAccNo", request)%></font>
					</td>

					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Issuing
							Authority </font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="208">
						<input type="text" name="epfAuthority" maxlength="50" value="<%=DataUtility.getStringData(model.getEpfAuthority())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("epfAuthority", request)%></font>
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Place of
							issue </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="epfPlace" maxlength="50" value="<%=DataUtility.getStringData(model.getEpfPlace())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("epfPlace", request)%></font>
					</td>

					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">State </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
	
						<%=HTMLUtility.getList("epfStateId",
					model.getEpfStateId(), epfStateList)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("epfStateId", request)%></font>	
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;border-bottom: 2px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">District
						</font>
					</td>
					<td style="border: 1px solid gray;border-bottom: 2px solid gray;" height="25" colspan="3" width="473">
					
						<%=HTMLUtility.getList("epfDistrictId",
									model.getEpfDistrictId(), epfDistrictList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("epfDistrictId", request)%></font>
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;border-top: 2px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Professional Tax </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="professionalTax" maxlength="30" value="<%=DataUtility.getStringData(model.getProfessionalTax())%>">
					<font
							color="red"> <%=ServletUtility.getErrorMessage("professionalTax", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Issuing
							Authority </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
						<input type="text" name="profTaxAuthority" maxlength="50"  value="<%=DataUtility.getStringData(model.getProfTaxAuthority())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("profTaxAuthority", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Place of
							issue </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="profTaxPlace" maxlength="50"  value="<%=DataUtility.getStringData(model.getProfTaxPlace())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("profTaxPlace", request)%></font>
					</td>

					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">State </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">

<%=HTMLUtility.getList("profStateId",
					model.getProfStateId(), profStateList)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("profStateId", request)%></font>	
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;border-bottom: 2px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">District
						</font>
					</td>
					<td style="border: 1px solid gray;border-bottom: 2px solid gray;" height="25" colspan="3" width="473">
				
							<%=HTMLUtility.getList("profDistrictId",
									model.getProfDistrictId(), profDistrictList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("profDistrictId", request)%></font>
					</td>
				</tr>

				<tr height="25" >
					<td style="border: 1px solid gray;" width="182">
						<font class="label" face="Verdana" size="2">WCA
							Policy No.</font>
					</td>
					<td style="border: 1px solid gray;" width="150">
						<input type="text" name="wcaNo" maxlength="30" value="<%=DataUtility.getStringData(model.getWcaNo())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("wcaNo", request)%></font>
					</td>
					<td style="border: 1px solid gray;" width="113">
						<font class="label" face="Verdana" size="2">Policy
							Period</font>
					</td>
					<td style="border: 1px solid gray;" width="208">
						<font color="#4E4E4E">From</font>&nbsp;
						<input type="text" name="wcaFrom" size="9" value="<%=DataUtility.getDateString(model.getWcaFrom())%>"
					 readonly="readonly">
						
							<a
							href="javascript:getCalendar(document.forms[0].wcaFrom);"> <img
								src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
								border="0" alt="Calender">
						</a>
						&nbsp;
						<font color="#4E4E4E">Till</font>&nbsp;
						<input type="text" name="wcaTo" size="9" value="<%=DataUtility.getDateString(model.getWcaTo())%>" readonly="readonly">
					
							<a
							href="javascript:getCalendar(document.forms[0].wcaTo);"> <img
								src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
								border="0" alt="Calender">
						</a>
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;border-bottom: 2px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Insurance
							Company Name </font>
					</td>
					<td style="border: 1px solid gray;border-bottom: 2px solid gray;" height="25" colspan="3" width="473">
						<input type="text" name="wcaCompany" maxlength="30"  value="<%=DataUtility.getStringData(model.getWcaCompany())%>">
							<font
							color="red"> <%=ServletUtility.getErrorMessage("wcaCompany", request)%></font>
					</td>
				</tr>

				<tr style="border-top: 2px solid gray;">
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Service Tax </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="serviceTax" maxlength="30" value="<%=DataUtility.getStringData(model.getServiceTax())%>">
					<font
							color="red"> <%=ServletUtility.getErrorMessage("serviceTax", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Issuing
							Authority</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
						<input type="text" name="serviceTaxAuthority" maxlength="50" value="<%=DataUtility.getStringData(model.getServiceTaxAuthority())%>">
					<font
							color="red"> <%=ServletUtility.getErrorMessage("serviceTaxAuthority", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Place of
							issue </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="serTaxPlace" maxlength="50" value="<%=DataUtility.getStringData(model.getSerTaxPlace())%>">
							<font
							color="red"> <%=ServletUtility.getErrorMessage("serTaxPlace", request)%></font>	
					</td>

					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">State </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
		
<%=HTMLUtility.getList("serStateId",
					model.getSerStateId(), serStateList)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("serStateId", request)%></font>	
					</td>
				</tr>
				<tr style="border-bottom: 2px solid gray;">
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">District
						</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="3" width="473">
						
						<%=HTMLUtility.getList("serDistrictId",
									model.getSerDistrictId(), serDistrictList)%>
										<font
							color="red"> <%=ServletUtility.getErrorMessage("serDistrictId", request)%></font>
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">PAN Card
							No. </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="3" width="473">
						<input type="text" name="panCard" maxlength="30" value="<%=DataUtility.getStringData(model.getPanCard())%>">
							<font
							color="red"> <%=ServletUtility.getErrorMessage("panCard", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" colspan="4" class="subheader" width="656">
						Registered with other organisations
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Name 1 </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="name1" maxlength="50"  value="<%=DataUtility.getStringData(model.getName1())%>">
							<font
							color="red"> <%=ServletUtility.getErrorMessage("name1", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Name 2 </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
						<input type="text" name="name2" maxlength="50" value="<%=DataUtility.getStringData(model.getName2())%>">
							<font
							color="red"> <%=ServletUtility.getErrorMessage("name2", request)%></font>
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Registration
							No.</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="registrationNo1" maxlength="50" value="<%=DataUtility.getStringData(model.getRegistrationNo1())%>">
							<font
							color="red"> <%=ServletUtility.getErrorMessage("registrationNo1", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Registration
							No.</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
						<input type="text" name="registrationNo2" maxlength="50" value="<%=DataUtility.getStringData(model.getRegistrationNo2())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("registrationNo2", request)%></font>
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Country </font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="150">
									<%=HTMLUtility.getList("countryOneId",
					model.getCountryOneId(), countryList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("countryOneId", request)%>
							</font>
					</td>
					
					
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Country </font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="208">
										<%=HTMLUtility.getList("countryTwoId",
					model.getCountryTwoId(), countryList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("countryTwoId", request)%>
							</font>
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">State </font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="150">

							<%=HTMLUtility.getList("stateOneId",
					model.getStateOneId(), stateOneList)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("stateOneId", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">State </font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="208">
		
					<%=HTMLUtility.getList("stateTwoId",
					model.getStateTwoId(), stateTwoList)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("stateTwoId", request)%></font>
					</td>
				</tr>
				<tr style="border-bottom: 2px solid gray;">
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">District</font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="150">
						<%=HTMLUtility.getList("district1Id",
					model.getDistrict1Id(), district1List)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("district1Id", request)%></font>
				
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">District</font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="208">
					
						<%=HTMLUtility.getList("district2Id",
					model.getDistrict2Id(), district2List)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("district2Id", request)%></font>
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Name 3 </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="name3" maxlength="50" value="<%=DataUtility.getStringData(model.getName3())%>">
							<font
							color="red"> <%=ServletUtility.getErrorMessage("name3", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Name 4 </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
						<input type="text" name="name4" maxlength="50" value="<%=DataUtility.getStringData(model.getName4())%>">
							<font
							color="red"> <%=ServletUtility.getErrorMessage("name4", request)%></font>
					</td>
				</tr>

				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Registration
							No.</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="registrationNo3" maxlength="50" value="<%=DataUtility.getStringData(model.getRegistrationNo3())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("registrationNo3", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Registration
							No.</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="208">
						<input type="text" name="registrationNo4" maxlength="50"value="<%=DataUtility.getStringData(model.getRegistrationNo4())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("registrationNo4", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Country </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
												<%=HTMLUtility.getList("countryThreeId",
					model.getCountryThreeId(), countryList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("countryThreeId", request)%>
							</font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Country </font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="208">
											<%=HTMLUtility.getList("country4Id",
					model.getCountry4Id(), countryList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("country4Id", request)%>
							</font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">State </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<%=HTMLUtility.getList("stateThreeId",
					model.getStateThreeId(), stateThreeList)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("stateThreeId", request)%></font>
				
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">State </font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="208">
	
						<%=HTMLUtility.getList("state4Id",
					model.getState4Id(), state4List)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("state4Id", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">District</font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="150">
					
						<%=HTMLUtility.getList("district3Id",
					model.getDistrict3Id(), district3List)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("district3Id", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">District</font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="208">
								<%=HTMLUtility.getList("district4Id",
					model.getDistrict4Id(), district4List)%>
						<font
							color="red"> <%=ServletUtility.getErrorMessage("district4Id", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" colspan="4" class="subheader" height="25" width="656">
						Employer's Information
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Name of Owner/Head * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="3">
						<input type="text" name="ownerName" maxlength="50" size="30" value="<%=DataUtility.getStringData(model.getOwnerName())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerName", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">House / Flat / Door / Block No. </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="3">
						<input type="text" name="ownerHouseFlatDoorBlockNo" maxlength="50" size="30" value="<%=DataUtility.getStringData(model.getOwnerHouseFlatDoorBlockNo())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerHouseFlatDoorBlockNo", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Name of Premises / Building / Village*</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="3">
						<input type="text" name="ownerAddress" maxlength="50" size="30" value="<%=DataUtility.getStringData(model.getOwnerAddress())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerAddress", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Road / Street / Lane</font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="3">
						<input type="text" name="ownerRoadStreetLane" maxlength="50" size="30"  value="<%=DataUtility.getStringData(model.getOwnerRoadStreetLane())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerRoadStreetLane", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Country * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="140">
										<%=HTMLUtility.getList("ownerCountryId",
					model.getOwnerCountryId(),countryList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerCountryId", request)%>
							</font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">State * </font>
					</td>
					<td style="border: 1px solid gray;" colspan="1" width="208">
					
					 					<%=HTMLUtility.getList("ownerStateId",
					model.getOwnerStateId(), ownerStateList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerStateId", request)%>
							</font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">District * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
					 	
					  		<%=HTMLUtility.getList("ownerDistrictId",
					model.getOwnerDistrictId(), ownerDistrictList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerDistrictId", request)%>
							</font>
					  
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">City * </font>
					</td>
					<td style="border: 1px solid gray;" colspan="1" width="208">
					 	<%=HTMLUtility.getList("ownerCityId",
					model.getOwnerCityId(), ownerCityList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerCityId", request)%>
							</font>
					</td>
				</tr>
				
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Area * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
					 	 	<%=HTMLUtility.getList("ownerAreaId",
					model.getOwnerAreaId(), ownerAreaList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerAreaId", request)%>
							</font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Post Office * </font>
					</td>
					<td style="border: 1px solid gray;" colspan="1" width="208">
					  	<%=HTMLUtility.getList("ownerPostOfficeId",
					model.getOwnerPostOfficeId(), ownerPostOfficeList)%>
					<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerPostOfficeId", request)%>
							</font>
					</td>
				</tr>
				
				
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">PIN Code * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="ownerPINCode"  readonly="readonly" id="ownerPINCode" style="width: 140" value="<%=DataUtility.getStringData(model.getOwnerPinCode())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerPINCode", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Phone No.  </font>
					</td>
					<td style="border: 1px solid gray;" colspan="1" width="208">
					    <input type="text" name="ownerCountryCodePhoneNo" maxlength="3" size="3" value="+91" readonly="readonly">
                        <input type="text" name="ownerStdCodePhoneNo" size="5" value="<%=DataUtility.getStringData(model.getOwnerStdCodePhoneNo())%>"> -   
						<input type="text" name="ownerPhoneNo"  size="10" value="<%=DataUtility.getStringData(model.getOwnerPhoneNo())%>">

					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Mobile No.* </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="ownerMobileNo"  value="<%=DataUtility.getStringData(model.getOwnerMobileNo())%>">
								<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerMobileNo", request)%></font>
					
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">e-mail * </font>
					</td>
					<td style="border: 1px solid gray;" colspan="1" width="208">
						<input type="text" name="ownerEmail" maxlength="30" value="<%=DataUtility.getStringData(model.getOwnerEmail())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("ownerEmail", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" colspan="4" class="subheader" height="25" width="656">
						Contact Person's Information
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">Name * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="1" width="150">
						<input type="text" name="contactPersonName" maxlength="60" value="<%=DataUtility.getStringData(model.getContactPersonName())%>" >
						<font
							color="red"> <%=ServletUtility.getErrorMessage("contactPersonName", request)%></font>
					</td>
					<td style="border: 1px solid gray;" height="25" width="113">
						<font face="Verdana" size="2" class="label">Mobile
							No. * </font>
					</td>
					<td style="border: 1px solid gray;" colspan="1" width="208">
						<input type="text" name="contactPersonMobileNo" maxlength="10" value="<%=DataUtility.getStringData(model.getContactPersonMobileNo())%>" >
					<font
							color="red"> <%=ServletUtility.getErrorMessage("contactPersonMobileNo", request)%></font>
					</td>
				</tr>
				<tr>
					<td style="border: 1px solid gray;" height="25" width="182">
						<font face="Verdana" size="2" class="label">e-mail * </font>
					</td>
					<td style="border: 1px solid gray;" height="25" colspan="3" width="473">
						<input type="text" name="contactPersonEmail" maxlength="30" value="<%=DataUtility.getStringData(model.getContactPersonEmail())%>">
						<font
							color="red"> <%=ServletUtility.getErrorMessage("contactPersonEmail", request)%></font>
					</td>
				</tr>
			  <tr>

  </tr>
</table>
<div id="buttonDiv">
<p align="center">
 <%=HTMLUtility.getSubmitButton(BaseCtl.OP_SAVE,
					AccessUtility.canAdd(request), request)%>
</p>
</div>
</form>
</td>
</tr>
</table>
<table style="margin-right:-760px;margin-top:-1540px;">

		<%
			String imageName = model.getPhoto();
			if (imageName != null && imageName.trim().length() > 0) {
				imageName = ORSView.APP_CONTEXT + "/" + AppRole.TRAINING_PROVIDER + "/"
						+ imageName;
			} else {
				imageName = ORSView.IMG_FOLDER + "/logoicon.png";
			}
		%>
<tr>	<td >
	<br>

	<img src="<%=imageName%>" height="100px" width="100px" style="margin-top:46px;">
			<form method="POST" enctype="multipart/form-data"
				action="<%=ORSView.FILE_UPLOAD_CTL%>">
				<input type="hidden" name="id" value="<%=model.getId()%>"> <input
					type="hidden" name="type" value="<%=AppRole.TRAINING_PROVIDER%>">
				<input type="hidden" name="page"
					value="<%=ORSView.COLLEGE_CTL%>?id=<%=model.getId()%>"><br />
					<% if(model.getId()>0) { %>
				<input type="file" class="button" style="margin-left: -53px;" name="upfile">
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
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

</body>
</html>



	
