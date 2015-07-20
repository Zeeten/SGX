<%@page import="in.co.sunrays.common.model.UserModel"%>
<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.UserCtl"%>
<%@page import="in.co.sunrays.wsx.model.CollegeModel"%>
<%@page import="java.util.List"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="java.util.HashMap"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<%@page import="in.co.sunrays.util.AccessUtility"%>
<%@page import="in.co.sunrays.common.controller.BaseCtl"%>

<jsp:useBean id="model" class="in.co.sunrays.common.model.UserModel"
	scope="request" />

<jsp:useBean id="roleList" class="java.util.ArrayList" scope="request" />

<jsp:useBean id="collegeList" class="java.util.ArrayList"
	scope="request" />
	
	<jsp:useBean id="organizationList" class="java.util.ArrayList"
	scope="request" />


<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>
	<%
	UserModel userModel = ServletUtility.getUserModel(request);
%>
<form action="<%=ORSView.USER_CTL%>" method="post">
<center>
<br>
			<p>
<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">User Registration Form</font>
</p>
	<input type="hidden" name="id" value="<%=model.getId()%>"> 

	
	
	
	<input
		type="hidden" name="createdBy" value="<%=model.getCreatedBy()%>">
	<input type="hidden" name="modifiedBy"
		value="<%=model.getModifiedBy()%>"> <input type="hidden"
		name="createdDatetime"
		value="<%=DataUtility.getTimestamp(model.getCreatedDatetime())%>">
	<input type="hidden" name="modifiedDatetime"
		value="<%=DataUtility.getTimestamp(model.getModifiedDatetime())%>">
<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="90%">
 <tr>
    <td width="100%" colspan="2" class="subheader" style="border: 1px solid gray;">Personal Details</td>
  </tr>
		<tr>
			 <td  class="label" width="27%" height="22" style="border: 1px solid gray;">First Name*</td>
			<td   height="22" style="border: 1px solid gray;"><input type="text" name="firstName" size="20"
				value="<%=DataUtility.getStringData(model.getFirstName())%>"><font
				color="red"> <%=ServletUtility.getErrorMessage("firstName", request)%></font></td>
		</tr>
		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Last Name*</td>
			<td   height="22" style="border: 1px solid gray;"><input type="text" name="lastName" size="20"
				value="<%=DataUtility.getStringData(model.getLastName())%>"><font
				color="red"> <%=ServletUtility.getErrorMessage("lastName", request)%></font></td>
		</tr>
		<% if(userModel.getRoleId()!=9) {%>
		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Organization Name*</td>

			<td  height="22" style="border: 1px solid gray;"><%=HTMLUtility.getList("organizationIdSel", model.getOrganizationId()+"",
					organizationList,true)%><input type="hidden" name="organizationId"
							value="<%=model.getOrganizationId()%>">

		</tr>
		<%}else { %>
		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Organization Name*</td>

			<td  height="22" style="border: 1px solid gray;"><%=HTMLUtility.getList("organizationId",
					model.getOrganizationId(), organizationList)%><font color="red"><%=ServletUtility.getErrorMessage("organization", request)%></font></td>

		</tr>
		<%} %>
		
		<% if(userModel.getRoleId()!=9) {%>
		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Training Institute*</td>

			<td  height="22" style="border: 1px solid gray;"><%=HTMLUtility.getList("collegeId", model.getCollegeId()+"",
					collegeList)%><input type="hidden" name="collegeId"
							value="<%=model.getCollegeId()%>"><font color="red"><%=ServletUtility.getErrorMessage("collegeName", request)%></font></td>

		</tr>
		<%} %>
		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">LoginId*</td>
			<td   height="22" style="border: 1px solid gray;"><input type="text" name="login" size="20"
				value="<%=DataUtility.getStringData(model.getLogin())%>"
				<%=(model.getId() > 0) ? "readonly" : ""%>><font color="red">
					<%=ServletUtility.getErrorMessage("login", request)%></font></td>
		</tr>
		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Password*</td>
			<td   height="22" style="border: 1px solid gray;"><input type="password" name="password" size="20"
				value="<%=DataUtility.getStringData(model.getPassword())%>"><font
				color="red"> <%=ServletUtility.getErrorMessage("password", request)%></font></td>
		</tr>
		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Confirm Password*</td>
			<td   height="22" style="border: 1px solid gray;"><input type="password" name="confirmPassword" size="20"
				value="<%=DataUtility.getStringData(model.getPassword())%>"><font
				color="red"> <%=ServletUtility
					.getErrorMessage("confirmPassword", request)%></font></td>
		</tr>
		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Gender*</td>
			<td   height="22" style="border: 1px solid gray;">
				<%
					HashMap map = new HashMap();
				map.put("", "--Select--");
				map.put("M", "Male");
					map.put("F", "Female");

					String htmlList = HTMLUtility.getList("gender", model.getGender(),
							map);
				%> <%=htmlList%> <font color="red"><%=ServletUtility.getErrorMessage("gender", request)%></font></td>
		</tr>
		<tr>
		<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Role*</td>
			<td   height="22" style="border: 1px solid gray;">
			<%=HTMLUtility.getList("roleId",
					String.valueOf(model.getRoleId()), roleList)%><font color="red"><%=ServletUtility.getErrorMessage("roleId", request)%></font>
			</td>
		</tr>

		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Date Of Birth (mm/dd/yyyy)*</td>
			<td  height="22" style="border: 1px solid gray;"><input type="text" name="dob" readonly="readonly" size="15"
				value="<%=DataUtility.getDateString(model.getDob())%>"> <a
				href="javascript:getCalendar(document.forms[0].dob);"> <img
					src="<%=ORSView.IMG_FOLDER%>/cal.jpg" width="16" height="15"
					border="0" alt="Calender">
			</a><font color="red"> <%=ServletUtility.getErrorMessage("dob", request)%></font></td>
		</tr>

	</table>
	<p align="center">
	<%=HTMLUtility.getSubmitButton(BaseCtl.OP_SAVE,
					AccessUtility.canAdd(request), request)%>
<input type="submit"  name="operation" value="<%=UserCtl.OP_CANCEL%>" class="button">
</p>
	</center>
</form>


