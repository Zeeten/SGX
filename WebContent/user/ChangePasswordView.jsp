<%@page import="in.co.sunrays.wsx.controller.ORSView"%>
<%@page import="in.co.sunrays.common.controller.ChangePasswordCtl"%>
<%@page import="in.co.sunrays.util.DataUtility"%>
<%@page import="in.co.sunrays.util.HTMLUtility"%>
<%@page import="in.co.sunrays.util.ServletUtility"%>
<jsp:useBean id="model" class="in.co.sunrays.common.model.UserModel"
	scope="request"></jsp:useBean>

<%=HTMLUtility.getSuccessMessage(request)%>
<%=HTMLUtility.getErrorMessage(request)%>


<form action="<%=ORSView.CHANGE_PASSWORD_CTL%>" method="POST">

<center>
<br>
			<p>
<font class="textPMWithOutBorderCommonCenterRedBoldUnderline">Change Password</font>
</p>
	<input type="hidden" name="id" value="<%=model.getId()%>">

<table border="1" cellspacing="0" style="border-collapse: collapse;border: 1px solid gray;" width="90%">

		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Old Password*</th>
				<td   height="22" style="border: 1px solid gray;"><input type="password" name="oldPassword"
				value=<%=DataUtility
					.getString(request.getParameter("oldPassword") == null ? ""
							: DataUtility.getString(request
									.getParameter("oldPassword")))%>><font
				color="red"> <%=ServletUtility.getErrorMessage("oldPassword", request)%></font></td>
		</tr>

		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">New Password*</td>
				<td   height="22" style="border: 1px solid gray;"><input type="password" name="newPassword"
				value=<%=DataUtility
					.getString(request.getParameter("newPassword") == null ? ""
							: DataUtility.getString(request
									.getParameter("newPassword")))%>><font
				color="red"> <%=ServletUtility.getErrorMessage("newPassword", request)%></font></td>
		</tr>

		<tr>
			<td  class="label" width="27%" height="22" style="border: 1px solid gray;">Confirm Password*</td>
				<td   height="22" style="border: 1px solid gray;"><input type="password" name="confirmPassword"
				value=<%=DataUtility.getString(request
					.getParameter("confirmPassword") == null ? "" : DataUtility
					.getString(request.getParameter("confirmPassword")))%>><font
				color="red"> <%=ServletUtility
					.getErrorMessage("confirmPassword", request)%></font></td>
		</tr>

	</table>
	<p align="center">
	<input type="submit" name="operation" class="button"
				value="<%=ChangePasswordCtl.OP_SAVE%>"> &nbsp;<input
				type="submit" name="operation" class="button"
				value="<%=ChangePasswordCtl.OP_CHANGE_MY_PROFILE%>">
	</p>
	</center>
</form>