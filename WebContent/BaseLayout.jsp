<%@page import="in.co.sunrays.wsx.model.CollegeModel"%>
<%@page import="java.io.Console"%>
<%@page import="in.co.sunrays.util.MenuBuilder"%>
<%@page import="in.co.sunrays.common.model.UserModel"%>
<%@page import="in.co.sunrays.util.PropertyReader"%>
<%@page import="in.co.sunrays.common.model.RoleModel"%>
<%@page import="in.co.sunrays.common.controller.LoginCtl"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%
	UserModel userModel = ServletUtility.getUserModel(request);
	String collegeName = "";
	String organization = "";
	long roleId = ServletUtility.getRole(request);

	String welcomeMsg = "Hi, Guest ";
	String role = "";

	if (ServletUtility.isLoggedIn(request)) {
		RoleModel roleModel = new RoleModel().findByPK(roleId);
		welcomeMsg = "Hi, " + userModel.getFirstName() + " ("
				+ roleModel.getName() + ")";
		role = roleModel.getName();
		
		
		if(userModel.getRoleId()==5){
			organization = userModel.getOrganization();	
			if (organization == null){
				organization ="";
			}
		}else{
			collegeName = userModel.getCollegeName();
			if (collegeName == null){
				collegeName ="";
			}
		}
		
	}
%>


<html>
<head>

<title>Welcome to Security Guard Exchange</title>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<META Http-Equiv="Cache-Control" Content="no-cache">
<META Http-Equiv="Pragma" Content="no-cache">
<META Http-Equiv="Expires" Content="0">
<meta HTTP-EQUIV="Page-Exit" CONTENT="blendTrans(duration=1.9)">
<meta HTTP-EQUIV="Page-Enter" CONTENT="blendTrans(duration=1.9)">

<link rel="shortcut icon" href="images/NewWelcomePage/logoheader.png" type="image/x-icon">
<link rel="icon" href="images/NewWelcomePage/logoheader.png" type="image/x-icon">

<link href="<%=ORSView.CSS_FOLDER%>/main.css" rel="stylesheet"
	type="text/css" />
<!-- 
<link href="http://217.172.182.24:8181/Sgx1/css/nav.css"
	rel="stylesheet" type="text/css" />
<link href="http://217.172.182.24:8181/Sgx1/css/homePage.css"
	rel="stylesheet" type="text/css">
	
	 -->

<link href="<%=ORSView.CSS_FOLDER%>/nav.css" rel="stylesheet"
	type="text/css" />
<link href="<%=ORSView.CSS_FOLDER%>/homePage.css" rel="stylesheet"
	type="text/css" />

<link
	href="http://104.238.81.199:8080/Sgx1/css/BranchDepartmentFunctionality.css"
	rel="stylesheet" type="text/css" />
<link href="http://104.238.81.199:8080/Sgx1/css/Agreement.css"
	rel="stylesheet" type="text/css" />
<link href="http://104.238.81.199:8080/Sgx1/css/LetterHead.css"
	rel="stylesheet" type="text/css" />
<link href="http://104.238.81.199:8080/Sgx1/css/Bill.css"
	rel="stylesheet" type="text/css" />

<link rel="stylesheet" href="js/photo_tooltip/photo_tooltip.css"
	type="text/css">

<link rel="stylesheet" type="text/css"
	href="<%=ORSView.CSS_FOLDER%>/jqueryslidemenu.css" />

<script type="text/javascript" src="http://104.238.81.199:8080/Sgx1/newMenus/jquery.min.js"></script>
<script type="text/javascript" src="<%=ORSView.JS_FOLDER%>/jqueryslidemenu.js"></script>


<script type='text/javascript' src='<%=ORSView.JS_FOLDER%>/calendar.js'></script>

<SCRIPT LANGUAGE="JavaScript"
	src="<%=ORSView.JS_FOLDER%>/validations.js"></SCRIPT>
<SCRIPT LANGUAGE="JavaScript"
	src="<%=ORSView.JS_FOLDER%>/CommonValidation/validation.js"></SCRIPT>
<SCRIPT LANGUAGE="JavaScript" src="<%=ORSView.JS_FOLDER%>/mz-packed.js"></SCRIPT>

<script src="<%=ORSView.JS_FOLDER%>/sorttable.js"></script>
<script src="<%=ORSView.JS_FOLDER%>/branch.js"></script>
<script src="<%=ORSView.JS_FOLDER%>/BranchDepartmentFunctionality.js"></script>
<script src="<%=ORSView.JS_FOLDER%>/BranchDelegate.js"></script>
<script
	src="<%=ORSView.JS_FOLDER%>/CountryStateDistrictCityAreaPostofficePincode.js"></script>
<script src="<%=ORSView.JS_FOLDER%>/GetNewCaptchaImage.js"></script>
<script src="<%=ORSView.JS_FOLDER%>/jquery-1.3.2-vsdoc2.js"></script>
<script src="<%=ORSView.JS_FOLDER%>/EmailAndPhoneValidation.js"></script>
<script src="<%=ORSView.JS_FOLDER%>/Agreement.js"></script>
<script src="<%=ORSView.JS_FOLDER%>/popup.js"></script>
<script src="<%=ORSView.JS_FOLDER%>/compareDatesAndTime.js"></script>

<script type="text/javascript"
	src="<%=ORSView.JS_FOLDER%>/AjaxUtility/ajax.js" />

<!-- Script for Photo tooltip on mouse over : Begin -->

<script src="<%=ORSView.JS_FOLDER%>/photo_tooltip/ga.js"
	type="text/javascript"></script>
<script type="text/javascript"
	src="<%=ORSView.JS_FOLDER%>/photo_tooltip/mootools.js"></script>
<script type="text/javascript"
	src="<%=ORSView.JS_FOLDER%>/photo_tooltip/photo_tooltip.js"></script>

<!-- Script for Photo tooltip on mouse over : End -->
<script src="<%=ORSView.JS_FOLDER%>/Bill.js"></script>

<style type="text/css">
.st-title {
	font-family: 'Helvetica Neue', Helvetica, Arial;
	font-size: 28px;
	font-weight: 600;
	line-height: 32px;
	word-spacing: 0px;
	background: 0% 0%;
	display: block;
	color: #333333;
}

.st-subtitle {
	font-size: 20px;
	font-weight: 600;
}

.st-error-header {
	color: red;
	font-size: 16px;
}

.st-error {
	color: red;
	font-size: 14px;
}

.error-header {
	color: red;
	font-size: 16px;
}

.error {
	color: red;
	font-size: 14px;
}

.st-success-header {
	color: green;
	font-size: 16px;
}

.st-success {
	color: green;
	font-size: 146px;
}

.success-header {
	color: green;
	font-size: 16px;
}

.success {
	color: green;
	font-size: 146px;
}
</style>

</head>

<body>

	<table style="border: none;" width="100%" border="0" cellspacing="0"
		cellpadding="0">

		<tr>
			<td style="border: none;">


				<table style="border: none;" width="988" border="0" align="center"
					cellpadding="0" cellspacing="0">
					<tr>
						<td style="border: none;"><img
							src="<%=ORSView.IMG_FOLDER%>/NewWelcomePage/wse.jpg" width="988"
							height="35" /></td>
					</tr>
					<tr valign="top">
						<td
							style="background-image: url(<%=ORSView.IMG_FOLDER%>/NewWelcomePage/bg_bene.jpg); background-repeat: repeat-y; border: none;">
							<table width="988" cellpadding="0" cellspacing="0">
								<tr>
									<td
										style="background-image: url(<%=ORSView.IMG_FOLDER%>/NewWelcomePage/bene_inside_bg.jpg); background-repeat: no-repeat; border: none;">
										<table width="988" border="0" cellspacing="0" cellpadding="0"
											style="border: none;">
											<tr>
												<td style="border: none;" height="34px"></td>
											</tr>
											<tr>
												<td style="border: none;">
													<table width="96%" border="0" align="center"
														cellpadding="0" cellspacing="0">
														<tr>
														<% if(userModel.getRoleId()==5) {%>
														
														<td style="border: none;" width="33%" class="link_bene">
																<%=organization%>
															</td>
														<%}else { %>
										
															<td style="border: none;" width="33%" class="link_bene">
																<%=collegeName%>
															</td>
										<%} %>					
															
															<td style="border: none;" width="33%">
																<div align="center" class="link_bene">
																	<%=welcomeMsg%>
																</div>
															</td>
															<td style="border: none;" width="33%">
																<div align="right" class="link_bene">

																	<a href="/SGX/LoginCtl" style="color: white;">Log
																		out</a>

																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
											<tr>
												<td style="border: none;" height="15"></td>
											</tr>
											<tr>
												<td></td>
											</tr>
											<tr>
												<td align="center" style="border: none;">

													<table style="border: none;" width="964" border="0"
														align="center" cellpadding="0" cellspacing="0">
														<tr>
															<td style="border: none;">
																<div id="myslidemenu" class="jqueryslidemenu">
															<jsp:include page="Menu.jsp" />
																
																	<%--MenuBuilder.getMenu(roleId, MenuBuilder.VERTICAL)--%>
																</div>
															</td>
														</tr>
													</table> <!--Form will go here  -->

													<table border="10" width="95%">
														<tr>
															<td>
																<%
																	String bodyPage = null;
																	bodyPage = (String) request.getAttribute("bodyPage");
																%> <jsp:include page="<%=bodyPage%>"></jsp:include>
															</td>
														<tr>
													</table>




												</td>
											</tr>
											<tr valign="top">
												<td height="400" style="border: none;">
													<meta http-equiv="content-type"
														content="text/html; charset=UTF-8">
													<table width="100%" height="100%" border="0"
														cellpadding="0" cellspacing="0" bordercolor="#111111"
														id="AutoNumber1"
														style="border-collapse: collapse; border: none">
														<tr height="40%" style="border: none; vertical-align: top">
															<td style="border: none;"></td>
														</tr>
														<tr height="60%"
															style="border: none; vertical-align: top;">
															<td style="border: none;"></td>
														</tr>

													</table>


												</td>
											</tr>
											<tr>
												<td style="border: none;" bgcolor="#dedede">

													<table style="border: none;" width="980" border="0"
														align="center" cellpadding="0" cellspacing="0" height="48">
														<tr>
															<td style="border: none;"><span class="text_footer">&#169
																	Copyright 2010-2020 WSX-SGX. All rights reserved.</span></td>
														</tr>
													</table>

												</td>
											</tr>
										</table>
</body>
</html>
