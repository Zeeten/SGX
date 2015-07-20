<%@page import="in.co.sunrays.wsx.model.AppRole"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>
<%@page import="in.co.sunrays.wsx.model.PrincipalEmployerModel"%>
<%@page import="in.co.sunrays.wsx.model.TrainingModel"%>
<%@page import="java.util.List"%>
<%@page import="in.co.sunrays.wsx.controller.PrincipalEmployerCtl"%>
<%@page import="java.util.HashMap"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>
<%@page import="java.util.LinkedHashMap"%>

<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="<%=ORSView.JS_FOLDER%>/principalemployerdropdown.js"></script>
<%-- <script src="<%=ORSView.JS_FOLDER%>/principalemployervalidation.js"></script> --%>


<jsp:useBean id="model" class="in.co.sunrays.wsx.model.PrincipalEmployerModel"
	scope="request"></jsp:useBean>
	
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
		
	<jsp:useBean id="industryList" class="java.util.ArrayList"
	scope="request" />
			
		
		
<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>

<center>
<br>
			<p>
<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Principal Employer's Registration Form</font>
</p>
	
	<tr>
		<td>
			<form name = "form"  action="<%=ORSView.PRINCIPAL_EMPLOYER_CTL%>" method="POST"  >
				<input type="hidden" name="id" value="<%=model.getId()%>">
<center>
		<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="90%">
  <tr>
    <td width="100%" colspan="4" class="subheader" style="border: 1px solid gray;">Organization Details
    
    </td>
  </tr>
  
 <tr>
                     <td width="27%" class="label" height="22" style="border: 1px solid gray;">Name of Registrant/Owner*</td>
                               <td width="27%" style="border: 1px solid gray;"><input
								type="text" name="name"
								value="<%=DataUtility.getStringData(model.getName())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("name", request)%></font></td>
    
 
                 <td width="21%" class="label" height="22" style="border: 1px solid gray;">Designation*</td>
                    <td width="25%" style="border: 1px solid gray;"><input
								type="text" name="designation"
								value="<%=DataUtility.getStringData(model.getDesignation())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("designation", request)%></font></td>
								</tr>

								 <tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">Company / Organization*</td>
    <td width="27%" style="border: 1px solid gray;"><input
								type="text" name="organization"
								value="<%=DataUtility.getStringData(model.getOrganization())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("organization", request)%></font></td>
								
							<td width="21%" class="label" height="22" style="border: 1px solid gray;"> Industry*</td>	
								
								 <td width="25%" style="border: 1px solid gray;">
								<%=HTMLUtility.getList("industry",
					model.getIndustryId(), industryList)%>
					<font color="red"> <%=ServletUtility.getErrorMessage("industry",
					request)%></font></td>
					
					</tr>
					<tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">Company Type*
    </td>			
		<td width="23%" colspan="3" style="border: 1px solid gray;"><input
								type="text" name="companyType"
								value="<%=DataUtility.getStringData(model.getCompanyType())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("companyType", request)%></font></td>
				</tr>						
							<tr>
    <td width="100%" colspan="4" class="subheader" style="border: 1px solid gray;">Address Details</td>
  </tr>
  <tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">
   House / Flat / Door / Block No.
    </td>
    <td width="27%" style="border: 1px solid gray;" colspan="3"><input
								type="text" name="blockNo" size = "35"
								value="<%=DataUtility.getStringData(model.getBlockNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("blockNo", request)%></font></td>
    	
								</tr>
								
								<tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">
   Name of Premises / Building / Village*
    </td>
    <td width="27%" style="border: 1px solid gray;" colspan="3">
   <input
								type="text" name="building" size = "35"
								value="<%=DataUtility.getStringData(model.getBuilding())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("building", request)%></font></td>

  </tr>
	<tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">
   Road / Street / Lane
    </td>
    <td width="27%" style="border: 1px solid gray;" colspan="3">
    <input
								type="text" name="road" size = "35"
								value="<%=DataUtility.getStringData(model.getRoad())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("road", request)%></font></td>
  </tr>		
  
  <tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">Country*
    </td>
    <td width="27%" style="border: 1px solid gray;">
    <%=HTMLUtility.getList("country",
					model.getCountryId(), countryList)%>
					<font color="red"> <%=ServletUtility.getErrorMessage("country",
					request)%></font>
					
							</td>
  					<td width="21%" class="label" height="22" style="border: 1px solid gray;">State* </td>
    <td width="25%" style="border: 1px solid gray;">
    <%=HTMLUtility.getList("state",
					model.getStateId(), stateList)%>
					<font color="red"> <%=ServletUtility.getErrorMessage("state",
					request)%></font>
					
					
							</td>
				</tr>
						<tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">District*
    </td>
    <td width="27%" style="border: 1px solid gray;"><%=HTMLUtility.getList("district",
					model.getDistrictId(), districtList)%>
					
					<font color="red"> <%=ServletUtility.getErrorMessage("district",
					request)%></font>
							</td>
						<td width="21%" class="label" height="22" style="border: 1px solid gray;">City *</td>
    <td width="25%" style="border: 1px solid gray;">	<%=HTMLUtility.getList("city",
					model.getCityId(), cityList)%>
					<font color="red"> <%=ServletUtility.getErrorMessage("city",
					request)%></font>
							</td>
							
				</tr>
		<tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">Area*</td>
    <td width="27%" style="border: 1px solid gray;"><%=HTMLUtility.getList("area",
									model.getAreaId(), areaList)%><font color="red"> <%=ServletUtility.getErrorMessage("area",
					request)%></font>
							</td>		
				<td width="21%" class="label" height="22" style="border: 1px solid gray;">Post Office*</td>
    <td width="25%" style="border: 1px solid gray;"><%=HTMLUtility.getList("postOffice",
					model.getPostOfficeId(), postOfficeList)%>
					<font color="red"> <%=ServletUtility.getErrorMessage("postOffice",
					request)%></font>
    </td>
    </tr>
    
    <tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">PIN Code*</td>
    <td width="27%" style="border: 1px solid gray;"><input type="text" name="pinCode" id="pinCode"  size = "10"
							value="<%=DataUtility.getStringData(model.getPinCodeId())%>"></input><font
							color="red"><%=ServletUtility.getErrorMessage("pinCode", request)%></font></td>
						
								<td width="21%" class="label" height="22" style="border: 1px solid gray;">Phone No.*</td>
    <td width="25%" style="border: 1px solid gray;"> <input type="text" name="countryCodePhoneNo" size="3" value="+91" readonly="readonly">
    <input type="text" name="stdCodePhoneNo"  maxlength="5" size="4"
								value="<%=DataUtility.getStringData(model.getStdCodePhoneNo())%>"></input> -
    <input type="text" name="phoneNo"  size = "8"maxlength="8" 
								value="<%=DataUtility.getStringData(model.getPhoneNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("phoneNo",
					request)%></font>
							</td>
							</tr>
							<tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">Mobile No.*</td>
    <td width="27%" style="border: 1px solid gray;"><input type="text" name="mobileNo" 
								value="<%=DataUtility.getStringData(model.getMobileNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("mobileNo", request)%></font>
							</td>
							<td width="21%" class="label" height="22" style="border: 1px solid gray;">e-mail*</td>
    <td width="25%" style="border: 1px solid gray;"><input type="text" name="emailId"
								value="<%=DataUtility.getStringData(model.getEmailId())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("emailId", request)%></font>
							</td>
							
						</tr>
						<tr>
  <td width="100%" colspan="4" class="subheader" style="border: 1px solid gray;">Shop &  Establishment
  </td>
  </tr>
   <tr>
  <td width="24%" class="label" height="22" style="border: 1px solid gray;">Shop & Establishment License No.</td>
    <td width="30%" style="border: 1px solid gray;"><input type="text" name="shopNo" maxlength="20" 
								value="<%=DataUtility.getStringData(model.getShopNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("shopNo", request)%></font>
							</td>
							<td width="21%" class="label" height="22" style="border: 1px solid gray;">Issuing Authority</td>
    <td width="25%" style="border: 1px solid gray;"><input type="text" name="shopIssuingAuthority" maxlength="20" 
								value="<%=DataUtility.getStringData(model.getShopIssuingAuthority())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("shopIssuingAuthority", request)%></font>
							</td>
						</tr>
						
					<tr>
  <td width="24%" class="label" height="22" style="border: 1px solid gray;">Valid</td>
    <td width="30%" style="border: 1px solid gray;"><font class="label">From</font> 
    <input type="text" name="shopFrom" readonly="readonly" size ="6"
							value="<%=DataUtility.getDateString(model.getShopFrom())%>"> <a
							href="javascript:getCalendar(document.forms[0].shopFrom);"> <img
								src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
								border="0" alt="Calender">
						</a><font color="red"> <%=ServletUtility.getErrorMessage("shopFrom", request)%></font>Till
   <input type="text" name="shopTill" readonly="readonly" size ="9"
							value="<%=DataUtility.getDateString(model.getShopFrom())%>"> <a
							href="javascript:getCalendar(document.forms[0].shopTill);"> <img
								src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
								border="0" alt="Calender">
						</a><font color="red"> <%=ServletUtility.getErrorMessage("shopTill", request)%></font>
    </td>
    <td width="21%" class="label" height="22" style="border: 1px solid gray;">Place of Issue</td>
    <td width="25%" style="border: 1px solid gray;"><input type="text" name="shopPlaceOfIssue" maxlength="20" 
								value="<%=DataUtility.getStringData(model.getShopPlaceOfIssue())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("shopPlaceOfIssue", request)%></font>
							</td>
					</tr>	
					
					<tr>
    <td width="100%" colspan="4" class="subheader" style="border: 1px solid gray;">Govt. Statutory Compliances - Licenses</td>
  </tr>
   <tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">Labour Dept. Regn. No.
    </td>
    <td width="27%" style="border: 1px solid gray;"><input type="text" name="govtRegiNo" maxlength="20" 
								value="<%=DataUtility.getStringData(model.getGovtRegiNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("govtRegiNo", request)%></font>
							</td>
							
    <td width="21%" class="label" height="22" style="border: 1px solid gray;">PAN Card No.
    </td>
    <td width="25%" style="border: 1px solid gray;"><input type="text" name="govtPanCardNo" maxlength="20" 
								value="<%=DataUtility.getStringData(model.getGovtPanCardNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("govtPanCardNo", request)%></font>
							</td>
  </tr>
  <tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">EPF No.
    </td>
    <td width="27%" style="border: 1px solid gray;"><input type="text" name="govtEpfNo" maxlength="20" 
								value="<%=DataUtility.getStringData(model.getGovtEpfNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("govtEpfNo", request)%></font>
							</td>
    <td width="21%" class="label" height="22" style="border: 1px solid gray;">ESIC No.
    </td>
    <td width="25%" style="border: 1px solid gray;"><input type="text" name="govtEsicNo" maxlength="20" 
								value="<%=DataUtility.getStringData(model.getGovtEsicNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("govtEsicNo", request)%></font>
							</td>
  </tr>
						
	<tr>
    <td width="100%" colspan="4" class="subheader" style="border: 1px solid gray;">Contact Person's Information</td>
  </tr>
  <tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">Contact Person's Name*</td>
    <td width="27%" style="border: 1px solid gray;"><input type="text" name="personName" 
								value="<%=DataUtility.getStringData(model.getPersonName())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("personName", request)%></font>
							</td>
							
    <td width="21%" class="label" height="22" style="border: 1px solid gray;">Mobile No.*</td>
    <td width="25%" style="border: 1px solid gray;"><input type="text" name="personMobileNo" 
								value="<%=DataUtility.getStringData(model.getPersonMobileNo())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("personMobileNo", request)%></font>
							</td>
  </tr>
  <tr>
    <td width="27%" class="label" height="22" style="border: 1px solid gray;">e-mail*</td>
    <td width="73%" colspan="3" style="border: 1px solid gray;"><input type="text" name="personEmailId" 
								value="<%=DataUtility.getStringData(model.getPersonEmailId())%>"></input><font
								color="red"> <%=ServletUtility.getErrorMessage("personEmailId", request)%></font>
							</td>
  </tr>	
  
  </table>
  <p align="center">
				 <%=HTMLUtility.getSubmitButton(BaseCtl.OP_SAVE,
					AccessUtility.canAdd(request), request)%>
				</p>
			</form>
  </td>
  </tr>
  </center>
  
  
  				
							